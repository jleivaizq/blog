// base-helpers@0.1.1 downloaded from https://ga.jspm.io/npm:base-helpers@0.1.1/index.js

import e from"debug";import r from"lazy-cache";import n from"define-property";import i from"is-valid-app";import t from"load-helpers";var s={};var p=e("base:helpers");var a=r(null);var l=null;require=a;n;i;t;require=l;a.isValid=function(e){if(a.isValidApp(e,"base-helpers",["app","views","collection"])){p("initializing <%s>, from <%s>",new URL(import.meta.url).pathname,(void 0).id);return true}return false};a.arrayify=function(e){return e?Array.isArray(e)?e:[e]:[]};s=a;var f=s;var o={};var u=e("base:helpers");var c=f;o=function(){return function(e){if(c.isValid(e)){"undefined"===typeof e._&&c.define(e,"_",{});"undefined"===typeof e._.helpers&&(e._.helpers={async:{},sync:{}});var r=c.loader(e._.helpers.async,{async:true});var n=c.loader(e._.helpers.sync);e.define("helper",(function(e){u('registering sync helper "%s"',e);n.apply(n,arguments);return this}));e.define("helpers",(function(){n.apply(n,arguments);return this}));e.define("asyncHelper",(function(e){u('registering async helper "%s"',e);r.apply(r,arguments);return this}));e.define("asyncHelpers",(function(){r.apply(r,arguments);return this}));e.define("getHelper",(function(e){u('getting sync helper "%s"',e);return this.get(["_.helpers.sync",e])}));e.define("getAsyncHelper",(function(e){u('getting async helper "%s"',e);return this.get(["_.helpers.async",e])}));e.define("hasHelper",(function(e){return"function"===typeof this.getHelper(e)}));e.define("hasAsyncHelper",(function(e){return"function"===typeof this.getAsyncHelper(e)}));e.define("helperGroup",(function(e,r,n){u('registering helper group "%s"',e);r=c.arrayify(r);var i=n?"async":"sync";this._.helpers[i][e]=this._.helpers[i][e]||{};var t=c.loader(this._.helpers[i][e],{async:n});t.call(t,r);return this}))}}};var h=o;export default h;

