$(function(){
	$('.required').each(function(){
		var $required = $("<strong class='high'> *</strong>");
		$required.insertAfter(this);
	}).blur(function(){
		$(this).nextAll(".formtips").remove();
		
			 
	})
});