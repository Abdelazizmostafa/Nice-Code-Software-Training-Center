$(document).ready(function(){

  $('.carousel').carousel({
    
    interval:5000

}); 
//adding class active to links
 $(".links li a").click(function(){
     $(this).parent().addClass("active").siblings().removeClass("active");
    
    });    
    
});