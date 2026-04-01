// Lenis — smooth scroll
// Importado como ESM desde jsDelivr (garantiza que Lenis esté disponible
// independientemente de la estructura interna del paquete npm)
import Lenis from 'https://cdn.jsdelivr.net/npm/lenis@1.1.5/+esm';

// ─── Modo captura: detectar antes de inicializar scroll ──────────────────────
const _scrollCaptureMode = document.body.classList.contains('capture-mode');

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const lenis = new Lenis({
  lerp: 0.08,
  smoothWheel: !_scrollCaptureMode,  // Desactivar smooth scroll en modo captura
  wheelMultiplier: 0.9,
  touchMultiplier: 1.5,
  infinite: false,
});

// ── Header: clase "scrolled" al pasar 250px ──────────────────────────────────
if (_scrollCaptureMode) {
  document.body.classList.add('scrolled');
} else {
  lenis.on('scroll', ({ scroll }) => {
    document.body.classList.toggle('scrolled', scroll >= 250);
  });
}

// ── Parallax ─────────────────────────────────────────────────────────────────
// Se pre-calculan las posiciones al inicio para evitar getBoundingClientRect()
// dentro del loop de scroll (que forzaría un reflow en cada frame).
// En modo captura se desactiva el parallax para que todo quede en su posición natural.

if (!_scrollCaptureMode) {
  const buildParallaxCache = () =>
    [...document.querySelectorAll('[data-scroll-speed]')].map(el => ({
      el,
      speed: parseFloat(el.dataset.scrollSpeed) || 0,
      naturalY: el.getBoundingClientRect().top + window.scrollY + el.offsetHeight / 2,
    }));

  let parallaxCache = buildParallaxCache();

  window.addEventListener('resize', () => {
    parallaxCache = buildParallaxCache();
  }, { passive: true });

  lenis.on('scroll', ({ scroll }) => {
    const vh = window.innerHeight;
    for (const { el, speed, naturalY } of parallaxCache) {
      const offset = (naturalY - scroll - vh / 2) * speed * -0.1;
      el.style.transform = `translateY(${offset}px)`;
    }
  });
}

// ── RAF loop con GSAP ticker ──────────────────────────────────────────────────
// GSAP ya está cargado como global desde el CDN en base.njk
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// ── ScrollTo: enlaces que llevan al formulario de contacto ───────────────────
document.querySelectorAll('.link_a_contacta, .link_a_contacta_2').forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    lenis.scrollTo('#contacta_4', { offset: 0, duration: 1.45, easing: easeOutCubic });
  });
});
