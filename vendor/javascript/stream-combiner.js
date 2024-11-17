// stream-combiner@0.2.2 downloaded from https://ga.jspm.io/npm:stream-combiner@0.2.2/index.js

import r from"duplexer";import e from"through";var n={};var t=r;var o=e;n=function(){var r;r=1==arguments.length&&Array.isArray(arguments[0])?arguments[0]:[].slice.call(arguments);if(0==r.length)return o();if(1==r.length)return r[0];var e=r[0],n=r[r.length-1],l=t(e,n);function recurse(r){if(!(r.length<2)){r[0].pipe(r[1]);recurse(r.slice(1))}}recurse(r);function onerror(){var r=[].slice.call(arguments);r.unshift("error");l.emit.apply(l,r)}for(var i=1;i<r.length-1;i++)r[i].on("error",onerror);return l};var l=n;export default l;

