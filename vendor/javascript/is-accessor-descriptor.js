// is-accessor-descriptor@1.0.1 downloaded from https://ga.jspm.io/npm:is-accessor-descriptor@1.0.1/index.js

import*as e from"hasown";var t=e;try{"default"in e&&(t=e.default)}catch(e){}var f={};var n=t;var r={__proto__:null,configurable:"boolean",enumerable:"boolean",get:"function",set:"function"};f=function isAccessorDescriptor(e,t){if(typeof t==="string"){var f=Object.getOwnPropertyDescriptor(e,t);return typeof f!=="undefined"}if(!e||typeof e!=="object")return false;if(n(e,"value")||n(e,"writable"))return false;if((!n(e,"get")||typeof e.get!=="function")&&(!n(e,"set")||typeof e.set!=="function"))return false;if(n(e,"get")&&typeof e.get!=="function"&&typeof e.get!=="undefined"||n(e,"set")&&typeof e.set!=="function"&&typeof e.set!=="undefined")return false;for(var o in e)if(n(e,o)&&n(r,o)&&typeof e[o]!==r[o]&&typeof e[o]!=="undefined")return false;return true};var o=f;export{o as default};
