// supports-color@2.0.0 downloaded from https://ga.jspm.io/npm:supports-color@2.0.0/index.js

import r from"process";var o={};var n=r;var e=n.argv;var t=e.indexOf("--");var hasFlag=function(r){r="--"+r;var o=e.indexOf(r);return-1!==o&&(-1===t||o<t)};o=function(){return"FORCE_COLOR"in n.env||!(hasFlag("no-color")||hasFlag("no-colors")||hasFlag("color=false"))&&(!!(hasFlag("color")||hasFlag("colors")||hasFlag("color=true")||hasFlag("color=always"))||!(n.stdout&&!n.stdout.isTTY)&&("win32"===n.platform||("COLORTERM"in n.env||"dumb"!==n.env.TERM&&!!/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(n.env.TERM))))}();var a=o;export default a;

