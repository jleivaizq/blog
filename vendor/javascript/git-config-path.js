// git-config-path@1.0.1 downloaded from https://ga.jspm.io/npm:git-config-path@1.0.1/index.js

import r from"path";import o from"fs-exists-sync";import i from"extend-shallow";import t from"homedir-polyfill";import f from"process";var n={};var l=f;var e=r;var a=o;var p=i;var m=t;n=function(r,o){if("string"!==typeof r){o=r;r=null}var i=p({cwd:l.cwd()},o);r=r||i.type;var t=e.resolve(i.cwd,".git/config");"global"===r&&(t=e.join(m(),".gitconfig"));if(!a(t)){if("string"===typeof r)return null;t=e.join(m(),".config/git/config")}return a(t)?t:null};var c=n;export default c;

