// async@1.5.2 downloaded from https://ga.jspm.io/npm:async@1.5.2/lib/async.js

import n from"process";var e="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:global;var t={};var r=n;(function(){var n={};function noop(){}function identity(n){return n}function toBool(n){return!!n}function notId(n){return!n}var a;var i="object"===typeof self&&self.self===self&&self||"object"===typeof e&&e.global===e&&e||this||e;null!=i&&(a=i.async);n.noConflict=function(){i.async=a;return n};function only_once(n){return function(){if(null===n)throw new Error("Callback was already called.");n.apply(this||e,arguments);n=null}}function _once(n){return function(){if(null!==n){n.apply(this||e,arguments);n=null}}}var o=Object.prototype.toString;var u=Array.isArray||function(n){return"[object Array]"===o.call(n)};var _isObject=function(n){var e=typeof n;return"function"===e||"object"===e&&!!n};function _isArrayLike(n){return u(n)||"number"===typeof n.length&&n.length>=0&&n.length%1===0}function _arrayEach(n,e){var t=-1,r=n.length;while(++t<r)e(n[t],t,n)}function _map(n,e){var t=-1,r=n.length,a=Array(r);while(++t<r)a[t]=e(n[t],t,n);return a}function _range(n){return _map(Array(n),(function(n,e){return e}))}function _reduce(n,e,t){_arrayEach(n,(function(n,r,a){t=e(t,n,r,a)}));return t}function _forEachOf(n,e){_arrayEach(c(n),(function(t){e(n[t],t)}))}function _indexOf(n,e){for(var t=0;t<n.length;t++)if(n[t]===e)return t;return-1}var c=Object.keys||function(n){var e=[];for(var t in n)n.hasOwnProperty(t)&&e.push(t);return e};function _keyIterator(n){var e=-1;var t;var r;if(_isArrayLike(n)){t=n.length;return function next(){e++;return e<t?e:null}}r=c(n);t=r.length;return function next(){e++;return e<t?r[e]:null}}function _restParam(n,t){t=null==t?n.length-1:+t;return function(){var r=Math.max(arguments.length-t,0);var a=Array(r);for(var i=0;i<r;i++)a[i]=arguments[i+t];switch(t){case 0:return n.call(this||e,a);case 1:return n.call(this||e,arguments[0],a)}}}function _withoutIndex(n){return function(e,t,r){return n(e,r)}}var l="function"===typeof r.nextTick&&r.nextTick;var f=l?function(n){l(n)}:function(n){setTimeout(n,0)};"object"===typeof r&&"function"===typeof r.nextTick?n.nextTick=r.nextTick:n.nextTick=f;n.setImmediate=l?f:n.nextTick;n.forEach=n.each=function(e,t,r){return n.eachOf(e,_withoutIndex(t),r)};n.forEachSeries=n.eachSeries=function(e,t,r){return n.eachOfSeries(e,_withoutIndex(t),r)};n.forEachLimit=n.eachLimit=function(n,e,t,r){return _eachOfLimit(e)(n,_withoutIndex(t),r)};n.forEachOf=n.eachOf=function(n,e,t){t=_once(t||noop);n=n||[];var r=_keyIterator(n);var a,i=0;while(null!=(a=r())){i+=1;e(n[a],a,only_once(done))}0===i&&t(null);function done(n){i--;n?t(n):null===a&&i<=0&&t(null)}};n.forEachOfSeries=n.eachOfSeries=function(e,t,r){r=_once(r||noop);e=e||[];var a=_keyIterator(e);var i=a();function iterate(){var o=true;if(null===i)return r(null);t(e[i],i,only_once((function(e){if(e)r(e);else{i=a();if(null===i)return r(null);o?n.setImmediate(iterate):iterate()}})));o=false}iterate()};n.forEachOfLimit=n.eachOfLimit=function(n,e,t,r){_eachOfLimit(e)(n,t,r)};function _eachOfLimit(n){return function(e,t,r){r=_once(r||noop);e=e||[];var a=_keyIterator(e);if(n<=0)return r(null);var i=false;var o=0;var u=false;(function replenish(){if(i&&o<=0)return r(null);while(o<n&&!u){var c=a();if(null===c){i=true;o<=0&&r(null);return}o+=1;t(e[c],c,only_once((function(n){o-=1;if(n){r(n);u=true}else replenish()})))}})()}}function doParallel(e){return function(t,r,a){return e(n.eachOf,t,r,a)}}function doParallelLimit(n){return function(e,t,r,a){return n(_eachOfLimit(t),e,r,a)}}function doSeries(e){return function(t,r,a){return e(n.eachOfSeries,t,r,a)}}function _asyncMap(n,e,t,r){r=_once(r||noop);e=e||[];var a=_isArrayLike(e)?[]:{};n(e,(function(n,e,r){t(n,(function(n,t){a[e]=t;r(n)}))}),(function(n){r(n,a)}))}n.map=doParallel(_asyncMap);n.mapSeries=doSeries(_asyncMap);n.mapLimit=doParallelLimit(_asyncMap);n.inject=n.foldl=n.reduce=function(e,t,r,a){n.eachOfSeries(e,(function(n,e,a){r(t,n,(function(n,e){t=e;a(n)}))}),(function(n){a(n,t)}))};n.foldr=n.reduceRight=function(e,t,r,a){var i=_map(e,identity).reverse();n.reduce(i,t,r,a)};n.transform=function(e,t,r,a){if(3===arguments.length){a=r;r=t;t=u(e)?[]:{}}n.eachOf(e,(function(n,e,a){r(t,n,e,a)}),(function(n){a(n,t)}))};function _filter(n,e,t,r){var a=[];n(e,(function(n,e,r){t(n,(function(t){t&&a.push({index:e,value:n});r()}))}),(function(){r(_map(a.sort((function(n,e){return n.index-e.index})),(function(n){return n.value})))}))}n.select=n.filter=doParallel(_filter);n.selectLimit=n.filterLimit=doParallelLimit(_filter);n.selectSeries=n.filterSeries=doSeries(_filter);function _reject(n,e,t,r){_filter(n,e,(function(n,e){t(n,(function(n){e(!n)}))}),r)}n.reject=doParallel(_reject);n.rejectLimit=doParallelLimit(_reject);n.rejectSeries=doSeries(_reject);function _createTester(n,e,t){return function(r,a,i,o){function done(){o&&o(t(false,void 0))}function iteratee(n,r,a){if(!o)return a();i(n,(function(r){if(o&&e(r)){o(t(true,n));o=i=false}a()}))}if(arguments.length>3)n(r,a,iteratee,done);else{o=i;i=a;n(r,iteratee,done)}}}n.any=n.some=_createTester(n.eachOf,toBool,identity);n.someLimit=_createTester(n.eachOfLimit,toBool,identity);n.all=n.every=_createTester(n.eachOf,notId,notId);n.everyLimit=_createTester(n.eachOfLimit,notId,notId);function _findGetResult(n,e){return e}n.detect=_createTester(n.eachOf,identity,_findGetResult);n.detectSeries=_createTester(n.eachOfSeries,identity,_findGetResult);n.detectLimit=_createTester(n.eachOfLimit,identity,_findGetResult);n.sortBy=function(e,t,r){n.map(e,(function(n,e){t(n,(function(t,r){t?e(t):e(null,{value:n,criteria:r})}))}),(function(n,e){if(n)return r(n);r(null,_map(e.sort(comparator),(function(n){return n.value})))}));function comparator(n,e){var t=n.criteria,r=e.criteria;return t<r?-1:t>r?1:0}};n.auto=function(e,t,r){if("function"===typeof arguments[1]){r=t;t=null}r=_once(r||noop);var a=c(e);var i=a.length;if(!i)return r(null);t||(t=i);var o={};var l=0;var f=false;var s=[];function addListener(n){s.unshift(n)}function removeListener(n){var e=_indexOf(s,n);e>=0&&s.splice(e,1)}function taskComplete(){i--;_arrayEach(s.slice(0),(function(n){n()}))}addListener((function(){i||r(null,o)}));_arrayEach(a,(function(a){if(!f){var i=u(e[a])?e[a]:[e[a]];var c=_restParam((function(e,t){l--;t.length<=1&&(t=t[0]);if(e){var i={};_forEachOf(o,(function(n,e){i[e]=n}));i[a]=t;f=true;r(e,i)}else{o[a]=t;n.setImmediate(taskComplete)}}));var s=i.slice(0,i.length-1);var p=s.length;var h;while(p--){if(!(h=e[s[p]]))throw new Error("Has nonexistent dependency in "+s.join(", "));if(u(h)&&_indexOf(h,a)>=0)throw new Error("Has cyclic dependencies")}if(ready()){l++;i[i.length-1](c,o)}else addListener(listener)}function ready(){return l<t&&_reduce(s,(function(n,e){return n&&o.hasOwnProperty(e)}),true)&&!o.hasOwnProperty(a)}function listener(){if(ready()){l++;removeListener(listener);i[i.length-1](c,o)}}}))};n.retry=function(e,t,r){var a=5;var i=0;var o=[];var u={times:a,interval:i};function parseTimes(n,e){if("number"===typeof e)n.times=parseInt(e,10)||a;else{if("object"!==typeof e)throw new Error("Unsupported argument type for 'times': "+typeof e);n.times=parseInt(e.times,10)||a;n.interval=parseInt(e.interval,10)||i}}var c=arguments.length;if(c<1||c>3)throw new Error("Invalid arguments - must be either (task), (task, callback), (times, task) or (times, task, callback)");if(c<=2&&"function"===typeof e){r=t;t=e}"function"!==typeof e&&parseTimes(u,e);u.callback=r;u.task=t;function wrappedTask(e,t){function retryAttempt(n,e){return function(r){n((function(n,t){r(!n||e,{err:n,result:t})}),t)}}function retryInterval(n){return function(e){setTimeout((function(){e(null)}),n)}}while(u.times){var r=!(u.times-=1);o.push(retryAttempt(u.task,r));!r&&u.interval>0&&o.push(retryInterval(u.interval))}n.series(o,(function(n,t){t=t[t.length-1];(e||u.callback)(t.err,t.result)}))}return u.callback?wrappedTask():wrappedTask};n.waterfall=function(e,t){t=_once(t||noop);if(!u(e)){var r=new Error("First argument to waterfall must be an array of functions");return t(r)}if(!e.length)return t();function wrapIterator(n){return _restParam((function(e,r){if(e)t.apply(null,[e].concat(r));else{var a=n.next();a?r.push(wrapIterator(a)):r.push(t);ensureAsync(n).apply(null,r)}}))}wrapIterator(n.iterator(e))()};function _parallel(n,e,t){t=t||noop;var r=_isArrayLike(e)?[]:{};n(e,(function(n,e,t){n(_restParam((function(n,a){a.length<=1&&(a=a[0]);r[e]=a;t(n)})))}),(function(n){t(n,r)}))}n.parallel=function(e,t){_parallel(n.eachOf,e,t)};n.parallelLimit=function(n,e,t){_parallel(_eachOfLimit(e),n,t)};n.series=function(e,t){_parallel(n.eachOfSeries,e,t)};n.iterator=function(n){function makeCallback(e){function fn(){n.length&&n[e].apply(null,arguments);return fn.next()}fn.next=function(){return e<n.length-1?makeCallback(e+1):null};return fn}return makeCallback(0)};n.apply=_restParam((function(n,e){return _restParam((function(t){return n.apply(null,e.concat(t))}))}));function _concat(n,e,t,r){var a=[];n(e,(function(n,e,r){t(n,(function(n,e){a=a.concat(e||[]);r(n)}))}),(function(n){r(n,a)}))}n.concat=doParallel(_concat);n.concatSeries=doSeries(_concat);n.whilst=function(n,t,r){r=r||noop;if(n()){var a=_restParam((function(i,o){i?r(i):n.apply(this||e,o)?t(a):r.apply(null,[null].concat(o))}));t(a)}else r(null)};n.doWhilst=function(t,r,a){var i=0;return n.whilst((function(){return++i<=1||r.apply(this||e,arguments)}),t,a)};n.until=function(t,r,a){return n.whilst((function(){return!t.apply(this||e,arguments)}),r,a)};n.doUntil=function(t,r,a){return n.doWhilst(t,(function(){return!r.apply(this||e,arguments)}),a)};n.during=function(n,t,r){r=r||noop;var a=_restParam((function(t,a){if(t)r(t);else{a.push(check);n.apply(this||e,a)}}));var check=function(n,e){n?r(n):e?t(a):r(null)};n(check)};n.doDuring=function(t,r,a){var i=0;n.during((function(n){i++<1?n(null,true):r.apply(this||e,arguments)}),t,a)};function _queue(e,t,r){if(null==t)t=1;else if(0===t)throw new Error("Concurrency must not be zero");function _insert(e,t,r,a){if(null!=a&&"function"!==typeof a)throw new Error("task callback must be a function");e.started=true;u(t)||(t=[t]);if(0===t.length&&e.idle())return n.setImmediate((function(){e.drain()}));_arrayEach(t,(function(n){var t={data:n,callback:a||noop};r?e.tasks.unshift(t):e.tasks.push(t);e.tasks.length===e.concurrency&&e.saturated()}));n.setImmediate(e.process)}function _next(n,e){return function(){a-=1;var t=false;var r=arguments;_arrayEach(e,(function(n){_arrayEach(i,(function(e,r){if(e===n&&!t){i.splice(r,1);t=true}}));n.callback.apply(n,r)}));n.tasks.length+a===0&&n.drain();n.process()}}var a=0;var i=[];var o={tasks:[],concurrency:t,payload:r,saturated:noop,empty:noop,drain:noop,started:false,paused:false,push:function(n,e){_insert(o,n,false,e)},kill:function(){o.drain=noop;o.tasks=[]},unshift:function(n,e){_insert(o,n,true,e)},process:function(){while(!o.paused&&a<o.concurrency&&o.tasks.length){var n=o.payload?o.tasks.splice(0,o.payload):o.tasks.splice(0,o.tasks.length);var t=_map(n,(function(n){return n.data}));0===o.tasks.length&&o.empty();a+=1;i.push(n[0]);var r=only_once(_next(o,n));e(t,r)}},length:function(){return o.tasks.length},running:function(){return a},workersList:function(){return i},idle:function(){return o.tasks.length+a===0},pause:function(){o.paused=true},resume:function(){if(false!==o.paused){o.paused=false;var e=Math.min(o.concurrency,o.tasks.length);for(var t=1;t<=e;t++)n.setImmediate(o.process)}}};return o}n.queue=function(n,e){var t=_queue((function(e,t){n(e[0],t)}),e,1);return t};n.priorityQueue=function(e,t){function _compareTasks(n,e){return n.priority-e.priority}function _binarySearch(n,e,t){var r=-1,a=n.length-1;while(r<a){var i=r+(a-r+1>>>1);t(e,n[i])>=0?r=i:a=i-1}return r}function _insert(e,t,r,a){if(null!=a&&"function"!==typeof a)throw new Error("task callback must be a function");e.started=true;u(t)||(t=[t]);if(0===t.length)return n.setImmediate((function(){e.drain()}));_arrayEach(t,(function(t){var i={data:t,priority:r,callback:"function"===typeof a?a:noop};e.tasks.splice(_binarySearch(e.tasks,i,_compareTasks)+1,0,i);e.tasks.length===e.concurrency&&e.saturated();n.setImmediate(e.process)}))}var r=n.queue(e,t);r.push=function(n,e,t){_insert(r,n,e,t)};delete r.unshift;return r};n.cargo=function(n,e){return _queue(n,1,e)};function _console_fn(n){return _restParam((function(e,t){e.apply(null,t.concat([_restParam((function(e,t){"object"===typeof console&&(e?console.error&&console.error(e):console[n]&&_arrayEach(t,(function(e){console[n](e)})))}))]))}))}n.log=_console_fn("log");n.dir=_console_fn("dir");n.memoize=function(e,t){var r={};var a={};var i=Object.prototype.hasOwnProperty;t=t||identity;var o=_restParam((function memoized(o){var u=o.pop();var c=t.apply(null,o);if(i.call(r,c))n.setImmediate((function(){u.apply(null,r[c])}));else if(i.call(a,c))a[c].push(u);else{a[c]=[u];e.apply(null,o.concat([_restParam((function(n){r[c]=n;var e=a[c];delete a[c];for(var t=0,i=e.length;t<i;t++)e[t].apply(null,n)}))]))}}));o.memo=r;o.unmemoized=e;return o};n.unmemoize=function(n){return function(){return(n.unmemoized||n).apply(null,arguments)}};function _times(n){return function(e,t,r){n(_range(e),t,r)}}n.times=_times(n.map);n.timesSeries=_times(n.mapSeries);n.timesLimit=function(e,t,r,a){return n.mapLimit(_range(e),t,r,a)};n.seq=function(){var t=arguments;return _restParam((function(r){var a=this||e;var i=r[r.length-1];"function"==typeof i?r.pop():i=noop;n.reduce(t,r,(function(n,e,t){e.apply(a,n.concat([_restParam((function(n,e){t(n,e)}))]))}),(function(n,e){i.apply(a,[n].concat(e))}))}))};n.compose=function(){return n.seq.apply(null,Array.prototype.reverse.call(arguments))};function _applyEach(n){return _restParam((function(t,r){var a=_restParam((function(r){var a=this||e;var i=r.pop();return n(t,(function(n,e,t){n.apply(a,r.concat([t]))}),i)}));return r.length?a.apply(this||e,r):a}))}n.applyEach=_applyEach(n.eachOf);n.applyEachSeries=_applyEach(n.eachOfSeries);n.forever=function(n,e){var t=only_once(e||noop);var r=ensureAsync(n);function next(n){if(n)return t(n);r(next)}next()};function ensureAsync(t){return _restParam((function(r){var a=r.pop();r.push((function(){var e=arguments;i?n.setImmediate((function(){a.apply(null,e)})):a.apply(null,e)}));var i=true;t.apply(this||e,r);i=false}))}n.ensureAsync=ensureAsync;n.constant=_restParam((function(n){var t=[null].concat(n);return function(n){return n.apply(this||e,t)}}));n.wrapSync=n.asyncify=function asyncify(n){return _restParam((function(t){var r=t.pop();var a;try{a=n.apply(this||e,t)}catch(n){return r(n)}_isObject(a)&&"function"===typeof a.then?a.then((function(n){r(null,n)}))["catch"]((function(n){r(n.message?n:new Error(n))})):r(null,a)}))};t?t=n:i.async=n})();var a=t;export default a;

