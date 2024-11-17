// deep-bind@0.3.0 downloaded from https://ga.jspm.io/npm:deep-bind@0.3.0/index.js

import n from"mixin-deep";var e={};var t=n;function deepBind(n,e,t){if(!isObject(n))throw new TypeError("expected an object");t=t||{};for(var o in n){var i=n[o];if("object"===typeof i)n[o]=deepBind(i,e);else if("function"===typeof i){n[o]=bind(e,o,i,t);for(var r in i)n[o][r]=i[r]}else n[o]=i}return n}function isObject(n){return n&&"object"===typeof n}function bind(n,e,o,i){return function(){n.hasOwnProperty("options")||(n.options={});"function"===typeof i.bindFn&&(n=i.bindFn(n,e,this,i));if(i.hasOwnProperty(e)){var r=i[e];n.options[e]=r;isObject(r)&&(n.options=t({},n.options,r))}return o.apply(n,arguments)}}e=deepBind;var o=e;export default o;

