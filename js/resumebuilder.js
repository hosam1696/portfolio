import * as $ from 'jquery';
import * as resumeData from './data';
import { getAllIcons, markupBio, markupStatus, getSvgIcon} from './helper';


$(() => {

    // Selectors
    const showSide = $('#l-side');
    const leftSide = $("#side-info");
    const objectsDiv = $('.objects');
    const projectHolder = $('.projects-holder');
    const avatarSection = $('.avatar');
    const statsSection = $('.statics');
    const contactsSection = $('.contact');
    const skillSection = $('#skills');


    // global variables
    const [objDivHeight, objDivWidth] = [objectsDiv.width(), objectsDiv.height()];

    // global functions
    const range = (start, end) => Array.from({ length: end - start + 1 }, (t, i) => i + start);
    const random = (start, end) => Math.floor(Math.random() * end) + start;
    const getRandomColor = () => "#" + ((1 << 24) * Math.random() | 0).toString(16);

    //TODO get the skills section at first place

    let skillsHTML = resumeData.skills.map(skill=> `<li>${skill}</li>`).join('');
    skillSection.append(skillsHTML);

    //TODO: structure the my projects markup

    projectHolder.append(function () {
        let projectData = resumeData.projects;
        return projectData.map(project => {
            return `\
            <div class="col project-col">
                <div class="project">
                    <div class="project-img">
                        <h4>${project.title}</h4>
                    </div>
                    <div class="project-btns">
                        ${getAllIcons(project.links)}
                    </div>
                </div>
            </div>`;
        }).join('');
    });

    //TODO: structure the markup of Bio to be the items to load

    // these three function better to load last

    markupBio(avatarSection, resumeData.bio);

    markupStatus(statsSection, resumeData.bio.technologies);

    (function buildContact() {
        let inlineList = $('<ul class="navbar-nav-line"></ul>');
        let blockList  = $('<ul class="navbar-nav"></ul>');
        for (let [key, url] of Object.entries(resumeData.bio.contacts)) {
            if (key === 'primary_email' || key === 'secondary_email') {
                blockList.append(`<li>${getSvgIcon(key)}<span class="vertical-sep"></span><a href="mailto:${url}">${url}</a></li>`);
            } else {
                inlineList.append(`<li class="line"><a href="${url}" target="noopener">${getSvgIcon(key)}</a></li>`);
            }
        }
        contactsSection.append(blockList, inlineList);
    })();

    // drag the left side pane to the right

    showSide.on("click", (event) => {
        let checked = event.target.checked;
        if (checked) {
            leftSide.css('left', 0);
        } else {
            leftSide.css('left' , '-100%');
        }
    });



    // Render random circles and squares

    range(1, 20).forEach(div => {
        div = document.createElement('div');
        let randWidth = random(0, objDivWidth) + 'px';
        Object.assign(div.style, {
            width:randWidth,
            height: randWidth,
            borderRadius: random(0, 2) * 50 + '%',
            backgroundColor: getRandomColor(),
            opacity: Math.random() - 0.2,
            transform: `rotate(${random(0, 360)}deg) translate(${random(0, objDivWidth * 2)}px, ${random(0, objDivHeight / 2)}px)`
        });
        objectsDiv.append(div);
    });


      
});


google.maps.event.addDomListener(window, 'load', init);

function init() {
    let mapOptions = {
        zoom: 11,

        center: new google.maps.LatLng(30.026510, 31.211858), // Cairo

        styles: [{ "featureType": "all", "elementType": "all", "stylers": [{ "visibility": "on" }] }, { "featureType": "all", "elementType": "labels", "stylers": [{ "visibility": "off" }, { "saturation": "-100" }] }, { "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#000000" }, { "lightness": 40 }, { "visibility": "off" }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }, { "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 17 }, { "weight": 1.2 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "landscape", "elementType": "geometry.fill", "stylers": [{ "color": "#4d6059" }] }, { "featureType": "landscape", "elementType": "geometry.stroke", "stylers": [{ "color": "#4d6059" }] }, { "featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [{ "color": "#4d6059" }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "lightness": 21 }] }, { "featureType": "poi", "elementType": "geometry.fill", "stylers": [{ "color": "#4d6059" }] }, { "featureType": "poi", "elementType": "geometry.stroke", "stylers": [{ "color": "#4d6059" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "visibility": "on" }, { "color": "#7f8d89" }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "color": "#7f8d89" }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#7f8d89" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#7f8d89" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 18 }] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "color": "#7f8d89" }] }, { "featureType": "road.arterial", "elementType": "geometry.stroke", "stylers": [{ "color": "#7f8d89" }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "road.local", "elementType": "geometry.fill", "stylers": [{ "color": "#7f8d89" }] }, { "featureType": "road.local", "elementType": "geometry.stroke", "stylers": [{ "color": "#7f8d89" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 19 }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#2b3638" }, { "visibility": "on" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#2b3638" }, { "lightness": 17 }] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#24282b" }] }, { "featureType": "water", "elementType": "geometry.stroke", "stylers": [{ "color": "#24282b" }] }, { "featureType": "water", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "labels.text", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }]
    };

    let mapElement = document.getElementById('mapDiv');

    let map = new google.maps.Map(mapElement, mapOptions);

    let marker = new google.maps.Marker({
        position: new google.maps.LatLng(40.6700, -73.9400),
        map: map,
        title: 'Home!'
    });
}
    


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