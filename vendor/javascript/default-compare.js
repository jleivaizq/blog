// default-compare@1.0.0 downloaded from https://ga.jspm.io/npm:default-compare@1.0.0/index.js

import e from"kind-of";var n={};var r=e;n=function defaultCompare(e,n,d){if(null!=d&&"string"!==r(d))throw new TypeError('expected "prop" to be undefined or a string');var f=r(e);var i=r(n);if(d){if("object"===f){e=e[d];f=r(e)}if("object"===i){n=n[d];i=r(n)}}return"null"===f?"null"===i?0:"undefined"===i?-1:1:"undefined"===f?"null"===i?1:"undefined"===i?0:1:"null"===i||"undefined"===i||e<n?-1:e>n?1:0};var d=n;export default d;

