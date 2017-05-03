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
	    	if ($('.propogateButton').length < 4) 
	    	{
		    	$('.propogateButton').clone(true).appendTo('.propogateBox');
		    	console.log($('.propogateButton').length);
		    }
		    else if ($('.propogateButton').length = 4)
		    {
		    	$(this).closest('.propogateButton').remove();
		    	console.log($('.propogateButton').length);
			}
		});
});


// for(x = 0; x < 3;) {
// 	console.log(x);
// 	// alert(x);
// 	x++;
// };


var a = 5;
var b = 10;

function matchBtoA() {
	a++;
}

while (a != b) {
	console.log(a);
	matchBtoA();
}	




