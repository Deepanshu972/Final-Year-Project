import * as THREE from '../build/three.module.js';
import {GLTFLoader} from '/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from '/jsm/controls/OrbitControls.js';

var scene3d = document.querySelector(".scene3d");
window.addEventListener( 'wheel', onMouseWheel, false );
var mouseX = 0, mouseY = 0, mouseZ = 0;
var x = 0, scroll = 0, counter = 0, child;
var signupbtn = 0;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
var windowHalfZ = window.innerWidth / 2;
var toggleState=false;

document.addEventListener('mousemove', onDocumentMouseMove);

var scrollTimeout = null;   
let scene, camera, renderer, loader;

var controls;
var cycle;
$('.glitch').fadeOut();


function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 50000);
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setClearColor("#242425");
    renderer.setSize(window.innerWidth, window.innerHeight);
    scene3d.appendChild(renderer.domElement);


    addEventListener('resize', () => {

        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
        windowHalfZ = window.innerWidth / 2;
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

    })

    var directionalLight = new THREE.DirectionalLight(0xffffff, 10);
    directionalLight.position.set(0, 1, 0);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    var light1 = new THREE.PointLight(0xc4c4c4, 5);
    light1.position.set(0, 10, 0);
    scene.add(light1);
    var hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 4);
    scene.add(hemiLight);

    controls = new OrbitControls( camera, renderer.domElement );
    controls.autoRotate  = true;
    controls.autoRotateSpeed = -3.0;
    camera.position.set(0, -40, -550);

    var materialArray = [];
    var texture_posz = new THREE.TextureLoader().load('posz.jpg');
    var texture_negz = new THREE.TextureLoader().load('negz.jpg');
    var texture_posy = new THREE.TextureLoader().load('posy.jpg');
    var texture_negy = new THREE.TextureLoader().load('negy.jpg');
    var texture_posx = new THREE.TextureLoader().load('posx.jpg');
    var texture_negx = new THREE.TextureLoader().load('negx.jpg');

    materialArray.push(new THREE.MeshBasicMaterial({ map: texture_negz }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: texture_posz }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: texture_posy }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: texture_negy }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: texture_posx }));
    materialArray.push(new THREE.MeshBasicMaterial({ map: texture_negx }));

    for (let i = 0; i < 6; i++)
        materialArray[i].side = THREE.BackSide;

    let skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);

    let skybox = new THREE.Mesh(skyboxGeo, materialArray);

    scene.add(skybox);


    loader = new GLTFLoader();
    loader.load('cycle.gltf', function (gltf) {

        cycle = gltf.scene.children[0];
        cycle.scale.set(40, 40, 40);

        cycle.position.set(0, -100, 0);
        cycle.rotation.set( -5*(Math.PI/180), 180*(Math.PI/180) , 0);
        scene.add(gltf.scene);
        animate();

    });

//check loading
    THREE.DefaultLoadingManager.onLoad = function ( ) {

        $(".loading-screen").fadeOut();
    
    };
    

}



function animate() {
    render();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

function onDocumentMouseMove(event) {

    x = 1;
    mouseX = (event.clientX - windowHalfX) * 0.6; //0.5 to set how much angle to tilt
    mouseY = (event.clientY - windowHalfY) * 0.2;
    mouseZ = (event.clientX - windowHalfX) * 0.15;

}



function render() {

if(x==2){
    controls.update();
}

    if (x == 1) {
        camera.position.x += (-mouseX - camera.position.x) * .05;
        camera.position.y += (-mouseY - camera.position.y) * .05;
        if (mouseZ > 0) {
            camera.position.z += (mouseZ - camera.position.z * 0.3) - 200;
        }
        if (mouseZ < 0) {
            camera.position.z += (-  mouseZ - camera.position.z * 0.3) - 200;
        }
    }

    camera.lookAt(scene.position);

}

const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  $('body').addClass('stop-scrolling');
  toggleState = container.classList.toggle("active");
  if(toggleState==false){
    $('.home').css('pointer-events','auto');
    /* gsap.to(window, {delay: 1, scrollTo: ".threeD", ease: "power4.easeInOut"}); */
    if(counter>0)
    {
        gsap.to('.scrollToTop',{delay: 0.5, duration: 1, x: '0vw', ease: "elastic.out(1, 0.3)"});
        
    }
    if(counter>4){
        counter=4;
    }
  }
  else{
    /* gsap.to(window, {duration: 1, scrollTo: ".threeD", ease: "power4.easeInOut"}); */
    gsap.to('.scrollToTop',{x: '7vw', ease: "power4.easeInOut"});
    $('.home').css('pointer-events','none');
  }
});

document.querySelector(".main").addEventListener("click", () =>{
    if(toggleState==true)
    {
        container.classList.remove("active");
        toggleState=false;
    }
});

/* document.querySelector(".home").addEventListener("mouseenter", () =>{
    
    document.querySelector(".menu").classList.remove("");
}); */

document.addEventListener('wheel', updateCamera);
function updateCamera(event) {
    scroll = Math.round(event.deltaY);
}

let lim = 0;
function onMouseWheel() {

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function() {
        window.removeEventListener( 'wheel', onMouseWheel, false );
        /* console.log("Haven't scrolled in 250ms"); */
        const style = window.getComputedStyle(document.querySelector(".panel"))
        const matrix = style.transform || style.webkitTransform || style.mozTransform
        let xaxis=0;
        // Can either be 2d or 3d transform
        const matrixType = matrix.includes('3d') ? '3d' : '2d';
        const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ');
        if (matrixType === '2d') {
          xaxis = matrixValues[4]
        }        

        if (scroll > 0) {
            if(toggleState==false&&signupbtn==0){
            scroll = 0;
            x = 0;
            counter += 1;
            console.log('counter='+counter);
            }
        } else if (scroll < 0) {
            if(xaxis==0&&toggleState==false&&signupbtn==0){
            scroll = 0;
            counter -= 1;
            console.log('counter='+counter);
            }
        }else{
            console.log('no luck is the');
        }

    if (counter == 0) {  //the next is now
        x = 1;
        gsap.to('.scrollToTop',{duration: 0.5, x: '7vw', ease: "power4.easeInOut"});
        gsap.fromTo('.scrolldownicon',{autoAlpha: 0, y: '-100%'}, {autoAlpha: 1, y: '0%'});
        timeline.play();
        gsap.to('.arrow', { delay:0.3, duration: 0.3, y: '0%', autoAlpha: 1, ease: "power4.easeInOut" });
        gsap.to('.thenext', { delay:0.3, duration: 0.3, y: '0%', autoAlpha: 1, ease: "power4.easeInOut" });
        gsap.to('.isnow', { delay:0.3, duration: 0.3, y: '0%', autoAlpha: 1, ease: "power4.easeInOut" });
        child = document.querySelector(`.titles:nth-child(${1})`);
        gsap.to(child, {duration: 0.3, y: '0vh', autoAlpha: 0});
        gsap.to('.gradient', {x: '-100%', onComplete: enableScroll});
        document.addEventListener('mousemove', onDocumentMouseMove);
        document.addEventListener('mousemove', nxtnowanim);
    }


        if (counter == 1) { //psycle
            gsap.to('.scrollToTop',{duration: 1, x: '0vw', ease: "elastic.out(1, 0.3)"});
            gsap.to('.scrolldownicon', {autoAlpha: 0, y: '-100%'})
            timeline.pause();
            gsap.to('.arrow', { duration: 0.3, y: '-100%', autoAlpha: 0, ease: "power4.easeInOut" });
            gsap.to('.thenext', { duration: 0.3, y: '-100%', autoAlpha: 0, ease: "power4.easeInOut" });
            gsap.to('.isnow', { duration: 0.3, y: '-100%', autoAlpha: 0, ease: "power4.easeInOut" });
            child = document.querySelector(`.titles:nth-child(${1})`);
            gsap.to(child, { delay: 0.4, duration: 0.3, y: '-50vh', autoAlpha: 1, ease: "power4.easeInOut"});
            child = document.querySelector(`.titles:nth-child(${2})`);
            gsap.fromTo(child,{autoAlpha: 1,  x: '45vw'}, { duration: 0.3, y: '0vh', autoAlpha: 0, ease: "power4.easeInOut"});
            gsap.fromTo('.gradient',{rotate: 0, x: '-100%'}, {duration: 1, x: '0%'});
            gsap.to(camera.position, {
                duration: 1,
                x: 120,
                y: 90,
                z: -240,
                onUpdate: function () {
                    camera.lookAt(scene.position);
                }, onComplete: enableScroll
            }); 
            document.removeEventListener('mousemove', nxtnowanim);
            document.removeEventListener('mousemove', onDocumentMouseMove);
        }


        if(counter==2){ //handle
            child = document.querySelector(`.titles:nth-child(${1})`);
            gsap.to(child, { duration: 0.3, y: '-135vh', autoAlpha: 0, ease: "power4.easeInOut"});
            child = document.querySelector(`.titles:nth-child(${2})`);
            gsap.fromTo(child,{autoAlpha: 0,  x: '45vw'}, { delay: 0.3, duration: 0.3, y: '-50vh', autoAlpha: 1, ease: "power2.easeInOut"});
            child = document.querySelector(`.titles:nth-child(${3})`);
            gsap.to(child, { duration: 0.3, y: '0vh', opacity:0, ease: "power4.easeInOut"});
            gsap.fromTo('.gradient',{rotate: 180, x: '100%'}, {duration: 1, x: '10%'});
            gsap.to(camera.position, {
                duration: 1,
                x: -120,
                y: 180,
                z: -260,
                onUpdate: function () {
                    camera.lookAt(scene.position);
                }, onComplete: enableScroll
            });
        }


        if(counter==3){ //tyre
            lim = 0;
            
            child = document.querySelector(`.titles:nth-child(${2})`);
            gsap.to(child, { duration: 0.3, y: '-135vh', autoAlpha: 0, ease: "power4.easeInOut"});
            child = document.querySelector(`.titles:nth-child(${3})`);
            gsap.to(child, { delay: 0.4, duration: 0.3, y: '-50vh', autoAlpha: 1, ease: "power4.easeInOut"});
            child = document.querySelector(`.titles:nth-child(${4})`);
            gsap.fromTo(child,{autoAlpha: 1,  x: '45vw'}, { duration: 0.3, y: '0vh', autoAlpha: 0, ease: "power4.easeInOut"});
            gsap.fromTo('.gradient',{rotate: 0, x: '-100%'}, {duration: 1, x: '0%'});
            gsap.to(camera.position, {
                duration: 1,
                x: 120,
                y: -90,
                z: -370,
                onUpdate: function() {
                    camera.lookAt( scene.position );
                }, onComplete: enableScroll
            });
        }
        
        if(counter==4){ //gear
            /* if(lim!=1){
                lim=0; */
                x=0;
            child = document.querySelector(`.titles:nth-child(${3})`);
            gsap.to(child, { duration: 0.3, y: '-135vh', autoAlpha: 0, ease: "power4.easeInOut"});
            child = document.querySelector(`.titles:nth-child(${4})`);
            gsap.fromTo(child,{autoAlpha: 0,  x: '45vw'}, { delay: 0.3, duration: 0.3, y: '-50vh', autoAlpha: 1, ease: "power2.easeInOut"});
            gsap.fromTo('.gradient',{rotate: 180, x: '100%', autoAlpha: 1}, {duration: 1, x: '10%'});

            gsap.to(camera.position, { 
                duration: 1,
                x: 100,
                y: -50,
                z: 180,
                onUpdate: function() {
                    camera.lookAt( scene.position );
                }, onComplete: enableScroll
            });

            gsap.to(cycle.position, {
                duration: 1,
                x: 0,
                y: -100,
                z: 0,
                onUpdate: function () {
                    camera.lookAt(scene.position);
                }, onComplete: enableScroll
            });

            gsap.to(cycle.scale, {
                duration: 1,
                x: 40,
                y: 40,
                z: 40,
                onUpdate: function () {
                    camera.lookAt(scene.position);
                }, onComplete: enableScroll
            });
            $('.glitch').fadeOut();
/*         }
        else{  
            enableScroll();
            $('body').addClass('stop-scrolling')
            gsap.to(window, {duration: 1, scrollTo: ".threeD", ease: "power4.easeInOut"});
        } */
        }

/*         if(counter==5&&toggleState==false){
            enableScroll();
            lim=1;
            gsap.to(window, {duration: 1, scrollTo: ".image", ease: "power4.easeInOut"});
            $('body').removeClass('stop-scrolling');      
        } */

        if(counter==5){ //gear
            child = document.querySelector(`.titles:nth-child(${4})`);
            gsap.to('.gradient',{rotate: 180, x: '100%', duration: 1});
            gsap.to(child, { duration: 0.3, y: '-135vh', autoAlpha: 0, ease: "power4.easeInOut"});
            gsap.to(camera.position, {
                duration: 1,
                x: 0,
                y: -40,
                z: -550,
                onUpdate: function () {
                    camera.lookAt(scene.position);
                }, onComplete: enableScroll
            });

            gsap.to(cycle.position, {
                duration: 1,
                x: 0,
                y: -130,
                z: 100,
                onUpdate: function () {
                    camera.lookAt(scene.position);
                }, onComplete: enableScroll
            });

            gsap.to(cycle.scale, {
                duration: 1,
                x: 50,
                y: 50,
                z: 50,
                onUpdate: function () {
                    camera.lookAt(scene.position);
                }, onComplete: enableScroll
            });
            enableScroll();
            x=2;
            $('.glitch').fadeIn();
        }

        if(counter>5)
        {
            x=2;
            enableScroll();
            counter=5;
        }
        if(counter<0)
        {
            enableScroll();
            counter=0;
        }
       
    }, 250);
}

function enableScroll(){
    window.addEventListener( 'wheel', onMouseWheel, false );
}

//Back to top
export function gotoTop() {
    gsap.to(window, {duration: 1, scrollTo: ".threeD", ease: "power4.easeInOut"});
    gsap.to('.scrollToTop',{duration: 0.5, x: '7vw', ease: "power4.easeInOut"});
    $('body').addClass('stop-scrolling');
    x = 1;
    gsap.fromTo('.scrolldownicon',{autoAlpha: 0, y: '-100%'}, {autoAlpha: 1, y: '0%'});
    timeline.play();
    gsap.to('.arrow', { delay:0.3, duration: 0.3, y: '0%', autoAlpha: 1, ease: "power4.easeInOut" });
    gsap.to('.thenext', { delay:0.3, duration: 0.3, y: '0%', autoAlpha: 1, ease: "power4.easeInOut" });
    gsap.to('.isnow', { delay:0.3, duration: 0.3, y: '0%', autoAlpha: 1, ease: "power4.easeInOut" });
    if(counter==1 || counter==3){
        gsap.to('.titles', {duration: 0.3, y: '0vh', autoAlpha: 0, ease: "power4.easeInOut"});
        gsap.to('.gradient', {duration: 0.3, x: '-100%'});
    }else if(counter==2 || counter==4 || counter==5)
    {
        gsap.to('.titles', { duration: 0.3, y: '0vh', autoAlpha: 0, ease: "power4.easeInOut"});
        gsap.to('.gradient',{duration: 0.3, x: '100%'});
    }
    document.addEventListener('mousemove', onDocumentMouseMove);
    document.addEventListener('mousemove', nxtnowanim);
    counter=0;
    gsap.to(cycle.position, {
        duration: 1,
        x: 0,
        y: -100,
        z: 0,
        onUpdate: function () {
            camera.lookAt(scene.position);
        }, onComplete: enableScroll
    });

    gsap.to(cycle.scale, {
        duration: 1,
        x: 40,
        y: 40,
        z: 40,
        onUpdate: function () {
            camera.lookAt(scene.position);
        }, onComplete: enableScroll
    });
    $('.glitch').fadeOut();
  }
  
//Home
export function homeButton(){
    gsap.to(window, {duration: 1, scrollTo: ".threeD", ease: "power4.easeInOut"});
    gsap.to('.scrollToTop',{duration: 0.5, x: '7vw', ease: "power4.easeInOut"});
    $('body').addClass('stop-scrolling');
    x = 1;
    gsap.fromTo('.scrolldownicon',{autoAlpha: 0, y: '-100%'}, {autoAlpha: 1, y: '0%'});
    timeline.play();
    gsap.to('.arrow', { delay:0.3, duration: 0.3, y: '0%', autoAlpha: 1, ease: "power4.easeInOut" });
    gsap.to('.thenext', { delay:0.3, duration: 0.3, y: '0%', autoAlpha: 1, ease: "power4.easeInOut" });
    gsap.to('.isnow', { delay:0.3, duration: 0.3, y: '0%', autoAlpha: 1, ease: "power4.easeInOut" });
    if(counter==1 || counter==3){
        gsap.to('.titles', {duration: 0.3, y: '0vh', autoAlpha: 0, ease: "power4.easeInOut"});
        gsap.to('.gradient', {duration: 0.3, x: '-100%'});
    }else if(counter==2 || counter==4 || counter==5)
    {
        gsap.to('.titles', { duration: 0.3, y: '0vh', autoAlpha: 0, ease: "power4.easeInOut"});
        gsap.to('.gradient',{duration: 0.3, x: '100%'});
    }
    document.addEventListener('mousemove', onDocumentMouseMove);
    document.addEventListener('mousemove', nxtnowanim);
    counter=0;
    gsap.to(cycle.position, {
        duration: 1,
        x: 0,
        y: -100,
        z: 0,
        onUpdate: function () {
            camera.lookAt(scene.position);
        }, onComplete: enableScroll
    });

    gsap.to(cycle.scale, {
        duration: 1,
        x: 40,
        y: 40,
        z: 40,
        onUpdate: function () {
            camera.lookAt(scene.position);
        }, onComplete: enableScroll
    });
    $('.glitch').fadeOut();
}

//user button

$(".user").click( () => {
    window.addEventListener( 'wheel', onMouseWheel, false );
    signupbtn = 1;
    /* gsap.to(window, {duration: 1, scrollTo: ".threeD", ease: "power4.easeInOut"}); */
    gsap.to('.scrollToTop',{duration: 0.5, x: '7vw', ease: "power4.easeInOut"});
    $('body').addClass('stop-scrolling');
    x = 1;
    gsap.fromTo('.scrolldownicon',{autoAlpha: 0, y: '-100%'}, {autoAlpha: 1, y: '0%'});
    timeline.play();
    gsap.to('.arrow', { delay:0.3, duration: 0.3, y: '0%', autoAlpha: 1, ease: "power4.easeInOut" });
    gsap.to('.thenext', { delay:0.3, duration: 0.3, y: '0%', autoAlpha: 1, ease: "power4.easeInOut" });
    gsap.to('.isnow', { delay:0.3, duration: 0.3, y: '0%', autoAlpha: 1, ease: "power4.easeInOut" });
    if(counter==1 || counter==3){
        gsap.to('.titles', {duration: 0.3, y: '0vh', autoAlpha: 0, ease: "power4.easeInOut"});
        gsap.to('.gradient', {duration: 0.3, x: '-100%'});
    }else if(counter==2 || counter==4 || counter==5)
    {
        gsap.to('.titles', { duration: 0.3, y: '0vh', autoAlpha: 0, ease: "power4.easeInOut"});
        gsap.to('.gradient',{duration: 0.3, x: '100%'});
    }
    document.addEventListener('mousemove', onDocumentMouseMove);
    document.addEventListener('mousemove', nxtnowanim);
    counter=0;
    $('.glitch').fadeOut();
});

document.querySelector(".cancel-btn").addEventListener("click", () => {
    signupbtn=0;
});

export function enableScroll2(){ //enables scrolling after login
    signupbtn = 0; 
    window.addEventListener( 'wheel', onMouseWheel, false );
}

init();