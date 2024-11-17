// stringify-author@0.1.3 downloaded from https://ga.jspm.io/npm:stringify-author@0.1.3/index.js

var r={};r=function(r){if("object"!==typeof r)throw new Error("expected an author to be an object");var e={name:["",""],email:["<",">"],url:["(",")"]};var t="";r.url&&(r.url=stripSlash(r.url));for(var a in e)r[a]&&(t+=e[a][0]+r[a]+e[a][1]+" ");return t.trim()};function stripSlash(r){return r.replace(/\/$/,"")}var e=r;export default e;

