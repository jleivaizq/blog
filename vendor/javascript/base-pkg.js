// base-pkg@0.2.5 downloaded from https://ga.jspm.io/npm:base-pkg@0.2.5/index.js

import o from"util";import r from"debug";import e from"define-property";import n from"extend-shallow";import t from"is-valid-app";import i from"pkg-store";import a from"cache-base";import l from"expand-pkg";import p from"log-utils";import c from"process";var u={};var m=c;var s=o;var f=r("base:base-pkg");var g=e;var v=n;var d=t;var w=i;var b=a;var k=l;var x=p;u=function(o,r){if("function"===typeof o){r=o;o={}}return function plugin(r){if(d(r,"base-pkg")){f("initializing from <%s>",new URL(import.meta.url).pathname);var e;this.define("pkg",{configurable:true,enumerable:true,set:function(o){e=o},get:function(){if(e){decorate(r,e);return e}var n=r.cwd||m.cwd();var t=v({cwd:n},o,r.options);e=w(t);decorate(r,e);return e}});return plugin}}};function decorate(o,r){if(!r.logValue){g(r,"expand",(function(){var o=new k;var e=v({},r.data);var n=o.expand(e);var t=new b(n);return t}));g(r,"logValue",(function(o,r){console.log(x.timestamp,o,s.inspect(r,null,10))}));g(r,"logInfo",(function(o,r){r=x.colors.cyan(s.inspect(r,null,10));console.log(x.timestamp,o,r)}));g(r,"logWarning",(function(o,r){r=x.colors.yellow(s.inspect(r,null,10));console.log(x.timestamp,o,r)}));g(r,"logError",(function(o,r){r=x.colors.red(s.inspect(r,null,10));console.log(x.timestamp,o,r)}));g(r,"logSuccess",(function(o,r){r=x.colors.green(s.inspect(r,null,10));console.log(x.timestamp,o,r)}))}}var h=u;export default h;

