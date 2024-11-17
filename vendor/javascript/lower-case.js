// lower-case@1.1.4 downloaded from https://ga.jspm.io/npm:lower-case@1.1.4/lower-case.js

var r={};var u={tr:{regexp:/\u0130|\u0049|\u0049\u0307/g,map:{"İ":"i",I:"ı","İ":"i"}},az:{regexp:/[\u0130]/g,map:{"İ":"i",I:"ı","İ":"i"}},lt:{regexp:/[\u0049\u004A\u012E\u00CC\u00CD\u0128]/g,map:{I:"i̇",J:"j̇","Į":"į̇","Ì":"i̇̀","Í":"i̇́","Ĩ":"i̇̃"}}};r=function(r,e){var a=u[e];r=null==r?"":String(r);a&&(r=r.replace(a.regexp,(function(r){return a.map[r]})));return r.toLowerCase()};var e=r;export default e;

