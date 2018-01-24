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
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_style_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__css_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__helper__);



document.addEventListener("DOMContentLoaded", () => {
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(6)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(3);
exports = module.exports = __webpack_require__(4)(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Eagle+Lake);", ""]);

// module
exports.push([module.i, "*::selection {\r\n    background: #69c6fc;\r\n    color: #fff;\r\n}\r\n\r\n#side-info,\r\n#side-info .info,\r\n#work .project-col .project {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n:root {\r\n    font-size: 12px;\r\n}\r\n\r\n@media (min-width: 867px) {\r\n    #portfolio {\r\n        width: 95%;\r\n        margin: 0 auto;\r\n    }\r\n}\r\n\r\nbody {\r\n    overflow: hidden;\r\n    background: #101f25;\r\n}\r\narticle {\r\n    font-family: sans-serif;\r\n    margin-bottom: 10px;\r\n    word-spacing: 1px;\r\n    color: #ccc;\r\n    line-height: 1.6\r\n}\r\nbody h1.lead {\r\n    font-size: 2.5rem;\r\n    color: #fff;\r\n    margin-top: 35px;\r\n    position: relative;\r\n    font-weight: bold;\r\n    text-shadow: 3px 2px #111;\r\n}\r\n\r\n.lead {\r\n    color: #eee\r\n}\r\n\r\n.lead span {\r\n    font-size: 12px;\r\n    color: #aaa;\r\n}\r\n\r\nbody h1.lead:after {\r\n    content: \"\";\r\n    display: flex;\r\n    height: 2px;\r\n    width: 8%;\r\n    margin-top: 10px;\r\n    background: #111;\r\n    box-shadow: 1px 1px #333;\r\n}\r\n\r\nbody h1.lead:before {\r\n    content: \"\";\r\n    display: flex;\r\n    height: 5px;\r\n    width: 5px;\r\n    border-radius: 5px;\r\n    position: absolute;\r\n    bottom: -1px;\r\n    left: 0;\r\n    background: #111;\r\n    box-shadow: 0 1px #444;\r\n}\r\n\r\n#main {\r\n    height: 100vh;\r\n}\r\n\r\n#main section.col {\r\n    font-size: 1.2rem;\r\n    height: 100vh;\r\n}\r\n\r\n#main section.col:last-child {\r\n    padding-right: 0;\r\n    padding-left: 0;\r\n}\r\n\r\n.right-col {\r\n    overflow-y: scroll;\r\n}\r\n\r\n.right-col section#hero-section {\r\n    background: #222;\r\n    position: relative;\r\n    height: 400px;\r\n    overflow: hidden;\r\n}\r\n\r\n.right-col section#hero-section #canvas {\r\n    filter: blur(2px);\r\n    position: absolute;\r\n    background: #101f25;\r\n    overflow: hidden;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    z-index: 2;\r\n    box-shadow: 0 110px #101f25;\r\n}\r\n\r\n#hero-section #cv-btn {\r\n    display: flex;\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 10px;\r\n    z-index: 99;\r\n}\r\n\r\n#hero-section #cv-btn button {\r\n    position: relative;\r\n    background: linear-gradient(#18b0f7, #18b0f7 50%, #03a9f4 50%);\r\n    border: none;\r\n    color: #fff;\r\n    padding: 4px 12px;\r\n    min-width: 100px;\r\n    cursor: pointer;\r\n    outline: none;\r\n}\r\n\r\n#hero-section #cv-btn button a {\r\n    position: absolute;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: #098cc7;\r\n    box-shadow: inset 0 2px 5px #056c9c;\r\n    color: #ddd;\r\n    line-height: 30px;\r\n    transition: top 0.2s cubic-bezier(0.215, 0.610, 0.355, 1);\r\n    z-index: -1;\r\n    top: 0;\r\n}\r\n\r\n#hero-section #cv-btn button a:hover {\r\n    color: #fff;\r\n}\r\n\r\n#hero-section #cv-btn button a i {\r\n    color: #fff;\r\n}\r\n\r\n#hero-section #cv-btn button a:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n#hero-section #cv-btn button a:last-child {\r\n    background: #06638f;\r\n    box-shadow: inset 0 2px 5px #024f74;\r\n}\r\n\r\n#hero-section #cv-btn button a.slided {\r\n    top: 100%;\r\n}\r\n\r\n#hero-section #cv-btn button a:last-child.slided {\r\n    top: 200%;\r\n    transition-delay: 50ms;\r\n    z-index: -5;\r\n}\r\n\r\n#hero-section #cv-btn button a:last-child i {\r\n    margin-left: 10px;\r\n}\r\n\r\n.right-col section#hero-section .hero-content {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 3;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    text-align: left;\r\n    box-shadow: inset 0 -25px 25px #101f25;\r\n}\r\n\r\n#hero-section .hero-content .hero-title p {\r\n    font-family: \"Eagle Lake\", cursive, sans-serif;\r\n    font-weight: normal;\r\n    color: #ccc;\r\n}\r\n\r\n.right-col section#hero-section .hero-content a {\r\n    margin-top: -5px;\r\n    color: #555;\r\n    text-decoration: none;\r\n    position: relative;\r\n    z-index: 6;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.right-col section#hero-section .hero-content h1 {\r\n    font-family: \"Eagle Lake\", cursive;\r\n    font-size: 6rem;\r\n    color: #fff;\r\n    position: relative;\r\n    z-index: 5;\r\n    margin-bottom: 0;\r\n}\r\n\r\n.right-col section#hero-section .hero-content h1:before {\r\n    content: \"Portfolio \";\r\n    color: #333;\r\n    background: linear-gradient(to right, #1b7bce, #26b5f5 45%, #26b5f5 55%, #1b7bce);\r\n    position: absolute;\r\n    top: -5px;\r\n    padding-top: 5px;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 65%;\r\n    z-index: 4;\r\n    overflow: hidden;\r\n    border-radius: 4px 30px 0 0;\r\n}\r\n\r\n.right-col #portfolio .container {\r\n    color: #fff;\r\n    padding: 18px;\r\n}\r\n\r\n.right-col #portfolio .container section {\r\n    margin-bottom: 45px;\r\n}\r\n\r\n.right-col #portfolio .container #about h1.lead {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.right-col #portfolio .container #about p {\r\n    color: #ccc;\r\n    font-size: 1.25rem;\r\n    letter-spacing: 1px;\r\n    text-align: justify;\r\n}\r\n\r\n.right-col #portfolio .container #skills ul {\r\n    list-style: none;\r\n    color: #ccc;\r\n}\r\n\r\n.right-col #portfolio .container #skills li {\r\n    padding: 6px;\r\n}\r\n\r\n.right-col #portfolio .container #skills li i {\r\n    margin-left: -20px;\r\n}\r\n\r\n#side-info {\r\n    background: #101f25;\r\n    color: #aaa;\r\n    box-shadow: inset -4px 0 #03a9f4, 5px 5px 26px #111;\r\n    padding: 0;\r\n    height: 800px;\r\n    z-index: 5;\r\n    min-width: 250px;\r\n    position: relative;\r\n}\r\n\r\n#side-info .for-l-side {\r\n    width: 0;\r\n    height: 0;\r\n    opacity: 0;\r\n}\r\n\r\n#side-info li {\r\n    padding: 5px 10px;\r\n    font-size: 1.1rem;\r\n}\r\n\r\n#side-info li .vertical-sep {\r\n    margin: -1px 2px;\r\n    height: 10px;\r\n    line-height: 3px;\r\n    border-left: 1px solid #2196F3;\r\n    display: inline-flex;\r\n}\r\n\r\n#side-info .logo {\r\n    background: #03a9f4;\r\n    color: #eee;\r\n    padding: 8px 10px;\r\n    margin-bottom: 10px;\r\n    font-weight: bold;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n#side-info .logo .toggle-side {\r\n    font-size: 1.5rem;\r\n    transition: transform .3s ease-in;\r\n    transform: rotate(45deg);\r\n    cursor: pointer;\r\n}\r\n\r\n#side-info .logo .toggle-side:hover {\r\n    transform: rotate(0);\r\n}\r\n\r\n#side-info .logo .toggle-side.toggeled {\r\n    transform: rotate(0);\r\n}\r\n\r\n#side-info .avatar img {\r\n    border-radius: 50%;\r\n    margin: 7px auto 10px;\r\n    box-shadow: 0 4px #1b1b1b;\r\n}\r\n\r\n#side-info .avatar h3 {\r\n    position: relative;\r\n}\r\n\r\n#side-info .avatar h3:after {\r\n    content: \"\";\r\n    display: flex;\r\n    height: 2px;\r\n    width: 10%;\r\n    position: absolute;\r\n    left: 45%;\r\n    bottom: -10px;\r\n    margin-top: 10px;\r\n    background: #111;\r\n    box-shadow: 1px 1px #333;\r\n}\r\n\r\n#side-info .avatar h3:before {\r\n    content: \"\";\r\n    display: flex;\r\n    height: 5px;\r\n    width: 5px;\r\n    border-radius: 5px;\r\n    position: absolute;\r\n    bottom: -11px;\r\n    left: 43%;\r\n    background: #111111;\r\n    box-shadow: 0 1px #444;\r\n}\r\n\r\n#side-info .info {\r\n    flex: 1;\r\n}\r\n\r\n#side-info .info .statics p.head,\r\n#side-info .info .contact p.head {\r\n    padding-left: 5px;\r\n    margin-bottom: 5px;\r\n    font-weight: bold;\r\n    letter-spacing: 1px;\r\n    color: #ddd;\r\n}\r\n\r\n#side-info .info .statics {\r\n    flex: 1;\r\n}\r\n\r\n#side-info .info .statics .lang-stat p {\r\n    font-weight: normal;\r\n    padding-left: 10px;\r\n    margin-bottom: 0.3rem;\r\n}\r\n\r\n#side-info .info .statics .lang-stat:hover > span.filled {\r\n    background: #b2b2b2;\r\n    box-shadow: 3px 3px #141414;\r\n}\r\n\r\n#side-info .info .statics .lang-stat span {\r\n    display: inline-flex;\r\n    width: 12px;\r\n    height: 24px;\r\n    background: #333;\r\n    transform: skew(-25deg);\r\n    margin: 5px 2px;\r\n    border-radius: 2px;\r\n    box-shadow: 2px 2px #141414;\r\n}\r\n\r\n#side-info .info .statics .lang-stat span.filled {\r\n    background: #8d8d8d;\r\n    transition: background 0.2s ease;\r\n}\r\n\r\n#side-info .info .statics .lang-stat span:first-of-type {\r\n    margin-left: 20px;\r\n}\r\n\r\n#side-info .info .contact ul.navbar-nav-line {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    padding: 0;\r\n}\r\n\r\n#side-info .info .contact ul li.line {\r\n    display: inline-flex;\r\n    font-size: 25px;\r\n    transition: transform 0.2s linear;\r\n}\r\n#side-info .info .contact ul li.line a svg, #side-info .info .contact ul li svg {\r\n    width: 22px;\r\n    fill: #ccc\r\n}\r\n#side-info .info .contact li i {\r\n    transition: transform 0.2s ease-in-out;\r\n}\r\n\r\n#side-info .info .contact li:hover > i {\r\n    transform: scale(1.3);\r\n    color: #fff;\r\n}\r\n\r\n#side-info .info .contact li a {\r\n    color: #ccc;\r\n    text-decoration: none;\r\n    position: relative;\r\n    z-index: 8;\r\n}\r\n\r\n#side-info .show-side {\r\n    display: none;\r\n    cursor: pointer;\r\n}\r\n\r\n#side-info .info .contact li:not(.line) a:before {\r\n    content: \"\";\r\n    width: 104%;\r\n    height: 104%;\r\n    z-index: -1;\r\n    position: absolute;\r\n    top: 2%;\r\n    left: -2%;\r\n    display: flex;\r\n    transform: scale(0);\r\n    border-radius: 4px;\r\n    padding: 6px;\r\n    transition: transform 0.2s ease-in;\r\n    background: #03a9f4;\r\n}\r\n\r\n#side-info .info .contact li a:hover {\r\n    color: #fff;\r\n}\r\n\r\n#side-info .info .contact li a:hover:before {\r\n    transform: scale(1);\r\n}\r\n\r\n#side-info .info .contact ul li.line:hover {\r\n    transform: scale(1.3);\r\n}\r\n\r\n#work .row .project-col {\r\n    margin-top: 15px;\r\n    width: 33%;\r\n    max-width: 33%;\r\n}\r\n\r\n#work .project-col .project {\r\n    box-shadow: 10px 10px 20px #111;\r\n    height: 225px;\r\n    overflow: hidden;\r\n    margin-bottom: 10px;\r\n    border: 1px solid transparent;\r\n    transition: border-color 0.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);\r\n    background: #333;\r\n}\r\n\r\n#work .project-col .project:hover .project-btns {\r\n    transform: translateY(-50px);\r\n}\r\n\r\n#work .project-col .project .project-img {\r\n    display: flex;\r\n    height: 100%;\r\n    flex-direction: column;\r\n    padding: 0;\r\n    background-size: cover;\r\n    background-image: linear-gradient(transparent, #000), url(" + escape(__webpack_require__(5)) + ");\r\n}\r\n\r\n#work .project-col .project .project-img h4 {\r\n    color: #ccc;\r\n    width: 100%;\r\n    line-height: 1.3;\r\n    font-family: \"Eagle Lake\", cursive;\r\n    padding: 8px;\r\n    text-align: center;\r\n    transition: color 0.15s cubic-bezier(0.19, 1, 0.22, 1)\r\n}\r\n\r\n#work .project-col .project:hover {\r\n    border-color: #066074;\r\n    cursor: pointer;\r\n}\r\n\r\n#work .project-col .project:hover .project-img h4 {\r\n    color: #f4f4f4;\r\n}\r\n\r\n#work .project-col .project .project-btns {\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex: 1;\r\n    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);\r\n    display: flex;\r\n}\r\n\r\n#work .project-col .project .project-btns a.btn-anc {\r\n    color: #999;\r\n    line-height: 50px;\r\n    cursor: pointer;\r\n    margin: auto 6px;\r\n    transition: color 0.25s ease-in-out;\r\n}\r\n\r\n#work .project-col .project .project-btns a.btn-anc:hover {\r\n    color: #f4f4f4\r\n}\r\n\r\n#work .project-col .project .project-btns a i {\r\n    font-size: 2.3rem\r\n}\r\n\r\n#work .project-col .project .project-btns .btn {\r\n    border-radius: 0;\r\n}\r\n\r\n#work .project-col .project .project-btns p {\r\n    padding: 5px 0 0 5px;\r\n    color: #999;\r\n    flex: 1;\r\n}\r\n\r\n@media (max-width: 779px) {\r\n    #hero-section .hero-content .hero-title {\r\n        transform: scale(0.8);\r\n    }\r\n\r\n    #side-info {\r\n        position: absolute;\r\n        left: -100%;\r\n        transition: left 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);\r\n    }\r\n\r\n    #side-info .show-side {\r\n        display: flex;\r\n        position: fixed;\r\n        width: 200px;\r\n        top: 50%;\r\n        left: 0;\r\n        height: 0;\r\n    }\r\n\r\n    #side-info .show-side:checked:before {\r\n        left: 225px;\r\n        padding-left: 0;\r\n    }\r\n\r\n    #side-info .show-side:before {\r\n        content: \"||\";\r\n        color: #ffffff;\r\n        justify-content: center;\r\n        line-height: 50px;\r\n        position: relative;\r\n        display: flex;\r\n        width: 50px;\r\n        height: 50px;\r\n        padding-left: 15px;\r\n        font-size: 26px;\r\n        background: #03a9f4;\r\n        border-radius: 50%;\r\n        top: 50%;\r\n        left: -25px;\r\n        transition: all cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.35s 0.1s;\r\n    }\r\n\r\n    #work .row .project-col {\r\n        display: flex;\r\n        margin-top: 15px;\r\n        max-width: 50%;\r\n        width: 50%;\r\n    }\r\n\r\n    #skills ul {\r\n        padding-left: 10px\r\n    }\r\n\r\n    #skills ul li i {\r\n        font-size: 10px;\r\n    }\r\n}\r\n\r\n@media (min-width: 780px) {\r\n    #work .projects-holder {\r\n        display: flex;\r\n        flex-flow: wrap;\r\n    }\r\n\r\n    #work .project-col {\r\n        width: 50%;\r\n        min-width: 50%;\r\n    }\r\n\r\n    #work .row .project-col {\r\n        margin-top: 15px;\r\n        max-width: 33%;\r\n        width: 33%;\r\n    }\r\n}\r\n\r\n@media (min-width: 1120px) {\r\n    #work .project-col {\r\n        width: 33%;\r\n        min-width: 33%;\r\n    }\r\n}\r\n\r\n.background {\r\n    height: 30px;\r\n    position: relative;\r\n    overflow: hidden;\r\n    width: 80%;\r\n    margin: 10px auto 25px;\r\n    border-radius: 5px;\r\n    line-height: 28px;\r\n    text-align: center;\r\n    background: linear-gradient(to right, #101f25 5%, #101f25 20%, #1b7bce, #26b5f5 45%, #26b5f5 55%, #1b7bce, #101f25 80%, #101f25 95%);\r\n}\r\n\r\n.background .content {\r\n    position: relative;\r\n    color: #fff;\r\n    z-index: 99;\r\n}\r\n\r\n.background .icon {\r\n    position: absolute;\r\n    z-index: 99;\r\n    color: #fff;\r\n    bottom: -20%;\r\n    opacity: .15;\r\n    font-size: 20em;\r\n}\r\n\r\n.background:nth-child(odd) .icon {\r\n    right: 0;\r\n}\r\n\r\n.content h1 {\r\n    margin: 0;\r\n    font-family: \"Open Sans Condensed\", sans-serif;\r\n    word-spacing: 4px;\r\n    text-transform: capitalize;\r\n    letter-spacing: 1px;\r\n    font-size: 2.5em;\r\n}\r\n\r\n.square {\r\n    position: absolute;\r\n    -webkit-clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);\r\n    clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)\r\n}\r\n\r\n.triangle {\r\n    position: absolute;\r\n    -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 100%, 50% 50%, 0% 50%);\r\n    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 50% 100%, 50% 50%, 0% 50%);\r\n}\r\n\r\n@media screen-only {\r\n    #side-info .for-l-side {\r\n        width: auto;\r\n        height: auto;\r\n        opacity: 1;\r\n    }\r\n}", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a4a714229164486d4b5a40c81559cc6d.jpg";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(7);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 8 */
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
/******/ ]);