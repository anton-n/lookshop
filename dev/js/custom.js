$(function() {
	svg4everybody({});


	var searchButton = $('.search__activate'),
			searchInp = $('.search__inp');

	searchButton.on('click', function(e) {

	e.preventDefault();

		$(this).hide();
		searchInp
			.show('1000')
			.focus();
	});

	searchInp.focusout(function() {
		$(this)
			.hide('1000')
			.val('');
		searchButton.show();
	});


	$('.cart__head').on('click', function() {
		$(this).toggleClass('active');
		$('.cart__items').slideToggle();
	});

	$('.slider').on('init', function (event, slick, direction) {
	if (!($('.slider .slick-slide').length > 1)) {
		// remove arrows
		$('.slider__arrow').hide();
	}
	});

	$('.js-promo-slider').slick({
		// vertical: true,
		// rtl: true, // required! wrap slider to <div dir="rtl"></div>
		dots: true,
		speed: 1700,
		cssEase: 'ease-in-out',
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: true,
		pauseOnDotsHover: false,
		appendDots: '.slider-nav',
		appendArrows: '.slider-arrows',
		prevArrow: '.slider-arrows__prev',
		nextArrow: '.slider-arrows__next',
		responsive: [
		{
			breakpoint: 768,
			settings: {
				dots: false,
				speed: 700,
				autoplaySpeed: 3000,
			}
		},

	// You can unslick at a given breakpoint now by adding:
	// settings: "unslick"
	// instead of a settings object
		]
	});

	$('.slider').slick({
		centerMode: true,
		centerPadding: '30px',
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		appendArrows: '.slick-arrows',
		prevArrow: '.arrow-lt',
		nextArrow: '.arrow-gt',
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 2300,
		pauseOnHover: true,
		speed: 1100,
		cssEase: 'ease-out',
	});


	var filtered = false;

	$('.nav .hot').on('click', function () {
		$('.nav__filter').removeClass('active');
		$('.nav__filter.hot').addClass('active');
		$('.slider').slick('slickUnfilter')

		filtered = false;
	});

	$('.nav .designers').on('click', function () {
		$('.slider').slick('slickUnfilter');
		$('.slider').slick('slickFilter', function() { return $('.designers', this).length === 1; });
		$('.nav__filter').removeClass('active');
		$('.nav__filter.designers').addClass('active');
		filtered = true;
	});

	$('.nav .featured').on('click', function () {
		$('.slider').slick('slickUnfilter');
		$('.slider').slick('slickFilter', function() { return $('.featured', this).length === 1; });
		$('.nav__filter').removeClass('active');
		$('.nav__filter.featured').addClass('active');
		filtered = true;
	});

	$('.nav .latest').on('click', function () {
		$('.slider').slick('slickUnfilter');
		$('.slider').slick('slickFilter', function() { return $('.latest', this).length === 1; });
		$('.nav__filter').removeClass('active');
		$('.nav__filter.latest').addClass('active');
		filtered = true;
	});



});