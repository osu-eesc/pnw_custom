// (function ($){
//   $(document).ready(function() {
//     /* prepend menu icon */
//     $('#block-superfish-2').prepend('<button id="menu-icon" class="nav-button"></button>');
    
//     /* toggle nav */
//     $('#menu-icon').on('click', function(){
//         $('#superfish-2').slideToggle();
//         $(this).toggleClass("active");
//     });

//   });
 
// })(jQuery);

// (function ($){
// 	$(document).ready(function(){
// 	/* prepend menu icon */
//   $('#block-superfish-2').prepend('<button id="menu-icon" class="nav-button"></button>');
	
// 		$(".nav-button").click(function () {
// 		$(".nav-button,.sf-menu").toggleClass("open");
// 		}); 
// 	});  
// })(jQuery);

(function ($){
	$(document).ready(function(){
		/* prepend menu icon */
  	$('header').prepend('<button id="menu-icon" class="nav-button"></button>');
  	/*  replace <nonlink> element with anchor */
  	$('li.menu-item-480 span').replaceWith('<a title="Browse handbook contents" href="#">Contents</a>');
  	$('#main-content ul.links').after('<div class="top-anchor"><a title="Top of page" href="#page">Back to top</a></div>');
  	
	
		$(".nav-button").click(function () {
		$(".nav-button,.menu").toggleClass("open");
		}); 
	});  
})(jQuery);