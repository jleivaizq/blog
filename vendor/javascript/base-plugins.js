// base-plugins@0.4.13 downloaded from https://ga.jspm.io/npm:base-plugins@0.4.13/index.js

import s from"is-registered";import t from"define-property";import i from"isobject";var e={};var n=s;var r=t;var u=i;e=function plugin(){return function(s){if(!n(s,"base-plugins")){s.fns||r(s,"fns",[]);r(s,"use",use);r(s,"run",(function(s){if(u(s)){decorate(s);var t=this.fns.length;var i=-1;while(++i<t)s.use(this.fns[i]);return this}}))}};function decorate(s){if(!s.use){r(s,"fns",s.fns||[]);r(s,"use",use);s.use(plugin())}}function use(s,t){var i=s.call(this,this,this.base||{},this.env||{},t||{});"function"===typeof i&&this.fns.push(i);this.emit&&this.emit("use",i,this);return this}};var f=e;export default f;

