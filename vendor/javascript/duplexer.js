// duplexer@0.1.2 downloaded from https://ga.jspm.io/npm:duplexer@0.1.2/index.js

import r from"stream";var e={};var t=r;var a=["write","end","destroy"];var n=["resume","pause"];var o=["data","close"];var i=Array.prototype.slice;e=duplex;function forEach(r,e){if(r.forEach)return r.forEach(e);for(var t=0;t<r.length;t++)e(r[t],t)}function duplex(r,e){var f=new t;var u=false;forEach(a,proxyWriter);forEach(n,proxyReader);forEach(o,proxyStream);e.on("end",handleEnd);r.on("drain",(function(){f.emit("drain")}));r.on("error",reemit);e.on("error",reemit);f.writable=r.writable;f.readable=e.readable;return f;function proxyWriter(e){f[e]=method;function method(){return r[e].apply(r,arguments)}}function proxyReader(r){f[r]=method;function method(){f.emit(r);var t=e[r];if(t)return t.apply(e,arguments);e.emit(r)}}function proxyStream(r){e.on(r,reemit);function reemit(){var e=i.call(arguments);e.unshift(r);f.emit.apply(f,e)}}function handleEnd(){if(!u){u=true;var r=i.call(arguments);r.unshift("end");f.emit.apply(f,r)}}function reemit(r){f.emit("error",r)}}var f=e;export default f;
