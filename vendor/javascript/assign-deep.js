// assign-deep@0.4.8 downloaded from https://ga.jspm.io/npm:assign-deep@0.4.8/index.js

import r from"is-primitive";import n from"assign-symbols";import t from"kind-of";var i={};var e=r;var o=n;var s=t;function assign(r){r=r||{};var n=arguments.length,t=0;if(1===n)return r;while(++t<n){var i=arguments[t];e(r)&&(r=i);isObject(i)&&extend(r,i)}return r}function extend(r,n){o(r,n);for(var t in n)if(isValidKey(t)&&hasOwn(n,t)){var i=n[t];if(isObject(i)){"undefined"===s(r[t])&&"function"===s(i)&&(r[t]=i);r[t]=assign(r[t]||{},i)}else r[t]=i}return r}function isObject(r){return"object"===s(r)||"function"===s(r)}function hasOwn(r,n){return Object.prototype.hasOwnProperty.call(r,n)}function isValidKey(r){return"__proto__"!==r&&"constructor"!==r&&"prototype"!==r}i=assign;var a=i;export default a;

