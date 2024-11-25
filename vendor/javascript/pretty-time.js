// pretty-time@0.2.0 downloaded from https://ga.jspm.io/npm:pretty-time@0.2.0/index.js

import r from"is-number";import e from"nanoseconds";var n={};var s=r;var a=n;a.regex={w:/^(w((ee)?k)?s?)$/,d:/^(d(ay)?s?)$/,h:/^(h((ou)?r)?s?)$/,m:/^(min(ute)?s?|m)$/,s:/^((sec(ond)?)s?|s)$/,ms:/^(milli(second)?s?|ms)$/,"μs":/^(micro(second)?s?|μs)$/,ns:/^(nano(second)?s?|ns?)$/};a.isSmallest=function(r,e){return a.regex[r].test(e)};a.round=function(r,e){r=Math.abs(r);return s(e)?r.toFixed(e):Math.round(r)};var o={};var t=r;var i=e;var m=n;var u={w:6048e11,d:864e11,h:36e11,m:6e10,s:1e9,ms:1e6,"μs":1e3,ns:1};function pretty(r,e,n){if(!t(r)&&!Array.isArray(r))throw new TypeError("expected an array or number in nanoseconds");if(Array.isArray(r)&&2!==r.length)throw new TypeError("expected an array from process.hrtime()");if(t(e)){n=e;e=null}var s=t(r)?r:i(r);var a="";var o;for(var d in u){var f=u[d];var v=s/f;if(e&&m.isSmallest(d,e)){v=m.round(v,n);o&&v===o/f&&--v;a+=v+d;return a.trim()}if(!(v<1)){if(!e){v=m.round(v,n);a+=v+d;return a}o=f;v=Math.floor(v);s-=v*f;a+=v+d+" "}}return a.trim()}o=pretty;var d=o;export default d;
