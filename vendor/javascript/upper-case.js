// upper-case@1.1.3 downloaded from https://ga.jspm.io/npm:upper-case@1.1.3/upper-case.js

var r={};var u={tr:{regexp:/[\u0069]/g,map:{i:"İ"}},az:{regexp:/[\u0069]/g,map:{i:"İ"}},lt:{regexp:/[\u0069\u006A\u012F]\u0307|\u0069\u0307[\u0300\u0301\u0303]/g,map:{"i̇":"I","j̇":"J","į̇":"Į","i̇̀":"Ì","i̇́":"Í","i̇̃":"Ĩ"}}};r=function(r,e){var a=u[e];r=null==r?"":String(r);a&&(r=r.replace(a.regexp,(function(r){return a.map[r]})));return r.toUpperCase()};var e=r;export default e;

