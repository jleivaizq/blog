// write-json@0.2.2 downloaded from https://ga.jspm.io/npm:write-json@0.2.2/index.js

import n from"write";var t={};var r=n;t=function writeJson(n,t,i){r(n,JSON.stringify(t,null,2),i)};t.sync=function writeJsonSync(n,t){try{r.sync(n,JSON.stringify(t,null,2))}catch(n){throw n}};var i=t;const o=t.sync;export default i;export{o as sync};

