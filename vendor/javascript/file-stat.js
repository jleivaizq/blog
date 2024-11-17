// file-stat@0.1.3 downloaded from https://ga.jspm.io/npm:file-stat@0.1.3/index.js

import t from"lazy-cache";import r from"graceful-fs";import a from"through2";var e={};var o=t(null);var n=null;require=o;r;a;require=n;e=o;var u=e;var f={};var l=u;f=function fileStats(){return l.through.obj((function(t,r,a){getStats(t,(function(t,r){t?a(t):a(null,r)}))}))};function getStats(t,r){l.fs.lstat(t.path,(function(a,e){if(a)r(a);else{t.stat=e;r(null,t)}}))}f.getStats=getStats;var s=f;const i=f.getStats;export default s;export{i as getStats};

