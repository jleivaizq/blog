// mixin-object@2.0.1 downloaded from https://ga.jspm.io/npm:mixin-object@2.0.1/index.js

import r from"is-extendable";import t from"for-in";var e={};var i=r;var o=t;function mixin(r,t){if(!i(r))throw new TypeError("mixin-object expects the first argument to be an object.");var e=arguments.length,n=0;while(++n<e){var a=arguments[n];i(a)&&o(a,copy,r)}return r}function copy(r,t){this[t]=r}e=mixin;var n=e;export default n;

