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
$(document).ready(function () {
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
        // Parameters has to be in square brackSet '[]'
        owl.trigger("prev.owl.carousel", [300]);
    });

    $("ul.catalog__tabs").on(
        "click",
        "li:not(.catalog__tab_active)",
        function () {
        $(this)
            .addClass("catalog__tab_active")
            .siblings()
            .removeClass("catalog__tab_active")
            .closest("div.container")
            .find("div.catalog__content")
            .removeClass("catalog__content_active")
            .eq($(this).index())
            .addClass("catalog__content_active");
        }
    );

    function toggleSlide(item) {
        $(item).each(function (i) {
        $(this).on("click", function (e) {
            e.preventDefault();
            $(".catalog-item__content")
            .eq(i)
            .toggleClass("catalog-item__content_active");
            $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
        });
        });
    }

    toggleSlide(".catalog-item__link");
    toggleSlide(".catalog-item__back");

    // Modal

    $('[data-modal=consultation]').on('click', function () {
        $(".overlay, #consultation").fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thank, #order').fadeOut('slow');
    });
    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    $('.button_submit').on('click', function() {
        $('.overlay, #thank').fadeIn('slow');
    });
});
