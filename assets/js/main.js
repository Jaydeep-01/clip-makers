/*========Loader js===========*/
$(window).on('load', function () {
	$(".loader").slideUp("slow");
	$("body").addClass("animate");
	$("html").addClass("animate");
});


/* ============= Navbar White =========*/
$(document).ready(function () {
	'use strict';

	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll > '20') {
			$('.nav-custom').addClass('nav-white');
		} else if (scroll < '20') {
			$('.nav-custom').removeClass('nav-white');
		}
	});
	$(document).ready(function () {
		var scroll = $(window).scrollTop();
		if (scroll > '20') {
			$('.nav-custom').addClass('nav-white');
		} else if (scroll < '20') {
			$('.nav-custom').removeClass('nav-white');
		}
	});

	setTimeout(function () {
		$('.navbar-brand').addClass('animate');
	}, 1000);
	setTimeout(function () {
		$('.navbar-nav li ').addClass('animate');
	}, 1100);


});

$('.nav-link').click(function (e) {
	var c = $(this).attr('href');
	e.preventDefault();
	$('.search-right').stop().animate({
		scrollTop: $('.search-right').scrollTop() + ($(c).position().top - 18)
	}, 100);
});
$('.arrow-right').click(function (e) {
	$('.nav-scroll').stop().animate({
		scrollLeft: $('.nav-scroll').scrollLeft() + 200
	}, 500);
});

$('.arrow-left').click(function (e) {
	$('.nav-scroll').stop().animate({
		scrollLeft: $('.nav-scroll').scrollLeft() - 200
	}, 500);
});


/*========Menu js============*/
$(document).ready(function () {
	'use strict';
	$(".nav-button-container").bind('click', function () {
		if ($('.nav-custom').hasClass("active")) {
			$('.nav-custom').removeClass("active");
			$('.nav-menu').removeClass("active");
		} else {
			$('.nav-custom').addClass("active");
			$('.nav-menu').addClass("active");
		}
	});

	$(".nav-menu-item li a").mouseover(function () {
		$(".nav-item-img li.active").removeClass("active");
		var a = $(this).parents("li").index() + 1;
		$(".nav-item-img li:nth-of-type(" + a + ")").addClass("active");
	});
	$(".nav-menu-item li a").mouseleave(function () {
		$(".nav-item-img li.active").removeClass("active");
	});
});
jQuery(document).ready(function ($) {
	"use strict";
	$('#customers-testimonials').owlCarousel({
		loop: true,
		items: 4,
		responsiveClass: true,
		nav: false,
		autoplay: false,
		autoplayTimeout: 5000,
		smartSpeed: 2000,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		 mouseDrag: true,
    responsiveClass: true,
    responsive: {
		0:{
          items: 1
        },
        768:{
          items: 2
        },
        1051:{
          items: 4
        },
        1500:{
          items: 4
        }
    }

	});
});
/*============LightBox Effect===========*/
$(document).ready(function () {
	'use strict';
	$('.lightgallery').lightGallery({
		pager: true,
		download: false,
		actualSize: false,
		share: false
	});


});