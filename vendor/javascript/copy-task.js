// copy-task@0.1.0 downloaded from https://ga.jspm.io/npm:copy-task@0.1.0/index.js

var o={};o=function copy(o,t,e){if("function"!==typeof o.task)throw new Error("expected `from` to use `composer`.");if("function"!==typeof t.task)throw new Error("expected `to` to use `composer`.");if("string"!==typeof e)throw new TypeError("expected `name` to be a string");if(!(e in o.tasks))throw new Error('"'+e+'" not found in tasks');var r=o.tasks[e];var n=r.deps||[];t.task(e,r.options,r.deps,r.fn);n.forEach((function(e){copy(o,t,e)}))};var t=o;export default t;

