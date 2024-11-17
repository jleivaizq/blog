// export-files@2.1.1 downloaded from https://ga.jspm.io/npm:export-files@2.1.1/index.js

import e from"fs";import r from"path";import t from"lazy-cache";var n={};var a=e;var i=r;var o=t(null);n=function(e){if("string"!==typeof e)throw new TypeError('expected "'+e+'" to be a string');var r=a.readdirSync(e);var t=r.length;var n=-1;var c={};while(++n<t){var f=r[n];var l=i.resolve(e,f);isJavaScriptFile(l)&&defineProp(c,basename(f),o(l))}return c};function isJavaScriptFile(e){return!!a.statSync(e).isFile()&&("index.js"!==i.basename(e)&&".js"===e.slice(-3))}function basename(e){return e.slice(0,e.length-3)}function defineProp(e,r,t){Object.defineProperty(e,r,{enumerable:true,configurable:true,get:function(){return t()}})}var c=n;export default c;

