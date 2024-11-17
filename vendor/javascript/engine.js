// engine@0.1.12 downloaded from https://ga.jspm.io/npm:engine@0.1.12/index.js

import e from"lazy-cache";import t from"set-value";import r from"get-value";import n from"kind-of";import i from"collection-visit";import a from"object.omit";import s from"assign-deep";var o={};var p=e(null);var c=null;require=p;t;r;n;i;a;s;p.reEscapedHtml=/&(?:amp|lt|gt|quot|#39|#96);/g;p.reUnescapedHtml=/[&<>"'`]/g;p.reHasEscapedHtml=RegExp(p.reEscapedHtml.source);p.reHasUnescapedHtml=RegExp(p.reUnescapedHtml.source);p.reEsTemplate=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;p.reEscape=/<%-([\s\S]+?)%>/g;p.reEvaluate=/<%([\s\S]+?)%>/g;p.reInterpolate=/<%=([\s\S]+?)%>/g;p.delimiters=/<%-([\s\S]+?)%>|<%=([\s\S]+?)%>|\$\{([^\\}]*(?:\\.[^\\}]*)*)\}|<%([\s\S]+?)%>$/g;p.reNoMatch=/($^)/;p.reUnescapedString=/['\n\r\u2028\u2029\\]/g;p.reEmptyStringLeading=/\b__p \+= '';/g;p.reEmptyStringMiddle=/\b(__p \+=) '' \+/g;p.reEmptyStringTrailing=/(__e\(.*?\)|\b__t\)) \+\n'';/g;p.htmlEscapes={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"};p.htmlUnescapes={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"};p.escapeHtmlChar=function escapeHtmlChar(e){return p.htmlEscapes[e]};p.identity=function identity(e){return e};p.escape=function escape(e){e=p.baseToString(e);return e&&p.reHasUnescapedHtml.test(e)?e.replace(p.reUnescapedHtml,p.escapeHtmlChar):e};p.baseToString=function baseToString(e){return null==e?"":e+""};p.tryCatch=function tryCatch(e){try{return e.call()}catch(e){return e}};p.escapeStringChar=function escapeStringChar(e){return"\\"+{"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"}[e]};require=c;o=p;var u=o;var l={};var g=u;function Engine(e){if(!(this instanceof Engine))return new Engine(e);this.options=e||{};this.init(this.options)}Engine.prototype.init=function(e){this.imports=e.imports||{};e.variable="";this.settings={};this.counter=0;this.cache={};e.escape=e.escape||g.reEscape;e.evaluate=e.evaluate||g.reEvaluate;e.interpolate=e.interpolate||g.reInterpolate;e.helpers&&this.helpers(e.helpers);e.data&&this.data(e.data)};Engine.prototype.helper=function(e,t){"object"===typeof e?this.helpers(e):g.set(this.imports,e,t);return this};Engine.prototype.helpers=function(e){return this.visit("helper",e)};Engine.prototype.data=function(e,t){this.cache.data=this.cache.data||{};"object"===typeof e?this.visit("data",e):g.set(this.cache.data,e,t);return this};Engine.prototype._regex=function(e){e=g.assign({},this.options,e);if(!e.interpolate&&!e.regex&&!e.escape&&!e.evaluate)return g.delimiters;var t=e.interpolate||g.reNoMatch;"regexp"===g.typeOf(e.regex)&&(t=e.regex);var r=(e.escape||g.reNoMatch).source+"|"+t.source+"|"+(t===g.reInterpolate?g.reEsTemplate:g.reNoMatch).source+"|"+(e.evaluate||g.reNoMatch).source;return RegExp(r+"|$","g")};Engine.prototype.compile=function(e,t,r){var n=g.assign;var i=this;if(!(this instanceof Engine)){"object"!==g.typeOf(t)&&(t={});i=new Engine(t)}var a=t||{};r=n({},i.settings,a.settings,r);a=n({},i.options,r,a);e=String(e);var s=n({},a.imports,a.helpers,r.imports);s.escape=g.escape;n(s,g.omit(i.imports,"engine"));n(s,g.omit(i.cache.data,"engine"));s.engine=i;var o=Object.keys(s);var p=o.map((function(e){return s[e]}));var c;var u;var l=0;var h="__p += '";var m="//# sourceURL="+("sourceURL"in a?a.sourceURL:"engine.templateSources["+ ++i.counter+"]")+"\n";var f=i._regex(a);e.replace(f,(function(t,r,n,i,a,s){n||(n=i);h+=e.slice(l,s).replace(g.reUnescapedString,g.escapeStringChar);if(r){c=true;h+="' +\n__e("+r+") +\n'"}if(a){u=true;h+="';\n"+a+";\n__p += '"}n&&(h+="' +\n((__t = ("+n+")) == null ? '' : __t) +\n'");l=s+t.length;return t}));h+="';\n";var v=a.variable;v||(h="with (obj) {\n"+h+"\n}\n");h=(u?h.replace(g.reEmptyStringLeading,""):h).replace(g.reEmptyStringMiddle,"$1").replace(g.reEmptyStringTrailing,"$1;");h="function("+(v||"obj")+") {\n"+(v?"":"(obj || (obj = {}));\n")+'var __t, __p = ""'+(c?", __e = escape":"")+(u?', __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, "") }\n':";\n")+h+"return __p\n}";var d=g.tryCatch((function(){return Function(o,m+"return "+h).apply(null,p)}));d.source=h;if(d instanceof Error)throw d;this&&this.cache&&this.cache.data&&(d=d.bind(this.cache.data));return d};Engine.prototype.render=function(e,t){var r=this.cache.data||{};var n=g.assign;r=n({},r,t);r=n({},r,r.imports||{});r=n({},r,r.helpers||{});return"function"===typeof e?e(r):this.compile(e)(r)};Engine.prototype.visit=function(e,t){g.visit(this,e,t);return this};l=Engine;l.utils=g;var h=l;const m=l.utils;export default h;export{m as utils};

