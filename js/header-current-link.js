const heroLinks = document.querySelectorAll('.header-list li a');
heroLinks.forEach(item => {
  item.addEventListener('click', e => {
    heroLinks.forEach(el => {
      el.classList.remove('curent-link');
    });
    item.classList.add('curent-link');
  });
});