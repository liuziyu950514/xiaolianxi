  //   $(function(){
		// $(":input").focus(function(){//$("input, textarea")
		// 	  $(this).addClass("focus");
		// 	  //this.className = "focus";
		// }).blur(function(){
		// 	  $(this).removeClass("focus");
		// });
  //   })
  		$(function(){
  			$('input').focus(function(){
  				$(this).addClass('focus');
  			}).blur(function(){
  				$(this).removeClass('focus');
  			});
  		});