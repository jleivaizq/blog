// expand-tilde@1.2.2 downloaded from https://ga.jspm.io/npm:expand-tilde@1.2.2/index.js

import r from"path";import o from"os-homedir";import a from"process";var e={};var i=a;var t=r;var c=o;e=function expandTilde(r){var o=c();return 126===r.charCodeAt(0)?43===r.charCodeAt(1)?t.join(i.cwd(),r.slice(2)):o?t.join(o,r.slice(1)):r:r};var d=e;export default d;

