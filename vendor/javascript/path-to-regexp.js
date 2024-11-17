// path-to-regexp@1.9.0 downloaded from https://ga.jspm.io/npm:path-to-regexp@1.9.0/index.js

import*as e from"isarray";var r=e;try{"default"in e&&(r=e.default)}catch(e){}var t={};var n=r;t=pathToRegexp;t.parse=parse;t.compile=compile;t.tokensToFunction=tokensToFunction;t.tokensToRegExp=tokensToRegExp;
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */var a=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */function parse(e,r){var t=[];var n=0;var o=0;var i="";var p=r&&r.delimiter||"/";var s;while((s=a.exec(e))!=null){var c=s[0];var l=s[1];var u=s.index;i+=e.slice(o,u);o=u+c.length;if(l)i+=l[1];else{var f=e[o];var g=s[2];var v=s[3];var h=s[4];var x=s[5];var d=s[6];var m=s[7];if(i){t.push(i);i=""}var T=g!=null&&f!=null&&f!==g;var y=d==="+"||d==="*";var R=d==="?"||d==="*";var k=g||p;var E=h||x;var w=g||(typeof t[t.length-1]==="string"?t[t.length-1]:"");t.push({name:v||n++,prefix:g||"",delimiter:k,optional:R,repeat:y,partial:T,asterisk:!!m,pattern:E?escapeGroup(E):m?".*":restrictBacktrack(k,w)})}}o<e.length&&(i+=e.substr(o));i&&t.push(i);return t}function restrictBacktrack(e,r){return!r||r.indexOf(e)>-1?"[^"+escapeString(e)+"]+?":escapeString(r)+"|(?:(?!"+escapeString(r)+")[^"+escapeString(e)+"])+?"}
/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */function compile(e,r){return tokensToFunction(parse(e,r),r)}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */function encodeURIComponentPretty(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */function encodeAsterisk(e){return encodeURI(e).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function tokensToFunction(e,r){var t=new Array(e.length);for(var a=0;a<e.length;a++)typeof e[a]==="object"&&(t[a]=new RegExp("^(?:"+e[a].pattern+")$",flags(r)));return function(r,a){var o="";var i=r||{};var p=a||{};var s=p.pretty?encodeURIComponentPretty:encodeURIComponent;for(var c=0;c<e.length;c++){var l=e[c];if(typeof l!=="string"){var u=i[l.name];var f;if(u==null){if(l.optional){l.partial&&(o+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(n(u)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(u)+"`");if(u.length===0){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var g=0;g<u.length;g++){f=s(u[g]);if(!t[c].test(f))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(f)+"`");o+=(g===0?l.prefix:l.delimiter)+f}}else{f=l.asterisk?encodeAsterisk(u):s(u);if(!t[c].test(f))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+f+'"');o+=l.prefix+f}}else o+=l}return o}}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */function escapeString(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */function escapeGroup(e){return e.replace(/([=!:$\/()])/g,"\\$1")}
/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */function attachKeys(e,r){e.keys=r;return e}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */function flags(e){return e&&e.sensitive?"":"i"}
/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */function regexpToRegexp(e,r){var t=e.source.match(/\((?!\?)/g);if(t)for(var n=0;n<t.length;n++)r.push({name:n,prefix:null,delimiter:null,optional:false,repeat:false,partial:false,asterisk:false,pattern:null});return attachKeys(e,r)}
/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */function arrayToRegexp(e,r,t){var n=[];for(var a=0;a<e.length;a++)n.push(pathToRegexp(e[a],r,t).source);var o=new RegExp("(?:"+n.join("|")+")",flags(t));return attachKeys(o,r)}
/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */function stringToRegexp(e,r,t){return tokensToRegExp(parse(e,t),r,t)}
/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */function tokensToRegExp(e,r,t){if(!n(r)){t=/** @type {!Object} */r||t;r=[]}t=t||{};var a=t.strict;var o=t.end!==false;var i="";for(var p=0;p<e.length;p++){var s=e[p];if(typeof s==="string")i+=escapeString(s);else{var c=escapeString(s.prefix);var l="(?:"+s.pattern+")";r.push(s);s.repeat&&(l+="(?:"+c+l+")*");l=s.optional?s.partial?c+"("+l+")?":"(?:"+c+"("+l+"))?":c+"("+l+")";i+=l}}var u=escapeString(t.delimiter||"/");var f=i.slice(-u.length)===u;a||(i=(f?i.slice(0,-u.length):i)+"(?:"+u+"(?=$))?");i+=o?"$":a&&f?"":"(?="+u+"|$)";return attachKeys(new RegExp("^"+i,flags(t)),r)}
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */function pathToRegexp(e,r,t){if(!n(r)){t=/** @type {!Object} */r||t;r=[]}t=t||{};return e instanceof RegExp?regexpToRegexp(e,/** @type {!Array} */r):n(e)?arrayToRegexp(/** @type {!Array} */e,/** @type {!Array} */r,t):stringToRegexp(/** @type {string} */e,/** @type {!Array} */r,t)}var o=t;const i=t.parse,p=t.compile,s=t.tokensToFunction,c=t.tokensToRegExp;export{p as compile,o as default,i as parse,s as tokensToFunction,c as tokensToRegExp};

