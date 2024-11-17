// object-visit@0.3.4 downloaded from https://ga.jspm.io/npm:object-visit@0.3.4/index.js

import t from"isobject";var r={};var e=t;r=function visit(t,r,o){if(!e(t)&&"function"!==typeof t)throw new Error("object-visit expects `thisArg` to be an object.");if("string"!==typeof r)throw new Error("object-visit expects `method` name to be a string");if("function"!==typeof t[r])return t;o=o||{};for(var i in o)t[r](i,o[i]);return t};var o=r;export default o;

