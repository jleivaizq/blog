// lodash.foreach@4.5.0 downloaded from https://ga.jspm.io/npm:lodash.foreach@4.5.0/index.js

var r={};var e=9007199254740991;var t="[object Arguments]",n="[object Function]",a="[object GeneratorFunction]";var i=/^(?:0|[1-9]\d*)$/;function arrayEach(r,e){var t=-1,n=r?r.length:0;while(++t<n)if(false===e(r[t],t,r))break;return r}function baseTimes(r,e){var t=-1,n=Array(r);while(++t<r)n[t]=e(t);return n}function overArg(r,e){return function(t){return r(e(t))}}var u=Object.prototype;var c=u.hasOwnProperty;var o=u.toString;var s=u.propertyIsEnumerable;var f=overArg(Object.keys,Object);function arrayLikeKeys(r,e){var t=b(r)||isArguments(r)?baseTimes(r.length,String):[];var n=t.length,a=!!n;for(var i in r)!e&&!c.call(r,i)||a&&("length"==i||isIndex(i,n))||t.push(i);return t}var l=createBaseEach(baseForOwn);var y=createBaseFor();function baseForOwn(r,e){return r&&y(r,e,keys)}function baseKeys(r){if(!isPrototype(r))return f(r);var e=[];for(var t in Object(r))c.call(r,t)&&"constructor"!=t&&e.push(t);return e}function createBaseEach(r,e){return function(t,n){if(null==t)return t;if(!isArrayLike(t))return r(t,n);var a=t.length,i=e?a:-1,u=Object(t);while(e?i--:++i<a)if(false===n(u[i],i,u))break;return t}}function createBaseFor(r){return function(e,t,n){var a=-1,i=Object(e),u=n(e),c=u.length;while(c--){var o=u[r?c:++a];if(false===t(i[o],o,i))break}return e}}function isIndex(r,t){t=null==t?e:t;return!!t&&("number"==typeof r||i.test(r))&&r>-1&&r%1==0&&r<t}function isPrototype(r){var e=r&&r.constructor,t="function"==typeof e&&e.prototype||u;return r===t}function forEach(r,e){var t=b(r)?arrayEach:l;return t(r,"function"==typeof e?e:identity)}function isArguments(r){return isArrayLikeObject(r)&&c.call(r,"callee")&&(!s.call(r,"callee")||o.call(r)==t)}var b=Array.isArray;function isArrayLike(r){return null!=r&&isLength(r.length)&&!isFunction(r)}function isArrayLikeObject(r){return isObjectLike(r)&&isArrayLike(r)}function isFunction(r){var e=isObject(r)?o.call(r):"";return e==n||e==a}function isLength(r){return"number"==typeof r&&r>-1&&r%1==0&&r<=e}function isObject(r){var e=typeof r;return!!r&&("object"==e||"function"==e)}function isObjectLike(r){return!!r&&"object"==typeof r}function keys(r){return isArrayLike(r)?arrayLikeKeys(r):baseKeys(r)}function identity(r){return r}r=forEach;var v=r;export default v;

