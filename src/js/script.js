/* $(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  dots: true,
                  arrows: false,
                }
            }
        ]
    });
  }); */
$(".owl-carousel").owlCarousel({
  nav: false,
  items: 1,
  dots: false,
  loop: true,
  autoHeight: true,
  /* navText: [
        '<button type="button" class="owl-prev"><img src="icons/left.svg"></button>',
        '<button type="button" class="owl-next"><img src="icons/right.svg"></button>'
    ] */
});
const owl = $(".owl-carousel");
owl.owlCarousel();
// Go to the next item
$(".next").click(function () {
  owl.trigger("next.owl.carousel");
});
// Go to the previous item
$(".prev").click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl.trigger("prev.owl.carousel", [300]);
});
