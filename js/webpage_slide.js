$(document).ready(function () {

  $(".webpage > .imgbox").mouseover(function () {
    var img_height = $(this).children("img").height();
    var box_height = $(this).height();

    // box_height만큼 더하지 않으면 위로 붕 뜬다.
    $(this).children("img").stop().animate({marginTop: -img_height + box_height}, 8000);
  }).mouseout(function () {
    $(this).children("img").stop().animate({marginTop: 0}, 1000);
  });

});

