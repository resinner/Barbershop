const bodyBg = document.querySelector('.hero');
const sliderBtnPrev = document.querySelector('.slider-btn__prev');
const sliderBtnNext = document.querySelector('.slider-btn__next');
const sliderPagination = document.querySelectorAll('.slider-pagination__item');

const bgImage = [
  'url(./images/hero/hero-1.png), linear-gradient(to right, #fff 155px, rgba(25, 28, 38, 0.2) 155px)',
  'url(./images/hero/hero-2.png), linear-gradient(to right, #fff 155px, rgba(25, 28, 38, 0.2) 155px)',
  'url(./images/hero/hero-3.png), linear-gradient(to right, #fff 155px, rgba(25, 28, 38, 0.2) 155px)',
];

let imgIndex = 0;
const imgMax = bgImage.length;
bodyBg.style.backgroundImage = bgImage[imgIndex];

//========================================================================================================

sliderBtnPrev.addEventListener('click', e => {
  imgIndex = imgIndex - 1;

  if (imgIndex < 0) {
    imgIndex = 2;
    bodyBg.style.backgroundImage = bgImage[imgIndex];
    sliderPagination[imgIndex - 2].classList.remove('slider-pagination__current');
    sliderPagination[imgIndex].classList.add('slider-pagination__current');
    return;
  }

  bodyBg.style.backgroundImage = bgImage[imgIndex];

  sliderPagination[imgIndex + 1].classList.remove('slider-pagination__current');
  sliderPagination[imgIndex].classList.add('slider-pagination__current');
});

//========================================================================================================

sliderBtnNext.addEventListener('click', e => {
  imgIndex = imgIndex + 1;

  if (imgIndex >= imgMax) {
    imgIndex = 0;
    bodyBg.style.backgroundImage = bgImage[imgIndex];
    sliderPagination[imgIndex + 2].classList.remove('slider-pagination__current');
    sliderPagination[imgIndex].classList.add('slider-pagination__current');
    return;
  }

  bodyBg.style.backgroundImage = bgImage[imgIndex];

  sliderPagination[imgIndex - 1].classList.remove('slider-pagination__current');
  sliderPagination[imgIndex].classList.add('slider-pagination__current');
});
