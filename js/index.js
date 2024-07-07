// Menu
$('.header__navigation-burger').click(() => {
    $('.header__navigation').slideToggle().css('display', 'flex');
});
$('.header__navigation-close').click(() => {
    $('.header__navigation').slideToggle();
});

// scrollDown
$(function () {
    $('.start__page-scroll').click(() => {
        $('html, body').animate({ scrollTop: $(document).height() - $(window).height() }, 1000);
        return false;
    });
});

// Modal order
$('.order').click(() => {
    $('.page__overlay_modal').fadeIn(400);
});
$('.modal__close').click(() => {
    $('.page__overlay_modal').fadeOut(400);
});
$(document).keydown(function (e) {
    const code = e.keyCode || e.which;
    if (code == 27) $('.page__overlay_modal').hide();
});

// Modal reviews
$('.review').click(() => {
    $('.page__reviews_modal').fadeIn(400);
});
$('.modal__close').click(() => {
    $('.page__reviews_modal').fadeOut(400);
});
$(document).keydown(function (e) {
    const code = e.keyCode || e.which;
    if (code == 27) $('.page__reviews_modal').hide();
});

// Pop-up
// One
$('.item__one-title').click(() => {
    $('.tooltip__taste-one').fadeIn(400);
});
$('.chocolate').click(() => {
    $('.tooltip__taste-one').fadeOut(400);
});

// Two
$('.item__two-title').click(() => {
    $('.tooltip__taste-two').fadeIn(400);
});
$('.milk').click(() => {
    $('.tooltip__taste-two').fadeOut(400);
});

// Three
$('.item__three-title').click(() => {
    $('.tooltip__taste-three').fadeIn(400);
});
$('.nuts').click(() => {
    $('.tooltip__taste-three').fadeOut(400);
});

// Four
$('.item__four-title').click(() => {
    $('.tooltip__taste-four').fadeIn(400);
});
$('.sweet').click(() => {
    $('.tooltip__taste-four').fadeOut(400);
});

// Pop up subscribe
$('.subscription').click(() => {
    $('.page__subscribe_popup').fadeIn(400);
});
$('.popup__close').click(() => {
    $('.page__subscribe_popup').fadeOut(400);
});
$(document).keydown(function (e) {
    const code = e.keyCode || e.which;
    if (code == 27) $('.page__subscribe_popup').hide();
});

// Video
$('.item__play').click(() => $('.video__player')[0].paused ? $('.video__player')[0].play() : $('.video__player')[0].pause());

// Slider
new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,

    breakpoints: {
        // when window width is >= 480px
        680: {
            grid: {
                slidesPerView: 1,
                fill: 'row',
                rows: 1,
            }
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
            grid: {
                fill: 'row',
                rows: 1,
            }
        },
        // when window width is >= 1200px
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
            grid: {
                fill: 'row',
                rows: 1,
            }
        },
    },
});