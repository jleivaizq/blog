// load-pkg@3.0.1 downloaded from https://ga.jspm.io/npm:load-pkg@3.0.1/index.js

import r from"fs";import n from"find-pkg";import t from"process";var o={};var c=t;var f=r;var e=n;o=function(r,n){if("function"===typeof r){n=r;r=null}if("function"!==typeof n)throw new TypeError("load-pkg async expects a callback function");e(r||c.cwd(),(function(r,t){if(r)return n(r);f.readFile(t,"utf8",(function(r,t){if(r)return n(r);n(null,JSON.parse(t))}))}))};o.sync=function(r){try{var n=e.sync(r||c.cwd());var t=f.readFileSync(n,"utf8");return JSON.parse(t)}catch(r){}return null};var a=o;const i=o.sync;export default a;export{i as sync};

