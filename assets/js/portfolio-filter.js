(function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const items      = document.querySelectorAll('.portfolio__item');
  const grid       = document.getElementById('portfolio-grid');

  if (!filterBtns.length || !items.length) return;

  const filter = (category) => {
    items.forEach(item => {
      const match = category === 'all' || item.dataset.category === category;
      item.classList.toggle('hidden', !match);

      // Animação de entrada
      if (match) {
        item.style.opacity = '0';
        item.style.transform = 'translateY(16px)';
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            item.style.transition = 'opacity 300ms ease, transform 300ms ease';
            item.style.opacity    = '1';
            item.style.transform  = 'translateY(0)';
          });
        });
      }
    });

    document.dispatchEvent(new CustomEvent('portfolioFiltered'));
  };

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filter(btn.dataset.filter);
    });
  });
})();
