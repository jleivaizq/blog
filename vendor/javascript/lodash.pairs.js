// lodash.pairs@3.0.1 downloaded from https://ga.jspm.io/npm:lodash.pairs@3.0.1/index.js

import t from"lodash.keys";var r={};var e=t;function toObject(t){return isObject(t)?t:Object(t)}function isObject(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function pairs(t){t=toObject(t);var r=-1,n=e(t),o=n.length,a=Array(o);while(++r<o){var c=n[r];a[r]=[c,t[c]]}return a}r=pairs;var n=r;export default n;

