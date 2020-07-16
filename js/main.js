'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloader").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Offcanvas Menu
    $(".canvas-open").on('click', function () {
        $(".offcanvas-menu-wrapper").addClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".canvas-close, .offcanvas-menu-overlay").on('click', function () {
        $(".offcanvas-menu-wrapper").removeClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").removeClass("active");
    });

    // Search model
    $('#headerVideoLink').magnificPopup({
        type:'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /* Scroll on buttons */
    $('.js--scroll-to-quote').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-quote').offset().top}, 1000); 
    });

    $('.js--scroll-to-home').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-home').offset().top}, 1000); 
    });

    $('.js--scroll-to-why').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-why').offset().top}, 1000); 
    });

    $('.js--scroll-to-how').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-how').offset().top}, 1000); 
    });

    $('.js--scroll-to-services').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-services').offset().top}, 1000); 
    });

    $('.js--scroll-to-testimonials').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-testimonials').offset().top}, 1000); 
    });

    $('.js--scroll-to-about').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-about').offset().top}, 1000); 
    });

    $('.js--scroll-to-contact').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1000); 
    });

    $('.js--scroll-to-video').click(function () {
        $('html, body').animate({scrollTop: $('.js--section-video').offset().top}, 1000); 
    });
    
    /*------------------
        Hero Slider
    --------------------*/
   $(".hero-slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        mouseDrag: false
    });

    /*------------------------
		Testimonial Slider
    ----------------------- */
    $(".testimonial-slider").owlCarousel({
        items: 1,
        dots: false,
        autoplay: true,
        loop: true,
        smartSpeed: 1200,
        nav: true,
        navText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"]
    });

    /*------------------
        Magnific Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
		Date Picker
	--------------------*/
    $(".date-input").datepicker({
        minDate: 0,
        dateFormat: 'dd MM, yy'
    });

    /*------------------
		Nice Select
	--------------------*/
    $("select").niceSelect();

})(jQuery);