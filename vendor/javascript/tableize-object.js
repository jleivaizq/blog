// tableize-object@0.1.0 downloaded from https://ga.jspm.io/npm:tableize-object@0.1.0/index.js

import t from"isobject";var r={};var a=t;r=function tableize(t){var r={};flatten(r,t,"");return r};function flatten(t,r,e){for(var n in r)if(r.hasOwnProperty(n)){var f=r[n];n=e+n;a(f)?flatten(t,f,n+"."):t[n]=f}}var e=r;export default e;

