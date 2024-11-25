// pkg-store@0.2.2 downloaded from https://ga.jspm.io/npm:pkg-store@0.2.2/index.js

import t from"fs";import r from"path";import e from"util";import i from"cache-base";import o from"lazy-cache";import a from"kind-of";import n from"union-value";import s from"write-json";import u from"process";var p={};var c=t;var f=o(null);var h=null;require=f;a;n;s;require=h;f.isObject=function(t){return"object"===f.typeOf(t)};f.exists=function(t){try{c.statSync(t);return true}catch(t){}return false};p=f;var m=p;var v={};var l=u;var d=t;var g=r;var k=e;var y=i;var P=y.namespace("data");var b=m;function Pkg(t,r){if(!(this instanceof Pkg))return new Pkg(t,r);P.call(this);if(b.isObject(t)){r=t;t=null}this.options=r||{};t=this.options.cwd||t||l.cwd();this.path=this.options.path||g.resolve(t,"package.json");var e;Object.defineProperty(this,"data",{configurable:true,enumerable:true,set:function(t){e=t},get:function(){return e||(e=this.read())}})}k.inherits(Pkg,P);Pkg.prototype.union=function(t,r){b.union(this.data,t,r);return this};Pkg.prototype.save=function(){b.writeJson.sync(this.path,this.data)};Pkg.prototype.read=function(){return b.exists(this.path)?JSON.parse(d.readFileSync(this.path,"utf8")):{}};v=Pkg;var j=v;export default j;
