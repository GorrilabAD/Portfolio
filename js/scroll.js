$(window).scroll(function() {
  $('.movTop').each(function(){
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+700) {
      $(this).addClass('fadeInUp').css("visibility","visible");
    }
  });
});
$(window).scroll(function() {
  $('.movLeft').each(function(){
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+700) {
      $(this).addClass('fadeInLeft').css("visibility","visible");
    }
  });
});
$(window).scroll(function() {
  $('.movDown').each(function(){
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+700) {
      $(this).addClass('fadeInDown').css("visibility","visible");
    }
  });
});
$(window).scroll(function() {
  $('.movRight').each(function(){
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow+700) {
      $(this).addClass('fadeInRight').css("visibility","visible");
    }
  });
});
