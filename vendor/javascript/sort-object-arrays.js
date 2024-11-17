// sort-object-arrays@0.1.1 downloaded from https://ga.jspm.io/npm:sort-object-arrays@0.1.1/index.js

import r from"kind-of";var o={};var t=r;function sortArrays(r,o){if("object"!==t(r))throw new TypeError("expected target to be an object");for(var e in r){var a=r[e];if("object"===t(a))r[e]=sortArrays(r[e],o);else if(Array.isArray(a)){"string"===typeof a[0]&&a.sort(compare(o));r[e]=a}}return r}function compare(r){return"function"===typeof r?r:function(r,o){return r.localeCompare(o)}}o=sortArrays;var e=o;export default e;

