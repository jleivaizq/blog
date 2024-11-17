// contains-path@0.1.0 downloaded from https://ga.jspm.io/npm:contains-path@0.1.0/index.js

import t from"path";var n={};var r=t;function containsPath(t,n){if("string"!==typeof t||"string"!==typeof n)throw new TypeError("contains-path expects file paths to be a string.");var r="(^|\\/)";0!==n.indexOf("./")&&"/"!==n.charAt(0)||(r="^");var a=new RegExp(r+normalize(n).join("\\/")+"($|\\/)");t=normalize(t).join("/");return a.test(t)}function normalize(t){t=r.normalize(t);return t.split(/[\\\/]+/)}n=containsPath;var a=n;export default a;

