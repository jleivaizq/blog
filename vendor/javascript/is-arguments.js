// is-arguments@1.1.1 downloaded from https://ga.jspm.io/npm:is-arguments@1.1.1/index.js

import*as t from"has-tostringtag/shams";import*as r from"call-bind/callBound";var e="default"in t?t.default:t;var n="default"in r?r.default:r;var a={};var o=e();var u=n;var i=u("Object.prototype.toString");var l=function isArguments(t){return!(o&&t&&"object"===typeof t&&Symbol.toStringTag in t)&&"[object Arguments]"===i(t)};var c=function isArguments(t){return!!l(t)||null!==t&&"object"===typeof t&&"number"===typeof t.length&&t.length>=0&&"[object Array]"!==i(t)&&"[object Function]"===i(t.callee)};var f=function(){return l(arguments)}();l.isLegacyArguments=c;a=f?l:c;var s=a;export default s;

