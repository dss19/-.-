$(function() {

    const swiper = new Swiper('.swiper', {
        loop: true,
        speed: 1000,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
        on: {
            slideChange: function() {
                $(".slider__slide-info-text").addClass("closing");
                setTimeout(function() {
                    $(".slider__slide-info-text").removeClass("closing");  
                }, 500);
            }
        }
    });

    $('.mobile-menu').on('click', function() {
        $('.mobile-nav, .header, .slider').toggleClass('opened');
    });
});