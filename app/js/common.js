$(function() {

	// Mask input
	$('.phone_input').mask('+7 (999) 999-99-99');

	// js-nav
	$('.js-nav').on('click', function() {
		$('body').toggleClass('navmenu_opened');
		return false;
	});
	$('.navmenu-overlay').on('click touchstart', function() {
		$('body').removeClass('navmenu_opened');
	});

	if ( document.documentElement.clientWidth < 992 ) {
		$('.navmenu li.parent').append('<span class="navmenu_show"></span>');
		$('.submenu-title').append('<span class="submenu_show"></span>');
		$('.navmenu_show').on('click', function() {
			$(this).toggleClass('opened');
			$(this).closest('li.parent').find('.submenu').slideToggle(200);
		});
		$('.submenu_show').on('click', function() {
			$(this).toggleClass('opened');
			$(this).closest('.submenu-item').find('ul').slideToggle(200);
		});
	}
	
	
	// Swiper
	let catslider = new Swiper('.goodCoins', {
		slidesPerView: 1,
		spaceBetween: 16,
		pagination: {
			el: '.goodCoins .swiper-pagination',
		},
		breakpoints: {
			1200: { slidesPerView: 5 },
			992: { slidesPerView: 4 },
			576: { slidesPerView: 2 },
		}
	});
	let catslider2 = new Swiper('.badCoins', {
		slidesPerView: 1,
		spaceBetween: 16,
		pagination: {
			el: '.badCoins .swiper-pagination',
		},
		breakpoints: {
			1200: { slidesPerView: 5 },
			992: { slidesPerView: 4 },
			576: { slidesPerView: 2 },
		}
	});
	let reviews = new Swiper('.reviewSlider', {
		slidesPerView: 1,
		spaceBetween: 16,
		pagination: {
			el: '.reviewSlider .swiper-pagination',
		},
		breakpoints: {
			1200: { slidesPerView: 5 },
			992: { slidesPerView: 4 },
			576: { slidesPerView: 2 },
		}
	});
	let relatedSlider = new Swiper('#relatedSlider', {
		slidesPerView: 1,
		spaceBetween: 16,
		pagination: {
			el: '#relatedSlider .swiper-pagination',
		},
		navigation: {
			nextEl: '#relatedSlider .swiper-button-next',
			prevEl: '#relatedSlider .swiper-button-prev',
		},
		breakpoints: {
			1200: { slidesPerView: 5 },
			992: { slidesPerView: 4 },
			720: { slidesPerView: 3 },
			576: { slidesPerView: 2 },
		}
	});

		
	// Ontop button
	$(window).on('scroll', function() {
		let top = $(document).scrollTop();
		if ( top > 500 ) {
			$('#ontop').fadeIn(200);
		} else {
			$('#ontop').fadeOut(200);
		}
	});
	$('#ontop').click(function () {
		$('body, html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	

	// Spoiler
	$('.spoiler-name').on('click', function() {
		if ( !$(this).hasClass('opened') ) {
			$('.spoiler-name').removeClass('opened');
			$('.spoiler-hide').slideUp(200);
			$(this).addClass('opened');
			$(this).closest('.spoiler').find('.spoiler-hide').slideDown(200);
		} else {
			$(this).removeClass('opened');
			$(this).closest('.spoiler').find('.spoiler-hide').slideUp(200);
		}
		return false;
	});




});