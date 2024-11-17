// get-view@0.1.3 downloaded from https://ga.jspm.io/npm:get-view@0.1.3/index.js

import r from"isobject";import t from"match-file";import e from"path";var o={};var i=r;var f=t;var a=e;o=function getFile(r,t,e){var o=t[r];if(o)return o;if("function"===typeof e){o=t[e(r)];if(o)return o}for(var a in t){o=t[a];if(!i(o))throw new TypeError("expected file to be an object");if("string"!==typeof o.path)throw new TypeError("expected file.path to be a string");if(f(r,o))return o}};var n=o;export default n;

