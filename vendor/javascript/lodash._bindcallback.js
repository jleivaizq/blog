// lodash._bindcallback@3.0.1 downloaded from https://ga.jspm.io/npm:lodash._bindcallback@3.0.1/index.js

var n={};function bindCallback(n,r,t){if("function"!=typeof n)return identity;if(void 0===r)return n;switch(t){case 1:return function(t){return n.call(r,t)};case 3:return function(t,e,u){return n.call(r,t,e,u)};case 4:return function(t,e,u,c){return n.call(r,t,e,u,c)};case 5:return function(t,e,u,c,i){return n.call(r,t,e,u,c,i)}}return function(){return n.apply(r,arguments)}}function identity(n){return n}n=bindCallback;var r=n;export default r;

