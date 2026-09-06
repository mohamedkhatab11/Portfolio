const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn?.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

document.querySelectorAll('[data-placeholder]').forEach(el => {
  el.addEventListener('click', (e) => {
    if (el.getAttribute('href') === '#') {
      e.preventDefault();
      alert(el.dataset.placeholder);
    }
  });
});
