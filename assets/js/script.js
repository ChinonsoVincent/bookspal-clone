var owl = $(".owl-carousel");
owl.owlCarousel({
	loop: true,
	margin: 10,
	autoplay: true,
	autoplayTimeout: 1000,
	autoplayHoverPause: true,
	responsive: {
		0: {
			items: 2,
		},
		600: {
			items: 3,
		},
		1000: {
			items: 5,
		},
	},
});
