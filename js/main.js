(function ($) { 
    "use strict";

    var  mainStatus  = $('#status'),
     mainBody = $('body'),
     mainPreloader  = $('#preloader');

     window.onload = function() {
      mainStatus.fadeOut();
      mainPreloader.delay(500).fadeOut('slow');
      mainBody.delay(500).css({
          'overflow': 'visible'
      });
     }


     //sticky nav bar
$(document).ready(function () {
    var $sticky = $('.sticky');
    var stickyOffsetTop = $sticky.offset().top;
  
    $(window).scroll(function (e) {
        e.preventDefault();
  
        var scrollTop = $(window).scrollTop();
  
        if (scrollTop > stickyOffsetTop) {
            $sticky.addClass('is-fixed');
        } else {
            $sticky.removeClass('is-fixed');
        }
    });
  });

  //scroll
  $(document).ready(function() {
  
    var scrollLink = $('.scroll');
    
    // Smooth scrolling
    scrollLink.click(function(e) {
      e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000 );
    });
    
    // Active link switching
    $(window).scroll(function() {
      var scrollbarLocation = $(this).scrollTop();
      
      scrollLink.each(function() {
        
        var sectionOffset = $(this.hash).offset().top - 100;
        
        if ( sectionOffset <= scrollbarLocation ) {
          $(this).parent().addClass('active');
          $(this).parent().siblings().removeClass('active');
        }
      })
      
    })
    
  })
  //wow  .js
new WOW().init();


//counter
$('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
  
    {
  
      duration: 30000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
  
    });  
  });
  //mixitup
$('#portfolio').mixItUp();

$(".po_1").click(function(){

  $(this).addClass("active");
  $(".po_2").removeClass("active");
  $(".po_3").removeClass("active");
  $(".po_4").removeClass("active");
  $(".po_5").removeClass("active");
  $(".model_1").removeClass('animated');
  $(".model_1").removeClass('slideInLeft');
  $(".model_2").removeClass('animated');
  $(".model_2").removeClass('bounceInDown');
  $(".model_3").removeClass('animated');
  $(".model_3").removeClass('zoomInDown');
  $(".model_4").removeClass('animated');
  $(".model_4").removeClass('slideInDown');


});

$(".po_2").click(function(){
  $(this).addClass("active");
  $(".po_1").removeClass("active");
  $(".po_3").removeClass("active");
  $(".po_4").removeClass("active");
  $(".po_5").removeClass("active");
  $(".model_1").toggleClass('animated');
  $(".model_1").toggleClass('slideInLeft');
  $(".model_2").toggleClass('animated');
  $(".model_2").toggleClass('bounceInDown');
  $(".model_3").removeClass('animated');
  $(".model_3").removeClass('zoomInDown');
  $(".model_4").removeClass('animated');
  $(".model_4").removeClass('slideInDown');

});

$(".po_3").click(function(){

  $(this).addClass("active");
  $(".po_1").removeClass("active");
  $(".po_2").removeClass("active");
  $(".po_4").removeClass("active");
  $(".po_5").removeClass("active");
  $(".model_1").removeClass('animated');
  $(".model_1").removeClass('slideInLeft');
  $(".model_2").removeClass('animated');
  $(".model_2").removeClass('bounceInDown');
  $(".model_3").toggleClass('animated');
  $(".model_3").toggleClass('zoomInDown');
  $(".model_4").removeClass('animated');
  $(".model_4").removeClass('slideInDown');

});

$(".po_4").click(function(){

  $(this).addClass("active");
  $(".po_1").removeClass("active");
  $(".po_2").removeClass("active");
  $(".po_3").removeClass("active");
  $(".po_5").removeClass("active");
  $(".model_1").toggleClass('animated');
  $(".model_1").toggleClass('slideInLeft');
  $(".model_2").toggleClass('animated');
  $(".model_2").toggleClass('bounceInDown');
  $(".model_3").removeClass('animated');
  $(".model_3").removeClass('zoomInDown');
  $(".model_4").removeClass('animated');
  $(".model_4").removeClass('slideInDown');


});

$(".po_5").click(function(){

  $(this).addClass("active");
  $(".po_1").removeClass("active");
  $(".po_2").removeClass("active");
  $(".po_3").removeClass("active");
  $(".po_4").removeClass("active");
  $(".model_1").removeClass('animated');
  $(".model_1").removeClass('slideInLeft');
  $(".model_2").removeClass('animated');
  $(".model_2").removeClass('bounceInDown');
  $(".model_3").removeClass('animated');
  $(".model_3").removeClass('zoomInDown');
  $(".model_4").toggleClass('animated');
  $(".model_4").toggleClass('slideInDown');
});

//owl carousel
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items:1,
    transitionStyle:"backSlide",
    itemsDesktop:[1000,1],
    itemsDesktopSmall:[979,1],
    itemsTablet:[768,1],
    pagination:true,
    autoPlay:true
  });
});

//contact
$(".disabled").click(function(){
  $(".form-control").css("width","100%");
  $(".form-control").css("transition","1s ease-in-out");
  $(this).css("width","100%");
  $(this).css("transition","1s ease-in-out");
  $(this).css("margin-left","0px")

})

//comment
$(document).ready(function(){
$("._buttn_").click(function(){
$("textarea").css('border','2px solid #e91660');
$("textarea").css('border','2px solid #e91660');
$("input").css('border','2px solid #e91660');
$("input").css('border','2px solid #e91660')
});
});

})(jQuery);