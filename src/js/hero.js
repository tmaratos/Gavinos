/**
 * Simple home hero image rotation (matches live site slideshow feel).
 */
export function initHeroCarousel() {
  const root = document.querySelector('.hero--carousel');
  if (!root) return;

  const slides = [...root.querySelectorAll('.hero__slide')];
  const dots = [...root.querySelectorAll('.hero__dot')];
  const prev = root.querySelector('.hero__prev');
  const next = root.querySelector('.hero__next');

  if (slides.length < 2) return;

  let index = slides.findIndex((s) => s.classList.contains('is-active'));
  if (index < 0) index = 0;

  let timer;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function setSlide(nextIndex) {
    index = (nextIndex + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('is-active', i === index));
    dots.forEach((dot, i) => {
      dot.classList.toggle('is-active', i === index);
      dot.setAttribute('aria-selected', String(i === index));
    });
  }

  function stop() {
    if (timer) clearInterval(timer);
    timer = null;
  }

  function start() {
    stop();
    if (prefersReduced) return;
    timer = setInterval(() => setSlide(index + 1), 6000);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      setSlide(i);
      start();
    });
  });

  prev?.addEventListener('click', () => {
    setSlide(index - 1);
    start();
  });

  next?.addEventListener('click', () => {
    setSlide(index + 1);
    start();
  });

  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', start);
  root.addEventListener('focusin', stop);
  root.addEventListener('focusout', start);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else start();
  });

  start();
}
