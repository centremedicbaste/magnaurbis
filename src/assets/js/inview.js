// inview.js — detección de elementos en viewport con IntersectionObserver
// Funciona correctamente con Lenis (scroll nativo). Con Locomotive Scroll v4
// (scroll basado en CSS transforms) el IO no se disparaba de forma fiable.

// Los módulos son implícitamente diferidos: el DOM ya está listo aquí.

// ─── Modo captura: mostrar todo sin animaciones ──────────────────────────────
const _isCaptureMode = document.body.classList.contains('capture-mode');

if (_isCaptureMode) {
  // Forzar todos los elementos visibles de golpe, sin observers ni animaciones
  document.querySelectorAll('.inview').forEach(el => el.classList.add('is-inview'));
  document.querySelectorAll('.animate-appear').forEach(el => {
    const wrapper = document.createElement('span');
    wrapper.classList.add('inner-content');
    while (el.firstChild) wrapper.appendChild(el.firstChild);
    el.appendChild(wrapper);
    wrapper.style.opacity = 1;
    wrapper.style.transform = 'translateY(0)';
  });
  document.querySelectorAll('.animate-word').forEach(el => {
    const text = el.textContent;
    el.textContent = '';
    text.split(/(\s+)/).forEach(word => {
      if (word.trim().length > 0) {
        word.split('^').forEach((fragment, index, arr) => {
          if (fragment.trim().length > 0) {
            const span = document.createElement('span');
            span.classList.add('term');
            span.textContent = fragment;
            span.style.opacity = 1;
            span.style.transform = 'translateY(0)';
            el.appendChild(span);
          }
          if (index < arr.length - 1) el.appendChild(document.createElement('br'));
        });
      } else {
        el.appendChild(document.createTextNode(word));
      }
    });
  });
  document.querySelectorAll('.animate-box').forEach(el => {
    el.style.opacity = 1;
    el.style.transform = 'translateY(0)';
  });
  document.querySelectorAll('.animate-box2').forEach(el => {
    let wrapper = el.querySelector('.inner-wrapper');
    if (!wrapper) {
      wrapper = document.createElement('div');
      wrapper.classList.add('inner-wrapper');
      while (el.firstChild) wrapper.appendChild(el.firstChild);
      el.appendChild(wrapper);
    }
    wrapper.style.transform = 'translateY(0)';
    wrapper.style.opacity = 1;
    el.style.overflow = 'hidden';
  });
  document.querySelectorAll('.animate-list').forEach(el => {
    el.querySelectorAll('li').forEach(item => {
      item.style.opacity = 1;
      item.style.transform = 'translateY(0)';
    });
  });
  document.querySelectorAll('.animate-letters').forEach(el => {
    const text = el.textContent;
    el.textContent = '';
    text.split('').forEach(letter => {
      const span = document.createElement('span');
      span.classList.add('letter');
      span.innerHTML = letter === ' ' ? '&nbsp;' : letter;
      span.style.opacity = 1;
      span.style.transform = 'translateY(0)';
      el.appendChild(span);
    });
  });
  // No inicializar observers en modo captura
}

const createObserver = _isCaptureMode ? () => ({ observe() {}, unobserve() {} }) : (callback, options) => new IntersectionObserver(callback, options);

const handleIntersect = (entries, observer, animationFn) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animationFn(entry.target);
      observer.unobserve(entry.target);
    }
  });
};

const gsapAnimate = (target, y, opacity, duration, delay, stagger = 0) => {
  gsap.timeline({ delay }).to(target, { y, opacity, duration, ease: 'power2.out', stagger });
};

const prepareElement = (selector, callback) => {
  document.querySelectorAll(selector).forEach(callback);
};

// ── Observers ────────────────────────────────────────────────────────────────

const options       = { threshold: 0.3 };
const animateOptions = { threshold: 0.1 };

const inViewObserver        = createObserver(entries => handleIntersect(entries, inViewObserver,        el => el.classList.add('is-inview')),                                              options);
const animateOnScrollObserver = createObserver(entries => handleIntersect(entries, animateOnScrollObserver, target => gsapAnimate(target.querySelector('.inner-content'), 0, 1, 1, parseFloat(target.dataset.delay || 0))), animateOptions);
const animateWordsObserver  = createObserver(entries => handleIntersect(entries, animateWordsObserver,  target => gsapAnimate(target.querySelectorAll('.term'), 0, 1, 1, parseFloat(target.dataset.delay || 0), 0.1)), animateOptions);
const animateBoxObserver    = createObserver(entries => handleIntersect(entries, animateBoxObserver,    target => gsapAnimate(target, 0, 1, 1, parseFloat(target.dataset.delay || 0))),   animateOptions);
const animateBox2Observer   = createObserver(entries => handleIntersect(entries, animateBox2Observer,   target => {
  let wrapper = target.querySelector('.inner-wrapper');
  if (!wrapper) {
    wrapper = document.createElement('div');
    wrapper.classList.add('inner-wrapper');
    while (target.firstChild) wrapper.appendChild(target.firstChild);
    target.appendChild(wrapper);
  }
  wrapper.style.transform = 'translateY(100%)';
  wrapper.style.overflow  = 'hidden';
  gsapAnimate(wrapper, 0, 1, 1, parseFloat(target.dataset.delay || 0));
}), animateOptions);
const animateListObserver   = createObserver(entries => handleIntersect(entries, animateListObserver,   target => gsapAnimate(target.querySelectorAll('li'), 0, 1, 1, parseFloat(target.dataset.delay || 0), 0.1)), animateOptions);
const animateLettersObserver = createObserver(entries => handleIntersect(entries, animateLettersObserver, target => gsapAnimate(target.querySelectorAll('.letter'), 0, 1, 1, parseFloat(target.dataset.delay || 0), 0.05)), animateOptions);

// ── .inview → is-inview ──────────────────────────────────────────────────────
prepareElement('.inview', el => {
  const rect = el.getBoundingClientRect();
  // Si el elemento ya está visible al cargar la página → clase inmediata
  if (rect.top < window.innerHeight && rect.bottom >= 0) {
    el.classList.add('is-inview');
  } else {
    inViewObserver.observe(el);
  }
});

// ── .animate-appear ──────────────────────────────────────────────────────────
prepareElement('.animate-appear', el => {
  const wrapper = document.createElement('span');
  wrapper.classList.add('inner-content');
  while (el.firstChild) wrapper.appendChild(el.firstChild);
  el.appendChild(wrapper);
  wrapper.style.opacity   = 0;
  wrapper.style.transform = 'translateY(20px)';
  animateOnScrollObserver.observe(el);
});

// ── .animate-word ─────────────────────────────────────────────────────────────
prepareElement('.animate-word', el => {
  const text = el.textContent;
  el.textContent = '';
  text.split(/(\s+)/).forEach(word => {
    if (word.trim().length > 0) {
      word.split('^').forEach((fragment, index, arr) => {
        if (fragment.trim().length > 0) {
          const span = document.createElement('span');
          span.classList.add('term');
          span.textContent   = fragment;
          span.style.opacity = 0;
          span.style.transform = 'translateY(20px)';
          el.appendChild(span);
        }
        if (index < arr.length - 1) el.appendChild(document.createElement('br'));
      });
    } else {
      el.appendChild(document.createTextNode(word));
    }
  });
  animateWordsObserver.observe(el);
});

// ── .animate-box ─────────────────────────────────────────────────────────────
prepareElement('.animate-box', el => {
  el.style.opacity   = 0;
  el.style.transform = 'translateY(20px)';
  animateBoxObserver.observe(el);
});

// ── .animate-box2 ────────────────────────────────────────────────────────────
prepareElement('.animate-box2', el => {
  el.style.overflow = 'hidden';
  animateBox2Observer.observe(el);
});

// ── .animate-list ─────────────────────────────────────────────────────────────
prepareElement('.animate-list', el => {
  el.querySelectorAll('li').forEach(item => {
    item.style.opacity   = 0;
    item.style.transform = 'translateY(20px)';
  });
  animateListObserver.observe(el);
});

// ── .animate-letters ──────────────────────────────────────────────────────────
prepareElement('.animate-letters', el => {
  const text = el.textContent;
  el.textContent = '';
  text.split('').forEach(letter => {
    const span = document.createElement('span');
    span.classList.add('letter');
    span.innerHTML       = letter === ' ' ? '&nbsp;' : letter;
    span.style.opacity   = 0;
    span.style.transform = 'translateY(20px)';
    el.appendChild(span);
  });
  animateLettersObserver.observe(el);
});
