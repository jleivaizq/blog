// process-nextick-args@2.0.1 downloaded from https://ga.jspm.io/npm:process-nextick-args@2.0.1/index.js

import e from"process";var n={};var t=e;n="undefined"===typeof t||!t.version||0===t.version.indexOf("v0.")||0===t.version.indexOf("v1.")&&0!==t.version.indexOf("v1.8.")?{nextTick:nextTick}:t;function nextTick(e,n,r,c){if("function"!==typeof e)throw new TypeError('"callback" argument must be a function');var i=arguments.length;var a,l;switch(i){case 0:case 1:return t.nextTick(e);case 2:return t.nextTick((function afterTickOne(){e.call(null,n)}));case 3:return t.nextTick((function afterTickTwo(){e.call(null,n,r)}));case 4:return t.nextTick((function afterTickThree(){e.call(null,n,r,c)}));default:a=new Array(i-1);l=0;while(l<a.length)a[l++]=arguments[l];return t.nextTick((function afterTick(){e.apply(null,a)}))}}var r=n;const c=n.nextTick;export default r;export{c as nextTick};

