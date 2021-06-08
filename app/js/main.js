$(function(){

  $('.tabs__content').not('.tabs__content--active').hide();
	$('.tabs__btn').on('click',function (e) {

    $('.tabs__btn').removeClass('tabs__btn--active');
    $(this).addClass('tabs__btn--active');

		var tabItem = $(this),
			tabContentItem = $('.tabs__content'),
			tabItemPosition = tabItem.data('tab');

		tabContentItem.filter('.tabs__content--' + tabItemPosition)
			.fadeIn(700)
			.siblings()
			.hide();
      
    $(e.currentTarget)
    	.addClass('tabs__content--active')
      .siblings()
      .removeClass('tabs__content--active');
	});

  $('.related-products__slider').slick({
    prevArrow: '<button class="related-products__btn related-products__btn--left"><span class="sr-only">move to previous slide</span><img src="../images/icons/slider-left.svg"></button>',
    nextArrow: '<button class="related-products__btn related-products__btn--right"><span class="sr-only">Move to next slide</span><img src="../images/icons/slider-right.svg"></button>',
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.product-details__form').each(function() {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.product-details__button--plus'),
      btnDown = spinner.find('.product-details__button--minus'),
      min = input.attr('min');

    btnUp.click(function() {
      var oldValue = parseFloat(input.val());
      
        var newVal = oldValue + 1;
      
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });

  $('.product-details__input').styler();

  $(".product-details__star").rateYo({
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing   : "12px",
    starWidth: "18px"
  });

  $('.product-details__small').slick({
    asNavFor: '.product-details__big',
    dots: false,
    arrows: false,
    slidesToShow: 3,
    draggable: false,
    vertical: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          vertical: false
        }
      },
    ]
  });

  $('.product-details__big').slick({
    asNavFor: '.product-details__small',
    dots: false,
    arrows: false,
    slidesToShow: 1,
    draggable: false,
    fade: true
  });
  
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