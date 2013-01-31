/** @license
 *
 * SoundManager 2: JavaScript Sound for the Web
 * ----------------------------------------------
 * http://schillmania.com/projects/soundmanager2/
 *
 * Copyright (c) 2007, Scott Schiller. All rights reserved.
 * Code provided under the BSD License:
 * http://schillmania.com/projects/soundmanager2/license.txt
 *
 * V2.97a.20130101
 */
(function(j,g){function S(S,ga){function T(b){return c.preferFlash&&B&&!c.ignoreFlash&&c.flash[b]!==g&&c.flash[b]}function n(b){return function(c){var d=this._s;return!d||!d._a?null:b.call(this,c)}}this.setupOptions={url:S||null,flashVersion:8,debugMode:!0,debugFlash:!1,useConsole:!0,consoleOnly:!0,waitForWindowLoad:!1,bgColor:"#ffffff",useHighPerformance:!1,flashPollingInterval:null,html5PollingInterval:null,flashLoadTimeout:1E3,wmode:null,allowScriptAccess:"always",useFlashBlock:!1,useHTML5Audio:!0,
html5Test:/^(probably|maybe)$/i,preferFlash:!0,noSWFCache:!1};this.defaultOptions={autoLoad:!1,autoPlay:!1,from:null,loops:1,onid3:null,onload:null,whileloading:null,onplay:null,onpause:null,onresume:null,whileplaying:null,onposition:null,onstop:null,onfailure:null,onfinish:null,multiShot:!0,multiShotEvents:!1,position:null,pan:0,stream:!0,to:null,type:null,usePolicyFile:!1,volume:100};this.flash9Options={isMovieStar:null,usePeakData:!1,useWaveformData:!1,useEQData:!1,onbufferchange:null,ondataerror:null};
this.movieStarOptions={bufferTime:3,serverURL:null,onconnect:null,duration:null};this.audioFormats={mp3:{type:['audio/mpeg; codecs\x3d"mp3"',"audio/mpeg","audio/mp3","audio/MPA","audio/mpa-robust"],required:!0},mp4:{related:["aac","m4a","m4b"],type:['audio/mp4; codecs\x3d"mp4a.40.2"',"audio/aac","audio/x-m4a","audio/MP4A-LATM","audio/mpeg4-generic"],required:!1},ogg:{type:["audio/ogg; codecs\x3dvorbis"],required:!1},opus:{type:["audio/ogg; codecs\x3dopus","audio/opus"],required:!1},wav:{type:['audio/wav; codecs\x3d"1"',
"audio/wav","audio/wave","audio/x-wav"],required:!1}};this.movieID="sm2-container";this.id=ga||"sm2movie";this.debugID="soundmanager-debug";this.debugURLParam=/([#?&])debug=1/i;this.versionNumber="V2.97a.20130101";this.altURL=this.movieURL=this.version=null;this.enabled=this.swfLoaded=!1;this.oMC=null;this.sounds={};this.soundIDs=[];this.didFlashBlock=this.muted=!1;this.filePattern=null;this.filePatterns={flash8:/\.mp3(\?.*)?$/i,flash9:/\.mp3(\?.*)?$/i};this.features={buffering:!1,peakData:!1,waveformData:!1,
eqData:!1,movieStar:!1};this.sandbox={};this.html5={usingFlash:null};this.flash={};this.ignoreFlash=this.html5Only=!1;var Ha,c=this,Ia=null,h=null,U,r=navigator.userAgent,ha=j.location.href.toString(),m=document,ia,Ja,ja,l,s=[],K=!1,L=!1,k=!1,t=!1,ka=!1,M,u,la,V,ma,C,D,E,Ka,na,W,oa,X,pa,F,qa,N,ra,Y,G,La,sa,Ma,ta,Na,O=null,ua=null,w,va,H,Z,$,I,q,P=!1,wa=!1,Oa,Pa,Qa,aa=0,Q=null,ba,Ra=[],v=null,Sa,ca,R,z,xa,ya,Ta,p,eb=Array.prototype.slice,x=!1,za,B,Aa,Ua,y,da=r.match(/(ipad|iphone|ipod)/i),Va=r.match(/android/i),
A=r.match(/msie/i),fb=r.match(/webkit/i),Ba=r.match(/safari/i)&&!r.match(/chrome/i),Ca=r.match(/opera/i),Da=r.match(/(mobile|pre\/|xoom)/i)||da||Va,Wa=!ha.match(/usehtml5audio/i)&&!ha.match(/sm2\-ignorebadua/i)&&Ba&&!r.match(/silk/i)&&r.match(/OS X 10_6_([3-7])/i),Ea=m.hasFocus!==g?m.hasFocus():null,ea=Ba&&(m.hasFocus===g||!m.hasFocus()),Xa=!ea,Ya=/(mp3|mp4|mpa|m4a|m4b)/i,Fa=m.location?m.location.protocol.match(/http/i):null,Za=!Fa?"http://":"",$a=/^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,
ab="mpeg4 aac flv mov mp4 m4v f4v m4a m4b mp4v 3gp 3g2".split(" "),gb=RegExp("\\.("+ab.join("|")+")(\\?.*)?$","i");this.mimePattern=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;this.useAltURL=!Fa;var Ga;try{Ga=Audio!==g&&(Ca&&opera!==g&&10>opera.version()?new Audio(null):new Audio).canPlayType!==g}catch(ib){Ga=!1}this.hasHTML5=Ga;this.setup=function(b){var e=!c.url;b!==g&&(k&&v&&c.ok()&&(b.flashVersion!==g||b.url!==g||b.html5Test!==g))&&I(w("setupLate"));la(b);e&&(N&&b.url!==g)&&c.beginDelayedInit();
!N&&(b.url!==g&&"complete"===m.readyState)&&setTimeout(F,1);return c};this.supported=this.ok=function(){return v?k&&!t:c.useHTML5Audio&&c.hasHTML5};this.getMovie=function(b){return U(b)||m[b]||j[b]};this.createSound=function(b,e){function d(){a=Z(a);c.sounds[a.id]=new Ha(a);c.soundIDs.push(a.id);return c.sounds[a.id]}var a,f=null;if(!k||!c.ok())return I(void 0),!1;e!==g&&(b={id:b,url:e});a=u(b);a.url=ba(a.url);if(q(a.id,!0))return c.sounds[a.id];ca(a)?(f=d(),f._setup_html5(a)):(8<l&&null===a.isMovieStar&&
(a.isMovieStar=!(!a.serverURL&&!(a.type&&a.type.match($a)||a.url.match(gb)))),a=$(a,void 0),f=d(),8===l?h._createSound(a.id,a.loops||1,a.usePolicyFile):(h._createSound(a.id,a.url,a.usePeakData,a.useWaveformData,a.useEQData,a.isMovieStar,a.isMovieStar?a.bufferTime:!1,a.loops||1,a.serverURL,a.duration||null,a.autoPlay,!0,a.autoLoad,a.usePolicyFile),a.serverURL||(f.connected=!0,a.onconnect&&a.onconnect.apply(f))),!a.serverURL&&(a.autoLoad||a.autoPlay)&&f.load(a));!a.serverURL&&a.autoPlay&&f.play();return f};
this.destroySound=function(b,e){if(!q(b))return!1;var d=c.sounds[b],a;d._iO={};d.stop();d.unload();for(a=0;a<c.soundIDs.length;a++)if(c.soundIDs[a]===b){c.soundIDs.splice(a,1);break}e||d.destruct(!0);delete c.sounds[b];return!0};this.load=function(b,e){return!q(b)?!1:c.sounds[b].load(e)};this.unload=function(b){return!q(b)?!1:c.sounds[b].unload()};this.onposition=this.onPosition=function(b,e,d,a){return!q(b)?!1:c.sounds[b].onposition(e,d,a)};this.clearOnPosition=function(b,e,d){return!q(b)?!1:c.sounds[b].clearOnPosition(e,
d)};this.start=this.play=function(b,e){var d=!1;return!k||!c.ok()?(I("soundManager.play(): "+w(!k?"notReady":"notOK")),d):!q(b)?(e instanceof Object||(e={url:e}),e&&e.url&&(e.id=b,d=c.createSound(e).play()),d):c.sounds[b].play(e)};this.setPosition=function(b,e){return!q(b)?!1:c.sounds[b].setPosition(e)};this.stop=function(b){return!q(b)?!1:c.sounds[b].stop()};this.stopAll=function(){for(var b in c.sounds)c.sounds.hasOwnProperty(b)&&c.sounds[b].stop()};this.pause=function(b){return!q(b)?!1:c.sounds[b].pause()};
this.pauseAll=function(){var b;for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].pause()};this.resume=function(b){return!q(b)?!1:c.sounds[b].resume()};this.resumeAll=function(){var b;for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].resume()};this.togglePause=function(b){return!q(b)?!1:c.sounds[b].togglePause()};this.setPan=function(b,e){return!q(b)?!1:c.sounds[b].setPan(e)};this.setVolume=function(b,e){return!q(b)?!1:c.sounds[b].setVolume(e)};this.mute=function(b){var e=0;b instanceof
String&&(b=null);if(b)return!q(b)?!1:c.sounds[b].mute();for(e=c.soundIDs.length-1;0<=e;e--)c.sounds[c.soundIDs[e]].mute();return c.muted=!0};this.muteAll=function(){c.mute()};this.unmute=function(b){b instanceof String&&(b=null);if(b)return!q(b)?!1:c.sounds[b].unmute();for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].unmute();c.muted=!1;return!0};this.unmuteAll=function(){c.unmute()};this.toggleMute=function(b){return!q(b)?!1:c.sounds[b].toggleMute()};this.getMemoryUse=function(){var b=
0;h&&8!==l&&(b=parseInt(h._getMemoryUse(),10));return b};this.disable=function(b){var e;b===g&&(b=!1);if(t)return!1;t=!0;for(e=c.soundIDs.length-1;0<=e;e--)Ma(c.sounds[c.soundIDs[e]]);M(b);p.remove(j,"load",D);return!0};this.canPlayMIME=function(b){var e;c.hasHTML5&&(e=R({type:b}));!e&&v&&(e=b&&c.ok()?!!(8<l&&b.match($a)||b.match(c.mimePattern)):null);return e};this.canPlayURL=function(b){var e;c.hasHTML5&&(e=R({url:b}));!e&&v&&(e=b&&c.ok()?!!b.match(c.filePattern):null);return e};this.canPlayLink=
function(b){return b.type!==g&&b.type&&c.canPlayMIME(b.type)?!0:c.canPlayURL(b.href)};this.getSoundById=function(b){if(!b)throw Error("soundManager.getSoundById(): sID is null/_undefined");return c.sounds[b]};this.onready=function(b,c){if("function"===typeof b)c||(c=j),ma("onready",b,c),C();else throw w("needFunction","onready");return!0};this.ontimeout=function(b,c){if("function"===typeof b)c||(c=j),ma("ontimeout",b,c),C({type:"ontimeout"});else throw w("needFunction","ontimeout");return!0};this._wD=
this._writeDebug=function(){return!0};this._debug=function(){};this.reboot=function(b,e){var d,a,f;for(d=c.soundIDs.length-1;0<=d;d--)c.sounds[c.soundIDs[d]].destruct();if(h)try{A&&(ua=h.innerHTML),O=h.parentNode.removeChild(h)}catch(g){}ua=O=v=h=null;c.enabled=N=k=P=wa=K=L=t=x=c.swfLoaded=!1;c.soundIDs=[];c.sounds={};if(b)s=[];else for(d in s)if(s.hasOwnProperty(d)){a=0;for(f=s[d].length;a<f;a++)s[d][a].fired=!1}c.html5={usingFlash:null};c.flash={};c.html5Only=!1;c.ignoreFlash=!1;j.setTimeout(function(){pa();
e||c.beginDelayedInit()},20);return c};this.reset=function(){return c.reboot(!0,!0)};this.getMoviePercent=function(){return h&&"PercentLoaded"in h?h.PercentLoaded():null};this.beginDelayedInit=function(){ka=!0;F();setTimeout(function(){if(wa)return!1;Y();X();return wa=!0},20);E()};this.destruct=function(){c.disable(!0)};Ha=function(b){var e,d,a=this,f,bb,j,J,m,n,r=!1,k=[],p=0,t,v,s=null;d=e=null;this.sID=this.id=b.id;this.url=b.url;this._iO=this.instanceOptions=this.options=u(b);this.pan=this.options.pan;
this.volume=this.options.volume;this.isHTML5=!1;this._a=null;this.id3={};this._debug=function(){};this.load=function(b){var c=null;b!==g?a._iO=u(b,a.options):(b=a.options,a._iO=b,s&&s!==a.url&&(a._iO.url=a.url,a.url=null));a._iO.url||(a._iO.url=a.url);a._iO.url=ba(a._iO.url);b=a.instanceOptions=a._iO;if(b.url===a.url&&0!==a.readyState&&2!==a.readyState)return 3===a.readyState&&b.onload&&b.onload.apply(a,[!!a.duration]),a;a.loaded=!1;a.readyState=1;a.playState=0;a.id3={};if(ca(b))c=a._setup_html5(b),
c._called_load||(a._html5_canplay=!1,a.url!==b.url&&(a._a.src=b.url,a.setPosition(0)),a._a.autobuffer="auto",a._a.preload="auto",a._a._called_load=!0,b.autoPlay&&a.play());else try{a.isHTML5=!1,a._iO=$(Z(b)),b=a._iO,8===l?h._load(a.id,b.url,b.stream,b.autoPlay,b.usePolicyFile):h._load(a.id,b.url,!!b.stream,!!b.autoPlay,b.loops||1,!!b.autoLoad,b.usePolicyFile)}catch(e){G({type:"SMSOUND_LOAD_JS_EXCEPTION",fatal:!0})}a.url=b.url;return a};this.unload=function(){0!==a.readyState&&(a.isHTML5?(J(),a._a&&
(a._a.pause(),xa(a._a,"about:blank"),s="about:blank")):8===l?h._unload(a.id,"about:blank"):h._unload(a.id),f());return a};this.destruct=function(b){a.isHTML5?(J(),a._a&&(a._a.pause(),xa(a._a),x||j(),a._a._s=null,a._a=null)):(a._iO.onfailure=null,h._destroySound(a.id));b||c.destroySound(a.id,!0)};this.start=this.play=function(b,c){var e,d;d=!0;d=null;c=c===g?!0:c;b||(b={});a.url&&(a._iO.url=a.url);a._iO=u(a._iO,a.options);a._iO=u(b,a._iO);a._iO.url=ba(a._iO.url);a.instanceOptions=a._iO;if(a._iO.serverURL&&
!a.connected)return a.getAutoPlay()||a.setAutoPlay(!0),a;ca(a._iO)&&(a._setup_html5(a._iO),m());1===a.playState&&!a.paused&&((e=a._iO.multiShot)||(d=a));if(null!==d)return d;b.url&&b.url!==a.url&&a.load(a._iO);a.loaded||(0===a.readyState?(a.isHTML5||(a._iO.autoPlay=!0),a.load(a._iO),a.instanceOptions=a._iO):2===a.readyState&&(d=a));if(null!==d)return d;!a.isHTML5&&(9===l&&0<a.position&&a.position===a.duration)&&(b.position=0);if(a.paused&&0<=a.position&&(!a._iO.serverURL||0<a.position))a.resume();
else{a._iO=u(b,a._iO);if(null!==a._iO.from&&null!==a._iO.to&&0===a.instanceCount&&0===a.playState&&!a._iO.serverURL){e=function(){a._iO=u(b,a._iO);a.play(a._iO)};if(a.isHTML5&&!a._html5_canplay)a.load({oncanplay:e}),d=!1;else if(!a.isHTML5&&!a.loaded&&(!a.readyState||2!==a.readyState))a.load({onload:e}),d=!1;if(null!==d)return d;a._iO=v()}(!a.instanceCount||a._iO.multiShotEvents||!a.isHTML5&&8<l&&!a.getAutoPlay())&&a.instanceCount++;a._iO.onposition&&0===a.playState&&n(a);a.playState=1;a.paused=!1;
a.position=a._iO.position!==g&&!isNaN(a._iO.position)?a._iO.position:0;a.isHTML5||(a._iO=$(Z(a._iO)));a._iO.onplay&&c&&(a._iO.onplay.apply(a),r=!0);a.setVolume(a._iO.volume,!0);a.setPan(a._iO.pan,!0);a.isHTML5?(m(),d=a._setup_html5(),a.setPosition(a._iO.position),d.play()):(d=h._start(a.id,a._iO.loops||1,9===l?a._iO.position:a._iO.position/1E3,a._iO.multiShot),9===l&&!d&&a._iO.onplayerror&&a._iO.onplayerror.apply(a))}return a};this.stop=function(b){var c=a._iO;1===a.playState&&(a._onbufferchange(0),
a._resetOnPosition(0),a.paused=!1,a.isHTML5||(a.playState=0),t(),c.to&&a.clearOnPosition(c.to),a.isHTML5?a._a&&(b=a.position,a.setPosition(0),a.position=b,a._a.pause(),a.playState=0,a._onTimer(),J()):(h._stop(a.id,b),c.serverURL&&a.unload()),a.instanceCount=0,a._iO={},c.onstop&&c.onstop.apply(a));return a};this.setAutoPlay=function(b){a._iO.autoPlay=b;a.isHTML5||(h._setAutoPlay(a.id,b),b&&!a.instanceCount&&1===a.readyState&&a.instanceCount++)};this.getAutoPlay=function(){return a._iO.autoPlay};this.setPosition=
function(b){b===g&&(b=0);var c=a.isHTML5?Math.max(b,0):Math.min(a.duration||a._iO.duration,Math.max(b,0));a.position=c;b=a.position/1E3;a._resetOnPosition(a.position);a._iO.position=c;if(a.isHTML5){if(a._a&&a._html5_canplay&&a._a.currentTime!==b)try{a._a.currentTime=b,(0===a.playState||a.paused)&&a._a.pause()}catch(e){}}else b=9===l?a.position:b,a.readyState&&2!==a.readyState&&h._setPosition(a.id,b,a.paused||!a.playState,a._iO.multiShot);a.isHTML5&&a.paused&&a._onTimer(!0);return a};this.pause=function(b){if(a.paused||
0===a.playState&&1!==a.readyState)return a;a.paused=!0;a.isHTML5?(a._setup_html5().pause(),J()):(b||b===g)&&h._pause(a.id,a._iO.multiShot);a._iO.onpause&&a._iO.onpause.apply(a);return a};this.resume=function(){var b=a._iO;if(!a.paused)return a;a.paused=!1;a.playState=1;a.isHTML5?(a._setup_html5().play(),m()):(b.isMovieStar&&!b.serverURL&&a.setPosition(a.position),h._pause(a.id,b.multiShot));!r&&b.onplay?(b.onplay.apply(a),r=!0):b.onresume&&b.onresume.apply(a);return a};this.togglePause=function(){if(0===
a.playState)return a.play({position:9===l&&!a.isHTML5?a.position:a.position/1E3}),a;a.paused?a.resume():a.pause();return a};this.setPan=function(b,c){b===g&&(b=0);c===g&&(c=!1);a.isHTML5||h._setPan(a.id,b);a._iO.pan=b;c||(a.pan=b,a.options.pan=b);return a};this.setVolume=function(b,e){b===g&&(b=100);e===g&&(e=!1);a.isHTML5?a._a&&(a._a.volume=Math.max(0,Math.min(1,b/100))):h._setVolume(a.id,c.muted&&!a.muted||a.muted?0:b);a._iO.volume=b;e||(a.volume=b,a.options.volume=b);return a};this.mute=function(){a.muted=
!0;a.isHTML5?a._a&&(a._a.muted=!0):h._setVolume(a.id,0);return a};this.unmute=function(){a.muted=!1;var b=a._iO.volume!==g;a.isHTML5?a._a&&(a._a.muted=!1):h._setVolume(a.id,b?a._iO.volume:a.options.volume);return a};this.toggleMute=function(){return a.muted?a.unmute():a.mute()};this.onposition=this.onPosition=function(b,c,e){k.push({position:parseInt(b,10),method:c,scope:e!==g?e:a,fired:!1});return a};this.clearOnPosition=function(a,b){var c;a=parseInt(a,10);if(isNaN(a))return!1;for(c=0;c<k.length;c++)if(a===
k[c].position&&(!b||b===k[c].method))k[c].fired&&p--,k.splice(c,1)};this._processOnPosition=function(){var b,c;b=k.length;if(!b||!a.playState||p>=b)return!1;for(b-=1;0<=b;b--)c=k[b],!c.fired&&a.position>=c.position&&(c.fired=!0,p++,c.method.apply(c.scope,[c.position]));return!0};this._resetOnPosition=function(a){var b,c;b=k.length;if(!b)return!1;for(b-=1;0<=b;b--)c=k[b],c.fired&&a<=c.position&&(c.fired=!1,p--);return!0};v=function(){var b=a._iO,c=b.from,e=b.to,d,f;f=function(){a.clearOnPosition(e,
f);a.stop()};d=function(){if(null!==e&&!isNaN(e))a.onPosition(e,f)};null!==c&&!isNaN(c)&&(b.position=c,b.multiShot=!1,d());return b};n=function(){var b,c=a._iO.onposition;if(c)for(b in c)if(c.hasOwnProperty(b))a.onPosition(parseInt(b,10),c[b])};t=function(){var b,c=a._iO.onposition;if(c)for(b in c)c.hasOwnProperty(b)&&a.clearOnPosition(parseInt(b,10))};m=function(){a.isHTML5&&Oa(a)};J=function(){a.isHTML5&&Pa(a)};f=function(b){b||(k=[],p=0);r=!1;a._hasTimer=null;a._a=null;a._html5_canplay=!1;a.bytesLoaded=
null;a.bytesTotal=null;a.duration=a._iO&&a._iO.duration?a._iO.duration:null;a.durationEstimate=null;a.buffered=[];a.eqData=[];a.eqData.left=[];a.eqData.right=[];a.failures=0;a.isBuffering=!1;a.instanceOptions={};a.instanceCount=0;a.loaded=!1;a.metadata={};a.readyState=0;a.muted=!1;a.paused=!1;a.peakData={left:0,right:0};a.waveformData={left:[],right:[]};a.playState=0;a.position=null;a.id3={}};f();this._onTimer=function(b){var c,f=!1,g={};if(a._hasTimer||b){if(a._a&&(b||(0<a.playState||1===a.readyState)&&
!a.paused))c=a._get_html5_duration(),c!==e&&(e=c,a.duration=c,f=!0),a.durationEstimate=a.duration,c=1E3*a._a.currentTime||0,c!==d&&(d=c,f=!0),(f||b)&&a._whileplaying(c,g,g,g,g);return f}};this._get_html5_duration=function(){var b=a._iO;return(b=a._a&&a._a.duration?1E3*a._a.duration:b&&b.duration?b.duration:null)&&!isNaN(b)&&Infinity!==b?b:null};this._apply_loop=function(a,b){a.loop=1<b?"loop":""};this._setup_html5=function(b){b=u(a._iO,b);var c=decodeURI,e=x?Ia:a._a,d=c(b.url),g;x?d===za&&(g=!0):
d===s&&(g=!0);if(e){if(e._s)if(x)e._s&&(e._s.playState&&!g)&&e._s.stop();else if(!x&&d===c(s))return a._apply_loop(e,b.loops),e;g||(f(!1),e.src=b.url,za=s=a.url=b.url,e._called_load=!1)}else a._a=b.autoLoad||b.autoPlay?new Audio(b.url):Ca&&10>opera.version()?new Audio(null):new Audio,e=a._a,e._called_load=!1,x&&(Ia=e);a.isHTML5=!0;a._a=e;e._s=a;bb();a._apply_loop(e,b.loops);b.autoLoad||b.autoPlay?a.load():(e.autobuffer=!1,e.preload="auto");return e};bb=function(){if(a._a._added_events)return!1;var b;
a._a._added_events=!0;for(b in y)y.hasOwnProperty(b)&&a._a&&a._a.addEventListener(b,y[b],!1);return!0};j=function(){var b;a._a._added_events=!1;for(b in y)y.hasOwnProperty(b)&&a._a&&a._a.removeEventListener(b,y[b],!1)};this._onload=function(b){b=!!b||!a.isHTML5&&8===l&&a.duration;a.loaded=b;a.readyState=b?3:2;a._onbufferchange(0);a._iO.onload&&a._iO.onload.apply(a,[b]);return!0};this._onbufferchange=function(b){if(0===a.playState||b&&a.isBuffering||!b&&!a.isBuffering)return!1;a.isBuffering=1===b;
a._iO.onbufferchange&&a._iO.onbufferchange.apply(a);return!0};this._onsuspend=function(){a._iO.onsuspend&&a._iO.onsuspend.apply(a);return!0};this._onfailure=function(b,c,e){a.failures++;if(a._iO.onfailure&&1===a.failures)a._iO.onfailure(a,b,c,e)};this._onfinish=function(){var b=a._iO.onfinish;a._onbufferchange(0);a._resetOnPosition(0);a.instanceCount&&(a.instanceCount--,a.instanceCount||(t(),a.playState=0,a.paused=!1,a.instanceCount=0,a.instanceOptions={},a._iO={},J(),a.isHTML5&&(a.position=0)),(!a.instanceCount||
a._iO.multiShotEvents)&&b&&b.apply(a))};this._whileloading=function(b,c,e,d){var f=a._iO;a.bytesLoaded=b;a.bytesTotal=c;a.duration=Math.floor(e);a.bufferLength=d;a.durationEstimate=!a.isHTML5&&!f.isMovieStar?f.duration?a.duration>f.duration?a.duration:f.duration:parseInt(a.bytesTotal/a.bytesLoaded*a.duration,10):a.duration;a.isHTML5||(a.buffered=[{start:0,end:a.duration}]);(3!==a.readyState||a.isHTML5)&&f.whileloading&&f.whileloading.apply(a)};this._whileplaying=function(b,c,e,d,f){var h=a._iO;if(isNaN(b)||
null===b)return!1;a.position=Math.max(0,b);a._processOnPosition();!a.isHTML5&&8<l&&(h.usePeakData&&(c!==g&&c)&&(a.peakData={left:c.leftPeak,right:c.rightPeak}),h.useWaveformData&&(e!==g&&e)&&(a.waveformData={left:e.split(","),right:d.split(",")}),h.useEQData&&(f!==g&&f&&f.leftEQ)&&(b=f.leftEQ.split(","),a.eqData=b,a.eqData.left=b,f.rightEQ!==g&&f.rightEQ&&(a.eqData.right=f.rightEQ.split(","))));1===a.playState&&(!a.isHTML5&&(8===l&&!a.position&&a.isBuffering)&&a._onbufferchange(0),h.whileplaying&&
h.whileplaying.apply(a));return!0};this._oncaptiondata=function(b){a.captiondata=b;a._iO.oncaptiondata&&a._iO.oncaptiondata.apply(a,[b])};this._onmetadata=function(b,c){var e={},d,f;d=0;for(f=b.length;d<f;d++)e[b[d]]=c[d];a.metadata=e;a._iO.onmetadata&&a._iO.onmetadata.apply(a)};this._onid3=function(b,c){var e=[],d,f;d=0;for(f=b.length;d<f;d++)e[b[d]]=c[d];a.id3=u(a.id3,e);a._iO.onid3&&a._iO.onid3.apply(a)};this._onconnect=function(b){b=1===b;if(a.connected=b)a.failures=0,q(a.id)&&(a.getAutoPlay()?
a.play(g,a.getAutoPlay()):a._iO.autoLoad&&a.load()),a._iO.onconnect&&a._iO.onconnect.apply(a,[b])};this._ondataerror=function(){0<a.playState&&a._iO.ondataerror&&a._iO.ondataerror.apply(a)}};ra=function(){return m.body||m._docElement||m.getElementsByTagName("div")[0]};U=function(b){return m.getElementById(b)};u=function(b,e){var d=b||{},a,f;a=e===g?c.defaultOptions:e;for(f in a)a.hasOwnProperty(f)&&d[f]===g&&(d[f]="object"!==typeof a[f]||null===a[f]?a[f]:u(d[f],a[f]));return d};V={onready:1,ontimeout:1,
defaultOptions:1,flash9Options:1,movieStarOptions:1};la=function(b,e){var d,a=!0,f=e!==g,h=c.setupOptions;for(d in b)if(b.hasOwnProperty(d))if("object"!==typeof b[d]||null===b[d]||b[d]instanceof Array||b[d]instanceof RegExp)f&&V[e]!==g?c[e][d]=b[d]:h[d]!==g?(c.setupOptions[d]=b[d],c[d]=b[d]):V[d]===g?(I(w(c[d]===g?"setupUndef":"setupError",d),2),a=!1):c[d]instanceof Function?c[d].apply(c,b[d]instanceof Array?b[d]:[b[d]]):c[d]=b[d];else if(V[d]===g)I(w(c[d]===g?"setupUndef":"setupError",d),2),a=!1;
else return la(b[d],d);return a};var cb=function(b){b=eb.call(b);var c=b.length;fa?(b[1]="on"+b[1],3<c&&b.pop()):3===c&&b.push(!1);return b},db=function(b,c){var d=b.shift(),a=[hb[c]];if(fa)d[a](b[0],b[1]);else d[a].apply(d,b)},fa=j.attachEvent,hb={add:fa?"attachEvent":"addEventListener",remove:fa?"detachEvent":"removeEventListener"};p={add:function(){db(cb(arguments),"add")},remove:function(){db(cb(arguments),"remove")}};y={abort:n(function(){}),canplay:n(function(){var b=this._s,c;if(b._html5_canplay)return!0;
b._html5_canplay=!0;b._onbufferchange(0);c=b._iO.position!==g&&!isNaN(b._iO.position)?b._iO.position/1E3:null;if(b.position&&this.currentTime!==c)try{this.currentTime=c}catch(d){}b._iO._oncanplay&&b._iO._oncanplay()}),canplaythrough:n(function(){var b=this._s;b.loaded||(b._onbufferchange(0),b._whileloading(b.bytesLoaded,b.bytesTotal,b._get_html5_duration()),b._onload(!0))}),ended:n(function(){this._s._onfinish()}),error:n(function(){this._s._onload(!1)}),loadeddata:n(function(){var b=this._s;!b._loaded&&
!Ba&&(b.duration=b._get_html5_duration())}),loadedmetadata:n(function(){}),loadstart:n(function(){this._s._onbufferchange(1)}),play:n(function(){this._s._onbufferchange(0)}),playing:n(function(){this._s._onbufferchange(0)}),progress:n(function(b){var c=this._s,d,a,f=0,f=b.target.buffered;d=b.loaded||0;var g=b.total||1;c.buffered=[];if(f&&f.length){d=0;for(a=f.length;d<a;d++)c.buffered.push({start:1E3*f.start(d),end:1E3*f.end(d)});f=1E3*(f.end(0)-f.start(0));d=f/(1E3*b.target.duration)}isNaN(d)||(c._onbufferchange(0),
c._whileloading(d,g,c._get_html5_duration()),d&&(g&&d===g)&&y.canplaythrough.call(this,b))}),ratechange:n(function(){}),suspend:n(function(b){var c=this._s;y.progress.call(this,b);c._onsuspend()}),stalled:n(function(){}),timeupdate:n(function(){this._s._onTimer()}),waiting:n(function(){this._s._onbufferchange(1)})};ca=function(b){return b.serverURL||b.type&&T(b.type)?!1:b.type?R({type:b.type}):R({url:b.url})||c.html5Only};xa=function(b,c){b&&(b.src=c,b._called_load=!1);x&&(za=null)};R=function(b){if(!c.useHTML5Audio||
!c.hasHTML5)return!1;var e=b.url||null;b=b.type||null;var d=c.audioFormats,a;if(b&&c.html5[b]!==g)return c.html5[b]&&!T(b);if(!z){z=[];for(a in d)d.hasOwnProperty(a)&&(z.push(a),d[a].related&&(z=z.concat(d[a].related)));z=RegExp("\\.("+z.join("|")+")(\\?.*)?$","i")}a=e?e.toLowerCase().match(z):null;!a||!a.length?b&&(e=b.indexOf(";"),a=(-1!==e?b.substr(0,e):b).substr(6)):a=a[1];a&&c.html5[a]!==g?e=c.html5[a]&&!T(a):(b="audio/"+a,e=c.html5.canPlayType({type:b}),e=(c.html5[a]=e)&&c.html5[b]&&!T(b));
return e};Ta=function(){function b(a){var b,d,f=b=!1;if(!e||"function"!==typeof e.canPlayType)return b;if(a instanceof Array){b=0;for(d=a.length;b<d;b++)if(c.html5[a[b]]||e.canPlayType(a[b]).match(c.html5Test))f=!0,c.html5[a[b]]=!0,c.flash[a[b]]=!!a[b].match(Ya);b=f}else a=e&&"function"===typeof e.canPlayType?e.canPlayType(a):!1,b=!(!a||!a.match(c.html5Test));return b}if(!c.useHTML5Audio||!c.hasHTML5)return!1;var e=Audio!==g?Ca&&10>opera.version()?new Audio(null):new Audio:null,d,a,f={},h;h=c.audioFormats;
for(d in h)if(h.hasOwnProperty(d)&&(a="audio/"+d,f[d]=b(h[d].type),f[a]=f[d],d.match(Ya)?(c.flash[d]=!0,c.flash[a]=!0):(c.flash[d]=!1,c.flash[a]=!1),h[d]&&h[d].related))for(a=h[d].related.length-1;0<=a;a--)f["audio/"+h[d].related[a]]=f[d],c.html5[h[d].related[a]]=f[d],c.flash[h[d].related[a]]=f[d];f.canPlayType=e?b:null;c.html5=u(c.html5,f);return!0};oa={};w=function(){};Z=function(b){8===l&&(1<b.loops&&b.stream)&&(b.stream=!1);return b};$=function(b){if(b&&!b.usePolicyFile&&(b.onid3||b.usePeakData||
b.useWaveformData||b.useEQData))b.usePolicyFile=!0;return b};I=function(){};ia=function(){return!1};Ma=function(b){for(var c in b)b.hasOwnProperty(c)&&"function"===typeof b[c]&&(b[c]=ia)};ta=function(b){b===g&&(b=!1);(t||b)&&c.disable(b)};Na=function(b){var e=null;if(b)if(b.match(/\.swf(\?.*)?$/i)){if(e=b.substr(b.toLowerCase().lastIndexOf(".swf?")+4))return b}else b.lastIndexOf("/")!==b.length-1&&(b+="/");b=(b&&-1!==b.lastIndexOf("/")?b.substr(0,b.lastIndexOf("/")+1):"./")+c.movieURL;c.noSWFCache&&
(b+="?ts\x3d"+(new Date).getTime());return b};na=function(){l=parseInt(c.flashVersion,10);8!==l&&9!==l&&(c.flashVersion=l=8);var b=c.debugMode||c.debugFlash?"_debug.swf":".swf";c.useHTML5Audio&&(!c.html5Only&&c.audioFormats.mp4.required&&9>l)&&(c.flashVersion=l=9);c.version=c.versionNumber+(c.html5Only?" (HTML5-only mode)":9===l?" (AS3/Flash 9)":" (AS2/Flash 8)");8<l?(c.defaultOptions=u(c.defaultOptions,c.flash9Options),c.features.buffering=!0,c.defaultOptions=u(c.defaultOptions,c.movieStarOptions),
c.filePatterns.flash9=RegExp("\\.(mp3|"+ab.join("|")+")(\\?.*)?$","i"),c.features.movieStar=!0):c.features.movieStar=!1;c.filePattern=c.filePatterns[8!==l?"flash9":"flash8"];c.movieURL=(8===l?"soundmanager2.swf":"soundmanager2_flash9.swf").replace(".swf",b);c.features.peakData=c.features.waveformData=c.features.eqData=8<l};La=function(b,c){if(!h)return!1;h._setPolling(b,c)};sa=function(){c.debugURLParam.test(ha)&&(c.debugMode=!0)};q=this.getSoundById;H=function(){var b=[];c.debugMode&&b.push("sm2_debug");
c.debugFlash&&b.push("flash_debug");c.useHighPerformance&&b.push("high_performance");return b.join(" ")};va=function(){w("fbHandler");var b=c.getMoviePercent(),e={type:"FLASHBLOCK"};if(c.html5Only)return!1;c.ok()?c.oMC&&(c.oMC.className=[H(),"movieContainer","swf_loaded"+(c.didFlashBlock?" swf_unblocked":"")].join(" ")):(v&&(c.oMC.className=H()+" movieContainer "+(null===b?"swf_timedout":"swf_error")),c.didFlashBlock=!0,C({type:"ontimeout",ignoreInit:!0,error:e}),G(e))};ma=function(b,c,d){s[b]===
g&&(s[b]=[]);s[b].push({method:c,scope:d||null,fired:!1})};C=function(b){b||(b={type:c.ok()?"onready":"ontimeout"});if(!k&&b&&!b.ignoreInit||"ontimeout"===b.type&&(c.ok()||t&&!b.ignoreInit))return!1;var e={success:b&&b.ignoreInit?c.ok():!t},d=b&&b.type?s[b.type]||[]:[],a=[],f,e=[e],g=v&&!c.ok();b.error&&(e[0].error=b.error);b=0;for(f=d.length;b<f;b++)!0!==d[b].fired&&a.push(d[b]);if(a.length){b=0;for(f=a.length;b<f;b++)a[b].scope?a[b].method.apply(a[b].scope,e):a[b].method.apply(this,e),g||(a[b].fired=
!0)}return!0};D=function(){j.setTimeout(function(){c.useFlashBlock&&va();C();"function"===typeof c.onload&&c.onload.apply(j);c.waitForWindowLoad&&p.add(j,"load",D)},1)};Aa=function(){if(B!==g)return B;var b=!1,c=navigator,d=c.plugins,a,f=j.ActiveXObject;if(d&&d.length)(c=c.mimeTypes)&&(c["application/x-shockwave-flash"]&&c["application/x-shockwave-flash"].enabledPlugin&&c["application/x-shockwave-flash"].enabledPlugin.description)&&(b=!0);else if(f!==g&&!r.match(/MSAppHost/i)){try{a=new f("ShockwaveFlash.ShockwaveFlash")}catch(h){}b=
!!a}return B=b};Sa=function(){var b,e,d=c.audioFormats;if(da&&r.match(/os (1|2|3_0|3_1)/i))c.hasHTML5=!1,c.html5Only=!0,c.oMC&&(c.oMC.style.display="none");else if(c.useHTML5Audio&&(!c.html5||!c.html5.canPlayType))c.hasHTML5=!1;if(c.useHTML5Audio&&c.hasHTML5)for(e in d)if(d.hasOwnProperty(e)&&(d[e].required&&!c.html5.canPlayType(d[e].type)||c.preferFlash&&(c.flash[e]||c.flash[d[e].type])))b=!0;c.ignoreFlash&&(b=!1);c.html5Only=c.hasHTML5&&c.useHTML5Audio&&!b;return!c.html5Only};ba=function(b){var e,
d,a=0;if(b instanceof Array){e=0;for(d=b.length;e<d;e++)if(b[e]instanceof Object){if(c.canPlayMIME(b[e].type)){a=e;break}}else if(c.canPlayURL(b[e])){a=e;break}b[a].url&&(b[a]=b[a].url);b=b[a]}return b};Oa=function(b){b._hasTimer||(b._hasTimer=!0,!Da&&c.html5PollingInterval&&(null===Q&&0===aa&&(Q=j.setInterval(Qa,c.html5PollingInterval)),aa++))};Pa=function(b){b._hasTimer&&(b._hasTimer=!1,!Da&&c.html5PollingInterval&&aa--)};Qa=function(){var b;if(null!==Q&&!aa)return j.clearInterval(Q),Q=null,!1;
for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].isHTML5&&c.sounds[c.soundIDs[b]]._hasTimer&&c.sounds[c.soundIDs[b]]._onTimer()};G=function(b){b=b!==g?b:{};"function"===typeof c.onerror&&c.onerror.apply(j,[{type:b.type!==g?b.type:null}]);b.fatal!==g&&b.fatal&&c.disable()};Ua=function(){if(!Wa||!Aa())return!1;var b=c.audioFormats,e,d;for(d in b)if(b.hasOwnProperty(d)&&("mp3"===d||"mp4"===d))if(c.html5[d]=!1,b[d]&&b[d].related)for(e=b[d].related.length-1;0<=e;e--)c.html5[b[d].related[e]]=
!1};this._setSandboxType=function(){};this._externalInterfaceOK=function(){if(c.swfLoaded)return!1;c.swfLoaded=!0;ea=!1;Wa&&Ua();setTimeout(ja,A?100:1)};Y=function(b,e){function d(a,b){return'\x3cparam name\x3d"'+a+'" value\x3d"'+b+'" /\x3e'}if(K&&L)return!1;if(c.html5Only)return na(),c.oMC=U(c.movieID),ja(),L=K=!0,!1;var a=e||c.url,f=c.altURL||a,h=ra(),j=H(),l=null,l=m.getElementsByTagName("html")[0],k,p,n,l=l&&l.dir&&l.dir.match(/rtl/i);b=b===g?c.id:b;na();c.url=Na(Fa?a:f);e=c.url;c.wmode=!c.wmode&&
c.useHighPerformance?"transparent":c.wmode;if(null!==c.wmode&&(r.match(/msie 8/i)||!A&&!c.useHighPerformance)&&navigator.platform.match(/win32|win64/i))Ra.push(oa.spcWmode),c.wmode=null;h={name:b,id:b,src:e,quality:"high",allowScriptAccess:c.allowScriptAccess,bgcolor:c.bgColor,pluginspage:Za+"www.macromedia.com/go/getflashplayer",title:"JS/Flash audio component (SoundManager 2)",type:"application/x-shockwave-flash",wmode:c.wmode,hasPriority:"true"};c.debugFlash&&(h.FlashVars="debug\x3d1");c.wmode||
delete h.wmode;if(A)a=m.createElement("div"),p=['\x3cobject id\x3d"'+b+'" data\x3d"'+e+'" type\x3d"'+h.type+'" title\x3d"'+h.title+'" classid\x3d"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase\x3d"'+Za+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version\x3d6,0,40,0"\x3e',d("movie",e),d("AllowScriptAccess",c.allowScriptAccess),d("quality",h.quality),c.wmode?d("wmode",c.wmode):"",d("bgcolor",c.bgColor),d("hasPriority","true"),c.debugFlash?d("FlashVars",h.FlashVars):"","\x3c/object\x3e"].join("");
else for(k in a=m.createElement("embed"),h)h.hasOwnProperty(k)&&a.setAttribute(k,h[k]);sa();j=H();if(h=ra())if(c.oMC=U(c.movieID)||m.createElement("div"),c.oMC.id)n=c.oMC.className,c.oMC.className=(n?n+" ":"movieContainer")+(j?" "+j:""),c.oMC.appendChild(a),A&&(k=c.oMC.appendChild(m.createElement("div")),k.className="sm2-object-box",k.innerHTML=p),L=!0;else{c.oMC.id=c.movieID;c.oMC.className="movieContainer "+j;k=j=null;c.useFlashBlock||(c.useHighPerformance?j={position:"fixed",width:"8px",height:"8px",
bottom:"0px",left:"0px",overflow:"hidden"}:(j={position:"absolute",width:"6px",height:"6px",top:"-9999px",left:"-9999px"},l&&(j.left=Math.abs(parseInt(j.left,10))+"px")));fb&&(c.oMC.style.zIndex=1E4);if(!c.debugFlash)for(n in j)j.hasOwnProperty(n)&&(c.oMC.style[n]=j[n]);try{A||c.oMC.appendChild(a),h.appendChild(c.oMC),A&&(k=c.oMC.appendChild(m.createElement("div")),k.className="sm2-object-box",k.innerHTML=p),L=!0}catch(q){throw Error(w("domError")+" \n"+q.toString());}}return K=!0};X=function(){if(c.html5Only)return Y(),
!1;if(h||!c.url)return!1;h=c.getMovie(c.id);h||(O?(A?c.oMC.innerHTML=ua:c.oMC.appendChild(O),O=null,K=!0):Y(c.id,c.url),h=c.getMovie(c.id));"function"===typeof c.oninitmovie&&setTimeout(c.oninitmovie,1);return!0};E=function(){setTimeout(Ka,1E3)};Ka=function(){var b,e=!1;if(!c.url||P)return!1;P=!0;p.remove(j,"load",E);if(ea&&!Ea)return!1;k||(b=c.getMoviePercent(),0<b&&100>b&&(e=!0));setTimeout(function(){b=c.getMoviePercent();if(e)return P=!1,j.setTimeout(E,1),!1;!k&&Xa&&(null===b?c.useFlashBlock||
0===c.flashLoadTimeout?c.useFlashBlock&&va():C({type:"ontimeout",ignoreInit:!0}):0!==c.flashLoadTimeout&&ta(!0))},c.flashLoadTimeout)};W=function(){if(Ea||!ea)return p.remove(j,"focus",W),!0;Ea=Xa=!0;P=!1;E();p.remove(j,"focus",W);return!0};M=function(b){if(k)return!1;if(c.html5Only)return k=!0,D(),!0;var e=!0,d;if(!c.useFlashBlock||!c.flashLoadTimeout||c.getMoviePercent())k=!0,t&&(d={type:!B&&v?"NO_FLASH":"INIT_TIMEOUT"});if(t||b)c.useFlashBlock&&c.oMC&&(c.oMC.className=H()+" "+(null===c.getMoviePercent()?
"swf_timedout":"swf_error")),C({type:"ontimeout",error:d,ignoreInit:!0}),G(d),e=!1;t||(c.waitForWindowLoad&&!ka?p.add(j,"load",D):D());return e};Ja=function(){var b,e=c.setupOptions;for(b in e)e.hasOwnProperty(b)&&(c[b]===g?c[b]=e[b]:c[b]!==e[b]&&(c.setupOptions[b]=c[b]))};ja=function(){if(k)return!1;if(c.html5Only)return k||(p.remove(j,"load",c.beginDelayedInit),c.enabled=!0,M()),!0;X();try{h._externalInterfaceTest(!1),La(!0,c.flashPollingInterval||(c.useHighPerformance?10:50)),c.debugMode||h._disableDebug(),
c.enabled=!0,c.html5Only||p.add(j,"unload",ia)}catch(b){return G({type:"JS_TO_FLASH_EXCEPTION",fatal:!0}),ta(!0),M(),!1}M();p.remove(j,"load",c.beginDelayedInit);return!0};F=function(){if(N)return!1;N=!0;Ja();sa();!B&&c.hasHTML5&&c.setup({useHTML5Audio:!0,preferFlash:!1});Ta();c.html5.usingFlash=Sa();v=c.html5.usingFlash;!B&&v&&(Ra.push(oa.needFlash),c.setup({flashLoadTimeout:1}));m.removeEventListener&&m.removeEventListener("DOMContentLoaded",F,!1);X();return!0};ya=function(){"complete"===m.readyState&&
(F(),m.detachEvent("onreadystatechange",ya));return!0};qa=function(){ka=!0;p.remove(j,"load",qa)};pa=function(){if(Da&&(c.setupOptions.useHTML5Audio=!0,c.setupOptions.preferFlash=!1,da||Va&&!r.match(/android\s2\.3/i)))da&&(c.ignoreFlash=!0),x=!0};pa();Aa();p.add(j,"focus",W);p.add(j,"load",E);p.add(j,"load",qa);m.addEventListener?m.addEventListener("DOMContentLoaded",F,!1):m.attachEvent?m.attachEvent("onreadystatechange",ya):G({type:"NO_DOM2_EVENTS",fatal:!0})}var ga=null;if(void 0===j.SM2_DEFER||
!SM2_DEFER)ga=new S;j.SoundManager=S;j.soundManager=ga})(window);