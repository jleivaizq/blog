// merge-stream@1.0.1 downloaded from https://ga.jspm.io/npm:merge-stream@1.0.1/index.js

import r from"readable-stream/passthrough";var e={};var t=r;e=function(){var r=[];var e=new t({objectMode:true});e.setMaxListeners(0);e.add=add;e.isEmpty=isEmpty;e.on("unpipe",remove);Array.prototype.slice.call(arguments).forEach(add);return e;function add(t){if(Array.isArray(t)){t.forEach(add);return this}r.push(t);t.once("end",remove.bind(null,t));t.once("error",e.emit.bind(e,"error"));t.pipe(e,{end:false});return this}function isEmpty(){return 0==r.length}function remove(t){r=r.filter((function(r){return r!==t}));!r.length&&e.readable&&e.end()}};var n=e;export default n;

