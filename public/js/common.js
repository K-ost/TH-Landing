$(function() {



});


// reviewsSlider
const reviewsSlider = new Swiper("#reviews_slider", {
  loop: false,
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    720: { slidesPerView: 2 },
    900: { slidesPerView: 'auto', spaceBetween: 32, centeredSlides: true },
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

// tariffs1
const tariffsSlider = new Swiper(".tariffs-slider .swiper", {
  slidesPerView: 1,
  spaceBetween: 8,
  breakpoints: {
    480: { slidesPerView: 2 },
    680: { slidesPerView: 3, spaceBetween: 0 },
    900: { slidesPerView: 3 },
  }
})