// inquirer2@0.1.1 downloaded from https://ga.jspm.io/npm:inquirer2@0.1.1/index.js

import"lazy-cache";import"is-plain-object";import"array-unique";import"extend-shallow";import"arr-flatten";import"arr-pluck";import"is-number";import"ansi-escapes";import"ansi-regex";import"chalk";import"cli-cursor";import"cli-width";import"figures";import"readline2";import"run-async";import"rx-lite";import"strip-color";import"through2";import"lodash.where";import{_ as t,a as e}from"./_/226bb43b.js";import r from"util";import i from"process";import n from"assert";var s={};var o=t;s.left=function(t,e){t.output.write(o.ansiEscapes.cursorBackward(e))};s.right=function(t,e){t.output.write(o.ansiEscapes.cursorForward(e))};s.up=function(t,e){t.output.write(o.ansiEscapes.cursorUp(e))};s.down=function(t,e){t.output.write(o.ansiEscapes.cursorDown(e))};s.clearLine=function(t,e){t.output.write(o.ansiEscapes.eraseLines(e))};var a={};var h=i;var c=t;var p=a=function(t){this.rl||(this.rl=c.readlineFacade.createInterface(c.extend({terminal:true},t)));this.rl.resume();this.onForceClose=this.onForceClose.bind(this);this.rl.on("SIGINT",this.onForceClose);h.on("exit",this.onForceClose)};p.prototype.onForceClose=function(){this.close();console.log("\n")};p.prototype.close=function(){this.rl.removeListener("SIGINT",this.onForceClose);h.removeListener("exit",this.onForceClose);this.rl.output.unmute();this.rl.output.end();this.rl.pause();this.rl.close();this.rl=null};var u=a;var l={};var f=r;var d=s;var v=t;var m=u;l=Prompt;function Prompt(t){t||(t={});m.apply(this,arguments);this.log=v.through(this.writeLog.bind(this));this.bottomBar=t.bottomBar||"";this.render()}f.inherits(Prompt,m);Prompt.prototype.render=function(){this.write(this.bottomBar);return this};Prompt.prototype.updateBottomBar=function(t){this.bottomBar=t;d.clearLine(this.rl,1);return this.render()};Prompt.prototype.writeLog=function(t){d.clearLine(this.rl,1);this.rl.output.write(this.enforceLF(t.toString()));return this.render()};Prompt.prototype.enforceLF=function(t){return t.match(/[\r\n]$/)?t:t+"\n"};Prompt.prototype.write=function(t){var e=t.split(/\n/);this.height=e.length;var r=e[e.length-1];this.rl.setPrompt(r);0===this.rl.output.rows&&0===this.rl.output.columns&&d.left(this.rl,t.length+this.rl.line.length);this.rl.output.write(t)};var y=l;var b={};var g=t;b.createObservableFromAsync=function(t){return g.rx.Observable.defer((function(){return g.rx.Observable.create((function(e){g.runAsync(t,(function(t){e.onNext(t);e.onCompleted()}))}))}))};b.fetchAsyncQuestionProperty=function(t,e,r){return"function"!==typeof t[e]?g.rx.Observable.return(t):b.createObservableFromAsync((function(){var i=this.async();g.runAsync(t[e],(function(r){t[e]=r;i(t)}),r)}))};var w={};var P=r;var k=b;var E=t;var $=u;var C=w=function(t,e){$.call(this,e);this.prompts=t};P.inherits(C,$);C.prototype.run=function(t,e){this.answers={};this.completed=e;E.isPlainObject(t)&&(t=[t]);var r=Array.isArray(t)?E.rx.Observable.from(t):t;this.process=r.concatMap(this.processQuestion.bind(this)).publish();this.process.subscribe(E.noop,(function(t){throw t}),this.onCompletion.bind(this));return this.process.connect()};C.prototype.onCompletion=function(){this.close();"function"===typeof this.completed&&this.completed(this.answers)};C.prototype.processQuestion=function(t){return E.rx.Observable.defer(function(){var e=E.rx.Observable.create((function(e){e.onNext(t);e.onCompleted()}));return e.concatMap(this.setDefaultType.bind(this)).concatMap(this.filterIfRunnable.bind(this)).concatMap(k.fetchAsyncQuestionProperty.bind(null,t,"message",this.answers)).concatMap(k.fetchAsyncQuestionProperty.bind(null,t,"default",this.answers)).concatMap(k.fetchAsyncQuestionProperty.bind(null,t,"choices",this.answers)).concatMap(this.fetchAnswer.bind(this))}.bind(this))};C.prototype.fetchAnswer=function(t){var e=this.prompts[t.type];var r=new e(t,this.rl,this.answers);var i=this.answers;return k.createObservableFromAsync((function(){var e=this.async();r.run((function(r){i[t.name]=r;e({name:t.name,answer:r})}))}))};C.prototype.setDefaultType=function(t){this.prompts[t.type]||(t.type="input");return E.rx.Observable.defer((function(){return E.rx.Observable.return(t)}))};C.prototype.filterIfRunnable=function(t){if(null==t.when)return E.rx.Observable.return(t);var handleResult=function(e,r){r&&e.onNext(t);e.onCompleted()};var e=this.answers;return E.rx.Observable.defer((function(){return E.rx.Observable.create((function(r){"boolean"!==typeof t.when?E.runAsync(t.when,(function(t){handleResult(r,t)}),e):handleResult(r,t.when)}))}))};var x=w;var K={};var O=t;var L=K=function(){this.pointer=0;this.lastIndex=0};L.prototype.paginate=function(t,e,r){var r=r||7;var i=t.split("\n");if(i.length<=r+2)return t;this.pointer<3&&this.lastIndex<e&&e-this.lastIndex<9&&(this.pointer=Math.min(3,this.pointer+e-this.lastIndex));this.lastIndex=e;var n=O.flatten([i,i,i]);var s=Math.max(0,e+i.length-this.pointer);var o=n.splice(s,r).join("\n");return o+"\n"+O.chalk.dim("(Move up and down to reveal more choices)")};var U=K;var A={};var S=t;function normalizeKeypressEvents(t,e){return{value:t,key:e||{}}}A=function(t){var e=S.rx.Observable.fromEvent(t.input,"keypress",normalizeKeypressEvents).filter((function(t){return"enter"!==t.key.name&&"return"!==t.key.name}));return{line:S.rx.Observable.fromEvent(t,"line"),keypress:e,normalizedUpKey:e.filter((function(t){return"up"===t.key.name||"k"===t.key.name})).share(),normalizedDownKey:e.filter((function(t){return"down"===t.key.name||"j"===t.key.name})).share(),numberKey:e.filter((function(t){return t.value&&"123456789".indexOf(t.value)>=0})).map((function(t){return Number(t.value)})).share(),spaceKey:e.filter((function(t){return t.key&&"space"===t.key.name})).share()}};var D=A;var I={};var N=t;var F=s;N.cliWidth.defaultWidth=80;var M=I=function(t){this.height=0;this.extraLinesUnderPrompt=0;this.rl=t};M.prototype.render=function(t,e){e=N.extend({cursor:0},e||{});var r=this.rl._getCursorPos();this.rl.output.unmute();this.clean(this.extraLinesUnderPrompt);var i=t.split(/\n/);var n=i[i.length-1-e.cursor];var s=N.stripColor(n);var o=n;this.rl.line.length&&(o=o.slice(0,-this.rl.line.length));this.rl.setPrompt(o);var a=N.stripColor(o);var h=breakLines(i);var c=N.flatten(h);s.length%N.cliWidth()===0&&c.push("");this.rl.output.write(c.join("\n"));var p=Math.floor(s.length/N.cliWidth())-r.rows;e.cursor+p>0&&F.up(this.rl,e.cursor+p);var u=c[c.length-1];F.left(this.rl,N.stripColor(u).length);var l=r.cols;0===r.rows&&(l=Math.max(l,a.length));F.right(this.rl,l);var f=h.slice(h.length-e.cursor-p);this.extraLinesUnderPrompt=N.flatten(f).length;this.height=c.length;this.rl.output.mute()};M.prototype.clean=function(t){t>0&&F.down(this.rl,t);F.clearLine(this.rl,this.height)};M.prototype.done=function(){this.rl.setPrompt("");this.rl.output.unmute();this.rl.output.write("\n")};function breakLines(t){var e=N.cliWidth();var r=new RegExp("(?:(?:\\033[[0-9;]*m)*.?){1,"+e+"}","g");return t.map((function(t){var e=t.match(r);e.pop();return e||""}))}var z=I;var Q={};var R=t;var j=Q=function(t,e){if(t instanceof j||"separator"===t.type)return t;if("string"===typeof t){this.name=t;this.value=t;this.short=t}else R.extend(this,t,{name:t.name||t.value,value:t.hasOwnProperty("value")?t.value:t.name,short:t.short||t.name||t.value});"function"===typeof t.disabled?this.disabled=t.disabled(e):this.disabled=t.disabled};var _=Q;var V={};var B=n;var W=e;var q=_;var T=t;var Y=V=function(t,e){this.choices=t.map((function(t){if("separator"===t.type){t instanceof W||(t=new W(t.line));return t}return new q(t,e)}));this.realChoices=this.choices.filter(W.exclude).filter((function(t){return!t.disabled}));Object.defineProperty(this,"length",{get:function(){return this.choices.length},set:function(t){this.choices.length=t}});Object.defineProperty(this,"realLength",{get:function(){return this.realChoices.length},set:function(){throw new Error("Cannot set `realLength` of a Choices collection")}})};Y.prototype.getChoice=function(t){B("number"===typeof t);return this.realChoices[t]};Y.prototype.get=function(t){B("number"===typeof t);return this.choices[t]};Y.prototype.where=function(t){return T.where(this.realChoices,t)};Y.prototype.pluck=function(t){return T.pluck(this.realChoices,t)};Y.prototype.forEach=function(){return this.choices.forEach.apply(this.choices,arguments)};Y.prototype.filter=function(){return this.choices.filter.apply(this.choices,arguments)};Y.prototype.push=function(){var t=[].slice.call(arguments);var e=t.map((function(t){return new q(t)}));this.choices.push.apply(this.choices,e);this.realChoices=this.choices.filter(W.exclude);return this.choices};var G=V;var H={};var J=z;var X=G;var Z=t;var tt=H=function(t,e,r){Z.extend(this,{answers:r,status:"pending"});this.opt=Z.extend({},{validate:function(){return true},filter:function(t){return t},when:function(){return true}},Z.extend({},t));this.opt.message||this.throwParamError("message");this.opt.name||this.throwParamError("name");Array.isArray(this.opt.choices)&&(this.opt.choices=new X(this.opt.choices,r));this.rl=e;this.screen=new J(this.rl)};tt.prototype.run=function(t){this._run(function(e){this.filter(e,t)}.bind(this))};tt.prototype._run=function(t){t()};tt.prototype.throwParamError=function(t){throw new Error("You must provide a `"+t+"` parameter")};tt.prototype.validate=function(t,e){Z.runAsync(this.opt.validate,e,t)};tt.prototype.handleSubmitEvents=function(t){var e=this;var r=t.flatMap((function(t){return Z.rx.Observable.create((function(r){Z.runAsync(e.opt.validate,(function(i){r.onNext({isValid:i,value:e.getCurrentValue(t)});r.onCompleted()}),e.getCurrentValue(t),e.answers)}))})).share();var i=r.filter((function(t){return true===t.isValid})).take(1);var n=r.filter((function(t){return true!==t.isValid})).takeUntil(i);return{success:i,error:n}};tt.prototype.getCurrentValue=function(t){return t};tt.prototype.filter=function(t,e){Z.runAsync(this.opt.filter,e,t)};tt.prototype.prefix=function(t){return Z.chalk.green("?")+" "+(t||"")};var reStrEnd=function(){return new RegExp("(?:"+Z.ansiRegex().source+")$|$")};tt.prototype.suffix=function(t){t||(t="");(t.length<1||/[a-z1-9]$/i.test(Z.chalk.stripColor(t)))&&(t=t.replace(reStrEnd(),":$&"));return t.trim()+" "};tt.prototype.getQuestion=function(){var t=Z.chalk.green("?")+" "+Z.chalk.bold(this.opt.message)+" ";null!=this.opt.default&&"answered"!==this.status&&(t+=Z.chalk.dim("("+this.opt.default+") "));return t};var et=H;var rt={};var it=r;var nt=U;var st=D;var ot=t;var at=et;rt=Prompt$2;function Prompt$2(){at.apply(this,arguments);this.opt.choices||this.throwParamError("choices");Array.isArray(this.opt.default)&&this.opt.choices.forEach((function(t){this.opt.default.indexOf(t.value)>=0&&(t.checked=true)}),this);this.firstRender=true;this.pointer=0;this.opt.default=null;this.paginator=new nt}it.inherits(Prompt$2,at);Prompt$2.prototype._run=function(t){this.done=t;var e=st(this.rl);var r=this.handleSubmitEvents(e.line);r.success.forEach(this.onEnd.bind(this));r.error.forEach(this.onError.bind(this));e.normalizedUpKey.takeUntil(r.success).forEach(this.onUpKey.bind(this));e.normalizedDownKey.takeUntil(r.success).forEach(this.onDownKey.bind(this));e.numberKey.takeUntil(r.success).forEach(this.onNumberKey.bind(this));e.spaceKey.takeUntil(r.success).forEach(this.onSpaceKey.bind(this));ot.cliCursor.hide();this.render();return this};Prompt$2.prototype.render=function(t){var e=0;var r=this.getQuestion();this.firstRender&&(r+="(Press <space> to select)");if("answered"===this.status)r+=ot.chalk.cyan(this.selection.join(", "));else{var i=renderChoices(this.opt.choices,this.pointer);r+="\n"+this.paginator.paginate(i,this.pointer,this.opt.pageSize)}if(t){r+="\n"+ot.chalk.red(">> ")+t;e++}this.firstRender=false;this.screen.render(r,{cursor:e})};Prompt$2.prototype.onEnd=function(t){this.status="answered";this.render();this.screen.done();ot.cliCursor.show();this.done(t.value)};Prompt$2.prototype.onError=function(t){this.render(t.isValid)};Prompt$2.prototype.getCurrentValue=function(){var t=this.opt.choices.filter((function(t){return!!t.checked&&!t.disabled}));this.selection=ot.pluck(t,"short");return ot.pluck(t,"value")};Prompt$2.prototype.onUpKey=function(){var t=this.opt.choices.realLength;this.pointer=this.pointer>0?this.pointer-1:t-1;this.render()};Prompt$2.prototype.onDownKey=function(){var t=this.opt.choices.realLength;this.pointer=this.pointer<t-1?this.pointer+1:0;this.render()};Prompt$2.prototype.onNumberKey=function(t){if(t<=this.opt.choices.realLength){this.pointer=t-1;this.toggleChoice(this.pointer)}this.render()};Prompt$2.prototype.onSpaceKey=function(t){this.toggleChoice(this.pointer);this.render()};Prompt$2.prototype.toggleChoice=function(t){var e=this.opt.choices.getChoice(t).checked;this.opt.choices.getChoice(t).checked=!e};function renderChoices(t,e){var r="";var i=0;t.forEach((function(t,n){if("separator"!==t.type){if(t.disabled){i++;r+=" - "+t.name;r+=" ("+("string"===typeof t.disabled?t.disabled:"Disabled")+")"}else{var s=n-i===e;r+=s?ot.chalk.cyan(ot.figures.pointer):" ";r+=getCheckbox(t.checked)+" "+t.name}r+="\n"}else{i++;r+=" "+t+"\n"}}));return r.replace(/\n$/,"")}function getCheckbox(t){return t?ot.chalk.green(ot.figures.radioOn):ot.figures.radioOff}var ht=rt;var ct={};var pt=r;var ut=D;var lt=t;var ft=et;ct=Prompt$3;function Prompt$3(){ft.apply(this,arguments);var t=true;lt.extend(this.opt,{filter:function(e){var r=t;null!=e&&""!==e&&(r=/^y(es)?/i.test(e));return r}.bind(this)});"boolean"===typeof this.opt.default&&(t=this.opt.default);this.opt.default=t?"Y/n":"y/N";return this}pt.inherits(Prompt$3,ft);Prompt$3.prototype._run=function(t){this.done=t;var e=ut(this.rl);e.keypress.takeUntil(e.line).forEach(this.onKeypress.bind(this));e.line.take(1).forEach(this.onEnd.bind(this));this.render();return this};Prompt$3.prototype.render=function(t){var e=this.getQuestion();e+="boolean"===typeof t?lt.chalk.cyan(t?"Yes":"No"):this.rl.line;this.screen.render(e);return this};Prompt$3.prototype.onEnd=function(t){this.status="answered";var e=this.opt.filter(t);this.render(e);this.screen.done();this.done(t)};Prompt$3.prototype.onKeypress=function(){this.render()};var dt=ct;var vt={};var mt=r;var yt=e;var bt=U;var gt=D;var wt=t;var Pt=et;vt=Prompt$4;function Prompt$4(){Pt.apply(this,arguments);this.opt.choices||this.throwParamError("choices");this.validateChoices(this.opt.choices);this.opt.choices.push({key:"h",name:"Help, list all options",value:"help"});this.opt.default=this.generateChoicesString(this.opt.choices,this.opt.default);this.paginator=new bt}mt.inherits(Prompt$4,Pt);Prompt$4.prototype._run=function(t){this.done=t;var e=gt(this.rl);this.lineObs=e.line.forEach(this.onSubmit.bind(this));this.keypressObs=e.keypress.forEach(this.onKeypress.bind(this));this.render();return this};Prompt$4.prototype.render=function(t,e){var r=0;var i=this.getQuestion();if("answered"===this.status)i+=wt.chalk.cyan(this.selected.name);else if("expanded"===this.status){var n=renderChoices$1(this.opt.choices,this.selectedKey);i+=this.paginator.paginate(n,this.selectedKey,this.opt.pageSize);i+="\n  Answer: "}i+=this.rl.line;if(t){i+="\n"+wt.chalk.red(">> ")+t;r++}if(e){i+="\n"+wt.chalk.cyan(">> ")+e;r++}this.screen.render(i,{cursor:r})};Prompt$4.prototype.getChoices=function(){var t="";this.opt.choices.forEach(function(e,r){t+="\n  ";if("separator"!==e.type){var i=e.key+") "+e.name;this.selectedKey===e.key&&(i=wt.chalk.cyan(i));t+=i}else t+=" "+e}.bind(this));return t};Prompt$4.prototype.onSubmit=function(t){null!=t&&""!==t||(t=this.rawDefault);var e=this.opt.choices.where({key:t.toLowerCase()})[0];if(null==e||"h"!==e.key)if(null==e)this.render("Please enter a valid command");else{this.status="answered";this.selected=e;this.render();this.lineObs.dispose();this.keypressObs.dispose();this.screen.done();this.done(this.selected.value)}else{this.selectedKey="";this.status="expanded";this.render()}};Prompt$4.prototype.onKeypress=function(t,e){this.selectedKey=this.rl.line.toLowerCase();var r=this.opt.choices.where({key:this.selectedKey})[0];"expanded"===this.status?this.render():this.render(null,r?r.name:null)};Prompt$4.prototype.validateChoices=function(t){var e;var r=[];var i={};t.filter(yt.exclude).map((function(t){t.key&&1===t.key.length||(e=true);i[t.key]&&r.push(t.key);i[t.key]=true;t.key=String(t.key).toLowerCase()}));if(e)throw new Error("Format error: `key` param must be a single letter and is required.");if(i.h)throw new Error("Reserved key error: `key` param cannot be `h` - this value is reserved.");if(r.length)throw new Error("Duplicate key error: `key` param must be unique. Duplicates: "+wt.unique(r).join(", "))};Prompt$4.prototype.generateChoicesString=function(t,e){var r=0;wt.isNumber(e)&&this.opt.choices.getChoice(e)&&(r=e);var i=this.opt.choices.pluck("key");this.rawDefault=i[r];i[r]=String(i[r]).toUpperCase();return i.join("")};function renderChoices$1(t,e){var r="";t.forEach((function(t,i){r+="\n  ";if("separator"!==t.type){var n=t.key+") "+t.name;e===t.key&&(n=wt.chalk.cyan(n));r+=n}else r+=" "+t}));return r}var kt=vt;var Et={};var $t=r;var Ct=D;var xt=t;var Kt=et;Et=Prompt$5;function Prompt$5(){return Kt.apply(this,arguments)}$t.inherits(Prompt$5,Kt);Prompt$5.prototype._run=function(t){this.done=t;var e=Ct(this.rl);var r=e.line.map(this.filterInput.bind(this));var i=this.handleSubmitEvents(r);i.success.forEach(this.onEnd.bind(this));i.error.forEach(this.onError.bind(this));e.keypress.takeUntil(i.success).forEach(this.onKeypress.bind(this));this.render();return this};Prompt$5.prototype.render=function(t){var e=0;var r=this.getQuestion();"answered"===this.status?r+=xt.chalk.cyan(this.answer):r+=this.rl.line;if(t){r+="\n"+xt.chalk.red(">> ")+t;e++}this.screen.render(r,{cursor:e})};Prompt$5.prototype.filterInput=function(t){return t||(null!=this.opt.default?this.opt.default:"")};Prompt$5.prototype.onEnd=function(t){this.filter(t.value,function(e){this.answer=e;this.status="answered";this.render();this.screen.done();this.done(t.value)}.bind(this))};Prompt$5.prototype.onError=function(t){this.render(t.isValid)};Prompt$5.prototype.onKeypress=function(){this.render()};var Ot=Et;var Lt={};var Ut=r;var At=U;var St=D;var Dt=t;var It=et;Lt=Prompt$6;function Prompt$6(){It.apply(this,arguments);this.opt.choices||this.throwParamError("choices");this.firstRender=true;this.selected=0;var t=this.opt.default;Dt.isNumber(t)&&t>=0&&t<this.opt.choices.realLength&&(this.selected=t);"string"===typeof t&&(this.selected=this.opt.choices.pluck("value").indexOf(t));this.opt.default=null;this.paginator=new At}Ut.inherits(Prompt$6,It);Prompt$6.prototype._run=function(t){this.done=t;var e=St(this.rl);e.normalizedUpKey.takeUntil(e.line).forEach(this.onUpKey.bind(this));e.normalizedDownKey.takeUntil(e.line).forEach(this.onDownKey.bind(this));e.numberKey.takeUntil(e.line).forEach(this.onNumberKey.bind(this));e.line.take(1).forEach(this.onSubmit.bind(this));Dt.cliCursor.hide();this.render();return this};Prompt$6.prototype.render=function(){var t=this.getQuestion();this.firstRender&&(t+=Dt.chalk.dim("(Use arrow keys)"));if("answered"===this.status)t+=Dt.chalk.cyan(this.opt.choices.getChoice(this.selected).short);else{var e=listRender(this.opt.choices,this.selected);t+="\n"+this.paginator.paginate(e,this.selected,this.opt.pageSize)}this.firstRender=false;this.screen.render(t)};Prompt$6.prototype.onSubmit=function(){var t=this.opt.choices.getChoice(this.selected);this.status="answered";this.render();this.screen.done();Dt.cliCursor.show();this.done(t.value)};Prompt$6.prototype.onUpKey=function(){var t=this.opt.choices.realLength;this.selected=this.selected>0?this.selected-1:t-1;this.render()};Prompt$6.prototype.onDownKey=function(){var t=this.opt.choices.realLength;this.selected=this.selected<t-1?this.selected+1:0;this.render()};Prompt$6.prototype.onNumberKey=function(t){t<=this.opt.choices.realLength&&(this.selected=t-1);this.render()};function listRender(t,e){var r="";var i=0;t.forEach((function(t,n){if("separator"!==t.type){var s=n-i===e;var o=(s?Dt.figures.pointer+" ":"  ")+t.name;s&&(o=Dt.chalk.cyan(o));r+=o+" \n"}else{i++;r+="  "+t+"\n"}}));return r.replace(/\n$/,"")}var Nt=Lt;var Ft={};var Mt=r;var zt=D;var Qt=t;var Rt=et;function mask(t){t=String(t);return 0===t.length?"":new Array(t.length+1).join("*")}Ft=Prompt$7;function Prompt$7(){return Rt.apply(this,arguments)}Mt.inherits(Prompt$7,Rt);Prompt$7.prototype._run=function(t){this.done=t;var e=zt(this.rl);var r=e.line.map(this.filterInput.bind(this));var i=this.handleSubmitEvents(r);i.success.forEach(this.onEnd.bind(this));i.error.forEach(this.onError.bind(this));e.keypress.takeUntil(i.success).forEach(this.onKeypress.bind(this));this.render();return this};Prompt$7.prototype.render=function(t){var e=0;var r=this.getQuestion();"answered"===this.status?r+=Qt.chalk.cyan(mask(this.answer)):r+=mask(this.rl.line||"");if(t){r+="\n"+Qt.chalk.red(">> ")+t;e++}this.screen.render(r,{cursor:e})};Prompt$7.prototype.filterInput=function(t){return t||(null!=this.opt.default?this.opt.default:"")};Prompt$7.prototype.onEnd=function(t){this.status="answered";this.answer=t.value;this.render();this.screen.done();this.done(t.value)};Prompt$7.prototype.onError=function(t){this.render(t.isValid);this.rl.output.unmute()};Prompt$7.prototype.onKeypress=function(){this.render()};var jt=Ft;var _t={};var Vt=r;var Bt=e;var Wt=U;var qt=D;var Tt=t;var Yt=et;_t=Prompt$8;function Prompt$8(){Yt.apply(this,arguments);this.opt.choices||this.throwParamError("choices");this.opt.validChoices=this.opt.choices.filter(Bt.exclude);this.selected=0;this.rawDefault=0;Tt.extend(this.opt,{validate:function(t){return null!=this.opt.choices.getChoice(t)}.bind(this)});var t=this.opt.default;Tt.isNumber(t)&&t>=0&&t<this.opt.choices.realLength&&(this.selected=this.rawDefault=t);this.opt.default=null;this.paginator=new Wt}Vt.inherits(Prompt$8,Yt);Prompt$8.prototype._run=function(t){this.done=t;var e=qt(this.rl);var r=e.line.map(this.filterInput.bind(this));var i=this.handleSubmitEvents(r);i.success.forEach(this.onEnd.bind(this));i.error.forEach(this.onError.bind(this));e.keypress.takeUntil(i.success).forEach(this.onKeypress.bind(this));this.render();return this};Prompt$8.prototype.render=function(t){var e=0;var r=this.getQuestion();if("answered"===this.status)r+=Tt.chalk.cyan(this.opt.choices.getChoice(this.selected).name);else{var i=renderChoices$2(this.opt.choices,this.selected);r+=this.paginator.paginate(i,this.selected,this.opt.pageSize);r+="\n  Answer: "}r+=this.rl.line;if(t){r+="\n"+Tt.chalk.red(">> ")+t;e++}this.screen.render(r,{cursor:e})};Prompt$8.prototype.filterInput=function(t){return null==t||""===t?this.rawDefault:t-1};Prompt$8.prototype.onEnd=function(t){this.status="answered";this.selected=t.value;var e=this.opt.choices.getChoice(this.selected);this.render();this.screen.done();this.done(e.value)};Prompt$8.prototype.onError=function(){this.render("Please enter a valid index")};Prompt$8.prototype.onKeypress=function(){var t=this.rl.line.length?Number(this.rl.line)-1:0;this.opt.choices.getChoice(t)?this.selected=t:this.selected=void 0;this.render()};function renderChoices$2(t,e){var r="";var i=0;t.forEach((function(t,n){r+="\n  ";if("separator"!==t.type){var s=n-i;var o=s+1+") "+t.name;s===e&&(o=Tt.chalk.cyan(o));r+=o}else{i++;r+=" "+t}}));return r}var Gt=_t;var Ht={};Ht=function(t){var r={};r.prompts={};r.Separator=e;r.ui={BottomBar:y,Prompt:x};r.createPromptModule=function(t){var promptModule=function(e,i){var n=new r.ui.Prompt(promptModule.prompts,t);n.run(e,i);return n};promptModule.prompts={};promptModule.registerPrompt=function(t,e){promptModule.prompts[t]=e;return this};promptModule.restoreDefaultPrompts=function(){this.registerPrompt("checkbox",ht);this.registerPrompt("confirm",dt);this.registerPrompt("expand",kt);this.registerPrompt("input",Ot);this.registerPrompt("list",Nt);this.registerPrompt("password",jt);this.registerPrompt("rawlist",Gt)};promptModule.restoreDefaultPrompts();return promptModule};r.prompt=r.createPromptModule(t);r.registerPrompt=function(t,e){r.prompt.registerPrompt(t,e)};r.restoreDefaultPrompts=function(){r.prompt.restoreDefaultPrompts()};return r};var Jt=Ht;export default Jt;
