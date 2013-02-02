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
(function(j,i){function S(S,ga){function T(b){return c.preferFlash&&B&&!c.ignoreFlash&&c.flash[b]!==i&&c.flash[b]}function n(b){return function(c){var e=this._s;return!e||!e._a?null:b.call(this,c)}}this.setupOptions={url:S||null,flashVersion:8,debugMode:!0,debugFlash:!1,useConsole:!0,consoleOnly:!0,waitForWindowLoad:!1,bgColor:"#ffffff",useHighPerformance:!1,flashPollingInterval:null,html5PollingInterval:null,flashLoadTimeout:1E3,wmode:null,allowScriptAccess:"always",useFlashBlock:!1,useHTML5Audio:!0,
html5Test:/^(probably|maybe)$/i,preferFlash:!0,noSWFCache:!1};this.defaultOptions={autoLoad:!1,autoPlay:!1,from:null,loops:1,onid3:null,onload:null,whileloading:null,onplay:null,onpause:null,onresume:null,whileplaying:null,onposition:null,onstop:null,onfailure:null,onfinish:null,multiShot:!0,multiShotEvents:!1,position:null,pan:0,stream:!0,to:null,type:null,usePolicyFile:!1,volume:100};this.flash9Options={isMovieStar:null,usePeakData:!1,useWaveformData:!1,useEQData:!1,onbufferchange:null,ondataerror:null};
this.movieStarOptions={bufferTime:3,serverURL:null,onconnect:null,duration:null};this.audioFormats={mp3:{type:['audio/mpeg; codecs="mp3"',"audio/mpeg","audio/mp3","audio/MPA","audio/mpa-robust"],required:!0},mp4:{related:["aac","m4a","m4b"],type:['audio/mp4; codecs="mp4a.40.2"',"audio/aac","audio/x-m4a","audio/MP4A-LATM","audio/mpeg4-generic"],required:!1},ogg:{type:["audio/ogg; codecs=vorbis"],required:!1},opus:{type:["audio/ogg; codecs=opus","audio/opus"],required:!1},wav:{type:['audio/wav; codecs="1"',
"audio/wav","audio/wave","audio/x-wav"],required:!1}};this.movieID="sm2-container";this.id=ga||"sm2movie";this.debugID="soundmanager-debug";this.debugURLParam=/([#?&])debug=1/i;this.versionNumber="V2.97a.20130101";this.altURL=this.movieURL=this.version=null;this.enabled=this.swfLoaded=!1;this.oMC=null;this.sounds={};this.soundIDs=[];this.didFlashBlock=this.muted=!1;this.filePattern=null;this.filePatterns={flash8:/\.mp3(\?.*)?$/i,flash9:/\.mp3(\?.*)?$/i};this.features={buffering:!1,peakData:!1,waveformData:!1,
eqData:!1,movieStar:!1};this.sandbox={};this.html5={usingFlash:null};this.flash={};this.ignoreFlash=this.html5Only=!1;var Ha,c=this,Ia=null,h=null,U,r=navigator.userAgent,ha=j.location.href.toString(),m=document,ia,Ja,ja,l,s=[],K=!1,L=!1,k=!1,t=!1,ka=!1,M,u,la,V,ma,C,D,E,Ka,na,W,oa,X,pa,F,qa,N,ra,Y,G,La,sa,Ma,ta,Na,O=null,ua=null,w,va,H,Z,$,I,q,P=!1,wa=!1,Oa,Pa,Qa,aa=0,Q=null,ba,Ra=[],v=null,Sa,ca,R,z,xa,ya,Ta,p,eb=Array.prototype.slice,x=!1,za,B,Aa,Ua,y,da=r.match(/(ipad|iphone|ipod)/i),Va=r.match(/android/i),
A=r.match(/msie/i),fb=r.match(/webkit/i),Ba=r.match(/safari/i)&&!r.match(/chrome/i),Ca=r.match(/opera/i),Da=r.match(/(mobile|pre\/|xoom)/i)||da||Va,Wa=!ha.match(/usehtml5audio/i)&&!ha.match(/sm2\-ignorebadua/i)&&Ba&&!r.match(/silk/i)&&r.match(/OS X 10_6_([3-7])/i),Ea=m.hasFocus!==i?m.hasFocus():null,ea=Ba&&(m.hasFocus===i||!m.hasFocus()),Xa=!ea,Ya=/(mp3|mp4|mpa|m4a|m4b)/i,Fa=m.location?m.location.protocol.match(/http/i):null,Za=!Fa?"http://":"",$a=/^\s*audio\/(?:x-)?(?:mpeg4|aac|flv|mov|mp4||m4v|m4a|m4b|mp4v|3gp|3g2)\s*(?:$|;)/i,
ab="mpeg4 aac flv mov mp4 m4v f4v m4a m4b mp4v 3gp 3g2".split(" "),gb=RegExp("\\.("+ab.join("|")+")(\\?.*)?$","i");this.mimePattern=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;this.useAltURL=!Fa;var Ga;try{Ga=Audio!==i&&(Ca&&opera!==i&&10>opera.version()?new Audio(null):new Audio).canPlayType!==i}catch(ib){Ga=!1}this.hasHTML5=Ga;this.setup=function(b){var f=!c.url;b!==i&&(k&&v&&c.ok()&&(b.flashVersion!==i||b.url!==i||b.html5Test!==i))&&I(w("setupLate"));la(b);f&&(N&&b.url!==i)&&c.beginDelayedInit();
!N&&(b.url!==i&&"complete"===m.readyState)&&setTimeout(F,1);return c};this.supported=this.ok=function(){return v?k&&!t:c.useHTML5Audio&&c.hasHTML5};this.getMovie=function(b){return U(b)||m[b]||j[b]};this.createSound=function(b,f){function e(){a=Z(a);c.sounds[a.id]=new Ha(a);c.soundIDs.push(a.id);return c.sounds[a.id]}var a,g=null;if(!k||!c.ok())return I(void 0),!1;f!==i&&(b={id:b,url:f});a=u(b);a.url=ba(a.url);if(q(a.id,!0))return c.sounds[a.id];ca(a)?(g=e(),g._setup_html5(a)):(8<l&&null===a.isMovieStar&&
(a.isMovieStar=!(!a.serverURL&&!(a.type&&a.type.match($a)||a.url.match(gb)))),a=$(a,void 0),g=e(),8===l?h._createSound(a.id,a.loops||1,a.usePolicyFile):(h._createSound(a.id,a.url,a.usePeakData,a.useWaveformData,a.useEQData,a.isMovieStar,a.isMovieStar?a.bufferTime:!1,a.loops||1,a.serverURL,a.duration||null,a.autoPlay,!0,a.autoLoad,a.usePolicyFile),a.serverURL||(g.connected=!0,a.onconnect&&a.onconnect.apply(g))),!a.serverURL&&(a.autoLoad||a.autoPlay)&&g.load(a));!a.serverURL&&a.autoPlay&&g.play();return g};
this.destroySound=function(b,f){if(!q(b))return!1;var e=c.sounds[b],a;e._iO={};e.stop();e.unload();for(a=0;a<c.soundIDs.length;a++)if(c.soundIDs[a]===b){c.soundIDs.splice(a,1);break}f||e.destruct(!0);delete c.sounds[b];return!0};this.load=function(b,f){return!q(b)?!1:c.sounds[b].load(f)};this.unload=function(b){return!q(b)?!1:c.sounds[b].unload()};this.onposition=this.onPosition=function(b,f,e,a){return!q(b)?!1:c.sounds[b].onposition(f,e,a)};this.clearOnPosition=function(b,f,e){return!q(b)?!1:c.sounds[b].clearOnPosition(f,
e)};this.start=this.play=function(b,f){var e=!1;return!k||!c.ok()?(I("soundManager.play(): "+w(!k?"notReady":"notOK")),e):!q(b)?(f instanceof Object||(f={url:f}),f&&f.url&&(f.id=b,e=c.createSound(f).play()),e):c.sounds[b].play(f)};this.setPosition=function(b,f){return!q(b)?!1:c.sounds[b].setPosition(f)};this.stop=function(b){return!q(b)?!1:c.sounds[b].stop()};this.stopAll=function(){for(var b in c.sounds)c.sounds.hasOwnProperty(b)&&c.sounds[b].stop()};this.pause=function(b){return!q(b)?!1:c.sounds[b].pause()};
this.pauseAll=function(){var b;for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].pause()};this.resume=function(b){return!q(b)?!1:c.sounds[b].resume()};this.resumeAll=function(){var b;for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].resume()};this.togglePause=function(b){return!q(b)?!1:c.sounds[b].togglePause()};this.setPan=function(b,f){return!q(b)?!1:c.sounds[b].setPan(f)};this.setVolume=function(b,f){return!q(b)?!1:c.sounds[b].setVolume(f)};this.mute=function(b){var f=0;b instanceof
String&&(b=null);if(b)return!q(b)?!1:c.sounds[b].mute();for(f=c.soundIDs.length-1;0<=f;f--)c.sounds[c.soundIDs[f]].mute();return c.muted=!0};this.muteAll=function(){c.mute()};this.unmute=function(b){b instanceof String&&(b=null);if(b)return!q(b)?!1:c.sounds[b].unmute();for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].unmute();c.muted=!1;return!0};this.unmuteAll=function(){c.unmute()};this.toggleMute=function(b){return!q(b)?!1:c.sounds[b].toggleMute()};this.getMemoryUse=function(){var b=
0;h&&8!==l&&(b=parseInt(h._getMemoryUse(),10));return b};this.disable=function(b){var f;b===i&&(b=!1);if(t)return!1;t=!0;for(f=c.soundIDs.length-1;0<=f;f--)Ma(c.sounds[c.soundIDs[f]]);M(b);p.remove(j,"load",D);return!0};this.canPlayMIME=function(b){var f;c.hasHTML5&&(f=R({type:b}));!f&&v&&(f=b&&c.ok()?!!(8<l&&b.match($a)||b.match(c.mimePattern)):null);return f};this.canPlayURL=function(b){var f;c.hasHTML5&&(f=R({url:b}));!f&&v&&(f=b&&c.ok()?!!b.match(c.filePattern):null);return f};this.canPlayLink=
function(b){return b.type!==i&&b.type&&c.canPlayMIME(b.type)?!0:c.canPlayURL(b.href)};this.getSoundById=function(b){if(!b)throw Error("soundManager.getSoundById(): sID is null/_undefined");return c.sounds[b]};this.onready=function(b,c){if("function"===typeof b)c||(c=j),ma("onready",b,c),C();else throw w("needFunction","onready");return!0};this.ontimeout=function(b,c){if("function"===typeof b)c||(c=j),ma("ontimeout",b,c),C({type:"ontimeout"});else throw w("needFunction","ontimeout");return!0};this._wD=
this._writeDebug=function(){return!0};this._debug=function(){};this.reboot=function(b,f){var e,a,g;for(e=c.soundIDs.length-1;0<=e;e--)c.sounds[c.soundIDs[e]].destruct();if(h)try{A&&(ua=h.innerHTML),O=h.parentNode.removeChild(h)}catch(i){}ua=O=v=h=null;c.enabled=N=k=P=wa=K=L=t=x=c.swfLoaded=!1;c.soundIDs=[];c.sounds={};if(b)s=[];else for(e in s)if(s.hasOwnProperty(e)){a=0;for(g=s[e].length;a<g;a++)s[e][a].fired=!1}c.html5={usingFlash:null};c.flash={};c.html5Only=!1;c.ignoreFlash=!1;j.setTimeout(function(){pa();
f||c.beginDelayedInit()},20);return c};this.reset=function(){return c.reboot(!0,!0)};this.getMoviePercent=function(){return h&&"PercentLoaded"in h?h.PercentLoaded():null};this.beginDelayedInit=function(){ka=!0;F();setTimeout(function(){if(wa)return!1;Y();X();return wa=!0},20);E()};this.destruct=function(){c.disable(!0)};Ha=function(b){var f,e,a=this,g,bb,j,J,m,n,r=!1,k=[],p=0,t,v,s=null;e=f=null;this.sID=this.id=b.id;this.url=b.url;this._iO=this.instanceOptions=this.options=u(b);this.pan=this.options.pan;
this.volume=this.options.volume;this.isHTML5=!1;this._a=null;this.id3={};this._debug=function(){};this.load=function(b){var c=null;b!==i?a._iO=u(b,a.options):(b=a.options,a._iO=b,s&&s!==a.url&&(a._iO.url=a.url,a.url=null));a._iO.url||(a._iO.url=a.url);a._iO.url=ba(a._iO.url);b=a.instanceOptions=a._iO;if(b.url===a.url&&0!==a.readyState&&2!==a.readyState)return 3===a.readyState&&b.onload&&b.onload.apply(a,[!!a.duration]),a;a.loaded=!1;a.readyState=1;a.playState=0;a.id3={};if(ca(b))c=a._setup_html5(b),
c._called_load||(a._html5_canplay=!1,a.url!==b.url&&(a._a.src=b.url,a.setPosition(0)),a._a.autobuffer="auto",a._a.preload="auto",a._a._called_load=!0,b.autoPlay&&a.play());else try{a.isHTML5=!1,a._iO=$(Z(b)),b=a._iO,8===l?h._load(a.id,b.url,b.stream,b.autoPlay,b.usePolicyFile):h._load(a.id,b.url,!!b.stream,!!b.autoPlay,b.loops||1,!!b.autoLoad,b.usePolicyFile)}catch(f){G({type:"SMSOUND_LOAD_JS_EXCEPTION",fatal:!0})}a.url=b.url;return a};this.unload=function(){0!==a.readyState&&(a.isHTML5?(J(),a._a&&
(a._a.pause(),xa(a._a,"about:blank"),s="about:blank")):8===l?h._unload(a.id,"about:blank"):h._unload(a.id),g());return a};this.destruct=function(b){a.isHTML5?(J(),a._a&&(a._a.pause(),xa(a._a),x||j(),a._a._s=null,a._a=null)):(a._iO.onfailure=null,h._destroySound(a.id));b||c.destroySound(a.id,!0)};this.start=this.play=function(b,c){var f,e;e=!0;e=null;c=c===i?!0:c;b||(b={});a.url&&(a._iO.url=a.url);a._iO=u(a._iO,a.options);a._iO=u(b,a._iO);a._iO.url=ba(a._iO.url);a.instanceOptions=a._iO;if(a._iO.serverURL&&
!a.connected)return a.getAutoPlay()||a.setAutoPlay(!0),a;ca(a._iO)&&(a._setup_html5(a._iO),m());1===a.playState&&!a.paused&&((f=a._iO.multiShot)||(e=a));if(null!==e)return e;b.url&&b.url!==a.url&&a.load(a._iO);a.loaded||(0===a.readyState?(a.isHTML5||(a._iO.autoPlay=!0),a.load(a._iO),a.instanceOptions=a._iO):2===a.readyState&&(e=a));if(null!==e)return e;!a.isHTML5&&(9===l&&0<a.position&&a.position===a.duration)&&(b.position=0);if(a.paused&&0<=a.position&&(!a._iO.serverURL||0<a.position))a.resume();
else{a._iO=u(b,a._iO);if(null!==a._iO.from&&null!==a._iO.to&&0===a.instanceCount&&0===a.playState&&!a._iO.serverURL){f=function(){a._iO=u(b,a._iO);a.play(a._iO)};if(a.isHTML5&&!a._html5_canplay)a.load({oncanplay:f}),e=!1;else if(!a.isHTML5&&!a.loaded&&(!a.readyState||2!==a.readyState))a.load({onload:f}),e=!1;if(null!==e)return e;a._iO=v()}(!a.instanceCount||a._iO.multiShotEvents||!a.isHTML5&&8<l&&!a.getAutoPlay())&&a.instanceCount++;a._iO.onposition&&0===a.playState&&n(a);a.playState=1;a.paused=!1;
a.position=a._iO.position!==i&&!isNaN(a._iO.position)?a._iO.position:0;a.isHTML5||(a._iO=$(Z(a._iO)));a._iO.onplay&&c&&(a._iO.onplay.apply(a),r=!0);a.setVolume(a._iO.volume,!0);a.setPan(a._iO.pan,!0);a.isHTML5?(m(),e=a._setup_html5(),a.setPosition(a._iO.position),e.play()):(e=h._start(a.id,a._iO.loops||1,9===l?a._iO.position:a._iO.position/1E3,a._iO.multiShot),9===l&&!e&&a._iO.onplayerror&&a._iO.onplayerror.apply(a))}return a};this.stop=function(b){var c=a._iO;1===a.playState&&(a._onbufferchange(0),
a._resetOnPosition(0),a.paused=!1,a.isHTML5||(a.playState=0),t(),c.to&&a.clearOnPosition(c.to),a.isHTML5?a._a&&(b=a.position,a.setPosition(0),a.position=b,a._a.pause(),a.playState=0,a._onTimer(),J()):(h._stop(a.id,b),c.serverURL&&a.unload()),a.instanceCount=0,a._iO={},c.onstop&&c.onstop.apply(a));return a};this.setAutoPlay=function(b){a._iO.autoPlay=b;a.isHTML5||(h._setAutoPlay(a.id,b),b&&!a.instanceCount&&1===a.readyState&&a.instanceCount++)};this.getAutoPlay=function(){return a._iO.autoPlay};this.setPosition=
function(b){b===i&&(b=0);var c=a.isHTML5?Math.max(b,0):Math.min(a.duration||a._iO.duration,Math.max(b,0));a.position=c;b=a.position/1E3;a._resetOnPosition(a.position);a._iO.position=c;if(a.isHTML5){if(a._a&&a._html5_canplay&&a._a.currentTime!==b)try{a._a.currentTime=b,(0===a.playState||a.paused)&&a._a.pause()}catch(f){}}else b=9===l?a.position:b,a.readyState&&2!==a.readyState&&h._setPosition(a.id,b,a.paused||!a.playState,a._iO.multiShot);a.isHTML5&&a.paused&&a._onTimer(!0);return a};this.pause=function(b){if(a.paused||
0===a.playState&&1!==a.readyState)return a;a.paused=!0;a.isHTML5?(a._setup_html5().pause(),J()):(b||b===i)&&h._pause(a.id,a._iO.multiShot);a._iO.onpause&&a._iO.onpause.apply(a);return a};this.resume=function(){var b=a._iO;if(!a.paused)return a;a.paused=!1;a.playState=1;a.isHTML5?(a._setup_html5().play(),m()):(b.isMovieStar&&!b.serverURL&&a.setPosition(a.position),h._pause(a.id,b.multiShot));!r&&b.onplay?(b.onplay.apply(a),r=!0):b.onresume&&b.onresume.apply(a);return a};this.togglePause=function(){if(0===
a.playState)return a.play({position:9===l&&!a.isHTML5?a.position:a.position/1E3}),a;a.paused?a.resume():a.pause();return a};this.setPan=function(b,c){b===i&&(b=0);c===i&&(c=!1);a.isHTML5||h._setPan(a.id,b);a._iO.pan=b;c||(a.pan=b,a.options.pan=b);return a};this.setVolume=function(b,f){b===i&&(b=100);f===i&&(f=!1);a.isHTML5?a._a&&(a._a.volume=Math.max(0,Math.min(1,b/100))):h._setVolume(a.id,c.muted&&!a.muted||a.muted?0:b);a._iO.volume=b;f||(a.volume=b,a.options.volume=b);return a};this.mute=function(){a.muted=
!0;a.isHTML5?a._a&&(a._a.muted=!0):h._setVolume(a.id,0);return a};this.unmute=function(){a.muted=!1;var b=a._iO.volume!==i;a.isHTML5?a._a&&(a._a.muted=!1):h._setVolume(a.id,b?a._iO.volume:a.options.volume);return a};this.toggleMute=function(){return a.muted?a.unmute():a.mute()};this.onposition=this.onPosition=function(b,c,f){k.push({position:parseInt(b,10),method:c,scope:f!==i?f:a,fired:!1});return a};this.clearOnPosition=function(a,b){var c,a=parseInt(a,10);if(isNaN(a))return!1;for(c=0;c<k.length;c++)if(a===
k[c].position&&(!b||b===k[c].method))k[c].fired&&p--,k.splice(c,1)};this._processOnPosition=function(){var b,c;b=k.length;if(!b||!a.playState||p>=b)return!1;for(b-=1;0<=b;b--)c=k[b],!c.fired&&a.position>=c.position&&(c.fired=!0,p++,c.method.apply(c.scope,[c.position]));return!0};this._resetOnPosition=function(a){var b,c;b=k.length;if(!b)return!1;for(b-=1;0<=b;b--)c=k[b],c.fired&&a<=c.position&&(c.fired=!1,p--);return!0};v=function(){var b=a._iO,c=b.from,f=b.to,e,g;g=function(){a.clearOnPosition(f,
g);a.stop()};e=function(){if(null!==f&&!isNaN(f))a.onPosition(f,g)};null!==c&&!isNaN(c)&&(b.position=c,b.multiShot=!1,e());return b};n=function(){var b,c=a._iO.onposition;if(c)for(b in c)if(c.hasOwnProperty(b))a.onPosition(parseInt(b,10),c[b])};t=function(){var b,c=a._iO.onposition;if(c)for(b in c)c.hasOwnProperty(b)&&a.clearOnPosition(parseInt(b,10))};m=function(){a.isHTML5&&Oa(a)};J=function(){a.isHTML5&&Pa(a)};g=function(b){b||(k=[],p=0);r=!1;a._hasTimer=null;a._a=null;a._html5_canplay=!1;a.bytesLoaded=
null;a.bytesTotal=null;a.duration=a._iO&&a._iO.duration?a._iO.duration:null;a.durationEstimate=null;a.buffered=[];a.eqData=[];a.eqData.left=[];a.eqData.right=[];a.failures=0;a.isBuffering=!1;a.instanceOptions={};a.instanceCount=0;a.loaded=!1;a.metadata={};a.readyState=0;a.muted=!1;a.paused=!1;a.peakData={left:0,right:0};a.waveformData={left:[],right:[]};a.playState=0;a.position=null;a.id3={}};g();this._onTimer=function(b){var c,g=!1,i={};if(a._hasTimer||b){if(a._a&&(b||(0<a.playState||1===a.readyState)&&
!a.paused))c=a._get_html5_duration(),c!==f&&(f=c,a.duration=c,g=!0),a.durationEstimate=a.duration,c=1E3*a._a.currentTime||0,c!==e&&(e=c,g=!0),(g||b)&&a._whileplaying(c,i,i,i,i);return g}};this._get_html5_duration=function(){var b=a._iO;return(b=a._a&&a._a.duration?1E3*a._a.duration:b&&b.duration?b.duration:null)&&!isNaN(b)&&Infinity!==b?b:null};this._apply_loop=function(a,b){a.loop=1<b?"loop":""};this._setup_html5=function(b){var b=u(a._iO,b),c=x?Ia:a._a,f=decodeURI(b.url),e;x?f===decodeURI(za)&&
(e=!0):f===decodeURI(s)&&(e=!0);if(c){if(c._s)if(x)c._s&&(c._s.playState&&!e)&&c._s.stop();else if(!x&&f===d(s))return a._apply_loop(c,b.loops),c;e||(g(!1),c.src=b.url,za=s=a.url=b.url,c._called_load=!1)}else a._a=b.autoLoad||b.autoPlay?new Audio(b.url):Ca&&10>opera.version()?new Audio(null):new Audio,c=a._a,c._called_load=!1,x&&(Ia=c);a.isHTML5=!0;a._a=c;c._s=a;bb();a._apply_loop(c,b.loops);b.autoLoad||b.autoPlay?a.load():(c.autobuffer=!1,c.preload="auto");return c};bb=function(){if(a._a._added_events)return!1;
var b;a._a._added_events=!0;for(b in y)y.hasOwnProperty(b)&&a._a&&a._a.addEventListener(b,y[b],!1);return!0};j=function(){var b;a._a._added_events=!1;for(b in y)y.hasOwnProperty(b)&&a._a&&a._a.removeEventListener(b,y[b],!1)};this._onload=function(b){b=!!b||!a.isHTML5&&8===l&&a.duration;a.loaded=b;a.readyState=b?3:2;a._onbufferchange(0);a._iO.onload&&a._iO.onload.apply(a,[b]);return!0};this._onbufferchange=function(b){if(0===a.playState||b&&a.isBuffering||!b&&!a.isBuffering)return!1;a.isBuffering=
1===b;a._iO.onbufferchange&&a._iO.onbufferchange.apply(a);return!0};this._onsuspend=function(){a._iO.onsuspend&&a._iO.onsuspend.apply(a);return!0};this._onfailure=function(b,c,f){a.failures++;if(a._iO.onfailure&&1===a.failures)a._iO.onfailure(a,b,c,f)};this._onfinish=function(){var b=a._iO.onfinish;a._onbufferchange(0);a._resetOnPosition(0);a.instanceCount&&(a.instanceCount--,a.instanceCount||(t(),a.playState=0,a.paused=!1,a.instanceCount=0,a.instanceOptions={},a._iO={},J(),a.isHTML5&&(a.position=
0)),(!a.instanceCount||a._iO.multiShotEvents)&&b&&b.apply(a))};this._whileloading=function(b,c,f,e){var g=a._iO;a.bytesLoaded=b;a.bytesTotal=c;a.duration=Math.floor(f);a.bufferLength=e;a.durationEstimate=!a.isHTML5&&!g.isMovieStar?g.duration?a.duration>g.duration?a.duration:g.duration:parseInt(a.bytesTotal/a.bytesLoaded*a.duration,10):a.duration;a.isHTML5||(a.buffered=[{start:0,end:a.duration}]);(3!==a.readyState||a.isHTML5)&&g.whileloading&&g.whileloading.apply(a)};this._whileplaying=function(b,
c,f,e,g){var h=a._iO;if(isNaN(b)||null===b)return!1;a.position=Math.max(0,b);a._processOnPosition();!a.isHTML5&&8<l&&(h.usePeakData&&(c!==i&&c)&&(a.peakData={left:c.leftPeak,right:c.rightPeak}),h.useWaveformData&&(f!==i&&f)&&(a.waveformData={left:f.split(","),right:e.split(",")}),h.useEQData&&(g!==i&&g&&g.leftEQ)&&(b=g.leftEQ.split(","),a.eqData=b,a.eqData.left=b,g.rightEQ!==i&&g.rightEQ&&(a.eqData.right=g.rightEQ.split(","))));1===a.playState&&(!a.isHTML5&&(8===l&&!a.position&&a.isBuffering)&&a._onbufferchange(0),
h.whileplaying&&h.whileplaying.apply(a));return!0};this._oncaptiondata=function(b){a.captiondata=b;a._iO.oncaptiondata&&a._iO.oncaptiondata.apply(a,[b])};this._onmetadata=function(b,c){var f={},e,g;e=0;for(g=b.length;e<g;e++)f[b[e]]=c[e];a.metadata=f;a._iO.onmetadata&&a._iO.onmetadata.apply(a)};this._onid3=function(b,c){var f=[],e,g;e=0;for(g=b.length;e<g;e++)f[b[e]]=c[e];a.id3=u(a.id3,f);a._iO.onid3&&a._iO.onid3.apply(a)};this._onconnect=function(b){b=1===b;if(a.connected=b)a.failures=0,q(a.id)&&
(a.getAutoPlay()?a.play(i,a.getAutoPlay()):a._iO.autoLoad&&a.load()),a._iO.onconnect&&a._iO.onconnect.apply(a,[b])};this._ondataerror=function(){0<a.playState&&a._iO.ondataerror&&a._iO.ondataerror.apply(a)}};ra=function(){return m.body||m._docElement||m.getElementsByTagName("div")[0]};U=function(b){return m.getElementById(b)};u=function(b,f){var e=b||{},a,g;a=f===i?c.defaultOptions:f;for(g in a)a.hasOwnProperty(g)&&e[g]===i&&(e[g]="object"!==typeof a[g]||null===a[g]?a[g]:u(e[g],a[g]));return e};V=
{onready:1,ontimeout:1,defaultOptions:1,flash9Options:1,movieStarOptions:1};la=function(b,f){var e,a=!0,g=f!==i,h=c.setupOptions;for(e in b)if(b.hasOwnProperty(e))if("object"!==typeof b[e]||null===b[e]||b[e]instanceof Array||b[e]instanceof RegExp)g&&V[f]!==i?c[f][e]=b[e]:h[e]!==i?(c.setupOptions[e]=b[e],c[e]=b[e]):V[e]===i?(I(w(c[e]===i?"setupUndef":"setupError",e),2),a=!1):c[e]instanceof Function?c[e].apply(c,b[e]instanceof Array?b[e]:[b[e]]):c[e]=b[e];else if(V[e]===i)I(w(c[e]===i?"setupUndef":
"setupError",e),2),a=!1;else return la(b[e],e);return a};var cb=function(b){var b=eb.call(b),c=b.length;fa?(b[1]="on"+b[1],3<c&&b.pop()):3===c&&b.push(!1);return b},db=function(b,c){var e=b.shift(),a=[hb[c]];if(fa)e[a](b[0],b[1]);else e[a].apply(e,b)},fa=j.attachEvent,hb={add:fa?"attachEvent":"addEventListener",remove:fa?"detachEvent":"removeEventListener"};p={add:function(){db(cb(arguments),"add")},remove:function(){db(cb(arguments),"remove")}};y={abort:n(function(){}),canplay:n(function(){var b=
this._s,c;if(b._html5_canplay)return!0;b._html5_canplay=!0;b._onbufferchange(0);c=b._iO.position!==i&&!isNaN(b._iO.position)?b._iO.position/1E3:null;if(b.position&&this.currentTime!==c)try{this.currentTime=c}catch(e){}b._iO._oncanplay&&b._iO._oncanplay()}),canplaythrough:n(function(){var b=this._s;b.loaded||(b._onbufferchange(0),b._whileloading(b.bytesLoaded,b.bytesTotal,b._get_html5_duration()),b._onload(!0))}),ended:n(function(){this._s._onfinish()}),error:n(function(){this._s._onload(!1)}),loadeddata:n(function(){var b=
this._s;!b._loaded&&!Ba&&(b.duration=b._get_html5_duration())}),loadedmetadata:n(function(){}),loadstart:n(function(){this._s._onbufferchange(1)}),play:n(function(){this._s._onbufferchange(0)}),playing:n(function(){this._s._onbufferchange(0)}),progress:n(function(b){var c=this._s,e,a,g=0,g=b.target.buffered;e=b.loaded||0;var i=b.total||1;c.buffered=[];if(g&&g.length){e=0;for(a=g.length;e<a;e++)c.buffered.push({start:1E3*g.start(e),end:1E3*g.end(e)});g=1E3*(g.end(0)-g.start(0));e=g/(1E3*b.target.duration)}isNaN(e)||
(c._onbufferchange(0),c._whileloading(e,i,c._get_html5_duration()),e&&(i&&e===i)&&y.canplaythrough.call(this,b))}),ratechange:n(function(){}),suspend:n(function(b){var c=this._s;y.progress.call(this,b);c._onsuspend()}),stalled:n(function(){}),timeupdate:n(function(){this._s._onTimer()}),waiting:n(function(){this._s._onbufferchange(1)})};ca=function(b){return b.serverURL||b.type&&T(b.type)?!1:b.type?R({type:b.type}):R({url:b.url})||c.html5Only};xa=function(b,c){b&&(b.src=c,b._called_load=!1);x&&(za=
null)};R=function(b){if(!c.useHTML5Audio||!c.hasHTML5)return!1;var f=b.url||null,b=b.type||null,e=c.audioFormats,a;if(b&&c.html5[b]!==i)return c.html5[b]&&!T(b);if(!z){z=[];for(a in e)e.hasOwnProperty(a)&&(z.push(a),e[a].related&&(z=z.concat(e[a].related)));z=RegExp("\\.("+z.join("|")+")(\\?.*)?$","i")}a=f?f.toLowerCase().match(z):null;!a||!a.length?b&&(f=b.indexOf(";"),a=(-1!==f?b.substr(0,f):b).substr(6)):a=a[1];a&&c.html5[a]!==i?f=c.html5[a]&&!T(a):(b="audio/"+a,f=c.html5.canPlayType({type:b}),
f=(c.html5[a]=f)&&c.html5[b]&&!T(b));return f};Ta=function(){function b(a){var b,e,g=b=!1;if(!f||"function"!==typeof f.canPlayType)return b;if(a instanceof Array){b=0;for(e=a.length;b<e;b++)if(c.html5[a[b]]||f.canPlayType(a[b]).match(c.html5Test))g=!0,c.html5[a[b]]=!0,c.flash[a[b]]=!!a[b].match(Ya);b=g}else a=f&&"function"===typeof f.canPlayType?f.canPlayType(a):!1,b=!(!a||!a.match(c.html5Test));return b}if(!c.useHTML5Audio||!c.hasHTML5)return!1;var f=Audio!==i?Ca&&10>opera.version()?new Audio(null):
new Audio:null,e,a,g={},h;h=c.audioFormats;for(e in h)if(h.hasOwnProperty(e)&&(a="audio/"+e,g[e]=b(h[e].type),g[a]=g[e],e.match(Ya)?(c.flash[e]=!0,c.flash[a]=!0):(c.flash[e]=!1,c.flash[a]=!1),h[e]&&h[e].related))for(a=h[e].related.length-1;0<=a;a--)g["audio/"+h[e].related[a]]=g[e],c.html5[h[e].related[a]]=g[e],c.flash[h[e].related[a]]=g[e];g.canPlayType=f?b:null;c.html5=u(c.html5,g);return!0};oa={};w=function(){};Z=function(b){8===l&&(1<b.loops&&b.stream)&&(b.stream=!1);return b};$=function(b){if(b&&
!b.usePolicyFile&&(b.onid3||b.usePeakData||b.useWaveformData||b.useEQData))b.usePolicyFile=!0;return b};I=function(){};ia=function(){return!1};Ma=function(b){for(var c in b)b.hasOwnProperty(c)&&"function"===typeof b[c]&&(b[c]=ia)};ta=function(b){b===i&&(b=!1);(t||b)&&c.disable(b)};Na=function(b){var f=null;if(b)if(b.match(/\.swf(\?.*)?$/i)){if(f=b.substr(b.toLowerCase().lastIndexOf(".swf?")+4))return b}else b.lastIndexOf("/")!==b.length-1&&(b+="/");b=(b&&-1!==b.lastIndexOf("/")?b.substr(0,b.lastIndexOf("/")+
1):"./")+c.movieURL;c.noSWFCache&&(b+="?ts="+(new Date).getTime());return b};na=function(){l=parseInt(c.flashVersion,10);8!==l&&9!==l&&(c.flashVersion=l=8);var b=c.debugMode||c.debugFlash?"_debug.swf":".swf";c.useHTML5Audio&&(!c.html5Only&&c.audioFormats.mp4.required&&9>l)&&(c.flashVersion=l=9);c.version=c.versionNumber+(c.html5Only?" (HTML5-only mode)":9===l?" (AS3/Flash 9)":" (AS2/Flash 8)");8<l?(c.defaultOptions=u(c.defaultOptions,c.flash9Options),c.features.buffering=!0,c.defaultOptions=u(c.defaultOptions,
c.movieStarOptions),c.filePatterns.flash9=RegExp("\\.(mp3|"+ab.join("|")+")(\\?.*)?$","i"),c.features.movieStar=!0):c.features.movieStar=!1;c.filePattern=c.filePatterns[8!==l?"flash9":"flash8"];c.movieURL=(8===l?"soundmanager2.swf":"soundmanager2_flash9.swf").replace(".swf",b);c.features.peakData=c.features.waveformData=c.features.eqData=8<l};La=function(b,c){if(!h)return!1;h._setPolling(b,c)};sa=function(){c.debugURLParam.test(ha)&&(c.debugMode=!0)};q=this.getSoundById;H=function(){var b=[];c.debugMode&&
b.push("sm2_debug");c.debugFlash&&b.push("flash_debug");c.useHighPerformance&&b.push("high_performance");return b.join(" ")};va=function(){w("fbHandler");var b=c.getMoviePercent(),f={type:"FLASHBLOCK"};if(c.html5Only)return!1;c.ok()?c.oMC&&(c.oMC.className=[H(),"movieContainer","swf_loaded"+(c.didFlashBlock?" swf_unblocked":"")].join(" ")):(v&&(c.oMC.className=H()+" movieContainer "+(null===b?"swf_timedout":"swf_error")),c.didFlashBlock=!0,C({type:"ontimeout",ignoreInit:!0,error:f}),G(f))};ma=function(b,
c,e){s[b]===i&&(s[b]=[]);s[b].push({method:c,scope:e||null,fired:!1})};C=function(b){b||(b={type:c.ok()?"onready":"ontimeout"});if(!k&&b&&!b.ignoreInit||"ontimeout"===b.type&&(c.ok()||t&&!b.ignoreInit))return!1;var f={success:b&&b.ignoreInit?c.ok():!t},e=b&&b.type?s[b.type]||[]:[],a=[],g,f=[f],i=v&&!c.ok();b.error&&(f[0].error=b.error);b=0;for(g=e.length;b<g;b++)!0!==e[b].fired&&a.push(e[b]);if(a.length){b=0;for(g=a.length;b<g;b++)a[b].scope?a[b].method.apply(a[b].scope,f):a[b].method.apply(this,
f),i||(a[b].fired=!0)}return!0};D=function(){j.setTimeout(function(){c.useFlashBlock&&va();C();"function"===typeof c.onload&&c.onload.apply(j);c.waitForWindowLoad&&p.add(j,"load",D)},1)};Aa=function(){if(B!==i)return B;var b=!1,c=navigator,e=c.plugins,a,g=j.ActiveXObject;if(e&&e.length)(c=c.mimeTypes)&&(c["application/x-shockwave-flash"]&&c["application/x-shockwave-flash"].enabledPlugin&&c["application/x-shockwave-flash"].enabledPlugin.description)&&(b=!0);else if(g!==i&&!r.match(/MSAppHost/i)){try{a=
new g("ShockwaveFlash.ShockwaveFlash")}catch(h){}b=!!a}return B=b};Sa=function(){var b,f,e=c.audioFormats;if(da&&r.match(/os (1|2|3_0|3_1)/i))c.hasHTML5=!1,c.html5Only=!0,c.oMC&&(c.oMC.style.display="none");else if(c.useHTML5Audio&&(!c.html5||!c.html5.canPlayType))c.hasHTML5=!1;if(c.useHTML5Audio&&c.hasHTML5)for(f in e)if(e.hasOwnProperty(f)&&(e[f].required&&!c.html5.canPlayType(e[f].type)||c.preferFlash&&(c.flash[f]||c.flash[e[f].type])))b=!0;c.ignoreFlash&&(b=!1);c.html5Only=c.hasHTML5&&c.useHTML5Audio&&
!b;return!c.html5Only};ba=function(b){var f,e,a=0;if(b instanceof Array){f=0;for(e=b.length;f<e;f++)if(b[f]instanceof Object){if(c.canPlayMIME(b[f].type)){a=f;break}}else if(c.canPlayURL(b[f])){a=f;break}b[a].url&&(b[a]=b[a].url);b=b[a]}return b};Oa=function(b){b._hasTimer||(b._hasTimer=!0,!Da&&c.html5PollingInterval&&(null===Q&&0===aa&&(Q=j.setInterval(Qa,c.html5PollingInterval)),aa++))};Pa=function(b){b._hasTimer&&(b._hasTimer=!1,!Da&&c.html5PollingInterval&&aa--)};Qa=function(){var b;if(null!==
Q&&!aa)return j.clearInterval(Q),Q=null,!1;for(b=c.soundIDs.length-1;0<=b;b--)c.sounds[c.soundIDs[b]].isHTML5&&c.sounds[c.soundIDs[b]]._hasTimer&&c.sounds[c.soundIDs[b]]._onTimer()};G=function(b){b=b!==i?b:{};"function"===typeof c.onerror&&c.onerror.apply(j,[{type:b.type!==i?b.type:null}]);b.fatal!==i&&b.fatal&&c.disable()};Ua=function(){if(!Wa||!Aa())return!1;var b=c.audioFormats,f,e;for(e in b)if(b.hasOwnProperty(e)&&("mp3"===e||"mp4"===e))if(c.html5[e]=!1,b[e]&&b[e].related)for(f=b[e].related.length-
1;0<=f;f--)c.html5[b[e].related[f]]=!1};this._setSandboxType=function(){};this._externalInterfaceOK=function(){if(c.swfLoaded)return!1;c.swfLoaded=!0;ea=!1;Wa&&Ua();setTimeout(ja,A?100:1)};Y=function(b,f){function e(a,b){return'<param name="'+a+'" value="'+b+'" />'}if(K&&L)return!1;if(c.html5Only)return na(),c.oMC=U(c.movieID),ja(),L=K=!0,!1;var a=f||c.url,g=c.altURL||a,h=ra(),j=H(),l=null,l=m.getElementsByTagName("html")[0],k,p,n,l=l&&l.dir&&l.dir.match(/rtl/i),b=b===i?c.id:b;na();c.url=Na(Fa?a:
g);f=c.url;c.wmode=!c.wmode&&c.useHighPerformance?"transparent":c.wmode;if(null!==c.wmode&&(r.match(/msie 8/i)||!A&&!c.useHighPerformance)&&navigator.platform.match(/win32|win64/i))Ra.push(oa.spcWmode),c.wmode=null;h={name:b,id:b,src:f,quality:"high",allowScriptAccess:c.allowScriptAccess,bgcolor:c.bgColor,pluginspage:Za+"www.macromedia.com/go/getflashplayer",title:"JS/Flash audio component (SoundManager 2)",type:"application/x-shockwave-flash",wmode:c.wmode,hasPriority:"true"};c.debugFlash&&(h.FlashVars=
"debug=1");c.wmode||delete h.wmode;if(A)a=m.createElement("div"),p=['<object id="'+b+'" data="'+f+'" type="'+h.type+'" title="'+h.title+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="'+Za+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0">',e("movie",f),e("AllowScriptAccess",c.allowScriptAccess),e("quality",h.quality),c.wmode?e("wmode",c.wmode):"",e("bgcolor",c.bgColor),e("hasPriority","true"),c.debugFlash?e("FlashVars",h.FlashVars):"","</object>"].join("");
else for(k in a=m.createElement("embed"),h)h.hasOwnProperty(k)&&a.setAttribute(k,h[k]);sa();j=H();if(h=ra())if(c.oMC=U(c.movieID)||m.createElement("div"),c.oMC.id)n=c.oMC.className,c.oMC.className=(n?n+" ":"movieContainer")+(j?" "+j:""),c.oMC.appendChild(a),A&&(k=c.oMC.appendChild(m.createElement("div")),k.className="sm2-object-box",k.innerHTML=p),L=!0;else{c.oMC.id=c.movieID;c.oMC.className="movieContainer "+j;k=j=null;c.useFlashBlock||(c.useHighPerformance?j={position:"fixed",width:"8px",height:"8px",
bottom:"0px",left:"0px",overflow:"hidden"}:(j={position:"absolute",width:"6px",height:"6px",top:"-9999px",left:"-9999px"},l&&(j.left=Math.abs(parseInt(j.left,10))+"px")));fb&&(c.oMC.style.zIndex=1E4);if(!c.debugFlash)for(n in j)j.hasOwnProperty(n)&&(c.oMC.style[n]=j[n]);try{A||c.oMC.appendChild(a),h.appendChild(c.oMC),A&&(k=c.oMC.appendChild(m.createElement("div")),k.className="sm2-object-box",k.innerHTML=p),L=!0}catch(q){throw Error(w("domError")+" \n"+q.toString());}}return K=!0};X=function(){if(c.html5Only)return Y(),
!1;if(h||!c.url)return!1;h=c.getMovie(c.id);h||(O?(A?c.oMC.innerHTML=ua:c.oMC.appendChild(O),O=null,K=!0):Y(c.id,c.url),h=c.getMovie(c.id));"function"===typeof c.oninitmovie&&setTimeout(c.oninitmovie,1);return!0};E=function(){setTimeout(Ka,1E3)};Ka=function(){var b,f=!1;if(!c.url||P)return!1;P=!0;p.remove(j,"load",E);if(ea&&!Ea)return!1;k||(b=c.getMoviePercent(),0<b&&100>b&&(f=!0));setTimeout(function(){b=c.getMoviePercent();if(f)return P=!1,j.setTimeout(E,1),!1;!k&&Xa&&(null===b?c.useFlashBlock||
0===c.flashLoadTimeout?c.useFlashBlock&&va():C({type:"ontimeout",ignoreInit:!0}):0!==c.flashLoadTimeout&&ta(!0))},c.flashLoadTimeout)};W=function(){if(Ea||!ea)return p.remove(j,"focus",W),!0;Ea=Xa=!0;P=!1;E();p.remove(j,"focus",W);return!0};M=function(b){if(k)return!1;if(c.html5Only)return k=!0,D(),!0;var f=!0,e;if(!c.useFlashBlock||!c.flashLoadTimeout||c.getMoviePercent())k=!0,t&&(e={type:!B&&v?"NO_FLASH":"INIT_TIMEOUT"});if(t||b)c.useFlashBlock&&c.oMC&&(c.oMC.className=H()+" "+(null===c.getMoviePercent()?
"swf_timedout":"swf_error")),C({type:"ontimeout",error:e,ignoreInit:!0}),G(e),f=!1;t||(c.waitForWindowLoad&&!ka?p.add(j,"load",D):D());return f};Ja=function(){var b,f=c.setupOptions;for(b in f)f.hasOwnProperty(b)&&(c[b]===i?c[b]=f[b]:c[b]!==f[b]&&(c.setupOptions[b]=c[b]))};ja=function(){if(k)return!1;if(c.html5Only)return k||(p.remove(j,"load",c.beginDelayedInit),c.enabled=!0,M()),!0;X();try{h._externalInterfaceTest(!1),La(!0,c.flashPollingInterval||(c.useHighPerformance?10:50)),c.debugMode||h._disableDebug(),
c.enabled=!0,c.html5Only||p.add(j,"unload",ia)}catch(b){return G({type:"JS_TO_FLASH_EXCEPTION",fatal:!0}),ta(!0),M(),!1}M();p.remove(j,"load",c.beginDelayedInit);return!0};F=function(){if(N)return!1;N=!0;Ja();sa();!B&&c.hasHTML5&&c.setup({useHTML5Audio:!0,preferFlash:!1});Ta();c.html5.usingFlash=Sa();v=c.html5.usingFlash;!B&&v&&(Ra.push(oa.needFlash),c.setup({flashLoadTimeout:1}));m.removeEventListener&&m.removeEventListener("DOMContentLoaded",F,!1);X();return!0};ya=function(){"complete"===m.readyState&&
(F(),m.detachEvent("onreadystatechange",ya));return!0};qa=function(){ka=!0;p.remove(j,"load",qa)};pa=function(){if(Da&&(c.setupOptions.useHTML5Audio=!0,c.setupOptions.preferFlash=!1,da||Va&&!r.match(/android\s2\.3/i)))da&&(c.ignoreFlash=!0),x=!0};pa();Aa();p.add(j,"focus",W);p.add(j,"load",E);p.add(j,"load",qa);m.addEventListener?m.addEventListener("DOMContentLoaded",F,!1):m.attachEvent?m.attachEvent("onreadystatechange",ya):G({type:"NO_DOM2_EVENTS",fatal:!0})}var ga=null;if(void 0===j.SM2_DEFER||
!SM2_DEFER)ga=new S;j.SoundManager=S;j.soundManager=ga})(window);