/* app.js */


var icon_offset = 0;

$(function() {

  var $app_icon = $('.app_icon');
  var $app_icons = $('.app_icons');

  $app_icon.on("touchstart", function(){
    $(this).addClass('grow');
    $(this).removeClass('shrink');
  });

  $app_icon.on("touchend", function(){

    var icon_index = Number($(this).data("icon-id"));
    var new_icon_offset = -93*icon_index;

    console.log(new_icon_offset);

    $(this).addClass('shrink');
    $(this).removeClass('grow');
    
    var direction = (new_icon_offset < icon_offset) ? -1 : 1;

    var bounce_icon_offset = direction*20 + new_icon_offset;
    icon_offset = new_icon_offset;

    var moveToXAt = function(x, time){
      setTimeout(function(){
        $app_icons.css({
          "-webkit-transform": "translateX(" + x + "px)"
        });
      }, time);
    };

    moveToXAt(direction*40 + icon_offset, 0);
    moveToXAt(direction*-20 + icon_offset, 200);
     moveToXAt(icon_offset, 400);


    /*
    console.log(bounce_icon_offset);
    console.log(new_icon_offset);
    icon_offset = new_icon_offset;



    $('.app_icon').css({
      "-webkit-transform": "translateX(" + bounce_icon_offset + "px)"
    });

    setTimeout(function(){
      $('.app_icon').css({
        "-webkit-transform": "translateX(" + new_icon_offset + "px)"
      });
    }, 200);
    */

  });

});

