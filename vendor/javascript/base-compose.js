// base-compose@0.2.1 downloaded from https://ga.jspm.io/npm:base-compose@0.2.1/index.js

import e from"lazy-cache";import t from"copy-task";import r from"mixin-deep";var i={};var o=e(null);var n=null;require=o;t;r;require=n;o.arrayify=function(e){return e?Array.isArray(e)?e:[e]:[]};i=o;var s=i;var a={};var p=s;function Compose(e,t,r){this.generators=p.arrayify(r);this.provider=e;this.receiver=t}Compose.prototype.options=function(e){this.iterator((function(t,r){e&&"string"===typeof e?r.option(e,t.option(e)):r.option(t.options)}));return this};Compose.prototype.data=function(e){if("function"!==typeof this.receiver.data)throw new Error("expected the base-data plugin to be registered");this.iterator((function(t,r){e&&"string"===typeof e?r.data(e,t.data(e)):r.data(t.cache.data)}));return this};Compose.prototype.engines=function(){if("function"!==typeof this.receiver.engine)throw new Error(".engines requires an instance of templates");this.iterator((function(e,t){p.merge(t.engines,e.engines)}));return this};Compose.prototype.helpers=function(){if("function"!==typeof this.receiver.helper)throw new Error(".helpers requires an instance of templates");this.iterator((function(e,t){t.asyncHelpers(e._.helpers.async);t.helpers(e._.helpers.sync)}));return this};Compose.prototype.questions=function(){if("undefined"===typeof this.receiver.questions)throw new Error("expected the base-questions plugin to be registered");this.iterator((function(e,t){for(var r in e.questions.cache)e.questions.cache.hasOwnProperty(r)&&t.question(r,e.questions.cache[r])}));return this};Compose.prototype.pipeline=function(){if("function"!==typeof this.receiver.pipeline)throw new Error("expected the base-pipeline plugin to be registered");this.iterator((function(e,t){for(var r in e.plugins)t.plugin(r,e.plugins[r])}));return this};Compose.prototype.tasks=function(e){if("function"!==typeof this.receiver.task)throw new Error("expected the base-task plugin to be registered");this.iterator((function(t,r){p.arrayify(e||Object.keys(t.tasks)).forEach((function(e){p.copyTask(t,r,e)}))}));return this};Compose.prototype.views=function(e,t){if("function"!==typeof this.receiver.create)throw new Error(".views requires an instance of templates");if("function"===typeof e){t=e;e=null}e=p.arrayify(e);this.iterator((function(r,i){var o=e.length;var n=-1;if(0===o){e=Object.keys(r.views);o=e.length}while(++n<o){var s=e[n];var a=r[s];"function"===typeof i[s]&&"undefined"!==typeof i[s].views||i.create(a.options.inflection,a.options);var p=a.views;if("function"===typeof t){for(var f in p)if(p.hasOwnProperty(f)){var c=p[f];t(f,c,p)&&i[s].addView(f,c)}}else i[s].addViews(p)}}));return this};Compose.prototype.iterator=function(e,t){if("function"===typeof e){t=e;e=null}e=p.arrayify(e||this.generators);var r=e.length;var i=-1;while(++i<r){var o=e[i];var n=o;try{if("string"===typeof o){n=this.provider.getGenerator(o);if("undefined"===typeof n){if("default"===o)continue;throw new Error('generator "'+o+'" is not registered')}}t(n,this.receiver)}catch(e){if(!this.receiver.hasListeners("error"))throw e;this.receiver.emit("error",e)}}return this};a=Compose;var f=a;var c={};var u=f;var h=s;c=function(e){return function(e){this.define("compose",(function(e,t){if(!this.isGenerator)throw new Error("expected the base-generators plugin to be registered");if(e&&"string"===typeof e||Array.isArray(e))return this.compose(this.base,e);e||(e=this.base);return new u(e,this,h.arrayify(t))}))}};var y=c;export default y;

