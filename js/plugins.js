$(document).ready(function(){

  $('.carousel').carousel({
    interval:5000
  }); 
    //adding class active to links
  $(".links li a").click(function(){
     $(this).parent().addClass("active").siblings().removeClass("active");  
    }); 
    
    //Set input focus newsletter
    $("#typename").on("focus",function(){
       $(this).removeAttr("placeholder");
     }); 
   $("#typename").on("blur",function(){
     $(this). attr("placeholder","Enter Your Email Address");

    });
    
    //Set input focus contact username
    $("#username").on("focus",function(){
       $(this).removeAttr("placeholder");
     }); 
   $("#username").on("blur",function(){
     $(this). attr("placeholder","Enter Your Name");

    }); 
    
    
    //Set input focus contact useremail
    $("#useremail").on("focus",function(){
       $(this).removeAttr("placeholder");
     }); 
   $("#useremail").on("blur",function(){
     $(this). attr("placeholder","Enter Your Email address");

    });  
    
    
    //Set input focus contact userphone
    $("#userphone").on("focus",function(){
       $(this).removeAttr("placeholder");
     }); 
   $("#userphone").on("blur",function(){
     $(this). attr("placeholder","Enter Your Cell Phone");

    });
    
    
    //Set input focus contact userMess
    $("#userMess").on("focus",function(){
       $(this).removeAttr("placeholder");
     }); 
   $("#userMess").on("blur",function(){
     $(this). attr("placeholder","Your Message");

    }); 
    
    // Adding NiceScroll Plugin
    $("body").niceScroll({
      cursorcolor:"#DEB80D",
      cursorwidth:"6px",
      cursorborder:"none"       
     });
    
     
  //Smooth Scroll to about    
     $(".scr-about").click(function(){
       $('html , body').animate({
       scrollTop:$("#scr-about").offset().top-55
    },1000);
    }); 
    
    //Smooth Scroll to features    
     $(".scr-whyus").click(function(){
      $('html , body').animate({
       scrollTop:$("#scr-whyus").offset().top-55
    
    },1000);
    });  
    
    //Smooth Scroll to testiminols    
     $(".scr-test").click(function(){
       $('html , body').animate({
        scrollTop:$("#scr-test").offset().top-55
    },1000);
    }); 
    
    
    //Smooth Scroll to Courses    
     $(".scr-cour").click(function(){
       $('html , body').animate({
        scrollTop:$("#scr-cour").offset().top-55
    },1000);
    });
    
    
       //Smooth Scroll to Courses    
     $(".scr-instr").click(function(){
       $('html , body').animate({
        scrollTop:$("#scr-instr").offset().top-55
    },1000);
    });  
    
       //Smooth Scroll to Courses    
     $(".src-news").click(function(){
       $('html , body').animate({
        scrollTop:$("#src-news").offset().top-55
    },1000);
    });  
    
    //Smooth Scroll to Courses    
     $(".scr-cont").click(function(){
       $('html , body').animate({
        scrollTop:$("#scr-cont").offset().top-55
    },1000);
    });
    
    //toggle option box
    $(".gear-check").click(function(){
     $(".color-option").toggle();
    });
    
      
    
  
    //changing color option to change themes
     var colorLi = $(".color-option ul li"),
        
        scrollButton = $("#scroll-top");
    
    colorLi.eq(0).css("backgroundColor", "#DEB80D").end()
    
           .eq(1).css("backgroundColor", "#10da59").end()
    
           .eq(2).css("backgroundColor", "#df0fea").end()
    
           .eq(3).css("backgroundColor", "#ff7dc4");
        
    colorLi.click(function () {
        
        $(".setupstyle").attr("href", $(this).attr("data-value"));
        
    });
//  ====================
    
    $(colorLi).on('click', function(){
      var path = $(this).data('path');
     $('.setupstyle').attr('href', path);
});
    
    // Caching The Scroll Top Element
    
    $(window).scroll(function () {
        
        if ($(this).scrollTop() >= 700) {
            
            scrollButton.show();
            
        } else {
            
            scrollButton.hide();
        }
    });
    
    // Click On Button To Scroll Top
    
    scrollButton.click(function () {
        
        $("html,body").animate({ scrollTop : 0 }, 600);
        
    });
    
});

// Loading Screen

$(window).load(function () {
    
    "use strict";
    
    // Loading Elements
    
    $(".loading-overlay .spinner").fadeOut(500, function () {
        
        // Show The Scroll

        $("body").css("overflow", "auto");
        
        $(this).parent().fadeOut(500, function () {
            
            $(this).remove();
        });
    });
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});