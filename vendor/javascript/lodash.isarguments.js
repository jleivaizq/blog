// lodash.isarguments@3.1.0 downloaded from https://ga.jspm.io/npm:lodash.isarguments@3.1.0/index.js

var t={};var e=9007199254740991;var r="[object Arguments]",n="[object Function]",i="[object GeneratorFunction]";var c=Object.prototype;var o=c.hasOwnProperty;var u=c.toString;var a=c.propertyIsEnumerable;function isArguments(t){return isArrayLikeObject(t)&&o.call(t,"callee")&&(!a.call(t,"callee")||u.call(t)==r)}function isArrayLike(t){return null!=t&&isLength(t.length)&&!isFunction(t)}function isArrayLikeObject(t){return isObjectLike(t)&&isArrayLike(t)}function isFunction(t){var e=isObject(t)?u.call(t):"";return e==n||e==i}function isLength(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=e}function isObject(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function isObjectLike(t){return!!t&&"object"==typeof t}t=isArguments;var s=t;export default s;

