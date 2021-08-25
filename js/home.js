$(document).ready(function(){
  function braket_move() {
    $("#braket_img").stop().animate({ marginTop: "40px" }, 700, function () {
      $("#braket_img").stop().animate({ marginTop: "0" }, 700);
    });
  }
  setInterval(braket_move, 1400);
  
  function x_move() {
    $("#x_img").stop().animate({ marginBottom: "15px" }, 800, function () {
      $("#x_img").stop().animate({ marginBottom: "0" }, 800);
    });
  }
  setInterval(x_move, 1600);

  function jquery_move(){
    $("#jquery_img").stop().animate({ marginBottom: "40px" }, 1000, function () {
      $("#jquery_img").stop().animate({ marginBottom: "0" }, 1000);
    });
  }
  setInterval(jquery_move, 2000);

  function html_move() {
    $("#html_img").stop().animate({ marginBottom: "25px" }, 500, function () {
      $("#html_img").stop().animate({ marginBottom: "0" }, 500);
    });
  }
  setInterval(html_move, 1000);

  function css_move() {
    $("#css_img").stop().animate({ marginTop: "40px" }, 500, function () {
      $("#css_img").stop().animate({ marginTop: "0" }, 500);
    });
  }
  setInterval(css_move, 1000);

  function js_move() {
    $("#js_img").stop().animate({ marginBottom: "50px" }, 500, function () {
      $("#js_img").stop().animate({ marginBottom: "0" }, 500);
    });
  }
  setInterval(js_move, 1000);

  function setting_move() {
    $("#setting_img").stop().animate({ marginTop: "35px" }, 1000, function () {
      $("#setting_img").stop().animate({ marginTop: "0" }, 1000);
    });
  }
  setInterval(setting_move, 2000);
  
});