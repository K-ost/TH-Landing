$(function() {

  // rangeslider
  $("#rangeslider").ionRangeSlider({
		type: "single",
    min: 10,
    max: 2000,
    grid: true,
    values: [ 10, 35, 70, 100, 150, 200, 300, 500, 1000, 1500, 2000 ],
    onChange: function(data) {
      document.querySelector('#chartValue').textContent = data.from_value
      document.querySelector('#priceValue').textContent = data.from_value * 10
    }
  });

});


// reviewsSlider
const reviewsSlider = new Swiper("#reviews_slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    420: { slidesPerView: 2 },
    720: { slidesPerView: 'auto', spaceBetween: 0, centeredSlides: true },
  },
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
    900: { slidesPerView: 3, spaceBetween: 0 },
  },
  pagination: {
    el: '.tariffs-slider .swiper-pagination'
  }
})


/* addOffCanvas */
function addOffCanvas() {
  if ( document.documentElement.clientWidth < 1020 ) {
    document.querySelector('.header-nav').classList.add(['offcanvas'])
    document.querySelector('.header-nav').classList.add('offcanvas-start')
  } else {
    document.querySelector('.header-nav').classList.remove(['offcanvas'])
    document.querySelector('.header-nav').classList.remove('offcanvas-start')
  }
}

addOffCanvas()

window.addEventListener('resize', () => {
  addOffCanvas()
})

