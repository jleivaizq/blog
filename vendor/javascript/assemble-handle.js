// assemble-handle@0.1.4 downloaded from https://ga.jspm.io/npm:assemble-handle@0.1.4/index.js

import e from"through2";var n={};var t=e;n=create("handle");n.once=create("handleOnce");function create(e){return function handleOnce(n,o){return t.obj((function(t,l,r){if(t.path||t.isNull||t.contents)if(t.isNull())r(null,t);else if("function"===typeof n.handle){"undefined"===typeof t.options&&(t.options={});n[e](o,t,r)}else r(null,t);else r()}))}}var o=n;const l=n.once;export default o;export{l as once};

