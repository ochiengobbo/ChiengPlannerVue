// JS Dependencies: Popper, Bootstrap & JQuery
import '@popperjs/core';
import '../node_modules/bootstrap';
import '@fortawesome/fontawesome-free'
import * as $ from 'jquery';
// export for others scripts to use
window.$ = $;
//window.jQuery = jQuery;

// CSS Dependencies: Bootstrap & Bootstrap icons
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

// Custom JS imports
// ... none at the moment

// Custom CSS imports
import './/chiengplanner.css';

console.log('The \'chiengplanner\' bundle has been loaded!');