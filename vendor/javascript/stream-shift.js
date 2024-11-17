// stream-shift@1.0.3 downloaded from https://ga.jspm.io/npm:stream-shift@1.0.3/index.js

var e={};e=shift;function shift(e){var t=e._readableState;return t?t.objectMode||typeof e._duplexState==="number"?e.read():e.read(getStateLength(t)):null}function getStateLength(e){if(e.buffer.length){var t=e.bufferIndex||0;if(e.buffer.head)return e.buffer.head.data.length;if(e.buffer.length-t>0&&e.buffer[t])return e.buffer[t].length}return e.length}var t=e;export{t as default};

