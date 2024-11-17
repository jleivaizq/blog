// async-each-series@1.1.0 downloaded from https://ga.jspm.io/npm:async-each-series@1.1.0/index.js

import n from"process";var t={};var i=n;t=function(n,t,i){i=i||function(){};if(!Array.isArray(n)||!n.length)return i();var r=0;var iterate=function(){t(n[r],(function(t){if(t){i(t);i=function(){}}else{++r;r>=n.length?i():nextTick(iterate)}}))};iterate()};function nextTick(n){"function"===typeof i.nextTick,i.nextTick(n)}var r=t;export default r;

