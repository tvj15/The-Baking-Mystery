/*global $, jQuery, alert*/
$(document).ready(function() {

    // ========================================================================= //
    //  magnificPopup
    // ========================================================================= //
  
    var magnifPopup = function() {
      $('.popup-img').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-with-zoom',
        gallery: {
          enabled: true
        },
        zoom: {
          enabled: true, 
  
          duration: 300,
          easing: 'ease-in-out',
          opener: function(openerElement) {
           
            return openerElement.is('img') ? openerElement : openerElement.find('img');
          }
        }
      });
    };
  
  
    // Call the functions
    magnifPopup();
  
  });
  
  // ========================================================================= //
  //  Porfolio isotope and filter
  // ========================================================================= //
  $(window).load(function(){
  
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-thumbnail',
      layoutMode: 'fitRows'
    });
  
    $('#portfolio-flters li').on( 'click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');
  
      portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });
  
  })


  jQuery(function($){

    /* ----------------------------------------------------------- */
    /*   MENU SMOOTH SCROLLING
    /* ----------------------------------------------------------- */ 
        var lastId,
        topMenu = $(".main-nav"),
        topMenuHeight = topMenu.outerHeight()+13,
        menuItems = topMenu.find('a[href^=\\#]'),
        scrollItems = menuItems.map(function(){
          var item = $($(this).attr("href"));
          if (item.length) { return item; }
        });
        menuItems.click(function(e){
          var href = $(this).attr("href"),
              offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+32;
          jQuery('html, body').stop().animate({ 
              scrollTop: offsetTop
          }, 1500);           
           jQuery('.navbar-collapse').removeClass('in');  
          e.preventDefault();
        });
        jQuery(window).scroll(function(){
           var fromTop = $(this).scrollTop()+topMenuHeight;
           var cur = scrollItems.map(function(){
             if ($(this).offset().top < fromTop)
               return this;
           });
           cur = cur[cur.length-1];
           var id = cur && cur.length ? cur[0].id : "";
           if (lastId !== id) {
               lastId = id;
               menuItems
                 .parent().removeClass("active")
                 .end().filter("[href=\\#"+id+"]").parent().addClass("active");
           }           
        })
  
  });

  $(document).ready(function(){ 
		$(window).on('scroll', function () {
			if ($(this).scrollTop() > 100) { 
				$('#back-to-top').fadeIn(); 
			} else { 
				$('#back-to-top').fadeOut(); 
			} 
		}); 
		$('#back-to-top').click(function(){ 
			$("html, body").animate({ scrollTop: 0 }, 600); 
			return false; 
		}); 
	});
  