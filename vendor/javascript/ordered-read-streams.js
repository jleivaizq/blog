// ordered-read-streams@0.3.0 downloaded from https://ga.jspm.io/npm:ordered-read-streams@0.3.0/index.js

import r from"readable-stream/readable";import e from"is-stream";import t from"util";var a="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var i={};var n=r;var s=e.readable;var d=t;function addStream(r,e){if(!s(e))throw new Error("All input streams must be readable");var t=this||a;e._buffer=[];e.on("readable",(function(){var i=e.read();null!==i&&((this||a)===r[0]?t.push(i):(this||a)._buffer.push(i))}));e.on("end",(function(){for(var e=r[0];e&&e._readableState.ended;e=r[0]){while(e._buffer.length)t.push(e._buffer.shift());r.shift()}r.length||t.push(null)}));e.on("error",(this||a).emit.bind(this||a,"error"));r.push(e)}function OrderedStreams(r,e){if(!((this||a)instanceof OrderedStreams))return new OrderedStreams(r,e);r=r||[];e=e||{};e.objectMode=true;n.call(this||a,e);Array.isArray(r)||(r=[r]);if(!r.length)return this.push(null);var t=addStream.bind(this||a,[]);r.forEach((function(r){Array.isArray(r)?r.forEach(t):t(r)}))}d.inherits(OrderedStreams,n);OrderedStreams.prototype._read=function(){};i=OrderedStreams;var f=i;export default f;
