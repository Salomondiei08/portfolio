import assert from "node:assert/strict";
import { after, before, test } from "node:test";
import { mkdtemp, mkdir, writeFile, rm } from "node:fs/promises";
import os from "node:os";
import path from "node:path";

let root;
let posts;
before(async () => {
  root = await mkdtemp(path.join(os.tmpdir(), "portfolio-content-"));
  await mkdir(path.join(root, "content/blog"), { recursive: true });
  await writeFile(path.join(root, "content/blog/article.md"), '---\ntitle: Article\ndate: "2026-11-01"\ncoverImage: /image.jpg\ntags: [AI]\n---\n# Hello\n\nReadable content.');
  await writeFile(path.join(root, "content/blog/draft.md"), '---\npublished: false\n---\nDraft content.');
  const original = process.cwd();
  try {
    process.chdir(root);
    posts = await import("../src/lib/markdown.ts");
  } finally {
    process.chdir(original);
  }
});
after(async () => { await rm(root, { recursive: true, force: true }); });

test("list and full article use the same frontmatter defaults and raw reading time", async () => {
  const [metadata] = posts.getAllPosts("blog");
  assert.deepEqual(metadata, { slug: "article", title: "Article", date: "2026-11-01", description: "", coverImage: "/image.jpg", coverAlt: "", tags: ["AI"], published: true, readingTime: 1 });
  const { content, ...detail } = await posts.getPostBySlug("blog", "article");
  assert.deepEqual(detail, metadata);
  assert.match(content, /<h1>Hello<\/h1>/);
});

test("lists published posts while preserving direct draft and missing-post behavior", async () => {
  assert.equal(posts.getAllPosts("blog").length, 1);
  assert.deepEqual(posts.getAllPostSlugs("blog").sort(), ["article", "draft"]);
  assert.equal((await posts.getPostBySlug("blog", "draft")).published, false);
  assert.equal(await posts.getPostBySlug("blog", "missing"), null);
  assert.deepEqual(posts.getAllPosts("notes"), []);
});
