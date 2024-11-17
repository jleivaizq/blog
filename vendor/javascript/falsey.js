// falsey@0.3.2 downloaded from https://ga.jspm.io/npm:falsey@0.3.2/index.js

import r from"kind-of";var e={};var a=r;function falsey(r,e){if(!r)return true;if(Array.isArray(r)||"arguments"===a(r))return!r.length;if("object"===a(r))return!Object.keys(r).length;var n=e?arrayify(e):falsey.keywords;return-1!==n.indexOf(r.toLowerCase?r.toLowerCase():r)}falsey.keywords=["none","nil","nope","no","nada","0","false"];function arrayify(r){return Array.isArray(r)?r:[r]}e=falsey;var n=e;export default n;

