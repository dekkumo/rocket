import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper('.swiper-container', {
  modules: [ Navigation, Pagination ],
  loop: false,
  navigation: {
    nextEl: 'swiper__right',
    prevEl: 'swiper__left',
  },
  pagination: {
    el: '.pagination__numbers',
    type: 'fraction'
  },
  slidesPerView: 1,
  speed: 1000,
  spaceBetween: 500,
})

const swiperPrev = document.getElementById('prev')
const swiperNext = document.getElementById('next')

swiperPrev.addEventListener('click', () => {
  swiper.slidePrev()
})

swiperNext.addEventListener('click', () => {
  swiper.slideNext()
})