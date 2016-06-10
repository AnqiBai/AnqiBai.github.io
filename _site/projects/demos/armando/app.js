var main = function() {
  $('.nav li').click(function() {
    var category = $(this).attr('class');

    $('.nav li').removeClass('active');
    $(this).addClass('active');
    
    if(category === "nav-voice"){
    	$('.thumbnail').removeClass('selected');
    	$('.voice').addClass('selected');
    }else if(category === "nav-input"){
    	$('.thumbnail').removeClass('selected');
    	$('.input').addClass('selected');
    }else if(category === "nav-display"){
    	$('.thumbnail').removeClass('selected');
    	$('.display').addClass('selected');
    }else if(category === "nav-account"){
    	$('.thumbnail').removeClass('selected');
    	$('.account').addClass('selected');
    }else if(category === "nav-all"){
    	$('.thumbnail').removeClass('selected');
    }
    
    
    
  });
};
 
$(document).ready(main);