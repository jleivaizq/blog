// define-property@0.2.5 downloaded from https://ga.jspm.io/npm:define-property@0.2.5/index.js

import e from"is-descriptor";var r={};var t=e;r=function defineProperty(e,r,o){if("object"!==typeof e&&"function"!==typeof e)throw new TypeError("expected an object or function.");if("string"!==typeof r)throw new TypeError("expected `prop` to be a string.");return t(o)&&("set"in o||"get"in o)?Object.defineProperty(e,r,o):Object.defineProperty(e,r,{configurable:true,enumerable:false,writable:true,value:o})};var o=r;export default o;

