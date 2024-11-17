// to-absolute-glob@0.1.1 downloaded from https://ga.jspm.io/npm:to-absolute-glob@0.1.1/index.js

import r from"path";import o from"extend-shallow";import e from"process";var a={};var t=e;var c=r;var v=o;a=function(r,o){var e=v({},o);e.cwd=e.cwd?c.resolve(e.cwd):t.cwd();var a=r.charAt(0);var l=r.slice(-1);var s="!"===a;s&&(r=r.slice(1));r=e.root&&"/"===r.charAt(0)?c.join(c.resolve(e.root),"."+r):c.resolve(e.cwd,r);"/"===l&&"/"!==r.slice(-1)&&(r+="/");return s?"!"+r:r};var l=a;export default l;

