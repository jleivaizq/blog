// clone-buffer@1.0.0 downloaded from https://ga.jspm.io/npm:clone-buffer@1.0.0/index.js

import r from"buffer";var f={};var o=r.Buffer;function hasFrom(){return o.hasOwnProperty("from")&&"function"===typeof o.from}function cloneBuffer(r){if(!o.isBuffer(r))throw new Error("Can only clone Buffer.");if(hasFrom())return o.from(r);var f=new o(r.length);r.copy(f);return f}cloneBuffer.hasFrom=hasFrom;f=cloneBuffer;var e=f;export default e;

