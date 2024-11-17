// clone-deep@0.2.4 downloaded from https://ga.jspm.io/npm:clone-deep@0.2.4/index.js

import e from"lazy-cache";import r from"is-plain-object";import o from"shallow-clone";import n from"kind-of";import t from"for-own";var c={};var a=e(null);var l=null;require=a;r;o;n;t;require=l;c=a;var i=c;var f={};var p=i;function cloneDeep(e,r){switch(p.typeOf(e)){case"object":return cloneObjectDeep(e,r);case"array":return cloneArrayDeep(e,r);default:return p.clone(e)}}function cloneObjectDeep(e,r){if(p.isObject(e)){var o={};p.forOwn(e,(function(e,o){this[o]=cloneDeep(e,r)}),o);return o}return r?r(e):e}function cloneArrayDeep(e,r){var o=e.length,n=[];var t=-1;while(++t<o)n[t]=cloneDeep(e[t],r);return n}f=cloneDeep;var u=f;export default u;

