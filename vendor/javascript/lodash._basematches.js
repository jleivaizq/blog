// lodash._basematches@3.2.0 downloaded from https://ga.jspm.io/npm:lodash._basematches@3.2.0/index.js

import t from"lodash._baseismatch";import r from"lodash.pairs";var e={};var n=t,a=r;function baseMatches(t){var r=getMatchData(t);if(1==r.length&&r[0][2]){var e=r[0][0],a=r[0][1];return function(t){return null!=t&&(t[e]===a&&(void 0!==a||e in toObject(t)))}}return function(t){return n(t,r)}}function getMatchData(t){var r=a(t),e=r.length;while(e--)r[e][2]=isStrictComparable(r[e][1]);return r}function isStrictComparable(t){return t===t&&!isObject(t)}function toObject(t){return isObject(t)?t:Object(t)}function isObject(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}e=baseMatches;var i=e;export default i;

