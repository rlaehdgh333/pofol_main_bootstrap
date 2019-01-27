$(".scroll_about_down").on("click", function(){

  $("html, body").stop().animate({"scrollTop":$("#sec1").offset().top+"px"}, 500);
});
