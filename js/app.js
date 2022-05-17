// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();





//Div window height
jQuery(function(){
    jQuery(window).load(function(){ // On load
        jQuery('.sl-slider-wrapper').css({'height':((jQuery(window).height()) - 84 )+'px'});
        jQuery('.sl-slide').css({'height':((jQuery(window).height()) - 84 )+'px'});
        jQuery('.sl-slides-wrapper').css({'height':((jQuery(window).height()) - 84 )+'px'});
        jQuery('.sl-slide-inner').css({'height':((jQuery(window).height()) - 84 )+'px'});
        jQuery('.sl-content').css({'height':((jQuery(window).height()) - 84 )+'px'});
        jQuery('.container').css({'height':((jQuery(window).height()) - 84 )+'px'});
    });
    jQuery(window).resize(function(){ // On resize
        jQuery('.sl-slider-wrapper').css({'height':((jQuery(window).height()) - 84 )+'px'});
        jQuery('.sl-slide').css({'height':((jQuery(window).height()) - 84 )+'px'});
        jQuery('.sl-slides-wrapper').css({'height':((jQuery(window).height()) - 84 )+'px'});
        jQuery('.sl-slide-inner').css({'height':((jQuery(window).height()) - 84 )+'px'});     
        jQuery('.sl-content').css({'height':((jQuery(window).height()) - 84 )+'px'});  
        jQuery('.container').css({'height':((jQuery(window).height()) - 84 )+'px'}); 
    });
});

//inview
(function($) {
	$('.firstItems').first().bind('inview', function(event, isInView) {
	  if (isInView) {
	  	$(".innerElements").css({"opacity":"1","margin-top":"0"});
	  } else {
	  }
	});
	$('.moreItems').first().bind('inview', function(event, isInView) {
	  if (isInView) {
	  	$(".innerElements").css({"opacity":"1","margin-top":"0"});
	  } else {
	  }
	});	
})(jQuery);





//Isotope with side Menu
(function($) {

$(window).load(function() {
	$(function(){	  
		var $container = $('#isoContainer2'),
		$containerProxy = $container.clone().empty().css({ visibility: 'hidden' }); 

		$container.after( $containerProxy );  

		var $item = $container.find('.item').not('.big').eq(0);

		$(window).smartresize( function() {

			var colWidth = Math.floor( $containerProxy.width() / 4 );

			$container.css({
				width: colWidth * 4
			})
			.isotope({
				masonry: {
					columnWidth: colWidth
				}
			});
		}).smartresize();

	});
});

})(jQuery);


//Isotope with side Menu
(function($) {

$(window).load(function() {
  $(function(){   
    var $container = $('#isoContainer'),
    $containerProxy = $container.clone().empty().css({ visibility: 'hidden' }); 

    $container.after( $containerProxy );  

    var $item = $container.find('.item').not('.big').eq(0);

    $(window).smartresize( function() {

      var colWidth = Math.floor( $containerProxy.width() / 4 );

      $container.css({
        width: colWidth * 4
      })
      .isotope({
        masonry: {
          columnWidth: colWidth
        }
      });
    }).smartresize();

  });
});

})(jQuery);

//Normal Isotope
$(window).load(function() {
	$(function(){	  
		var $container = $('#fullGrid'),
		$containerProxy = $container.clone().empty().css({ visibility: 'hidden' }); 

		$container.after( $containerProxy );  

		var $item = $container.find('.gridItem').not('.big').eq(0);

		$(window).smartresize( function() {

			var colWidth = Math.floor( $containerProxy.width() / 4 );

			$container.css({
				width: colWidth * 4
			})
			.isotope({
				masonry: {
					columnWidth: colWidth
				}
			});
		}).smartresize();

	});

	// $('#fullGrid').isotope({
	//   itemSelector : '.gridItem',
	// 	 masonry: {
	// 	    columnWidth: 1
	// 	  }
	// });

})


//Equalize heights

var divHeight = jQuery('#isoWrap').height(); 
jQuery('.sideMenu').css('min-height', divHeight+'px');


(function($) {
	$(function(){
	    $('.innerFixedMenu').css({'height':($(document).height())+'px'});
	    $(window).resize(function(){
	        $('.innerFixedMenu').css({'height':($(document).height())+'px'});
	    });
	});
})(jQuery);


//BX slider
$(document).ready(function(){
  $('.bxslider').bxSlider({
  	pager: false,
  	nextSelector : '.redNext span',
  	nextText : '',
  	prevSelector : '.redPrev span',
  	prevText : '',
    useCSS : false,
    
    adaptiveHeight: true
  });
});

$(document).ready(function(){
  $('.bxslider2').bxSlider({
  	pager: false,
     useCSS : false,
    
    adaptiveHeight: true
  });
});

$(document).ready(function(){
  $('.bxslider3').bxSlider({
  	pager: false,
     useCSS : false,
    
    adaptiveHeight: true
  });
});

$(document).ready(function(){
  $('.bxslider4').bxSlider({
  	pager: false,
     useCSS : false,
    
    adaptiveHeight: true
  });
});


//General Equalisation
  (function($){
    $(document).ready(function() {
      $(window).load(function() {
        boxes = $('.equal');
        maxHeight = Math.max.apply(
        Math, boxes.map(function() {
          return $(this).height();
        }).get());
        boxes.height(maxHeight);
      });
    });
 })(jQuery);

  (function($){
    $(document).ready(function() {
      $(window).load(function() {
        boxes = $('.equal2');
        maxHeight = Math.max.apply(
        Math, boxes.map(function() {
          return $(this).height();
        }).get());
        boxes.height(maxHeight);
      });
    });
 })(jQuery); 

  (function($){
    $(document).ready(function() {
      $(window).load(function() {
        boxes = $('.equal3');
        maxHeight = Math.max.apply(
        Math, boxes.map(function() {
          return $(this).height();
        }).get());
        boxes.height(maxHeight);
      });
    });
 })(jQuery); 

  (function($){
    $(document).ready(function() {
      $(window).load(function() {
        boxes = $('.equal4');
        maxHeight = Math.max.apply(
        Math, boxes.map(function() {
          return $(this).height();
        }).get());
        boxes.height(maxHeight);
      });
    });
 })(jQuery);  

//Pretty Photo 
$(document).ready(function(){
	$("a[rel^='prettyPhoto']").prettyPhoto(
    {theme: 'dark_square',
    opacity: 1}
    );
});



//Scroll to HREF
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


