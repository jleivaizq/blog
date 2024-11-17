// file-is-binary@1.0.0 downloaded from https://ga.jspm.io/npm:file-is-binary@1.0.0/index.js

import r from"isobject";import i from"is-binary-buffer";var e={};var t=r;var n=i;e=function(r){if(!t(r))throw new Error("expected file to be an object");if(r.hasOwnProperty("_isBinary"))return r._isBinary;if("function"===typeof r.isStream&&r.isStream()){r._isBinary=false;return false}if("function"===typeof r.isNull&&r.isNull()){r._isBinary=false;return false}if("function"===typeof r.isDirectory&&r.isDirectory()){r._isBinary=false;return false}r._isBinary=n(r.contents);return r._isBinary};var f=e;export default f;

