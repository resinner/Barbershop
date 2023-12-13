const header = document.querySelector('.header');
const logo = document.querySelector('.logo__svg');
// const pageWidth = document.documentElement.scrollWidth;
// console.log(pageWidth);

window.onscroll = function () {
  if (window.scrollY > 100) {
    header.style.background = 'rgba(0, 0, 0, 0.6)';

    if (pageWidth < 767) {
      logo.style.fill = '#fff';
    } else {
      logo.style.fill = 'var(--main-light-theme)';
    }

    logo.style.fill = '#fff';
  } else {
    if (pageWidth < 767) {
      logo.style.fill = '#fff';
    } else {
      logo.style.fill = 'var(--main-light-theme)';
    }

    header.style.background = 'rgba(0, 0, 0, 0)';
  }
};
