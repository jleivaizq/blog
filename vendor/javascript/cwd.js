// cwd@0.10.0 downloaded from https://ga.jspm.io/npm:cwd@0.10.0/index.js

import r from"path";import e from"find-pkg";import a from"fs-exists-sync";var o={};var n=r;var t=e;var v=a;var s={};o=function(r){var e=n.resolve(r||"");arguments.length>1&&(e=n.resolve.apply(n,arguments));if(s.hasOwnProperty(e))return s[e];if("package.json"===n.basename(e)&&v(e)){s[e]=e;return e}var a=t.sync(e);return a?s[e]=n.resolve(n.dirname(a),e):v(e)?s[e]=e:void 0};var i=o;export default i;

