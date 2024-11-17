// async-settle@0.2.1 downloaded from https://ga.jspm.io/npm:async-settle@0.2.1/index.js

import e from"async-done";var t={};var a=e;function settle(e,t){a(e,(function(e,a){var l={};if(null!=e){l.state="error";l.value=e}else{l.state="success";l.value=a}t(null,l)}))}t=settle;var l=t;export default l;

