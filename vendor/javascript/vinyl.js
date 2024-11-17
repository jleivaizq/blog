// vinyl@1.2.0 downloaded from https://ga.jspm.io/npm:vinyl@1.2.0/index.js

import t from"path";import e from"clone";import i from"clone-stats";import"buffer";import r from"./lib/cloneBuffer.js";import n from"./lib/isBuffer.js";import s from"stream";import o from"./lib/isStream.js";import h from"./lib/isNull.js";import a from"./lib/inspectStream.js";import p from"replace-ext";import f from"process";var c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var u={};var l=f;var m=t;var d=e;var y=i;var b=r;var w=n;var v=o;var g=h;var F=a;var j=s;var E=p;var C=["_contents","contents","stat","history","path","base","cwd"];function File(t){var e=this||c;t||(t={});var i=t.path?[t.path]:t.history;(this||c).history=i||[];(this||c).cwd=t.cwd||l.cwd();(this||c).base=t.base||(this||c).cwd;(this||c).stat=t.stat||null;(this||c).contents=t.contents||null;(this||c)._isVinyl=true;Object.keys(t).forEach((function(i){e.constructor.isCustomProp(i)&&(e[i]=t[i])}))}File.prototype.isBuffer=function(){return w((this||c).contents)};File.prototype.isStream=function(){return v((this||c).contents)};File.prototype.isNull=function(){return g((this||c).contents)};File.prototype.isDirectory=function(){return this.isNull()&&(this||c).stat&&(this||c).stat.isDirectory()};File.prototype.clone=function(t){var e=this||c;if("boolean"===typeof t)t={deep:t,contents:true};else if(t){t.deep=true===t.deep;t.contents=false!==t.contents}else t={deep:true,contents:true};var i;if(this.isStream()){i=(this||c).contents.pipe(new j.PassThrough);(this||c).contents=(this||c).contents.pipe(new j.PassThrough)}else this.isBuffer()&&(i=t.contents?b((this||c).contents):(this||c).contents);var r=new(this||c).constructor({cwd:(this||c).cwd,base:(this||c).base,stat:(this||c).stat?y((this||c).stat):null,history:(this||c).history.slice(),contents:i});Object.keys(this||c).forEach((function(i){e.constructor.isCustomProp(i)&&(r[i]=t.deep?d(e[i],true):e[i])}));return r};File.prototype.pipe=function(t,e){e||(e={});"undefined"===typeof e.end&&(e.end=true);if(this.isStream())return(this||c).contents.pipe(t,e);if(this.isBuffer()){e.end?t.end((this||c).contents):t.write((this||c).contents);return t}e.end&&t.end();return t};File.prototype.inspect=function(){var t=[];var e=(this||c).base&&(this||c).path?(this||c).relative:(this||c).path;e&&t.push('"'+e+'"');this.isBuffer()&&t.push((this||c).contents.inspect());this.isStream()&&t.push(F((this||c).contents));return"<File "+t.join(" ")+">"};File.isCustomProp=function(t){return-1===C.indexOf(t)};File.isVinyl=function(t){return t&&true===t._isVinyl||false};Object.defineProperty(File.prototype,"contents",{get:function(){return(this||c)._contents},set:function(t){if(!w(t)&&!v(t)&&!g(t))throw new Error("File.contents can only be a Buffer, a Stream, or null.");(this||c)._contents=t}});Object.defineProperty(File.prototype,"relative",{get:function(){if(!(this||c).base)throw new Error("No base specified! Can not get relative.");if(!(this||c).path)throw new Error("No path specified! Can not get relative.");return m.relative((this||c).base,(this||c).path)},set:function(){throw new Error("File.relative is generated from the base and path attributes. Do not modify it.")}});Object.defineProperty(File.prototype,"dirname",{get:function(){if(!(this||c).path)throw new Error("No path specified! Can not get dirname.");return m.dirname((this||c).path)},set:function(t){if(!(this||c).path)throw new Error("No path specified! Can not set dirname.");(this||c).path=m.join(t,m.basename((this||c).path))}});Object.defineProperty(File.prototype,"basename",{get:function(){if(!(this||c).path)throw new Error("No path specified! Can not get basename.");return m.basename((this||c).path)},set:function(t){if(!(this||c).path)throw new Error("No path specified! Can not set basename.");(this||c).path=m.join(m.dirname((this||c).path),t)}});Object.defineProperty(File.prototype,"stem",{get:function(){if(!(this||c).path)throw new Error("No path specified! Can not get stem.");return m.basename((this||c).path,(this||c).extname)},set:function(t){if(!(this||c).path)throw new Error("No path specified! Can not set stem.");(this||c).path=m.join(m.dirname((this||c).path),t+(this||c).extname)}});Object.defineProperty(File.prototype,"extname",{get:function(){if(!(this||c).path)throw new Error("No path specified! Can not get extname.");return m.extname((this||c).path)},set:function(t){if(!(this||c).path)throw new Error("No path specified! Can not set extname.");(this||c).path=E((this||c).path,t)}});Object.defineProperty(File.prototype,"path",{get:function(){return(this||c).history[(this||c).history.length-1]},set:function(t){if("string"!==typeof t)throw new Error("path should be string");t&&t!==(this||c).path&&(this||c).history.push(t)}});u=File;var N=u;export default N;

