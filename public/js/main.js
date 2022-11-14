(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	var carousel = function() {
		$('.featured-carousel').owlCarousel({
	    loop: true,
	    autoplay: true,
		interval: 2000,
	    margin:30,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
		autoWidth: false,
	    nav:true,
		lazyLoad: true,
	    dots: true,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<i><img src='img/left-arrow.svg'></i>","<i><img src='img/right-arrow.svg'></i>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:2
	      },
	      1000:{
	        items:2
	      },
		  1600:{
			items:3
		  }
	    }
		});

	};
	carousel();

})(jQuery);