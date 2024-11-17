// parse-author@1.0.0 downloaded from https://ga.jspm.io/npm:parse-author@1.0.0/index.js

var r={};r=function(r){if("string"!==typeof r)throw new TypeError("expected author to be a string");var t=r.match(/^([^\(<]+)/);var a=r.match(/\(([^\)]+)\)/);var e=r.match(/<([^>]+)>/);var i={};t&&t[1].trim()&&(i.name=t[1].trim());e&&e[1].trim()&&(i.email=e[1].trim());a&&a[1].trim()&&(i.url=a[1].trim());return i};var t=r;export default t;

