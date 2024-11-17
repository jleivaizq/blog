// parse-passwd@1.0.0 downloaded from https://ga.jspm.io/npm:parse-passwd@1.0.0/index.js

var r={};r=function(r){if("string"!==typeof r)throw new Error("expected a string");return r.split("\n").map(user).filter(Boolean)};function user(r,e){if(!r||!r.length||"#"===r.charAt(0))return null;var t=r.split(":");return{username:t[0],password:t[1],uid:t[2],gid:t[3],gecos:t[4],homedir:t[5],shell:t[6]}}var e=r;export default e;

