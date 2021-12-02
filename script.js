$(document).ready(function () {
  var offset = 200;
  var duration = 300;
  $("#totop").fadeOut(0);

  $("a[href^='#']").on("click", function (event) {

    var hash = $(this).attr("href");
    if (hash !== "") {
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        900
      );
    }
  });

  $(window).scroll(function () {
    $(".slideanim").each(function () {
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();

      if (pos < winTop + 400) {
        $(this).addClass("slide");
      }
    });

    if ($(window).scrollTop() > offset) {
      $("#totop").css("opacity", "0.8");
      $("#totop").fadeIn(duration);
    } else {
      $("#totop").fadeOut(duration);
    }

    if ($(this).scrollTop() > offset) {
      $("#trash").removeClass("logo");
      $("#trash").addClass("logosmall");
    } else {
      $("#trash").removeClass("logosmall");
      $("#trash").addClass("logo");
    }

    var winTop = $(window).scrollTop();
    $(".mov_slideInRight").each(function () {
      var pos = $(this).offset().top;
      if (pos < winTop + 600) {
        $(this).addClass("slideInRight");
      }
    });

    $(".mov_fadeInUp").each(function () {
      var pos = $(this).offset().top;
      if (pos < winTop + 600) {
        $(this).addClass("fadeInUp");
      }
    });
  });
});
function calc() {
  var result = 1;
  result *= parseFloat(document.getElementById("calc_input").value) * 150;
  if (document.getElementById("all").checked)
    result = parseFloat(document.getElementById("all").value);
  document.getElementById("res").innerHTML = result;
}
var count = new Date("september 1, 2022 00:00:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var d = count - now;

  var days = Math.floor(d / (1000 * 60 * 60 * 24));
  var hours = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((d % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (d <= 0) {
    clearInterval(x);
  }
}, 1000);
