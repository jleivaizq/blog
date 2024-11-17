// code-point-at@1.1.0 downloaded from https://ga.jspm.io/npm:code-point-at@1.1.0/index.js

var r={};r=function(r,a){if(null===r||void 0===r)throw TypeError();r=String(r);var e=r.length;var t=a?Number(a):0;Number.isNaN(t)&&(t=0);if(!(t<0||t>=e)){var i=r.charCodeAt(t);if(i>=55296&&i<=56319&&e>t+1){var n=r.charCodeAt(t+1);if(n>=56320&&n<=57343)return 1024*(i-55296)+n-56320+65536}return i}};var a=r;export default a;

