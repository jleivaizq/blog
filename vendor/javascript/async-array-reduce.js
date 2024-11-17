// async-array-reduce@0.2.1 downloaded from https://ga.jspm.io/npm:async-array-reduce@0.2.1/index.js

var e={};e=function reduce(e,n,r,t){if(!Array.isArray(e))throw new TypeError("expected an array");if("function"!==typeof r)throw new TypeError("expected iteratee to be a function");if("function"!==typeof t)throw new TypeError("expected callback to be a function");var o=once(t);(function next(n,t){n!==e.length?r(t,e[n],(function(e,r){e?o(e):next(n+1,r)})):o(null,t)})(0,n)};function once(e){var n;return function(){if(!e.called){e.called=true;n=e.apply(this,arguments)}return n}}var n=e;export default n;

