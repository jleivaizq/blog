// assemble-streams@0.6.0 downloaded from https://ga.jspm.io/npm:assemble-streams@0.6.0/index.js

import e from"lazy-cache";import t from"assemble-handle";import r from"is-registered";import i from"is-valid-instance";import n from"match-file";import a from"src-stream";import o from"through2";import u from"process";var s={};var f=e(null);var c=null;require=f;t;r;i;n;a;o;require=c;f.isValid=function(e,t){return!!f.isValidInstance(e,t)&&!f.isRegistered(e,"assemble-streams")};s=f;var l=s;var m={};var h=u;var d=l;m=function(e){return function appPlugin(e){if(!d.isValid(e))return appPlugin;e.define("toStream",appStream(e));return function collectionPlugin(t){if(!d.isValid(t,["views","collection"]))return collectionPlugin;t.define("toStream",collectionStream(e,this));return function viewPlugin(t){if(!d.isValid(t,["view","item","file"]))return viewPlugin;this.define("toStream",viewStream(e))}}}};function appStream(e){initHandlers(e);return function(e,t){var r=d.through.obj();r.setMaxListeners(0);if("undefined"===typeof e){h.nextTick(r.end.bind(r));return d.src(r)}var i=writeStream(r);var n=tryGetViews(this,e);if(!n&&"undefined"!==typeof e){t=e;h.nextTick(function(){Object.keys(this.views).forEach((function(e){n=this.views[e];i(n,t)}),this);r.end()}.bind(this));return d.src(r.pipe(d.handle(this,"onStream")))}h.nextTick((function(){i(n,t);r.end()}));return d.src(r.pipe(d.handle(this,"onStream")))}}function collectionStream(e,t){initHandlers(t);return function(t){var r=d.through.obj();r.setMaxListeners(0);var i=this.views;var n=writeStream(r);h.nextTick((function(){n(i,t);r.end()}));return d.src(r.pipe(d.handle(e,"onStream")))}}function viewStream(e){return function(){var t=d.through.obj();t.setMaxListeners(0);h.nextTick((function(e){t.write(e);t.end()}),this);return d.src(t.pipe(d.handle(e,"onStream")))}}function tryGetViews(e,t){try{return e.getViews(t)}catch(e){}}function filter(e,t,r){if(Array.isArray(r)){var i=r.length;var n=-1;while(++n<i){var a=r[n];if(d.match(a,t))return true}return false}return"function"===typeof r?r(e,t):"string"!==typeof r||d.match(r,t)}function writeStream(e){return function(t,r){for(var i in t)filter(i,t[i],r)&&e.write(t[i])}}function initHandlers(e){"function"===typeof e.handler&&"function"!==typeof e.onStream&&e.handler("onStream")}var p=m;export default p;
