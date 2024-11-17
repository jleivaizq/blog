// time-stamp@1.1.0 downloaded from https://ga.jspm.io/npm:time-stamp@1.1.0/index.js

var e={};e=function(e,t){if("string"!==typeof e){t=e;e="YYYY:MM:DD"}t||(t=new Date);function timestamp(){var r=/(?=(YYYY|YY|MM|DD|HH|mm|ss|ms))\1([:\/]*)/;var Y=r.exec(e);if(Y){var a=method(Y[1]);var s="00"+String(t[a[0]]()+(a[2]||0));var n=s.slice(-a[1])+(Y[2]||"");e=e.replace(Y[0],n);timestamp()}}timestamp(e);return e};function method(e){return{YYYY:["getFullYear",4],YY:["getFullYear",2],MM:["getMonth",2,1],DD:["getDate",2],HH:["getHours",2],mm:["getMinutes",2],ss:["getSeconds",2],ms:["getMilliseconds",3]}[e]}var t=e;export default t;

