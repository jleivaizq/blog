// match-file@0.2.2 downloaded from https://ga.jspm.io/npm:match-file@0.2.2/index.js

import t from"path";import e from"is-glob";import r from"isobject";import i from"micromatch";var n={};var a=t;var o=e;var c=r;var h=i;function matchFile(t,e){if("string"!==typeof t)throw new TypeError("expected name to be a string");if(!c(e)||true!==e._isVinyl)throw new TypeError("expected file to be an object");return endsWith(e.history[0],t)||endsWith(e.path,t)||e.stem===t||e.key===t}matchFile.matcher=function(t,e){if("string"!==typeof t)throw new TypeError("expected pattern to be a string");if(!o(t))return function(e){return matchFile(t,e)};var r=h.matcher(t,e);return function(e){return"string"===typeof e?r(e):matchFile(t,e)||r(e.key)||r(e.history[0])||r(e.path)||r(a.resolve(e.path))||r(e.relative)||r(e.basename)||r(e.stem)}};matchFile.isMatch=function(t,e,r){return matchFile.matcher(t,r)(e)};function endsWith(t,e){"./"===e.slice(0,2)&&(e=e.slice(2));var r=e.length;var i=t.slice(-r)===e;if(i){var n=t.slice(-(r+1),-r);return""===n||"/"===n||"\\"===n}return false}n=matchFile;var m=n;export default m;

