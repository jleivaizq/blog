// log-ok@0.1.1 downloaded from https://ga.jspm.io/npm:log-ok@0.1.1/index.js

import o from"success-symbol";import r from"ansi-green";var a={};var e=o;var s=r;a=function(){var o=[].slice.call(arguments);var r=o[0];var a=s(e);if("string"===typeof r){var l=/^(\s+)(.*)/.exec(r);if(l){a=l[1]+a;o[0]=l[2]}}console.log.bind(console,a).apply(console,o)};var l=a;export default l;

