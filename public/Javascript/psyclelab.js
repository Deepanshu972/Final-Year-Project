//loading animation

$(window).on("load", function () {
  $(".loading-screen").fadeOut("slow");
  $('.tyre-fat').fadeOut("fast");
});

//options button

var nth;
var tl1 = new gsap.timeline();
var tl2 = new gsap.timeline();
$(document).ready(function () {
  $('.frame').fadeIn();
  $(".customize-option-btn:nth-child(1)").before().css('background', 'red');
});

$(".customize-option-btn:nth-child(1)").click(function () {
  $('.frame').delay(500).fadeIn();
  $('.handlebar').fadeOut();
  $('.seat').fadeOut();
  $('.mudguard').fadeOut();
  $('.fork').fadeOut();
  $('.cables').fadeOut();
  $('.gear').fadeOut();
  $('.tyre').fadeOut();
  $('.background').fadeOut();
  for (nth = 1; nth <= 9; nth++) {
    $(".customize-option-btn:nth-child(" + nth + ")").before().css('background', 'linear-gradient(0deg, rgb(255 47 0) 0%, rgb(255 69 0) 100%)');
  }
  $(".customize-option-btn:nth-child(1)").before().css('background', 'red');
});

$(".customize-option-btn:nth-child(2)").click(function () {
  $("*").css('pointer-events', 'none');
  $('.frame').fadeOut();
  $('.handlebar').delay(500).fadeIn();
  $('.seat').fadeOut();
  $('.cables').fadeOut();
  $('.mudguard').fadeOut();
  $('.fork').fadeOut();
  $('.gear').fadeOut();
  $('.tyre').fadeOut();
  $('.background').fadeOut();
  for (nth = 1; nth <= 9; nth++) {
    $(".customize-option-btn:nth-child(" + nth + ")").before().css('background', 'linear-gradient(0deg, rgb(255 47 0) 0%, rgb(255 69 0) 100%)');
  }
  $(".customize-option-btn:nth-child(2)").before().css('background', 'red');

  tl1
    .from('.hb-model1', { duration: 0.1, delay: 0.5, y: '10px', opacity: 0 })
    .from('.hb-model2', { duration: 0.1, delay: 0.005, y: '10px', opacity: 0, onComplete: fnEnable });
});

$(".customize-option-btn:nth-child(3)").click(function () {
  $('.frame').fadeOut();
  $('.handlebar').fadeOut();
  $('.seat').delay(500).fadeIn();
  $('.cables').fadeOut();
  $('.mudguard').fadeOut();
  $('.fork').fadeOut();
  $('.gear').fadeOut();
  $('.tyre').fadeOut();
  $('.background').fadeOut();
  for (nth = 1; nth <= 9; nth++) {
    $(".customize-option-btn:nth-child(" + nth + ")").before().css('background', 'linear-gradient(0deg, rgb(255 47 0) 0%, rgb(255 69 0) 100%)');
  }
  $(".customize-option-btn:nth-child(3)").before().css('background', 'red');
});

$(".customize-option-btn:nth-child(4)").click(function () {
  $('.frame').fadeOut();
  $('.handlebar').fadeOut();
  $('.seat').fadeOut();
  $('.cables').delay(500).fadeIn();
  $('.mudguard').fadeOut();
  $('.fork').fadeOut();
  $('.gear').fadeOut();
  $('.tyre').fadeOut();
  $('.background').fadeOut();
  for (nth = 1; nth <= 9; nth++) {
    $(".customize-option-btn:nth-child(" + nth + ")").before().css('background', 'linear-gradient(0deg, rgb(255 47 0) 0%, rgb(255 69 0) 100%)');
  }
  $(".customize-option-btn:nth-child(4)").before().css('background', 'red');
});

$(".customize-option-btn:nth-child(5)").click(function () {
  $("*").css('pointer-events', 'none');
  $('.frame').fadeOut();
  $('.handlebar').fadeOut();
  $('.seat').fadeOut();
  $('.cables').fadeOut();
  $('.mudguard').delay(500).fadeIn();
  $('.fork').fadeOut();
  $('.gear').fadeOut();
  $('.tyre').fadeOut();
  $('.background').fadeOut();
  for (nth = 1; nth <= 9; nth++) {
    $(".customize-option-btn:nth-child(" + nth + ")").before().css('background', 'linear-gradient(0deg, rgb(255 47 0) 0%, rgb(255 69 0) 100%)');
  }
  $(".customize-option-btn:nth-child(5)").before().css('background', 'red');

  $("*").css('pointer-events', 'none');
  tl1
    .from('.mg0', { duration: 0.1, delay: 0.5, y: '10px', opacity: 0 })
    .from('.mg1', { duration: 0.1, delay: 0.005, y: '10px', opacity: 0 })
    .from('.mg2', { duration: 0.1, delay: 0.01, y: '10px', opacity: 0 })
    .from('.mg3', { duration: 0.1, delay: 0.015, y: '10px', opacity: 0, onComplete: fnEnable });
});

$(".customize-option-btn:nth-child(6)").click(function () {
  $("*").css('pointer-events', 'none');
  $('.frame').fadeOut();
  $('.handlebar').fadeOut();
  $('.seat').fadeOut();
  $('.cables').fadeOut();
  $('.mudguard').fadeOut();
  $('.fork').delay(500).fadeIn();
  $('.gear').fadeOut();
  $('.tyre').fadeOut();
  $('.background').fadeOut();
  for (nth = 1; nth <= 9; nth++) {
    $(".customize-option-btn:nth-child(" + nth + ")").before().css('background', 'linear-gradient(0deg, rgb(255 47 0) 0%, rgb(255 69 0) 100%)');
  }
  $(".customize-option-btn:nth-child(6)").before().css('background', 'red');

  tl1
    .from('.fork-black', { duration: 0.1, delay: 0.5, y: '10px', opacity: 0 })
    .from('.fork-metal', { duration: 0.1, delay: 0.005, y: '10px', opacity: 0, onComplete: fnEnable });
});

$(".customize-option-btn:nth-child(7)").click(function () {
  $("*").css('pointer-events', 'none');
  $('.frame').fadeOut();
  $('.handlebar').fadeOut();
  $('.seat').fadeOut();
  $('.cables').fadeOut();
  $('.mudguard').fadeOut();
  $('.fork').fadeOut();
  $('.gear').delay(500).fadeIn();
  $('.tyre').fadeOut();
  $('.background').fadeOut();
  for (nth = 1; nth <= 9; nth++) {
    $(".customize-option-btn:nth-child(" + nth + ")").before().css('background', 'linear-gradient(0deg, rgb(255 47 0) 0%, rgb(255 69 0) 100%)');
  }
  $(".customize-option-btn:nth-child(7)").before().css('background', 'red');
  tl1
    .from('.gr8', { duration: 0.1, delay: 0.5, y: '10px', opacity: 0 })
    .from('.gr16', { duration: 0.1, delay: 0.005, y: '10px', opacity: 0 })
    .from('.gr21', { duration: 0.1, delay: 0.01, y: '10px', opacity: 0, onComplete: fnEnable });

  tl2
    .from('.geared', { duration: 0.1, delay: 0.5, y: '10px', opacity: 0 })
    .from('.gearless', { duration: 0.1, delay: 0.005, y: '10px', opacity: 0, onComplete: fnEnable });
});

$(".customize-option-btn:nth-child(8)").click(function () {
  $('.frame').fadeOut();
  $('.handlebar').fadeOut();
  $('.seat').fadeOut();
  $('.cables').fadeOut();
  $('.mudguard').fadeOut();
  $('.fork').fadeOut();
  $('.gear').fadeOut();
  $('.tyre').delay(500).fadeIn();
  $('.background').fadeOut();
  for (nth = 1; nth <= 9; nth++) {
    $(".customize-option-btn:nth-child(" + nth + ")").before().css('background', 'linear-gradient(0deg, rgb(255 47 0) 0%, rgb(255 69 0) 100%)');
  }
  $(".customize-option-btn:nth-child(8)").before().css('background', 'red');
});

$(".customize-option-btn:nth-child(9)").click(function () {
  $('.frame').fadeOut();
  $('.handlebar').fadeOut();
  $('.seat').fadeOut();
  $('.cables').fadeOut();
  $('.mudguard').fadeOut();
  $('.fork').fadeOut();
  $('.gear').fadeOut();
  $('.tyre').fadeOut();
  $('.background').delay(500).fadeIn();
  for (nth = 1; nth <= 9; nth++) {
    $(".customize-option-btn:nth-child(" + nth + ")").before().css('background', 'linear-gradient(0deg, rgb(255 47 0) 0%, rgb(255 69 0) 100%)');
  }
  $(".customize-option-btn:nth-child(9)").before().css('background', 'red');
});

//frame

var framemodel, frameprice;

$(document).ready(function () {

  for (nth = 1; nth <= 10; nth++) {
    $(".anim-non-tyre-back img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 11; nth <= 20; nth++) {
    $(".anim-non-tyre-back img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 16; nth <= 25; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 26; nth <= 35; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }


  $(".frame div:nth-child(1) div:nth-child(1)").css("border", "1px solid");
  $(".anim-non-tyre-back img:nth-child(1)").css('display', 'block');
  $(".anim-non-tyre-back img:nth-child(11)").css('display', 'block');
  $(".anim-non-tyre-front img:nth-child(16)").css('display', 'block');
  $(".anim-non-tyre-front img:nth-child(26)").css('display', 'block');
  $(".frame-camo").fadeOut();
  framemodel = 'Plain Yellow';
  frameprice = 6300;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(2) td:nth-child(2)').html("Plain Yellow");
  $('.bill-table tr:nth-child(2) td:nth-child(3)').html("₹6300/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".frame div:nth-child(1) div:nth-child(1)").click(function () {

  for (nth = 1; nth <= 10; nth++) {
    $(".anim-non-tyre-back img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 11; nth <= 20; nth++) {
    $(".anim-non-tyre-back img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 16; nth <= 25; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 26; nth <= 35; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 1; nth <= 6; nth++) {
    $(".frame div:nth-child(1) div:nth-child(" + nth + ")").css("border", "0px");
  }
  for (nth = 1; nth <= 4; nth++) {
    $(".frame div:nth-child(3) div:nth-child(" + nth + ")").css("border", "0px");
  }
  $(this).css("border", "1px solid");

  $(".anim-non-tyre-back img:nth-child(1)").css('display', 'block');
  $(".anim-non-tyre-back img:nth-child(11)").css('display', 'block');
  $(".anim-non-tyre-front img:nth-child(16)").css('display', 'block');
  $(".anim-non-tyre-front img:nth-child(26)").css('display', 'block');
  framemodel = 'Plain Yellow';
  frameprice = 6300;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(2) td:nth-child(2)').html("Plain Yellow");
  $('.bill-table tr:nth-child(2) td:nth-child(3)').html("₹6300/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".frame div:nth-child(1) div:nth-child(2)").click(function () {

  for (nth = 1; nth <= 10; nth++) {
    $(".anim-non-tyre-back img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 11; nth <= 20; nth++) {
    $(".anim-non-tyre-back img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 16; nth <= 25; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 26; nth <= 35; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 1; nth <= 6; nth++) {
    $(".frame div:nth-child(1) div:nth-child(" + nth + ")").css("border", "0px");
  }
  for (nth = 1; nth <= 4; nth++) {
    $(".frame div:nth-child(3) div:nth-child(" + nth + ")").css("border", "0px");
  }
  $(this).css("border", "1px solid");

  $(".anim-non-tyre-back img:nth-child(2)").css('display', 'block');
  $(".anim-non-tyre-back img:nth-child(12)").css('display', 'block');
  $(".anim-non-tyre-front img:nth-child(17)").css('display', 'block');
  $(".anim-non-tyre-front img:nth-child(27)").css('display', 'block');
  framemodel = 'Plain Blue';
  frameprice = 6300;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(2) td:nth-child(2)').html("Plain Blue");
  $('.bill-table tr:nth-child(2) td:nth-child(3)').html("₹6300/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".frame div:nth-child(1) div:nth-child(3)").click(function () {

  for (nth = 1; nth <= 10; nth++) {
    $(".anim-non-tyre-back img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 11; nth <= 20; nth++) {
    $(".anim-non-tyre-back img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 16; nth <= 25; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 26; nth <= 35; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 1; nth <= 6; nth++) {
    $(".frame div:nth-child(1) div:nth-child(" + nth + ")").css("border", "0px");
  }
  for (nth = 1; nth <= 4; nth++) {
    $(".frame div:nth-child(3) div:nth-child(" + nth + ")").css("border", "0px");
  }
  $(this).css("border", "1px solid");

  $(".anim-non-tyre-back img:nth-child(3)").css('display', 'block');
  $(".anim-non-tyre-back img:nth-child(13)").css('display', 'block');
  $(".anim-non-tyre-front img:nth-child(18)").css('display', 'block');
  $(".anim-non-tyre-front img:nth-child(28)").css('display', 'block');
  framemodel = 'Plain Orange';
  frameprice = 6300;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(2) td:nth-child(2)').html("Plain Orange");
  $('.bill-table tr:nth-child(2) td:nth-child(3)').html("₹6300/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".frame div:nth-child(1) div:nth-child(4)").click(function () {

  for (nth = 1; nth <= 10; nth++) {
    $(".anim-non-tyre-back img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 11; nth <= 20; nth++) {
    $(".anim-non-tyre-back img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 16; nth <= 25; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 26; nth <= 35; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 1; nth <= 6; nth++) {
    $(".frame div:nth-child(1) div:nth-child(" + nth + ")").css("border", "0px");
  }
  for (nth = 1; nth <= 4; nth++) {
    $(".frame div:nth-child(3) div:nth-child(" + nth + ")").css("border", "0px");
  }
  $(this).css("border", "1px solid");

  $(".anim-non-tyre-back img:nth-child(4)").css('display', 'block');
  $(".anim-non-tyre-back img:nth-child(14)").css('display', 'block');
  $(".anim-non-tyre-front img:nth-child(19)").css('display', 'block');
  $(".anim-non-tyre-front img:nth-child(29)").css('display', 'block');
  framemodel = 'Plain Green';
  frameprice = 6300;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(2) td:nth-child(2)').html("Plain Green");
  $('.bill-table tr:nth-child(2) td:nth-child(3)').html("₹6300/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".frame div:nth-child(1) div:nth-child(5)").click(function () {

  for (nth = 1; nth <= 10; nth++) {
    $(".anim-non-tyre-back img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 11; nth <= 20; nth++) {
    $(".anim-non-tyre-back img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 16; nth <= 25; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 26; nth <= 35; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 1; nth <= 6; nth++) {
    $(".frame div:nth-child(1) div:nth-child(" + nth + ")").css("border", "0px");
  }
  for (nth = 1; nth <= 4; nth++) {
    $(".frame div:nth-child(3) div:nth-child(" + nth + ")").css("border", "0px");
  }
  $(this).css("border", "1px solid");

  $(".anim-non-tyre-back img:nth-child(5)").css('display', 'block');
  $(".anim-non-tyre-back img:nth-child(15)").css('display', 'block');
  $(".anim-non-tyre-front img:nth-child(20)").css('display', 'block');
  $(".anim-non-tyre-front img:nth-child(30)").css('display', 'block');
  framemodel = 'Plain Red';
  frameprice = 6300;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(2) td:nth-child(2)').html("Plain Red");
  $('.bill-table tr:nth-child(2) td:nth-child(3)').html("₹6300/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".frame div:nth-child(1) div:nth-child(6)").click(function () {

  for (nth = 1; nth <= 10; nth++) {
    $(".anim-non-tyre-back img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 11; nth <= 20; nth++) {
    $(".anim-non-tyre-back img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 16; nth <= 25; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 26; nth <= 35; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 1; nth <= 6; nth++) {
    $(".frame div:nth-child(1) div:nth-child(" + nth + ")").css("border", "0px");
  }
  for (nth = 1; nth <= 4; nth++) {
    $(".frame div:nth-child(3) div:nth-child(" + nth + ")").css("border", "0px");
  }
  $(this).css("border", "1px solid");

  $(".anim-non-tyre-back img:nth-child(6)").css('display', 'block');
  $(".anim-non-tyre-back img:nth-child(16)").css('display', 'block');
  $(".anim-non-tyre-front img:nth-child(21)").css('display', 'block');
  $(".anim-non-tyre-front img:nth-child(31)").css('display', 'block');
  framemodel = 'Metal Finish';
  frameprice = 6500;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(2) td:nth-child(2)').html("Metal Finish");
  $('.bill-table tr:nth-child(2) td:nth-child(3)').html("₹6500/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".frame div:nth-child(3) div:nth-child(1)").click(function () {

  for (nth = 1; nth <= 10; nth++) {
    $(".anim-non-tyre-back img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 11; nth <= 20; nth++) {
    $(".anim-non-tyre-back img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 16; nth <= 25; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 26; nth <= 35; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 1; nth <= 6; nth++) {
    $(".frame div:nth-child(1) div:nth-child(" + nth + ")").css("border", "0px");
  }
  for (nth = 1; nth <= 4; nth++) {
    $(".frame div:nth-child(3) div:nth-child(" + nth + ")").css("border", "0px");
  }
  $(this).css("border", "1px solid");

  $(".anim-non-tyre-back img:nth-child(7)").css('display', 'block');
  $(".anim-non-tyre-back img:nth-child(17)").css('display', 'block');
  $(".anim-non-tyre-front img:nth-child(22)").css('display', 'block');
  $(".anim-non-tyre-front img:nth-child(32)").css('display', 'block');
  framemodel = 'Camo Grey';
  frameprice = 6800;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(2) td:nth-child(2)').html("Camo Grey");
  $('.bill-table tr:nth-child(2) td:nth-child(3)').html("₹6800/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".frame div:nth-child(3) div:nth-child(2)").click(function () {

  for (nth = 1; nth <= 10; nth++) {
    $(".anim-non-tyre-back img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 11; nth <= 20; nth++) {
    $(".anim-non-tyre-back img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 16; nth <= 25; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 26; nth <= 35; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 1; nth <= 6; nth++) {
    $(".frame div:nth-child(1) div:nth-child(" + nth + ")").css("border", "0px");
  }
  for (nth = 1; nth <= 4; nth++) {
    $(".frame div:nth-child(3) div:nth-child(" + nth + ")").css("border", "0px");
  }
  $(this).css("border", "1px solid");

  $(".anim-non-tyre-back img:nth-child(8)").css('display', 'block');
  $(".anim-non-tyre-back img:nth-child(18)").css('display', 'block');
  $(".anim-non-tyre-front img:nth-child(23)").css('display', 'block');
  $(".anim-non-tyre-front img:nth-child(33)").css('display', 'block');
  framemodel = 'Camo Cream';
  frameprice = 6800;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(2) td:nth-child(2)').html("Camo Cream");
  $('.bill-table tr:nth-child(2) td:nth-child(3)').html("₹6800/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".frame div:nth-child(3) div:nth-child(3)").click(function () {

  for (nth = 1; nth <= 10; nth++) {
    $(".anim-non-tyre-back img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 11; nth <= 20; nth++) {
    $(".anim-non-tyre-back img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 16; nth <= 25; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 26; nth <= 35; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 1; nth <= 6; nth++) {
    $(".frame div:nth-child(1) div:nth-child(" + nth + ")").css("border", "0px");
  }
  for (nth = 1; nth <= 4; nth++) {
    $(".frame div:nth-child(3) div:nth-child(" + nth + ")").css("border", "0px");
  }
  $(this).css("border", "1px solid");

  $(".anim-non-tyre-back img:nth-child(9)").css('display', 'block');
  $(".anim-non-tyre-back img:nth-child(19)").css('display', 'block');
  $(".anim-non-tyre-front img:nth-child(24)").css('display', 'block');
  $(".anim-non-tyre-front img:nth-child(34)").css('display', 'block');
  framemodel = 'Camo Green';
  frameprice = 6800;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(2) td:nth-child(2)').html("Camo Green");
  $('.bill-table tr:nth-child(2) td:nth-child(3)').html("₹6800/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".frame div:nth-child(3) div:nth-child(4)").click(function () {

  for (nth = 1; nth <= 10; nth++) {
    $(".anim-non-tyre-back img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 11; nth <= 20; nth++) {
    $(".anim-non-tyre-back img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 16; nth <= 25; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 26; nth <= 35; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }

  for (nth = 1; nth <= 6; nth++) {
    $(".frame div:nth-child(1) div:nth-child(" + nth + ")").css("border", "0px");
  }
  for (nth = 1; nth <= 4; nth++) {
    $(".frame div:nth-child(3) div:nth-child(" + nth + ")").css("border", "0px");
  }
  $(this).css("border", "1px solid");

  $(".anim-non-tyre-back img:nth-child(10)").css('display', 'block');
  $(".anim-non-tyre-back img:nth-child(20)").css('display', 'block');
  $(".anim-non-tyre-front img:nth-child(25)").css('display', 'block');
  $(".anim-non-tyre-front img:nth-child(35)").css('display', 'block');
  framemodel = 'Camo Brown';
  frameprice = 6800;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(2) td:nth-child(2)').html("Camo Brown");
  $('.bill-table tr:nth-child(2) td:nth-child(3)').html("₹6800/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$("#frame-plain-btn").click(function () {
  $(".frame-camo").fadeOut();
  $(".frame-plain").delay(500).fadeIn();
});

$("#frame-camo-btn").click(function () {
  $(".frame-camo").delay(500).fadeIn();
  $(".frame-plain").fadeOut();
});

//handlebar

var handlebarmodel, handlebarprice;

$(document).ready(function () {
  $(".anim-non-tyre-front img:nth-child(14)").css('display', 'block');
  $(".anim-non-tyre-front img:nth-child(15)").css('display', 'none');
  $(".hb-model1").animate({ fontSize: '27px', color: "#ffa500" }, "fast");
  $(".hb1").delay(500).fadeIn();
  $(".hb2").fadeOut();
  handlebarmodel = 'HB-2734';
  handlebarprice = 650;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(3) td:nth-child(2)').html("HB-2734");
  $('.bill-table tr:nth-child(3) td:nth-child(3)').html("₹650/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".hb-model1").click(function () {
  $(".anim-non-tyre-front img:nth-child(14)").css('display', 'block');
  $(".anim-non-tyre-front img:nth-child(15)").css('display', 'none');
  $(".hb-model1").animate({ fontSize: '27px', color: "#ffa500" }, "fast");
  $(".hb-model2").animate({ fontSize: '22px', color: "#ffffff" }, "fast");
  gsap.to(".cust-slider-hb", { y: '0', ease: "bounce.out" });
  $(".hb1").delay(500).fadeIn();
  $(".hb2").fadeOut();
  handlebarmodel = 'HB-2734';
  handlebarprice = 650;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(3) td:nth-child(2)').html("HB-2734");
  $('.bill-table tr:nth-child(3) td:nth-child(3)').html("₹650/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".hb-model2").click(function () {
  $(".anim-non-tyre-front img:nth-child(15)").css('display', 'block');
  $(".anim-non-tyre-front img:nth-child(14)").css('display', 'none');
  $(".hb-model2").animate({ fontSize: '27px', color: "#ffa500" }, "fast");
  $(".hb-model1").animate({ fontSize: '22px', color: "#ffffff" }, "fast");
  gsap.to(".cust-slider-hb", { y: '43px', ease: "bounce.out" });
  $(".hb2").delay(500).fadeIn();
  $(".hb1").fadeOut();
  handlebarmodel = 'HB-8473';
  handlebarprice = 800;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(3) td:nth-child(2)').html("HB-8473");
  $('.bill-table tr:nth-child(3) td:nth-child(3)').html("₹800/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

//seat

var seatmodel, seatprice;

$(document).ready(function () {
  for (nth = 1; nth <= 6; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }
  $(".seat div:nth-child(1)>.color-container div:nth-child(1)").css("border", "1px solid");
  $(".anim-non-tyre-front img:nth-child(1)").css('display', 'block');
  $(".seat-camo").fadeOut();
  seatmodel = 'Leather Black';
  seatprice = 600;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(4) td:nth-child(2)').html("Leather Black");
  $('.bill-table tr:nth-child(4) td:nth-child(3)').html("₹600/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".seat div:nth-child(1)>.color-container div:nth-child(1)").click(function () {
  for (nth = 1; nth <= 6; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
    $(".seat div:nth-child(1)>.color-container div:nth-child(" + nth + ")").css("border", "0px");
  }
  for (nth = 1; nth <= 3; nth++) {
    $(".seat div:nth-child(1)>.color-container div:nth-child(" + nth + ")").css("border", "0px");
  }
  for (nth = 1; nth <= 3; nth++) {
    $(".seat div:nth-child(2)>.color-container div:nth-child(" + nth + ")").css("border", "0px");
  }
  $(this).css("border", "1px solid");
  $(".anim-non-tyre-front img:nth-child(1)").css('display', 'block');
  seatmodel = 'Leather Black';
  seatprice = 600;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(4) td:nth-child(2)').html("Leather Black");
  $('.bill-table tr:nth-child(4) td:nth-child(3)').html("₹600/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".seat div:nth-child(1)>.color-container div:nth-child(2)").click(function () {
  for (nth = 1; nth <= 6; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }
  for (nth = 1; nth <= 3; nth++) {
    $(".seat div:nth-child(1)>.color-container div:nth-child(" + nth + ")").css("border", "0px");
  }
  for (nth = 1; nth <= 3; nth++) {
    $(".seat div:nth-child(2)>.color-container div:nth-child(" + nth + ")").css("border", "0px");
  }
  $(this).css("border", "1px solid");
  $(".anim-non-tyre-front img:nth-child(2)").css('display', 'block');
  seatmodel = 'Leather Brown';
  seatprice = 650;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(4) td:nth-child(2)').html("Leather Brown");
  $('.bill-table tr:nth-child(4) td:nth-child(3)').html("₹650/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".seat div:nth-child(1)>.color-container div:nth-child(3)").click(function () {
  for (nth = 1; nth <= 6; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }
  for (nth = 1; nth <= 3; nth++) {
    $(".seat div:nth-child(1)>.color-container div:nth-child(" + nth + ")").css("border", "0px");
  }
  for (nth = 1; nth <= 3; nth++) {
    $(".seat div:nth-child(2)>.color-container div:nth-child(" + nth + ")").css("border", "0px");
  }
  $(this).css("border", "1px solid");
  $(".anim-non-tyre-front img:nth-child(3)").css('display', 'block');
  seatmodel = 'Leather Grey';
  seatprice = 600;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(4) td:nth-child(2)').html("Leather Grey");
  $('.bill-table tr:nth-child(4) td:nth-child(3)').html("₹600/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".seat div:nth-child(2)>.color-container div:nth-child(1)").click(function () {
  for (nth = 1; nth <= 6; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }
  for (nth = 1; nth <= 3; nth++) {
    $(".seat div:nth-child(1)>.color-container div:nth-child(" + nth + ")").css("border", "0px");
  }
  for (nth = 1; nth <= 3; nth++) {
    $(".seat div:nth-child(2)>.color-container div:nth-child(" + nth + ")").css("border", "0px");
  }
  $(this).css("border", "1px solid");
  $(".anim-non-tyre-front img:nth-child(4)").css('display', 'block');
  seatmodel = 'Camo Grey';
  seatprice = 500;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(4) td:nth-child(2)').html("Camo Grey");
  $('.bill-table tr:nth-child(4) td:nth-child(3)').html("₹500/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".seat div:nth-child(2)>.color-container div:nth-child(2)").click(function () {
  for (nth = 1; nth <= 6; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }
  for (nth = 1; nth <= 3; nth++) {
    $(".seat div:nth-child(1)>.color-container div:nth-child(" + nth + ")").css("border", "0px");
  }
  for (nth = 1; nth <= 3; nth++) {
    $(".seat div:nth-child(2)>.color-container div:nth-child(" + nth + ")").css("border", "0px");
  }
  $(this).css("border", "1px solid");
  $(".anim-non-tyre-front img:nth-child(5)").css('display', 'block');
  seatmodel = 'Camo Cream';
  seatprice = 500;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(4) td:nth-child(2)').html("Camo Cream");
  $('.bill-table tr:nth-child(4) td:nth-child(3)').html("₹500/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".seat div:nth-child(2)>.color-container div:nth-child(3)").click(function () {
  for (nth = 1; nth <= 6; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }
  for (nth = 1; nth <= 3; nth++) {
    $(".seat div:nth-child(1)>.color-container div:nth-child(" + nth + ")").css("border", "0px");
  }
  for (nth = 1; nth <= 3; nth++) {
    $(".seat div:nth-child(2)>.color-container div:nth-child(" + nth + ")").css("border", "0px");
  }
  $(this).css("border", "1px solid");
  $(".anim-non-tyre-front img:nth-child(6)").css('display', 'block');
  seatmodel = 'Camo Green';
  seatprice = 500;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(4) td:nth-child(2)').html("Camo Green");
  $('.bill-table tr:nth-child(4) td:nth-child(3)').html("₹500/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$("#seat-leather-btn").click(function () {
  $(".seat-camo").fadeOut();
  $(".seat-leather").delay(500).fadeIn();
});

$("#seat-camo-btn").click(function () {
  $(".seat-camo").delay(500).fadeIn();
  $(".seat-leather").fadeOut();
});

//cables

var cablemodel, cableprice;

$(document).ready(function () {
  for (nth = 8; nth <= 11; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }
  $(".cables .color-container div:nth-child(1)").css("border", "1px solid");
  $(".anim-non-tyre-front img:nth-child(8)").css('display', 'block');
  cablemodel = 'Black';
  cableprice = 350;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(5) td:nth-child(2)').html("Black");
  $('.bill-table tr:nth-child(5) td:nth-child(3)').html("₹350/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");

});

$(".cables .color-container div:nth-child(1)").click(function () {
  for (nth = 8; nth <= 11; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }
  for (nth = 1; nth <= 4; nth++) {
    $(".cables .color-container div:nth-child(" + nth + ")").css("border", "0px");
  }
  $(this).css("border", "1px solid");
  $(".anim-non-tyre-front img:nth-child(8)").css('display', 'block');
  cablemodel = 'Black';
  cableprice = 350;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(5) td:nth-child(2)').html("Black");
  $('.bill-table tr:nth-child(5) td:nth-child(3)').html("₹350/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".cables .color-container div:nth-child(2)").click(function () {
  for (nth = 8; nth <= 11; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }
  for (nth = 1; nth <= 4; nth++) {
    $(".cables .color-container div:nth-child(" + nth + ")").css("border", "0px");
  }
  $(this).css("border", "1px solid");
  $(".anim-non-tyre-front img:nth-child(9)").css('display', 'block');
  cablemodel = 'Green';
  cableprice = 350;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(5) td:nth-child(2)').html("Green");
  $('.bill-table tr:nth-child(5) td:nth-child(3)').html("₹350/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".cables .color-container div:nth-child(3)").click(function () {
  for (nth = 8; nth <= 11; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }
  for (nth = 1; nth <= 4; nth++) {
    $(".cables .color-container div:nth-child(" + nth + ")").css("border", "0px");
  }
  $(this).css("border", "1px solid");
  $(".anim-non-tyre-front img:nth-child(10)").css('display', 'block');
  cablemodel = 'Brown';
  cableprice = 350;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(5) td:nth-child(2)').html("Brown");
  $('.bill-table tr:nth-child(5) td:nth-child(3)').html("₹350/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".cables .color-container div:nth-child(4)").click(function () {
  for (nth = 8; nth <= 11; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }
  for (nth = 1; nth <= 4; nth++) {
    $(".cables .color-container div:nth-child(" + nth + ")").css("border", "0px");
  }
  $(this).css("border", "1px solid");
  $(".anim-non-tyre-front img:nth-child(11)").css('display', 'block');
  cablemodel = 'Grey';
  cableprice = 350;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(5) td:nth-child(2)').html("Grey");
  $('.bill-table tr:nth-child(5) td:nth-child(3)').html("₹350/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

//mudguard

var mudguardmodel, mudguardprice;

$(document).ready(function () {
  $(".mg0").animate({ fontSize: '27px', color: "#ffa500" }, "fast");
  for (nth = 38; nth <= 43; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }
  mudguardmodel = 'None';
  mudguardprice = 0;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(6) td:nth-child(2)').html("None");
  $('.bill-table tr:nth-child(6) td:nth-child(3)').html("₹0/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
})

$(".mg0").click(function () {
  for (nth = 1; nth <= 4; nth++) {
    $('.mgs div:nth-child(' + nth + ')').animate({ fontSize: '22px', color: "#ffffff" }, "fast");;
  }
  $(".mg0").animate({ fontSize: '27px', color: "#ffa500" }, "fast");
  gsap.to(".cust-slider-mudgd", { y: '0px', ease: "bounce.out" });

  for (nth = 38; nth <= 43; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }
  mudguardmodel = 'None';
  mudguardprice = 0;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(6) td:nth-child(2)').html("None");
  $('.bill-table tr:nth-child(6) td:nth-child(3)').html("₹0/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".mg1").click(function () {
  for (nth = 1; nth <= 4; nth++) {
    $('.mgs div:nth-child(' + nth + ')').animate({ fontSize: '22px', color: "#ffffff" }, "fast");;
  }
  $(".mg1").animate({ fontSize: '27px', color: "#ffa500" }, "fast");
  gsap.to(".cust-slider-mudgd", { y: '40px', ease: "bounce.out" });

  for (nth = 38; nth <= 43; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }
  $(".anim-non-tyre-front img:nth-child(38)").css('display', 'block');
  $(".anim-non-tyre-front img:nth-child(41)").css('display', 'block');
  mudguardmodel = 'MG-3984';
  mudguardprice = 150;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(6) td:nth-child(2)').html("MG-3984");
  $('.bill-table tr:nth-child(6) td:nth-child(3)').html("₹150/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".mg2").click(function () {
  for (nth = 1; nth <= 4; nth++) {
    $('.mgs div:nth-child(' + nth + ')').animate({ fontSize: '22px', color: "#ffffff" }, "fast");;
  }
  $(".mg2").animate({ fontSize: '27px', color: "#ffa500" }, "fast");
  gsap.to(".cust-slider-mudgd", { y: '83px', ease: "bounce.out" });

  for (nth = 38; nth <= 43; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }
  $(".anim-non-tyre-front img:nth-child(39)").css('display', 'block');
  $(".anim-non-tyre-front img:nth-child(42)").css('display', 'block');
  mudguardmodel = 'MG-1723';
  mudguardprice = 200;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(6) td:nth-child(2)').html("MG-1723");
  $('.bill-table tr:nth-child(6) td:nth-child(3)').html("₹200/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});


$(".mg3").click(function () {
  for (nth = 1; nth <= 4; nth++) {
    $('.mgs div:nth-child(' + nth + ')').animate({ fontSize: '22px', color: "#ffffff" }, "fast");;
  }
  $(".mg3").animate({ fontSize: '27px', color: "#ffa500" }, "fast");
  gsap.to(".cust-slider-mudgd", { y: '123px', ease: "bounce.out" });

  for (nth = 38; nth <= 43; nth++) {
    $(".anim-non-tyre-front img:nth-child(" + nth + ")").css('display', 'none');
  }
  $(".anim-non-tyre-front img:nth-child(40)").css('display', 'block');
  $(".anim-non-tyre-front img:nth-child(43)").css('display', 'block');
  mudguardmodel = 'MG-9485';
  mudguardprice = 170;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(6) td:nth-child(2)').html("MG-9485");
  $('.bill-table tr:nth-child(6) td:nth-child(3)').html("₹170/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

//fork

var forkmodel, forkprice;

$(document).ready(function () {
  $(".anim-non-tyre-front img:nth-child(12)").css('display', 'block');
  $(".anim-non-tyre-front img:nth-child(13)").css('display', 'none');
  $(".anim-non-tyre-back img:nth-child(21)").css('display', 'block');
  $(".anim-non-tyre-back img:nth-child(22)").css('display', 'none');
  $(".fork-black").animate({ fontSize: '27px', color: "#ffa500" }, "fast");
  $(".forkb").delay(500).fadeIn();
  $(".forkm").fadeOut();
  forkmodel = 'Black';
  forkprice = 1200;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(7) td:nth-child(2)').html("Black");
  $('.bill-table tr:nth-child(7) td:nth-child(3)').html("₹1200/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".fork-black").click(function () {
  $(".anim-non-tyre-front img:nth-child(12)").css('display', 'block');
  $(".anim-non-tyre-front img:nth-child(13)").css('display', 'none');
  $(".anim-non-tyre-back img:nth-child(21)").css('display', 'block');
  $(".anim-non-tyre-back img:nth-child(22)").css('display', 'none');
  $(".fork-black").animate({ fontSize: '27px', color: "#ffa500" }, "fast");
  $(".fork-metal").animate({ fontSize: '22px', color: "#ffffff" }, "fast");
  gsap.to(".cust-slider-fork", { y: '0', ease: "bounce.out" });
  $(".forkb").delay(500).fadeIn();
  $(".forkm").fadeOut();
  forkmodel = 'Black';
  forkprice = 1200;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(7) td:nth-child(2)').html("Black");
  $('.bill-table tr:nth-child(7) td:nth-child(3)').html("₹1200/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".fork-metal").click(function () {
  $(".anim-non-tyre-front img:nth-child(12)").css('display', 'none');
  $(".anim-non-tyre-front img:nth-child(13)").css('display', 'block');
  $(".anim-non-tyre-back img:nth-child(21)").css('display', 'none');
  $(".anim-non-tyre-back img:nth-child(22)").css('display', 'block  ');
  $(".fork-metal").animate({ fontSize: '27px', color: "#ffa500" }, "fast");
  $(".fork-black").animate({ fontSize: '22px', color: "#ffffff" }, "fast");
  gsap.to(".cust-slider-fork", { y: '43px', ease: "bounce.out" });
  $(".forkm").delay(500).fadeIn();
  $(".forkb").fadeOut();
  forkmodel = 'Metal';
  forkprice = 1000;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(7) td:nth-child(2)').html("Metal");
  $('.bill-table tr:nth-child(7) td:nth-child(3)').html("₹1000/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

//gear

var gearmodel, gears, gearprice;

$(document).ready(function () {
  $(".anim-non-tyre-front img:nth-child(36)").css('display', 'block');
  $(".anim-non-tyre-front img:nth-child(37)").css('display', 'none');
  $(".geared").animate({ fontSize: '27px', color: "#ffa500" }, "fast");
  $(".gr").delay(500).fadeIn();
  $(".nogr").fadeOut();
  gearmodel = 'SM-3420';
  gears = 8;
  gearprice = 3000;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(8) td:nth-child(2)').html("SM-3420(8 geared)");
  $('.bill-table tr:nth-child(8) td:nth-child(3)').html("₹3000/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".geared").click(function () {
  $("*").css('pointer-events', 'none');
  $(".anim-non-tyre-front img:nth-child(36)").css('display', 'block');
  $(".anim-non-tyre-front img:nth-child(37)").css('display', 'none');
  $(".geared").animate({ fontSize: '27px', color: "#ffa500" }, "fast");
  $(".gearless").animate({ fontSize: '22px', color: "#ffffff" }, "fast");
  gsap.to(".cust-slider-gear", { y: '0', ease: "bounce.out" });
  $(".gr").delay(500).fadeIn();
  $(".nogr").fadeOut();
  $(".gr-no").delay(500).fadeIn();
  tl1
    .from('.gr8', { duration: 0.1, delay: 0.5, y: '10px', opacity: 0 })
    .from('.gr16', { duration: 0.1, delay: 0.005, y: '10px', opacity: 0 })
    .from('.gr21', { duration: 0.1, delay: 0.01, y: '10px', opacity: 0, onComplete: fnEnable });
  gearmodel = 'SM-3420';
  gears = 8;
  gearprice = 3000;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(8) td:nth-child(2)').html("SM-3420(8 geared)");
  $('.bill-table tr:nth-child(8) td:nth-child(3)').html("₹3000/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".gearless").click(function () {
  $(".anim-non-tyre-front img:nth-child(36)").css('display', 'none');
  $(".anim-non-tyre-front img:nth-child(37)").css('display', 'block');
  $(".gearless").animate({ fontSize: '27px', color: "#ffa500" }, "fast");
  $(".geared").animate({ fontSize: '22px', color: "#ffffff" }, "fast");
  gsap.to(".cust-slider-gear", { y: '43px', ease: "bounce.out" });
  $(".nogr").delay(500).fadeIn();
  $(".gr").fadeOut();
  $(".gr-no").fadeOut();
  gearmodel = 'GR-3037';
  gears = 1;
  gearprice = 800;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(8) td:nth-child(2)').html("GR-3037");
  $('.bill-table tr:nth-child(8) td:nth-child(3)').html("₹800/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

//gear number

$(document).ready(function () {
  $(".gr8").animate({ fontSize: '27px', color: "#ffa500" }, "fast");
  gearmodel = 'SM-3420';
  gears = 8;
  gearprice = 3000;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(8) td:nth-child(2)').html("SM-3420(8 geared)");
  $('.bill-table tr:nth-child(8) td:nth-child(3)').html("₹3000/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".gr8").click(function () {
  $(".gr8").animate({ fontSize: '27px', color: "#ffa500" }, "fast");
  $(".gr16").animate({ fontSize: '22px', color: "#ffffff" }, "fast");
  $(".gr21").animate({ fontSize: '22px', color: "#ffffff" }, "fast");
  gsap.to(".cust-slider-gear-no", { y: '0', ease: "bounce.out" });
  gearmodel = 'SM-3420';
  gears = 8;
  gearprice = 3000;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(8) td:nth-child(2)').html("SM-3420(8 geared)");
  $('.bill-table tr:nth-child(8) td:nth-child(3)').html("₹3000/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".gr16").click(function () {
  $(".gr16").animate({ fontSize: '27px', color: "#ffa500" }, "fast");
  $(".gr8").animate({ fontSize: '22px', color: "#ffffff" }, "fast");
  $(".gr21").animate({ fontSize: '22px', color: "#ffffff" }, "fast");
  gsap.to(".cust-slider-gear-no", { y: '40px', ease: "bounce.out" });
  gearmodel = 'SM-3420';
  gears = 16;
  gearprice = 4200;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(8) td:nth-child(2)').html("SM-3420(16 geared)");
  $('.bill-table tr:nth-child(8) td:nth-child(3)').html("₹4200/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".gr21").click(function () {
  $(".gr21").animate({ fontSize: '27px', color: "#ffa500" }, "fast");
  $(".gr16").animate({ fontSize: '22px', color: "#ffffff" }, "fast");
  $(".gr8").animate({ fontSize: '22px', color: "#ffffff" }, "fast");
  gsap.to(".cust-slider-gear-no", { y: '83px', ease: "bounce.out" });
  gearmodel = 'SM-3420';
  gears = 21;
  gearprice = 5300;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(8) td:nth-child(2)').html("SM-3420(21 geared)");
  $('.bill-table tr:nth-child(8) td:nth-child(3)').html("₹5300/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

//tyre

var tyremodel, tyreprice;

var childof, childob, childnf, childnb;
childblackf = document.querySelector(`.anim-tyre img:nth-child(${1})`);
childblackb = document.querySelector(`.anim-tyre img:nth-child(${9})`);
childgreenf = document.querySelector(`.anim-tyre img:nth-child(${2})`);
childgreenb = document.querySelector(`.anim-tyre img:nth-child(${10})`);
childbluef = document.querySelector(`.anim-tyre img:nth-child(${3})`);
childblueb = document.querySelector(`.anim-tyre img:nth-child(${11})`);
childbrownf = document.querySelector(`.anim-tyre img:nth-child(${4})`);
childbrownb = document.querySelector(`.anim-tyre img:nth-child(${12})`);

childblackf2 = document.querySelector(`.anim-tyre img:nth-child(${5})`);
childblackb2 = document.querySelector(`.anim-tyre img:nth-child(${13})`);
childgreenf2 = document.querySelector(`.anim-tyre img:nth-child(${6})`);
childgreenb2 = document.querySelector(`.anim-tyre img:nth-child(${14})`);
childbluef2 = document.querySelector(`.anim-tyre img:nth-child(${7})`);
childblueb2 = document.querySelector(`.anim-tyre img:nth-child(${15})`);
childbrownf2 = document.querySelector(`.anim-tyre img:nth-child(${8})`);
childbrownb2 = document.querySelector(`.anim-tyre img:nth-child(${16})`);

$(document).ready(function () {
  childnf = childblackf;
  childnb = childblackb;
  $(childblackf).css({ 'transform': 'rotate(-80deg)', 'transform-origin': '76% 65.5%' });
  $(childblackb).css({ 'transform': 'rotate(80deg)', 'transform-origin': '24.2% 65.5%' });
  $(childgreenf).css({ 'transform': 'translateX(20vw) rotate(80deg)', 'transform-origin': '76% 65.5%' });
  $(childgreenb).css({ 'transform': 'translateX(-20vw) rotate(-80deg)', 'transform-origin': '24.2% 65.5%' });
  $(childbluef).css({ 'transform': 'translateX(20vw) rotate(80deg)', 'transform-origin': '76% 65.5%' });
  $(childblueb).css({ 'transform': 'translateX(-20vw) rotate(-80deg)', 'transform-origin': '24.2% 65.5%' });
  $(childbrownf).css({ 'transform': 'translateX(20vw) rotate(80deg)', 'transform-origin': '76% 65.5%' });
  $(childbrownb).css({ 'transform': 'translateX(-20vw) rotate(-80deg)', 'transform-origin': '24.2% 65.5%' });
  $(childblackf2).css({ 'transform': 'translateX(20vw) rotate(80deg)', 'transform-origin': '76% 65.5%' });
  $(childblackb2).css({ 'transform': 'translateX(-20vw) rotate(-80deg)', 'transform-origin': '24.2% 65.5%' });
  $(childgreenf2).css({ 'transform': 'translateX(20vw) rotate(80deg)', 'transform-origin': '76% 65.5%' });
  $(childgreenb2).css({ 'transform': 'translateX(-20vw) rotate(-80deg)', 'transform-origin': '24.2% 65.5%' });
  $(childbluef2).css({ 'transform': 'translateX(20vw) rotate(80deg)', 'transform-origin': '76% 65.5%' });
  $(childblueb2).css({ 'transform': 'translateX(-20vw) rotate(-80deg)', 'transform-origin': '24.2% 65.5%' });
  $(childbrownf2).css({ 'transform': 'translateX(20vw) rotate(80deg)', 'transform-origin': '76% 65.5%' });
  $(childbrownb2).css({ 'transform': 'translateX(-20vw) rotate(-80deg)', 'transform-origin': '24.2% 65.5%' });
  $(".tyre div:nth-child(1) div:nth-child(1)").css({ 'border': '1px solid', 'transition': 'all 0.4s cubic-bezier(.08, .38, .51, .98);' })
  tyremodel = 'Razor-03 Black'
  tyreprice = 1600;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(9) td:nth-child(2)').html("Razor-03 Black");
  $('.bill-table tr:nth-child(9) td:nth-child(3)').html("₹1600/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".tyre div:nth-child(1) div:nth-child(1)").click(function () {
  for (nth = 1; nth <= 4; nth++) {
    $(".tyre div:nth-child(1) div:nth-child(" + nth + ")").css("border", "0px");
  }
  for (nth = 1; nth <= 4; nth++) {
    $(".tyre div:nth-child(3) div:nth-child(" + nth + ")").css("border", "0px");
  }
  $(this).css("border", "1px solid");
  childof = childnf;
  childob = childnb;
  childnf = childblackf;
  childnb = childblackb;
  if (childnf != childof && childnb != childob) {
    $("*").css('pointer-events', 'none');
  }
  tyreanim();
  tyremodel = 'Razor-03 Black'
  tyreprice = 1600;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(9) td:nth-child(2)').html("Razor-03 Black");
  $('.bill-table tr:nth-child(9) td:nth-child(3)').html("₹1600/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".tyre div:nth-child(1) div:nth-child(2)").click(function () {
  for (nth = 1; nth <= 4; nth++) {
    $(".tyre div:nth-child(1) div:nth-child(" + nth + ")").css("border", "0px");
  }
  for (nth = 1; nth <= 4; nth++) {
    $(".tyre div:nth-child(3) div:nth-child(" + nth + ")").css("border", "0px");
  }
  $(this).css("border", "1px solid");
  childof = childnf;
  childob = childnb;
  childnf = childgreenf;
  childnb = childgreenb;
  if (childnf != childof && childnb != childob) {
    $("*").css('pointer-events', 'none');
  }
  tyreanim();
  tyremodel = 'Razor-03 Green'
  tyreprice = 1600;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(9) td:nth-child(2)').html("Razor-03 Green");
  $('.bill-table tr:nth-child(9) td:nth-child(3)').html("₹1600/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".tyre div:nth-child(1) div:nth-child(3)").click(function () {
  for (nth = 1; nth <= 4; nth++) {
    $(".tyre div:nth-child(1) div:nth-child(" + nth + ")").css("border", "0px");
  }
  for (nth = 1; nth <= 4; nth++) {
    $(".tyre div:nth-child(3) div:nth-child(" + nth + ")").css("border", "0px");
  }
  $(this).css("border", "1px solid");
  childof = childnf;
  childob = childnb;
  childnf = childbluef;
  childnb = childblueb;
  if (childnf != childof && childnb != childob) {
    $("*").css('pointer-events', 'none');
  }
  tyreanim();
  tyremodel = 'Razor-03 Blue'
  tyreprice = 1600;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(9) td:nth-child(2)').html("Razor-03 Blue");
  $('.bill-table tr:nth-child(9) td:nth-child(3)').html("₹1600/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".tyre div:nth-child(1) div:nth-child(4)").click(function () {
  for (nth = 1; nth <= 4; nth++) {
    $(".tyre div:nth-child(1) div:nth-child(" + nth + ")").css("border", "0px");
  }
  for (nth = 1; nth <= 4; nth++) {
    $(".tyre div:nth-child(3) div:nth-child(" + nth + ")").css("border", "0px");
  }
  $(this).css("border", "1px solid");
  childof = childnf;
  childob = childnb;
  childnf = childbrownf;
  childnb = childbrownb;
  if (childnf != childof && childnb != childob) {
    $("*").css('pointer-events', 'none');
  }
  tyreanim();
  tyremodel = 'Razor-03 Brown'
  tyreprice = 1600;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(9) td:nth-child(2)').html("Razor-03 Brown");
  $('.bill-table tr:nth-child(9) td:nth-child(3)').html("₹1600/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".tyre div:nth-child(3) div:nth-child(1)").click(function () {
  for (nth = 1; nth <= 4; nth++) {
    $(".tyre div:nth-child(1) div:nth-child(" + nth + ")").css("border", "0px");
  }
  for (nth = 1; nth <= 4; nth++) {
    $(".tyre div:nth-child(3) div:nth-child(" + nth + ")").css("border", "0px");
  }
  $(this).css("border", "1px solid");
  childof = childnf;
  childob = childnb;
  childnf = childblackf2;
  childnb = childblackb2;
  if (childnf != childof && childnb != childob) {
    $("*").css('pointer-events', 'none');
  }
  tyreanim();
  tyremodel = 'Monster-03 Black'
  tyreprice = 2500;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(9) td:nth-child(2)').html("Monster-03 Black");
  $('.bill-table tr:nth-child(9) td:nth-child(3)').html("₹2500/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".tyre div:nth-child(3) div:nth-child(2)").click(function () {
  for (nth = 1; nth <= 4; nth++) {
    $(".tyre div:nth-child(1) div:nth-child(" + nth + ")").css("border", "0px");
  }
  for (nth = 1; nth <= 4; nth++) {
    $(".tyre div:nth-child(3) div:nth-child(" + nth + ")").css("border", "0px");
  }
  $(this).css("border", "1px solid");
  childof = childnf;
  childob = childnb;
  childnf = childgreenf2;
  childnb = childgreenb2;
  if (childnf != childof && childnb != childob) {
    $("*").css('pointer-events', 'none');
  }
  tyreanim();
  tyremodel = 'Monster-03 Green'
  tyreprice = 2500;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(9) td:nth-child(2)').html("Monster-03 Green");
  $('.bill-table tr:nth-child(9) td:nth-child(3)').html("₹2500/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".tyre div:nth-child(3) div:nth-child(3)").click(function () {
  for (nth = 1; nth <= 4; nth++) {
    $(".tyre div:nth-child(1) div:nth-child(" + nth + ")").css("border", "0px");
  }
  for (nth = 1; nth <= 4; nth++) {
    $(".tyre div:nth-child(3) div:nth-child(" + nth + ")").css("border", "0px");
  }
  $(this).css("border", "1px solid");
  childof = childnf;
  childob = childnb;
  childnf = childbluef2;
  childnb = childblueb2;
  if (childnf != childof && childnb != childob) {
    $("*").css('pointer-events', 'none');
  }
  tyreanim();
  tyremodel = 'Monster-03 Blue'
  tyreprice = 2500;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(9) td:nth-child(2)').html("Monster-03 Blue");
  $('.bill-table tr:nth-child(9) td:nth-child(3)').html("₹2500/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

$(".tyre div:nth-child(3) div:nth-child(4)").click(function () {
  for (nth = 1; nth <= 4; nth++) {
    $(".tyre div:nth-child(1) div:nth-child(" + nth + ")").css("border", "0px");
  }
  for (nth = 1; nth <= 4; nth++) {
    $(".tyre div:nth-child(3) div:nth-child(" + nth + ")").css("border", "0px");
  }
  $(this).css("border", "1px solid");
  childof = childnf;
  childob = childnb;
  childnf = childbrownf2;
  childnb = childbrownb2;
  if (childnf != childof && childnb != childob) {
    $("*").css('pointer-events', 'none');
  }
  tyreanim();
  tyremodel = 'Monster-03 Brown'
  tyreprice = 2500;
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(9) td:nth-child(2)').html("Monster-03 Brown");
  $('.bill-table tr:nth-child(9) td:nth-child(3)').html("₹2500/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

function tyreanim() {
  if (childnf != childof && childnb != childob) {
    gsap.to('.anim-non-tyre-front', { duration: 0.8, y: '-4vh', ease: "power4.easeInOut" });
    gsap.to('.anim-non-tyre-back', { duration: 0.8, y: '-4vh', ease: "power4.easeInOut" });
    gsap.to(childof, { delay: 0.15, duration: 0.9, rotate: 80, x: '20vw', transformOrigin: '76% 65.5%', ease: "power4.easeInOut" });
    gsap.to(childob, { delay: 0.15, duration: 0.9, rotate: -80, x: '-20vw', transformOrigin: '24.2% 65.5%', ease: "power4.easeInOut" });
    gsap.to(childnf, { delay: 0.8, duration: 1, rotate: -80, x: '0vw', transformOrigin: '76% 65.5%', ease: "power4.easeInOut" });
    gsap.to(childnb, { delay: 0.8, duration: 1, rotate: 80, x: '0vw', transformOrigin: '24.2% 65.5%', ease: "power4.easeInOut" });
    gsap.to('.anim-non-tyre-front', { delay: 1.2, duration: 0.8, y: '0vh', ease: "power4.easeInOut" });
    gsap.to('.anim-non-tyre-back', { delay: 1.2, duration: 0.8, y: '0vh', ease: "power4.easeInOut", onComplete: fnEnable });
  }
};

function fnEnable() {
  $("*").css('pointer-events', 'auto');
}

$("#tyre-slim-btn").click(function () {
  $(".tyre-fat").fadeOut();
  $(".tyre-slim").delay(500).fadeIn();
});

$("#tyre-fat-btn").click(function () {
  $(".tyre-fat").delay(500).fadeIn();
  $(".tyre-slim").fadeOut();
});

//background

$(document).ready(function () {
  $(".img1").css("border", "1px solid");
});

$(".img1").click(function () {
  for (nth = 1; nth <= 4; nth++) {
    $(".bgs img:nth-child(" + nth + ")").fadeOut();
    $(".img" + nth + "").css("border", "0px");
  }
  $(this).css("border", "1px solid");
  $('.bgs img:nth-child(1)').fadeIn();
});

$(".img2").click(function () {
  for (nth = 1; nth <= 4; nth++) {
    $(".bgs img:nth-child(" + nth + ")").fadeOut();
    $(".img" + nth + "").css("border", "0px");
  }
  $(this).css("border", "1px solid");
  $('.bgs img:nth-child(2)').fadeIn();
});

$(".img3").click(function () {
  for (nth = 1; nth <= 4; nth++) {
    $(".bgs img:nth-child(" + nth + ")").fadeOut();
    $(".img" + nth + "").css("border", "0px");
  }
  $(this).css("border", "1px solid");
  $('.bgs img:nth-child(3)').fadeIn();
});

$(".img4").click(function () {
  for (nth = 1; nth <= 4; nth++) {
    $(".bgs img:nth-child(" + nth + ")").fadeOut();
    $(".img" + nth + "").css("border", "0px");
  }
  $(this).css("border", "1px solid");
  $('.bgs img:nth-child(4)').fadeIn();
});

//add to cart confirmation
$('.addtocart-confirmation').fadeOut("fast");
$('.add-to-cart').click(()=>{
  if(Boolean($.cookie("loggedIn")) == true){
  $('.addtocart-confirmation').fadeIn("fast");
}else{
  $(".signup-container").fadeIn("fast");
  gsap.from('.login-reg-panel', { duration: 0.8, backdropFilter: 'blur(0px)', ease: 'power2.inOut' });
}
})

$('.addtocart-confirmation>div button:nth-of-type(1)').click(()=>{
  $('.addtocart-confirmation').fadeOut("fast");
})

$('.addtocart-confirmation>div button:nth-of-type(2)').click(()=>{
  $('.addtocart-confirmation').fadeOut("fast");
  var clickedfrom = "addtocart";
  $.cookie("clickedfrom",clickedfrom);
  custom_cycle_save(clickedfrom);
})

//address

$(document).ready(() => {
  // Initialize select2
  $("#stateId").select2({ placeholder: "Select State*", width: '30vw' });
  $("#cityId").select2({ placeholder: "Select City*", width: '30vw' });
});


//place order

$('.place-order').click(() => {
  if (Boolean($.cookie("loggedIn")) == true) {
    gsap.to('.addr', { delay: 0.4, duration: 0.4, top: '12%', autoAlpha: 1, ease: "power2.out" });
    gsap.to('.customize-options', { duration: 0.4, x: '45vw', autoAlpha: 0, ease: "power2.out" });
    gsap.to('.customize-container', { duration: 0.4, x: '45vw', autoAlpha: 0, ease: "power2.out" });
    gsap.to('.bottom-buttons', { duration: 0.4, x: '45vw', autoAlpha: 0, ease: "power2.out" });
    gsap.to('.preview-area', { duration: 0.4, x: '-50vw', autoAlpha: 0, ease: "power2.out" });
    gsap.to('.customize-components', { duration: 0.4, backgroundColor: 'rgba(0, 0, 0, 0.62)', ease: "power2.out" });
    gsap.to('.total', { duration: 0.4, x: '-46vw', autoAlpha: 0, ease: "power2.out" });
  }
  else {
    $(".signup-container").fadeIn("fast");
  }
})

$('.addr svg').click(() => {
  gsap.to('.addr', { duration: 0.4, top: '100%', autoAlpha: 0, ease: "power2.out" });
  gsap.to('.customize-options', { delay: 0.4, duration: 0.4, x: '0vw', autoAlpha: 1, ease: "power2.out" });
  gsap.to('.customize-container', { delay: 0.4, duration: 0.4, x: '0vw', autoAlpha: 1, ease: "power2.out" });
  gsap.to('.bottom-buttons', { delay: 0.4, duration: 0.4, x: '0vw', autoAlpha: 1, ease: "power2.out" });
  gsap.to('.preview-area', { delay: 0.4, duration: 0.4, x: '0vw', autoAlpha: 1, ease: "power2.out" });
  gsap.to('.customize-components', { duration: 0.4, backgroundColor: 'rgb(0 0 0 / 0%)', ease: "power2.out" });
  gsap.to('.total', { delay: 0.4, duration: 0.4, x: '0vw', autoAlpha: 1, ease: "power2.out" });
})

//preview area click
var previewClick = false;
$('.preview-area').click(() => {
  if (previewClick == false) {
    gsap.to('.customize-options', { duration: 0.4, x: '45vw', autoAlpha: 0, ease: "power2.out" });
    gsap.to('.customize-container', { duration: 0.4, x: '45vw', autoAlpha: 0, ease: "power2.out" });
    gsap.to('.bottom-buttons', { duration: 0.4, x: '45vw', autoAlpha: 0, ease: "power2.out" });
    gsap.to('.preview-area', { duration: 0.4, scale: '1.3', x: '54%', ease: "power2.out" });
    gsap.to('.customize-components', { duration: 0.4, backgroundColor: 'rgba(0, 0, 0, 0.62)', ease: "power2.out" });
    gsap.to('.total', { duration: 0.4, y: '17vh', autoAlpha: 0, ease: "power2.out" });
    previewClick = true;
  }
  else {
    gsap.to('.customize-options', { duration: 0.4, x: '0', autoAlpha: 1, ease: "power2.out" });
    gsap.to('.customize-container', { duration: 0.4, x: '0', autoAlpha: 1, ease: "power2.out" });
    gsap.to('.bottom-buttons', { duration: 0.4, x: '0', autoAlpha: 1, ease: "power2.out" });
    gsap.to('.preview-area', { duration: 0.4, scale: '1', x: '0%', ease: "power2.out" });
    gsap.to('.customize-components', { duration: 0.4, backgroundColor: 'rgb(0 0 0 / 0%)', ease: "power2.out" });
    gsap.to('.total', { duration: 0.4, y: '0vh', autoAlpha: 1, ease: "power2.out" });
    previewClick = false;
  }
});

$('.img1').click(() => {
  console.log(
    {
      framemodel: framemodel,
      frameprice: frameprice,
      handlebarmodel: handlebarmodel,
      handlebarprice: handlebarprice,
      seatmodel: seatmodel,
      seatprice: seatprice,
      cablemodel: cablemodel,
      cableprice: cableprice,
      mudguardmodel: mudguardmodel,
      mudguardprice: mudguardprice,
      forkmodel: forkmodel,
      forkprice: forkprice,
      gearmodel: gearmodel,
      gears: gears,
      gearprice: gearprice,
      tyremodel: tyremodel,
      tyreprice: tyreprice
    }
  );

  console.log("Price = ", frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice);
});


//total
var total;
$(document).ready(() => {
  total = frameprice + handlebarprice + seatprice + cableprice + mudguardprice + forkprice + gearprice + tyreprice;
  $('.total-val').html("₹" + total + "/-");
  $('.bill-table tr:nth-child(10) td:nth-child(3)').html("₹" + total + "/-");
});

//info button

$('.info').click(() => {
  gsap.to('.bill', { delay: 0.4, duration: 0.4, top: '12%', autoAlpha: 1, ease: "power2.out" });
  gsap.to('.customize-options', { duration: 0.4, x: '45vw', autoAlpha: 0, ease: "power2.out" });
  gsap.to('.customize-container', { duration: 0.4, x: '45vw', autoAlpha: 0, ease: "power2.out" });
  gsap.to('.bottom-buttons', { duration: 0.4, x: '45vw', autoAlpha: 0, ease: "power2.out" });
  gsap.to('.preview-area', { duration: 0.4, x: '-50vw', autoAlpha: 0, ease: "power2.out" });
  gsap.to('.customize-components', { duration: 0.4, backgroundColor: 'rgba(0, 0, 0, 0.62)', ease: "power2.out" });
  gsap.to('.total', { duration: 0.4, x: '-46vw', autoAlpha: 0, ease: "power2.out" });
})

$('.bill svg').click(() => {
  gsap.to('.bill', { duration: 0.4, top: '100%', autoAlpha: 0, ease: "power2.out" });
  gsap.to('.customize-options', { delay: 0.4, duration: 0.4, x: '0vw', autoAlpha: 1, ease: "power2.out" });
  gsap.to('.customize-container', { delay: 0.4, duration: 0.4, x: '0vw', autoAlpha: 1, ease: "power2.out" });
  gsap.to('.bottom-buttons', { delay: 0.4, duration: 0.4, x: '0vw', autoAlpha: 1, ease: "power2.out" });
  gsap.to('.preview-area', { delay: 0.4, duration: 0.4, x: '0vw', autoAlpha: 1, ease: "power2.out" });
  gsap.to('.customize-components', { duration: 0.4, backgroundColor: 'rgb(0 0 0 / 0%)', ease: "power2.out" });
  gsap.to('.total', { delay: 0.4, duration: 0.4, x: '0vw', autoAlpha: 1, ease: "power2.out" });
})

//save cycle data to db
function custom_cycle_save(clickedfrom) {
  console.log(clickedfrom);
  $.ajax({
    type: 'POST',
    url: '/custom-cycle',
    data: {
      email: $.cookie("email"),
      framemodel: framemodel,
      frameprice: frameprice,
      handlebarmodel: handlebarmodel,
      handlebarprice: handlebarprice,
      seatmodel: seatmodel,
      seatprice: seatprice,
      cablemodel: cablemodel,
      cableprice: cableprice,
      mudguardmodel: mudguardmodel,
      mudguardprice: mudguardprice,
      forkmodel: forkmodel,
      forkprice: forkprice,
      gearmodel: gearmodel,
      gears: gears,
      gearprice: gearprice,
      tyremodel: tyremodel,
      tyreprice: tyreprice,
      total: total,
      clickedfrom: clickedfrom
    },
    success: window.location.href = "myaccount.html"
  });
}
