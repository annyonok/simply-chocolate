// new Swiper('.swiper', {
//     navigation: {
//         nextEl: '.portfolio__arrow_right',
//         prevEl: '.portfolio__arrow_left',
//         disabledClass: 'portfolio__arrow_disable',
//       },
//       // Responsive breakpoints
//     breakpoints: {
//     // when window width is >= 480px
//     480: {
//       grid: {
//         fill: 'row',
//         rows: 2
//       }
//     },
//     // when window width is >= 768px
//     768: {
//         slidesPerView: 2,
//         grid: {
//             fill: 'row',
//             rows: 2
//           }        
//         }
//   }
// });

// Menu
$('.header__navigation-burger').click(() => {
    $('.header__navigation').slideToggle().css('display', 'flex');
})

$('.header__navigation-close').click(() => {
    $('.header__navigation').slideToggle();
})

// scrollDown
$(function(){
	$('.start__page-scroll').click(() => {
		$('html, body').animate({scrollTop: $(document).height() - $(window).height()}, 600);
		return false;
	});
});

// Modal
$('.start__page-order').click(() => {
    $('.page__overlay_modal').fadeIn(400);
})

$('.modal__close').click(() => {
    $('.page__overlay_modal').fadeOut(400);
})