//video
var video = $('video');
var videoElement = video.get(0).currentTime;
$(".animation").hover(function () {
  if (videoElement == 0) {
    $(this).children("video")[0].play();
  }
},
);

document.addEventListener('mousemove', nxtnowanim);

function nxtnowanim(event) {
    var a = event.clientX;
    var c = 2 * (window.innerWidth) / 3;
    var b = window.innerWidth / 3;
    if (a < b) {
        gsap.to('.thenext', { duration: 1, x: '-63%', ease: "power4.easeInOut" });
        gsap.to('.isnow', { duration: 1, x: '-65%', ease: "power4.easeInOut" });
        gsap.to('.arrow', { duration: 0.3, x: '-5vw', scale: '4', rotate: '0', autoAlpha: 1, ease: "power4.easeInOut" });
    } else if (a > c) {
        gsap.to('.thenext', { duration: 1, x: '57%', ease: "power4.easeInOut" });
        gsap.to('.isnow', { duration: 1, x: '66%', ease: "power4.easeInOut" });
        gsap.to('.arrow', { duration: 0.3, x: '5vw', scale: '4', rotate: '180', autoAlpha: 1, ease: "power4.easeInOut" });
    } else{
        gsap.to('.thenext', { duration: 1, x: '0%', ease: "power4.easeInOut" });
        gsap.to('.isnow', { duration: 1, x: '0%', ease: "power4.easeInOut" });
        gsap.to('.arrow', { duration: 0.3, x: '0%', y: '0vh', scale: '1', rotate: '90', autoAlpha: 0, ease: "power4.easeInOut" });
    }
}


gsap.to('.arrow', { duration: 1, x: '0%', scale: '1', rotate: '90', autoAlpha: 0, ease: "power4.easeInOut" });

gsap.to('.titles', { opacity: 0, ease: "power4.easeInOut" });

gsap.to('.gradient', {x: '-100%'});

gsap.to('.scrollToTop',{x: '7vw', ease: "power4.easeInOut"});
  
var timeline = gsap.timeline({repeat: -1});

timeline
    .fromTo('.scrolldownicon',{autoAlpha:0.3}, {duration: 1, y: '2vh', autoAlpha:1})
    .to('.scrolldownicon', {duration: 1, y: '0vh', autoAlpha:0.3});

    $('body').addClass('stop-scrolling');



    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".image_container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () => "+=" + document.querySelector(".image_container").offsetWidth,
      }
    });

/*     $('.container').stellar();
      $('.container').stellar({verticalScrolling:false}); */

      


