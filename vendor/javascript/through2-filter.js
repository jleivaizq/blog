// through2-filter@2.0.0 downloaded from https://ga.jspm.io/npm:through2-filter@2.0.0/index.js

import t from"through2";import o from"xtend";var r={};r=make;r.ctor=ctor;r.objCtor=objCtor;r.obj=obj;var n=t;var e=o;function ctor(t,o){if("function"==typeof t){o=t;t={}}var r=n.ctor(t,(function(t,r,n){this.options.wantStrings&&(t=t.toString());o.call(this,t,this._index++)&&this.push(t);return n()}));r.prototype._index=0;return r}function objCtor(t,o){if("function"===typeof t){o=t;t={}}t=e({objectMode:true,highWaterMark:16},t);return ctor(t,o)}function make(t,o){return ctor(t,o)()}function obj(t,o){if("function"===typeof t){o=t;t={}}t=e({objectMode:true,highWaterMark:16},t);return make(t,o)}var i=r;const c=r.ctor,a=r.objCtor,u=r.obj;export default i;export{c as ctor,u as obj,a as objCtor};

