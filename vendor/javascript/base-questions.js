// base-questions@0.7.4 downloaded from https://ga.jspm.io/npm:base-questions@0.7.4/index.js

import t from"debug";import e from"lazy-cache";import i from"base-store";import n from"clone-deep";import s from"define-property";import r from"is-valid-app";import o from"isobject";import u from"mixin-deep";import a from"question-store";import f from"process";var c={};var l=e(null);var p=null;require=l;i;n;s;r;o;u;a;require=p;l.sync=function(t,e,i){var n;l.define(t,e,{configurable:true,enumerable:true,set:function(t){n=t},get:function(){if("undefined"!==typeof n)return n;"function"===typeof i&&(i=i.call(t));n=i;return i}})};c=l;var m=c;var h={};var q=f;var d=t("base-questions");var b=m;h=function(t,e){return function plugin(e){if(b.isValid(e,"base-questions")){d("initializing from <%s>",new URL(import.meta.url).pathname);b.sync(this,"questions",(function fn(){"undefined"===typeof e.store&&this.use(b.store());var i=b.merge({},e.options,t);if(fn._questions)return fn._questions;i.store=e.store;i.globals=e.globals;i.data=e.cache.data||{};i.cwd=e.cwd||q.cwd();var n=b.Questions;var s=new n(i);fn._questions=s;var r=s.globals;var o=s.store;var u=s.data;s.on("ask",e.emit.bind(e,"ask"));s.on("answer",e.emit.bind(e,"answer"));s.on("error",(function(t){t.reason="base-questions error";e.emit("error",t)}));Object.defineProperty(s,"data",{set:function(t){u=t},get:function(){u=b.merge({},u,i.data);return b.clone(u)}});b.sync(s,"store",(function(){return e.store||o}));b.sync(s,"globals",(function(){return e.globals||r}));return s}));this.define("confirm",(function(){this.questions.confirm.apply(this.questions,arguments);return this.questions}));this.define("choices",(function(){this.questions.choices.apply(this.questions,arguments);return this.questions}));this.define("question",(function(){return this.questions.set.apply(this.questions,arguments)}));this.define("ask",(function(t,e,i){if("function"===typeof t)return this.ask(this.questions.queue,{},t);if("function"===e)return this.ask(t,{},e);if(b.isObject(t))return this.ask(this.questions.queue,t,e);"string"!==typeof t||this.questions.has(t)||this.questions.set.call(this.questions,t,e,t);this.questions.ask.call(this.questions,t,e,i)}));return plugin}}};var v=h;export default v;
