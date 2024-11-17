// set-getter@0.1.1 downloaded from https://ga.jspm.io/npm:set-getter@0.1.1/index.js

import*as e from"to-object-path";var r="default"in e?e.default:e;var t={};var i=r;function isValidKey(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e}
/**
 * Defines a getter function on an object using property path notation.
 *
 * ```js
 * var obj = {};
 * getter(obj, 'foo', function() {
 *   return 'bar';
 * });
 * ```
 * @param {Object} `obj` Object to add property to.
 * @param {String|Array} `prop` Property string or array to add.
 * @param {Function} `getter` Getter function to add as a property.
 * @api public
 */function setGetter(e,r,t){var n=i(arguments);return define(e,n,t)}
/**
 * Define getter function on object or object hierarchy using dot notation.
 *
 * @param  {Object} `obj` Object to define getter property on.
 * @param  {String} `prop` Property string to define.
 * @param  {Function} `getter` Getter function to define.
 * @return {Object} Returns original object.
 */function define(e,r,t){if(!~r.indexOf(".")){isValidKey(r)&&defineProperty(e,r,t);return e}var i=r.split(".").filter(isValidKey);var n=i.pop();var o=e;var f;while(f=i.shift()){while("\\"===f.slice(-1))f=f.slice(0,-1)+"."+i.shift();o=o[f]||(o[f]={})}defineProperty(o,n,t);return e}
/**
 * Define getter function on object as a configurable and enumerable property.
 *
 * @param  {Object} `obj` Object to define property on.
 * @param  {String} `prop` Property to define.
 * @param  {Function} `getter` Getter function to define.
 */function defineProperty(e,r,t){Object.defineProperty(e,r,{configurable:true,enumerable:true,get:t})}t=setGetter;var n=t;export default n;

