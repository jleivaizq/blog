// parse-glob@3.0.4 downloaded from https://ga.jspm.io/npm:parse-glob@3.0.4/index.js

import a from"is-glob";import e from"glob-base";import t from"is-extglob";import n from"is-dotfile";var i={};var r=a;var s=e;var p=t;var o=n;var h=i.cache={};i=function parseGlob(a){if(h.hasOwnProperty(a))return h[a];var e={};e.orig=a;e.is={};a=escape(a);var t=s(a);e.is.glob=t.isGlob;e.glob=t.glob;e.base=t.base;var n=/([^\/]*)$/.exec(a);e.path={};e.path.dirname="";e.path.basename=n[1]||"";e.path.dirname=a.split(e.path.basename).join("")||"";var i=(e.path.basename||"").split(".")||"";e.path.filename=i[0]||"";e.path.extname=i.slice(1).join(".")||"";e.path.ext="";if(r(e.path.dirname)&&!e.path.basename){/\/$/.test(e.glob)||(e.path.basename=e.glob);e.path.dirname=e.base}if(-1===a.indexOf("/")&&!e.is.globstar){e.path.dirname="";e.path.basename=e.orig}var m=e.path.basename.indexOf(".");if(-1!==m){e.path.filename=e.path.basename.slice(0,m);e.path.extname=e.path.basename.slice(m)}if("."===e.path.extname.charAt(0)){var l=e.path.extname.split(".");e.path.ext=l[l.length-1]}e.glob=unescape(e.glob);e.path.dirname=unescape(e.path.dirname);e.path.basename=unescape(e.path.basename);e.path.filename=unescape(e.path.filename);e.path.extname=unescape(e.path.extname);var c=a&&e.is.glob;e.is.negated=a&&"!"===a.charAt(0);e.is.extglob=a&&p(a);e.is.braces=has(c,a,"{");e.is.brackets=has(c,a,"[:");e.is.globstar=has(c,a,"**");e.is.dotfile=o(e.path.basename)||o(e.path.filename);e.is.dotdir=dotdir(e.path.dirname);return h[a]=e};function dotdir(a){return-1!==a.indexOf("/.")||"."===a.charAt(0)&&"/"!==a.charAt(1)}function has(a,e,t){return a&&-1!==e.indexOf(t)}function escape(a){var e=/\{([^{}]*?)}|\(([^()]*?)\)|\[([^\[\]]*?)\]/g;return a.replace(e,(function(a,e,t,n){var i=e||t||n;return i?a.split(i).join(esc(i)):a}))}function esc(a){a=a.split("/").join("__SLASH__");a=a.split(".").join("__DOT__");return a}function unescape(a){a=a.split("__SLASH__").join("/");a=a.split("__DOT__").join(".");return a}var m=i;const l=i.cache;export default m;export{l as cache};
