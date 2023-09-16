$(document).ready(function () {
	$(".testimonial-inner-wrapper").slick({
		autoplay: true,
		autoplaySpeed: 10,
		speed: 11000,
		draggable: false,
		infinite: true,
		slidesToShow: 3,
		cssEase: "linear",
		slidesToScroll: 1,
		arrows: false,
		dots: false,

		responsive: [
			{
				breakpoint: 900,
				settings: {
					autoplay: false,
					slidesToShow: 1,
					centerMode: true,
					draggable: true,
					speed: 1000,
					autoplaySpeed: 1000,
					centerPadding: "20%",
					speed: 300
				}
			}
		]
	});
});
