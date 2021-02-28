//404 error
console.log($.cookie("loggedIn"));
if($.cookie("loggedIn")=="true"){
  $('.intruder').css('display','none')
}else{
  $('.intruder').css('display','')
}


//loading

$(window).on("load", function () {
  $(".loading-screen").fadeOut("slow");
});

//video
var video = $('video');
var videoElement = video.get(0).currentTime;
$(".animation").hover(function () {
  if (videoElement == 0) {
    $(this).children("video")[0].play();
  }
},
);

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
    links: {
      enable: true,
      distance: (window.innerWidth / window.innerHeight) * 180,
      color: "#ff4500",
      opacity: 1,
      width: (window.innerWidth / window.innerHeight) * 0.5
    },
  }
})

tsParticles.load("chain-reaction-intruder", {
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
      links: {
          enable: true,
          distance: (window.innerWidth / window.innerHeight) * 180,
          color: "#ff4500",
          opacity: 1,
          width: (window.innerWidth / window.innerHeight) * 0.5
      },
  }
})


//navbar button click
$(document).ready(() => {
  if ($.cookie("clickedfrom") == "null") {
    $('.myacc-nav div div:nth-child(1)').not('.ma-nav-icon').css('background', 'orangered');
  } else if ($.cookie("clickedfrom") == "addtocart") {
    $('.myacc-nav div div:nth-child(2)').not('.ma-nav-icon').css('background', 'orangered');
  } else if ($.cookie("clickedfrom") == "placeorder") {
    $('.myacc-nav div div:nth-child(3)').not('.ma-nav-icon').css('background', 'orangered');
  }
});

$('.myacc-nav div div:nth-child(1)').click(() => {
  $.cookie("clickedfrom", null);
  for (var i = 1; i <= $(".myacc-nav div div").length; i++) {
    $('.myacc-nav div div:nth-child(' + i + ')').not('.ma-nav-icon').css('background', '');
  }
  $('.myacc-nav div div:nth-child(1)').not('.ma-nav-icon').css('background', 'orangered');
});

$('.myacc-nav div div:nth-child(2)').click(() => {
  $.cookie("clickedfrom", "addtocart");
  for (var i = 1; i <= $(".myacc-nav div div").length; i++) {
    $('.myacc-nav div div:nth-child(' + i + ')').not('.ma-nav-icon').css('background', '');
  }
  $('.myacc-nav div div:nth-child(2)').not('.ma-nav-icon').css('background', 'orangered');
});

$('.myacc-nav div div:nth-child(3)').click(() => {
  $.cookie("clickedfrom", "placeorder");
  for (var i = 1; i <= $(".myacc-nav div div").length; i++) {
    $('.myacc-nav div div:nth-child(' + i + ')').not('.ma-nav-icon').css('background', '');
  }
  $('.myacc-nav div div:nth-child(3)').not('.ma-nav-icon').css('background', 'orangered');
});

//my profile button
$(document).ready(() => {
  $('.all-tabs>div').css('display', 'none');
  if ($.cookie("clickedfrom") == "null") {
    $('.myprofile').css('display', '');
  } else if ($.cookie("clickedfrom") == "addtocart") {
    $('.cart').css('display', '');
  } else if ($.cookie("clickedfrom") == "placeorder") {
    $('.orders').css('display', '');
  }
})


$('nav div div:nth-child(1)').click(() => {
  $('.all-tabs>div').css('display', 'none');
  $('.myprofile').css('display', '');
})

$('nav div div:nth-child(2)').click(() => {
  $('.all-tabs>div').css('display', 'none');
  $('.cart').css('display', '');
})

$('nav div div:nth-child(3)').click(() => {
  $('.all-tabs>div').css('display', 'none');
  $('.orders').css('display', '');
})

//address

$(document).ready(() => {
  // Initialize select2
  $("#stateId").select2({ placeholder: "Select State*", width: '30vw' });
  $("#cityId").select2({ placeholder: "Select City*", width: '30vw' });
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

//logout
$('.myacc-nav div div:nth-child(4)').click(() => {
  console.log('clicked');
  $.removeCookie("loggedIn");
  window.location.href = "index.html";
})

//address prefill
$(document).ready(function () {
  $('input').css('border-color', '#b5b5b5')
  $.ajax({
    type: 'GET',
    url: '/user-address-details/' + $.cookie("email"),


    success: function (result) {
      $('.circ-loader-addr').fadeOut("fast");
      document.getElementById('addraddress').value = result.address;
      document.getElementById('addrname').value = result.name;
      var option1 = new Option(result.state, result.state);
      $('#stateId').append(option1).trigger('change');
      var option2 = new Option(result.city, result.city);
      $('#cityId').append(option2).trigger('change');
      document.getElementById('addrphone').value = result.phone;
      document.getElementById('addrlocality').value = result.locality;
      document.getElementById('addrpincode').value = result.pincode;
      document.getElementById('addrlandmark').value = result.landmark;
      document.getElementById('addraltphone').value = result.alt_phone;
    }
  })
});


//update profile

$(window).on("load", function () {
  $('.ma-profile div label:nth-child(1)').fadeOut("fast");
  $('.ma-profile div label:nth-child(2)').fadeOut("fast");
  $('.ma-profile div label:nth-child(3)').fadeOut("fast");
  $('.success-msg-rg>div').fadeOut("fast");
  $('.circ-loader-register').fadeOut("fast");
  $('.addr-validations label:nth-child(1)').fadeOut("fast");
  $('.addr-validations label:nth-child(2)').fadeOut("fast");
  $('.addr-validations label:nth-child(3)').fadeOut("fast");
  $('.circ-loader-addr').fadeOut("fast");
});


//address update
$('#addr-update').click(() => {
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
        $('form .addr-validations label:nth-child(1)').fadeOut("fast");
      }
      else {
        $('form .addr-validations label:nth-child(1)').fadeIn("fast");
        $('#pin-label').css('color', 'orange');
      }
      if (result.ph_valid == true) {
        $('form .addr-validations label:nth-child(2)').fadeOut("fast");
      }
      else {
        $('form .addr-validations label:nth-child(2)').fadeIn("fast");
        $('#ph-label').css('color', 'orange');
      }
      if (result.altph_valid == true) {
        $('form .addr-validations label:nth-child(3)').fadeOut("fast");
      }
      else if (result.altph_valid == false) {
        $('form .addr-validations label:nth-child(3)').fadeIn("fast");
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


//user prefill
$(document).ready(function () {
  $('input').css('border-color', '#b5b5b5')
  $.ajax({
    type: 'GET',
    url: '/update-cred/' + $.cookie("email"),


    success: function (result) {
      $('.circ-loader-addr').fadeOut("fast");
      document.getElementById('rgname').value = result.name;
    }
  })
});

//user update


$('#user-update').click(function (event) {
  var bothpasswd;
  var passwd = document.getElementById("rgpasswd").value;
  var cpasswd = document.getElementById("rgcpasswd").value;
  if (passwd == cpasswd) {
    $('#register div label:nth-child(2)').fadeOut("fast");
    bothpasswd = true
  } else {
    $('#register div label:nth-child(2)').delay(200).fadeIn("fast");
    bothpasswd = false;
    $('#rgpasswd').css('border-color', 'orange');
    $('#rgcpasswd').css('border-color', 'orange');
  }
  if (bothpasswd == true) {
    $('input').css('border-color', '#b5b5b5')
    $.ajax({
      type: 'POST',
      url: '/register',
      data: {
        email: $.cookie("email"),
        name: document.getElementById("rgname").value,
        passwd: document.getElementById("rgpasswd").value
      },
      beforeSend: () => {
        $('.circ-loader-register').fadeIn("fast");
      },
      success: (result) => {
        alert("Information Updated Successfully!");
        $('.circ-loader-register').fadeOut("fast");
        if (result == "passwdtoo") {
          $.removeCookie("loggedIn");
          alert("Information Updated Successfully!");
          window.open("index.html");
          window.close();
        }
      }
    })
  }
});


//smooth scrolling

new Scrooth({
  element: document.querySelector(".order-items"), // target element
  strength: 10,
  acceleration: 1.2,
  deceleration: 0.96
});

new Scrooth({
  element: document.querySelector(".cart-items"), // target element
  strength: 10,
  acceleration: 1.2,
  deceleration: 0.96
});



//add to cart api

var email = $.cookie("email");

$.ajax({
  type: 'POST',
  url: '/addtocart',
  data: {
    email: email
  },
  success: (data) => {
    if (data.length != 0) {
      console.log("data: ", data.length);
      $('.cart-items').css('background', '');
      $('table.bill-table.forcart tr:nth-child(2) td:nth-child(2)').html(data[0].framemodel);
      $('table.bill-table.forcart tr:nth-child(2) td:nth-child(3)').html("₹" + data[0].frameprice + "/-");
      $('table.bill-table.forcart tr:nth-child(3) td:nth-child(2)').html(data[0].handlebarmodel);
      $('table.bill-table.forcart tr:nth-child(3) td:nth-child(3)').html("₹" + data[0].handlebarprice + "/-");
      $('table.bill-table.forcart tr:nth-child(4) td:nth-child(2)').html(data[0].seatmodel);
      $('table.bill-table.forcart tr:nth-child(4) td:nth-child(3)').html("₹" + data[0].seatprice + "/-");
      $('table.bill-table.forcart tr:nth-child(5) td:nth-child(2)').html(data[0].cablemodel);
      $('table.bill-table.forcart tr:nth-child(5) td:nth-child(3)').html("₹" + data[0].cableprice + "/-");
      $('table.bill-table.forcart tr:nth-child(6) td:nth-child(2)').html(data[0].mudguardmodel);
      $('table.bill-table.forcart tr:nth-child(6) td:nth-child(3)').html("₹" + data[0].mudguardprice + "/-");
      $('table.bill-table.forcart tr:nth-child(7) td:nth-child(2)').html(data[0].forkmodel);
      $('table.bill-table.forcart tr:nth-child(7) td:nth-child(3)').html("₹" + data[0].forkprice + "/-");

      if (data[0].gears == 1) {
        $('table.bill-table.forcart tr:nth-child(8) td:nth-child(2)').html(data[0].gearmodel);
        $('table.bill-table.forcart tr:nth-child(8) td:nth-child(3)').html("₹" + data[0].gearprice + "/-");
      }
      else {
        if (data[0].gears == 8) {
          $('table.bill-table.forcart tr:nth-child(8) td:nth-child(2)').html("SM-3420(8)");
          $('table.bill-table.forcart tr:nth-child(8) td:nth-child(3)').html("₹" + data[0].gearprice + "/-");
        }
        else if (data[0].gears == 16) {
          $('table.bill-table.forcart tr:nth-child(8) td:nth-child(2)').html("SM-3420(16)");
          $('table.bill-table.forcart tr:nth-child(8) td:nth-child(3)').html("₹" + data[0].gearprice + "/-");
        }
        else {
          $('table.bill-table.forcart tr:nth-child(8) td:nth-child(2)').html("SM-3420(21)");
          $('table.bill-table.forcart tr:nth-child(8) td:nth-child(3)').html("₹" + data[0].gearprice + "/-");
        }
      }

      $('table.bill-table.forcart tr:nth-child(9) td:nth-child(2)').html(data[0].tyremodel);
      $('table.bill-table.forcart tr:nth-child(9) td:nth-child(3)').html("₹" + data[0].tyreprice + "/-");
      $('table.bill-table.forcart tr:nth-child(10) td:nth-child(3)').html("₹" + data[0].total + "/-");

      var generalindex;
      data.forEach((alldata, i) => {
        console.log("iterations", i);
        $('.cart-items').append(`
      <div class="cart-item" style="justify-content: end">
      <div class="product-img"></div>
      <div class="orders-content" style = "width: 62%" >
      <li class="product-title">CUSTOM PSYCLE<p>(${alldata.framemodel})</p></li>
      <div class="orders-total" style = "right: 0; padding: 0; font-size: 20px; top: -7px; font-weight: lighter; width: 100%;">Total :<p style = "text-indent: 4px; text-indent: 4px; font-weight: bold;">₹${alldata.total}</p></div>
      <input type="submit" value="Confirm Order" id="confirm-order" style="background: white; color: orangered; right: 0; bottom: 25px; margin-right: 30px; font-size: 13px; padding: 0;">
      <input type = "button" value = "Remove" id = "remove-frmcart">
      </div>
  </div>
  `);


        $('.cart-item:nth-child(1)').css('box-shadow', 'rgb(255 255 255) 0px 0px 0px 2px');
        $(".cart-item").hover(function () {
          generalindex = $(this).index();
          index = $(this).index();
          var index1 = $(this).index();
          index1 += 1;
          var toScale = $('.cart-item:nth-child(' + index1 + ')');
          gsap.to(toScale, { duration: 0.5, scale: '1.05', ease: "power4.out" });
        }, function () {
          gsap.to('.cart-item', { duration: 0.5, scale: '1', ease: "power4.out" });
        });

      })//end of foreach

      $('.cart-item').click(() => {
        var index = generalindex;
        console.log(generalindex);
        console.log(data[generalindex]._id);
        var index2 = index + 1;
        $('.cart-item').css('box-shadow', '');
        $('.cart-item:nth-child(' + index2 + ')').css('box-shadow', 'rgb(255 255 255) 0px 0px 0px 2px');

        val = data[generalindex];
        $('table.bill-table.forcart tr:nth-child(2) td:nth-child(2)').html(val.framemodel);
        $('table.bill-table.forcart tr:nth-child(2) td:nth-child(3)').html("₹" + val.frameprice + "/-");
        $('table.bill-table.forcart tr:nth-child(3) td:nth-child(2)').html(val.handlebarmodel);
        $('table.bill-table.forcart tr:nth-child(3) td:nth-child(3)').html("₹" + val.handlebarprice + "/-");
        $('table.bill-table.forcart tr:nth-child(4) td:nth-child(2)').html(val.seatmodel);
        $('table.bill-table.forcart tr:nth-child(4) td:nth-child(3)').html("₹" + val.seatprice + "/-");
        $('table.bill-table.forcart tr:nth-child(5) td:nth-child(2)').html(val.cablemodel);
        $('table.bill-table.forcart tr:nth-child(5) td:nth-child(3)').html("₹" + val.cableprice + "/-");
        $('table.bill-table.forcart tr:nth-child(6) td:nth-child(2)').html(val.mudguardmodel);
        $('table.bill-table.forcart tr:nth-child(6) td:nth-child(3)').html("₹" + val.mudguardprice + "/-");
        $('table.bill-table.forcart tr:nth-child(7) td:nth-child(2)').html(val.forkmodel);
        $('table.bill-table.forcart tr:nth-child(7) td:nth-child(3)').html("₹" + val.forkprice + "/-");

        if (val.gears == 1) {
          $('table.bill-table.forcart tr:nth-child(8) td:nth-child(2)').html(val.gearmodel);
          $('table.bill-table.forcart tr:nth-child(8) td:nth-child(3)').html("₹" + val.gearprice + "/-");
        }
        else {
          if (val.gears == 8) {
            $('table.bill-table.forcart tr:nth-child(8) td:nth-child(2)').html("SM-3420(8)");
            $('table.bill-table.forcart tr:nth-child(8) td:nth-child(3)').html("₹" + val.gearprice + "/-");
          }
          else if (val.gears == 16) {
            $('table.bill-table.forcart tr:nth-child(8) td:nth-child(2)').html("SM-3420(16)");
            $('table.bill-table.forcart tr:nth-child(8) td:nth-child(3)').html("₹" + val.gearprice + "/-");
          }
          else {
            $('table.bill-table.forcart tr:nth-child(8) td:nth-child(2)').html("SM-3420(21)");
            $('table.bill-table.forcart tr:nth-child(8) td:nth-child(3)').html("₹" + val.gearprice + "/-");
          }
        }

        $('table.bill-table.forcart tr:nth-child(9) td:nth-child(2)').html(val.tyremodel);
        $('table.bill-table.forcart tr:nth-child(9) td:nth-child(3)').html("₹" + val.tyreprice + "/-");
        $('table.bill-table.forcart tr:nth-child(10) td:nth-child(3)').html("₹" + val.total + "/-");
      })

      $('.cart-item #remove-frmcart').click(() => {
        $('.remove-confirmation').fadeIn("fast")
      })

      $('.remove-confirmation>div button:nth-of-type(1)').click(() => {
        $('.remove-confirmation').fadeOut("fast");
      })

      $('.remove-confirmation>div button:nth-of-type(2)').click(() => {
        $('.remove-confirmation').fadeOut("fast");
        $.ajax({
          type: 'POST',
          url: '/removefrmcart',
          data: {
            id: data[generalindex]._id,
          },
          success: (res) => {
            if (res) {
              location.reload();
            }
          }
        })
      })

      $('input#confirm-order').click(() => {
        $('.order-confirmation').fadeIn("fast")
      })

      $('.order-confirmation>div button:nth-of-type(1)').click(() => {
        $('.order-confirmation').fadeOut("fast");
      })

      $('.order-confirmation>div button:nth-of-type(2)').click(() => {
        $('.order-confirmation').fadeOut("fast");
      })

      $('.order-confirmation>div button:nth-of-type(2)').click(() => {
        console.log("in click", data[generalindex]._id);
        $.ajax({
          type: 'POST',
          url: '/transfer-data',
          data: {
            id: data[generalindex]._id
          },
          success: (result) => {
            if (result) {
              $.cookie("clickedfrom", "placeorder")
              location.reload()
            }
          }
        })
      })

    }
    else {
      $('.cart-items').css('background', 'orangered');
      $('.cart-items').append(`<div class="empty-cart">Your Cart is Empty! Add items now!</div>`)
    }
  }
})


//remove from cart 
$('.remove-confirmation').fadeOut("fast");

//orders confirmation
$('.order-confirmation').fadeOut("fast");

//orders cancellation confirmation
$('.order-cancellation').fadeOut("fast");



//orders api

$.ajax({
  type: 'POST',
  url: '/orders',
  data: {
    email: email
  },
  success: (data) => {
    if (data.length != 0) {
      $('.empty-orders').css('display', 'none');

      $('table.bill-table.fororders tr:nth-child(2) td:nth-child(2)').html(data[0].framemodel);
      $('table.bill-table.fororders tr:nth-child(2) td:nth-child(3)').html("₹" + data[0].frameprice + "/-");
      $('table.bill-table.fororders tr:nth-child(3) td:nth-child(2)').html(data[0].handlebarmodel);
      $('table.bill-table.fororders tr:nth-child(3) td:nth-child(3)').html("₹" + data[0].handlebarprice + "/-");
      $('table.bill-table.fororders tr:nth-child(4) td:nth-child(2)').html(data[0].seatmodel);
      $('table.bill-table.fororders tr:nth-child(4) td:nth-child(3)').html("₹" + data[0].seatprice + "/-");
      $('table.bill-table.fororders tr:nth-child(5) td:nth-child(2)').html(data[0].cablemodel);
      $('table.bill-table.fororders tr:nth-child(5) td:nth-child(3)').html("₹" + data[0].cableprice + "/-");
      $('table.bill-table.fororders tr:nth-child(6) td:nth-child(2)').html(data[0].mudguardmodel);
      $('table.bill-table.fororders tr:nth-child(6) td:nth-child(3)').html("₹" + data[0].mudguardprice + "/-");
      $('table.bill-table.fororders tr:nth-child(7) td:nth-child(2)').html(data[0].forkmodel);
      $('table.bill-table.fororders tr:nth-child(7) td:nth-child(3)').html("₹" + data[0].forkprice + "/-");

      if (data[0].gears == 1) {
        $('table.bill-table.fororders tr:nth-child(8) td:nth-child(2)').html(data[0].gearmodel);
        $('table.bill-table.fororders tr:nth-child(8) td:nth-child(3)').html("₹" + data[0].gearprice + "/-");
      }
      else {
        if (data[0].gears == 8) {
          $('table.bill-table.fororders tr:nth-child(8) td:nth-child(2)').html("SM-3420(8)");
          $('table.bill-table.fororders tr:nth-child(8) td:nth-child(3)').html("₹" + data[0].gearprice + "/-");
        }
        else if (data[0].gears == 16) {
          $('table.bill-table.fororders tr:nth-child(8) td:nth-child(2)').html("SM-3420(16)");
          $('table.bill-table.fororders tr:nth-child(8) td:nth-child(3)').html("₹" + data[0].gearprice + "/-");
        }
        else {
          $('table.bill-table.fororders tr:nth-child(8) td:nth-child(2)').html("SM-3420(21)");
          $('table.bill-table.fororders tr:nth-child(8) td:nth-child(3)').html("₹" + data[0].gearprice + "/-");
        }
      }

      $('table.bill-table.fororders tr:nth-child(9) td:nth-child(2)').html(data[0].tyremodel);
      $('table.bill-table.fororders tr:nth-child(9) td:nth-child(3)').html("₹" + data[0].tyreprice + "/-");
      $('table.bill-table.fororders tr:nth-child(10) td:nth-child(3)').html("₹" + data[0].total + "/-");

      var generalindex;
      data.forEach((alldata, i) => {

        $('.order-items').append(`                
        <div class="order-item">
        <div class="product-img"></div>
        <div class="orders-content">
    <ul>
        <li class="product-title">CUSTOM PSYCLE<p>(${alldata.framemodel})</p></li>
        <li class="order-id">Order ID :<p> ${alldata._id.toUpperCase()}</p></li>
        <li class="order-date">Ordered On :<p> ${(alldata.orderdate.slice(0, 3)) + ", " + (alldata.orderdate.slice(4, 15))}</p></li>
        <li class="status">Delivery Status :<p> ${alldata.delivery_status}</p></li>
        ${(alldata.delivery_status != 'Delivered'&&alldata.delivery_status != 'Shipped') ? '<li><button class="cancel-order">CANCEL ORDER</button></li>' : ''}
        
    </ul>
    <div class="orders-total">Total :<p style = "text-indent: 4px;">₹${alldata.total}</p></div>
    </div>
        <div class="download-btn"></div>
    </div>
    `);

        $('.order-item:nth-child(1)').css('box-shadow', 'rgb(255 255 255) 0px 0px 0px 2px');
        //hover animation
        $(".order-item").hover(function () {
          generalindex = $(this).index();
          var index = $(this).index();
          index += 1;
          var toScale = $('.order-item:nth-child(' + index + ')');
          gsap.to(toScale, { duration: 0.5, scale: '1.05', ease: "power4.out" });
        }, function () {
          gsap.to('.order-item', { duration: 0.5, scale: '1', ease: "power4.out" });
        });


        $(".order-item").click(function () {
          var index = $(this).index();
          var index2 = index + 1;
          $('.order-item').css('box-shadow', '');
          $('.order-item:nth-child(' + index2 + ')').css('box-shadow', 'rgb(255 255 255) 0px 0px 0px 2px');

          var val = (data[index]);
          /* console.log(val._id); */
          $('table.bill-table.fororders tr:nth-child(2) td:nth-child(2)').html(val.framemodel);
          $('table.bill-table.fororders tr:nth-child(2) td:nth-child(3)').html("₹" + val.frameprice + "/-");
          $('table.bill-table.fororders tr:nth-child(3) td:nth-child(2)').html(val.handlebarmodel);
          $('table.bill-table.fororders tr:nth-child(3) td:nth-child(3)').html("₹" + val.handlebarprice + "/-");
          $('table.bill-table.fororders tr:nth-child(4) td:nth-child(2)').html(val.seatmodel);
          $('table.bill-table.fororders tr:nth-child(4) td:nth-child(3)').html("₹" + val.seatprice + "/-");
          $('table.bill-table.fororders tr:nth-child(5) td:nth-child(2)').html(val.cablemodel);
          $('table.bill-table.fororders tr:nth-child(5) td:nth-child(3)').html("₹" + val.cableprice + "/-");
          $('table.bill-table.fororders tr:nth-child(6) td:nth-child(2)').html(val.mudguardmodel);
          $('table.bill-table.fororders tr:nth-child(6) td:nth-child(3)').html("₹" + val.mudguardprice + "/-");
          $('table.bill-table.fororders tr:nth-child(7) td:nth-child(2)').html(val.forkmodel);
          $('table.bill-table.fororders tr:nth-child(7) td:nth-child(3)').html("₹" + val.forkprice + "/-");

          if (val.gears == 1) {
            $('table.bill-table.fororders tr:nth-child(8) td:nth-child(2)').html(val.gearmodel);
            $('table.bill-table.fororders tr:nth-child(8) td:nth-child(3)').html("₹" + val.gearprice + "/-");
          }
          else {
            if (val.gears == 8) {
              $('table.bill-table.fororders tr:nth-child(8) td:nth-child(2)').html("SM-3420(8)");
              $('table.bill-table.fororders tr:nth-child(8) td:nth-child(3)').html("₹" + val.gearprice + "/-");
            }
            else if (val.gears == 16) {
              $('table.bill-table.fororders tr:nth-child(8) td:nth-child(2)').html("SM-3420(16)");
              $('table.bill-table.fororders tr:nth-child(8) td:nth-child(3)').html("₹" + val.gearprice + "/-");
            }
            else {
              $('table.bill-table.fororders tr:nth-child(8) td:nth-child(2)').html("SM-3420(21)");
              $('table.bill-table.fororders tr:nth-child(8) td:nth-child(3)').html("₹" + val.gearprice + "/-");
            }
          }

          $('table.bill-table.fororders tr:nth-child(9) td:nth-child(2)').html(val.tyremodel);
          $('table.bill-table.fororders tr:nth-child(9) td:nth-child(3)').html("₹" + val.tyreprice + "/-");
          $('table.bill-table.fororders tr:nth-child(10) td:nth-child(3)').html("₹" + val.total + "/-");

        })



      }) //end of foreach loop

      $(".download-btn").click(() => {
        $.ajax({
          type: 'POST',
          url: '/invoice',
          data: {
            email: email,
            id: data[generalindex]._id
          },
          success: (res) => {
            var invoicedate = new Date();
            res.data.invoiceDate = invoicedate.toString().slice(8, 10) + "-" + invoicedate.toISOString().slice(5, 7) + "-" + invoicedate.toISOString().slice(0, 4);
            easyinvoice.createInvoice(res.data, function (result) {
              easyinvoice.download(`invoice${Date.now()}.pdf`, result.pdf);
            });
          }
        })
      })

      $('.cancel-order').click(() => {
        $('.order-cancellation').fadeIn("fast");
      })
      $('.order-cancellation div button:nth-of-type(1)').click(() => {
        $('.order-cancellation').fadeOut("fast");
      })
      $('.order-cancellation div button:nth-of-type(2)').click(() => {
        $('.order-cancellation').fadeOut("fast");
        $.ajax({
          type: 'POST',
          url: '/cancel-order',
          data: {
            id: data[generalindex]._id,
            frame: data[generalindex].framemodel
          },
          success: location.reload()
        })
      })
    }
    else {
      $('.order-items').css('background', 'orangered'); $('.empty-orders').css('display', 'none');
      $('.order-items').append(`<div class="empty-orders">Your Order List is Empty :(</div>`)
    }
  }
})