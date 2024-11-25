// gray-matter@3.1.1 downloaded from https://ga.jspm.io/npm:gray-matter@3.1.1/index.js

import _fs from"fs";import _extendShallow from"extend-shallow";import _jsYaml from"js-yaml";import _stripBomString from"strip-bom-string";import _kindOf from"kind-of";import _buffer from"buffer";var exports={};exports=function(e,t){var r=t.engines[e]||t.engines[aliase(e)];if("undefined"===typeof r)throw new Error('gray-matter engine "'+e+'" is not registered');"function"===typeof r&&(r={parse:r});return r};function aliase(e){switch(e.toLowerCase()){case"js":case"javascript":return"javascript";case"coffee":case"coffeescript":case"cson":return"coffee";case"yaml":case"yml":return"yaml";default:return e}}var _engine=exports;var exports$1={};var extend=_extendShallow;var yaml=_jsYaml;var engines=exports$1=exports$1;engines.yaml={parse:yaml.safeLoad.bind(yaml),stringify:yaml.safeDump.bind(yaml)};engines.json={parse:JSON.parse.bind(JSON),stringify:function(e,t){var r=extend({replacer:null,space:2},t);return JSON.stringify(e,r.replacer,r.space)}};engines.javascript={parse:function parse(str,options,wrap){try{false!==wrap&&(str="(function() {\nreturn "+str.trim()+";\n}());");return eval(str)||{}}catch(e){if(false!==wrap&&/(unexpected|identifier)/i.test(e.message))return parse(str,options,false);throw new SyntaxError(e)}},stringify:function(){throw new Error("stringifying JavaScript is not supported")}};var _engines=exports$1;var exports$2={};var Buffer=_buffer.Buffer;var stripBom=_stripBomString;exports$2.typeOf=_kindOf;exports$2.isBuffer=function(e){return"buffer"===exports$2.typeOf(e)};exports$2.isObject=function(e){return"object"===exports$2.typeOf(e)};exports$2.toBuffer=function(e){return"string"===typeof e?new Buffer(e):e};exports$2.toString=function(e){if(exports$2.isBuffer(e))return stripBom(String(e));if("string"!==typeof e)throw new TypeError("expected input to be a string or buffer");return stripBom(e)};exports$2.arrayify=function(e){return e?Array.isArray(e)?e:[e]:[]};exports$2.startsWith=function(e,t,r){"number"!==typeof r&&(r=t.length);return e.slice(0,r)===t};var exports$3={};var extend$1=_extendShallow;var engines$1=_engines;var utils=exports$2;exports$3=function(e){var t=extend$1({},e);t.delimiters=utils.arrayify(t.delims||t.delimiters||"---");1===t.delimiters.length&&t.delimiters.push(t.delimiters[0]);t.language=(t.language||t.lang||"yaml").toLowerCase();t.engines=extend$1({},engines$1,t.parsers,t.engines);return t};var _defaults=exports$3;var exports$4={};var getEngine=_engine;var defaults=_defaults;exports$4=function(e,t,r){var n=defaults(r);var a=getEngine(e,n);if("function"!==typeof a.parse)throw new TypeError('expected "'+e+'.parse" to be a function');return a.parse(t,n)};var _parse=exports$4;var exports$5={};var extend$2=_extendShallow;var typeOf=_kindOf;var getEngine$1=_engine;var defaults$1=_defaults;exports$5=function(e,t,r){if(null==t&&null==r)switch(typeOf(e)){case"object":t=e.data;r={};break;case"string":return e;default:throw new TypeError("expected file to be a string or object")}var n=e.content;var a=defaults$1(r);if(null==t){if(!a.data)return e;t=a.data}var i=e.language||a.language;var s=getEngine$1(i,a);if("function"!==typeof s.stringify)throw new TypeError('expected "'+i+'.stringify" to be a function');t=extend$2({},e.data,t);var o=a.delimiters[0];var f=a.delimiters[1];var l=s.stringify(t,r).trim();var u="";"{}"!==l&&(u=newline(o)+newline(l)+newline(f));"string"===typeof e.excerpt&&""!==e.excerpt&&-1===n.indexOf(e.excerpt.trim())&&(u+=newline(e.excerpt)+newline(f));return u+newline(n)};function newline(e){return"\n"!==e.slice(-1)?e+"\n":e}var _stringify=exports$5;var exports$6={};var defaults$2=_defaults;exports$6=function(e,t){var r=defaults$2(t);null==e.data&&(e.data={});if("function"===typeof r.excerpt)return r.excerpt(e,r);var n=e.data.excerpt_separator||r.excerpt_separator;if(null==n&&(false===r.excerpt||null==r.excerpt))return e;var a=n||r.delimiters[0];"string"===typeof r.excerpt&&(a=r.excerpt);var i=e.content.indexOf(a);-1!==i&&(e.excerpt=e.content.slice(0,i));return e};var _excerpt=exports$6;var exports$7={};var typeOf$1=_kindOf;var stringify=_stringify;var utils$1=exports$2;exports$7=function(e){"object"!==typeOf$1(e)&&(e={content:e});"object"!==typeOf$1(e.data)&&(e.data={});null==e.content&&(e.content=e.contents);var t=utils$1.toBuffer(e.content);Object.defineProperty(e,"orig",{configurable:true,enumerable:false,writable:true,value:t});Object.defineProperty(e,"matter",{configurable:true,enumerable:false,writable:true,value:e.matter||""});Object.defineProperty(e,"language",{configurable:true,enumerable:false,writable:true,value:e.language||""});Object.defineProperty(e,"stringify",{configurable:true,enumerable:false,writable:true,value:function(t,r){r&&r.language&&(e.language=r.language);return stringify(e,t,r)}});e.content=utils$1.toString(e.content);e.excerpt="";return e};var _toFile=exports$7;var exports$8={};var fs=_fs;var extend$3=_extendShallow;var parse=_parse;var defaults$3=_defaults;var stringify$1=_stringify;var excerpt=_excerpt;var engines$2=_engines;var toFile=_toFile;var utils$2=exports$2;var cache={};function matter(e,t){var r={data:{},content:e,excerpt:"",orig:e};if(""===e)return r;r=toFile(e);var n=cache[r.content];if(!t){if(n){r=extend$3({},n);r.orig=n.orig;return r}cache[r.content]=r}return parseMatter(r,t)}function parseMatter(e,t){var r=defaults$3(t);var n=r.delimiters[0];var a="\n"+r.delimiters[1];var i=e.content;r.language&&(e.language=r.language);var s=n.length;if(!utils$2.startsWith(i,n,s)){excerpt(e,r);return e}if(i.charAt(s)===n.slice(-1))return e;i=i.slice(s);var o=i.length;var f=matter.language(i,r);if(f.name){e.language=f.name;i=i.slice(f.raw.length)}var l=i.indexOf(a);-1===l&&(l=o);e.matter=i.slice(0,l);e.data=parse(e.language,e.matter,r);if(l===o)e.content="";else{e.content=i.slice(l+a.length);"\r"===e.content[0]&&(e.content=e.content.slice(1));"\n"===e.content[0]&&(e.content=e.content.slice(1))}excerpt(e,r);return e}matter.engines=engines$2;matter.stringify=function(e,t,r){"string"===typeof e&&(e=matter(e,r));return stringify$1(e,t,r)};matter.read=function(e,t){var r=fs.readFileSync(e,"utf8");var n=matter(r,t);n.path=e;return n};matter.test=function(e,t){var r=defaults$3(t);return utils$2.startsWith(e,r.delimiters[0])};matter.language=function(e,t){var r=defaults$3(t);var n=r.delimiters[0];matter.test(e)&&(e=e.slice(n.length));var a=e.slice(0,e.search(/\r?\n/));return{raw:a,name:a?a.trim():""}};exports$8=matter;var exports$9=exports$8;export default exports$9;
