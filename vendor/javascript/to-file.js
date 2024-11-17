// to-file@0.2.0 downloaded from https://ga.jspm.io/npm:to-file@0.2.0/index.js

import t from"path";import e from"fs";import r from"lazy-cache";import n from"define-property";import o from"file-contents";import i from"extend-shallow";import a from"glob-parent";import s from"is-valid-glob";import l from"isobject";import f from"vinyl";import c from"process";var u={};var v=e;var m=t;var p=r(null);var d=null;require=p;n;o;i;a;s;l;f;require=d;p.tryStat=function tryStat(t,e){try{return v.lstatSync(t)}catch(t){}try{e=e||{};return v.lstatSync(m.resolve(e.cwd,t))}catch(t){if("ENOENT"!==t.code)throw t}return null};u=p;var h=u;var y={};var w=c;var b=t;var _=h;y=function toFile(t,e,r){var n=_.isValidGlob(e);if(!n){r=e;e=null}var o=_.extend({},r);var i={contents:null};i.cwd=b.resolve(o.cwd||w.cwd());i.path=b.resolve(i.cwd,t);if(n){Array.isArray(e)&&(e=e[0]);i.base=b.resolve(i.cwd,_.parent(e))}else i.base=b.resolve(o.base||i.cwd);var a="function"===typeof o.File?o.File:_.File;var s=new a(i);s.options=o;if(o.file){for(var l in o.file)s[l]=o.file[l];delete o.file}if(!s.stat){s.stat=o.stat||stats(s);delete o.stat}contents(s,o);return s};function stats(t){_.define(t,"_stat",null);_.define(t,"stat",{configurable:true,set:function(t){this._stat=t},get:function(){return this._stat||(this._stat=_.tryStat(this.path))}})}function contents(t,e){_.define(t,"_contents",null);_.define(t,"contents",{configurable:true,set:function(t){this._contents=t},get:function(){_.contents.sync(this,e);return this._contents}})}var g=y;export default g;

