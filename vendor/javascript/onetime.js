// onetime@1.1.0 downloaded from https://ga.jspm.io/npm:onetime@1.1.0/index.js

var r={};r=function(r,n){if("function"!==typeof r)throw new TypeError("Expected a function");var e;var t=false;var a=r.displayName||r.name||(/function ([^\(]+)/.exec(r.toString())||[])[1];var onetime=function(){if(t){if(true===n){a=a?a+"()":"Function";throw new Error(a+" can only be called once.")}return e}t=true;e=r.apply(this,arguments);r=null;return e};onetime.displayName=a;return onetime};var n=r;export default n;

