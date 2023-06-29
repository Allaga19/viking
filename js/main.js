$(function(){

	// video
	// $('[data-fancybox]').fancybox({
	// 	youtube:{  
	// 		controls: 0, 
	// 		showinfo: 0 
	// 	},
	// 	// задаёт цвет
	// 	// vimeo: { 
	// 	// 	color: 'f00' 
	// 	// } 
	// });
	
	// slider
	$('.heroes__slider-img').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.heroes__slider-text',
		prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-left.png" alt="prev"></button>',
		nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.png" alt="next"></button>',
		responsive: [
			{
				breakpoint: 769,
				// infinite: true,
				// speed: 500,
				// fade: true,
				// cssEase: 'linear',
				settings: {
					arrows: false,
					dots: true,
					autoplay: true,
					autoplaySpeed: 2000,
				}
			}
		]
	});

	$('.heroes__slider-text').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.heroes__slider-img',
		fade: true,
		arrows: false
		// dots: true,
		// centerMode: true,
		// focusOnSelect: true
	});

});