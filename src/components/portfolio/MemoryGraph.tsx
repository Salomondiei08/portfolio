"use client";

import { useEffect, useRef } from "react";

/**
 * "Fig. 1" on the home page: an agent's episodic memory forming over time.
 *
 * Episodes (dots) appear session by session and link to nearby episodes
 * from the same session. Every few seconds a new episode "recalls" an older
 * one from a previous session: the path lights up in the accent colour and a
 * pulse travels along it. That recall is the whole research idea in one
 * picture, which is why it is the only animated element on the page.
 *
 * Accessibility and cost:
 * - Purely decorative (aria-hidden); the caption describes it in text.
 * - prefers-reduced-motion renders one static, fully formed frame.
 * - Pauses when scrolled off-screen or when the tab is hidden.
 * - Colours are read from CSS variables, so it follows the theme toggle.
 */

type Node = {
  x: number; // 0..1 in graph space
  y: number;
  session: number;
  bornAt: number; // ms since start
};

type Edge = { a: number; b: number };

type Recall = { from: number; to: number; startedAt: number };

const SESSIONS = 4;
const NODES_PER_SESSION = 9;
const BIRTH_INTERVAL = 260; // ms between new episodes
const RECALL_EVERY = 2600; // ms between recall events
const RECALL_DURATION = 1900;

/** Small deterministic PRNG so the figure looks the same on every visit. */
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Lay out episodes in loose clusters, one cluster per session, left to right. */
function buildGraph() {
  const rand = mulberry32(7);
  const nodes: Node[] = [];
  const centres = [
    { x: 0.2, y: 0.62 },
    { x: 0.42, y: 0.3 },
    { x: 0.62, y: 0.68 },
    { x: 0.83, y: 0.36 },
  ];

  for (let s = 0; s < SESSIONS; s++) {
    for (let i = 0; i < NODES_PER_SESSION; i++) {
      // Rejection sampling keeps dots from overlapping
      for (let attempt = 0; attempt < 40; attempt++) {
        const angle = rand() * Math.PI * 2;
        const radius = Math.sqrt(rand()) * 0.15;
        const x = centres[s].x + Math.cos(angle) * radius;
        const y = centres[s].y + Math.sin(angle) * radius * 1.25;
        const tooClose = nodes.some((n) => Math.hypot(n.x - x, n.y - y) < 0.045);
        if (!tooClose || attempt === 39) {
          nodes.push({ x, y, session: s, bornAt: (s * NODES_PER_SESSION + i) * BIRTH_INTERVAL });
          break;
        }
      }
    }
  }

  // Each episode links to its two nearest earlier neighbours in the same session
  const edges: Edge[] = [];
  nodes.forEach((node, index) => {
    const earlier = nodes
      .map((other, j) => ({ j, d: Math.hypot(other.x - node.x, other.y - node.y) }))
      .filter(({ j }) => j < index && nodes[j].session === node.session)
      .sort((p, q) => p.d - q.d)
      .slice(0, 2);
    earlier.forEach(({ j }) => edges.push({ a: j, b: index }));
  });

  return { nodes, edges, rand };
}

function readColors(el: HTMLElement) {
  const styles = getComputedStyle(el);
  return {
    fg: styles.getPropertyValue("--foreground").trim() || "#fafafa",
    muted: styles.getPropertyValue("--muted-foreground").trim() || "#a3a3ab",
    accent: styles.getPropertyValue("--primary").trim() || "#4ade80",
    border: styles.getPropertyValue("--border").trim() || "#222226",
    card: styles.getPropertyValue("--card").trim() || "#111113",
  };
}

/** Convert #rrggbb to rgba() so we can vary opacity per element. */
function withAlpha(hex: string, alpha: number) {
  const m = hex.replace("#", "");
  if (m.length !== 6) return hex;
  const r = parseInt(m.slice(0, 2), 16);
  const g = parseInt(m.slice(2, 4), 16);
  const b = parseInt(m.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const easeOut = (t: number) => 1 - Math.pow(1 - Math.min(Math.max(t, 0), 1), 3);

export function MemoryGraph({ className = "" }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { nodes, edges, rand } = buildGraph();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let colors = readColors(document.documentElement);
    let width = 0;
    let height = 0;
    let frame = 0;
    let visible = true;
    let start = performance.now();
    const fullyBornAt = nodes[nodes.length - 1].bornAt + 600;
    const recalls: Recall[] = [];
    let nextRecallAt = 1800;

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const px = (n: Node) => ({ x: n.x * width, y: n.y * height });

    /** Pick a recall: a recent episode reaching back to an older session. */
    const scheduleRecall = (now: number) => {
      const born = nodes.map((n, i) => ({ n, i })).filter(({ n }) => n.bornAt <= now);
      const latestSession = Math.max(...born.map(({ n }) => n.session));
      if (latestSession < 1) return;
      const fromPool = born.filter(({ n }) => n.session === latestSession || n.session >= latestSession - 1);
      const from = fromPool[Math.floor(rand() * fromPool.length)];
      const toPool = born.filter(({ n }) => n.session < from.n.session);
      if (!from || toPool.length === 0) return;
      const to = toPool[Math.floor(rand() * toPool.length)];
      recalls.push({ from: from.i, to: to.i, startedAt: now });
    };

    const draw = (now: number) => {
      ctx.clearRect(0, 0, width, height);
      const radius = Math.max(2.2, Math.min(width, height) * 0.0095);

      // Session hulls: faint labels under each cluster
      ctx.font = `500 10px ${getComputedStyle(document.documentElement).getPropertyValue("--font-mono") || "monospace"}`;
      ctx.textAlign = "center";
      for (let s = 0; s < SESSIONS; s++) {
        const members = nodes.filter((n) => n.session === s && n.bornAt <= now);
        if (members.length === 0) continue;
        const cx = members.reduce((sum, n) => sum + n.x, 0) / members.length;
        const maxY = Math.max(...members.map((n) => n.y));
        const alpha = easeOut((now - members[0].bornAt) / 800) * 0.7;
        ctx.fillStyle = withAlpha(colors.muted, alpha);
        ctx.fillText(`SESSION ${String(s + 1).padStart(2, "0")}`, cx * width, Math.min(maxY * height + 26, height - 6));
      }

      // Intra-session edges, drawn in as both ends exist
      for (const edge of edges) {
        const a = nodes[edge.a];
        const b = nodes[edge.b];
        const t = easeOut((now - b.bornAt) / 500);
        if (t <= 0) continue;
        const pa = px(a);
        const pb = px(b);
        ctx.strokeStyle = withAlpha(colors.fg, 0.13);
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(pa.x, pa.y);
        ctx.lineTo(pa.x + (pb.x - pa.x) * t, pa.y + (pb.y - pa.y) * t);
        ctx.stroke();
      }

      // Recall arcs: curved accent path with a travelling pulse
      const lit = new Set<number>();
      for (let r = recalls.length - 1; r >= 0; r--) {
        const recall = recalls[r];
        const age = (now - recall.startedAt) / RECALL_DURATION;
        if (age > 1.6) {
          recalls.splice(r, 1);
          continue;
        }
        const pa = px(nodes[recall.from]);
        const pb = px(nodes[recall.to]);
        const mx = (pa.x + pb.x) / 2;
        const my = Math.min(pa.y, pb.y) - Math.abs(pa.x - pb.x) * 0.28;
        const fade = age < 1 ? 1 : 1 - (age - 1) / 0.6;

        ctx.strokeStyle = withAlpha(colors.accent, 0.55 * fade);
        ctx.lineWidth = 1.25;
        ctx.setLineDash([3, 4]);
        ctx.beginPath();
        ctx.moveTo(pa.x, pa.y);
        ctx.quadraticCurveTo(mx, my, pb.x, pb.y);
        ctx.stroke();
        ctx.setLineDash([]);

        if (age <= 1) {
          const t = easeOut(age);
          const qx = (1 - t) * (1 - t) * pa.x + 2 * (1 - t) * t * mx + t * t * pb.x;
          const qy = (1 - t) * (1 - t) * pa.y + 2 * (1 - t) * t * my + t * t * pb.y;
          ctx.fillStyle = colors.accent;
          ctx.shadowColor = colors.accent;
          ctx.shadowBlur = 12;
          ctx.beginPath();
          ctx.arc(qx, qy, radius * 0.9, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        lit.add(recall.from);
        if (age > 0.85) lit.add(recall.to);

        // Log-style label next to the recalled episode
        if (age > 0.85 && fade > 0) {
          ctx.textAlign = "left";
          ctx.fillStyle = withAlpha(colors.accent, 0.9 * fade);
          const label = `recall ep.${String(recall.to + 1).padStart(2, "0")}`;
          const labelWidth = ctx.measureText(label).width;
          const lx = Math.min(pb.x + 10, width - labelWidth - 8);
          const ly = Math.max(pb.y - 10, 16);
          // Backing plate so the label never collides with edges behind it
          ctx.fillStyle = withAlpha(colors.card, 0.92 * fade);
          ctx.fillRect(lx - 4, ly - 10, labelWidth + 8, 15);
          ctx.fillStyle = withAlpha(colors.accent, 0.95 * fade);
          ctx.fillText(label, lx, ly);
        }
      }

      // Episodes
      nodes.forEach((node, index) => {
        const t = easeOut((now - node.bornAt) / 450);
        if (t <= 0) return;
        const p = px(node);
        const isLit = lit.has(index);
        if (isLit) {
          ctx.fillStyle = withAlpha(colors.accent, 0.18);
          ctx.beginPath();
          ctx.arc(p.x, p.y, radius * 3.2, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.fillStyle = isLit ? colors.accent : withAlpha(colors.fg, 0.35 + 0.35 * (node.session / SESSIONS));
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius * t * (isLit ? 1.25 : 1), 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const tick = (timestamp: number) => {
      const now = timestamp - start;
      if (now >= nextRecallAt) {
        scheduleRecall(now);
        nextRecallAt = now + RECALL_EVERY;
      }
      draw(now);
      frame = requestAnimationFrame(tick);
    };

    const play = () => {
      if (frame || reduceMotion || !visible || document.hidden) return;
      frame = requestAnimationFrame(tick);
    };
    const pause = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    resize();

    if (reduceMotion) {
      // One static frame: fully formed graph with a single recall shown
      recalls.push({ from: nodes.length - 2, to: 4, startedAt: fullyBornAt - RECALL_DURATION * 0.95 });
      draw(fullyBornAt);
    } else {
      play();
    }

    const resizeObserver = new ResizeObserver(() => {
      resize();
      if (reduceMotion) draw(fullyBornAt);
    });
    resizeObserver.observe(wrap);

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) play();
      else pause();
    });
    visibilityObserver.observe(wrap);

    const onVisibilityChange = () => {
      if (document.hidden) {
        pause();
      } else {
        play();
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    // Follow the theme toggle (it swaps a class on <html>)
    const themeObserver = new MutationObserver(() => {
      colors = readColors(document.documentElement);
      if (reduceMotion) draw(fullyBornAt);
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      pause();
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      themeObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
      // Reset so a remount (fast refresh) starts the sequence cleanly
      start = performance.now();
    };
  }, []);

  return (
    <div ref={wrapRef} className={`relative ${className}`} aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
