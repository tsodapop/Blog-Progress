$(document).ready(function(){
    $('#tabTwo').click(function(){
        $('body').animate({
            scrollTop: $("#tabPage").offset().top
            });
        $('.two').show();
    });
});

$(document).ready(function() {
	$('#homeButton').click(function() {
		$('body').animate({
	            scrollTop: $("#Introduction").offset().top
	            });
		});
});