$(document).ready(function () {
  $('a[href^="#"]').bind('click.smoothscroll', function(){
    var target = $(this).attr('href'),
        bl_top = $(target).offset().top;
        $('body, html').animate( { scrollTop: bl_top}, 2000 );
        return false;
  });

$( "#menu__items" ).hide();
  $( "#menu" ).click(function() {
    $("#dn").toggle('hide');

  $( "#menu__items" ).slideToggle( "slow", function() {
    // Animation complete.
  });


});




});
