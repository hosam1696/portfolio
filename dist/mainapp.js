/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__helper__);


const showSide = document.getElementById("l-side");
const leftSide = document.getElementById("side-info");
const cvBtn = document.getElementById("cv-btn");
const cvs = document.querySelectorAll(".cv-down");
let cvSlide = true;
showSide.addEventListener("click", (event) => {
    let checked = event.target.checked;
    if (checked) {
        leftSide.style.left = 0;
    } else {
        leftSide.style.left = "-100%";
    }
});
cvBtn.addEventListener("click", (event) => {
    
    if (event.srcElement.nodeName !== "A") {
        cvs.forEach((cv) => {
            cvSlide ? cv.classList.add("slided") : cv.classList.remove("slided");
        });
        cvSlide = !cvSlide;
    }
    
});




if ("serviceWorker" in navigator) {

navigator.serviceWorker
    .register("sw.js")
    .then(s => {
        console.log('service worker registered!');
    })
    .catch(err => {
        console.warn("service worker is failed to register!", err);
    });
}

/* web worker
if (window && window.Worker) {
let webWorker = new Worker("./ww.js")

    webWorker.postMessage("loop 500 times")
    webWorker.onmessage = ({ data }) => {
        console.log(data)

        document.getElementsByTagName("h1")[0].innerHTML = data 
        if (data >= 5000000)
            webWorker.terminate()
            
    }
    
}*/

/***/ }),

/***/ 6:
/***/ (function(module, exports) {


    /************
        canvas logic for the top section
    *************/

let colors = ["#cc1d1d", "#eee", "#555", "#3e96ef", "#fff", "#36e20e", "#e5179e", "#e3eb1d"];
function rand(min,max) {
                    return Math.floor(Math.random()*(max-min)) - min;
                }

    /**
 * Generates random particles using canvas
 * 
 * @class Particles
 * @constructor
 */
function Particles(){
  //particle colors
  this.colors = [
    "255, 255, 255",
    "255, 99, 71",
    "19, 19, 19"
  ];
  //adds gradient to particles on true
  this.blurry = true;
  //adds white border
  this.border = false;
  //particle radius min/max
  this.minRadius = 10; 
  this.maxRadius = 35;
  //particle opacity min/max
  this.minOpacity = 0.005;
  this.maxOpacity = 0.5;
  //particle speed min/max
  this.minSpeed = 0.05;
  this.maxSpeed = 0.5;
  //frames per second 
  this.fps = 60;
  //number of particles
  this.numParticles = 75;
  //required canvas variables
  this.canvas = document.getElementById("canvas");
  this.ctx = this.canvas.getContext("2d");
}

/**
 * Initializes everything
 * @method init
 */
Particles.prototype.init = function () {
  this.render();
  this.createCircle();
};

/**
 * generates random number between min and max values
 * @param  {number} min value
 * @param  {number} max malue
 * @return {number} random number between min and max
 * @method _rand
 */
Particles.prototype._rand = function (min, max) {
  return Math.random() * (max - min) + min;
};

/**
 * Sets canvas size and updates values on resize
 * @method render
 */
Particles.prototype.render = function () {
  var self = this,
    wHeight = window.innerHeight,
    wWidth = window.innerWidth;
  
  self.canvas.width = wWidth;
  self.canvas.height = wHeight;
  
  window.addEventListener("resize", self.render);
};

/**
 * Randomly creates particle attributes
 * @method createCircle
 */
Particles.prototype.createCircle = function () {
  var particle = [];

  for (var i = 0; i < this.numParticles; i++) {
    var self = this,
      color = self.colors[~~(self._rand(0, self.colors.length))];
    
    particle[i] = {
      radius: self._rand(self.minRadius, self.maxRadius),
      xPos: self._rand(0, canvas.width),
      yPos: self._rand(0, canvas.height),
      xVelocity: self._rand(self.minSpeed, self.maxSpeed),
      yVelocity: self._rand(self.minSpeed, self.maxSpeed),
      color: "rgba(" + color + "," + self._rand(self.minOpacity, self.maxOpacity) + ")"
    };
    
    //once values are determined, draw particle on canvas
    self.draw(particle, i);
  }
  //...and once drawn, animate the particle
  this.animate(particle);
};

/**
 * Draws particles on canvas
 * @param  {array} Particle array from createCircle method
 * @param  {number} i value from createCircle method
 * @method draw
 */
Particles.prototype.draw = function (particle, i) {
  var self = this,
    ctx = self.ctx;
  
  if (self.blurry === true) {
    //creates gradient if blurry === true
    var grd = ctx.createRadialGradient(particle[i].xPos, particle[i].yPos, particle[i].radius, particle[i].xPos, particle[i].yPos, particle[i].radius / 1.25);
    
    grd.addColorStop(1.000, particle[i].color);
    grd.addColorStop(0.000, "rgba(34, 34, 34, 0)");
    ctx.fillStyle = grd;
  } else {
    //otherwise sets to solid color w/ opacity value
    ctx.fillStyle = particle[i].color;
  }
  
  if (self.border === true) {
    ctx.strokeStyle = "#fff";
    ctx.stroke();
  }
  
  ctx.beginPath();
  ctx.arc(particle[i].xPos, particle[i].yPos, particle[i].radius, 0, 2 * Math.PI, false);
  ctx.fill();
};

/**
 * Animates particles 
 * @param  {array} particle value from createCircle & draw methods
 * @method animate
 */
Particles.prototype.animate = function (particle) {
  var self = this,
    ctx = self.ctx;
  
  setInterval(function () {
    //clears canvas
    self.clearCanvas();
    //then redraws particles in new positions based on velocity
    for (var i = 0; i < self.numParticles; i++) {
      particle[i].xPos += particle[i].xVelocity;
      particle[i].yPos -= particle[i].yVelocity;
     
      //if particle goes off screen call reset method to place it offscreen to the left/bottom
      if (particle[i].xPos > self.canvas.width + particle[i].radius || particle[i].yPos > self.canvas.height + particle[i].radius) {
        self.resetParticle(particle, i);
      } else {
        self.draw(particle, i);
      }
    }
  }, 1000 / self.fps);
};

/**
 * Resets position of particle when it goes off screen
 * @param  {array} particle value from createCircle & draw methods
 * @param  {number} i value from createCircle method
 * @method resetParticle
 */
Particles.prototype.resetParticle = function (particle, i) {
  var self = this;
  
  var random = self._rand(0, 1);
  
  if (random > 0.5) {
    // 50% chance particle comes from left side of window...
    particle[i].xPos = -particle[i].radius;
    particle[i].yPos = self._rand(0, canvas.height);
  } else {
    //... or bottom of window
    particle[i].xPos = self._rand(0, canvas.width);
    particle[i].yPos = canvas.height + particle[i].radius;
  }
  //redraw particle with new values
  self.draw(particle, i);
};

/**
 * Clears canvas between animation frames
 * @method clearCanvas
 */
Particles.prototype.clearCanvas = function () {
  this.ctx.clearRect(0, 0, canvas.width, canvas.height);
};

 
// go go go!
var particle = new Particles().init(); 

/***/ })

/******/ });