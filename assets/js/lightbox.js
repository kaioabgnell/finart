(function () {
  const overlay  = document.getElementById('lightbox-overlay');
  const img      = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn  = document.getElementById('lightbox-prev');
  const nextBtn  = document.getElementById('lightbox-next');

  if (!overlay) return;

  let items   = [];
  let current = 0;

  const open = (index) => {
    current = index;
    const src = items[current].dataset.lightbox || '';
    const alt = items[current].querySelector('img')?.alt || 'Imagem do portfólio';
    img.src = src || items[current].querySelector('.portfolio__placeholder')?.style.background || '';
    img.alt = alt;
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  const close = () => {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    setTimeout(() => { img.src = ''; }, 300);
  };

  const navigate = (dir) => {
    const visibleItems = Array.from(items).filter(el => !el.classList.contains('hidden'));
    const idx = visibleItems.indexOf(items[current]);
    const newIdx = (idx + dir + visibleItems.length) % visibleItems.length;
    current = Array.from(items).indexOf(visibleItems[newIdx]);
    open(current);
  };

  const initItems = () => {
    items = document.querySelectorAll('.portfolio__item');
    items.forEach((item, i) => {
      const btn = item.querySelector('.portfolio__zoom-btn');
      if (btn) {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          open(i);
        });
      }
    });
  };

  closeBtn && closeBtn.addEventListener('click', close);
  prevBtn  && prevBtn.addEventListener('click', () => navigate(-1));
  nextBtn  && nextBtn.addEventListener('click', () => navigate(1));

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });

  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft')  navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });

  initItems();

  // Reinicializar ao filtrar
  document.addEventListener('portfolioFiltered', initItems);
})();
