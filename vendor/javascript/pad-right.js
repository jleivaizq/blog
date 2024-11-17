// pad-right@0.2.2 downloaded from https://ga.jspm.io/npm:pad-right@0.2.2/index.js

import r from"repeat-string";var e={};var t=r;e=function padLeft(r,e,a){var f="";var i=e-r.length;if(i<=5&&!a)f="00000";else{if(!(i<=25)||a)return r+t(a||"0",i);f="000000000000000000000000000"}return r+f.slice(0,i)};var a=e;export default a;

