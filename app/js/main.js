$(function(){


  $('.side-bar__btn').on('click', function () {
    $(this).next().slideToggle(500);
    $(this).toggleClass('side-bar__btn--clicked');
  });

  $('.filters-top__select').styler();

  $('.filters-top__btn').on('click', function(){
    $('.filters-top__btn').removeClass('filters-top__btn--active');
    $(this).addClass('filters-top__btn--active');
  });

  $('.button-list').on('click', function(){
    $('.product-card').addClass('product-card--list');
    $('.product-list__cards').addClass('product-list__cards--list');
    $('.product-list__pagination').addClass('pagination-left');
  });

  $('.button-grid').on('click', function(){
    $('.product-card').removeClass('product-card--list');
    $('.product-list__cards').removeClass('product-list__cards--list');
    $('.product-list__pagination').removeClass('pagination-left');
  });

  $(".filter-price__input").ionRangeSlider({
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text("$" + data.from + ".00")
      $('.filter-price__to').text("$" + data.to + ".00")
    },
    onChange: function (data) {
      $('.filter-price__from').text("$" + data.from + ".00")
      $('.filter-price__to').text("$" + data.to + ".00")
    },
  });

  $('.filter-brand__checkbox').on('click', function () {
    $(this).children('span').toggleClass('filter-brand__value--active');
  });

  $('.mix-filter__opener').on('click', function () {
    $(this).siblings().slideToggle(500);
  });

  $('[data-fancybox]').fancybox({
    youtube: {
      controls: 1
    }
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

  $(".product-card__star").rateYo({
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