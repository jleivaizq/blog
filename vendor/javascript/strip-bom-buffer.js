// strip-bom-buffer@0.1.1 downloaded from https://ga.jspm.io/npm:strip-bom-buffer@0.1.1/index.js

import r from"is-buffer";import f from"is-utf8";var i={};var t=r;var e=f;i=function(r){return t(r)&&e(r)&&"\ufeff"===String(r.slice(0,3))?r.slice(3):r};var o=i;export default o;

