// lodash.initial@4.1.1 downloaded from https://ga.jspm.io/npm:lodash.initial@4.1.1/index.js

var r={};function baseSlice(r,a,e){var i=-1,n=r.length;a<0&&(a=-a>n?0:n+a);e=e>n?n:e;e<0&&(e+=n);n=a>e?0:e-a>>>0;a>>>=0;var t=Array(n);while(++i<n)t[i]=r[i+a];return t}function initial(r){var a=r?r.length:0;return a?baseSlice(r,0,-1):[]}r=initial;var a=r;export default a;

