// write@0.2.1 downloaded from https://ga.jspm.io/npm:write@0.2.1/index.js

import r from"fs";import e from"path";import t from"mkdirp";var i={};var n=r;var a=e;var c=t;i=function writeFile(r,e,t){var i=a.dirname(r);n.exists(i,(function(a){a?n.writeFile(r,e,t):c(i,(function(i){if(i)return t(i);n.writeFile(r,e,t)}))}))};i.sync=function writeFileSync(r,e){var t=a.dirname(r);n.existsSync(t)||c.sync(t);n.writeFileSync(r,e)};i.stream=function writeFileStream(r){var e=a.dirname(r);n.existsSync(e)||c.sync(e);return n.createWriteStream(r)};var m=i;const o=i.sync,s=i.stream;export default m;export{s as stream,o as sync};

