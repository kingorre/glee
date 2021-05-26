$(function(){

  $('[data-fancybox]').fancybox({
    youtube: {
      controls: 1
    }
  });

  $('.mix-filter__item').on('click', function () {
    $('.mix-filter').toggleClass('mix-filter--dropdown');
  });
  

  var pos = 0;

  $(window).scroll(function () {
    var height = $(window).scrollTop();
    var currentPos = $(this).scrollTop();
    
    if (height > 68) {
      $('.header').addClass('header--bg');
    } else {
      $('.header').removeClass('header--bg');
    };

    if (currentPos > pos) {
      $('.header').fadeOut('1500');
    } else {
      $('.header').fadeIn('3500');
    };
    pos = currentPos;
  });

  $('.burger').on('click', function () {
    $('.burger').toggleClass('burger--active');
    $('.menu').toggleClass('menu--active');
    $('body').toggleClass('lock');
    $('.user-nav').removeClass('user-nav--active');
  });

  $('.menu__link, .logo').on('click', function () {
    $('.menu').removeClass('menu--active');
    $('body').removeClass('lock');
    $('.user-nav').removeClass('user-nav--active');
  });

  $('.tools-btn').on('click', function () {
    $('.user-nav').toggleClass('user-nav--active');
    $('.tools-btn').toggleClass('tools-btn--active');
  });


  $('.top-slider').slick({
    dots: true,
    arrows: false
  });

  $('.slider-partners__items').slick({
    dots: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    autoplay: true,
    infinite: true,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });  

  $(".recent-card__star").rateYo({
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing   : "8px",
    starWidth: "11px"
  });

  $(".card-big__star").rateYo({
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing   : "13px",
    starWidth: "17px"
  });

  var mixer1 = mixitup('.week-products', {
    animation: {
      effects: 'fade translateZ(-30px)'
    },
    controls: {      
        scope: 'local'
    }
  });

  var mixer2 = mixitup('.new-design', {
    animation: {
      effects: 'fade translateZ(-30px)'
    },
    controls: {      
        scope: 'local'
    }
  });

});