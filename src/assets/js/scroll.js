const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
});

// Escuchar el evento de desplazamiento
scroll.on('scroll', (args) => {
  const currentScrollY = args.scroll.y;

  if (currentScrollY >= 50) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
});

// Actualizar Locomotive Scroll después de cargar contenido dinámico si es necesario
scroll.update();