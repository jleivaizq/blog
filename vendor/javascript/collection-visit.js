// collection-visit@0.2.3 downloaded from https://ga.jspm.io/npm:collection-visit@0.2.3/index.js

import r from"lazy-cache";import i from"map-visit";import t from"object-visit";var a={};var e=r(null);var o=null;require=e;i;t;require=o;a=e;var n=a;var v={};var l=n;function collectionVisit(r,i,t){var a;a="string"===typeof t&&i in r?r[i](t):Array.isArray(t)?l.mapVisit(r,i,t):l.visit(r,i,t);return"undefined"!==typeof a?a:r}v=collectionVisit;var c=v;export default c;

