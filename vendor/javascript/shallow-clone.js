// shallow-clone@0.1.2 downloaded from https://ga.jspm.io/npm:shallow-clone@0.1.2/index.js

import e from"lazy-cache";import r from"is-extendable";import n from"mixin-object";import o from"kind-of";var t={};var c=e(null);var l=null;require=c;r;n;o;require=l;t=c;var i=t;var a={};var u=i;function clone(e){var r=u.typeOf(e);return clone.hasOwnProperty(r)?clone[r](e):e}clone.array=function cloneArray(e){return e.slice()};clone.date=function cloneDate(e){return new Date(+e)};clone.object=function cloneObject(e){return u.isObject(e)?u.mixin({},e):e};clone.regexp=function cloneRegExp(e){var r="";r+=e.multiline?"m":"";r+=e.global?"g":"";r+=e.ignorecase?"i":"";return new RegExp(e.source,r)};a=clone;var f=a;export default f;

