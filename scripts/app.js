const swiper = new Swiper('.swiper', {
	speed: 400,
	spaceBetween: 10,
	slidesPerView: 3,
	autoHeight: true,

	navigation: {
		nextEl: '.next',
		prevEl: '.prev',
	},

	autoplay: {
		delay: 3000,
	},
});
