// is-registered@0.1.5 downloaded from https://ga.jspm.io/npm:is-registered@0.1.5/index.js

import e from"define-property";import r from"isobject";var t={};var i=e;var f=r;t=function(e,r){if(!f(e)||"string"!==typeof r)return true;if("function"!==typeof e.isRegistered){i(e,"registered",{});i(e,"isRegistered",(function(r){if(e.registered.hasOwnProperty(r))return true;e.registered[r]=true;return false}))}return e.isRegistered(r)};var n=t;export default n;

