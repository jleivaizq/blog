// cli-cursor@1.0.2 downloaded from https://ga.jspm.io/npm:cli-cursor@1.0.2/index.js

import o from"restore-cursor";import t from"process";var r={};var e=t;var s=o;var i=false;r.show=function(){i=false;e.stdout.write("[?25h")};r.hide=function(){s();i=true;e.stdout.write("[?25l")};r.toggle=function(o){void 0!==o&&(i=o);i?r.show():r.hide()};const f=r.show,u=r.hide,a=r.toggle;export default r;export{u as hide,f as show,a as toggle};

