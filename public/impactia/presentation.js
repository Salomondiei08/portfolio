/**
 * Lightweight, offline slide controller for the Reinvent Labs masterclass.
 * Keeps navigation predictable while letting each slide own its reading order.
 */
(() => {
  'use strict';

  const slides = [...document.querySelectorAll('.slide')];
  const stage = document.querySelector('#stage');
  const currentLabel = document.querySelector('#current');
  const totalLabel = document.querySelector('#total');
  const progressBar = document.querySelector('#progress i');
  const sectionName = document.querySelector('#sectionName');
  const previousButton = document.querySelector('#prevBtn');
  const nextButton = document.querySelector('#nextBtn');
  let index = 0;
  let touchStart = null;

  const fitStage = () => {
    const viewport = window.visualViewport;
    const width = viewport?.width || window.innerWidth;
    const height = viewport?.height || window.innerHeight;
    if (width <= 820) {
      stage.style.transform = 'none';
      return;
    }
    const availableWidth = Math.max(320, width - 32);
    const availableHeight = Math.max(260, height - 88);
    const scale = Math.min(availableWidth / 1600, availableHeight / 900, 1);
    stage.style.transform = `scale(${scale})`;
  };

  const render = (nextIndex, updateHash = true) => {
    index = Math.max(0, Math.min(slides.length - 1, nextIndex));
    slides.forEach((slide, slideIndex) => {
      slide.classList.remove('active', 'prev', 'next');
      slide.setAttribute('aria-hidden', String(slideIndex !== index));
      if (slideIndex === index) slide.classList.add('active');
      else if (slideIndex < index) slide.classList.add('prev');
      else slide.classList.add('next');
    });

    currentLabel.textContent = String(index + 1);
    totalLabel.textContent = String(slides.length);
    progressBar.style.width = `${((index + 1) / slides.length) * 100}%`;
    sectionName.textContent = slides[index]?.dataset.section || '';
    previousButton.disabled = index === 0;
    nextButton.disabled = index === slides.length - 1;
    document.title = `${slides[index]?.querySelector('h1,h2')?.textContent?.trim() || 'Reinvent Labs'} — Reinvent Labs`;

    if (updateHash) history.replaceState(null, '', `#${index + 1}`);
  };

  const next = () => render(index + 1);
  const previous = () => render(index - 1);

  document.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    if (event.target.closest('input,textarea,select,a,button')) return;
    if (['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(event.key)) {
      event.preventDefault();
      next();
    }
    if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(event.key)) {
      event.preventDefault();
      previous();
    }
    if (event.key === 'Home') {
      event.preventDefault();
      render(0);
    }
    if (event.key === 'End') {
      event.preventDefault();
      render(slides.length - 1);
    }
    if (event.key.toLowerCase() === 'f') {
      if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
      else document.exitFullscreen?.();
    }
  });

  document.addEventListener('click', event => {
    if (event.target.closest('#hud, a, button')) return;
    if (event.clientX > window.innerWidth * .56) next();
    else if (event.clientX < window.innerWidth * .44) previous();
  });

  document.querySelector('#prevBtn').addEventListener('click', previous);
  document.querySelector('#nextBtn').addEventListener('click', next);

  document.querySelector('#stage').addEventListener('touchstart', event => {
    touchStart = { x: event.changedTouches[0].clientX, y: event.changedTouches[0].clientY };
  }, { passive: true });

  document.querySelector('#stage').addEventListener('touchend', event => {
    if (!touchStart) return;
    const dx = event.changedTouches[0].clientX - touchStart.x;
    const dy = event.changedTouches[0].clientY - touchStart.y;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      dx < 0 ? next() : previous();
    }
    touchStart = null;
  }, { passive: true });

  window.addEventListener('resize', fitStage);
  window.visualViewport?.addEventListener('resize', fitStage);

  const hashValue = Number.parseInt(window.location.hash.slice(1), 10);
  render(Number.isFinite(hashValue) ? hashValue - 1 : 0, false);
  fitStage();
})();
