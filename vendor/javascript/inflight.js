// inflight@1.0.6 downloaded from https://ga.jspm.io/npm:inflight@1.0.6/inflight.js

import r from"wrappy";import e from"once";import n from"process";var t={};var l=n;var a=r;var i=Object.create(null);var f=e;t=a(inflight);function inflight(r,e){if(i[r]){i[r].push(e);return null}i[r]=[e];return makeres(r)}function makeres(r){return f((function RES(){var e=i[r];var n=e.length;var t=slice(arguments);try{for(var a=0;a<n;a++)e[a].apply(null,t)}finally{if(e.length>n){e.splice(0,n);l.nextTick((function(){RES.apply(null,t)}))}else delete i[r]}}))}function slice(r){var e=r.length;var n=[];for(var t=0;t<e;t++)n[t]=r[t];return n}var o=t;export default o;

