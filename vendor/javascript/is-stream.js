// is-stream@1.1.0 downloaded from https://ga.jspm.io/npm:is-stream@1.1.0/index.js

var t={};var e=t=function(t){return null!==t&&"object"===typeof t&&"function"===typeof t.pipe};e.writable=function(t){return e(t)&&false!==t.writable&&"function"===typeof t._write&&"object"===typeof t._writableState};e.readable=function(t){return e(t)&&false!==t.readable&&"function"===typeof t._read&&"object"===typeof t._readableState};e.duplex=function(t){return e.writable(t)&&e.readable(t)};e.transform=function(t){return e.duplex(t)&&"function"===typeof t._transform&&"object"===typeof t._transformState};var r=t;export default r;

