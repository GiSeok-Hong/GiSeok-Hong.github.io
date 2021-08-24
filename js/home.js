$(document).ready(function(){
  function img_down(){
    $("#braket_img").stop().animate({marginTop:10});
    $("#css_img").stop().animate({marginTop:10});
    $("#js_img").stop().animate({marginTop:10});
    $("#setting_img").stop().animate({marginTop:10});
  }

  function img_up(){
    $("#braket_img").stop().animate({marginTop:0});
    $("#css_img").stop().animate({marginTop:0});
    $("#js_img").stop().animate({marginTop:0});
    $("#setting_img").stop().animate({marginTop:0});
  }

  setInterval(img_down,1000);
  setInterval(img_up,2000);
});