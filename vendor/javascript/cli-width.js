// cli-width@1.1.1 downloaded from https://ga.jspm.io/npm:cli-width@1.1.1/index.js

import t from"tty";import i from"process";var e={};var r=i;e=e=cliWidth;e.defaultWidth=0;function cliWidth(){if(r.stdout.getWindowSize)return r.stdout.getWindowSize()[0]||e.defaultWidth;var i=t;if(i.getWindowSize)return i.getWindowSize()[1]||e.defaultWidth;if(r.env.CLI_WIDTH){var d=parseInt(r.env.CLI_WIDTH,10);if(!isNaN(d))return d}return e.defaultWidth}var d=e;const o=e.defaultWidth;export default d;export{o as defaultWidth};

