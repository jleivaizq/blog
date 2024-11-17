// unique-stream@2.3.1 downloaded from https://ga.jspm.io/npm:unique-stream@2.3.1/index.js

import t from"through2-filter";import n from"json-stable-stringify-without-jsonify";var e="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var r={};var i=t.obj;var o=n;var f;f="function"===typeof e.Set?e.Set:function(){this.keys=[];this.has=function(t){return-1!==this.keys.indexOf(t)},this.add=function(t){this.keys.push(t)}};function prop(t){return function(n){return n[t]}}r=unique;function unique(t,n){n=n||new f;var e=o;"string"===typeof t?e=prop(t):"function"===typeof t&&(e=t);return i((function(t){var r=e(t);if(n.has(r))return false;n.add(r);return true}))}var u=r;export default u;

