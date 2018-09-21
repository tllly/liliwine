var _mods_makeRand_js=function(){var n=function(){return+new Date+".r"+Math.floor(1e3*Math.random())};return n}(),_mods_logServer_js=function(){return"//gm.mmstat.com/jstracker.3?"}(),_mods_sendImage_js=function(){var n=_mods_makeRand_js;return function(e){var r=window,t="jsFeImage_"+n(),o=r[t]=new Image;o.onload=o.onerror=function(){r[t]=null},o.src=e}}(),_mods_parseException_js=function(){var n=_mods_parseStack_js;return function(e){var r={msg:e.message,file:"",line:"",col:"",stack:n(e).toString()};return r}}(),_mods_parseStack_js=function(){function n(n,e,r,t){this.funcName=n,this.file=e,this.line=r,this.col=t}n.prototype.toString=function(){return[this.funcName,this.file,this.line,this.col].join("|")};var e=/\S+\:\d+/,r=/\s+at /,t={parse:function(n){return n?"undefined"!=typeof n.stacktrace||"undefined"!=typeof n["opera#sourceloc"]?this.parseOpera(n):n.stack&&n.stack.match(r)?this.parseV8OrIE(n):n.stack&&n.stack.match(e)?this.parseFFOrSafari(n):"":""},extractLocation:function(n){if(-1===n.indexOf(":"))return[n];var e=n.replace(/[\(\)\s]/g,"").split(":"),r=e.pop(),t=e[e.length-1];if(!isNaN(parseFloat(t))&&isFinite(t)){var o=e.pop();return[e.join(":"),o,r]}return[e.join(":"),r,void 0]},parseV8OrIE:function(e){return e.stack.split("\n").slice(1).map(function(e){var r=e.replace(/^\s+/,"").split(/\s+/).slice(1),t=this.extractLocation(r.pop()),o=r[0]&&"Anonymous"!==r[0]?r[0]:void 0;return new n(o,void 0,t[0],t[1],t[2])},this)},parseFFOrSafari:function(r){return r.stack.split("\n").filter(function(n){return!!n.match(e)},this).map(function(e){var r=e.split("@"),t=this.extractLocation(r.pop()),o=r.shift()||void 0;return new n(o,void 0,t[0],t[1],t[2])},this)},parseOpera:function(n){return!n.stacktrace||n.message.indexOf("\n")>-1&&n.message.split("\n").length>n.stacktrace.split("\n").length?this.parseOpera9(n):n.stack?this.parseOpera11(n):this.parseOpera10(n)},parseOpera9:function(e){for(var r=/Line (\d+).*script (?:in )?(\S+)/i,t=e.message.split("\n"),o=[],i=2,a=t.length;a>i;i+=2){var s=r.exec(t[i]);s&&o.push(new n(void 0,void 0,s[2],s[1]))}return o},parseOpera10:function(e){for(var r=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,t=e.stacktrace.split("\n"),o=[],i=0,a=t.length;a>i;i+=2){var s=r.exec(t[i]);s&&o.push(new n(s[3]||void 0,void 0,s[2],s[1]))}return o},parseOpera11:function(r){return r.stack.split("\n").filter(function(n){return!!n.match(e)&&!n.match(/^Error created at/)},this).map(function(e){var r,t=e.split("@"),o=this.extractLocation(t.pop()),i=t.shift()||"",a=i.replace(/<anonymous function(: (\w+))?>/,"$2").replace(/\([^\)]*\)/g,"")||void 0;i.match(/\(([^\)]*)\)/)&&(r=i.replace(/^[^\(]+\(([^\)]*)\)$/,"$1"));var s=void 0===r||"[arguments not available]"===r?void 0:r.split(",");return new n(a,s,o[0],o[1],o[2])},this)}};return function(n){var e=t.parse(n);return e}}(),_mods_util_js=function(){return{merge:function(n,e){var r={};for(var t in n)r[t]=n[t];for(var t in e)r[t]=e[t];return r},stringify:function(n){var e=[];for(var r in n)e.push(r+"="+encodeURIComponent(n[r]));return e.join("&")}}}(),_mods_getNick_js=function(){var n=null;try{var e=/_nk_=([^;]+)/.exec(document.cookie)||/_w_tb_nick=([^;]+)/.exec(document.cookie)||/lgc=([^;]+)/.exec(document.cookie);e&&(n=decodeURIComponent(e[1]))}catch(r){}return n}(),_mods_getScreen_js=function(){return screen.width+"x"+screen.height}(),_mods_getUA_js=function(){var n=function(){try{if("undefined"!=typeof window.scrollMaxX)return"";var n="track"in document.createElement("track"),e=window.chrome&&window.chrome.webstore?Object.keys(window.chrome.webstore).length:0;return window.clientInformation&&window.clientInformation.languages&&window.clientInformation.languages.length>2?"":n?e>1?" QIHU 360 EE":" QIHU 360 SE":""}catch(r){return""}}();return navigator.userAgent+n}(),_mods_push_js=function(){var n=_mods_parseException_js,e=_mods_sendImage_js,r=_mods_logServer_js,t=_mods_makeRand_js,o=_mods_util_js;return function(i){try{if(!i)return;i&&i.constructor===Object||(i=n(i)),i=o.merge(i,this._config);var a=t;i.t=a();for(var s in i)(""===i[s]||null===i[s]||void 0===i[s])&&delete i[s];var c=o.stringify(i),u=i.sampling;1>u&&(u=9999999,"undefined"!=typeof console&&console.warn&&console.warn("JSTracker2 sampling is invalid, please set a integer above 1!")),!this._debug&&Math.random()*u>1||this._pushed_num<10&&(this._pushed_num++,e(r+c))}catch(d){}}}(),_mods_getPerf_js=function(){return function(){var n={},e=window;if(e.performance){var r=e.performance.timing;n.dns=r.domainLookupEnd-r.domainLookupStart,n.con=r.connectEnd-r.connectStart,n.req=r.responseStart-r.requestStart,n.res=r.responseEnd-r.responseStart,n.dcl=r.domContentLoadedEventEnd-r.domLoading,n.onload=r.loadEventStart-r.domLoading,n.type=window.performance.navigation.type,n.sampling=100}return n.msg="__PV",n}}(),_mods_handleError_js=function(){var n=_mods_parseStack_js;return function(){var e={msg:arguments[0],file:arguments[1],line:arguments[2],col:arguments[3],stack:n(arguments[4]).toString()};return e}}(),_mods_onload_js=function(){var n=function(n){n&&(/complete/.test(document.readyState)&&document.body?setTimeout(n,0):document.addEventListener?window.addEventListener("load",n,!1):window.attachEvent("onload",n))};return n}(),_mods_jstracker_js=function(){function n(n){var e={msg:"",file:"",line:"",col:"",stack:"",url:"",ua:"",screen:"",nick:"",dns:"",con:"",req:"",res:"",dcl:"",onload:"",type:"",ki:""};this.version="s2.0.1",e={v:this.version,ua:r,screen:t,sampling:100,nick:o},this._debug=-1!=location.href.indexOf("jt_debug"),this._pushed_num=0,this._config=i.merge(e,n)}var e=_mods_push_js,r=_mods_getUA_js,t=_mods_getScreen_js,o=_mods_getNick_js,i=_mods_util_js;return n.prototype.push=e,n}(),_mods_pageTrack_js=function(){var n=_mods_onload_js,e=_mods_handleError_js,r=_mods_jstracker_js,t=_mods_getPerf_js;return function(){try{if(!window)return;if(window.JSTracker2&&window.JSTracker2.version)return;var o=[];window.JSTracker2&&window.JSTracker2.length>0&&(o=window.JSTracker2);var i;window.g_config&&window.g_config.jstracker2&&(i=window.g_config.jstracker2),window.JSTracker2=new r(i);for(var a=0;a<o.length;a++)window.JSTracker2.push(o[a]);window.performance&&n(function(){try{var n=t();window.JSTracker2.push(n)}catch(e){}});var s=window.onerror;window.onerror=function(){try{s&&s.apply(window,arguments);var n=e.apply(window,arguments);window.JSTracker2.push(n)}catch(r){}}}catch(c){}}}(),Tracker=function(){"use strict";var n=_mods_pageTrack_js,e=_mods_jstracker_js;return n(),e}();