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
      value: (window.innerWidth / window.innerHeight) * 15
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
      color: "#fff",
      opacity: 0.4,
      width: (window.innerWidth / window.innerHeight) * 0.5
    },
  }
})

function lettersOnly(input) {
  var reg = /[^a-z\s]/gi;
  input.value = input.value.replace(reg, "");
}

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

//cancel btn
document.querySelector(".cancel-btn").addEventListener("click", () => {
  $(".signup-container").fadeOut("fast");
});

// add form validation 


function lettersOnly(input) {
  var reg = /[^a-z\s]/gi;
  input.value = input.value.replace(reg, "");
}

function numbersOnly(input) {
  if (document.getElementById("addrphone").value.length != 0) {
    $('.label-text').css('transform', 'translateY(-60px)');
  }
  var reg = /[^0-9]/gi;
  input.value = input.value.replace(reg, "");
}

// addr name field 
function nameinval() {
  $('#name-label').css('color', 'orange');
}

$("#addrname").click(function () {
  $('#name-label').css('color', '#b5b5b5');
});

// addr ph no field 
function phinval() {
  $('#ph-label').css('color', 'orange');
}

$("#addrphone").click(function () {
  $('#ph-label').css('color', '#b5b5b5');
});

// addr state field 
function stateinval() {
  $('#select2-stateId-container .select2-selection__placeholder').css('color', 'orange');
}

$("#stateId").click(function () {
  $('#select2-stateId-container .select2-selection__placeholder').css('color', '#999');
});

// addr city field 
function cityinval() {
  $('#select2-cityId-container .select2-selection__placeholder').css('color', 'orange');
}

$("#cityId").click(function () {
  $('#select2-cityId-container .select2-selection__placeholder').css('color', '#999');
});

// addr locality field 
function localinval() {
  $('#local-label').css('color', 'orange');
}

$("#addrlocality").click(function () {
  $('#local-label').css('color', '#999');
});

// addr pincode field 
function pininval() {
  $('#pin-label').css('color', 'orange');
}

$("#addrpincode").click(function () {
  $('#pin-label').css('color', '#999');
});

//addr address field
function addressinval() {
  $('#addr-label').css('color', 'orange');
}

$("#addraddress").click(function () {
  $('#addr-label').css('color', '#999');
});

//addr alt phone

$("#addraltphone").click(function () {
  $('#altph-label').css('color', '#999');
})


//registration
var email;
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
              email = document.getElementById("rgemail").value;
              console.log("data transfer successful!");
              console.log("already existing or not", result);
              if (!result.emailExisting) {
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
          email = document.getElementById("lgemail").value;
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


$(document).ready(function(){
  $('input').css('border-color', '#b5b5b5')
  $.ajax({
    type: 'GET',
    url: '/user-address-details/'+$.cookie("email"),
    success: function (result) {
      $('.circ-loader-addr').fadeOut("fast");
      document.getElementById('addraddress').value=result.address;
      document.getElementById('addrname').value=result.name;
      var option1 = new Option(result.state, result.state);
      $('#stateId').append(option1).trigger('change');
      var option2 = new Option(result.city, result.city);
      $('#cityId').append(option2).trigger('change');
      document.getElementById('addrphone').value=result.phone;
      document.getElementById('addrlocality').value=result.locality;
      document.getElementById('addrpincode').value=result.pincode;
      document.getElementById('addrlandmark').value=result.landmark;
      document.getElementById('addraltphone').value=result.alt_phone;
    }
  })
});


//address db api

$(window).on("load", function () {
  $('.circ-loader-addr').fadeOut("fast");
  $('.addr div label:nth-child(1)').fadeOut("fast");
  $('.addr div label:nth-child(2)').fadeOut("fast");
  $('#pincode-val').fadeOut("fast");
});

$('.addr').submit(function (event) {
  $.ajax({
    type: 'POST',
    url: '/address-validation',
    data: {
      phone: document.getElementById("addrphone").value,
      pin_code: document.getElementById("addrpincode").value,
      alt_phone: document.getElementById("addraltphone").value
    },
    beforeSend: function () {
      $('.circ-loader-addr').fadeIn("fast");
    },
    success: function (result) {
      $('.circ-loader-addr').fadeOut("fast");
      console.log(result);
      if (result.pin_code == true) {
        $('form.addr addr-validations label:nth-child(1)').fadeOut("fast");
      }
      else {
        $('form.addr addr-validations label:nth-child(1)').fadeIn("fast");
        $('#pin-label').css('color', 'orange');
      }
      if (result.ph_valid == true) {
        $('form.addr addr-validations label:nth-child(2)').fadeOut("fast");
      }
      else {
        $('form.addr addr-validations label:nth-child(2)').fadeIn("fast");
        $('#ph-label').css('color', 'orange');
      }
      if (result.altph_valid == true) {
        $('form.addr addr-validations label:nth-child(3)').fadeOut("fast");
      }
      else if (result.altph_valid == false) {
        $('form.addr addr-validations label:nth-child(3)').fadeIn("fast");
        $('#altph-label').css('color', 'orange');
      }
      if (result.pin_code == true && result.ph_valid == true && (result.altph_valid == true || result.altph_valid == null)) {
        $.ajax({
          type: 'POST',
          url: '/address-save',
          data: {
            email: $.cookie("email"),
            name: document.getElementById("addrname").value,
            phone: document.getElementById("addrphone").value,
            state: document.getElementById("stateId").value,
            city: document.getElementById("cityId").value,
            locality: document.getElementById("addrlocality").value,
            pin_code: document.getElementById("addrpincode").value,
            address: document.getElementById("addraddress").value,
            landmark: document.getElementById("addrlandmark").value,
            alt_phone: document.getElementById("addraltphone").value
          },
          beforeSend: function () {
            $('.circ-loader-addr').fadeIn("fast");
          },
          success: function (result) {
            if (result.addr_save == 'success') {
              $('.circ-loader-addr').fadeOut("fast");

              $('.addr h2:nth-child(1)').css('display', 'none');
              $('.addr-fields-li').css('display', 'none');
              $('#addr-submit').css('display', 'none');
              $('.addr-cancel').css('display', 'none');
              $('.addr .bill-table').css('display', '');
              $('.summary').css('display', '');
              $('.bill-back').css('display', '');
              $('#confirm-order').css('display', '');
            }
          }
        })
      }
      else {
        $('.circ-loader-addr').fadeOut("fast");
      }
    }
  })
})

$('#confirm-order').click(()=>{
  var clickedfrom = "placeorder";
  $.cookie("clickedfrom",clickedfrom);
  custom_cycle_save(clickedfrom);
})

/* $('.add-to-cart').click(()=>{
  var clickedfrom = "addtocart";
  custom_cycle_save(clickedfrom);
}) */

//address cancel button

$('.addr-cancel').click(function (event) {
  gsap.to('.addr', { duration: 0.4, top: '100%', autoAlpha: 0, ease: "power2.out" });
  gsap.to('.customize-options', { delay: 0.4, duration: 0.4, x: '0vw', autoAlpha: 1, ease: "power2.out" });
  gsap.to('.customize-container', { delay: 0.4, duration: 0.4, x: '0vw', autoAlpha: 1, ease: "power2.out" });
  gsap.to('.bottom-buttons', { delay: 0.4, duration: 0.4, x: '0vw', autoAlpha: 1, ease: "power2.out" });
  gsap.to('.preview-area', { delay: 0.4, duration: 0.4, x: '0vw', autoAlpha: 1, ease: "power2.out" });
  gsap.to('.customize-components', { duration: 0.4, backgroundColor: 'rgb(0 0 0 / 0%)', ease: "power2.out" });
  gsap.to('.total', { delay: 0.4, duration: 0.4, x: '0vw', autoAlpha: 1, ease: "power2.out" });
})

//address form

$('.addr .bill-table').css('display', 'none');
$('.summary').css('display', 'none');
$('.bill-back').css('display', 'none');
$('#confirm-order').css('display', 'none');

$('.bill-back').click(()=>{
  $('.addr h2:nth-child(1)').css('display', '');
  $('.addr-fields-li').css('display', '');
  $('#addr-submit').css('display', '');
  $('.addr-cancel').css('display', '');
  $('.addr .bill-table').css('display', 'none');
  $('.summary').css('display', 'none');
  $('.bill-back').css('display', 'none');
  $('#confirm-order').css('display', 'none');
});