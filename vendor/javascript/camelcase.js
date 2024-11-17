// camelcase@3.0.0 downloaded from https://ga.jspm.io/npm:camelcase@3.0.0/index.js

var e={};function preserveCamelCase(e){var r=false;for(var t=0;t<e.length;t++){var a=e.charAt(t);if(r&&/[a-zA-Z]/.test(a)&&a.toUpperCase()===a){e=e.substr(0,t)+"-"+e.substr(t);r=false;t++}else r=a.toLowerCase()===a}return e}e=function(){var e=[].map.call(arguments,(function(e){return e.trim()})).filter((function(e){return e.length})).join("-");if(!e.length)return"";if(1===e.length)return e.toLowerCase();if(!/[_.\- ]+/.test(e))return e===e.toUpperCase()?e.toLowerCase():e[0]!==e[0].toLowerCase()?e[0].toLowerCase()+e.slice(1):e;e=preserveCamelCase(e);return e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,r){return r.toUpperCase()}))};var r=e;export default r;

