$(function() {



});


const reviewsSlider = new Swiper("#reviews_slider", {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 32,
  breakpoints: {
    900: {
      slidesPerView: 'auto',
      centeredSlides: true,
    }
  }
})