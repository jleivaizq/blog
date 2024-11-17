// trim-leading-lines@0.1.1 downloaded from https://ga.jspm.io/npm:trim-leading-lines@0.1.1/index.js

import r from"is-whitespace";var e={};var t=r;e=function(r){if("string"!==typeof r)throw new TypeError("expected a string");if(!r)return r;var e=r.split("\n");if(1===e.length)return r;var i=0;for(var n=0;n<e.length;n++){var a=e[n];if(!t(a)&&""!==a){i=n;break}}return e.slice(i).join("\n")};var i=e;export default i;

