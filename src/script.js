// Function to animate first intro div
$(document).ready(function() {            
	$('.intro').animate({'opacity':'1'},500);
});	

// Function to animate all divs with '.hidden' 
// when they are displayed
$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hidden').each( function(){
            
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object/1.5 ){
                
                $(this).animate({'opacity':'1'},1000);
                    
            }
            
        }); 
    
    });
    
});	

//Function for the dark mode and light mode
$(document).ready(function(){
	$('input[type="checkbox"]').click(function(){
		if($(this).prop("checked") == true){
			$("body").stop().animate({backgroundColor:'#161925'}, 300); 
			$("h1").stop().animate({color: 'white'}, 300);
			$("h2").stop().animate({color: 'white'}, 300);
			$("p").stop().animate({color: 'white'}, 300);
			$("a").stop().animate({color: 'white'}, 300);
			$("ul").stop().animate({borderColor: 'white'}, 300);
			$("li").stop().animate({color: 'white'}, 300);
			$("#sun").attr("src", "img/sun white.png");
			$("#moon").attr("src", "img/moon white.png");


		}		
		else if($(this).prop("checked") == false){
			$("body").stop().animate({backgroundColor:'white'}, 300); 
			$("h1").stop().animate({color: '#161925'}, 300);
			$("h2").stop().animate({color: '#161925'}, 300);
			$("p").stop().animate({color: '#161925'}, 300);
			$("a").stop().animate({color: '#161925'}, 300);
			$("ul").stop().animate({borderColor: '#161925'}, 300);
			$("li").stop().animate({color: '#161925'}, 300);
			$("#sun").attr("src", "img/sun black.png");
			$("#moon").attr("src", "img/moon black.png");

		}
	});
});