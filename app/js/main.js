$(function(){
  
  $('.shop-slider').slick({
    dots: true,
    arrows: false
  });

  var mixer = mixitup('.week-products__items', {
    animation: {
      effects: 'fade translateZ(-30px)'
    }
  });

});