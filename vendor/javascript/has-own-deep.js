// has-own-deep@0.1.4 downloaded from https://ga.jspm.io/npm:has-own-deep@0.1.4/index.js

var e={};var r=Object.prototype.hasOwnProperty;e=function hasOwnDeep(e,t,a){if("object"!==typeof e)throw new Error("has-own-deep expects an object");if("string"!==typeof t)return false;true===a&&(t=t.split("\\.").join("__TMP__"));var n=t.split(".");if(true===a){var o=n.length;while(o--)n[o]=n[o].split("__TMP__").join(".")}var o=n.length,i=0;while(o--){var l=n[i++];if(!r.call(e,l))return false;e=e[l]}return true};var t=e;export default t;

