// base-option@0.8.4 downloaded from https://ga.jspm.io/npm:base-option@0.8.4/index.js

import t from"lazy-cache";import r from"define-property";import i from"get-value";import o from"is-valid-app";import e from"isobject";import n from"mixin-deep";import a from"option-cache";import p from"set-value";var s={};var c=t(null);var u=null;require=c;r;i;o;e;n;a;p;require=u;s=c;var f=s;var l={};var m=f;l=function(t){return function fn(r){if(m.isValid(r,"base-option","*")){var i=m.Options;var o=m.define;var e=m.set;var n=m.get;var a=this.constructor;i.call(this,m.merge(this.options,t));this.visit("define",i.prototype);var p=this.options;o(this.option,"set",(function(t,r){e(p,t,r);return p}));o(this.option,"get",(function(t){return n(p,t)}));o(this.option,"create",(function(t){var r=new i(m.merge({},p));t&&r.option.apply(r,arguments);o(r.options,"set",(function(t,r){e(this,t,r);return this}));o(r.options,"get",(function(t){return n(this,t)}));o(r.options,"merge",(function(){var t=[].concat.apply([],[].slice.call(arguments));t.unshift(this);return m.merge.apply(m.merge,t)}));o(r,"_callbacks",r._callbacks);return r.options}));o(this,"constructor",a);return fn}}};var v=l;export default v;

