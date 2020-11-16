
   // Activate smooth scroll on page load with hash links in the url
   $(document).ready(function() {
     if (window.location.hash) {
       var initial_nav = window.location.hash;
       if ($(initial_nav).length) {
         var scrollto = $(initial_nav).offset().top - scrolltoOffset;
         $('html, body').animate({
           scrollTop: scrollto
         }, 1500, 'easeInOutExpo');
       }
     }
   });

   // Navigation active state on scroll
   var nav_sections = $('section');
   var main_nav = $('.nav-menu, .mobile-nav');
 
   $(window).on('scroll', function() {
     var cur_pos = $(this).scrollTop() + 200;
 
     nav_sections.each(function() {
       var top = $(this).offset().top,
         bottom = top + $(this).outerHeight();
 
       if (cur_pos >= top && cur_pos <= bottom) {
         if (cur_pos <= bottom) {
           main_nav.find('li').removeClass('active');
         }
         main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
       }
       if (cur_pos < 300) {
         $(".nav-menu ul:first li:first").addClass('active');
       }
     });
   });
 
   // Mobile Navigation
   if ($('.nav-menu').length) {
     var $mobile_nav = $('.nav-menu').clone().prop({
       class: 'mobile-nav d-lg-none'
     });
     $('body').append($mobile_nav);
     $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
     $('body').append('<div class="mobile-nav-overly"></div>');
 
     $(document).on('click', '.mobile-nav-toggle', function(e) {
       $('body').toggleClass('mobile-nav-active');
       $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
       $('.mobile-nav-overly').toggle();
     });
 
     $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
       e.preventDefault();
       $(this).next().slideToggle(300);
       $(this).parent().toggleClass('active');
     });
    
 
     $(document).click(function(e) {
       var container = $(".mobile-nav, .mobile-nav-toggle");
       if (!container.is(e.target) && container.has(e.target).length === 0) {
         if ($('body').hasClass('mobile-nav-active')) {
           $('body').removeClass('mobile-nav-active');
           $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
           $('.mobile-nav-overly').fadeOut();
         }
       }
     });
   } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
     $(".mobile-nav, .mobile-nav-toggle").hide();
   }


$("#btnUp").click(function(){
   
    $("html,body").animate( {scrollTop:'0'} , 3000)

})

 /* start our slider*/
$('.slider-carousel ').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  dots:true,
  rtl:true,
  autoplay:1000,
  autoplayHoverPause:true,
  rtl:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})

/* Start themes */

$('.themes-carousel ').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  autoplay:true,
  autoplayTimeout:1000,
  autoplayHoverPause:true,
  
  rtl:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:5
      }
  }
})



    /*--/ Star Counter /--*/ 
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });



    $(".member").click(function(){

      var $member = $(this);
      var name = $member.children('span.name').text();
      var img = $member.children('img').attr('src');
      var title = $member.data('title');
     $('.mainsec h3').text(name);
     $('.mainsec span.title').text(title);
     $('.mainsec img').attr('src',img);
     
     
     console.log(name);
     console.log(title);
     console.log(img);

    })

