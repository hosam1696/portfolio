import * as $ from 'jquery';


function getSvgIcon(name) {
    switch (name) {
        case 'github':
            return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000"enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><path d="M990,512c0,106.8-31.2,202.8-93.5,288.1C834.2,885.4,753.7,944.4,655,977.2c-11.5,2.1-19.9,0.6-25.2-4.5c-5.3-5.1-8-11.5-8-19.2V818.9c0-41.3-11.1-71.5-33.2-90.6c24.3-2.6,46.1-6.4,65.4-11.5c19.4-5.1,39.4-13.4,60-24.9c20.6-11.5,37.9-25.6,51.7-42.4c13.8-16.8,25.1-39.1,33.8-67c8.7-27.9,13.1-59.9,13.1-96c0-51.5-16.8-95.3-50.4-131.5c15.7-38.7,14-82.1-5.1-130.1c-11.9-3.8-29.2-1.5-51.7,7s-42.1,17.9-58.7,28.1l-24.3,15.3c-39.6-11.1-80.4-16.6-122.5-16.6s-83,5.5-122.5,16.6c-6.8-4.7-15.8-10.4-27.1-17.2c-11.3-6.8-29-15-53.3-24.6c-24.3-9.6-42.6-12.5-54.9-8.6c-18.7,48.1-20.2,91.5-4.5,130.1c-33.6,36.2-50.4,80-50.4,131.5c0,36.2,4.4,68.1,13.1,95.7c8.7,27.7,19.9,50,33.5,67c13.6,17,30.7,31.3,51.4,42.8c20.6,11.5,40.6,19.8,60,24.9c19.4,5.1,41.2,8.9,65.4,11.5c-17,15.3-27.4,37.2-31.3,65.7c-8.9,4.2-18.5,7.4-28.7,9.6c-10.2,2.1-22.3,3.2-36.4,3.2s-28-4.6-41.8-13.7c-13.8-9.1-25.6-22.4-35.4-39.9c-8.1-13.6-18.4-24.7-31-33.2c-12.6-8.5-23.1-13.6-31.6-15.3l-12.8-1.9c-8.9,0-15.1,1-18.5,2.9c-3.4,1.9-4.5,4.4-3.2,7.3c1.3,3,3.2,6,5.8,8.9c2.6,3,5.3,5.5,8.3,7.6l4.5,3.2c9.4,4.2,18.6,12.3,27.8,24.3c9.1,11.9,15.8,22.8,20.1,32.5l6.4,14.7c5.5,16.2,14.9,29.3,28.1,39.2c13.2,10,27.5,16.4,42.8,19.2s30.1,4.3,44.3,4.5c14.3,0.2,26.1-0.6,35.4-2.2l14.7-2.6c0,16.2,0.1,35.1,0.3,56.8c0.2,21.7,0.3,33.2,0.3,34.5c0,7.7-2.8,14-8.3,19.2c-5.5,5.1-14,6.6-25.5,4.4c-98.7-32.8-179.2-91.8-241.5-177.1C41.2,714.7,10,618.7,10,511.9c0-88.9,21.9-170.9,65.7-246C119.5,190.9,179,131.4,254,87.6c75.1-43.8,157.1-65.7,246-65.7c88.9,0,170.9,21.9,246,65.7c75.1,43.8,134.5,103.2,178.3,178.3C968.1,341.1,990,423,990,512L990,512z"/></g></svg>`;
        case 'web':
            return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000"enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><path d="M959.4,86.6H40.6c-16.8,0-30.6,13.8-30.6,30.6v765.6c0,16.8,13.8,30.6,30.6,30.6h918.8c16.8,0,30.6-13.8,30.6-30.6V117.2C990,100.3,976.2,86.6,959.4,86.6z M928.8,147.8v122.5H71.3V147.8H928.8z M71.3,852.2V331.6h857.5v520.6H71.3z"/><path d="M163.1,239.7c7.7,0,15.3-3.1,21.4-9.2c6.1-6.1,9.2-13.8,9.2-21.4c0-7.7-3.1-15.3-9.2-21.4c-10.7-10.7-32.2-10.7-42.9,0c-6.1,6.1-9.2,13.8-9.2,21.4c0,7.7,3.1,15.3,9.2,21.4C147.8,236.6,155.5,239.7,163.1,239.7z"/><path d="M255,239.7c7.7,0,15.3-3.1,21.4-9.2c6.1-6.1,9.2-13.8,9.2-21.4c0-7.7-3.1-15.3-9.2-21.4c-10.7-10.7-32.2-10.7-42.9,0c-6.1,6.1-9.2,13.8-9.2,21.4c0,7.7,3.1,15.3,9.2,21.4C239.7,236.6,247.3,239.7,255,239.7z"/><path d="M346.9,239.7c7.7,0,15.3-3.1,21.4-9.2c6.1-6.1,9.2-13.8,9.2-21.4c0-7.7-3.1-15.3-9.2-21.4c-10.7-10.7-32.2-10.7-42.9,0c-6.1,6.1-9.2,13.8-9.2,21.4c0,7.7,3.1,15.3,9.2,21.4C331.6,236.6,339.2,239.7,346.9,239.7z"/><path d="M484.7,392.8H163.1c-16.8,0-30.6,13.8-30.6,30.6s13.8,30.6,30.6,30.6h321.6c16.8,0,30.6-13.8,30.6-30.6S501.5,392.8,484.7,392.8z"/><path d="M484.7,515.3H163.1c-16.8,0-30.6,13.8-30.6,30.6s13.8,30.6,30.6,30.6h321.6c16.8,0,30.6-13.8,30.6-30.6S501.5,515.3,484.7,515.3z"/><path d="M484.7,637.8H163.1c-16.8,0-30.6,13.8-30.6,30.6s13.8,30.6,30.6,30.6h321.6c16.8,0,30.6-13.8,30.6-30.6S501.5,637.8,484.7,637.8z"/><path d="M836.9,392.8H607.2c-16.8,0-30.6,13.8-30.6,30.6v245c0,16.8,13.8,30.6,30.6,30.6h229.7c16.8,0,30.6-13.8,30.6-30.6v-245C867.5,406.6,853.7,392.8,836.9,392.8z M806.3,637.8H637.8V454.1h168.4V637.8z"/></g></svg>`;
        case 'primary_email':
            return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><path d="M28.9,257.5c-8.2-6-13.2-10.6-15.1-14c-1.9-3.4-2.8-8.4-2.8-15.1v-20.1c0-17.1,4.7-31.1,14-41.9c9.3-10.8,24.8-16.2,46.4-16.2l857.1,1.1c23.1,0,39.1,4.8,48.1,14.5c8.9,9.7,13.4,23.1,13.4,40.2v22.3c0,6.7-0.8,11.2-2.3,13.4c-1.5,2.2-6.7,7.5-15.7,15.7L547.4,502.2c-6.7,3.7-15.3,8-25.7,12.8c-10.4,4.8-17.5,7.3-21.2,7.3c-8.2,0-23.5-7.1-45.8-21.2l-17.9-11.2c-12.7-6.7-29-15.6-49.2-26.8c-20.1-11.2-42.8-24-68.2-38.5c-25.3-14.5-51.4-29.6-78.2-45.3C178.6,343.5,107.9,302.9,28.9,257.5L28.9,257.5z M948.6,342.4c12.7-8.2,22.7-11.6,30.2-10c7.5,1.5,11.2,7.5,11.2,17.9v390c0,25.3-2.8,45.3-8.4,59.8c-5.6,14.5-13.4,25.5-23.5,33c-10.1,7.5-21.8,12.1-35.2,14c-13.4,1.9-27.9,2.8-43.6,2.8H132.9c-25.3,0-45.8-3.3-61.5-10c-15.6-6.7-27.9-15.3-36.9-25.7c-8.9-10.4-15.3-22.6-19-36.3C11.9,763.9,10,750,10,735.8V360.3c0-14.2,3.5-23.1,10.6-26.8c7.1-3.7,15.8-1.9,26.2,5.6c4.5,3,15.8,10.2,34.1,21.8c18.2,11.5,38,23.8,59.2,36.9c21.2,13,40.8,25.2,58.7,36.3c17.9,11.2,28.7,17.9,32.4,20.1c8.9,6,13.2,12.1,12.8,18.5c-0.4,6.3-2.4,12.9-6.2,19.6c-3,5.2-7.3,13.8-12.8,25.7s-11.5,24.2-17.9,36.9s-12.3,24.8-17.9,36.3s-9.9,19.9-12.8,25.1c-3,5.2-3.9,9.7-2.8,13.4c1.1,3.7,3,6.5,5.6,8.4c2.6,1.8,5.9,2.4,10,1.7c4.1-0.7,8-3.3,11.7-7.8c2.2-2.2,7.6-8.4,16.2-18.5c8.6-10.1,18.1-20.9,28.5-32.4c10.4-11.5,20.3-22.5,29.6-33c9.3-10.4,15.4-17.2,18.5-20.1c3.7-3.7,9.3-7.8,16.8-12.3c7.5-4.5,14.5-4.5,21.2,0c4.5,2.2,11.9,6.7,22.4,13.4s21.6,13.8,33.5,21.2l35.8,24.6c11.9,7.5,22.4,13.8,31.3,19c8.9,6,18.1,9.7,27.4,11.2c9.3,1.5,18.1,1.7,26.2,0.6c8.2-1.1,15.8-2.8,22.9-5c7.1-2.2,12.5-4.5,16.2-6.7c3.7-2.2,11.5-6.9,23.5-14c11.9-7.1,24.8-14.9,38.6-23.5s26.8-16.6,39.1-24c12.3-7.5,20.7-12.7,25.1-15.7c7.5-4.5,14.2-6,20.1-4.5s11.9,5.2,17.9,11.2c2.2,2.2,7.6,8.4,16.2,18.5c8.6,10.1,17.9,21.2,27.9,33.5s19.4,24,27.9,35.2c8.6,11.2,14.7,19,18.5,23.5c3.7,4.5,7.8,6.9,12.3,7.3c4.5,0.4,8.4-0.8,11.7-3.4c3.4-2.6,5.6-6.1,6.7-10.6s0.2-9.3-2.8-14.5c-1.5-2.2-4.5-9-8.9-20.1L806.8,557c-5.2-13.4-10.4-26.3-15.7-38.5c-5.2-12.3-9.3-21-12.3-26.2c-6-11.9-9.1-20.9-9.5-26.8c-0.4-6,3.5-11.6,11.7-16.8c1.5-0.7,9.9-6.1,25.1-16.2c15.3-10.1,32.4-21.1,51.4-33c19-11.9,37.3-23.5,54.7-34.7s29.6-18.6,36.3-22.4L948.6,342.4z"/></g></svg>`;
        case 'secondary_email':
            return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><path d="M32.3,10v980V10z"/><path d="M54.5,10v980V10z"/><path d="M76.8,10v980V10z"/><path d="M99.1,10v980V10z"/><path d="M121.4,10v980V10z"/><path d="M143.6,10v980V10z"/><path d="M165.9,10v980V10z"/><path d="M188.2,10v980V10z"/><path d="M210.5,10v980V10z"/><path d="M232.7,10v980V10z"/><path d="M255,10v980V10z"/><path d="M277.3,10v980V10z"/><path d="M299.5,10v980V10z"/><path d="M321.8,10v980V10z"/><path d="M344.1,10v980V10z"/><path d="M366.4,10v980V10z"/><path d="M388.6,10v980V10z"/><path d="M410.9,10v980V10z"/><path d="M433.2,10v980V10z"/><path d="M455.5,10v980V10z"/><path d="M477.7,10v980V10z"/><path d="M500,10v980V10z"/><path d="M522.3,10v980V10z"/><path d="M544.5,10v980V10z"/><path d="M566.8,10v980V10z"/><path d="M589.1,10v980V10z"/><path d="M611.4,10v980V10z"/><path d="M633.6,10v980V10z"/><path d="M655.9,10v980V10z"/><path d="M678.2,10v980V10z"/><path d="M700.5,10v980V10z"/><path d="M722.7,10v980V10z"/><path d="M745,10v980V10z"/><path d="M767.3,10v980V10z"/><path d="M789.5,10v980V10z"/><path d="M811.8,10v980V10z"/><path d="M834.1,10v980V10z"/><path d="M856.4,10v980V10z"/><path d="M878.6,10v980V10z"/><path d="M900.9,10v980V10z"/><path d="M923.2,10v980V10z"/><path d="M945.5,10v980V10z"/><path d="M967.7,10v980V10z"/><path d="M10,32.3h980H10z"/><path d="M10,54.5h980H10z"/><path d="M10,76.8h980H10z"/><path d="M10,99.1h980H10z"/><path d="M10,121.4h980H10z"/><path d="M10,143.6h980H10z"/><path d="M10,165.9h980H10z"/><path d="M10,188.2h980H10z"/><path d="M10,210.5h980H10z"/><path d="M10,232.7h980H10z"/><path d="M10,255h980H10z"/><path d="M10,277.3h980H10z"/><path d="M10,299.5h980H10z"/><path d="M10,321.8h980H10z"/><path d="M10,344.1h980H10z"/><path d="M10,366.4h980H10z"/><path d="M10,388.6h980H10z"/><path d="M10,410.9h980H10z"/><path d="M10,433.2h980H10z"/><path d="M10,455.5h980H10z"/><path d="M10,477.7h980H10z"/><path d="M10,500h980H10z"/><path d="M10,522.3h980H10z"/><path d="M10,544.5h980H10z"/><path d="M10,566.8h980H10z"/><path d="M10,589.1h980H10z"/><path d="M10,611.4h980H10z"/><path d="M10,633.6h980H10z"/><path d="M10,655.9h980H10z"/><path d="M10,678.2h980H10z"/><path d="M10,700.5h980H10z"/><path d="M10,722.7h980H10z"/><path d="M10,745h980H10z"/><path d="M10,767.3h980H10z"/><path d="M10,789.5h980H10z"/><path d="M10,811.8h980H10z"/><path d="M10,834.1h980H10z"/><path d="M10,856.4h980H10z"/><path d="M10,878.6h980H10z"/><path d="M10,900.9h980H10z"/><path d="M10,923.2h980H10z"/><path d="M10,945.5h980H10z"/><path d="M10,967.7h980H10z"/><path d="M900.9,856.4H99.1c-49.2,0-89.1-39.9-89.1-89.1V232.7c0-49.2,39.9-89.1,89.1-89.1h801.8c49.2,0,89.1,39.9,89.1,89.1v534.5C990,816.5,950.1,856.4,900.9,856.4L900.9,856.4z M856.4,767.3L601,543.8l-101,89.8l-101-89.8L143.6,767.3H856.4z M99.1,722.7L349.7,500L99.1,277.3V722.7z M143.6,232.7L500,544.5l356.4-311.8H143.6z M900.9,277.3L650.3,500l250.6,222.7V277.3z"/></g></svg>`;
        case 'linkedIn':
            return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000"enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><g> <path fill="#ddd" d="M825.4,10H174.6C84.1,10,10,84.1,10,174.6v650.8C10,915.9,84.1,990,174.6,990h650.8c90.5,0,164.6-74.1,164.6-164.6V174.6C990,84.1,915.9,10,825.4,10z M377.5,806.3H255V377.5h122.5V806.3z M316.3,316.3c-33.8,0-61.3-27.4-61.3-61.3s27.4-61.3,61.3-61.3s61.3,27.4,61.3,61.3S350.1,316.3,316.3,316.3z M806.3,806.3H683.8v-245c0-33.8-27.4-61.3-61.3-61.3s-61.3,27.4-61.3,61.3v245H438.8V377.5h122.5v76.1c25.3-34.7,63.9-76.1,107.2-76.1c76.1,0,137.8,68.6,137.8,153.1V806.3z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g></svg>`;
        case 'twitter':
            return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><path d="M989.9,282c-0.2-15.6-0.3-22-0.4-29.4c-0.4-22-1.8-44.2-5.6-64.1c-4.1-21.6-9.6-41.3-19.6-61.1c-10.1-20-24-37.2-39-52.6c-15.4-15-32.7-28.9-52.6-39c-19.7-10-39.3-15.5-61.1-19.6c-19.9-3.7-42.1-5.2-64.1-5.6c-7.4-0.1-13.8-0.2-29.4-0.4C703.1,10.1,691,10,682,10c-45.6,0-318.3,0-364,0c-9,0-21.2,0.1-36,0.2c-15.6,0.2-22,0.3-29.4,0.4c-22,0.4-44.2,1.8-64.1,5.6c-21.6,4.1-41.3,9.6-61.1,19.6c-20,10.1-37.2,24-52.6,39c-15,15.4-28.9,32.7-39,52.6c-10,19.7-15.5,39.3-19.6,61.1c-3.7,19.9-5.2,42.1-5.6,64.1c-0.1,7.4-0.2,13.8-0.4,29.4c-0.1,14.9-0.2,27.1-0.2,36.1v364c0,9,0.1,21.2,0.2,36c0.2,15.6,0.3,22,0.4,29.4c0.4,22,1.8,44.2,5.6,64.1c4.1,21.6,9.6,41.3,19.6,61.1c10.1,20,24,37.2,39,52.6c15.4,15,32.7,28.9,52.6,39c19.7,10,39.3,15.5,61.1,19.6c19.9,3.7,42.1,5.2,64.1,5.6c7.4,0.1,13.8,0.2,29.4,0.4c14.8,0.1,27,0.2,36,0.2c45.6,0,318.3,0,364,0c9,0,21.2-0.1,36-0.2c15.6-0.2,22-0.3,29.4-0.4c22-0.4,44.2-1.8,64.1-5.6c21.6-4.1,41.3-9.6,61.1-19.6c20-10.1,37.2-24,52.6-39c15-15.4,28.9-32.7,39-52.6c10-19.7,15.5-39.3,19.6-61.1c3.7-19.9,5.2-42.1,5.6-64.1c0.1-7.4,0.2-13.8,0.4-29.4c0.1-14.8,0.2-27,0.2-36v-364C990.1,309.1,990,296.9,989.9,282z M782.4,357.7c-3.3,246.3-160.8,415-395.9,425.6c-97,4.4-167.2-26.9-228.4-65.8c71.7,11.5,160.5-17.2,208.1-57.9c-70.3-6.9-111.8-42.6-131.3-100.1c20.3,3.5,41.6,2.6,61-1.5c-63.4-21.2-108.6-60.4-111-142.5c17.8,8.1,36.4,15.7,61,17.2c-47.5-27-82.5-125.6-42.3-190.8c70.4,77.2,155.1,140.2,294.2,148.7c-34.9-149.2,162.9-230.2,245.6-129.9c35-6.8,63.5-20,90.8-34.5c-11.3,34.6-33,58.9-59.4,78.3c29.1-3.9,54.7-11,76.8-21.9C837.9,310.9,808,336.3,782.4,357.7z"/></g></svg>`;
        case 'codepen':
            return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000"enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)"><path d="M4436.8,4999.1C3225,4817.2,2339.3,4384.6,1532.5,3581.3C825.3,2870.6,396.2,2087.9,179.9,1106.1C90.6,704.4,73.5-246.5,142.1-686c68.7-415.4,271.2-1047.1,453.2-1404.1c672.9-1342.3,1919.1-2300.1,3412.4-2626.3c415.4-92.7,1538-92.7,1956.8-3.5C6967-4506.9,7760-4074.4,8470.7-3360.3c720.9,724.4,1139.8,1510.5,1362.9,2543.9c96.1,456.6,85.8,1445.3-17.2,1919.1c-223.1,992.1-652.3,1785.2-1345.8,2475.2c-676.3,679.7-1438.5,1098.6-2403.1,1328.6c-291.8,68.7-470.3,85.8-944.1,96.1C4804.2,5009.4,4495.2,5006,4436.8,4999.1z M5789.4,4140.9C7584.9,3773.5,8899.8,2314.5,9092,481.2c133.9-1277.1-418.8-2640-1411-3487.9C5648.7-4733.5,2569.3-4139.6,1354-1784.6C32.3,769.6,1659.5,3838.8,4522.7,4192.3C4848.8,4233.6,5456.5,4209.5,5789.4,4140.9z"/><path fill="#ddd" d="M3475.6,2187.5c-772.4-518.4-1435-975-1465.9-1016.2c-54.9-65.2-61.8-171.7-61.8-1119.2V-991.5l82.4-75.5c151-140.7,2900.9-1877.9,2969.6-1877.9c61.8,0,2962.7,1919.1,3003.9,1987.7c10.3,17.2,20.6,504.7,20.6,1084.8c3.4,978.4,0,1064.2-58.4,1119.2c-34.3,34.3-686.6,470.3-1452.2,971.5c-1163.8,762.1-1411,913.2-1510.5,909.8C4903.7,3128.1,4635.9,2963.3,3475.6,2187.5z M4763,1782.4V1185l-549.3-363.9c-302.1-202.6-563-370.8-583.6-374.2c-34.3-10.3-926.9,559.6-923.5,590.5c0,20.6,1994.6,1335.4,2032.3,1335.4C4752.7,2376.3,4763,2108.5,4763,1782.4z M6294.1,1717.1c556.1-363.9,1005.9-669.4,1005.9-679.7s-199.1-151-446.3-315.8l-446.3-302.1l-580.2,381.1l-583.6,381.1v597.3c0,329.6,10.3,597.3,24,597.3C5277.9,2376.3,5741.4,2077.6,6294.1,1717.1z M5477,405.7c230-147.6,418.8-281.5,418.8-295.2c0-17.2-202.5-161.4-449.7-326.1L4993-510.9l-460,305.5l-463.5,309l456.6,309c254,168.2,477.2,298.7,497.8,285C5044.5,687.2,5247,556.8,5477,405.7z M2902.3,265c116.7-75.5,212.9-147.6,212.9-157.9c0-20.6-569.9-408.5-600.8-408.5c-10.3,0-17.2,185.4-17.2,415.4v415.4l99.6-65.2C2648.2,429.8,2789,340.5,2902.3,265z M7543.7,110.5c0-271.2-13.8-412-37.8-412c-41.2,0-614.5,384.5-614.5,412c0,24,593.9,412,628.2,412C7533.4,522.4,7543.7,337.1,7543.7,110.5z M4193.1-576.1L4763-953.8v-604.2c0-508.1-6.9-600.8-48.1-587.1c-27.5,10.3-490.9,315.8-1033.3,676.3L2696.3-813l236.9,164.8c466.9,326.1,645.4,446.3,669.4,446.3C3616.3-198.5,3880.7-366.7,4193.1-576.1z M6877.7-528c236.9-164.8,418.8-309,401.6-322.7C7221-902.3,5356.9-2121,5298.5-2141.6c-51.5-20.6-54.9,27.5-48,573.3l10.3,597.3l549.3,370.8c302.1,202.6,566.4,367.3,593.9,367.3C6428-232.8,6644.3-366.7,6877.7-528z"/></g></g></svg>`;
        case 'github':
            return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><path d="M990,512c0,106.8-31.2,202.8-93.5,288.1C834.2,885.4,753.7,944.4,655,977.2c-11.5,2.1-19.9,0.6-25.2-4.5c-5.3-5.1-8-11.5-8-19.2V818.9c0-41.3-11.1-71.5-33.2-90.6c24.3-2.6,46.1-6.4,65.4-11.5c19.4-5.1,39.4-13.4,60-24.9c20.6-11.5,37.9-25.6,51.7-42.4c13.8-16.8,25.1-39.1,33.8-67c8.7-27.9,13.1-59.9,13.1-96c0-51.5-16.8-95.3-50.4-131.5c15.7-38.7,14-82.1-5.1-130.1c-11.9-3.8-29.2-1.5-51.7,7s-42.1,17.9-58.7,28.1l-24.3,15.3c-39.6-11.1-80.4-16.6-122.5-16.6s-83,5.5-122.5,16.6c-6.8-4.7-15.8-10.4-27.1-17.2c-11.3-6.8-29-15-53.3-24.6c-24.3-9.6-42.6-12.5-54.9-8.6c-18.7,48.1-20.2,91.5-4.5,130.1c-33.6,36.2-50.4,80-50.4,131.5c0,36.2,4.4,68.1,13.1,95.7c8.7,27.7,19.9,50,33.5,67c13.6,17,30.7,31.3,51.4,42.8c20.6,11.5,40.6,19.8,60,24.9c19.4,5.1,41.2,8.9,65.4,11.5c-17,15.3-27.4,37.2-31.3,65.7c-8.9,4.2-18.5,7.4-28.7,9.6c-10.2,2.1-22.3,3.2-36.4,3.2s-28-4.6-41.8-13.7c-13.8-9.1-25.6-22.4-35.4-39.9c-8.1-13.6-18.4-24.7-31-33.2c-12.6-8.5-23.1-13.6-31.6-15.3l-12.8-1.9c-8.9,0-15.1,1-18.5,2.9c-3.4,1.9-4.5,4.4-3.2,7.3c1.3,3,3.2,6,5.8,8.9c2.6,3,5.3,5.5,8.3,7.6l4.5,3.2c9.4,4.2,18.6,12.3,27.8,24.3c9.1,11.9,15.8,22.8,20.1,32.5l6.4,14.7c5.5,16.2,14.9,29.3,28.1,39.2c13.2,10,27.5,16.4,42.8,19.2s30.1,4.3,44.3,4.5c14.3,0.2,26.1-0.6,35.4-2.2l14.7-2.6c0,16.2,0.1,35.1,0.3,56.8c0.2,21.7,0.3,33.2,0.3,34.5c0,7.7-2.8,14-8.3,19.2c-5.5,5.1-14,6.6-25.5,4.4c-98.7-32.8-179.2-91.8-241.5-177.1C41.2,714.7,10,618.7,10,511.9c0-88.9,21.9-170.9,65.7-246C119.5,190.9,179,131.4,254,87.6c75.1-43.8,157.1-65.7,246-65.7c88.9,0,170.9,21.9,246,65.7c75.1,43.8,134.5,103.2,178.3,178.3C968.1,341.1,990,423,990,512L990,512z"/></g></svg>`;
    }
}

function getAllIcons(iconsObj) {
    return Object.keys(iconsObj)
        .map(key=>`\<a class="btn-anc" target="noopener" href="${iconsObj[key]}">${getSvgIcon(key)}</a>`)
        .join('');
}

function  markupBio(selector, data) {
    selector.html(`\
        <img src = "./images/${data.biopic}"
        alt = "avatar"
        width = "110"
        height = "110" >
            <h3 class="lead">${data.name}
            <br>
            <span>${data.role}</span>
        </h3>`);
}

function statsHTML(data) {

    function fill(num) {
        let rankHTML = '';
        for (let i= 1;i<=10;i++) {
            rankHTML += num>=i?'<span class="filled"></span>':'<span></span>';
        }
        return rankHTML;
    }
    return data.map(t=>`<div class="lang-stat">
                <p>${t.name}</p>
                ${fill(t.rank)}
            </div>`).join('');
}

function markupStatus (selector, data) {

    selector.append(statsHTML(data));
}


export const APP_DATA = {
    "bio": {
        "name": "Hosam Elnabawy Ahmed",
        "role": "Mobile Developer",
        "biopic": "h-profile.png",
        "contacts": {
            "primary_email": "hossam216921@eng.zu.edu.eg",
            "secondary_email": "hosamelnabawy@outlook.com",
            "github": "https://github.com/hosam1696",
            "codepen": "http://codepen.io/hosam1696/",
            "twitter": "https://twitter.com/helnabawy20975",
            "linkedIn": "https://www.linkedin.com/in/hosam1696/",
            "mobile": "+201201914918",
            "location": "Cairo, Egypt"
        },
        "welcomeMessage": "Welcome to my resume",

        "technologies": [
            {
                "name": "Javascript",
                "rank": 9
            },
            {
                "name": "Ionic",
                "rank": 8
            },
            {
                "name": "Angular",
                "rank": 9
            },
            {
                "name": "Nodejs",
                "rank": 7
            }
        ],
        "skills": [
            "web programming languages and tools like HTML5, CSS3, JAVSCRIPT",
            "SCSS as css preprocessor language and Bootstrap as style framework",
            "Javacsript OOP & FB",
            "Angular (4) as MVC framework",
            "Ionic (3) as a framework to build hybrid mobile apps",
            "Typescript",
            "NODEJS & ExpressJs as a server side frameworks",
            "Linux Bash shell and windows command line",
            "Good communication English skills in programming and real",
            "GIT and GitHub as version control system managements"
        ], display: function (section) {
            
            const skillSection = $('#skills');
            const avatarSection = $('.avatar');
            const statsSection = $('.statics');
            const contactsSection = $('.contact');
            let skillsHTML = this.skills.map(skill => `<li>${skill}</li>`).join('');
            let inlineList = $('<ul class="navbar-nav-line"></ul>');
            let blockList = $('<ul class="navbar-nav"></ul>');
            

            skillSection.append(skillsHTML); // display skills
    
            markupBio(avatarSection, this); // display avatar section
                
            markupStatus(statsSection, this.technologies); // display statistics
        
            for (let [key, url] of Object.entries(this.contacts)) {
                if (key === 'primary_email' || key === 'secondary_email') {
                    blockList.append(`<li>${getSvgIcon(key)}<span class="vertical-sep"></span><a href="mailto:${url}">${url}</a></li>`);
                } else if (key === 'mobile' || key === 'location') {
                    continue;
                } else {
                    inlineList.append(`<li class="line"><a href="${url}" target="noopener">${getSvgIcon(key)}</a></li>`);
                }
            }
            contactsSection.append(blockList, inlineList);
        }
        

    },
    "education": {
        "schools": [
            {
                "name": "zagazig university",
                "location": "zagazig, Egypt",
                "degree": "Electronics Engineering",
                "major": "Engineering",
                "date": "2017"
            }
        ],
        "onlineCourses": [
            {
                "title": "Front End NanoDegree",
                "school": "Udacity",
                "dates": "2018",
                "url": "https://classroom.udacity.com/nanodegrees/nd001"
            }
        ],
        "display": function () {
            const coursesDiv = $('#courses-div');

            coursesDiv.append(
                this.onlineCourses
                    .map(course => course.title + '<br>' + course.school)
            );
        }
    },
    "work": {
        "jobs": [
            {
                "employer": "hemed",
                "title": "Front End Developer",
                "dates": "2016",
                "dexcription": "build static and responsivee HTML"
            }
        ],
        "display": function () {

            const objectsDiv = $('.objects');
            const [objDivHeight, objDivWidth] = [objectsDiv.width(), objectsDiv.height()];
            // global functions
            const range = (start, end) => Array.from({ length: end - start + 1 }, (t, i) => i + start);
            const random = (start, end) => Math.floor(Math.random() * end) + start;
            const getRandomColor = () => "#" + ((1 << 24) * Math.random() | 0).toString(16);

            range(1, 20).forEach(div => {
                div = document.createElement('div');
                let randWidth = random(0, objDivWidth) + 'px';
                Object.assign(div.style, {
                    width: randWidth,
                    height: randWidth,
                    borderRadius: random(0, 2) * 50 + '%',
                    backgroundColor: getRandomColor(),
                    opacity: Math.random() - 0.2,
                    transform: `rotate(${random(0, 360)}deg) translate(${random(0, objDivWidth * 2)}px, ${random(0, objDivHeight / 2)}px)`
                });
                objectsDiv.append(div);
            });
        }
    },
    "projects": {
        "projects": [
            {
                "title": "Jomlah App",
                "dates": "2019",
                "description": "Jomlah App is Ecommece Application",
                "links": {
                    "web": "https://play.google.com/store/apps/details?id=com.jomlah.android"
                }
            },
            {
                "title": "Raonaq App",
                "dates": "2018",
                "description": "RaonaQ is a ONE stop Shop app for home & office decoration & design Uniting the whole design triangle to create the 1 st centralized Arabic Marketplace for design & decoration",
                "links": {
                    "web": "https://play.google.com/store/apps/details?id=com.inetworks.raonaq"
                }
            },
            {
                "title": "Matager App",
                "dates": "2017",
                "description": "Mobile App to facilate dealing with stores and exporters",
                "images": "proj-img.jpg",
                "links": {
                    "github": "https://github.com/hosam1696/matagerApp"
                }
            },
            {
                "title": "LifeWithQuran App",
                "dates": "2018",
                "description": "read aand listen to holy quran",
                "images": "proj-img.jpg",
                "links": {
                    "github": "https://github.com/hosam1696/quraan",
                    "web": "https://play.google.com/store/apps/details?id=com.methaaq.lifewithquran",
                }
            },
            {
                "title": "Sella App",
                "dates": "2018",
                "description": "read aand listen to holy quran",
                "images": "proj-img.jpg",
                "links": {
                    "web": "https://play.google.com/store/apps/details?id=com.methaaq.sella",
                }
            },
            {
                "title": "Bawaba App",
                "dates": "2017",
                "description": "Mobile App let students book travel tickets",
                "images": "proj-img.jpg",
                "links": {
                    "github": "https://github.com/hosam1696/bawabaApp",
                    "web": "https://itunes.apple.com/us/app/%D8%A8%D9%88%D8%A7%D8%A8%D8%A9-%D8%A7%D9%84%D9%86%D9%82%D9%84/id1110646052?ls=1&mt=8"
                }
            },
            {
                "title": "Ubzil App",
                "dates": "2017",
                "description": "Mobile App to connect services providers to who need it",
                "images": "proj-img.jpg",
                "links": {
                    "github": "https://github.com/hosam1696/UbzilApp"
                }
            },
            {
                "title": "Roax Academy Website",
                "dates": "2017",
                "description": "website to let people chat and learn together",
                "images": "proj-img.jpg",
                "links": {
                    "github": "https://github.com/hosam1696/RoaxAcademy-express",
                    "web": "https://pure-ravine-76563.herokuapp.com/"
                }
            },
            {
                "title": "Ecoomerce Angular2",
                "dates": "2017",
                "description": "website built by Angular ang hosted on github",
                "images": "proj-img.jpg",
                "links": {
                    "github": "https://github.com/hosam1696/e-commerce-angular",
                    "web": "https://hosam1696.github.io/e-commerce-angular"
                }
            },
            {
                "title": "Landing Page",
                "dates": "2017",
                "description": "responsive one page HTML and CSS for resturants",
                "images": "proj-img.jpg",
                "links": {
                    "github": "https://github.com/hosam1696/omnifood",
                    "web": "https://hosam1696.github.io/omnifood/resources/"
                }
            },
            {
                "title": "Travel Template",
                "dates": "2017",
                "description": "Responsive website ",
                "images": "proj-img.jpg",
                "links": {
                    "github": "https://github.com/hosam1696/hsa-travel",
                    "web": "https://hosam1696.github.io/hsa-travel/"
                }
            }
        ],
        "display": function () {

            const projectHolder = $('.projects-holder');
            projectHolder.append(() => {
                let projectData = this.projects;
                return projectData.map(project => {
                    return `
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
        }
    }, locationFinder: function () {

        google.maps.event.addDomListener(window, 'load', init);

        function init() {
            let myLat = new google.maps.LatLng(30.026510, 31.211858); // Cairo;
            let mapOptions = {
                zoom: 11,

                center: myLat,

                styles: [{ "featureType": "all", "elementType": "all", "stylers": [{ "visibility": "on" }] }, { "featureType": "all", "elementType": "labels", "stylers": [{ "visibility": "off" }, { "saturation": "-100" }] }, { "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#000000" }, { "lightness": 40 }, { "visibility": "off" }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }, { "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#000000" }, { "lightness": 17 }, { "weight": 1.2 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 20 }] }, { "featureType": "landscape", "elementType": "geometry.fill", "stylers": [{ "color": "#4d6059" }] }, { "featureType": "landscape", "elementType": "geometry.stroke", "stylers": [{ "color": "#4d6059" }] }, { "featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [{ "color": "#4d6059" }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "lightness": 21 }] }, { "featureType": "poi", "elementType": "geometry.fill", "stylers": [{ "color": "#4d6059" }] }, { "featureType": "poi", "elementType": "geometry.stroke", "stylers": [{ "color": "#4d6059" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "visibility": "on" }, { "color": "#7f8d89" }] }, { "featureType": "road", "elementType": "geometry.fill", "stylers": [{ "color": "#7f8d89" }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#7f8d89" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#7f8d89" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 18 }] }, { "featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{ "color": "#7f8d89" }] }, { "featureType": "road.arterial", "elementType": "geometry.stroke", "stylers": [{ "color": "#7f8d89" }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 16 }] }, { "featureType": "road.local", "elementType": "geometry.fill", "stylers": [{ "color": "#7f8d89" }] }, { "featureType": "road.local", "elementType": "geometry.stroke", "stylers": [{ "color": "#7f8d89" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#000000" }, { "lightness": 19 }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#2b3638" }, { "visibility": "on" }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#2b3638" }, { "lightness": 17 }] }, { "featureType": "water", "elementType": "geometry.fill", "stylers": [{ "color": "#24282b" }] }, { "featureType": "water", "elementType": "geometry.stroke", "stylers": [{ "color": "#24282b" }] }, { "featureType": "water", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "labels.text", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }]
            };

            let mapElement = document.getElementById('mapDiv');

            let map = new google.maps.Map(mapElement, mapOptions);

            let marker = new google.maps.Marker({
                position: myLat,
                map: map,
                draggable: true,
                animation: google.maps.Animation.DROP,
                title: 'Home!'
            });

            marker.setMap(map);
        }

    }
};
