
let burger = document.querySelector(".burger__menu");
burger.addEventListener("click", function () {
   this.classList.toggle("active");
})

//////////////////////StarBoy///////////////////////////
var myAudio = document.getElementById("audio");
var isPlaying = false;

function playMusic() {
   isPlaying ? audio.pause() : audio.play();
};

audio.onplaying = function () {
   isPlaying = true;
};
audio.onpause = function () {
   isPlaying = false;
};

//////////////////////GodsPlan///////////////////////////
var myAudio = document.getElementById("audio1");
var isPlaying = false;

function playMusic1() {
   isPlaying ? audio1.pause() : audio1.play();
};

audio1.onplaying = function () {
   isPlaying = true;
};
audio1.onpause = function () {
   isPlaying = false;
};

//////////////////////StarBoy///////////////////////////
var myAudio = document.getElementById("audio2");
var isPlaying = false;

function playMusic2() {
   isPlaying ? audio2.pause() : audio2.play();
};

audio2.onplaying = function () {
   isPlaying = true;
};
audio2.onpause = function () {
   isPlaying = false;
};

//////////////////////StarBoy///////////////////////////
var myAudio = document.getElementById("audio3");
var isPlaying = false;

function playMusic3() {
   isPlaying ? audio3.pause() : audio3.play();
};

audio3.onplaying = function () {
   isPlaying = true;
};
audio3.onpause = function () {
   isPlaying = false;
};

//////////////////////StarBoy///////////////////////////
var myAudio = document.getElementById("audio4");
var isPlaying = false;

function playMusic4() {
   isPlaying ? audio4.pause() : audio4.play();
};

audio4.onplaying = function () {
   isPlaying = true;
};
audio4.onpause = function () {
   isPlaying = false;
};

//////////////////////StarBoy///////////////////////////
var myAudio = document.getElementById("audio5");
var isPlaying = false;

function playMusic5() {
   isPlaying ? audio5.pause() : audio5.play();
};

audio5.onplaying = function () {
   isPlaying = true;
};
audio5.onpause = function () {
   isPlaying = false;
};

//////////////////////StarBoy///////////////////////////
var myAudio = document.getElementById("audio6");
var isPlaying = false;

function playMusic6() {
   isPlaying ? audio6.pause() : audio6.play();
};

audio6.onplaying = function () {
   isPlaying = true;
};
audio6.onpause = function () {
   isPlaying = false;
};

//////////////////////StarBoy///////////////////////////
var myAudio = document.getElementById("audio7");
var isPlaying = false;

function playMusic7() {
   isPlaying ? audio7.pause() : audio7.play();
};

audio7.onplaying = function () {
   isPlaying = true;
};
audio7.onpause = function () {
   isPlaying = false;
};

/////////////////////////Анимация/////////////////////////////
AOS.init({
   // Global settings:
   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
   initClassName: 'aos-init', // class applied after initialization
   animatedClassName: 'aos-animate', // class applied on animation
   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
   offset: 90, // offset (in px) from the original trigger point
   delay: 0, // values from 0 to 3000, with step 50ms
   duration: 800, // values from 0 to 3000, with step 50ms
   easing: 'ease', // default easing for AOS animations
   once: false, // whether animation should happen only once - while scrolling down
   mirror: false, // whether elements should animate out while scrolling past them
   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});
