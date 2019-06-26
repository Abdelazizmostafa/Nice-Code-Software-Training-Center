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
    
});