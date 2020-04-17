$(window).on("load", function () {

});
$(document).ready(function () {
    new WOW().init();

    //////////////////////////////////////////////
    var mainswiper = new Swiper('.main-slider .swiper-container', {
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
        navigation: false,
        autoplay: false,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.main-slider .swiper-button-next',
            prevEl: '.main-slider .swiper-button-prev',
        },
    });
    /////////about Slider/////////
    var aboutswiper = new Swiper('.about-slider .swiper-container', {
        pagination: {
            el: '.about-slider .swiper-pagination',
            clickable: true,
        },
        navigation: false,
        autoplay: false,
        spaceBetween: 10,
        loop: false,
    });
    if ($(window).width() <= 767) {
        $('.second-header').wrap('<div class="xs-nav"></div>');


        $('.mo-menu-icon').click(function () {
            $(".xs-nav").fadeIn(400);
            $(".second-header").addClass("nav-in");
            $("body").addClass("overflow");
        });

        $('.xs-nav').click(function () {
            $(".xs-nav").fadeOut(400);
            $(".second-header").removeClass("nav-in");
            $("body").removeClass("overflow");
        });
        $('.second-header').click(function (e) {
            e.stopPropagation();
        });
        $('.close-btn').click(function () {
            $(".xs-nav").fadeOut(400);
            $(".second-header").removeClass("nav-in");
            $(".lang").removeClass("lang-in");
        });
    }
    $('.reg #dateinput').datepicker({
        format: "dd/mm/yyyy",
        startView: 0,
        minViewMode: 0,
        maxViewMode: 2
    });

    $('.text-show').click(function () {
        $(this).siblings(".span-hide").show();
        $(this).hide();
    });
    if ($("span").hasClass("num")) {
        var a = 0;
        $(window).scroll(function () {
            if (a == 0 && $(this).scrollTop() >= ($(".num").offset().top) - 500) {
                $('.num').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 1000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
                console.log($('.num'));
                a++
            }
        });
    }

    var galleryThumbs = new Swiper('.gallery-thumbs', {
        slidesPerView: 3,
        breakpoints: {
            0: {
                spaceBetween: 15,
            },
            991: {
                spaceBetween: 30,
            },
        }
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        thumbs: {
            swiper: galleryThumbs,
        },
    });
});