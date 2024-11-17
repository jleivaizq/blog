// once@1.3.3 downloaded from https://ga.jspm.io/npm:once@1.3.3/once.js

import e from"wrappy";var n="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var o={};var r=e;o=r(once);once.proto=once((function(){Object.defineProperty(Function.prototype,"once",{value:function(){return once(this||n)},configurable:true})}));function once(e){var f=function(){if(f.called)return f.value;f.called=true;return f.value=e.apply(this||n,arguments)};f.called=false;return f}var t=o;export default t;

