// empty-dir@0.2.1 downloaded from https://ga.jspm.io/npm:empty-dir@0.2.1/index.js

import t from"fs";import n from"fs-exists-sync";var r={};const e=t;const f=n;function isEmpty(t,n,r){if(2===arguments.length){r=n;n=null}f(t)?e.readdir(t,(function(t,e){if(t)r(t);else{"function"===typeof n&&(e=e.filter(n));r(null,0===e.length)}})):r(null,false)}isEmpty.sync=function(t,n){if(!f(t))return false;try{var r=e.readdirSync(t);"function"===typeof n&&(r=r.filter(n));return 0===r.length}catch(t){}return false};r=isEmpty;var i=r;export default i;

