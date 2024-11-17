// defaults-deep@0.2.4 downloaded from https://ga.jspm.io/npm:defaults-deep@0.2.4/index.js

import e from"lazy-cache";var t={};var r=e(null);r("is-extendable","isObject");r("for-own","forOwn");function defaultsDeep(e,t){e=e||{};function copy(e,t){r.forOwn(t,(function(t,n){if("__proto__"!==n){var o=e[n];null==o?e[n]=t:r.isObject(o)&&r.isObject(t)&&defaultsDeep(o,t)}}))}var n=arguments.length,o=0;while(o<n){var a=arguments[o++];a&&copy(e,a)}return e}t=defaultsDeep;var n=t;export default n;

