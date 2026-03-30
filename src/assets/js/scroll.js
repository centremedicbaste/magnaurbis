// Lenis — smooth scroll
// Lenis se carga como script global desde CDN en base.njk antes de este módulo

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  touchMultiplier: 2,
  infinite: false,
});

// ── Header: clase "scrolled" al pasar 250px ──────────────────────────────────
lenis.on('scroll', ({ scroll }) => {
  if (scroll >= 250) {
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
});

// ── Parallax: elementos con data-scroll-speed ────────────────────────────────
const parallaxEls = document.querySelectorAll('[data-scroll-speed]');

if (parallaxEls.length > 0) {
  lenis.on('scroll', () => {
    parallaxEls.forEach((el) => {
      const speed = parseFloat(el.dataset.scrollSpeed) || 0;
      const rect = el.getBoundingClientRect();
      // Desplazamiento relativo al centro del viewport
      const centerOffset = rect.top + rect.height / 2 - window.innerHeight / 2;
      el.style.transform = `translateY(${centerOffset * speed * -0.12}px)`;
    });
  });
}

// ── Integración con GSAP ticker (GSAP ya cargado globalmente) ────────────────
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// ── ScrollTo: enlaces que llevan al formulario de contacto ───────────────────
document.querySelectorAll('.link_a_contacta, .link_a_contacta_2').forEach((element) => {
  element.addEventListener('click', (event) => {
    event.preventDefault();
    lenis.scrollTo('#contacta_4', { offset: 0, duration: 1.2 });
  });
});
