(function () {
  const viewport  = document.querySelector('.carousel__viewport');
  const track     = document.getElementById('carousel-track');
  const dotsWrap  = document.getElementById('carousel-dots');
  const prevBtn   = document.getElementById('carousel-prev');
  const nextBtn   = document.getElementById('carousel-next');

  if (!track) return;

  const slides  = track.querySelectorAll('.carousel__slide');
  const total   = slides.length;
  let current   = 0;
  let autoTimer = null;

  // Gerar dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel__dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Slide ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsWrap && dotsWrap.appendChild(dot);
  });

  const getDots = () => dotsWrap ? dotsWrap.querySelectorAll('.carousel__dot') : [];

  const goTo = (index) => {
    current = (index + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    getDots().forEach((dot, i) => dot.classList.toggle('active', i === current));
    resetAuto();
  };

  const resetAuto = () => {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current + 1), 5000);
  };

  prevBtn && prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn && nextBtn.addEventListener('click', () => goTo(current + 1));

  // Swipe touch
  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goTo(current + (diff > 0 ? 1 : -1));
  });

  // Pausar ao hover
  if (viewport) {
    viewport.addEventListener('mouseenter', () => clearInterval(autoTimer));
    viewport.addEventListener('mouseleave', resetAuto);
  }

  resetAuto();
})();
