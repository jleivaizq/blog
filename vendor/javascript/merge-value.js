// merge-value@1.0.0 downloaded from https://ga.jspm.io/npm:merge-value@1.0.0/index.js

import r from"is-extendable";import e from"mixin-deep";import t from"get-value";import o from"set-value";var a={};var i=r;var n=e;var p=t;var f=o;a=function mergeValue(r,e,t){if(!i(r))throw new TypeError("expected an object");if("string"!==typeof e||null==t)return n.apply(null,arguments);if("string"===typeof t){f(r,e,t);return r}var o=p(r,e);i(t)&&i(o)&&(t=n({},o,t));f(r,e,t);return r};var l=a;export default l;

