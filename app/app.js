/* app.js */

$(function() {

  $('.app_icon').on("touchstart", function(){
    $(this).addClass('grow');
    $(this).removeClass('shrink');
  });

  $('.app_icon').on("touchend", function(){
    $(this).addClass('shrink');
    $(this).removeClass('grow');
  });

});