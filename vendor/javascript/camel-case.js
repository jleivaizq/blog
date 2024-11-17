// camel-case@3.0.0 downloaded from https://ga.jspm.io/npm:camel-case@3.0.0/camel-case.js

import r from"upper-case";import e from"no-case";var a={};var o=r;var t=e;a=function(r,e,a){var n=t(r,e);a||(n=n.replace(/ (?=\d)/g,"_"));return n.replace(/ (.)/g,(function(r,a){return o(a,e)}))};var n=a;export default n;

