// stream-exhaust@1.0.2 downloaded from https://ga.jspm.io/npm:stream-exhaust@1.0.2/index.js

import e from"stream";import r from"util";import t from"process";var i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var n={};var o=t;var f=e.Writable;var u=r.inherits;n=resumer;function resumer(e){if(!e.readable)return e;if(e._read){e.pipe(new Sink);return e}if("function"===typeof e.resume){e.resume();return e}return e}function Sink(){f.call(this||i,{objectMode:true})}u(Sink,f);Sink.prototype._write=function(e,r,t){o.nextTick(t)};var a=n;export default a;

