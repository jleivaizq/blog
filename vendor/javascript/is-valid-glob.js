// is-valid-glob@0.3.0 downloaded from https://ga.jspm.io/npm:is-valid-glob@0.3.0/index.js

var r={};r=function isValidGlob(r){return"string"===typeof r&&r.length>0||!!Array.isArray(r)&&(0!==r.length&&every(r))};function every(r){var e=r.length;while(e--)if("string"!==typeof r[e]||r[e].length<=0)return false;return true}var e=r;export default e;

