// wrappy@1.0.2 downloaded from https://ga.jspm.io/npm:wrappy@1.0.2/wrappy.js

var r="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var e={};e=wrappy;function wrappy(e,n){if(e&&n)return wrappy(e)(n);if("function"!==typeof e)throw new TypeError("need wrapper function");Object.keys(e).forEach((function(r){wrapper[r]=e[r]}));return wrapper;function wrapper(){var n=new Array(arguments.length);for(var t=0;t<n.length;t++)n[t]=arguments[t];var a=e.apply(this||r,n);var p=n[n.length-1];"function"===typeof a&&a!==p&&Object.keys(p).forEach((function(r){a[r]=p[r]}));return a}}var n=e;export default n;

