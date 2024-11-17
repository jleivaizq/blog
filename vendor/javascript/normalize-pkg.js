// normalize-pkg@0.3.20 downloaded from https://ga.jspm.io/npm:normalize-pkg@0.3.20/index.js

import e from"path";import r from"component-emitter";import i from"map-schema";import t from"export-files";import o from"fs";import n from"lazy-cache";import a from"arr-union";import s from"array-unique";import l from"extend-shallow";import m from"fs-exists-sync";import f from"get-value";import p from"kind-of";import c from"mixin-deep";import d from"omit-empty";import u from"parse-git-config";import h from"repo-utils";import g from"semver";import v from"stringify-author";import y from"process";var b={};b=t(new URL(import.meta.url.slice(0,import.meta.url.lastIndexOf("/"))).pathname);var z=b;var j={};j=t(new URL(import.meta.url.slice(0,import.meta.url.lastIndexOf("/"))).pathname);var k=j;var w={};function _nullRequire(e){var r=new Error("Cannot find module '"+e+"'");r.code="MODULE_NOT_FOUND";throw r}var P=o;var q=e;var x=n(null);var N=null;require=x;a;s;l;m;f;p;c;d;u;h;g;v;require=N;x.isEmpty=function(e){return 0===Object.keys(x.omitEmpty(e)).length};x.isObject=function(e){return"object"===x.typeOf(e)};x.isString=function(e){return e&&"string"===typeof e};x.arrayify=function(e){return e?Array.isArray(e)?e:[e]:[]};x.requirePackage=function(e){e=q.resolve(e);try{var r=P.statSync(e);r.isDirectory()?e=q.join(e,"package.json"):/package\.json$/.test(e)||(e=q.join(q.dirname(e),"package.json"));return _nullRequire(e)}catch(e){}return{}};x.stripSlash=function stripSlash(e){return e.replace(/\W+$/,"")};w=x;var O=w;var D={};D=["name","private","description","version","homepage","author","authors","maintainers","contributors","collaborators","repository","bugs","license","licenses","files","main","preferGlobal","bin","engines","scripts","dependencies","devDependencies","keywords"];var S=D;var E={};var R=i;var U=z;var _=k;var G=O;var I=S;E=function(e){var r=G.merge({},e);r.keys=G.union([],I,r.keys);r.omit=G.arrayify(r.omit);var i=new R(r).field("name",["string"],{validate:_.name,normalize:U.name,required:true}).field("private","boolean").field("description","string").field("version","string",{validate:_.version,default:"0.1.0",required:true}).field("homepage","string",{normalize:U.homepage}).field("author",["object","string"],{normalize:U.person}).field("authors","array",{normalize:U.person}).field("maintainers","array",{normalize:U.person}).field("contributors","array",{normalize:U.person}).field("collaborators","array",{normalize:U.person}).field("bugs",["object","string"],{normalize:U.bugs}).field("repository",["object","string"],{normalize:U.repository}).field("license","string",{normalize:U.license,default:"MIT"}).field("licenses",["array","object"],{normalize:U.licenses,validate:_.licenses}).field("files","array",{normalize:U.files}).field("main","string",{normalize:U.main,validate:function(e){return G.exists(e)}}).field("preferGlobal","boolean",{validate:_.preferGlobal}).field("bin",["object","string"],{normalize:U.bin}).field("scripts","object",{normalize:U.scripts}).field("engines","object",{default:{node:">= 0.10.0"}}).field("engine-strict","boolean",{validate:_["engine-strict"]}).field("engineStrict","boolean",{normalize:U.engineStrict}).field("dependencies","object").field("devDependencies","object").field("peerDependencies","object").field("optionalDependencies","object").field("man",["array","string"]).field("keywords","array",{normalize:U.keywords});i.addFields(r);return i};var L=E;var A={};var F=y;var M=e;var T=r;var $=L;var C=O;function NormalizePkg(e){if(!(this instanceof NormalizePkg))return new NormalizePkg(e);this.options=e||{};this.schema=$(this.options);this.data=this.schema.data;this.schema.on("warning",this.emit.bind(this,"warning"));this.schema.on("error",this.emit.bind(this,"error"));this.schema.union=function(e,r,i){r[e]=C.arrayify(r[e]);r[e]=C.union([],r[e],C.arrayify(i))}}T(NormalizePkg.prototype);NormalizePkg.prototype.field=function(e,r,i){"function"===typeof i&&(i={normalize:i});i=i||{};true===i.extend&&(i=C.merge({},this.schema.get(e),i));this.schema.field(e,r,i);return this};NormalizePkg.prototype.normalize=function(e,r){"undefined"===typeof e&&(e=M.resolve(F.cwd(),"package.json"));"string"===typeof e&&(e=C.requirePackage(e));if(r&&r.fields){var i=r.fields;delete r.fields;for(var t in i)if(i.hasOwnProperty(t)){var o=C.merge({},r,i[t]);this.field(t,o.type,o)}}this.schema.options=C.merge({},this.schema.options,r);return this.schema.normalize(e,this.schema.options)};A=NormalizePkg;var W=A;export default W;

