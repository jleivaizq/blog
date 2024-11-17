// set-value@0.3.3 downloaded from https://ga.jspm.io/npm:set-value@0.3.3/index.js

import r from"to-object-path";import t from"extend-shallow";import e from"isobject";var o={};var a=r;var i=t;var f=e;o=function(r,t,e){if("object"!==typeof r)return r;Array.isArray(t)&&(t=a(t));if("string"!==typeof t)return r;var o=t.split(".");var p=o.length,n=-1;var v=r;var l;while(++n<p){var c=o[n];while("\\"===c[c.length-1])c=c.slice(0,-1)+"."+o[++n];if(n===p-1){l=c;break}"object"!==typeof r[c]&&(r[c]={});r=r[c]}r.hasOwnProperty(l)&&"object"===typeof r[l]&&f(e)?i(r[l],e):r[l]=e;return v};var p=o;export default p;

