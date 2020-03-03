$(function() {
    $('.slider__slides').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.arrows__btn--left'),
        nextArrow: $('.arrows__btn--right'),
        responsive: [
            {
              breakpoint: 820,
              settings: {
                slidesToScroll: 1,
                slidesToShow: 2
              }
            },
            {
              breakpoint: 450,
              settings: {
                slidesToScroll: 1,
                slidesToShow: 1,
                dots: true,
                arrows: false
              }
            }
        ]
    });

    // Вывод popup для обратного звонка
    $('.btn--bg-none, .btn, .callback__btn--mob').on('click', function() {
      $('.popup').addClass('popup--active');
      $('.bg').addClass('bg--active');
    });

    $('.bg, .popup__exit').on('click', function() {
      $('.popup').removeClass('popup--active');
      $('.bg').removeClass('bg--active');
      $('.burger-popup').removeClass('burger-popup--active');
    });

    // Вывод popup меню
    $('.header__burger').on('click', function() {
      $('.burger-popup').addClass('burger-popup--active');
      $('.bg').addClass('bg--active');
    });

    $('.burger-popup .nav__link').on('click', function() {
      $('.bg').removeClass('bg--active');
      $('.burger-popup').removeClass('burger-popup--active');
    });

    $(".header__menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
    });

    $(function() {
      $('#tel').mask('8(999) 999-99-99');
    });
});