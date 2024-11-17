// lodash._baseismatch@3.1.3 downloaded from https://ga.jspm.io/npm:lodash._baseismatch@3.1.3/index.js

import e from"lodash._baseisequal";var t={};var r=e;function baseIsMatch(e,t,i){var a=t.length,n=a,u=!i;if(null==e)return!n;e=toObject(e);while(a--){var f=t[a];if(u&&f[2]?f[1]!==e[f[0]]:!(f[0]in e))return false}while(++a<n){f=t[a];var o=f[0],s=e[o],c=f[1];if(u&&f[2]){if(void 0===s&&!(o in e))return false}else{var l=i?i(s,c,o):void 0;if(!(void 0===l?r(c,s,i,true):l))return false}}return true}function toObject(e){return isObject(e)?e:Object(e)}function isObject(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}t=baseIsMatch;var i=t;export default i;

