// is-binary-buffer@1.0.0 downloaded from https://ga.jspm.io/npm:is-binary-buffer@1.0.0/index.js

import r from"is-buffer";var e={};var f=r;e=function isBinary(r){if(!f(r))return false;var e=r.length;var i=e<512?e:512;if(0===e)return false;var t=0;if(e>=3&&239==r[0]&&187==r[1]&&191==r[2])return false;if(e>=4&&0===r[0]&&0===r[1]&&254==r[2]&&255==r[3])return false;if(e>=4&&255==r[0]&&254==r[1]&&0===r[2]&&0===r[3])return false;if(e>=4&&132==r[0]&&49==r[1]&&149==r[2]&&51==r[3])return false;if(i>=5&&"%PDF-"==r.slice(0,5))return true;if(e>=2&&254==r[0]&&255==r[1])return false;if(e>=2&&255==r[0]&&254==r[1])return false;for(var n=0;n<i;n++){if(0===r[n])return true;if((r[n]<7||r[n]>14)&&(r[n]<32||r[n]>127)){if(r[n]>193&&r[n]<224&&n+1<i){n++;if(r[n]>127&&r[n]<192)continue}else if(r[n]>223&&r[n]<240&&n+2<i){n++;if(r[n]>127&&r[n]<192&&r[n+1]>127&&r[n+1]<192){n++;continue}}t++;if(n>32&&100*t/i>10)return true}}return 100*t/i>10};var i=e;export default i;

