// is-valid-app@0.2.1 downloaded from https://ga.jspm.io/npm:is-valid-app@0.2.1/index.js

import r from"lazy-cache";import e from"debug";import i from"is-registered";import t from"is-valid-instance";var a={};var n=r(null);var o=null;require=n;e;i;t;require=o;a=n;var l=a;var m={};var s=l;m=function(r,e,i){if("string"!==typeof e)throw new TypeError("expected plugin name to be a string");if(!s.isValid(r,i))return false;if(s.isRegistered(r,e))return false;var t=s.debug("base:generate:"+e);t("initializing from <%s>",void 0&&(void 0).id||new URL(import.meta.url.slice(0,import.meta.url.lastIndexOf("/"))).pathname);return true};var u=m;export default u;

