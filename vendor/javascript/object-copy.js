// object-copy@0.1.0 downloaded from https://ga.jspm.io/npm:object-copy@0.1.0/index.js

import r from"kind-of";import e from"copy-descriptor";import t from"define-property";var n={};var o=r;var a=e;var i=t;function copy(r,e,t){if(!isObject(r))throw new TypeError("expected receiving object to be an object.");if(!isObject(e))throw new TypeError("expected providing object to be an object.");var n=nativeKeys(e);var o=Object.keys(e);var c=n.length;t=arrayify(t);while(c--){var f=n[c];has(o,f)?i(r,f,e[f]):f in r||has(t,f)||a(r,e,f)}}function isObject(r){return"object"===o(r)||"function"===typeof r}function has(r,e){e=arrayify(e);var t=e.length;if(isObject(r)){for(var n in r)if(e.indexOf(n)>-1)return true;var o=nativeKeys(r);return has(o,e)}if(Array.isArray(r)){var a=r;while(t--)if(a.indexOf(e[t])>-1)return true;return false}throw new TypeError("expected an array or object.")}function arrayify(r){return r?Array.isArray(r)?r:[r]:[]}function hasConstructor(r){return isObject(r)&&"undefined"!==typeof r.constructor}function nativeKeys(r){return hasConstructor(r)?Object.getOwnPropertyNames(r):[]}n=copy;n.has=has;var c=n;const f=n.has;export default c;export{f as has};
