"use strict";
jQuery(document).ready(function ($) {

    $(window).load(function () {
        $(".loaded").fadeOut();
        $(".preloader").delay(1000).fadeOut("slow");
    });
    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $('#bs-example-navbar-collapse-1').find('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 0)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });


// slick slider active 
    $(".main_home_slider").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow:"<i class='fa fa-angle-left nextprevleft'></i>",
        nextArrow:"<i class='fa fa-angle-right nextprevright'></i>"
    });

//    $(".study_slider").slick({
//        dots: true,
//        slidesToShow: 1,
//        slidesToScroll: 1
//    });
    $(".study_slider").slick({
        dots: true,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    /*---------------------------------------------*
     * STICKY scroll
     ---------------------------------------------*/

    $("").localScroll();

    /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/

    var wow = new WOW({
        mobile: false // trigger animations on mobile devices (default is true)
    });
    wow.init();


// magnificPopup

    $('.portfolio-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });




//---------------------------------------------
// Counter 
//---------------------------------------------

    $('.statistic-counter').counterUp({
        delay: 10,
        time: 2000
    });

// main-menu-scroll

    jQuery(window).scroll(function () {
        var top = jQuery(document).scrollTop();
        var height = 300;
        //alert(batas);

        if (top > height) {
            jQuery('.navbar-fixed-top').addClass('menu-scroll');
        } else {
            jQuery('.navbar-fixed-top').removeClass('menu-scroll');
        }
    });

// scroll Up

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });


// scrool Down
    $('.scrooldown a').bind('click', function () {
        $('html , body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 160
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });



// Portfoliowork init
    jQuery('#portfoliowork').mixItUp({
        selectors: {
            target: '.tile',
            filter: '.filter'
                    //           sort: '.sort-btn'
        },
        animation: {
            animateResizeContainer: false,
            effects: 'fade scale'
        }

    });

// dropdown menu
    $('.dropdown-menu').click(function (e) {
        e.stopPropagation();
    });
	
	
	
	const engrDesign = document.querySelector('.engr-design');
	const engrDesignMsg = document.querySelector('.engr-design-msg');
	
	const advisory = document.querySelector('.advisory');
	const advisoryMsg = document.querySelector('.advisory-msg');
	
	const civilWorksDesign = document.querySelector('.civil-works-design');
	const civilWorksDesignMsg = document.querySelector('.civil-works-design-msg');
	
	const structuralEngrDesign = document.querySelector('.structural-engr-design');
	const structuralEngrDesignMsg = document.querySelector('.structural-engr-design-msg');
	
	const foundationEngr = document.querySelector('.foundation-engr');
	const foundationEngrMsg = document.querySelector('.foundation-engr-msg');
	
	const infraPlanning = document.querySelector('.infrastructure-planning');
	const infraPlanningMsg = document.querySelector('.infrastructure-planning-msg');
	
	const modal = document.querySelector('.modal');

	engrDesign.addEventListener('mouseover', () => {
		modal.style.display = 'block';
		engrDesignMsg.style.display = 'block';		
		advisoryMsg.style.display = 'none';	
		civilWorksDesignMsg.style.display = 'none';
		structuralEngrDesignMsg.style.display = 'none';
		foundationEngrMsg.style.display = 'none';
		infraPlanningMsg.style.display = 'none';
	});
	engrDesign.addEventListener('mouseout', () => {
		modal.style.display = 'none';
		engrDesignMsg.style.display = 'none';	
		advisoryMsg.style.display = 'none';	
		civilWorksDesignMsg.style.display = 'none';
		structuralEngrDesignMsg.style.display = 'none';
		foundationEngrMsg.style.display = 'none';
		infraPlanningMsg.style.display = 'none';
	});

	advisory.addEventListener('mouseover', () => {
		modal.style.display = 'block';
		advisoryMsg.style.display = 'block';
		engrDesignMsg.style.display = 'none';	
		civilWorksDesignMsg.style.display = 'none';
		structuralEngrDesignMsg.style.display = 'none';
		foundationEngrMsg.style.display = 'none';
		infraPlanningMsg.style.display = 'none';
	});
	advisory.addEventListener('mouseout', () => {
		modal.style.display = 'none';
		advisoryMsg.style.display = 'none';
		engrDesignMsg.style.display = 'none';	
		civilWorksDesignMsg.style.display = 'none';
		structuralEngrDesignMsg.style.display = 'none';
		foundationEngrMsg.style.display = 'none';
		infraPlanningMsg.style.display = 'none';
	});

	civilWorksDesign.addEventListener('mouseover', () => {
		modal.style.display = 'block';
		civilWorksDesignMsg.style.display = 'block';
		engrDesignMsg.style.display = 'none';	
		advisoryMsg.style.display = 'none';	
		structuralEngrDesignMsg.style.display = 'none';
		foundationEngrMsg.style.display = 'none';
		infraPlanningMsg.style.display = 'none';
	});
	civilWorksDesign.addEventListener('mouseout', () => {
		modal.style.display = 'none';
		civilWorksDesignMsg.style.display = 'none';
		engrDesignMsg.style.display = 'none';	
		advisoryMsg.style.display = 'none';	
		structuralEngrDesignMsg.style.display = 'none';
		foundationEngrMsg.style.display = 'none';
		infraPlanningMsg.style.display = 'none';
	});

	structuralEngrDesign.addEventListener('mouseover', () => {
		modal.style.display = 'block';
		structuralEngrDesignMsg.style.display = 'block';
		engrDesignMsg.style.display = 'none';	
		advisoryMsg.style.display = 'none';	
		civilWorksDesignMsg.style.display = 'none';
		foundationEngrMsg.style.display = 'none';
		infraPlanningMsg.style.display = 'none';
	});
	structuralEngrDesign.addEventListener('mouseout', () => {
		modal.style.display = 'none';
		structuralEngrDesignMsg.style.display = 'none';
		engrDesignMsg.style.display = 'none';	
		advisoryMsg.style.display = 'none';	
		civilWorksDesignMsg.style.display = 'none';
		foundationEngrMsg.style.display = 'none';
		infraPlanningMsg.style.display = 'none';
	});

	foundationEngr.addEventListener('mouseover', () => {
		modal.style.display = 'block';
		foundationEngrMsg.style.display = 'block';
		engrDesignMsg.style.display = 'none';	
		advisoryMsg.style.display = 'none';	
		civilWorksDesignMsg.style.display = 'none';
		structuralEngrDesignMsg.style.display = 'none';
		infraPlanningMsg.style.display = 'none';
	});
	foundationEngr.addEventListener('mouseout', () => {
		modal.style.display = 'none';
		foundationEngrMsg.style.display = 'none';
		engrDesignMsg.style.display = 'none';	
		advisoryMsg.style.display = 'none';	
		civilWorksDesignMsg.style.display = 'none';
		structuralEngrDesignMsg.style.display = 'none';
		infraPlanningMsg.style.display = 'none';
	});

	infraPlanning.addEventListener('mouseover', () => {
		modal.style.display = 'block';
		infraPlanningMsg.style.display = 'block';
		engrDesignMsg.style.display = 'none';	
		advisoryMsg.style.display = 'none';	
		civilWorksDesignMsg.style.display = 'none';
		structuralEngrDesignMsg.style.display = 'none';
		foundationEngrMsg.style.display = 'none';
	});
	infraPlanning.addEventListener('mouseout', () => {
		modal.style.display = 'none';
		infraPlanningMsg.style.display = 'none';
		engrDesignMsg.style.display = 'none';	
		advisoryMsg.style.display = 'none';	
		civilWorksDesignMsg.style.display = 'none';
		structuralEngrDesignMsg.style.display = 'none';
		foundationEngrMsg.style.display = 'none';
	});

    //End

});



$(document).on("scroll", function () {
    if ($(document).scrollTop() > 120) {
        $("nav").addClass("small");
    } else {
        $("nav").removeClass("small");
    }
});



