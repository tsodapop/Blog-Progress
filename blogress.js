$(document).ready(function(){
    $('#tabTwo').click(function(){
        $('body').animate({
            scrollTop: $("#tabPage").offset().top
            },1000);
        $('.one').hide();
        $('.two').show();
        $('.three').hide();
        $('.linkButton').hide();
    });
});

$(document).ready(function(){
    $('#tabOne').click(function(){
        $('body').animate({
            scrollTop: $("#tabPage").offset().top
            },1000);
        $('.one').show();
        $('.two').hide();
        $('.three').hide();
        $('.linkButton').show();
    });
});

$(document).ready(function(){
    $('#tabThree').click(function(){
        $('body').animate({
            scrollTop: $("#tabPage").offset().top
            },1000);
        $('.one').hide();
        $('.two').hide();
        $('.three').show();
        $('.linkButton').hide();
    });
});

$(document).ready(function() {
	$('#homeButton').click(function() {
		$('body').animate({
	            scrollTop: $("#Introduction").offset().top
	            },1000);
		});
});

$(document).ready(function(){
    $('.linkButton').click(function(){
        $('body').animate({
            scrollTop: $("#tabPage").offset().top
            },1000);
        $('.unhideTabOneButtons').show();
    });
});

$(document).ready(function(){
    $('.unhideButtons').click(function(){
 	$('.hiddenData').fadeIn(2000);
 	$('.hiddenDataTwo').toggle();
    });
});

$(document).ready(function(){
	    $('.propogateButton').click(function(){
	    	if ($('.propogateButton').length < 4) {
		    	$('.propogateButton').clone(true).appendTo('.propogateBox');
		    	// $('.propogateBox').append('This is appended');
		    	console.log($('.propogateButton').length);
		    }
		    else {	console.log($('.propogateButton').length);
		}
		});
});


// for(x = 0; x < 1; x++) {
// 	alert('this is an alert');
// };


// $(document).ready(function(){ 
	// 	var n = $('.propogateButton').length;
	// 	if (n < 2) {
	// 		alert('test');
	// 		console.log(n);
	// 	} 
	// 	else {
	// 		alert('toy');
	// 	}
// });



