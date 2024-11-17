// strip-bom@2.0.0 downloaded from https://ga.jspm.io/npm:strip-bom@2.0.0/index.js

import r from"is-utf8";import f from"buffer";var e={};var t=f.Buffer;var i=r;e=function(r){return"string"===typeof r&&65279===r.charCodeAt(0)?r.slice(1):t.isBuffer(r)&&i(r)&&239===r[0]&&187===r[1]&&191===r[2]?r.slice(3):r};var o=e;export default o;

