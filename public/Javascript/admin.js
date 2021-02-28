//404 error

if ($.cookie("adminLoggedin")) {
    $('.intruder').css('display', 'none')
} else {
    $('.intruder').css('display', '')
}



//loading

$(window).on("load", function () {
    $(".loading-screen").fadeOut("slow");
});

//video
var video = $('.loading-screen>video');
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

/* $('.adminsubmit').click(() => {
    $.ajax({
        type: 'POST',
        url: '/admin-validation',
        data: {
            email: document.querySelector(".adminemail").value,
            password: document.querySelector(".adminpasswd").value
        },
        success: (result) => {
            if (result.email == false) {
                $('.adminemail').css('border', '1px solid orange');
            } else if (result.email == true && result.passwd == false) {
                $('.adminemail').css('border', '');
                $('.adminpasswd').css('border', '1px solid orange');
            } else {
                $.cookie("adminLoggedin", true);
                $.cookie("adminEmail", document.querySelector(".adminemail").value);
                $('.adminemail',).css('border', '');
                $('.adminpasswd').css('border', '');
                window.location.href = 'admin.html';
            }
        }
    })
}) */


//dashboard buttons

$(document).ready(function () {
    $('.myacc-nav div div:nth-child(1)').not('.ma-nav-icon').css('background', 'orangered');
})

$('.myacc-nav div div:nth-child(1)').click(() => {
    for (var i = 1; i <= $(".myacc-nav div div").length; i++) {
        $('.myacc-nav div div:nth-child(' + i + ')').not('.ma-nav-icon').css('background', '');
    }
    $('.myacc-nav div div:nth-child(1)').not('.ma-nav-icon').css('background', 'orangered');
})

$('.myacc-nav div div:nth-child(2)').click(() => {
    for (var i = 1; i <= $(".myacc-nav div div").length; i++) {
        $('.myacc-nav div div:nth-child(' + i + ')').not('.ma-nav-icon').css('background', '');
    }
    $('.myacc-nav div div:nth-child(2)').not('.ma-nav-icon').css('background', 'orangered');
});

$('.myacc-nav div div:nth-child(3)').click(() => {
    for (var i = 1; i <= $(".myacc-nav div div").length; i++) {
        $('.myacc-nav div div:nth-child(' + i + ')').not('.ma-nav-icon').css('background', '');
    }
    $('.myacc-nav div div:nth-child(3)').not('.ma-nav-icon').css('background', 'orangered');
});

$('.myacc-nav div div:nth-child(4)').click(() => {
    for (var i = 1; i <= $(".myacc-nav div div").length; i++) {
        $('.myacc-nav div div:nth-child(' + i + ')').not('.ma-nav-icon').css('background', '');
    }
    $('.myacc-nav div div:nth-child(4)').not('.ma-nav-icon').css('background', 'orangered');
});

// all tabs

$(document).ready(() => {
    $('.all-tabs>div').css('display', 'none');
    $('.orders').css('display', '');
})

$('.myacc-nav div div:nth-child(1)').click(() => {
    $('.all-tabs>div').css('display', 'none');
    $('.orders').css('display', '');
})

$('nav div div:nth-child(2)').click(() => {
    $('.all-tabs>div').css('display', 'none');
    $('.delivered').css('display', '');
})

$('nav div div:nth-child(3)').click(() => {
    $('.all-tabs>div').css('display', 'none');
    $('.insights').css('display', '');
})

$('nav div div:nth-child(4)').click(() => {
    $('.all-tabs>div').css('display', 'none');
    $('.profile').css('display', '');
})


//smooth scrolling

new Scrooth({
    element: document.querySelector(".order-items"), // target element
    strength: 10,
    acceleration: 1.2,
    deceleration: 0.96
});

new Scrooth({
    element: document.querySelector(".delivered-items"), // target element
    strength: 10,
    acceleration: 1.2,
    deceleration: 0.96
});



//orders
$.ajax({
    type: 'POST',
    url: '/admin-orders',
    success: (data) => {
        var filteredData = data.filter(datas => datas.delivery_status != 'Delivered')

        $('table.bill-table.fororders tr:nth-child(2) td:nth-child(2)').html(filteredData[0].framemodel);
        $('table.bill-table.fororders tr:nth-child(2) td:nth-child(3)').html("₹" + filteredData[0].frameprice + "/-");
        $('table.bill-table.fororders tr:nth-child(3) td:nth-child(2)').html(filteredData[0].handlebarmodel);
        $('table.bill-table.fororders tr:nth-child(3) td:nth-child(3)').html("₹" + filteredData[0].handlebarprice + "/-");
        $('table.bill-table.fororders tr:nth-child(4) td:nth-child(2)').html(filteredData[0].seatmodel);
        $('table.bill-table.fororders tr:nth-child(4) td:nth-child(3)').html("₹" + filteredData[0].seatprice + "/-");
        $('table.bill-table.fororders tr:nth-child(5) td:nth-child(2)').html(filteredData[0].cablemodel);
        $('table.bill-table.fororders tr:nth-child(5) td:nth-child(3)').html("₹" + filteredData[0].cableprice + "/-");
        $('table.bill-table.fororders tr:nth-child(6) td:nth-child(2)').html(filteredData[0].mudguardmodel);
        $('table.bill-table.fororders tr:nth-child(6) td:nth-child(3)').html("₹" + filteredData[0].mudguardprice + "/-");
        $('table.bill-table.fororders tr:nth-child(7) td:nth-child(2)').html(filteredData[0].forkmodel);
        $('table.bill-table.fororders tr:nth-child(7) td:nth-child(3)').html("₹" + filteredData[0].forkprice + "/-");

        if (filteredData[0].gears == 1) {
            $('table.bill-table.fororders tr:nth-child(8) td:nth-child(2)').html(filteredData[0].gearmodel);
            $('table.bill-table.fororders tr:nth-child(8) td:nth-child(3)').html("₹" + filteredData[0].gearprice + "/-");
        }
        else {
            if (filteredData[0].gears == 8) {
                $('table.bill-table.fororders tr:nth-child(8) td:nth-child(2)').html("SM-3420(8)");
                $('table.bill-table.fororders tr:nth-child(8) td:nth-child(3)').html("₹" + filteredData[0].gearprice + "/-");
            }
            else if (filteredData[0].gears == 16) {
                $('table.bill-table.fororders tr:nth-child(8) td:nth-child(2)').html("SM-3420(16)");
                $('table.bill-table.fororders tr:nth-child(8) td:nth-child(3)').html("₹" + filteredData[0].gearprice + "/-");
            }
            else {
                $('table.bill-table.fororders tr:nth-child(8) td:nth-child(2)').html("SM-3420(21)");
                $('table.bill-table.fororders tr:nth-child(8) td:nth-child(3)').html("₹" + filteredData[0].gearprice + "/-");
            }
        }

        $('table.bill-table.fororders tr:nth-child(9) td:nth-child(2)').html(filteredData[0].tyremodel);
        $('table.bill-table.fororders tr:nth-child(9) td:nth-child(3)').html("₹" + filteredData[0].tyreprice + "/-");
        $('table.bill-table.fororders tr:nth-child(10) td:nth-child(3)').html("₹" + filteredData[0].total + "/-");


        $.ajax({
            type: 'GET',
            url: '/admin-get-addr',
            success: (addrdata) => {





                var iteration = 1;
                var generalindex = 0, gi2 = 0;
                filteredData.forEach((alldata, i) => {

                    /*      $.when($.ajax('/admin-get-addr')).done(function (addrdata) { */
                    $('.order-items').append(
                        `${(alldata.delivery_status != 'Delivered') ?
                            `<div class="order-item">
            <div class="product-img"></div>
            <div class="orders-content" style = "overflow: hidden; position: relative; left: -77px;">
                <ul>
                    <li class="product-title">CUSTOM PSYCLE<p>(${alldata.framemodel})</p>
                    </li>
                    <li class="order-id">Order ID :<p> ${alldata._id.toUpperCase()}</p>
                    </li>
                    <li class="order-date">Ordered On :<p> ${(alldata.orderdate.slice(0, 3)) + ", " + (alldata.orderdate.slice(4, 15))}</p>
                    </li>
                    <li class="status">Delivery Status :<p>
                        <select name="delivery status" class="delv-status">
                            <option value="Ordered">Ordered</option>
                            <option value="Packed">Packed</option>
                            <option value="Shipped">Shipped</option>
                            <option value="Delivered">Delivered</option>
                          </select>
                        </p>
                    </li>
                </ul>
                <div class="orders-total" style = "font-size: 20px; right: -16vw">Total :<p style="text-indent: 4px;">₹${alldata.total}</p>
                </div>
            </div>
            <div class="address-show">
            <h1 style = "margin-left: 35px; font-size: x-large;">ADDRESS</h1>
            <div></div>
                ${addrdata.map((data) => {
                                return (data.email == alldata.email) ? `<p>${data.name}, ${data.phone}</p>
                    <p>${data.address}</p>
                    <p>${data.locality}, ${data.city}, ${data.state}, ${data.pincode}</p>
                    <p>${data.landmark}${(data.landmark != "") ? ',' : ''}${data.alt_phone}</p>` : ``
                            }).join("")}
            </div>
        </div>` : `
        
        `}`
                    )





                    $('.order-item:nth-child(1)').css('box-shadow', 'rgb(255 255 255) 0px 0px 0px 2px');
                    $(".order-item").hover(function () {
                        generalindex = $(this).index();
                        gi2 = generalindex + 1;
                        index = $(this).index();
                        var index1 = $(this).index();
                        index1 += 1;
                        var toScale = $('.order-item:nth-child(' + index1 + ')');
                        gsap.to(toScale, { duration: 0.5, scale: '1.05', ease: "power4.out" });
                    }, function () {
                        gsap.to('.order-item', { duration: 0.5, scale: '1', ease: "power4.out" });
                    });



                    if (alldata.delivery_status != "Delivered") {
                        $('.order-item:nth-child(' + iteration + ') .delv-status').val(alldata.delivery_status)
                        iteration++;
                        /*                 console.log(iteration);
                                        console.log(alldata.delivery_status); */
                    };





                    gsap.to('.address-show p', { duration: 0.5, autoAlpha: '0' })
                    $(".order-item .address-show").hover(function () {
                        var index2 = $(this).parent().index() + 1;
                        $('.order-item:nth-child(' + index2 + ') .address-show p').css('display', '')
                        $('.order-item:nth-child(' + index2 + ') .address-show h1').css('display', '')
                        var a = $('.order-item:nth-child(' + index2 + ') .address-show div')
                        gsap.to(a, { right: '-40%', rotate: '180' })
                        gsap.to('.order-item:nth-child(' + index2 + ') .address-show', { duration: 0.5, width: '61%', ease: "power4.out" })
                        gsap.to('.order-item:nth-child(' + index2 + ') .address-show p', { delay: 0.2, duration: 0.5, autoAlpha: '1' })
                        gsap.to('.order-item:nth-child(' + index2 + ') .address-show h1', { delay: 0.2, duration: 0.5, autoAlpha: '1' })
                    }, function () {
                        var index2 = $(this).parent().index() + 1;
                        $('.order-item:nth-child(' + index2 + ') .address-show p').css('display', 'none')
                        $('.order-item:nth-child(' + index2 + ') .address-show h1').css('display', 'none')
                        var a = $('.order-item:nth-child(' + index2 + ') .address-show div')
                        gsap.to(a, { right: '0%', rotate: '0' })
                        gsap.to('.order-item:nth-child(' + index2 + ') .address-show p', { autoAlpha: '0' })
                        gsap.to('.order-item:nth-child(' + index2 + ') .address-show h1', { autoAlpha: '0' })
                        gsap.to('.order-item:nth-child(' + index2 + ') .address-show', { width: '75px', ease: "power4.out" })
                    });

                    $(".order-item").click(function () {
                        var index = $(this).index();
                        var index2 = index + 1;
                        $('.order-item').css('box-shadow', '');
                        $('.order-item:nth-child(' + index2 + ')').css('box-shadow', 'rgb(255 255 255) 0px 0px 0px 2px');

                        var val = (filteredData[index]);
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

                    $(`.order-item .delv-status`).change(() => {
                        console.log($('.order-item:nth-child(' + gi2 + ') .delv-status option:selected').val());
                        $.ajax({
                            url: '/admin-update-deliver-status',
                            type: 'POST',
                            data: {
                                id: filteredData[generalindex]._id,
                                status: $('.order-item:nth-child(' + gi2 + ') .delv-status option:selected').val()
                            },
                            success: (result) => {
                                if (result) {
                                    location.reload(true);
                                }
                            }
                        })
                    });
                    /*  }) */
                })//end of foreach
            }
        })
    }
})

//delivered

$.ajax({
    type: 'POST',
    url: '/admin-orders',
    success: (data) => {
        var filteredData = data.filter(datas => datas.delivery_status == 'Delivered')

        $('table.bill-table.fordelivered tr:nth-child(2) td:nth-child(2)').html(filteredData[0].framemodel);
        $('table.bill-table.fordelivered tr:nth-child(2) td:nth-child(3)').html("₹" + filteredData[0].frameprice + "/-");
        $('table.bill-table.fordelivered tr:nth-child(3) td:nth-child(2)').html(filteredData[0].handlebarmodel);
        $('table.bill-table.fordelivered tr:nth-child(3) td:nth-child(3)').html("₹" + filteredData[0].handlebarprice + "/-");
        $('table.bill-table.fordelivered tr:nth-child(4) td:nth-child(2)').html(filteredData[0].seatmodel);
        $('table.bill-table.fordelivered tr:nth-child(4) td:nth-child(3)').html("₹" + filteredData[0].seatprice + "/-");
        $('table.bill-table.fordelivered tr:nth-child(5) td:nth-child(2)').html(filteredData[0].cablemodel);
        $('table.bill-table.fordelivered tr:nth-child(5) td:nth-child(3)').html("₹" + filteredData[0].cableprice + "/-");
        $('table.bill-table.fordelivered tr:nth-child(6) td:nth-child(2)').html(filteredData[0].mudguardmodel);
        $('table.bill-table.fordelivered tr:nth-child(6) td:nth-child(3)').html("₹" + filteredData[0].mudguardprice + "/-");
        $('table.bill-table.fordelivered tr:nth-child(7) td:nth-child(2)').html(filteredData[0].forkmodel);
        $('table.bill-table.fordelivered tr:nth-child(7) td:nth-child(3)').html("₹" + filteredData[0].forkprice + "/-");

        if (filteredData[0].gears == 1) {
            $('table.bill-table.fordelivered tr:nth-child(8) td:nth-child(2)').html(filteredData[0].gearmodel);
            $('table.bill-table.fordelivered tr:nth-child(8) td:nth-child(3)').html("₹" + filteredData[0].gearprice + "/-");
        }
        else {
            if (filteredData[0].gears == 8) {
                $('table.bill-table.fordelivered tr:nth-child(8) td:nth-child(2)').html("SM-3420(8)");
                $('table.bill-table.fordelivered tr:nth-child(8) td:nth-child(3)').html("₹" + filteredData[0].gearprice + "/-");
            }
            else if (filteredData[0].gears == 16) {
                $('table.bill-table.fordelivered tr:nth-child(8) td:nth-child(2)').html("SM-3420(16)");
                $('table.bill-table.fordelivered tr:nth-child(8) td:nth-child(3)').html("₹" + filteredData[0].gearprice + "/-");
            }
            else {
                $('table.bill-table.fordelivered tr:nth-child(8) td:nth-child(2)').html("SM-3420(21)");
                $('table.bill-table.fordelivered tr:nth-child(8) td:nth-child(3)').html("₹" + filteredData[0].gearprice + "/-");
            }
        }

        $('table.bill-table.fordelivered tr:nth-child(9) td:nth-child(2)').html(filteredData[0].tyremodel);
        $('table.bill-table.fordelivered tr:nth-child(9) td:nth-child(3)').html("₹" + filteredData[0].tyreprice + "/-");
        $('table.bill-table.fordelivered tr:nth-child(10) td:nth-child(3)').html("₹" + filteredData[0].total + "/-");

        filteredData.forEach((alldata, i) => {

            $('.delivered-items').append(`
            ${(alldata.delivery_status == 'Delivered') ?
                    `<div class="delivered-item">
            <div class="product-img"></div>
            <div class="orders-content">
        <ul>
            <li class="product-title">CUSTOM PSYCLE<p>(${alldata.framemodel})</p></li>
            <li class="order-id">Order ID :<p> ${alldata._id.toUpperCase()}</p></li>
            <li class="order-date">Ordered On :<p> ${(alldata.orderdate.slice(0, 3)) + ", " + (alldata.orderdate.slice(4, 15))}</p></li>
            <li class="status">Delivery Status :<p> Delivered✔️</p></li>
        </ul>
        <div class="orders-total">Total :<p style = "text-indent: 4px;">₹${alldata.total}</p></div>
        </div>
            <div class="download-btn"></div>
        </div>` : ``
                }`)

            $('.delivered-item:nth-child(1)').css('box-shadow', 'rgb(255 255 255) 0px 0px 0px 2px');
            $(".delivered-item").hover(function () {
                generalindex = $(this).index();
                gi2 = generalindex + 1;
                index = $(this).index();
                var index1 = $(this).index();
                index1 += 1;
                var toScale = $('.delivered-item:nth-child(' + index1 + ')');
                gsap.to(toScale, { duration: 0.5, scale: '1.05', ease: "power4.out" });
            }, function () {
                gsap.to('.delivered-item', { duration: 0.5, scale: '1', ease: "power4.out" });
            });


            $(".delivered-item").click(function () {
                console.log($(this).index());
                var index = $(this).index();
                var index2 = index + 1;
                $('.delivered-item').css('box-shadow', '');
                $('.delivered-item:nth-child(' + index2 + ')').css('box-shadow', 'rgb(255 255 255) 0px 0px 0px 2px');

                var val = (filteredData[index]);
                /* console.log(val._id); */
                $('table.bill-table.fordelivered tr:nth-child(2) td:nth-child(2)').html(val.framemodel);
                $('table.bill-table.fordelivered tr:nth-child(2) td:nth-child(3)').html("₹" + val.frameprice + "/-");
                $('table.bill-table.fordelivered tr:nth-child(3) td:nth-child(2)').html(val.handlebarmodel);
                $('table.bill-table.fordelivered tr:nth-child(3) td:nth-child(3)').html("₹" + val.handlebarprice + "/-");
                $('table.bill-table.fordelivered tr:nth-child(4) td:nth-child(2)').html(val.seatmodel);
                $('table.bill-table.fordelivered tr:nth-child(4) td:nth-child(3)').html("₹" + val.seatprice + "/-");
                $('table.bill-table.fordelivered tr:nth-child(5) td:nth-child(2)').html(val.cablemodel);
                $('table.bill-table.fordelivered tr:nth-child(5) td:nth-child(3)').html("₹" + val.cableprice + "/-");
                $('table.bill-table.fordelivered tr:nth-child(6) td:nth-child(2)').html(val.mudguardmodel);
                $('table.bill-table.fordelivered tr:nth-child(6) td:nth-child(3)').html("₹" + val.mudguardprice + "/-");
                $('table.bill-table.fordelivered tr:nth-child(7) td:nth-child(2)').html(val.forkmodel);
                $('table.bill-table.fordelivered tr:nth-child(7) td:nth-child(3)').html("₹" + val.forkprice + "/-");

                if (val.gears == 1) {
                    $('table.bill-table.fordelivered tr:nth-child(8) td:nth-child(2)').html(val.gearmodel);
                    $('table.bill-table.fordelivered tr:nth-child(8) td:nth-child(3)').html("₹" + val.gearprice + "/-");
                }
                else {
                    if (val.gears == 8) {
                        $('table.bill-table.fordelivered tr:nth-child(8) td:nth-child(2)').html("SM-3420(8)");
                        $('table.bill-table.fordelivered tr:nth-child(8) td:nth-child(3)').html("₹" + val.gearprice + "/-");
                    }
                    else if (val.gears == 16) {
                        $('table.bill-table.fordelivered tr:nth-child(8) td:nth-child(2)').html("SM-3420(16)");
                        $('table.bill-table.fordelivered tr:nth-child(8) td:nth-child(3)').html("₹" + val.gearprice + "/-");
                    }
                    else {
                        $('table.bill-table.fordelivered tr:nth-child(8) td:nth-child(2)').html("SM-3420(21)");
                        $('table.bill-table.fordelivered tr:nth-child(8) td:nth-child(3)').html("₹" + val.gearprice + "/-");
                    }
                }

                $('table.bill-table.fordelivered tr:nth-child(9) td:nth-child(2)').html(val.tyremodel);
                $('table.bill-table.fordelivered tr:nth-child(9) td:nth-child(3)').html("₹" + val.tyreprice + "/-");
                $('table.bill-table.fordelivered tr:nth-child(10) td:nth-child(3)').html("₹" + val.total + "/-");

            })

        })//end of foreach

        $(".download-btn").click(() => {
            $.ajax({
                type: 'POST',
                url: '/invoice',
                data: {
                    email: $.cookie("email"),
                    id: filteredData[generalindex]._id,
                    from: 'admin'
                },
                success: (res) => {
                    console.log(res);
                    var invoicedate = new Date();
                    res.data.invoiceDate = invoicedate.toString().slice(8, 10) + "-" + invoicedate.toISOString().slice(5, 7) + "-" + invoicedate.toISOString().slice(0, 4);
                    easyinvoice.createInvoice(res.data, function (result) {
                        easyinvoice.download(`invoice${Date.now()}.pdf`, result.pdf);
                    });
                }
            })
        })
    }
})

//admin profile prefill
$.ajax({
    url: '/admin-data-get/' + ($.cookie("adminEmail")),
    type: 'GET',
    success: (result) => {
        document.querySelector(".adminname").value = result.name;
        if (result.profile_pic != '') {
            $('.profile-pic').css({ 'background': result.profile_pic, 'background-repeat': 'no-repeat', 'background-position': 'center', 'background-size': 'cover' });
        }
    }
})

//admin profile update

var img;
$('#upload').change(() => {
    console.log("hi");
    function encodeImageFileAsURL() {
        var filesSelected = document.getElementById("upload").files;
        if (filesSelected.length > 0) {
            var fileToLoad = filesSelected[0];
            var fileReader = new FileReader();
            fileReader.onload = function (fileLoadedEvent) {
                var srcData = fileLoadedEvent.target.result; // <--- data: base64
                var newImage = document.createElement('img');
                newImage.src = srcData;
                var cssBG = "url('" + srcData + "')";
                img = cssBG;

                $('.profile-pic').css({ 'background': cssBG, 'background-repeat': 'no-repeat', 'background-position': 'center', 'background-size': 'cover' });
            }
            fileReader.readAsDataURL(fileToLoad);
        }
    }
    encodeImageFileAsURL()
})

$('.adminupdate').click(() => {

    $.ajax({
        url: '/admin-data-update',
        type: 'POST',
        data: {
            email: $.cookie("adminEmail"),
            name: document.querySelector(".adminname").value,
            passwd: document.querySelector(".adminpasswd").value,
            image: ((document.getElementById("upload").files).length != 0) ? img : ''
        },
        success: (result) => {
            alert("Information Updated Successfully!");
            if (result == "passwd") {
                $.removeCookie("adminLoggedin");
                window.open("adminlogin.html");
                window.open('', '_self', '');
                window.close();
            }
        }
    })
})

//admin profile delete

$('#remove-pic').click(() => {
    $('.profile-pic').css({ 'background': '', 'background-repeat': '', 'background-position': '', 'background-size': '' });
    $.ajax({
        url: '/admin-del-profile-pic',
        type: 'POST',
        data: {
            email: $.cookie("adminEmail")
        },
        success: alert("Information Updated Successfully!")
    })
})



//admin logout

$('.adminlogout').click(() => {
    $.removeCookie("adminLoggedin");
    window.open("index.html");
    window.open('', '_self', '');
    window.close();
})

//insights data

var insightsData;
$.ajax({
    url: '/statisics',
    type: 'GET',
    success: (result) => {
        insightsData = result;
    }
})

//insights

var targetframeChart = document.getElementById('frameChart').getContext('2d');
targetframeChart.canvas.width = 0;
targetframeChart.canvas.height = 0;

var targethandleChart = document.getElementById('handleChart').getContext('2d');
targethandleChart.canvas.width = 0;
targethandleChart.canvas.height = 0;

var targetseatChart = document.getElementById('seatChart').getContext('2d');
targetseatChart.canvas.width = 0;
targetseatChart.canvas.height = 0;

var targetcableChart = document.getElementById('cableChart').getContext('2d');
targetcableChart.canvas.width = 0;
targetcableChart.canvas.height = 0;

var targetmudguardChart = document.getElementById('mudguardChart').getContext('2d');
targetmudguardChart.canvas.width = 0;
targetmudguardChart.canvas.height = 0;

var targetforkChart = document.getElementById('forkChart').getContext('2d');
targetforkChart.canvas.width = 0;
targetforkChart.canvas.height = 0;

var targetgearChart = document.getElementById('gearChart').getContext('2d');
targetgearChart.canvas.width = 0;
targetgearChart.canvas.height = 0;

var targettyreChart = document.getElementById('tyreChart').getContext('2d');
targettyreChart.canvas.width = 0;
targettyreChart.canvas.height = 0;

Chart.defaults.global.defaultFontFamily = 'Gilroy';
Chart.defaults.global.defaultFontColor = 'white';
$('nav div div:nth-child(3)').click(() => {

    //frame
    var frameChart = new Chart(targetframeChart, {
        type: 'pie',
        data: {
            labels: ['Plain Yellow', 'Plain Blue', 'Plain Orange', 'Plain Green', 'Plain Red', 'Metal Finish',
                'Camo Grey', 'Camo Cream', 'Camo Green', 'Camo Brown'],
            datasets: [{
                label: 'Frames',
                data: insightsData.frame,
                backgroundColor: ['#EF476F', '#F78C6B', '#FBAF69', '#FFD166', '#83D483', '#06D6A0', '#0CB0A9',
                    '#118AB2', '#0C637F', '#073B4C'],
                borderWidth: 0
            }]
        },
        options: {
            legend: {
                position: 'right',
                align: 'middle'
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var dataset = data.datasets[tooltipItem.datasetIndex];
                        var total = dataset.data.reduce(function (previousValue, currentValue, currentIndex, array) {
                            return previousValue + currentValue;
                        });
                        var currentValue = dataset.data[tooltipItem.index];
                        var percentage = Math.floor(((currentValue / total) * 100) + 0.5);
                        return percentage + "%";
                    },
                    title: function (tooltipItem, data) {
                        return data.labels[tooltipItem[0].index];
                    }
                }
            },
            title: {
                display: true,
                text: 'Frame Data',
                position: 'bottom',
                fontSize: 25
            }
        }
    })

    //handle
    var handleChart = new Chart(targethandleChart, {
        type: 'pie',
        data: {
            labels: ['HB-2734', 'HB-8473'],
            datasets: [{
                label: 'Handles',
                data: insightsData.handle,
                backgroundColor: ['#EF476F', '#F78C6B'],
                borderWidth: 0
            }]
        },
        options: {
            legend: {
                position: 'right',
                align: 'middle'
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var dataset = data.datasets[tooltipItem.datasetIndex];
                        var total = dataset.data.reduce(function (previousValue, currentValue, currentIndex, array) {
                            return previousValue + currentValue;
                        });
                        var currentValue = dataset.data[tooltipItem.index];
                        var percentage = Math.floor(((currentValue / total) * 100) + 0.5);
                        return percentage + "%";
                    },
                    title: function (tooltipItem, data) {
                        return data.labels[tooltipItem[0].index];
                    }
                }
            },
            title: {
                display: true,
                text: 'Handlebar Data',
                position: 'bottom',
                fontSize: 25,
            }
        }
    })

    //seat
    var seatChart = new Chart(targetseatChart, {
        type: 'pie',
        data: {
            labels: ['Leather Black', 'Leather Brown', 'Leather Grey', 'Camo Grey', 'Camo Cream', 'Camo Green'],
            datasets: [{
                label: 'Seats',
                data: insightsData.seat,
                backgroundColor: ['#EF476F', '#F78C6B', '#FBAF69', '#FFD166', '#83D483', '#06D6A0'],
                borderWidth: 0
            }]
        },
        options: {
            legend: {
                position: 'right',
                align: 'middle'
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var dataset = data.datasets[tooltipItem.datasetIndex];
                        var total = dataset.data.reduce(function (previousValue, currentValue, currentIndex, array) {
                            return previousValue + currentValue;
                        });
                        var currentValue = dataset.data[tooltipItem.index];
                        var percentage = Math.floor(((currentValue / total) * 100) + 0.5);
                        return percentage + "%";
                    },
                    title: function (tooltipItem, data) {
                        return data.labels[tooltipItem[0].index];
                    }
                }
            },
            title: {
                display: true,
                text: 'Seat Data',
                position: 'bottom',
                fontSize: 25
            }
        }
    })

    //cable
    var cableChart = new Chart(targetcableChart, {
        type: 'pie',
        data: {
            labels: ['Black', 'Green', 'Brown', 'Grey'],
            datasets: [{
                label: 'Cables',
                data: insightsData.cable,
                backgroundColor: ['#EF476F', '#F78C6B', '#FBAF69', '#FFD166'],
                borderWidth: 0
            }]
        },
        options: {
            legend: {
                position: 'right',
                align: 'middle'
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var dataset = data.datasets[tooltipItem.datasetIndex];
                        var total = dataset.data.reduce(function (previousValue, currentValue, currentIndex, array) {
                            return previousValue + currentValue;
                        });
                        var currentValue = dataset.data[tooltipItem.index];
                        var percentage = Math.floor(((currentValue / total) * 100) + 0.5);
                        return percentage + "%";
                    },
                    title: function (tooltipItem, data) {
                        return data.labels[tooltipItem[0].index];
                    }
                }
            },
            title: {
                display: true,
                text: 'Cable Data',
                position: 'bottom',
                fontSize: 25
            }
        }


    })

    //mudguard
    var mudguardChart = new Chart(targetmudguardChart, {
        type: 'pie',
        data: {
            labels: ['None', 'MG-3984', 'MG-1723', 'MG-9485'],
            datasets: [{
                label: 'Mudguard',
                data: insightsData.mudguard,
                backgroundColor: ['#EF476F', '#F78C6B', '#FBAF69', '#FFD166'],
                borderWidth: 0
            }]
        },
        options: {
            legend: {
                position: 'right',
                align: 'middle'
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var dataset = data.datasets[tooltipItem.datasetIndex];
                        var total = dataset.data.reduce(function (previousValue, currentValue, currentIndex, array) {
                            return previousValue + currentValue;
                        });
                        var currentValue = dataset.data[tooltipItem.index];
                        var percentage = Math.floor(((currentValue / total) * 100) + 0.5);
                        return percentage + "%";
                    },
                    title: function (tooltipItem, data) {
                        return data.labels[tooltipItem[0].index];
                    }
                }
            },
            title: {
                display: true,
                text: 'Mudguard Data',
                position: 'bottom',
                fontSize: 25
            }
        }
    })

    //fork
    var forkChart = new Chart(targetforkChart, {
        type: 'pie',
        data: {
            labels: ['Black', 'Metal'],
            datasets: [{
                label: 'Fork',
                data: insightsData.fork,
                backgroundColor: ['#EF476F', '#F78C6B'],
                borderWidth: 0
            }]
        },
        options: {
            legend: {
                position: 'right',
                align: 'middle'
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var dataset = data.datasets[tooltipItem.datasetIndex];
                        var total = dataset.data.reduce(function (previousValue, currentValue, currentIndex, array) {
                            return previousValue + currentValue;
                        });
                        var currentValue = dataset.data[tooltipItem.index];
                        var percentage = Math.floor(((currentValue / total) * 100) + 0.5);
                        return percentage + "%";
                    },
                    title: function (tooltipItem, data) {
                        return data.labels[tooltipItem[0].index];
                    }
                }
            },
            title: {
                display: true,
                text: 'Fork Data',
                position: 'bottom',
                fontSize: 25
            }
        }
    })

    //gear
    var gearChart = new Chart(targetgearChart, {
        type: 'pie',
        data: {
            labels: ['Gearless', '8', '16', '21'],
            datasets: [{
                label: 'Gears',
                data: insightsData.gear,
                backgroundColor: ['#EF476F', '#F78C6B', '#FBAF69', '#FFD166'],
                borderWidth: 0
            }]
        },
        options: {
            legend: {
                position: 'right',
                align: 'middle'
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var dataset = data.datasets[tooltipItem.datasetIndex];
                        var total = dataset.data.reduce(function (previousValue, currentValue, currentIndex, array) {
                            return previousValue + currentValue;
                        });
                        var currentValue = dataset.data[tooltipItem.index];
                        var percentage = Math.floor(((currentValue / total) * 100) + 0.5);
                        return percentage + "%";
                    },
                    title: function (tooltipItem, data) {
                        return data.labels[tooltipItem[0].index];
                    }
                }
            },
            title: {
                display: true,
                text: 'Gear Data',
                position: 'bottom',
                fontSize: 25
            }
        }
    })

    //tyre
    var tyreChart = new Chart(targettyreChart, {
        type: 'pie',
        data: {
            labels: ['Razor-03 Black', 'Razor-03 Green', 'Razor-03 Blue', 'Razor-03 Brown',
                'Monster-03 Black', 'Monster-03 Green', 'Monster-03 Blue', 'Monster-03 Brown'],
            datasets: [{
                label: 'Tyres',
                data: insightsData.tyre,
                backgroundColor: ['#EF476F', '#F78C6B', '#FBAF69', '#FFD166', '#83D483', '#06D6A0', '#0CB0A9',
                    '#118AB2'],
                borderWidth: 0
            }]
        },
        options: {
            legend: {
                position: 'right',
                align: 'middle'
            },
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var dataset = data.datasets[tooltipItem.datasetIndex];
                        var total = dataset.data.reduce(function (previousValue, currentValue, currentIndex, array) {
                            return previousValue + currentValue;
                        });
                        var currentValue = dataset.data[tooltipItem.index];
                        var percentage = Math.floor(((currentValue / total) * 100) + 0.5);
                        return percentage + "%";
                    },
                    title: function (tooltipItem, data) {
                        return data.labels[tooltipItem[0].index];
                    }
                }
            },
            title: {
                display: true,
                text: 'Tyre Data',
                position: 'bottom',
                fontSize: 25
            }
        }
    })

})

$.ajax({
    type: 'GET',
    url: '/admin-insights/' + $.cookie("adminEmail"),
    success: (result) => {
        $('.insight-info p:nth-child(1)').append((result.admin).split(' ')[0] + '  !');
        $('.insight-info p:nth-child(2)').append(result.users);
        $('.insight-info p:nth-child(3)').append(result.delivered);
        $('.insight-info p:nth-child(4)').append(result.pending);
    }
})