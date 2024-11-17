// exit-hook@1.1.1 downloaded from https://ga.jspm.io/npm:exit-hook@1.1.1/index.js

import e from"process";var t={};var i=e;var n=[];var r=false;function exit(e,t){if(!r){r=true;n.forEach((function(e){e()}));true===e&&i.exit(128+t)}}t=function(e){n.push(e);if(1===n.length){i.once("exit",exit);i.once("SIGINT",exit.bind(null,true,2));i.once("SIGTERM",exit.bind(null,true,15))}};var o=t;export default o;

