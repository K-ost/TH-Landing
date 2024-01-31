$(function() {



});


// reviewsSlider
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

// brands_slider
const brandsSlider = new Swiper("#brands_slider", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 16,
  breakpoints: {
    720: { slidesPerView: 4 },
    900: { slidesPerView: 5 },
  }
})