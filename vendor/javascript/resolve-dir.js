// resolve-dir@0.1.1 downloaded from https://ga.jspm.io/npm:resolve-dir@0.1.1/index.js

import r from"path";import o from"expand-tilde";import a from"global-modules";var t={};var e=r;var i=o;var l=a;t=function resolveDir(r){"~"===r.charAt(0)&&(r=i(r));"@"===r.charAt(0)&&(r=e.join(l,r.slice(1)));return r};var m=t;export default m;

