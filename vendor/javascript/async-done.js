// async-done@1.3.2 downloaded from https://ga.jspm.io/npm:async-done@1.3.2/index.js

import r from"domain";import o from"end-of-stream";import n from"process-nextick-args";import e from"once";import t from"stream-exhaust";import c from"process";var a={};var i=c;var s=r;var u=o;var f=n;var m=e;var p=t;var d={error:false};function rethrowAsync(r){i.nextTick(rethrow);function rethrow(){throw r}}function tryCatch(r,o){try{return r.apply(null,o)}catch(r){rethrowAsync(r)}}function asyncDone(r,o){o=m(o);var n=s.create();n.once("error",onError);var e=n.bind(r);function done(){n.removeListener("error",onError);n.exit();return tryCatch(o,arguments)}function onSuccess(r){done(null,r)}function onError(r){r||(r=new Error("Promise rejected without Error"));done(r)}function asyncRunner(){var r=e(done);function onNext(r){onNext.state=r}function onCompleted(){onSuccess(onNext.state)}if(r&&"function"===typeof r.on){n.add(r);u(p(r),d,done)}else r&&"function"===typeof r.subscribe?r.subscribe(onNext,onError,onCompleted):r&&"function"===typeof r.then&&r.then(onSuccess,onError)}f.nextTick(asyncRunner)}a=asyncDone;var v=a;export default v;
