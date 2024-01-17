const bodyBg = document.querySelector('.hero-right-side');
const sliderBtnPrev = document.querySelector('.slider-btn__prev');
const sliderBtnNext = document.querySelector('.slider-btn__next');
const sliderPagination = document.querySelectorAll('.slider-pagination__item');

const bgDeskImage = [
  'url(./images/hero/hero-desk-bg1-x1.jpg), linear-gradient(rgba(25, 28, 38, 0.2), rgba(25, 28, 38, 0.2))',
  'url(./images/hero/hero-desk-bg2-x1.jpg), linear-gradient(rgba(25, 28, 38, 0.2), rgba(25, 28, 38, 0.2))',
  'url(./images/hero/hero-desk-bg3-x1.jpg), linear-gradient(rgba(25, 28, 38, 0.2), rgba(25, 28, 38, 0.2))',
];

const bgTabletImage = [
  'url(./images/hero/hero-tablet-bg1-x1.jpg), linear-gradient(rgba(25, 28, 38, 0.2), rgba(25, 28, 38, 0.2))',
  'url(./images/hero/hero-tablet-bg2-x1.jpg), linear-gradient(rgba(25, 28, 38, 0.2), rgba(25, 28, 38, 0.2))',
  'url(./images/hero/hero-tablet-bg3-x1.jpg), linear-gradient(rgba(25, 28, 38, 0.2), rgba(25, 28, 38, 0.2))',
];

let imgIndex = 0;
const imgMax = bgDeskImage.length;

const pageWidth = document.documentElement.scrollWidth;

//========================================================================================================

sliderBtnPrev.addEventListener('click', e => {
  imgIndex = imgIndex - 1;

  if (pageWidth < 769) {
    if (imgIndex < 0) {
      imgIndex = 2;
      bodyBg.style.backgroundImage = bgTabletImage[imgIndex];
      sliderPagination[imgIndex - 2].classList.remove('slider-pagination__current');
      sliderPagination[imgIndex].classList.add('slider-pagination__current');
      return;
    }

    bodyBg.style.backgroundImage = bgTabletImage[imgIndex];

    sliderPagination[imgIndex + 1].classList.remove('slider-pagination__current');
    sliderPagination[imgIndex].classList.add('slider-pagination__current');
  } else {
    if (imgIndex < 0) {
      imgIndex = 2;
      bodyBg.style.backgroundImage = bgDeskImage[imgIndex];
      sliderPagination[imgIndex - 2].classList.remove('slider-pagination__current');
      sliderPagination[imgIndex].classList.add('slider-pagination__current');
      return;
    }

    bodyBg.style.backgroundImage = bgDeskImage[imgIndex];

    sliderPagination[imgIndex + 1].classList.remove('slider-pagination__current');
    sliderPagination[imgIndex].classList.add('slider-pagination__current');
  }
});

//========================================================================================================

sliderBtnNext.addEventListener('click', e => {
  imgIndex = imgIndex + 1;

  if (pageWidth < 769) {
    if (imgIndex >= imgMax) {
      imgIndex = 0;
      bodyBg.style.backgroundImage = bgTabletImage[imgIndex];
      sliderPagination[imgIndex + 2].classList.remove('slider-pagination__current');
      sliderPagination[imgIndex].classList.add('slider-pagination__current');
      return;
    }

    bodyBg.style.backgroundImage = bgTabletImage[imgIndex];

    sliderPagination[imgIndex - 1].classList.remove('slider-pagination__current');
    sliderPagination[imgIndex].classList.add('slider-pagination__current');
  } else {
    if (imgIndex >= imgMax) {
      imgIndex = 0;
      bodyBg.style.backgroundImage = bgDeskImage[imgIndex];
      sliderPagination[imgIndex + 2].classList.remove('slider-pagination__current');
      sliderPagination[imgIndex].classList.add('slider-pagination__current');
      return;
    }

    bodyBg.style.backgroundImage = bgDeskImage[imgIndex];

    sliderPagination[imgIndex - 1].classList.remove('slider-pagination__current');
    sliderPagination[imgIndex].classList.add('slider-pagination__current');
  }
});
