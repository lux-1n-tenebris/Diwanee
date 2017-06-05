// Burger button 
$("#toggle").click(function() {
  $(this).toggleClass("on");
  $("#menu").slideToggle();
});


//Scroll animation on header
$(function(){
    $(window).scroll(function(){
        var $scrollPercent = ($(document).scrollTop() / 100);

        if($scrollPercent <= 1000){
            $('.header-top').css({backgroundColor:'rgba(255, 255, 255, '+$scrollPercent+')'});
        }
    });
});

