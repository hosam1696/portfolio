import * as $ from 'jquery';
import { APP_DATA } from './helper';

$(() => {

    // Selectors
    const showSide = $('#l-side');
    const leftSide = $("#side-info");


    //TODO: structure the markup of Bio to be the items to load
    APP_DATA.bio.display();

    //TODO: structure the my projects markup
    APP_DATA.projects.display();
    
    // Load Map
    APP_DATA.locationFinder();
    
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
    
    APP_DATA.work.display();
      
});

