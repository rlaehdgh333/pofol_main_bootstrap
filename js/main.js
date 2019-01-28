$(".scroll_about_down").on("click", function(){

  $("html, body").stop().animate({"scrollTop":$("#sec1").offset().top+"px"}, 500);
});


$("#header").find(".main_ani").each(function(i){
  var name = "opaShow";
  var duration = "0.5s";
  var delay = 0;
  if($(this).data("ani") != "" && $(this).data("ani") != undefined) {
    name = $(this).data("ani");	//html에서 data-name 값
  }
  if($(this).data("speed") != "" && $(this).data("speed") != undefined) {
    duration = $(this).data("speed");	//html에서 data-duration 값
  }
  if($(this).data("delay") != "" && $(this).data("delay") != undefined) {
    delay = $(this).data("delay");	//html에서 data-delay 값
  }
  $(this).css({
    "animation-name": name, 
    "animation-duration": duration,
    "animation-delay": delay
  });
});