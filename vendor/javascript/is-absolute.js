// is-absolute@0.2.6 downloaded from https://ga.jspm.io/npm:is-absolute@0.2.6/index.js

import t from"is-relative";import i from"is-windows";var r={};var s=t;var o=i;r=isAbsolute;function isAbsolute(t){if("string"!==typeof t)throw new TypeError("isAbsolute expects a string.");return o()?isAbsolute.win32(t):isAbsolute.posix(t)}isAbsolute.posix=function posixPath(t){return"/"===t.charAt(0)};isAbsolute.win32=function win32(t){return!(!/[a-z]/i.test(t.charAt(0))||":"!==t.charAt(1)||"\\"!==t.charAt(2))||("\\\\"===t.slice(0,2)||!s(t))};var e=r;export default e;

