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
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
