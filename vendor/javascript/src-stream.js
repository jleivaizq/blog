// src-stream@0.1.1 downloaded from https://ga.jspm.io/npm:src-stream@0.1.1/index.js

import r from"merge-stream";import e from"through2";import t from"duplexify";var n={};var o=r;var a=e;var f=t;function srcStream(r){var e=a.obj();e.setMaxListeners(0);var t=f.obj(e,o(r,e));t.setMaxListeners(0);var n=false;t.on("pipe",(function(r){n=true;r.on("end",(function(){n=false;t.end()}))}));r.on("end",(function(){n||t.end()}));return t}n=srcStream;var i=n;export default i;

