// convert-source-map@1.9.0 downloaded from https://ga.jspm.io/npm:convert-source-map@1.9.0/index.js

import*as e from"fs";import*as t from"path";import r from"buffer";var o="default"in e?e.default:e;var n="default"in t?t.default:t;var i={};var m=r.Buffer;var a=o;var u=n;Object.defineProperty(i,"commentRegex",{get:function getCommentRegex(){return/^\s*\/(?:\/|\*)[@#]\s+sourceMappingURL=data:(?:application|text)\/json;(?:charset[:=]\S+?;)?base64,(?:.*)$/gm}});Object.defineProperty(i,"mapFileCommentRegex",{get:function getMapFileCommentRegex(){return/(?:\/\/[@#][ \t]+sourceMappingURL=([^\s'"`]+?)[ \t]*$)|(?:\/\*[@#][ \t]+sourceMappingURL=([^\*]+?)[ \t]*(?:\*\/){1}[ \t]*$)/gm}});var p;p="undefined"!==typeof m?"function"===typeof m.from?decodeBase64WithBufferFrom:decodeBase64WithNewBuffer:decodeBase64WithAtob;function decodeBase64WithBufferFrom(e){return m.from(e,"base64").toString()}function decodeBase64WithNewBuffer(e){if("number"===typeof value)throw new TypeError("The value to decode must not be of type number.");return new m(e,"base64").toString()}function decodeBase64WithAtob(e){return decodeURIComponent(escape(atob(e)))}function stripComment(e){return e.split(",").pop()}function readFromFileMap(e,t){var r=i.mapFileCommentRegex.exec(e);var o=r[1]||r[2];var n=u.resolve(t,o);try{return a.readFileSync(n,"utf8")}catch(e){throw new Error("An error occurred while trying to read the map file at "+n+"\n"+e)}}function Converter(e,t){t=t||{};t.isFileComment&&(e=readFromFileMap(e,t.commentFileDir));t.hasComment&&(e=stripComment(e));t.isEncoded&&(e=p(e));(t.isJSON||t.isEncoded)&&(e=JSON.parse(e));this.sourcemap=e}Converter.prototype.toJSON=function(e){return JSON.stringify(this.sourcemap,null,e)};"undefined"!==typeof m?"function"===typeof m.from?Converter.prototype.toBase64=encodeBase64WithBufferFrom:Converter.prototype.toBase64=encodeBase64WithNewBuffer:Converter.prototype.toBase64=encodeBase64WithBtoa;function encodeBase64WithBufferFrom(){var e=this.toJSON();return m.from(e,"utf8").toString("base64")}function encodeBase64WithNewBuffer(){var e=this.toJSON();if("number"===typeof e)throw new TypeError("The json to encode must not be of type number.");return new m(e,"utf8").toString("base64")}function encodeBase64WithBtoa(){var e=this.toJSON();return btoa(unescape(encodeURIComponent(e)))}Converter.prototype.toComment=function(e){var t=this.toBase64();var r="sourceMappingURL=data:application/json;charset=utf-8;base64,"+t;return e&&e.multiline?"/*# "+r+" */":"//# "+r};Converter.prototype.toObject=function(){return JSON.parse(this.toJSON())};Converter.prototype.addProperty=function(e,t){if(this.sourcemap.hasOwnProperty(e))throw new Error('property "'+e+'" already exists on the sourcemap, use set property instead');return this.setProperty(e,t)};Converter.prototype.setProperty=function(e,t){this.sourcemap[e]=t;return this};Converter.prototype.getProperty=function(e){return this.sourcemap[e]};i.fromObject=function(e){return new Converter(e)};i.fromJSON=function(e){return new Converter(e,{isJSON:true})};i.fromBase64=function(e){return new Converter(e,{isEncoded:true})};i.fromComment=function(e){e=e.replace(/^\/\*/g,"//").replace(/\*\/$/g,"");return new Converter(e,{isEncoded:true,hasComment:true})};i.fromMapFileComment=function(e,t){return new Converter(e,{commentFileDir:t,isFileComment:true,isJSON:true})};i.fromSource=function(e){var t=e.match(i.commentRegex);return t?i.fromComment(t.pop()):null};i.fromMapFileSource=function(e,t){var r=e.match(i.mapFileCommentRegex);return r?i.fromMapFileComment(r.pop(),t):null};i.removeComments=function(e){return e.replace(i.commentRegex,"")};i.removeMapFileComments=function(e){return e.replace(i.mapFileCommentRegex,"")};i.generateMapFileComment=function(e,t){var r="sourceMappingURL="+e;return t&&t.multiline?"/*# "+r+" */":"//# "+r};const f=i.fromObject,s=i.fromJSON,c=i.fromBase64,d=i.fromComment,l=i.fromMapFileComment,h=i.fromSource,C=i.fromMapFileSource,v=i.removeComments,y=i.removeMapFileComments,g=i.generateMapFileComment;export{i as default,c as fromBase64,d as fromComment,s as fromJSON,l as fromMapFileComment,C as fromMapFileSource,f as fromObject,h as fromSource,g as generateMapFileComment,v as removeComments,y as removeMapFileComments};
