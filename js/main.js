$(function () {
    $('#page-top').click(function () {
      var position = 0;
      var href = $(this).attr("href");
      if (href == "#" || href == "") { var target = $('html'); } else { var target = $(href); }      //var position = target.offset().top;
      var speed = 500;
      $("html, body").animate({
        scrollTop: position
      }, speed);
      return false;
    });
  });