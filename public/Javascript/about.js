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

//video
var video = $('video');
var videoElement = video.get(0).currentTime;
var videoElement = video.get(0).currentTime;
$(".animation").hover(function () {
    if (videoElement == 0) {
        $(this).children("video")[0].play();
    }
},
);

$.ajax({
    url: '/site-info',
    type: 'GET',
    success: (result) => {
        $('.site-info p:nth-child(1)').append(result.users)
        $('.site-info p:nth-child(2)').append(result.orders)
    }
})

new Scrooth({
    element: document.querySelector("body"), // target element
    strength: 10,
    acceleration: 1.2,
    deceleration: 0.97
});



$('.feedback').css('left', '-37%');
$('#feedbackbtn').click(() => {
    gsap.to('.feedback', { duration: 0.4, left: '0', ease: "power2.out" })
})
$('#cancel-feedback').click(() => {
    gsap.to('.feedback', { duration: 0.4, left: '-37%', ease: "power2.out" })
})

$('#loader-1').css('display', 'none')
$('.feedback').submit(() => {
    $.ajax({
        type: 'POST',
        url: '/feedback',
        data: {
            email: document.getElementById("fbemail").value,
            text: document.getElementById("fbtext").value
        },
        beforeSend: () => { $('#loader-1').css('display', 'block') },
        success: (res) => {
            if (res) {
                $('#loader-1').css('display', 'none');
                alert("Feedback Sent✔️");
                gsap.to('.feedback', { duration: 0.4, left: '-37%', ease: "power2.out" });
                $('.feedback').find("input[type=email], textarea").val("");
            }
        }
    })
})