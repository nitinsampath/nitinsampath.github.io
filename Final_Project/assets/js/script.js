$(document).ready(function(){

$(".top-bar-link").hover(function(){
  $(this).css("color", "#533745");
  $(this).css("font-weight", 400);
},function(){
  $(this).css("color", "white");
  $(this).css("font-weight", 300);
} )

$("#home").click(function(){
  $('html, body').animate({scrollTop:0},500);
})

$("#about-nav").click(function(){
  var pos = $("#about-section").offset().top;
  $('html, body').animate({scrollTop:pos-50},500);
})

$("#events-nav").click(function(){
  var pos = $("#events-section").offset().top;
  $('html, body').animate({scrollTop:pos-50},500);
})

$("#artist-nav").click(function(){
  var pos = $("#artist-section").offset().top;
  $('html, body').animate({scrollTop:pos-50},500);
})

$("#join-nav").click(function(){
  $('html, body').animate({scrollTop:$(document).height()},500);
})


$(".event-name").hover(function(){
  $(this).css("font-weight", 400);
  $(this).css("opacity", 0.9);
},
function(){
  $(this).css("font-weight", 200);
  $(this).css("opacity", 1);
})
$(".event-description").hide();
$(".event-name").click(function(){
  if ($(this).hasClass("selected")){
      $(this).removeClass("selected");

  }
  else{
    $(this).addClass("selected");
  }
})

$("#event1").click(function(){
  if ($(this).hasClass("selected")){
      var pos = $("#event1").offset().top;
      var e = $("#events-section").offset().top;
      $("#ed1").css("top", pos-e-110)
      $("#ed1").fadeIn();

  }
  else{
    $("#ed1").fadeOut();
    
    console.log(pos-e);
  }
})

$("#event2").click(function(){
  if ($(this).hasClass("selected")){
      var pos = $("#event1").offset().top;
      var e = $("#events-section").offset().top;
      $("#ed2").css("top", pos-e+10)
      $("#ed2").fadeIn();

  }
  else{
    $("#ed2").fadeOut();
    
  }
})

$("#event3").click(function(){
  if ($(this).hasClass("selected")){
       var pos = $("#event2").offset().top;
      var e = $("#events-section").offset().top;
      $("#ed3").css("top", pos-e+10)
      $("#ed3").fadeIn();

  }
  else{
    $("#ed3").fadeOut();
  }
})

$("#event4").click(function(){
  if ($(this).hasClass("selected")){
       var pos = $("#event3").offset().top;
      var e = $("#events-section").offset().top;
      $("#ed4").css("top", pos-e+10)
      $("#ed4").fadeIn();

  }
  else{
    $("#ed4").fadeOut();
  }
})

$("#event5").click(function(){
  if ($(this).hasClass("selected")){
       var pos = $("#event4").offset().top;
      var e = $("#events-section").offset().top;
      $("#ed5").css("top", pos-e+10)
      $("#ed5").fadeIn();

  }
  else{
    $("#ed5").fadeOut();
  }
})




$("#signed-up").hide();
$("#submit-email").click(function(){
  
  if ($("#email").val() != ""){
  $("#signed-up").fadeIn(1000);
  $("#signed-up").append($("#email").val() + "!");
  $('#submit-email').attr("disabled", true);
}

});



$('.fade').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 3000,
	  fade: true,
});

  console.log("hello?");

});