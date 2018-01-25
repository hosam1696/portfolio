import './helper';

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