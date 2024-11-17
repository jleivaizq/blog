// lazy-cache@2.0.2 downloaded from https://ga.jspm.io/npm:lazy-cache@2.0.2/index.js

import e from"set-getter";import r from"process";var t={};var n=r;var a=e;function lazyCache(e){var r={};return function proxy(t,o){var u=o;"string"!==typeof u&&(u=camelcase(t));function getter(){return r[u]||(r[u]=e(t))}unlazy(n.env)&&getter();a(proxy,u,getter);return getter}}function unlazy(e){return"true"===e.UNLAZY||true===e.UNLAZY||e.TRAVIS}function camelcase(e){if(1===e.length)return e.toLowerCase();e=e.replace(/^[\W_]+|[\W_]+$/g,"").toLowerCase();return e.replace(/[\W_]+(\w|$)/g,(function(e,r){return r.toUpperCase()}))}t=lazyCache;var o=t;export default o;

