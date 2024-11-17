// is-whitespace@0.3.0 downloaded from https://ga.jspm.io/npm:is-whitespace@0.3.0/index.js

var e={};var r;e=function isWhitespace(e){return"string"===typeof e&&regex().test(e)};function regex(){return r||(r=new RegExp('^[\\s\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"]+$'))}var t=e;export default t;

