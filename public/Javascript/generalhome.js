import { enableScroll2 } from './threejs.js';

//video
var video = $('video');
var videoElement = video.get(0).currentTime;
$(".animation").hover(function () {
  if (videoElement == 0) {
    $(this).children("video")[0].play();
  }
},
);

//particles
tsParticles.load("tsparticles", {
  particles: {
    number: {
      density: { enable: true, value_area: 800 },
      value: (window.innerWidth / window.innerHeight) * 100
    },
    move: {
      enable: true
    },
    shape: {
      type: "image",
      image: [
        { src: "/assets/particles/p1.png" },
        { src: "/assets/particles/p2.png" },
        { src: "/assets/particles/p3.png" },
        { src: "/assets/particles/p4.png" },
        { src: "/assets/particles/p5.png" },
      ]
    },
    size: {
      value: 5,
      random: true,
    },
    opacity: {
      anim: { enable: true, opacity_min: 0, speed: 1, sync: false },
      random: true,
      value: 1
    },
  }
});

//chain-reaction
tsParticles.load("chain-reaction", {
  particles: {
    number: {
      value: (window.innerWidth / window.innerHeight) * 10
    },
    move: {
      enable: true
    },
    color: {
      value: "#ffa500"
    },
    size: {
      value: (window.innerWidth / window.innerHeight) * 0.3
    },
    line_linked: {
      enable: true,
      distance: (window.innerWidth / window.innerHeight) * 180,
      color: "#ff4500",
      opacity: 0.4,
      width: (window.innerWidth / window.innerHeight) * 0.5
    },
  }
})

//signup 
$(document).ready(function () {
  $('.login-info-box').fadeOut();
  $('.login-show').addClass('show-log-panel');
});


$('.login-reg-panel input[type="radio"]').on('change', function () {
  if ($('#log-login-show').is(':checked')) {

    gsap.fromTo('.login-show', { right: '0%' }, { duration: 0.1, right: '100%', ease: "none" });
    gsap.fromTo('.register-show', { right: '-100%' }, { duration: 0.1, right: '0%', ease: "none" });
    $('.register-info-box').fadeOut();
    $('.login-info-box').fadeIn();

    $('.register-show').addClass('show-log-panel');
    $('.white-panel').addClass('right-log');
  }
  else if ($('#log-reg-show').is(':checked')) {

    gsap.fromTo('.register-show', { right: '0%' }, { duration: 0.1, right: '-100%', ease: "none" });
    gsap.fromTo('.login-show', { right: '100%' }, { duration: 0.1, right: '0%', ease: "none" });
    $('.register-info-box').fadeIn();
    $('.login-info-box').fadeOut();

    $('.white-panel').removeClass('right-log');
  }
});

//user btn
document.querySelector(".user").addEventListener("click", () => {
  if(Boolean($.cookie("loggedIn")) != true){
    $(".signup-container").fadeIn("fast");
    gsap.from('.login-reg-panel', { duration: 0.8, backdropFilter: 'blur(0px)', ease: 'power2.inOut' });
    }
    else{
      $.cookie("clickedfrom",null);
      window.open("myAccount.html");
    }
});

//cart btn
document.querySelector(".nav-cart").addEventListener("click", () => {
  if(Boolean($.cookie("loggedIn")) != true){
    $(".signup-container").fadeIn("fast");
    gsap.from('.login-reg-panel', { duration: 0.8, backdropFilter: 'blur(0px)', ease: 'power2.inOut' });
    }
    else{
      $.cookie("clickedfrom","addtocart");
      window.open("myAccount.html");
    }
});

//admin btn
document.querySelector(".admin").addEventListener("click", () => {
  if(Boolean($.cookie("adminLoggedin")) == true){
    window.location.href = 'admin.html'
    }
    else{
      window.location.href = 'adminlogin.html'
    }
});

//cancel btn
document.querySelector(".cancel-btn").addEventListener("click", () => {
  $(".signup-container").fadeOut("fast");
});

/* name field validation */

export function lettersOnly(input) {
  var reg = /[^a-z\s]/gi;
  input.value = input.value.replace(reg, "");
}

//registration

var logsuccess;
$(window).on("load", function () {
  $('#register div label:nth-child(1)').fadeOut("fast");
  $('#register div label:nth-child(2)').fadeOut("fast");
  $('#register div label:nth-child(3)').fadeOut("fast");
  $('.success-msg-rg>div').fadeOut("fast");
  $('.circ-loader-register').fadeOut("fast");
});

var field1, field2;
$('#register').submit(function (event) {
  $('input').css('border-color', '#b5b5b5')
  $.ajax({
    type: 'POST',
    url: '/emailChecker',
    data: {
      email: document.getElementById("rgemail").value
    },
    beforeSend: function () {
      $('.circ-loader-register').fadeIn("fast");
    },
    success: function (result) {
      $('.circ-loader-register').fadeOut("fast");
      console.log(result.exist);
      if (result.exist == true) {
        $('#register div label:nth-child(1)').fadeOut("fast");
        field1 = true;

        if (field1 == true && field2 == true) {
          console.log("sending data...");
          $.ajax({
            type: 'POST',
            url: '/register',
            data: {
              name: document.getElementById("rgname").value,
              passwd: document.getElementById("rgpasswd").value
            },
            success: function (result) {
              $.cookie("email", document.getElementById("rgemail").value);
              $.cookie("loggedIn", true);
              console.log("data transfer successful!");
              console.log("already existing or not", result);
              if (!result.emailExisting) {
                enableScroll2();
                logsuccess = true;
                $('#register div label:nth-child(3)').fadeOut("fast");
                console.log("data stored sucessfully");
                $("#register").trigger("reset");
                $(".signup-container").fadeOut();
                $('.success-msg-rg>div').fadeIn("fast");
                gsap.from('.success-msg-rg>div', { duration: 1, scale: '0', autoAlpha: 1, ease: "bounce.out" });
                /* gsap.to('.success-msg-rg>div',{delay: 1, backgroundColor: '#0000007d'}); */
              }
              else {
                $('#rgemail').css('border-color', 'orange');
                $('#register div label:nth-child(3)').delay(200).fadeIn("fast");
              }
            }
          })
        }
        else {
          console.log("some issue...");
        }

      }
      else {
        $('#register div label:nth-child(1)').delay(200).fadeIn("fast");
        $('#register div label:nth-child(3)').fadeOut("fast");
        field1 = false;
        $('#rgemail').css('border-color', 'orange');
      }
    }
  });
  var passwd = document.getElementById("rgpasswd").value;
  var cpasswd = document.getElementById("rgcpasswd").value;
  if (passwd == cpasswd) {
    $('#register div label:nth-child(2)').fadeOut("fast");
    field2 = true
  } else {
    $('#register div label:nth-child(2)').delay(200).fadeIn("fast");
    field2 = false;
    $('#rgpasswd').css('border-color', 'orange');
    $('#rgcpasswd').css('border-color', 'orange');
  }
  return false;
});


$(document).click(function (event) {
  $('.success-msg-rg>div').fadeOut("fast");
});

//login

$(window).on("load", function () {
  $('#login div label:nth-child(1)').fadeOut("fast");
  $('#login div label:nth-child(2)').fadeOut("fast");
  $('.success-msg-lg>div').fadeOut("fast");
  $('.circ-loader-login').fadeOut("fast");
});

$('#login').submit(function (event) {
  $('input').css('border-color', '#b5b5b5')
  $.ajax({
    type: 'POST',
    url: '/login',
    data: {
      email: document.getElementById("lgemail").value,
      passwd: document.getElementById("lgpasswd").value
    },
    beforeSend: function () {
      $('.circ-loader-login').fadeIn("fast");
    },
    success: function (result) {
      $('.circ-loader-login').fadeOut("fast");
      console.log(result.email);
      console.log(result.passwd);
      if (result.email) {
        $('#login div label:nth-child(1)').fadeOut("fast");
        if (result.passwd) {
          $.cookie("email", document.getElementById("lgemail").value);
          $.cookie("loggedIn", true);
          enableScroll2();
          logsuccess = true;
          $('#login div label:nth-child(2)').fadeOut("fast");
          $("#login").trigger("reset");
          $(".signup-container").fadeOut();
          $('.success-msg-lg>div').fadeIn("fast");
          gsap.from('.success-msg-lg>div', { duration: 1, scale: '0', autoAlpha: 1, ease: "bounce.out" });
        }
        else if (!result.passwd) {
          $('#login div label:nth-child(2)').fadeIn("fast");
          $('#lgpasswd').css('border-color', 'orange');
        }
      }
      else {
        $('#login div label:nth-child(1)').fadeIn("fast");
        $('#login div label:nth-child(2)').fadeOut("fast");
        $('#lgemail').css('border-color', 'orange');
      }
    }
  })
});

$(document).click(function (event) {
  $('.success-msg-lg>div').fadeOut("fast");
});

$("input").focus(function () {
  $(this).css('border-color', '#868686')
});

$("input").focusout(function () {
  $(this).css('border-color', '#b5b5b5')
});