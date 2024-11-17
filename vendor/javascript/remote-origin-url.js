// remote-origin-url@0.5.3 downloaded from https://ga.jspm.io/npm:remote-origin-url@0.5.3/index.js

import r from"parse-git-config";var n={};var i=r;function originUrl(r,n){if("function"===typeof r){n=r;r=null}i({path:r},(function(r,i){if(r){if("ENOENT"===r.code){n(null,null);return}n(r)}else{var t=i['remote "origin"'];n(null,t&&t.url)}}))}originUrl.sync=function(r){try{var n=i.sync({path:r});if(!n)return null;var t=n['remote "origin"'];return t&&t.url}catch(r){throw r}};n=originUrl;var t=n;export default t;

