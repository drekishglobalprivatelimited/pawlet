// Mobile menu
const menu = document.getElementById('menu');
const links = document.getElementById('navlinks');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!open));
  links.classList.toggle('open', !open);
});
links.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    menu.setAttribute('aria-expanded', 'false');
    links.classList.remove('open');
  }
});

// Pack front/back flip
document.querySelectorAll('.product-media').forEach((media) => {
  const flip = media.querySelector('[data-flip]');
  const buttons = media.querySelectorAll('.toggle button');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const back = btn.dataset.side === 'back';
      flip.classList.toggle('is-back', back);
      buttons.forEach((b) => {
        const on = b === btn;
        b.classList.toggle('on', on);
        b.setAttribute('aria-pressed', String(on));
      });
    });
  });
  flip.addEventListener('click', () => {
    const next = flip.classList.contains('is-back') ? buttons[0] : buttons[1];
    next.click();
  });
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('in'));
}

document.getElementById('year').textContent = new Date().getFullYear();
