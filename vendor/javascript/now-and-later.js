// now-and-later@0.0.6 downloaded from https://ga.jspm.io/npm:now-and-later@0.0.6/index.js

import r from"once";var e={};function noop(){}var a={create:noop,before:noop,after:noop,error:noop};function defaultExtensions(r){r=r||{};return{create:r.create||a.create,before:r.before||a.before,after:r.after||a.after,error:r.error||a.error}}function initializeResults(r){var e=Object.keys(r);var a=Array.isArray(r)?[]:{};var t=0;var n=e.length;for(t=0;t<n;t++){var o=e[t];a[o]=void 0}return a}e={defaultExtensions:defaultExtensions,noop:noop,initializeResults:initializeResults};var t=e;var n={};var o=r;var i=t;function map(r,e,a,t){if("function"===typeof a){t=a;a={}}"function"!==typeof t&&(t=i.noop);t=o(t);var n=Object.keys(r);var f=n.length;var v=f;var s=0;var u=i.initializeResults(r);var c=i.defaultExtensions(a);for(s=0;s<f;s++){var p=n[s];next(p)}function next(a){var n=r[a];var i=c.create(n,a)||{};c.before(i);e(n,o(handler));function handler(r,e){if(r){c.error(r,i);return t(r,u)}c.after(e,i);u[a]=e;0===--v&&t(r,u)}}}n=map;var f=n;var v={};var s=r;var u=t;function mapSeries(r,e,a,t){if("function"===typeof a){t=a;a={}}"function"!==typeof t&&(t=u.noop);t=s(t);var n=Object.keys(r);var o=n.length;var i=0;var f=u.initializeResults(r);var v=u.defaultExtensions(a);var c=n[i];next(c);function next(a){var u=r[a];var c=v.create(u,a)||{};v.before(c);e(u,s(handler));function handler(r,e){if(r){v.error(r,c);return t(r,f)}v.after(e,c);f[a]=e;++i>=o?t(r,f):next(n[i])}}}v=mapSeries;var c=v;var p={};p={map:f,mapSeries:c};var l=p;const x=p.map;export default l;export{x as map};

