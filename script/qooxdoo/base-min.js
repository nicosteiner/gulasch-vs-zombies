(function(){
if (!window.qx) window.qx = {};

if (!this.qxsettings) qxsettings = {};
var settings = {};
for (var k in settings) qxsettings[k] = settings[k];

if (!this.qxvariants) qxvariants = {};
var variants = {};
for (var k in variants) qxvariants[k] = variants[k];

if (!qx.$$environment) qx.$$environment = {};
var envinfo = {"phonegap":false,"qx.debug":false,"qx.globalErrorHandling":false,"qx.version":"1.4.1"};
for (var k in envinfo) qx.$$environment[k] = envinfo[k];

qx.$$packageData = {};
qx.$$loader = {};
})();

qx.$$packageData['c8de41771e49']={"locales":{},"resources":{},"translations":{}};
if(!window.qx){window.qx={};
}qx.Bootstrap={genericToString:function(){return "[Class "+this.classname+"]";
},createNamespace:function(name,object){var splits=name.split(".");
var parent=window;
var part=splits[0];

for(var i=0,len=splits.length-1;i<len;i++,part=splits[i]){if(!parent[part]){parent=parent[part]={};
}else{parent=parent[part];
}}parent[part]=object;
return part;
},setDisplayName:function(fcn,classname,name){fcn.displayName=classname+"."+name+"()";
},setDisplayNames:function(functionMap,classname){for(var name in functionMap){var value=functionMap[name];

if(value instanceof Function){value.displayName=classname+"."+name+"()";
}}},define:function(name,config){if(!config){var config={statics:{}};
}var clazz;
var proto=null;
qx.Bootstrap.setDisplayNames(config.statics,name);

if(config.members||config.extend){qx.Bootstrap.setDisplayNames(config.members,name+".prototype");
clazz=config.construct||new Function;

if(config.extend){this.extendClass(clazz,clazz,config.extend,name,basename);
}var statics=config.statics||{};
for(var i=0,keys=qx.Bootstrap.getKeys(statics),l=keys.length;i<l;i++){var key=keys[i];
clazz[key]=statics[key];
}proto=clazz.prototype;
var members=config.members||{};
for(var i=0,keys=qx.Bootstrap.getKeys(members),l=keys.length;i<l;i++){var key=keys[i];
proto[key]=members[key];
}}else{clazz=config.statics||{};
}var basename=this.createNamespace(name,clazz);
clazz.name=clazz.classname=name;
clazz.basename=basename;
clazz.$$type="Class";
if(!clazz.hasOwnProperty("toString")){clazz.toString=this.genericToString;
}if(config.defer){config.defer(clazz,proto);
}qx.Bootstrap.$$registry[name]=config.statics;
return clazz;
}};
qx.Bootstrap.define("qx.Bootstrap",{statics:{LOADSTART:qx.$$start||new Date(),DEBUG:(function(){var debug=true;

if(qx.$$environment&&qx.$$environment["qx.debug"]===false){debug=false;
}
if(window.qxvariants&&window.qxvariants["qx.debug"]=="off"){debug=false;
}return debug;
})(),createNamespace:qx.Bootstrap.createNamespace,define:qx.Bootstrap.define,setDisplayName:qx.Bootstrap.setDisplayName,setDisplayNames:qx.Bootstrap.setDisplayNames,genericToString:qx.Bootstrap.genericToString,extendClass:function(clazz,construct,superClass,name,basename){var superproto=superClass.prototype;
var helper=new Function;
helper.prototype=superproto;
var proto=new helper;
clazz.prototype=proto;
proto.name=proto.classname=name;
proto.basename=basename;
construct.base=clazz.superclass=superClass;
construct.self=clazz.constructor=proto.constructor=clazz;
},getByName:function(name){return qx.Bootstrap.$$registry[name];
},$$registry:{},objectGetLength:({"count":function(map){return map.__count__;
},"default":function(map){var length=0;

for(var key in map){length++;
}return length;
}})[(({}).__count__==0)?"count":"default"],objectMergeWith:function(target,source,overwrite){if(overwrite===undefined){overwrite=true;
}
for(var key in source){if(overwrite||target[key]===undefined){target[key]=source[key];
}}return target;
},__shadowedKeys:["isPrototypeOf","hasOwnProperty","toLocaleString","toString","valueOf","constructor"],getKeys:({"ES5":Object.keys,"BROKEN_IE":function(map){var arr=[];
var hasOwnProperty=Object.prototype.hasOwnProperty;

for(var key in map){if(hasOwnProperty.call(map,key)){arr.push(key);
}}var shadowedKeys=qx.Bootstrap.__shadowedKeys;

for(var i=0,a=shadowedKeys,l=a.length;i<l;i++){if(hasOwnProperty.call(map,a[i])){arr.push(a[i]);
}}return arr;
},"default":function(map){var arr=[];
var hasOwnProperty=Object.prototype.hasOwnProperty;

for(var key in map){if(hasOwnProperty.call(map,key)){arr.push(key);
}}return arr;
}})[typeof (Object.keys)==
"function"?"ES5":
(function(){for(var key in {toString:1}){return key;
}})()!=="toString"?"BROKEN_IE":"default"],getKeysAsString:function(map){var keys=qx.Bootstrap.getKeys(map);

if(keys.length==0){return "";
}return '"'+keys.join('\", "')+'"';
},__classToTypeMap:{"[object String]":"String","[object Array]":"Array","[object Object]":"Object","[object RegExp]":"RegExp","[object Number]":"Number","[object Boolean]":"Boolean","[object Date]":"Date","[object Function]":"Function","[object Error]":"Error"},bind:function(func,self,varargs){var fixedArgs=Array.prototype.slice.call(arguments,2,arguments.length);
return function(){var args=Array.prototype.slice.call(arguments,0,arguments.length);
return func.apply(self,fixedArgs.concat(args));
};
},firstUp:function(str){return str.charAt(0).toUpperCase()+str.substr(1);
},firstLow:function(str){return str.charAt(0).toLowerCase()+str.substr(1);
},getClass:function(value){var classString=Object.prototype.toString.call(value);
return (qx.Bootstrap.__classToTypeMap[classString]||classString.slice(8,-1));
},isString:function(value){return (value!==null&&(typeof value==="string"||qx.Bootstrap.getClass(value)=="String"||value instanceof String||(!!value&&!!value.$$isString)));
},isArray:function(value){return (value!==null&&(value instanceof Array||(value&&qx.data&&qx.data.IListData&&qx.Bootstrap.hasInterface(value.constructor,qx.data.IListData))||qx.Bootstrap.getClass(value)=="Array"||(!!value&&!!value.$$isArray)));
},isObject:function(value){return (value!==undefined&&value!==null&&qx.Bootstrap.getClass(value)=="Object");
},isFunction:function(value){return qx.Bootstrap.getClass(value)=="Function";
},classIsDefined:function(name){return qx.Bootstrap.getByName(name)!==undefined;
},getPropertyDefinition:function(clazz,name){while(clazz){if(clazz.$$properties&&clazz.$$properties[name]){return clazz.$$properties[name];
}clazz=clazz.superclass;
}return null;
},hasProperty:function(clazz,name){return !!qx.Bootstrap.getPropertyDefinition(clazz,name);
},getEventType:function(clazz,name){var clazz=clazz.constructor;

while(clazz.superclass){if(clazz.$$events&&clazz.$$events[name]!==undefined){return clazz.$$events[name];
}clazz=clazz.superclass;
}return null;
},supportsEvent:function(clazz,name){return !!qx.Bootstrap.getEventType(clazz,name);
},getByInterface:function(clazz,iface){var list,i,l;

while(clazz){if(clazz.$$implements){list=clazz.$$flatImplements;

for(i=0,l=list.length;i<l;i++){if(list[i]===iface){return clazz;
}}}clazz=clazz.superclass;
}return null;
},hasInterface:function(clazz,iface){return !!qx.Bootstrap.getByInterface(clazz,iface);
},getMixins:function(clazz){var list=[];

while(clazz){if(clazz.$$includes){list.push.apply(list,clazz.$$flatIncludes);
}clazz=clazz.superclass;
}return list;
},$$logs:[],debug:function(object,message){qx.Bootstrap.$$logs.push(["debug",arguments]);
},info:function(object,message){qx.Bootstrap.$$logs.push(["info",arguments]);
},warn:function(object,message){qx.Bootstrap.$$logs.push(["warn",arguments]);
},error:function(object,message){qx.Bootstrap.$$logs.push(["error",arguments]);
},trace:function(object){}}});
qx.Bootstrap.define("qx.bom.client.OperatingSystem",{statics:{getName:function(){var input=navigator&&navigator.platform;

if(!input){return "";
}
if(input.indexOf("Windows")!=-1||input.indexOf("Win32")!=-1||input.indexOf("Win64")!=-1){return "win";
}else if(input.indexOf("Macintosh")!=-1||input.indexOf("MacPPC")!=-1||input.indexOf("MacIntel")!=-1){return "osx";
}else if(input.indexOf("iPod")!=-1||input.indexOf("iPhone")!=-1||input.indexOf("iPad")!=-1){return "ios";
}else if(input.indexOf("Linux")!=-1){return "linux";
}else if(input.indexOf("X11")!=-1||input.indexOf("BSD")!=-1){return "unix";
}else if(input.indexOf("Android")!=-1){return "android";
}else if(input.indexOf("SymbianOS")!=-1){return "symbian";
}return "";
},__ids:{"Windows NT 6.1":"7","Windows NT 6.0":"vista","Windows NT 5.2":"2003","Windows NT 5.1":"xp","Windows NT 5.0":"2000","Windows 2000":"2000","Windows NT 4.0":"nt4","Win 9x 4.90":"me","Windows CE":"ce","Windows 98":"98","Win98":"98","Windows 95":"95","Win95":"95","Mac OS X 10_7":"10.7","Mac OS X 10.7":"10.7","Mac OS X 10_6":"10.6","Mac OS X 10.6":"10.6","Mac OS X 10_5":"10.5","Mac OS X 10.5":"10.5","Mac OS X 10_4":"10.4","Mac OS X 10.4":"10.4","Mac OS X 10_3":"10.3","Mac OS X 10.3":"10.3","Mac OS X 10_2":"10.2","Mac OS X 10.2":"10.2","Mac OS X 10_1":"10.1","Mac OS X 10.1":"10.1","Mac OS X 10_0":"10.0","Mac OS X 10.0":"10.0"},getVersion:function(){var str=[];

for(var key in qx.bom.client.OperatingSystem.__ids){str.push(key);
}var reg=new RegExp("("+str.join("|").replace(/\./g,"\.")+")","g");
var match=reg.exec(navigator.userAgent);

if(match&&match[1]){return qx.bom.client.OperatingSystem.__ids[match[1]];
}return "";
}}});
qx.Bootstrap.define("qx.bom.client.Locale",{statics:{LOCALE:"",VARIANT:"",getLocale:function(){var locale=qx.bom.client.Locale.__getNavigatorLocale();
var index=locale.indexOf("-");

if(index!=-1){locale=locale.substr(0,index);
}return locale;
},getVariant:function(){var locale=qx.bom.client.Locale.__getNavigatorLocale();
var variant="";
var index=locale.indexOf("-");

if(index!=-1){variant=locale.substr(index+1);
}return variant;
},__getNavigatorLocale:function(){var locale=(navigator.userLanguage||navigator.language||"");
if(qx.bom.client.OperatingSystem.getName()=="android"){var match=/(\w{2})-(\w{2})/i.exec(navigator.userAgent);

if(match){locale=match[0];
}}return locale.toLowerCase();
}},defer:function(statics){statics.LOCALE=statics.getLocale();
statics.VARIANT=statics.getVariant();
if(qx.Bootstrap.DEBUG){var keys=["LOCALE","VARIANT"];

for(var i=0;i<keys.length;i++){if(statics.__defineGetter__){var constantValue=statics[keys[i]];
statics.__defineGetter__(keys[i],qx.Bootstrap.bind(function(key,c){var warning="The constant '"+key+"' of '"+statics.classname+"'is deprecated: "+"Please check the API documentation of qx.core.Environment.";

if(qx.dev&&qx.dev.StackTrace){warning+="\nTrace:"+qx.dev.StackTrace.getStackTrace().join("\n");
}qx.Bootstrap.warn(warning);
return c;
},statics,keys[i],constantValue));
}}}}});
qx.Bootstrap.define("qx.bom.client.Html",{statics:{getWebWorker:function(){return window.Worker!=null;
},getGeoLocation:function(){return navigator.geolocation!=null;
},getAudio:function(){return !!document.createElement('audio').canPlayType;
},getAudioOgg:function(){if(!qx.bom.client.Html.getAudio()){return "";
}var a=document.createElement("audio");
return a.canPlayType("audio/ogg");
},getAudioMp3:function(){if(!qx.bom.client.Html.getAudio()){return "";
}var a=document.createElement("audio");
return a.canPlayType("audio/mpeg");
},getAudioWav:function(){if(!qx.bom.client.Html.getAudio()){return "";
}var a=document.createElement("audio");
return a.canPlayType("audio/x-wav");
},getAudioAu:function(){if(!qx.bom.client.Html.getAudio()){return "";
}var a=document.createElement("audio");
return a.canPlayType("audio/basic");
},getAudioAif:function(){if(!qx.bom.client.Html.getAudio()){return "";
}var a=document.createElement("audio");
return a.canPlayType("audio/x-aiff");
},getVideo:function(){return !!document.createElement('video').canPlayType;
},getVideoOgg:function(){if(!qx.bom.client.Html.getVideo()){return "";
}var v=document.createElement("video");
return v.canPlayType('video/ogg; codecs="theora, vorbis"');
},getVideoH264:function(){if(!qx.bom.client.Html.getVideo()){return "";
}var v=document.createElement("video");
return v.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
},getVideoWebm:function(){if(!qx.bom.client.Html.getVideo()){return "";
}var v=document.createElement("video");
return v.canPlayType('video/webm; codecs="vp8, vorbis"');
},getLocalStorage:function(){try{return window.localStorage!=null;
}catch(exc){return false;
}},getSessionStorage:function(){try{return window.sessionStorage!=null;
}catch(exc){return false;
}},getClassList:function(){return !!(document.documentElement.classList&&qx.Bootstrap.getClass(document.documentElement.classList)==="DOMTokenList");
},getXPath:function(){return !!document.evaluate;
},getXul:function(){try{document.createElementNS("http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul","label");
return true;
}catch(e){return false;
}},getSvg:function(){return document.implementation&&document.implementation.hasFeature&&(document.implementation.hasFeature("org.w3c.dom.svg","1.0")||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1"));
},getVml:function(){return qx.bom.client.Engine.getName()=="mshtml";
},getCanvas:function(){return !!window.CanvasRenderingContext2D;
},getDataUrl:function(callback){var data=new Image();
data.onload=data.onerror=function(){window.setTimeout(function(){callback.call(null,(data.width==1&&data.height==1));
},0);
};
data.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
}}});
qx.Bootstrap.define("qx.bom.client.Transport",{statics:{getMaxConcurrentRequestCount:function(){var maxConcurrentRequestCount;
var versionParts=qx.bom.client.Engine.getVersion().split(".");
var versionMain=0;
var versionMajor=0;
var versionMinor=0;
if(versionParts[0]){versionMain=versionParts[0];
}if(versionParts[1]){versionMajor=versionParts[1];
}if(versionParts[2]){versionMinor=versionParts[2];
}if(window.maxConnectionsPerServer){maxConcurrentRequestCount=window.maxConnectionsPerServer;
}else if(qx.bom.client.Engine.getName()=="opera"){maxConcurrentRequestCount=8;
}else if(qx.bom.client.Engine.getName()=="webkit"){maxConcurrentRequestCount=4;
}else if(qx.bom.client.Engine.getName()=="gecko"&&((versionMain>1)||((versionMain==1)&&(versionMajor>9))||((versionMain==1)&&(versionMajor==9)&&(versionMinor>=1)))){maxConcurrentRequestCount=6;
}else{maxConcurrentRequestCount=2;
}return maxConcurrentRequestCount;
},getSsl:function(){return window.location.protocol==="https:";
},getXmlHttpRequest:function(){var supports=window.ActiveXObject?
(function(){if(window.location.protocol!=="file:"){try{new window.XMLHttpRequest();
return "xhr";
}catch(noXhr){}}
try{new window.ActiveXObject("Microsoft.XMLHTTP");
return "activex";
}catch(noActiveX){}})():
(function(){try{new window.XMLHttpRequest();
return "xhr";
}catch(noXhr){}})();
return supports||"";
}}});
qx.Bootstrap.define("qx.bom.client.Plugin",{statics:{getGears:function(){return !!(window.google&&window.google.gears);
},__db:{quicktime:{plugin:"QuickTime",control:"QuickTimeCheckObject.QuickTimeCheck.1"},wmv:{plugin:"Windows Media",control:"WMPlayer.OCX.7"},divx:{plugin:"DivX Web Player",control:"npdivx.DivXBrowserPlugin.1"},silverlight:{plugin:"Silverlight",control:"AgControl.AgControl"}},getQuicktimeVersion:function(){var entry=qx.bom.client.Plugin.__db["quicktime"];
return qx.bom.client.Plugin.__getVersion(entry.control,entry.plugin);
},getWindowsMediaVersion:function(){var entry=qx.bom.client.Plugin.__db["wmv"];
return qx.bom.client.Plugin.__getVersion(entry.control,entry.plugin);
},getDivXVersion:function(){var entry=qx.bom.client.Plugin.__db["divx"];
return qx.bom.client.Plugin.__getVersion(entry.control,entry.plugin);
},getSilverlightVersion:function(){var entry=qx.bom.client.Plugin.__db["silverlight"];
return qx.bom.client.Plugin.__getVersion(entry.control,entry.plugin);
},getQuicktime:function(){var entry=qx.bom.client.Plugin.__db["quicktime"];
return qx.bom.client.Plugin.__isAvailable(entry.control,entry.plugin);
},getWindowsMedia:function(){var entry=qx.bom.client.Plugin.__db["wmv"];
return qx.bom.client.Plugin.__isAvailable(entry.control,entry.plugin);
},getDivX:function(){var entry=qx.bom.client.Plugin.__db["divx"];
return qx.bom.client.Plugin.__isAvailable(entry.control,entry.plugin);
},getSilverlight:function(){var entry=qx.bom.client.Plugin.__db["silverlight"];
return qx.bom.client.Plugin.__isAvailable(entry.control,entry.plugin);
},__getVersion:function(activeXName,pluginName){var available=qx.bom.client.Plugin.__isAvailable(activeXName,pluginName);
if(!available){return "";
}if(qx.bom.client.Engine.getName()=="mshtml"){var obj=new ActiveXObject(activeXName);

try{var version=obj.versionInfo;

if(version!=undefined){return version;
}version=obj.version;

if(version!=undefined){return version;
}version=obj.settings.version;

if(version!=undefined){return version;
}}catch(ex){return "";
}return "";
}else{var plugins=navigator.plugins;
var verreg=/([0-9]\.[0-9])/g;

for(var i=0;i<plugins.length;i++){var plugin=plugins[i];

if(plugin.name.indexOf(pluginName)!==-1){if(verreg.test(plugin.name)||verreg.test(plugin.description)){return RegExp.$1;
}else{return "";
}return "";
}}}},__isAvailable:function(activeXName,pluginName){if(qx.bom.client.Engine.getName()=="mshtml"){var control=window.ActiveXObject;

if(!control){return false;
}
try{new ActiveXObject(activeXName);
}catch(ex){return false;
}return true;
}else{var plugins=navigator.plugins;

if(!plugins){return false;
}var name;

for(var i=0;i<plugins.length;i++){name=plugins[i].name;

if(name.indexOf(pluginName)!==-1){return true;
}}return false;
}}}});
qx.Bootstrap.define("qx.bom.client.Engine",{statics:{NAME:"",FULLVERSION:"0.0.0",VERSION:0.0,OPERA:false,WEBKIT:false,GECKO:false,MSHTML:false,UNKNOWN_ENGINE:false,UNKNOWN_VERSION:false,DOCUMENT_MODE:null,getVersion:function(){var agent=window.navigator.userAgent;
var version="";

if(qx.bom.client.Engine.__isOpera()){if(/Opera[\s\/]([0-9]+)\.([0-9])([0-9]*)/.test(agent)){version=RegExp.$1+"."+RegExp.$2;

if(RegExp.$3!=""){version+="."+RegExp.$3;
}}}else if(qx.bom.client.Engine.__isWebkit()){if(/AppleWebKit\/([^ ]+)/.test(agent)){version=RegExp.$1;
var invalidCharacter=RegExp("[^\\.0-9]").exec(version);

if(invalidCharacter){version=version.slice(0,invalidCharacter.index);
}}}else if(qx.bom.client.Engine.__isGecko()){if(/rv\:([^\);]+)(\)|;)/.test(agent)){version=RegExp.$1;
}}else if(qx.bom.client.Engine.__isMshtml()){if(/MSIE\s+([^\);]+)(\)|;)/.test(agent)){version=RegExp.$1;
if(version<8&&/Trident\/([^\);]+)(\)|;)/.test(agent)){if(RegExp.$1=="4.0"){version="8.0";
}else if(RegExp.$1=="5.0"){version="9.0";
}}}}else{var failFunction=window.qxFail;

if(failFunction&&typeof failFunction==="function"){version=failFunction().FULLVERSION;
}else{version="1.9.0.0";
qx.Bootstrap.warn("Unsupported client: "+agent+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}return version;
},getName:function(){var name;

if(qx.bom.client.Engine.__isOpera()){name="opera";
}else if(qx.bom.client.Engine.__isWebkit()){name="webkit";
}else if(qx.bom.client.Engine.__isGecko()){name="gecko";
}else if(qx.bom.client.Engine.__isMshtml()){name="mshtml";
}else{var failFunction=window.qxFail;

if(failFunction&&typeof failFunction==="function"){name=failFunction().NAME;
}else{name="gecko";
qx.Bootstrap.warn("Unsupported client: "+window.navigator.userAgent+"! Assumed gecko version 1.9.0.0 (Firefox 3.0).");
}}return name;
},__isOpera:function(){return window.opera&&Object.prototype.toString.call(window.opera)=="[object Opera]";
},__isWebkit:function(){return window.navigator.userAgent.indexOf("AppleWebKit/")!=-1;
},__isGecko:function(){return window.controllers&&window.navigator.product==="Gecko";
},__isMshtml:function(){return window.navigator.cpuClass&&/MSIE\s+([^\);]+)(\)|;)/.test(window.navigator.userAgent);
}},defer:function(statics){statics.NAME=statics.getName();
statics.FULLVERSION=statics.getVersion();

if(statics.FULLVERSION==""){statics.UNKNOWN_VERSION=true;
}
if(statics.__isOpera()){statics.OPERA=true;

if(statics.FULLVERSION==""){statics.FULLVERSION="9.6.0";
}}else if(statics.__isWebkit()){statics.WEBKIT=true;

if(statics.FULLVERSION==""){statics.FULLVERSION="525.26";
}}else if(statics.__isGecko()){statics.GECKO=true;

if(statics.FULLVERSION==""){statics.FULLVERSION="1.9.0.0";
}}else if(statics.__isMshtml()){statics.MSHTML=true;

if(document.documentMode){statics.DOCUMENT_MODE=document.documentMode;
}}else{var failFunction=window.qxFail;

if(failFunction&&typeof failFunction==="function"){if(failFunction().NAME){statics[failFunction().NAME.toUpperCase()]=true;
}}else{statics.GECKO=true;
statics.UNKNOWN_ENGINE=true;
statics.UNKNOWN_VERSION=true;
}}statics.VERSION=parseFloat(statics.FULLVERSION);
if(qx.Bootstrap.DEBUG){var keys=["NAME","FULLVERSION","VERSION","OPERA","WEBKIT","GECKO","MSHTML","UNKNOWN_ENGINE","UNKNOWN_VERSION","DOCUMENT_MODE"];

for(var i=0;i<keys.length;i++){if(statics.__defineGetter__){var constantValue=statics[keys[i]];
statics.__defineGetter__(keys[i],qx.Bootstrap.bind(function(key,c){var warning="The constant '"+key+"' of '"+statics.classname+"'is deprecated: "+"Please check the API documentation of qx.core.Environment.";

if(qx.dev&&qx.dev.StackTrace){warning+="\nTrace:"+qx.dev.StackTrace.getStackTrace().join("\n");
}qx.Bootstrap.warn(warning);
return c;
},statics,keys[i],constantValue));
}}}}});
qx.Bootstrap.define("qx.bom.client.Browser",{statics:{UNKNOWN:true,NAME:"unknown",TITLE:"unknown 0.0",VERSION:0.0,FULLVERSION:"0.0.0",getName:function(){var agent=navigator.userAgent;
var reg=new RegExp("("+qx.bom.client.Browser.__agents+")(/| )([0-9]+\.[0-9])");
var match=agent.match(reg);

if(!match){return "";
}var name=match[1].toLowerCase();
var engine=qx.bom.client.Engine.getName();

if(engine==="webkit"){if(name==="android"){name="mobile chrome";
}else if(agent.indexOf("Mobile Safari")!==-1||agent.indexOf("Mobile/")!==-1){name="mobile safari";
}}else if(engine==="mshtml"){if(name==="msie"){name="ie";
if(qx.bom.client.OperatingSystem.getVersion()==="ce"){name="iemobile";
}}}else if(engine==="opera"){if(name==="opera mobi"){name="operamobile";
}else if(name==="opera mini"){name="operamini";
}}return name;
},getVersion:function(){var agent=navigator.userAgent;
var reg=new RegExp("("+qx.bom.client.Browser.__agents+")(/| )([0-9]+\.[0-9])");
var match=agent.match(reg);

if(!match){return "";
}var name=match[1].toLowerCase();
var version=match[3];
if(agent.match(/Version(\/| )([0-9]+\.[0-9])/)){version=RegExp.$2;
}
if(qx.bom.client.Engine.getName()=="mshtml"){version=qx.bom.client.Engine.getVersion();

if(name==="msie"&&qx.bom.client.OperatingSystem.getVersion()=="ce"){version="5.0";
}}return version;
},getDocumentMode:function(){if(document.documentMode){return document.documentMode;
}return 0;
},getQuirksMode:function(){if(qx.bom.client.Engine.getName()=="mshtml"&&parseFloat(qx.bom.client.Engine.getVersion())>=8){return qx.bom.client.Engine.DOCUMENT_MODE===5;
}else{return document.compatMode!=="CSS1Compat";
}},__agents:{"webkit":"AdobeAIR|Titanium|Fluid|Chrome|Android|Epiphany|Konqueror|iCab|OmniWeb|Maxthon|Pre|Mobile Safari|Safari","gecko":"prism|Fennec|Camino|Kmeleon|Galeon|Netscape|SeaMonkey|Firefox","mshtml":"IEMobile|Maxthon|MSIE","opera":"Opera Mini|Opera Mobi|Opera"}[qx.bom.client.Engine.getName()]},defer:function(statics){statics.NAME=statics.getName();
statics.FULLVERSION=statics.getVersion();
statics.VERSION=parseFloat(statics.FULLVERSION);
statics.TITLE=statics.NAME+" "+statics.VERSION;

if(statics.NAME!==""){statics.UNKNOWN=false;
}if(qx.Bootstrap.DEBUG){var keys=["FULLVERSION","VERSION","NAME","TITLE","UNKNOWN"];

for(var i=0;i<keys.length;i++){if(statics.__defineGetter__){var constantValue=statics[keys[i]];
statics.__defineGetter__(keys[i],qx.Bootstrap.bind(function(key,c){var warning="The constant '"+key+"' of '"+statics.classname+"'is deprecated: "+"Please check the API documentation of qx.core.Environment.";

if(qx.dev&&qx.dev.StackTrace){warning+="\nTrace:"+qx.dev.StackTrace.getStackTrace().join("\n");
}qx.Bootstrap.warn(warning);
return c;
},statics,keys[i],constantValue));
}}}}});
qx.Bootstrap.define("qx.bom.client.Css",{statics:{getBoxModel:function(){var content=qx.bom.client.Engine.getName()!=="mshtml"||!qx.bom.client.Browser.getQuirksMode();
return content?"content":"border";
},getTextOverflow:function(){return "textOverflow" in document.documentElement.style||"OTextOverflow" in document.documentElement.style;
},getPlaceholder:function(){var i=document.createElement("input");
return "placeholder" in i;
},getBorderRadius:function(){return "borderRadius" in document.documentElement.style||"MozBorderRadius" in document.documentElement.style||"WebkitBorderRadius" in document.documentElement.style;
},getBoxShadow:function(){return "boxShadow" in document.documentElement.style||"MozBoxShadow" in document.documentElement.style||"WebkitBoxShadow" in document.documentElement.style;
},getTranslate3d:function(){return 'WebKitCSSMatrix' in window&&'m11' in new WebKitCSSMatrix();
},getGradients:function(){var el;

try{el=document.createElement("div");
}catch(ex){el=document.createElement();
}var style=["-webkit-gradient(linear,0% 0%,100% 100%,from(white), to(red))","-moz-linear-gradient(0deg, white 0%, red 100%)","-o-linear-gradient(0deg, white 0%, red 100%)","linear-gradient(0deg, white 0%, red 100%)"];

for(var i=0;i<style.length;i++){try{el.style["background"]=style[i];

if(el.style["background"].indexOf("gradient")!=-1){return true;
}}catch(ex){}}return false;
}}});
qx.Bootstrap.define("qx.bom.client.PhoneGap",{statics:{getPhoneGap:function(){return "PhoneGap" in window;
},getNotification:function(){return "notification" in navigator;
}}});
qx.Bootstrap.define("qx.bom.client.Flash",{statics:{AVAILABLE:false,FULLVERSION:"0.0.0",REVISION:"0",VERSION:0.0,EXPRESSINSTALL:false,STRICT_SECURITY_MODEL:false,isAvailable:function(){return parseFloat(qx.bom.client.Flash.getVersion())>0;
},getVersion:function(){if(qx.bom.client.Engine.getName()=="mshtml"){if(!window.ActiveXObject){return "";
}var full=[0,0,0];
var fp6Crash=false;

try{var obj=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
}catch(ex){try{var obj=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");
full=[6,0,21];
obj.AllowScriptAccess="always";
}catch(ex){if(full[0]==6){fp6Crash=true;
}}
if(!fp6Crash){try{obj=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
}catch(ex){}}}
if(!fp6Crash&&typeof obj=="object"){var info=obj.GetVariable("$version");

if(typeof info!="undefined"){info=info.split(" ")[1].split(",");
full[0]=parseInt(info[0],10);
full[1]=parseInt(info[1],10);
full[2]=parseInt(info[2],10);
}}return full.join(".");
}else{if(!navigator.plugins||typeof navigator.plugins["Shockwave Flash"]!=="object"){return "";
}var full=[0,0,0];
var desc=navigator.plugins["Shockwave Flash"].description;

if(typeof desc!="undefined"){desc=desc.replace(/^.*\s+(\S+\s+\S+$)/,"$1");
full[0]=parseInt(desc.replace(/^(.*)\..*$/,"$1"),10);
full[1]=parseInt(desc.replace(/^.*\.(.*)\s.*$/,"$1"),10);
full[2]=/r/.test(desc)?parseInt(desc.replace(/^.*r(.*)$/,"$1"),10):0;
}return full.join(".");
}},getExpressInstall:function(){var availableVersion=qx.bom.client.Flash.getVersion();

if(availableVersion==""){return false;
}var os=qx.bom.client.OperatingSystem.getName();
return (os=="win"||os=="osx")&&qx.bom.client.Flash.__supportsVersion("6.0.65",availableVersion);
},getStrictSecurityModel:function(){var version=qx.bom.client.Flash.getVersion();

if(version==""){return false;
}var full=version.split(".");

if(full[0]<10){return qx.bom.client.Flash.__supportsVersion("9.0.151",version);
}else{return qx.bom.client.Flash.__supportsVersion("10.0.12",version);
}},_cachedSupportsVersion:{},supportsVersion:function(input){if(typeof this._cachedSupportsVersion[input]==="boolean"){return this._cachedSupportsVersion[input];
}else{var splitInput=input.split(".");
var system=this.FULLVERSION.split(".");

for(var i=0;i<splitInput.length;i++){var diff=parseInt(system[i],10)-parseInt(splitInput[i],10);

if(diff>0){return (this._cachedSupportsVersion[input]=true);
}else if(diff<0){return (this._cachedSupportsVersion[input]=false);
}}return (this._cachedSupportsVersion[input]=true);
}},__supportsVersion:function(input,availableVersion){var splitInput=input.split(".");
var system=availableVersion||qx.bom.client.Flash.getVersion();
system=system.split(".");

for(var i=0;i<splitInput.length;i++){var diff=parseInt(system[i],10)-parseInt(splitInput[i],10);

if(diff>0){return true;
}else if(diff<0){return false;
}}return true;
}},defer:function(statics){statics.FULLVERSION=statics.getVersion();
statics.VERSION=parseFloat(statics.FULLVERSION);
statics.AVAILABLE=statics.isAvailable();
var full=statics.FULLVERSION.split(".");
statics.REVISION=full[full.length-1];
statics.STRICT_SECURITY_MODEL=statics.getStrictSecurityModel();
statics.EXPRESSINSTALL=statics.getExpressInstall();
if(qx.Bootstrap.DEBUG){var keys=["FULLVERSION","VERSION","AVAILABLE","REVISION","STRICT_SECURITY_MODEL","EXPRESSINSTALL"];

for(var i=0;i<keys.length;i++){if(statics.__defineGetter__){var constantValue=statics[keys[i]];
statics.__defineGetter__(keys[i],qx.Bootstrap.bind(function(key,c){var warning="The constant '"+key+"' of '"+statics.classname+"'is deprecated: "+"Please check the API documentation of qx.core.Environment.";

if(qx.dev&&qx.dev.StackTrace){warning+="\nTrace:"+qx.dev.StackTrace.getStackTrace().join("\n");
}qx.Bootstrap.warn(warning);
return c;
},statics,keys[i],constantValue));
}}}}});
qx.Bootstrap.define("qx.bom.client.EcmaScript",{statics:{getObjectCount:function(){return (({}).__count__==0);
}}});
qx.Bootstrap.define("qx.bom.client.Device",{statics:{__ids:{"iPod":"ipod","iPad":"ipad","iPhone":"iPhone","PSP":"psp","PLAYSTATION 3":"ps3","Nintendo Wii":"wii","Nintendo DS":"ds","XBOX":"xbox","Xbox":"xbox"},getName:function(){var str=[];

for(var key in this.__ids){str.push(key);
}var reg=new RegExp("("+str.join("|").replace(/\./g,"\.")+")","g");
var match=reg.exec(navigator.userAgent);

if(match&&match[1]){return qx.bom.client.Device.__ids[match[1]];
}return "pc";
}}});
qx.Bootstrap.define("qx.bom.client.Event",{statics:{getTouch:function(){return ("ontouchstart" in window);
},getPointer:function(){if("pointerEvents" in document.documentElement.style){var browserName=qx.bom.client.Engine.getName();
return browserName!="opera"&&browserName!="mshtml";
}return false;
}}});
qx.Bootstrap.define("qx.core.Environment",{statics:{_checks:{},_asyncChecks:{},__cache:{},get:function(key){if(this.__cache[key]!=undefined){return this.__cache[key];
}var check=this._checks[key];

if(check){var value=check();
this.__cache[key]=value;
return value;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(key+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},getAsync:function(key,callback,self){var env=this;

if(this.__cache[key]!=undefined){window.setTimeout(function(){callback.call(self,env.__cache[key]);
},0);
return;
}var check=this._asyncChecks[key];

if(check){check(function(result){env.__cache[key]=result;
callback.call(self,result);
});
return;
}if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn(key+" is not a valid key. Please see the API-doc of "+"qx.core.Environment for a list of predefined keys.");
qx.Bootstrap.trace(this);
}},select:function(key,values){return this.__pickFromValues(this.get(key),values);
},selectAsync:function(key,values,self){this.getAsync(key,function(result){var value=this.__pickFromValues(key,values);
value.call(self,result);
},this);
},__pickFromValues:function(key,values){var value=values[key];

if(values.hasOwnProperty(key)){return value;
}for(var id in values){if(id.indexOf("|")!=-1){var ids=id.split("|");

for(var i=0;i<ids.length;i++){if(ids[i]==key){return values[id];
}}}}if(value===true&&values["on"]!=undefined){if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn("The check '"+key+"' is a boolean value. "+"Please change your select map from 'on' to 'true'.");
qx.Bootstrap.trace(this);
}return values["on"];
}if(value===false&&values["off"]!=undefined){if(qx.Bootstrap.DEBUG){qx.Bootstrap.warn("The check '"+key+"' is a boolean value. "+"Please change your select map from 'off' to 'false'.");
qx.Bootstrap.trace(this);
}return values["off"];
}
if(values["default"]!==undefined){return values["default"];
}
if(qx.Bootstrap.DEBUG){throw new Error('No match for variant "'+key+'" ('+(typeof key)+' type)'+' in variants ['+qx.Bootstrap.getKeysAsString(values)+'] found, and no default ("default") given');
}},invalidateCacheKey:function(key){delete this.__cache[key];
},add:function(key,check){if(this._checks[key]==undefined){if(check instanceof Function){this._checks[key]=check;
}else{this._checks[key]=this.__createCheck(check);
}}},addAsync:function(key,check){if(this._checks[key]==undefined){this._asyncChecks[key]=check;
}},_initDefaultQxValues:function(){this.add("qx.allowUrlSettings",function(){return false;
});
this.add("qx.allowUrlVariants",function(){return false;
});
this.add("qx.propertyDebugLevel",function(){return 0;
});
this.add("qx.debug",function(){return true;
});
this.add("qx.aspects",function(){return false;
});
this.add("qx.dynlocale",function(){return true;
});
this.add("qx.mobile.emulatetouch",function(){return false;
});
this.add("qx.mobile.nativescroll",function(){return false;
});
this.add("qx.dynamicmousewheel",function(){return true;
});
this.add("qx.debug.databinding",function(){return false;
});
},__importFromGenerator:function(){if(window.qxsettings){for(var key in window.qxsettings){var value=window.qxsettings[key];

if(key=="qx.bom.htmlarea.HtmlArea.debug"||key=="qx.globalErrorHandling"){if(value=="on"){value=true;
}else if(value=="off"){value=false;
}}this._checks[key]=this.__createCheck(value);
}}if(window.qxvariants){for(var key in window.qxvariants){var value=window.qxvariants[key];

if(key=="qx.aspects"||key=="qx.debug"||key=="qx.dynlocale"||key=="qx.mobile.emulatetouch"||key=="qx.mobile.nativescroll"){if(value=="on"){value=true;
}else if(value=="off"){value=false;
}}this._checks[key]=this.__createCheck(value);
}}if(qx&&qx.$$environment){for(var key in qx.$$environment){var value=qx.$$environment[key];
this._checks[key]=this.__createCheck(value);
}}},__importFromUrl:function(){if(window.document&&window.document.location){var urlChecks=window.document.location.search.slice(1).split("&");

for(var i=0;i<urlChecks.length;i++){var check=urlChecks[i].split(":");

if(check.length!=3||check[0]!="qxenv"){continue;
}var key=check[1];
var value=decodeURIComponent(check[2]);
if(value=="true"){value=true;
}else if(value=="false"){value=false;
}else if(/^(\d|\.)+$/.test(value)){value=parseFloat(value);
}this._checks[key]=this.__createCheck(value);
}}},__createCheck:function(value){return qx.Bootstrap.bind(function(value){return value;
},null,value);
},useCheck:function(key){return true;
},_initChecksMap:function(){if(this.useCheck("engine.version")){this._checks["engine.version"]=qx.bom.client.Engine.getVersion;
}
if(this.useCheck("engine.name")){this._checks["engine.name"]=qx.bom.client.Engine.getName;
}if(this.useCheck("browser.name")){this._checks["browser.name"]=qx.bom.client.Browser.getName;
}
if(this.useCheck("browser.version")){this._checks["browser.version"]=qx.bom.client.Browser.getVersion;
}
if(this.useCheck("browser.documentmode")){this._checks["browser.documentmode"]=qx.bom.client.Browser.getDocumentMode;
}
if(this.useCheck("browser.quirksmode")){this._checks["browser.quirksmode"]=qx.bom.client.Browser.getQuirksMode;
}if(this.useCheck("device.name")){this._checks["device.name"]=qx.bom.client.Device.getName;
}if(this.useCheck("locale")){this._checks["locale"]=qx.bom.client.Locale.getLocale;
}
if(this.useCheck("locale.variant")){this._checks["locale.variant"]=qx.bom.client.Locale.getVariant;
}if(this.useCheck("os.name")){this._checks["os.name"]=qx.bom.client.OperatingSystem.getName;
}
if(this.useCheck("os.version")){this._checks["os.version"]=qx.bom.client.OperatingSystem.getVersion;
}if(this.useCheck("plugin.gears")){this._checks["plugin.gears"]=qx.bom.client.Plugin.getGears;
}
if(this.useCheck("plugin.quicktime")){this._checks["plugin.quicktime"]=qx.bom.client.Plugin.getQuicktime;
}
if(this.useCheck("plugin.quicktime.version")){this._checks["plugin.quicktime.version"]=qx.bom.client.Plugin.getQuicktimeVersion;
}
if(this.useCheck("plugin.windowsmedia")){this._checks["plugin.windowsmedia"]=qx.bom.client.Plugin.getWindowsMedia;
}
if(this.useCheck("plugin.windowsmedia.version")){this._checks["plugin.windowsmedia.version"]=qx.bom.client.Plugin.getWindowsMediaVersion;
}
if(this.useCheck("plugin.divx")){this._checks["plugin.divx"]=qx.bom.client.Plugin.getDivX;
}
if(this.useCheck("plugin.divx.version")){this._checks["plugin.divx.version"]=qx.bom.client.Plugin.getDivXVersion;
}
if(this.useCheck("plugin.silverlight")){this._checks["plugin.silverlight"]=qx.bom.client.Plugin.getSilverlight;
}
if(this.useCheck("plugin.silverlight.version")){this._checks["plugin.silverlight.version"]=qx.bom.client.Plugin.getSilverlightVersion;
}
if(this.useCheck("plugin.flash")){this._checks["plugin.flash"]=qx.bom.client.Flash.isAvailable;
}
if(this.useCheck("plugin.flash.version")){this._checks["plugin.flash.version"]=qx.bom.client.Flash.getVersion;
}
if(this.useCheck("plugin.flash.express")){this._checks["plugin.flash.express"]=qx.bom.client.Flash.getExpressInstall;
}
if(this.useCheck("plugin.flash.strictsecurity")){this._checks["plugin.flash.strictsecurity"]=qx.bom.client.Flash.getStrictSecurityModel;
}if(this.useCheck("io.maxrequests")){this._checks["io.maxrequests"]=qx.bom.client.Transport.getMaxConcurrentRequestCount;
}
if(this.useCheck("io.ssl")){this._checks["io.ssl"]=qx.bom.client.Transport.getSsl;
}
if(this.useCheck("io.xhr")){this._checks["io.xhr"]=qx.bom.client.Transport.getXmlHttpRequest;
}if(this.useCheck("event.touch")){this._checks["event.touch"]=qx.bom.client.Event.getTouch;
}
if(this.useCheck("event.pointer")){this._checks["event.pointer"]=qx.bom.client.Event.getPointer;
}if(this.useCheck("ecmascript.objectcount")){this._checks["ecmascript.objectcount"]=qx.bom.client.EcmaScript.getObjectCount;
}if(this.useCheck("html.webworker")){this._checks["html.webworker"]=qx.bom.client.Html.getWebWorker;
}
if(this.useCheck("html.geolocation")){this._checks["html.geolocation"]=qx.bom.client.Html.getGeoLocation;
}
if(this.useCheck("html.audio")){this._checks["html.audio"]=qx.bom.client.Html.getAudio;
}
if(this.useCheck("html.audio.ogg")){this._checks["html.audio.ogg"]=qx.bom.client.Html.getAudioOgg;
}
if(this.useCheck("html.audio.mp3")){this._checks["html.audio.mp3"]=qx.bom.client.Html.getAudioMp3;
}
if(this.useCheck("html.audio.wav")){this._checks["html.audio.wav"]=qx.bom.client.Html.getAudioWav;
}
if(this.useCheck("html.audio.au")){this._checks["html.audio.au"]=qx.bom.client.Html.getAudioAu;
}
if(this.useCheck("html.audio.aif")){this._checks["html.audio.aif"]=qx.bom.client.Html.getAudioAif;
}
if(this.useCheck("html.video")){this._checks["html.video"]=qx.bom.client.Html.getVideo;
}
if(this.useCheck("html.video.ogg")){this._checks["html.video.ogg"]=qx.bom.client.Html.getVideoOgg;
}
if(this.useCheck("html.video.h264")){this._checks["html.video.h264"]=qx.bom.client.Html.getVideoH264;
}
if(this.useCheck("html.video.webm")){this._checks["html.video.webm"]=qx.bom.client.Html.getVideoWebm;
}
if(this.useCheck("html.storage.local")){this._checks["html.storage.local"]=qx.bom.client.Html.getLocalStorage;
}
if(this.useCheck("html.storage.session")){this._checks["html.storage.session"]=qx.bom.client.Html.getSessionStorage;
}
if(this.useCheck("html.classlist")){this._checks["html.classlist"]=qx.bom.client.Html.getClassList;
}
if(this.useCheck("html.xpath")){this._checks["html.xpath"]=qx.bom.client.Html.getXPath;
}
if(this.useCheck("html.xul")){this._checks["html.xul"]=qx.bom.client.Html.getXul;
}
if(this.useCheck("html.canvas")){this._checks["html.canvas"]=qx.bom.client.Html.getCanvas;
}
if(this.useCheck("html.svg")){this._checks["html.svg"]=qx.bom.client.Html.getSvg;
}
if(this.useCheck("html.vml")){this._checks["html.vml"]=qx.bom.client.Html.getVml;
}
if(this.useCheck("html.dataurl")){this._asyncChecks["html.dataurl"]=qx.bom.client.Html.getDataUrl;
}if(this.useCheck("css.textoverflow")){this._checks["css.textoverflow"]=qx.bom.client.Css.getTextOverflow;
}
if(this.useCheck("css.placeholder")){this._checks["css.placeholder"]=qx.bom.client.Css.getPlaceholder;
}
if(this.useCheck("css.borderradius")){this._checks["css.borderradius"]=qx.bom.client.Css.getBorderRadius;
}
if(this.useCheck("css.boxshadow")){this._checks["css.boxshadow"]=qx.bom.client.Css.getBoxShadow;
}
if(this.useCheck("css.gradients")){this._checks["css.gradients"]=qx.bom.client.Css.getGradients;
}
if(this.useCheck("css.boxmodel")){this._checks["css.boxmodel"]=qx.bom.client.Css.getBoxModel;
}
if(this.useCheck("css.translate3d")){this._checks["css.translate3d"]=qx.bom.client.Css.getTranslate3d;
}if(this.useCheck("phonegap")){this._checks["phonegap"]=qx.bom.client.PhoneGap.getPhoneGap;
}
if(this.useCheck("phonegap.notification")){this._checks["phonegap.notification"]=qx.bom.client.PhoneGap.getNotification;
}}},defer:function(statics){statics._initDefaultQxValues();
statics._initChecksMap();
statics.__importFromGenerator();
if(statics.get("qx.allowUrlSettings")!=true){statics.__importFromUrl();
}}});
qx.Bootstrap.define("qx.core.Setting",{statics:{__settings:{},define:function(key,defaultValue){this.defineDeprecated(key,defaultValue);
},defineDeprecated:function(key,defaultValue){if(defaultValue===undefined){throw new Error('Default value of setting "'+key+'" must be defined!');
}
if(!this.__settings[key]){this.__settings[key]={};
}else if(this.__settings[key].defaultValue!==undefined){throw new Error('Setting "'+key+'" is already defined!');
}this.__settings[key].defaultValue=defaultValue;
},get:function(key){var cache=this.__settings[key];

if(cache===undefined){throw new Error('Setting "'+key+'" is not defined.');
}
if(cache.value!==undefined){return cache.value;
}return cache.defaultValue;
},set:function(key,value){this.setDeprecated(key,value);
},setDeprecated:function(key,value){if((key.split(".")).length<2){throw new Error('Malformed settings key "'+key+'". Must be following the schema "namespace.key".');
}
if(!this.__settings[key]){this.__settings[key]={};
}this.__settings[key].value=value;
},__init:function(){if(window.qxsettings){for(var key in window.qxsettings){this.setDeprecated(key,window.qxsettings[key]);
}window.qxsettings=undefined;

try{delete window.qxsettings;
}catch(ex){}this.__loadUrlSettings();
}},__loadUrlSettings:function(){if(qx.core.Environment.get("qx.allowUrlSettings")!=true){return;
}var urlSettings=document.location.search.slice(1).split("&");

for(var i=0;i<urlSettings.length;i++){var setting=urlSettings[i].split(":");

if(setting.length!=3||setting[0]!="qxsetting"){continue;
}this.set(setting[1],decodeURIComponent(setting[2]));
}}},defer:function(statics){statics.defineDeprecated("qx.allowUrlSettings",false);
statics.defineDeprecated("qx.allowUrlVariants",false);
statics.defineDeprecated("qx.propertyDebugLevel",0);
statics.__init();
}});
qx.Bootstrap.define("qx.core.Variant",{statics:{__variants:{},__cache:{},compilerIsSet:function(){return true;
},define:function(key,allowedValues,defaultValue){this.defineDeprecated(key,allowedValues,defaultValue);
},defineDeprecated:function(key,allowedValues,defaultValue){if(!this.__variants[key]){this.__variants[key]={};
}else{}this.__variants[key].allowedValues=allowedValues;
this.__variants[key].defaultValue=defaultValue;
},get:function(key){var data=this.__variants[key];

if(data.value!==undefined){return data.value;
}return data.defaultValue;
},__init:function(){if(window.qxvariants){for(var key in qxvariants){if(!this.__variants[key]){this.__variants[key]={};
}this.__variants[key].value=qxvariants[key];
}window.qxvariants=undefined;

try{delete window.qxvariants;
}catch(ex){}this.__loadUrlVariants(this.__variants);
}},__loadUrlVariants:function(){if(qx.core.Environment.get("qx.allowUrlVariants")!=true){return;
}var urlVariants=document.location.search.slice(1).split("&");

for(var i=0;i<urlVariants.length;i++){var variant=urlVariants[i].split(":");

if(variant.length!=3||variant[0]!="qxvariant"){continue;
}var key=variant[1];

if(!this.__variants[key]){this.__variants[key]={};
}this.__variants[key].value=decodeURIComponent(variant[2]);
}},select:function(key,variantFunctionMap){for(var variant in variantFunctionMap){if(this.isSet(key,variant)){return variantFunctionMap[variant];
}}
if(variantFunctionMap["default"]!==undefined){return variantFunctionMap["default"];
}},isSet:function(key,variants){var access=key+"$"+variants;

if(this.__cache[access]!==undefined){return this.__cache[access];
}var retval=false;
if(variants.indexOf("|")<0){retval=this.get(key)===variants;
}else{var keyParts=variants.split("|");

for(var i=0,l=keyParts.length;i<l;i++){if(this.get(key)===keyParts[i]){retval=true;
break;
}}}this.__cache[access]=retval;
return retval;
},__isValidArray:function(v){return typeof v==="object"&&v!==null&&v instanceof Array;
},__isValidObject:function(v){return typeof v==="object"&&v!==null&&!(v instanceof Array);
},__arrayContains:function(arr,obj){for(var i=0,l=arr.length;i<l;i++){if(arr[i]==obj){return true;
}}return false;
}},defer:function(statics){statics.defineDeprecated("qx.client",["gecko","mshtml","opera","webkit"],qx.bom.client.Engine.getName());
statics.defineDeprecated("qx.debug",["on","off"],"on");
statics.defineDeprecated("qx.aspects",["on","off"],"off");
statics.defineDeprecated("qx.dynlocale",["on","off"],"on");
statics.defineDeprecated("qx.mobile.emulatetouch",["on","off"],"off");
statics.defineDeprecated("qx.mobile.nativescroll",["on","off"],"off");
statics.__init();
}});
qx.Bootstrap.define("qx.Mixin",{statics:{define:function(name,config){if(config){if(config.include&&!(config.include instanceof Array)){config.include=[config.include];
}var mixin=config.statics?config.statics:{};
qx.Bootstrap.setDisplayNames(mixin,name);

for(var key in mixin){if(mixin[key] instanceof Function){mixin[key].$$mixin=mixin;
}}if(config.construct){mixin.$$constructor=config.construct;
qx.Bootstrap.setDisplayName(config.construct,name,"constructor");
}
if(config.include){mixin.$$includes=config.include;
}
if(config.properties){mixin.$$properties=config.properties;
}
if(config.members){mixin.$$members=config.members;
qx.Bootstrap.setDisplayNames(config.members,name+".prototype");
}
for(var key in mixin.$$members){if(mixin.$$members[key] instanceof Function){mixin.$$members[key].$$mixin=mixin;
}}
if(config.events){mixin.$$events=config.events;
}
if(config.destruct){mixin.$$destructor=config.destruct;
qx.Bootstrap.setDisplayName(config.destruct,name,"destruct");
}}else{var mixin={};
}mixin.$$type="Mixin";
mixin.name=name;
mixin.toString=this.genericToString;
mixin.basename=qx.Bootstrap.createNamespace(name,mixin);
this.$$registry[name]=mixin;
return mixin;
},checkCompatibility:function(mixins){var list=this.flatten(mixins);
var len=list.length;

if(len<2){return true;
}var properties={};
var members={};
var events={};
var mixin;

for(var i=0;i<len;i++){mixin=list[i];

for(var key in mixin.events){if(events[key]){throw new Error('Conflict between mixin "'+mixin.name+'" and "'+events[key]+'" in member "'+key+'"!');
}events[key]=mixin.name;
}
for(var key in mixin.properties){if(properties[key]){throw new Error('Conflict between mixin "'+mixin.name+'" and "'+properties[key]+'" in property "'+key+'"!');
}properties[key]=mixin.name;
}
for(var key in mixin.members){if(members[key]){throw new Error('Conflict between mixin "'+mixin.name+'" and "'+members[key]+'" in member "'+key+'"!');
}members[key]=mixin.name;
}}return true;
},isCompatible:function(mixin,clazz){var list=qx.Bootstrap.getMixins(clazz);
list.push(mixin);
return qx.Mixin.checkCompatibility(list);
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(mixins){if(!mixins){return [];
}var list=mixins.concat();

for(var i=0,l=mixins.length;i<l;i++){if(mixins[i].$$includes){list.push.apply(list,this.flatten(mixins[i].$$includes));
}}return list;
},genericToString:function(){return "[Mixin "+this.name+"]";
},$$registry:{},__allowedKeys:null,__validateConfig:function(){}}});
qx.Bootstrap.define("qx.Interface",{statics:{define:function(name,config){if(config){if(config.extend&&!(config.extend instanceof Array)){config.extend=[config.extend];
}var iface=config.statics?config.statics:{};
if(config.extend){iface.$$extends=config.extend;
}
if(config.properties){iface.$$properties=config.properties;
}
if(config.members){iface.$$members=config.members;
}
if(config.events){iface.$$events=config.events;
}}else{var iface={};
}iface.$$type="Interface";
iface.name=name;
iface.toString=this.genericToString;
iface.basename=qx.Bootstrap.createNamespace(name,iface);
qx.Interface.$$registry[name]=iface;
return iface;
},getByName:function(name){return this.$$registry[name];
},isDefined:function(name){return this.getByName(name)!==undefined;
},getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},flatten:function(ifaces){if(!ifaces){return [];
}var list=ifaces.concat();

for(var i=0,l=ifaces.length;i<l;i++){if(ifaces[i].$$extends){list.push.apply(list,this.flatten(ifaces[i].$$extends));
}}return list;
},__assertMembers:function(object,clazz,iface,wrap){var members=iface.$$members;

if(members){for(var key in members){if(qx.Bootstrap.isFunction(members[key])){var isPropertyMethod=this.__isPropertyMethod(clazz,key);
var hasMemberFunction=isPropertyMethod||qx.Bootstrap.isFunction(object[key]);

if(!hasMemberFunction){throw new Error('Implementation of method "'+key+'" is missing in class "'+clazz.classname+'" required by interface "'+iface.name+'"');
}var shouldWrapFunction=wrap===true&&!isPropertyMethod&&!qx.Bootstrap.hasInterface(clazz,iface);

if(shouldWrapFunction){object[key]=this.__wrapInterfaceMember(iface,object[key],key,members[key]);
}}else{if(typeof object[key]===undefined){if(typeof object[key]!=="function"){throw new Error('Implementation of member "'+key+'" is missing in class "'+clazz.classname+'" required by interface "'+iface.name+'"');
}}}}}},__isPropertyMethod:function(clazz,methodName){var match=methodName.match(/^(is|toggle|get|set|reset)(.*)$/);

if(!match){return false;
}var propertyName=qx.Bootstrap.firstLow(match[2]);
var isPropertyMethod=qx.Bootstrap.getPropertyDefinition(clazz,propertyName);

if(!isPropertyMethod){return false;
}var isBoolean=match[0]=="is"||match[0]=="toggle";

if(isBoolean){return qx.Bootstrap.getPropertyDefinition(clazz,propertyName).check=="Boolean";
}return true;
},__assertProperties:function(clazz,iface){if(iface.$$properties){for(var key in iface.$$properties){if(!qx.Bootstrap.getPropertyDefinition(clazz,key)){throw new Error('The property "'+key+'" is not supported by Class "'+clazz.classname+'"!');
}}}},__assertEvents:function(clazz,iface){if(iface.$$events){for(var key in iface.$$events){if(!qx.Bootstrap.supportsEvent(clazz,key)){throw new Error('The event "'+key+'" is not supported by Class "'+clazz.classname+'"!');
}}}},assertObject:function(object,iface){var clazz=object.constructor;
this.__assertMembers(object,clazz,iface,false);
this.__assertProperties(clazz,iface);
this.__assertEvents(clazz,iface);
var extend=iface.$$extends;

if(extend){for(var i=0,l=extend.length;i<l;i++){this.assertObject(object,extend[i]);
}}},assert:function(clazz,iface,wrap){this.__assertMembers(clazz.prototype,clazz,iface,wrap);
this.__assertProperties(clazz,iface);
this.__assertEvents(clazz,iface);
var extend=iface.$$extends;

if(extend){for(var i=0,l=extend.length;i<l;i++){this.assert(clazz,extend[i],wrap);
}}},genericToString:function(){return "[Interface "+this.name+"]";
},$$registry:{},__wrapInterfaceMember:function(){},__allowedKeys:null,__validateConfig:function(){}}});
qx.Bootstrap.define("qx.lang.Core",{statics:{errorToString:{"native":Error.prototype.toString,"emulated":function(){return this.message;
}}[(!Error.prototype.toString||Error.prototype.toString()=="[object Error]")?"emulated":"native"],arrayIndexOf:{"native":Array.prototype.indexOf,"emulated":function(searchElement,fromIndex){if(fromIndex==null){fromIndex=0;
}else if(fromIndex<0){fromIndex=Math.max(0,this.length+fromIndex);
}
for(var i=fromIndex;i<this.length;i++){if(this[i]===searchElement){return i;
}}return -1;
}}[Array.prototype.indexOf?"native":"emulated"],arrayLastIndexOf:{"native":Array.prototype.lastIndexOf,"emulated":function(searchElement,fromIndex){if(fromIndex==null){fromIndex=this.length-1;
}else if(fromIndex<0){fromIndex=Math.max(0,this.length+fromIndex);
}
for(var i=fromIndex;i>=0;i--){if(this[i]===searchElement){return i;
}}return -1;
}}[Array.prototype.lastIndexOf?"native":"emulated"],arrayForEach:{"native":Array.prototype.forEach,"emulated":function(callback,obj){var l=this.length;

for(var i=0;i<l;i++){var value=this[i];

if(value!==undefined){callback.call(obj||window,value,i,this);
}}}}[Array.prototype.forEach?"native":"emulated"],arrayFilter:{"native":Array.prototype.filter,"emulated":function(callback,obj){var res=[];
var l=this.length;

for(var i=0;i<l;i++){var value=this[i];

if(value!==undefined){if(callback.call(obj||window,value,i,this)){res.push(this[i]);
}}}return res;
}}[Array.prototype.filter?"native":"emulated"],arrayMap:{"native":Array.prototype.map,"emulated":function(callback,obj){var res=[];
var l=this.length;

for(var i=0;i<l;i++){var value=this[i];

if(value!==undefined){res[i]=callback.call(obj||window,value,i,this);
}}return res;
}}[Array.prototype.map?"native":"emulated"],arraySome:{"native":Array.prototype.some,"emulated":function(callback,obj){var l=this.length;

for(var i=0;i<l;i++){var value=this[i];

if(value!==undefined){if(callback.call(obj||window,value,i,this)){return true;
}}}return false;
}}[Array.prototype.some?"native":"emulated"],arrayEvery:{"native":Array.prototype.every,"emulated":function(callback,obj){var l=this.length;

for(var i=0;i<l;i++){var value=this[i];

if(value!==undefined){if(!callback.call(obj||window,value,i,this)){return false;
}}}return true;
}}[Array.prototype.every?"native":"emulated"],stringQuote:{"native":String.prototype.quote,"emulated":function(){return '"'+this.replace(/\\/g,"\\\\").replace(/\"/g,"\\\"")+'"';
}}[String.prototype.quote?"native":"emulated"]}});
Error.prototype.toString=qx.lang.Core.errorToString;
Array.prototype.indexOf=qx.lang.Core.arrayIndexOf;
Array.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
Array.prototype.forEach=qx.lang.Core.arrayForEach;
Array.prototype.filter=qx.lang.Core.arrayFilter;
Array.prototype.map=qx.lang.Core.arrayMap;
Array.prototype.some=qx.lang.Core.arraySome;
Array.prototype.every=qx.lang.Core.arrayEvery;
String.prototype.quote=qx.lang.Core.stringQuote;
qx.Bootstrap.define("qx.core.Property",{statics:{__checks:{"Boolean":'qx.core.Assert.assertBoolean(value, msg) || true',"String":'qx.core.Assert.assertString(value, msg) || true',"Number":'qx.core.Assert.assertNumber(value, msg) || true',"Integer":'qx.core.Assert.assertInteger(value, msg) || true',"PositiveNumber":'qx.core.Assert.assertPositiveNumber(value, msg) || true',"PositiveInteger":'qx.core.Assert.assertPositiveInteger(value, msg) || true',"Error":'qx.core.Assert.assertInstance(value, Error, msg) || true',"RegExp":'qx.core.Assert.assertInstance(value, RegExp, msg) || true',"Object":'qx.core.Assert.assertObject(value, msg) || true',"Array":'qx.core.Assert.assertArray(value, msg) || true',"Map":'qx.core.Assert.assertMap(value, msg) || true',"Function":'qx.core.Assert.assertFunction(value, msg) || true',"Date":'qx.core.Assert.assertInstance(value, Date, msg) || true',"Node":'value !== null && value.nodeType !== undefined',"Element":'value !== null && value.nodeType === 1 && value.attributes',"Document":'value !== null && value.nodeType === 9 && value.documentElement',"Window":'value !== null && value.document',"Event":'value !== null && value.type !== undefined',"Class":'value !== null && value.$$type === "Class"',"Mixin":'value !== null && value.$$type === "Mixin"',"Interface":'value !== null && value.$$type === "Interface"',"Theme":'value !== null && value.$$type === "Theme"',"Color":'qx.lang.Type.isString(value) && qx.util.ColorUtil.isValidPropertyValue(value)',"Decorator":'value !== null && qx.theme.manager.Decoration.getInstance().isValidPropertyValue(value)',"Font":'value !== null && qx.theme.manager.Font.getInstance().isDynamic(value)'},__dereference:{"Node":true,"Element":true,"Document":true,"Window":true,"Event":true},$$inherit:"inherit",$$store:{runtime:{},user:{},theme:{},inherit:{},init:{},useinit:{}},$$method:{get:{},set:{},reset:{},init:{},refresh:{},setRuntime:{},resetRuntime:{},setThemed:{},resetThemed:{}},$$allowedKeys:{name:"string",dereference:"boolean",inheritable:"boolean",nullable:"boolean",themeable:"boolean",refine:"boolean",init:null,apply:"string",event:"string",check:null,transform:"string",deferredInit:"boolean",validate:null},$$allowedGroupKeys:{name:"string",group:"object",mode:"string",themeable:"boolean"},$$inheritable:{},__executeOptimizedRefresh:function(clazz){var inheritables=this.__getInheritablesOfClass(clazz);

if(!inheritables.length){var refresher=function(){};
}else{refresher=this.__createRefresher(inheritables);
}clazz.prototype.$$refreshInheritables=refresher;
},__getInheritablesOfClass:function(clazz){var inheritable=[];

while(clazz){var properties=clazz.$$properties;

if(properties){for(var name in this.$$inheritable){if(properties[name]&&properties[name].inheritable){inheritable.push(name);
}}}clazz=clazz.superclass;
}return inheritable;
},__createRefresher:function(inheritables){var inherit=this.$$store.inherit;
var init=this.$$store.init;
var refresh=this.$$method.refresh;
var code=["var parent = this.getLayoutParent();","if (!parent) return;"];

for(var i=0,l=inheritables.length;i<l;i++){var name=inheritables[i];
code.push("var value = parent.",inherit[name],";","if (value===undefined) value = parent.",init[name],";","this.",refresh[name],"(value);");
}return new Function(code.join(""));
},attachRefreshInheritables:function(clazz){clazz.prototype.$$refreshInheritables=function(){qx.core.Property.__executeOptimizedRefresh(clazz);
return this.$$refreshInheritables();
};
},attachMethods:function(clazz,name,config){config.group?this.__attachGroupMethods(clazz,config,name):this.__attachPropertyMethods(clazz,config,name);
},__attachGroupMethods:function(clazz,config,name){var upname=qx.Bootstrap.firstUp(name);
var members=clazz.prototype;
var themeable=config.themeable===true;
var setter=[];
var resetter=[];

if(themeable){var styler=[];
var unstyler=[];
}var argHandler="var a=arguments[0] instanceof Array?arguments[0]:arguments;";
setter.push(argHandler);

if(themeable){styler.push(argHandler);
}
if(config.mode=="shorthand"){var shorthand="a=qx.lang.Array.fromShortHand(qx.lang.Array.fromArguments(a));";
setter.push(shorthand);

if(themeable){styler.push(shorthand);
}}
for(var i=0,a=config.group,l=a.length;i<l;i++){setter.push("this.",this.$$method.set[a[i]],"(a[",i,"]);");
resetter.push("this.",this.$$method.reset[a[i]],"();");

if(themeable){styler.push("this.",this.$$method.setThemed[a[i]],"(a[",i,"]);");
unstyler.push("this.",this.$$method.resetThemed[a[i]],"();");
}}this.$$method.set[name]="set"+upname;
members[this.$$method.set[name]]=new Function(setter.join(""));
this.$$method.reset[name]="reset"+upname;
members[this.$$method.reset[name]]=new Function(resetter.join(""));

if(themeable){this.$$method.setThemed[name]="setThemed"+upname;
members[this.$$method.setThemed[name]]=new Function(styler.join(""));
this.$$method.resetThemed[name]="resetThemed"+upname;
members[this.$$method.resetThemed[name]]=new Function(unstyler.join(""));
}},__attachPropertyMethods:function(clazz,config,name){var upname=qx.Bootstrap.firstUp(name);
var members=clazz.prototype;
if(config.dereference===undefined&&typeof config.check==="string"){config.dereference=this.__shouldBeDereferenced(config.check);
}var method=this.$$method;
var store=this.$$store;
store.runtime[name]="$$runtime_"+name;
store.user[name]="$$user_"+name;
store.theme[name]="$$theme_"+name;
store.init[name]="$$init_"+name;
store.inherit[name]="$$inherit_"+name;
store.useinit[name]="$$useinit_"+name;
method.get[name]="get"+upname;
members[method.get[name]]=function(){return qx.core.Property.executeOptimizedGetter(this,clazz,name,"get");
};
method.set[name]="set"+upname;
members[method.set[name]]=function(value){return qx.core.Property.executeOptimizedSetter(this,clazz,name,"set",arguments);
};
method.reset[name]="reset"+upname;
members[method.reset[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,"reset");
};

if(config.inheritable||config.apply||config.event||config.deferredInit){method.init[name]="init"+upname;
members[method.init[name]]=function(value){return qx.core.Property.executeOptimizedSetter(this,clazz,name,"init",arguments);
};
}
if(config.inheritable){method.refresh[name]="refresh"+upname;
members[method.refresh[name]]=function(value){return qx.core.Property.executeOptimizedSetter(this,clazz,name,"refresh",arguments);
};
}method.setRuntime[name]="setRuntime"+upname;
members[method.setRuntime[name]]=function(value){return qx.core.Property.executeOptimizedSetter(this,clazz,name,"setRuntime",arguments);
};
method.resetRuntime[name]="resetRuntime"+upname;
members[method.resetRuntime[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,"resetRuntime");
};

if(config.themeable){method.setThemed[name]="setThemed"+upname;
members[method.setThemed[name]]=function(value){return qx.core.Property.executeOptimizedSetter(this,clazz,name,"setThemed",arguments);
};
method.resetThemed[name]="resetThemed"+upname;
members[method.resetThemed[name]]=function(){return qx.core.Property.executeOptimizedSetter(this,clazz,name,"resetThemed");
};
}
if(config.check==="Boolean"){members["toggle"+upname]=new Function("return this."+method.set[name]+"(!this."+method.get[name]+"())");
members["is"+upname]=new Function("return this."+method.get[name]+"()");
}},__shouldBeDereferenced:function(check){return !!this.__dereference[check];
},__shouldBeDereferencedOld:function(check){return this.__dereference[check]||qx.Bootstrap.classIsDefined(check)||(qx.Interface&&qx.Interface.isDefined(check));
},__errors:{0:'Could not change or apply init value after constructing phase!',1:'Requires exactly one argument!',2:'Undefined value is not allowed!',3:'Does not allow any arguments!',4:'Null value is not allowed!',5:'Is invalid!'},error:function(obj,id,property,variant,value){var classname=obj.constructor.classname;
var msg="Error in property "+property+" of class "+classname+" in method "+this.$$method[variant][property]+" with incoming value '"+value+"': ";
throw new Error(msg+(this.__errors[id]||"Unknown reason: "+id));
},__unwrapFunctionFromCode:function(instance,members,name,variant,code,args){var store=this.$$method[variant][name];
{members[store]=new Function("value",code.join(""));
};
if(qx.core.Environment.get("qx.aspects")){members[store]=qx.core.Aspect.wrap(instance.classname+"."+store,members[store],"property");
}qx.Bootstrap.setDisplayName(members[store],instance.classname+".prototype",store);
if(args===undefined){return instance[store]();
}else{return instance[store](args[0]);
}},executeOptimizedGetter:function(instance,clazz,name,variant){var config=clazz.$$properties[name];
var members=clazz.prototype;
var code=[];
var store=this.$$store;
code.push('if(this.',store.runtime[name],'!==undefined)');
code.push('return this.',store.runtime[name],';');

if(config.inheritable){code.push('else if(this.',store.inherit[name],'!==undefined)');
code.push('return this.',store.inherit[name],';');
code.push('else ');
}code.push('if(this.',store.user[name],'!==undefined)');
code.push('return this.',store.user[name],';');

if(config.themeable){code.push('else if(this.',store.theme[name],'!==undefined)');
code.push('return this.',store.theme[name],';');
}
if(config.deferredInit&&config.init===undefined){code.push('else if(this.',store.init[name],'!==undefined)');
code.push('return this.',store.init[name],';');
}code.push('else ');

if(config.init!==undefined){if(config.inheritable){code.push('var init=this.',store.init[name],';');

if(config.nullable){code.push('if(init==qx.core.Property.$$inherit)init=null;');
}else if(config.init!==undefined){code.push('return this.',store.init[name],';');
}else{code.push('if(init==qx.core.Property.$$inherit)throw new Error("Inheritable property ',name,' of an instance of ',clazz.classname,' is not (yet) ready!");');
}code.push('return init;');
}else{code.push('return this.',store.init[name],';');
}}else if(config.inheritable||config.nullable){code.push('return null;');
}else{code.push('throw new Error("Property ',name,' of an instance of ',clazz.classname,' is not (yet) ready!");');
}return this.__unwrapFunctionFromCode(instance,members,name,variant,code);
},executeOptimizedSetter:function(instance,clazz,name,variant,args){var config=clazz.$$properties[name];
var members=clazz.prototype;
var code=[];
var incomingValue=variant==="set"||variant==="setThemed"||variant==="setRuntime"||(variant==="init"&&config.init===undefined);
var hasCallback=config.apply||config.event||config.inheritable;
var store=this.__getStore(variant,name);
this.__emitSetterPreConditions(code,config,name,variant,incomingValue);

if(incomingValue){this.__emitIncomingValueTransformation(code,clazz,config,name);
}
if(hasCallback){this.__emitOldNewComparison(code,incomingValue,store,variant);
}
if(config.inheritable){code.push('var inherit=prop.$$inherit;');
}
if(!hasCallback){this.__emitStoreValue(code,name,variant,incomingValue);
}else{this.__emitStoreComputedAndOldValue(code,config,name,variant,incomingValue);
}
if(config.inheritable){this.__emitStoreInheritedPropertyValue(code,config,name,variant);
}else if(hasCallback){this.__emitNormalizeUndefinedValues(code,config,name,variant);
}
if(hasCallback){this.__emitCallCallback(code,config,name);
if(config.inheritable&&members._getChildren){this.__emitRefreshChildrenValue(code,name);
}}if(incomingValue){code.push('return value;');
}return this.__unwrapFunctionFromCode(instance,members,name,variant,code,args);
},__getStore:function(variant,name){if(variant==="setRuntime"||variant==="resetRuntime"){var store=this.$$store.runtime[name];
}else if(variant==="setThemed"||variant==="resetThemed"){store=this.$$store.theme[name];
}else if(variant==="init"){store=this.$$store.init[name];
}else{store=this.$$store.user[name];
}return store;
},__emitSetterPreConditions:function(code,config,name,variant,incomingValue){{if(!config.nullable||config.check||config.inheritable){code.push('var prop=qx.core.Property;');
}if(variant==="set"){code.push('if(value===undefined)prop.error(this,2,"',name,'","',variant,'",value);');
}};
},__emitIncomingValueTransformation:function(code,clazz,config,name){if(config.transform){code.push('value=this.',config.transform,'(value);');
}if(config.validate){if(typeof config.validate==="string"){code.push('this.',config.validate,'(value);');
}else if(config.validate instanceof Function){code.push(clazz.classname,'.$$properties.',name);
code.push('.validate.call(this, value);');
}}},__emitOldNewComparison:function(code,incomingValue,store,variant){var resetValue=(variant==="reset"||variant==="resetThemed"||variant==="resetRuntime");

if(incomingValue){code.push('if(this.',store,'===value)return value;');
}else if(resetValue){code.push('if(this.',store,'===undefined)return;');
}},__emitIncomingValueValidation:undefined,__emitStoreValue:function(code,name,variant,incomingValue){if(variant==="setRuntime"){code.push('this.',this.$$store.runtime[name],'=value;');
}else if(variant==="resetRuntime"){code.push('if(this.',this.$$store.runtime[name],'!==undefined)');
code.push('delete this.',this.$$store.runtime[name],';');
}else if(variant==="set"){code.push('this.',this.$$store.user[name],'=value;');
}else if(variant==="reset"){code.push('if(this.',this.$$store.user[name],'!==undefined)');
code.push('delete this.',this.$$store.user[name],';');
}else if(variant==="setThemed"){code.push('this.',this.$$store.theme[name],'=value;');
}else if(variant==="resetThemed"){code.push('if(this.',this.$$store.theme[name],'!==undefined)');
code.push('delete this.',this.$$store.theme[name],';');
}else if(variant==="init"&&incomingValue){code.push('this.',this.$$store.init[name],'=value;');
}},__emitStoreComputedAndOldValue:function(code,config,name,variant,incomingValue){if(config.inheritable){code.push('var computed, old=this.',this.$$store.inherit[name],';');
}else{code.push('var computed, old;');
}code.push('if(this.',this.$$store.runtime[name],'!==undefined){');

if(variant==="setRuntime"){code.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(variant==="resetRuntime"){code.push('delete this.',this.$$store.runtime[name],';');
code.push('if(this.',this.$$store.user[name],'!==undefined)');
code.push('computed=this.',this.$$store.user[name],';');
code.push('else if(this.',this.$$store.theme[name],'!==undefined)');
code.push('computed=this.',this.$$store.theme[name],';');
code.push('else if(this.',this.$$store.init[name],'!==undefined){');
code.push('computed=this.',this.$$store.init[name],';');
code.push('this.',this.$$store.useinit[name],'=true;');
code.push('}');
}else{code.push('old=computed=this.',this.$$store.runtime[name],';');
if(variant==="set"){code.push('this.',this.$$store.user[name],'=value;');
}else if(variant==="reset"){code.push('delete this.',this.$$store.user[name],';');
}else if(variant==="setThemed"){code.push('this.',this.$$store.theme[name],'=value;');
}else if(variant==="resetThemed"){code.push('delete this.',this.$$store.theme[name],';');
}else if(variant==="init"&&incomingValue){code.push('this.',this.$$store.init[name],'=value;');
}}code.push('}');
code.push('else if(this.',this.$$store.user[name],'!==undefined){');

if(variant==="set"){if(!config.inheritable){code.push('old=this.',this.$$store.user[name],';');
}code.push('computed=this.',this.$$store.user[name],'=value;');
}else if(variant==="reset"){if(!config.inheritable){code.push('old=this.',this.$$store.user[name],';');
}code.push('delete this.',this.$$store.user[name],';');
code.push('if(this.',this.$$store.runtime[name],'!==undefined)');
code.push('computed=this.',this.$$store.runtime[name],';');
code.push('if(this.',this.$$store.theme[name],'!==undefined)');
code.push('computed=this.',this.$$store.theme[name],';');
code.push('else if(this.',this.$$store.init[name],'!==undefined){');
code.push('computed=this.',this.$$store.init[name],';');
code.push('this.',this.$$store.useinit[name],'=true;');
code.push('}');
}else{if(variant==="setRuntime"){code.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(config.inheritable){code.push('computed=this.',this.$$store.user[name],';');
}else{code.push('old=computed=this.',this.$$store.user[name],';');
}if(variant==="setThemed"){code.push('this.',this.$$store.theme[name],'=value;');
}else if(variant==="resetThemed"){code.push('delete this.',this.$$store.theme[name],';');
}else if(variant==="init"&&incomingValue){code.push('this.',this.$$store.init[name],'=value;');
}}code.push('}');
if(config.themeable){code.push('else if(this.',this.$$store.theme[name],'!==undefined){');

if(!config.inheritable){code.push('old=this.',this.$$store.theme[name],';');
}
if(variant==="setRuntime"){code.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(variant==="set"){code.push('computed=this.',this.$$store.user[name],'=value;');
}else if(variant==="setThemed"){code.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(variant==="resetThemed"){code.push('delete this.',this.$$store.theme[name],';');
code.push('if(this.',this.$$store.init[name],'!==undefined){');
code.push('computed=this.',this.$$store.init[name],';');
code.push('this.',this.$$store.useinit[name],'=true;');
code.push('}');
}else if(variant==="init"){if(incomingValue){code.push('this.',this.$$store.init[name],'=value;');
}code.push('computed=this.',this.$$store.theme[name],';');
}else if(variant==="refresh"){code.push('computed=this.',this.$$store.theme[name],';');
}code.push('}');
}code.push('else if(this.',this.$$store.useinit[name],'){');

if(!config.inheritable){code.push('old=this.',this.$$store.init[name],';');
}
if(variant==="init"){if(incomingValue){code.push('computed=this.',this.$$store.init[name],'=value;');
}else{code.push('computed=this.',this.$$store.init[name],';');
}}else if(variant==="set"||variant==="setRuntime"||variant==="setThemed"||variant==="refresh"){code.push('delete this.',this.$$store.useinit[name],';');

if(variant==="setRuntime"){code.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(variant==="set"){code.push('computed=this.',this.$$store.user[name],'=value;');
}else if(variant==="setThemed"){code.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(variant==="refresh"){code.push('computed=this.',this.$$store.init[name],';');
}}code.push('}');
if(variant==="set"||variant==="setRuntime"||variant==="setThemed"||variant==="init"){code.push('else{');

if(variant==="setRuntime"){code.push('computed=this.',this.$$store.runtime[name],'=value;');
}else if(variant==="set"){code.push('computed=this.',this.$$store.user[name],'=value;');
}else if(variant==="setThemed"){code.push('computed=this.',this.$$store.theme[name],'=value;');
}else if(variant==="init"){if(incomingValue){code.push('computed=this.',this.$$store.init[name],'=value;');
}else{code.push('computed=this.',this.$$store.init[name],';');
}code.push('this.',this.$$store.useinit[name],'=true;');
}code.push('}');
}},__emitStoreInheritedPropertyValue:function(code,config,name,variant){code.push('if(computed===undefined||computed===inherit){');

if(variant==="refresh"){code.push('computed=value;');
}else{code.push('var pa=this.getLayoutParent();if(pa)computed=pa.',this.$$store.inherit[name],';');
}code.push('if((computed===undefined||computed===inherit)&&');
code.push('this.',this.$$store.init[name],'!==undefined&&');
code.push('this.',this.$$store.init[name],'!==inherit){');
code.push('computed=this.',this.$$store.init[name],';');
code.push('this.',this.$$store.useinit[name],'=true;');
code.push('}else{');
code.push('delete this.',this.$$store.useinit[name],';}');
code.push('}');
code.push('if(old===computed)return value;');
code.push('if(computed===inherit){');
code.push('computed=undefined;delete this.',this.$$store.inherit[name],';');
code.push('}');
code.push('else if(computed===undefined)');
code.push('delete this.',this.$$store.inherit[name],';');
code.push('else this.',this.$$store.inherit[name],'=computed;');
code.push('var backup=computed;');
if(config.init!==undefined&&variant!=="init"){code.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{code.push('if(old===undefined)old=null;');
}code.push('if(computed===undefined||computed==inherit)computed=null;');
},__emitNormalizeUndefinedValues:function(code,config,name,variant){if(variant!=="set"&&variant!=="setRuntime"&&variant!=="setThemed"){code.push('if(computed===undefined)computed=null;');
}code.push('if(old===computed)return value;');
if(config.init!==undefined&&variant!=="init"){code.push('if(old===undefined)old=this.',this.$$store.init[name],";");
}else{code.push('if(old===undefined)old=null;');
}},__emitCallCallback:function(code,config,name){if(config.apply){code.push('this.',config.apply,'(computed, old, "',name,'");');
}if(config.event){code.push("var reg=qx.event.Registration;","if(reg.hasListener(this, '",config.event,"')){","reg.fireEvent(this, '",config.event,"', qx.event.type.Data, [computed, old]",")}");
}},__emitRefreshChildrenValue:function(code,name){code.push('var a=this._getChildren();if(a)for(var i=0,l=a.length;i<l;i++){');
code.push('if(a[i].',this.$$method.refresh[name],')a[i].',this.$$method.refresh[name],'(backup);');
code.push('}');
}},defer:function(statics){var ie6=navigator.userAgent.indexOf("MSIE 6.0")!=-1;
var ff2=navigator.userAgent.indexOf("rv:1.8.1")!=-1;
if(ie6||ff2){statics.__shouldBeDereferenced=statics.__shouldBeDereferencedOld;
}}});
qx.Bootstrap.define("qx.Class",{statics:{define:function(name,config){if(!config){var config={};
}if(config.include&&!(config.include instanceof Array)){config.include=[config.include];
}if(config.implement&&!(config.implement instanceof Array)){config.implement=[config.implement];
}var implicitType=false;

if(!config.hasOwnProperty("extend")&&!config.type){config.type="static";
implicitType=true;
}var clazz=this.__createClass(name,config.type,config.extend,config.statics,config.construct,config.destruct,config.include);
if(config.extend){if(config.properties){this.__addProperties(clazz,config.properties,true);
}if(config.members){this.__addMembers(clazz,config.members,true,true,false);
}if(config.events){this.__addEvents(clazz,config.events,true);
}if(config.include){for(var i=0,l=config.include.length;i<l;i++){this.__addMixin(clazz,config.include[i],false);
}}}if(config.environment){for(var key in config.environment){qx.core.Environment.add(key,config.environment[key]);
}for(var key in config.environment){qx.core.Setting.defineDeprecated(key,config.environment[key]);
}}if(config.settings){for(var key in config.settings){qx.core.Setting.define(key,config.settings[key]);
}}if(config.variants){for(var key in config.variants){qx.core.Variant.define(key,config.variants[key].allowedValues,config.variants[key].defaultValue);
}}if(config.implement){for(var i=0,l=config.implement.length;i<l;i++){this.__addInterface(clazz,config.implement[i]);
}}if(config.defer){config.defer.self=clazz;
config.defer(clazz,clazz.prototype,{add:function(name,config){var properties={};
properties[name]=config;
qx.Class.__addProperties(clazz,properties,true);
}});
}return clazz;
},undefine:function(name){delete this.$$registry[name];
var ns=name.split(".");
var objects=[window];

for(var i=0;i<ns.length;i++){objects.push(objects[i][ns[i]]);
}for(var i=objects.length-1;i>=1;i--){var last=objects[i];
var parent=objects[i-1];

if(qx.Bootstrap.isFunction(last)||qx.Bootstrap.objectGetLength(last)===0){delete parent[ns[i-1]];
}else{break;
}}},isDefined:qx.Bootstrap.classIsDefined,getTotalNumber:function(){return qx.Bootstrap.objectGetLength(this.$$registry);
},getByName:qx.Bootstrap.getByName,include:function(clazz,mixin){qx.Class.__addMixin(clazz,mixin,false);
},patch:function(clazz,mixin){qx.Class.__addMixin(clazz,mixin,true);
},isSubClassOf:function(clazz,superClass){if(!clazz){return false;
}
if(clazz==superClass){return true;
}
if(clazz.prototype instanceof superClass){return true;
}return false;
},getPropertyDefinition:qx.Bootstrap.getPropertyDefinition,getProperties:function(clazz){var list=[];

while(clazz){if(clazz.$$properties){list.push.apply(list,qx.Bootstrap.getKeys(clazz.$$properties));
}clazz=clazz.superclass;
}return list;
},getByProperty:function(clazz,name){while(clazz){if(clazz.$$properties&&clazz.$$properties[name]){return clazz;
}clazz=clazz.superclass;
}return null;
},hasProperty:qx.Bootstrap.hasProperty,getEventType:qx.Bootstrap.getEventType,supportsEvent:qx.Bootstrap.supportsEvent,hasOwnMixin:function(clazz,mixin){return clazz.$$includes&&clazz.$$includes.indexOf(mixin)!==-1;
},getByMixin:function(clazz,mixin){var list,i,l;

while(clazz){if(clazz.$$includes){list=clazz.$$flatIncludes;

for(i=0,l=list.length;i<l;i++){if(list[i]===mixin){return clazz;
}}}clazz=clazz.superclass;
}return null;
},getMixins:qx.Bootstrap.getMixins,hasMixin:function(clazz,mixin){return !!this.getByMixin(clazz,mixin);
},hasOwnInterface:function(clazz,iface){return clazz.$$implements&&clazz.$$implements.indexOf(iface)!==-1;
},getByInterface:qx.Bootstrap.getByInterface,getInterfaces:function(clazz){var list=[];

while(clazz){if(clazz.$$implements){list.push.apply(list,clazz.$$flatImplements);
}clazz=clazz.superclass;
}return list;
},hasInterface:qx.Bootstrap.hasInterface,implementsInterface:function(obj,iface){var clazz=obj.constructor;

if(this.hasInterface(clazz,iface)){return true;
}
try{qx.Interface.assertObject(obj,iface);
return true;
}catch(ex){}
try{qx.Interface.assert(clazz,iface,false);
return true;
}catch(ex){}return false;
},getInstance:function(){if(!this.$$instance){this.$$allowconstruct=true;
this.$$instance=new this;
delete this.$$allowconstruct;
}return this.$$instance;
},genericToString:function(){return "[Class "+this.classname+"]";
},$$registry:qx.Bootstrap.$$registry,__allowedKeys:null,__staticAllowedKeys:null,__validateConfig:function(){},__validateAbstractInterfaces:function(){},__createClass:function(name,type,extend,statics,construct,destruct,mixins){var clazz;

if(!extend&&qx.core.Environment.get("qx.aspects")==false){clazz=statics||{};
qx.Bootstrap.setDisplayNames(clazz,name);
}else{var clazz={};

if(extend){if(!construct){construct=this.__createDefaultConstructor();
}
if(this.__needsConstructorWrapper(extend,mixins)){clazz=this.__wrapConstructor(construct,name,type);
}else{clazz=construct;
}if(type==="singleton"){clazz.getInstance=this.getInstance;
}qx.Bootstrap.setDisplayName(construct,name,"constructor");
}if(statics){qx.Bootstrap.setDisplayNames(statics,name);
var key;

for(var i=0,a=qx.Bootstrap.getKeys(statics),l=a.length;i<l;i++){key=a[i];
var staticValue=statics[key];

if(qx.core.Environment.get("qx.aspects")){if(staticValue instanceof Function){staticValue=qx.core.Aspect.wrap(name+"."+key,staticValue,"static");
}clazz[key]=staticValue;
}else{clazz[key]=staticValue;
}}}}var basename=qx.Bootstrap.createNamespace(name,clazz);
clazz.name=clazz.classname=name;
clazz.basename=basename;
clazz.$$type="Class";

if(type){clazz.$$classtype=type;
}if(!clazz.hasOwnProperty("toString")){clazz.toString=this.genericToString;
}
if(extend){qx.Bootstrap.extendClass(clazz,construct,extend,name,basename);
if(destruct){if(qx.core.Environment.get("qx.aspects")){destruct=qx.core.Aspect.wrap(name,destruct,"destructor");
}clazz.$$destructor=destruct;
qx.Bootstrap.setDisplayName(destruct,name,"destruct");
}}this.$$registry[name]=clazz;
return clazz;
},__addEvents:function(clazz,events,patch){var key,key;

if(clazz.$$events){for(var key in events){clazz.$$events[key]=events[key];
}}else{clazz.$$events=events;
}},__addProperties:function(clazz,properties,patch){var config;

if(patch===undefined){patch=false;
}var proto=clazz.prototype;

for(var name in properties){config=properties[name];
config.name=name;
if(!config.refine){if(clazz.$$properties===undefined){clazz.$$properties={};
}clazz.$$properties[name]=config;
}if(config.init!==undefined){clazz.prototype["$$init_"+name]=config.init;
}if(config.event!==undefined){var event={};
event[config.event]="qx.event.type.Data";
this.__addEvents(clazz,event,patch);
}if(config.inheritable){qx.core.Property.$$inheritable[name]=true;

if(!proto.$$refreshInheritables){qx.core.Property.attachRefreshInheritables(clazz);
}}
if(!config.refine){qx.core.Property.attachMethods(clazz,name,config);
}}},__validateProperty:null,__addMembers:function(clazz,members,patch,base,wrap){var proto=clazz.prototype;
var key,member;
qx.Bootstrap.setDisplayNames(members,clazz.classname+".prototype");

for(var i=0,a=qx.Bootstrap.getKeys(members),l=a.length;i<l;i++){key=a[i];
member=members[key];
if(base!==false&&member instanceof Function&&member.$$type==null){if(wrap==true){member=this.__mixinMemberWrapper(member,proto[key]);
}else{if(proto[key]){member.base=proto[key];
}member.self=clazz;
}
if(qx.core.Environment.get("qx.aspects")){member=qx.core.Aspect.wrap(clazz.classname+"."+key,member,"member");
}}proto[key]=member;
}},__mixinMemberWrapper:function(member,base){if(base){return function(){var oldBase=member.base;
member.base=base;
var retval=member.apply(this,arguments);
member.base=oldBase;
return retval;
};
}else{return member;
}},__addInterface:function(clazz,iface){var list=qx.Interface.flatten([iface]);

if(clazz.$$implements){clazz.$$implements.push(iface);
clazz.$$flatImplements.push.apply(clazz.$$flatImplements,list);
}else{clazz.$$implements=[iface];
clazz.$$flatImplements=list;
}},__retrospectWrapConstruct:function(clazz){var name=clazz.classname;
var wrapper=this.__wrapConstructor(clazz,name,clazz.$$classtype);
for(var i=0,a=qx.Bootstrap.getKeys(clazz),l=a.length;i<l;i++){key=a[i];
wrapper[key]=clazz[key];
}wrapper.prototype=clazz.prototype;
var members=clazz.prototype;

for(var i=0,a=qx.Bootstrap.getKeys(members),l=a.length;i<l;i++){key=a[i];
var method=members[key];
if(method&&method.self==clazz){method.self=wrapper;
}}for(var key in this.$$registry){var construct=this.$$registry[key];

if(!construct){continue;
}
if(construct.base==clazz){construct.base=wrapper;
}
if(construct.superclass==clazz){construct.superclass=wrapper;
}
if(construct.$$original){if(construct.$$original.base==clazz){construct.$$original.base=wrapper;
}
if(construct.$$original.superclass==clazz){construct.$$original.superclass=wrapper;
}}}qx.Bootstrap.createNamespace(name,wrapper);
this.$$registry[name]=wrapper;
return wrapper;
},__addMixin:function(clazz,mixin,patch){if(this.hasMixin(clazz,mixin)){return;
}var isConstructorWrapped=clazz.$$original;

if(mixin.$$constructor&&!isConstructorWrapped){clazz=this.__retrospectWrapConstruct(clazz);
}var list=qx.Mixin.flatten([mixin]);
var entry;

for(var i=0,l=list.length;i<l;i++){entry=list[i];
if(entry.$$events){this.__addEvents(clazz,entry.$$events,patch);
}if(entry.$$properties){this.__addProperties(clazz,entry.$$properties,patch);
}if(entry.$$members){this.__addMembers(clazz,entry.$$members,patch,patch,patch);
}}if(clazz.$$includes){clazz.$$includes.push(mixin);
clazz.$$flatIncludes.push.apply(clazz.$$flatIncludes,list);
}else{clazz.$$includes=[mixin];
clazz.$$flatIncludes=list;
}},__createDefaultConstructor:function(){function defaultConstructor(){defaultConstructor.base.apply(this,arguments);
}return defaultConstructor;
},__createEmptyFunction:function(){return function(){};
},__needsConstructorWrapper:function(base,mixins){if(base&&base.$$includes){var baseMixins=base.$$flatIncludes;

for(var i=0,l=baseMixins.length;i<l;i++){if(baseMixins[i].$$constructor){return true;
}}}if(mixins){var flatMixins=qx.Mixin.flatten(mixins);

for(var i=0,l=flatMixins.length;i<l;i++){if(flatMixins[i].$$constructor){return true;
}}}return false;
},__wrapConstructor:function(construct,name,type){var wrapper=function(){var clazz=wrapper;
var retval=clazz.$$original.apply(this,arguments);
if(clazz.$$includes){var mixins=clazz.$$flatIncludes;

for(var i=0,l=mixins.length;i<l;i++){if(mixins[i].$$constructor){mixins[i].$$constructor.apply(this,arguments);
}}}return retval;
};

if(qx.core.Environment.get("qx.aspects")){var aspectWrapper=qx.core.Aspect.wrap(name,wrapper,"constructor");
wrapper.$$original=construct;
wrapper.constructor=aspectWrapper;
wrapper=aspectWrapper;
}wrapper.$$original=construct;
construct.wrapper=wrapper;
return wrapper;
}},defer:function(){if(qx.core.Environment.get("qx.aspects")){for(var classname in qx.Bootstrap.$$registry){var statics=qx.Bootstrap.$$registry[classname];

for(var key in statics){if(statics[key] instanceof Function){statics[key]=qx.core.Aspect.wrap(classname+"."+key,statics[key],"static");
}}}}}});
qx.Class.define("qx.bom.Event",{statics:{addNativeListener:function(target,type,listener,useCapture){if(target.addEventListener){target.addEventListener(type,listener,!!useCapture);
}else if(target.attachEvent){target.attachEvent("on"+type,listener);
}},removeNativeListener:function(target,type,listener,useCapture){if(target.removeEventListener){target.removeEventListener(type,listener,!!useCapture);
}else if(target.detachEvent){try{target.detachEvent("on"+type,listener);
}catch(e){if(e.number!==-2146828218){throw e;
}}}},getTarget:function(e){return e.target||e.srcElement;
},getRelatedTarget:function(e){if(e.relatedTarget!==undefined){if((qx.core.Environment.get("engine.name")=="gecko")){try{e.relatedTarget&&e.relatedTarget.nodeType;
}catch(e){return null;
}}return e.relatedTarget;
}else if(e.fromElement!==undefined&&e.type==="mouseover"){return e.fromElement;
}else if(e.toElement!==undefined){return e.toElement;
}else{return null;
}},preventDefault:function(e){if(e.preventDefault){if((qx.core.Environment.get("engine.name")=="gecko")&&parseFloat(qx.core.Environment.get("engine.version"))>=1.9&&e.type=="mousedown"&&e.button==2){return;
}e.preventDefault();
if((qx.core.Environment.get("engine.name")=="gecko")&&parseFloat(qx.core.Environment.get("engine.version"))<1.9){try{e.keyCode=0;
}catch(ex){}}}else{try{e.keyCode=0;
}catch(ex){}e.returnValue=false;
}},stopPropagation:function(e){if(e.stopPropagation){e.stopPropagation();
}else{e.cancelBubble=true;
}},fire:function(target,type){if(document.createEvent){var evt=document.createEvent("HTMLEvents");
evt.initEvent(type,true,true);
return !target.dispatchEvent(evt);
}else{var evt=document.createEventObject();
return target.fireEvent("on"+type,evt);
}},supportsEvent:qx.core.Environment.select("engine.name",{"webkit":function(target,type){return target.hasOwnProperty("on"+type);
},"default":function(target,type){var eventName="on"+type;
var supportsEvent=(eventName in target);

if(!supportsEvent){supportsEvent=typeof target[eventName]=="function";

if(!supportsEvent&&target.setAttribute){target.setAttribute(eventName,"return;");
supportsEvent=typeof target[eventName]=="function";
target.removeAttribute(eventName);
}}return supportsEvent;
}})}});
qx.Class.define("qx.event.Manager",{extend:Object,construct:function(win,registration){this.__window=win;
this.__windowId=qx.core.ObjectRegistry.toHashCode(win);
this.__registration=registration;
if(win.qx!==qx){var self=this;
qx.bom.Event.addNativeListener(win,"unload",qx.event.GlobalError.observeMethod(function(){qx.bom.Event.removeNativeListener(win,"unload",arguments.callee);
self.dispose();
}));
}this.__listeners={};
this.__handlers={};
this.__dispatchers={};
this.__handlerCache={};
},statics:{__lastUnique:0,getNextUniqueId:function(){return (this.__lastUnique++)+"";
}},members:{__registration:null,__listeners:null,__dispatchers:null,__disposeWrapper:null,__handlers:null,__handlerCache:null,__window:null,__windowId:null,getWindow:function(){return this.__window;
},getWindowId:function(){return this.__windowId;
},getHandler:function(clazz){var handler=this.__handlers[clazz.classname];

if(handler){return handler;
}return this.__handlers[clazz.classname]=new clazz(this);
},getDispatcher:function(clazz){var dispatcher=this.__dispatchers[clazz.classname];

if(dispatcher){return dispatcher;
}return this.__dispatchers[clazz.classname]=new clazz(this,this.__registration);
},getListeners:function(target,type,capture){var targetKey=target.$$hash||qx.core.ObjectRegistry.toHashCode(target);
var targetMap=this.__listeners[targetKey];

if(!targetMap){return null;
}var entryKey=type+(capture?"|capture":"|bubble");
var entryList=targetMap[entryKey];
return entryList?entryList.concat():null;
},serializeListeners:function(target){var targetKey=target.$$hash||qx.core.ObjectRegistry.toHashCode(target);
var targetMap=this.__listeners[targetKey];
var result=[];

if(targetMap){var indexOf,type,capture,entryList,entry;

for(var entryKey in targetMap){indexOf=entryKey.indexOf("|");
type=entryKey.substring(0,indexOf);
capture=entryKey.charAt(indexOf+1)=="c";
entryList=targetMap[entryKey];

for(var i=0,l=entryList.length;i<l;i++){entry=entryList[i];
result.push({self:entry.context,handler:entry.handler,type:type,capture:capture});
}}}return result;
},toggleAttachedEvents:function(target,enable){var targetKey=target.$$hash||qx.core.ObjectRegistry.toHashCode(target);
var targetMap=this.__listeners[targetKey];

if(targetMap){var indexOf,type,capture,entryList;

for(var entryKey in targetMap){indexOf=entryKey.indexOf("|");
type=entryKey.substring(0,indexOf);
capture=entryKey.charCodeAt(indexOf+1)===99;
entryList=targetMap[entryKey];

if(enable){this.__registerAtHandler(target,type,capture);
}else{this.__unregisterAtHandler(target,type,capture);
}}}},hasListener:function(target,type,capture){var targetKey=target.$$hash||qx.core.ObjectRegistry.toHashCode(target);
var targetMap=this.__listeners[targetKey];

if(!targetMap){return false;
}var entryKey=type+(capture?"|capture":"|bubble");
var entryList=targetMap[entryKey];
return !!(entryList&&entryList.length>0);
},importListeners:function(target,list){var targetKey=target.$$hash||qx.core.ObjectRegistry.toHashCode(target);
var targetMap=this.__listeners[targetKey]={};
var clazz=qx.event.Manager;

for(var listKey in list){var item=list[listKey];
var entryKey=item.type+(item.capture?"|capture":"|bubble");
var entryList=targetMap[entryKey];

if(!entryList){entryList=targetMap[entryKey]=[];
this.__registerAtHandler(target,item.type,item.capture);
}entryList.push({handler:item.listener,context:item.self,unique:item.unique||(clazz.__lastUnique++)+""});
}},addListener:function(target,type,listener,self,capture){var msg;
var targetKey=target.$$hash||qx.core.ObjectRegistry.toHashCode(target);
var targetMap=this.__listeners[targetKey];

if(!targetMap){targetMap=this.__listeners[targetKey]={};
}var entryKey=type+(capture?"|capture":"|bubble");
var entryList=targetMap[entryKey];

if(!entryList){entryList=targetMap[entryKey]=[];
}if(entryList.length===0){this.__registerAtHandler(target,type,capture);
}var unique=(qx.event.Manager.__lastUnique++)+"";
var entry={handler:listener,context:self,unique:unique};
entryList.push(entry);
return entryKey+"|"+unique;
},findHandler:function(target,type){var isDomNode=false,isWindow=false,isObject=false,isDocument=false;
var key;

if(target.nodeType===1){isDomNode=true;
key="DOM_"+target.tagName.toLowerCase()+"_"+type;
}else if(target.nodeType===9){isDocument=true;
key="DOCUMENT_"+type;
}else if(target==this.__window){isWindow=true;
key="WIN_"+type;
}else if(target.classname){isObject=true;
key="QX_"+target.classname+"_"+type;
}else{key="UNKNOWN_"+target+"_"+type;
}var cache=this.__handlerCache;

if(cache[key]){return cache[key];
}var classes=this.__registration.getHandlers();
var IEventHandler=qx.event.IEventHandler;
var clazz,instance,supportedTypes,targetCheck;

for(var i=0,l=classes.length;i<l;i++){clazz=classes[i];
supportedTypes=clazz.SUPPORTED_TYPES;

if(supportedTypes&&!supportedTypes[type]){continue;
}targetCheck=clazz.TARGET_CHECK;

if(targetCheck){var found=false;

if(isDomNode&&((targetCheck&IEventHandler.TARGET_DOMNODE)!=0)){found=true;
}else if(isWindow&&((targetCheck&IEventHandler.TARGET_WINDOW)!=0)){found=true;
}else if(isObject&&((targetCheck&IEventHandler.TARGET_OBJECT)!=0)){found=true;
}else if(isDocument&&((targetCheck&IEventHandler.TARGET_DOCUMENT)!=0)){found=true;
}
if(!found){continue;
}}instance=this.getHandler(classes[i]);

if(clazz.IGNORE_CAN_HANDLE||instance.canHandleEvent(target,type)){cache[key]=instance;
return instance;
}}return null;
},__registerAtHandler:function(target,type,capture){var handler=this.findHandler(target,type);

if(handler){handler.registerEvent(target,type,capture);
return;
}},removeListener:function(target,type,listener,self,capture){var msg;
var targetKey=target.$$hash||qx.core.ObjectRegistry.toHashCode(target);
var targetMap=this.__listeners[targetKey];

if(!targetMap){return false;
}var entryKey=type+(capture?"|capture":"|bubble");
var entryList=targetMap[entryKey];

if(!entryList){return false;
}var entry;

for(var i=0,l=entryList.length;i<l;i++){entry=entryList[i];

if(entry.handler===listener&&entry.context===self){qx.lang.Array.removeAt(entryList,i);

if(entryList.length==0){this.__unregisterAtHandler(target,type,capture);
}return true;
}}return false;
},removeListenerById:function(target,id){var msg;
var split=id.split("|");
var type=split[0];
var capture=split[1].charCodeAt(0)==99;
var unique=split[2];
var targetKey=target.$$hash||qx.core.ObjectRegistry.toHashCode(target);
var targetMap=this.__listeners[targetKey];

if(!targetMap){return false;
}var entryKey=type+(capture?"|capture":"|bubble");
var entryList=targetMap[entryKey];

if(!entryList){return false;
}var entry;

for(var i=0,l=entryList.length;i<l;i++){entry=entryList[i];

if(entry.unique===unique){qx.lang.Array.removeAt(entryList,i);

if(entryList.length==0){this.__unregisterAtHandler(target,type,capture);
}return true;
}}return false;
},removeAllListeners:function(target){var targetKey=target.$$hash||qx.core.ObjectRegistry.toHashCode(target);
var targetMap=this.__listeners[targetKey];

if(!targetMap){return false;
}var split,type,capture;

for(var entryKey in targetMap){if(targetMap[entryKey].length>0){split=entryKey.split("|");
type=split[0];
capture=split[1]==="capture";
this.__unregisterAtHandler(target,type,capture);
}}delete this.__listeners[targetKey];
return true;
},deleteAllListeners:function(targetKey){delete this.__listeners[targetKey];
},__unregisterAtHandler:function(target,type,capture){var handler=this.findHandler(target,type);

if(handler){handler.unregisterEvent(target,type,capture);
return;
}},dispatchEvent:function(target,event){var msg;
var type=event.getType();

if(!event.getBubbles()&&!this.hasListener(target,type)){qx.event.Pool.getInstance().poolObject(event);
return true;
}
if(!event.getTarget()){event.setTarget(target);
}var classes=this.__registration.getDispatchers();
var instance;
var dispatched=false;

for(var i=0,l=classes.length;i<l;i++){instance=this.getDispatcher(classes[i]);
if(instance.canDispatchEvent(target,event,type)){instance.dispatchEvent(target,event,type);
dispatched=true;
break;
}}
if(!dispatched){return true;
}var preventDefault=event.getDefaultPrevented();
qx.event.Pool.getInstance().poolObject(event);
return !preventDefault;
},dispose:function(){this.__registration.removeManager(this);
qx.util.DisposeUtil.disposeMap(this,"__handlers");
qx.util.DisposeUtil.disposeMap(this,"__dispatchers");
this.__listeners=this.__window=this.__disposeWrapper=null;
this.__registration=this.__handlerCache=null;
}}});
qx.Class.define("qx.lang.Object",{statics:{empty:function(map){for(var key in map){if(map.hasOwnProperty(key)){delete map[key];
}}},isEmpty:(qx.core.Environment.get("ecmascript.objectcount"))?
function(map){return map.__count__===0;
}:
function(map){for(var key in map){return false;
}return true;
},hasMinLength:(qx.core.Environment.get("ecmascript.objectcount"))?
function(map,minLength){return map.__count__>=minLength;
}:
function(map,minLength){if(minLength<=0){return true;
}var length=0;

for(var key in map){if((++length)>=minLength){return true;
}}return false;
},getLength:qx.Bootstrap.objectGetLength,getKeys:qx.Bootstrap.getKeys,getKeysAsString:qx.Bootstrap.getKeysAsString,getValues:function(map){var arr=[];
var keys=this.getKeys(map);

for(var i=0,l=keys.length;i<l;i++){arr.push(map[keys[i]]);
}return arr;
},mergeWith:qx.Bootstrap.objectMergeWith,carefullyMergeWith:function(target,source){return qx.lang.Object.mergeWith(target,source,false);
},merge:function(target,varargs){var len=arguments.length;

for(var i=1;i<len;i++){qx.lang.Object.mergeWith(target,arguments[i]);
}return target;
},clone:function(source){var clone={};

for(var key in source){clone[key]=source[key];
}return clone;
},invert:function(map){var result={};

for(var key in map){result[map[key].toString()]=key;
}return result;
},getKeyFromValue:function(map,value){for(var key in map){if(map.hasOwnProperty(key)&&map[key]===value){return key;
}}return null;
},contains:function(map,value){return this.getKeyFromValue(map,value)!==null;
},select:function(key,map){return map[key];
},fromArray:function(array){var obj={};

for(var i=0,l=array.length;i<l;i++){obj[array[i].toString()]=true;
}return obj;
},toUriParameter:function(obj,post){var key,parts=[],encode=window.encodeURIComponent;

for(key in obj){if(obj.hasOwnProperty(key)){if(post){parts.push(encode(key).replace(/%20/g,"+")+"="+encode(obj[key]).replace(/%20/g,"+"));
}else{parts.push(encode(key)+"="+encode(obj[key]));
}}}return parts.join("&");
}}});
qx.Class.define("qx.dom.Node",{statics:{ELEMENT:1,ATTRIBUTE:2,TEXT:3,CDATA_SECTION:4,ENTITY_REFERENCE:5,ENTITY:6,PROCESSING_INSTRUCTION:7,COMMENT:8,DOCUMENT:9,DOCUMENT_TYPE:10,DOCUMENT_FRAGMENT:11,NOTATION:12,getDocument:function(node){return node.nodeType===
this.DOCUMENT?node:
node.ownerDocument||node.document;
},getWindow:qx.core.Environment.select("engine.name",{"mshtml":function(node){if(node.nodeType==null){return node;
}if(node.nodeType!==this.DOCUMENT){node=node.ownerDocument;
}return node.parentWindow;
},"default":function(node){if(node.nodeType==null){return node;
}if(node.nodeType!==this.DOCUMENT){node=node.ownerDocument;
}return node.defaultView;
}}),getDocumentElement:function(node){return this.getDocument(node).documentElement;
},getBodyElement:function(node){return this.getDocument(node).body;
},isNode:function(node){return !!(node&&node.nodeType!=null);
},isElement:function(node){return !!(node&&node.nodeType===this.ELEMENT);
},isDocument:function(node){return !!(node&&node.nodeType===this.DOCUMENT);
},isText:function(node){return !!(node&&node.nodeType===this.TEXT);
},isWindow:function(obj){return !!(obj&&obj.history&&obj.location&&obj.document);
},isNodeName:function(node,nodeName){if(!nodeName||!node||!node.nodeName){return false;
}return nodeName.toLowerCase()==qx.dom.Node.getName(node);
},getName:function(node){if(!node||!node.nodeName){return null;
}return node.nodeName.toLowerCase();
},getText:function(node){if(!node||!node.nodeType){return null;
}
switch(node.nodeType){case 1:var i,a=[],nodes=node.childNodes,length=nodes.length;

for(i=0;i<length;i++){a[i]=this.getText(nodes[i]);
}return a.join("");
case 2:case 3:case 4:return node.nodeValue;
}return null;
},isBlockNode:function(node){if(!qx.dom.Node.isElement(node)){return false;
}node=qx.dom.Node.getName(node);
return /^(body|form|textarea|fieldset|ul|ol|dl|dt|dd|li|div|hr|p|h[1-6]|quote|pre|table|thead|tbody|tfoot|tr|td|th|iframe|address|blockquote)$/.test(node);
}}});
qx.Class.define("qx.lang.Array",{statics:{toArray:function(object,offset){return this.cast(object,Array,offset);
},cast:function(object,constructor,offset){if(object.constructor===constructor){return object;
}
if(qx.Class.hasInterface(object,qx.data.IListData)){var object=object.toArray();
}var ret=new constructor;
if((qx.core.Environment.get("engine.name")=="mshtml")){if(object.item){for(var i=offset||0,l=object.length;i<l;i++){ret.push(object[i]);
}return ret;
}}if(Object.prototype.toString.call(object)==="[object Array]"&&offset==null){ret.push.apply(ret,object);
}else{ret.push.apply(ret,Array.prototype.slice.call(object,offset||0));
}return ret;
},fromArguments:function(args,offset){return Array.prototype.slice.call(args,offset||0);
},fromCollection:function(coll){if((qx.core.Environment.get("engine.name")=="mshtml")){if(coll.item){var arr=[];

for(var i=0,l=coll.length;i<l;i++){arr[i]=coll[i];
}return arr;
}}return Array.prototype.slice.call(coll,0);
},fromShortHand:function(input){var len=input.length;
var result=qx.lang.Array.clone(input);
switch(len){case 1:result[1]=result[2]=result[3]=result[0];
break;
case 2:result[2]=result[0];
case 3:result[3]=result[1];
}return result;
},clone:function(arr){return arr.concat();
},insertAt:function(arr,obj,i){arr.splice(i,0,obj);
return arr;
},insertBefore:function(arr,obj,obj2){var i=arr.indexOf(obj2);

if(i==-1){arr.push(obj);
}else{arr.splice(i,0,obj);
}return arr;
},insertAfter:function(arr,obj,obj2){var i=arr.indexOf(obj2);

if(i==-1||i==(arr.length-1)){arr.push(obj);
}else{arr.splice(i+1,0,obj);
}return arr;
},removeAt:function(arr,i){return arr.splice(i,1)[0];
},removeAll:function(arr){arr.length=0;
return this;
},append:function(arr1,arr2){Array.prototype.push.apply(arr1,arr2);
return arr1;
},exclude:function(arr1,arr2){for(var i=0,il=arr2.length,index;i<il;i++){index=arr1.indexOf(arr2[i]);

if(index!=-1){arr1.splice(index,1);
}}return arr1;
},remove:function(arr,obj){var i=arr.indexOf(obj);

if(i!=-1){arr.splice(i,1);
return obj;
}},contains:function(arr,obj){return arr.indexOf(obj)!==-1;
},equals:function(arr1,arr2){var length=arr1.length;

if(length!==arr2.length){return false;
}
for(var i=0;i<length;i++){if(arr1[i]!==arr2[i]){return false;
}}return true;
},sum:function(arr){var result=0;

for(var i=0,l=arr.length;i<l;i++){result+=arr[i];
}return result;
},max:function(arr){var i,len=arr.length,result=arr[0];

for(i=1;i<len;i++){if(arr[i]>result){result=arr[i];
}}return result===undefined?null:result;
},min:function(arr){var i,len=arr.length,result=arr[0];

for(i=1;i<len;i++){if(arr[i]<result){result=arr[i];
}}return result===undefined?null:result;
},unique:function(arr){var ret=[],doneStrings={},doneNumbers={},doneObjects={};
var value,count=0;
var key="qx"+qx.lang.Date.now();
var hasNull=false,hasFalse=false,hasTrue=false;
for(var i=0,len=arr.length;i<len;i++){value=arr[i];
if(value===null){if(!hasNull){hasNull=true;
ret.push(value);
}}else if(value===undefined){}else if(value===false){if(!hasFalse){hasFalse=true;
ret.push(value);
}}else if(value===true){if(!hasTrue){hasTrue=true;
ret.push(value);
}}else if(typeof value==="string"){if(!doneStrings[value]){doneStrings[value]=1;
ret.push(value);
}}else if(typeof value==="number"){if(!doneNumbers[value]){doneNumbers[value]=1;
ret.push(value);
}}else{hash=value[key];

if(hash==null){hash=value[key]=count++;
}
if(!doneObjects[hash]){doneObjects[hash]=value;
ret.push(value);
}}}for(var hash in doneObjects){try{delete doneObjects[hash][key];
}catch(ex){try{doneObjects[hash][key]=null;
}catch(ex){throw new Error("Cannot clean-up map entry doneObjects["+hash+"]["+key+"]");
}}}return ret;
}}});
qx.Class.define("qx.lang.Function",{statics:{getCaller:function(args){return args.caller?args.caller.callee:args.callee.caller;
},getName:function(fcn){if(fcn.displayName){return fcn.displayName;
}
if(fcn.$$original||fcn.wrapper||fcn.classname){return fcn.classname+".constructor()";
}
if(fcn.$$mixin){for(var key in fcn.$$mixin.$$members){if(fcn.$$mixin.$$members[key]==fcn){return fcn.$$mixin.name+".prototype."+key+"()";
}}for(var key in fcn.$$mixin){if(fcn.$$mixin[key]==fcn){return fcn.$$mixin.name+"."+key+"()";
}}}
if(fcn.self){var clazz=fcn.self.constructor;

if(clazz){for(var key in clazz.prototype){if(clazz.prototype[key]==fcn){return clazz.classname+".prototype."+key+"()";
}}for(var key in clazz){if(clazz[key]==fcn){return clazz.classname+"."+key+"()";
}}}}var fcnReResult=fcn.toString().match(/function\s*(\w*)\s*\(.*/);

if(fcnReResult&&fcnReResult.length>=1&&fcnReResult[1]){return fcnReResult[1]+"()";
}return 'anonymous()';
},globalEval:function(data){if(window.execScript){return window.execScript(data);
}else{return eval.call(window,data);
}},empty:function(){},returnTrue:function(){return true;
},returnFalse:function(){return false;
},returnNull:function(){return null;
},returnThis:function(){return this;
},returnZero:function(){return 0;
},create:function(func,options){if(!options){return func;
}if(!(options.self||options.args||options.delay!=null||options.periodical!=null||options.attempt)){return func;
}return function(event){var args=qx.lang.Array.fromArguments(arguments);
if(options.args){args=options.args.concat(args);
}
if(options.delay||options.periodical){var returns=qx.event.GlobalError.observeMethod(function(){return func.apply(options.self||this,args);
});

if(options.delay){return window.setTimeout(returns,options.delay);
}
if(options.periodical){return window.setInterval(returns,options.periodical);
}}else if(options.attempt){var ret=false;

try{ret=func.apply(options.self||this,args);
}catch(ex){}return ret;
}else{return func.apply(options.self||this,args);
}};
},bind:function(func,self,varargs){return this.create(func,{self:self,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null});
},curry:function(func,varargs){return this.create(func,{args:arguments.length>1?qx.lang.Array.fromArguments(arguments,1):null});
},listener:function(func,self,varargs){if(arguments.length<3){return function(event){return func.call(self||this,event||window.event);
};
}else{var optargs=qx.lang.Array.fromArguments(arguments,2);
return function(event){var args=[event||window.event];
args.push.apply(args,optargs);
func.apply(self||this,args);
};
}},attempt:function(func,self,varargs){return this.create(func,{self:self,attempt:true,args:arguments.length>2?qx.lang.Array.fromArguments(arguments,2):null})();
},delay:function(func,delay,self,varargs){return this.create(func,{delay:delay,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
},periodical:function(func,interval,self,varargs){return this.create(func,{periodical:interval,self:self,args:arguments.length>3?qx.lang.Array.fromArguments(arguments,3):null})();
}}});
qx.Class.define("qx.lang.Type",{statics:{getClass:qx.Bootstrap.getClass,isString:qx.Bootstrap.isString,isArray:qx.Bootstrap.isArray,isObject:qx.Bootstrap.isObject,isFunction:qx.Bootstrap.isFunction,isRegExp:function(value){return this.getClass(value)=="RegExp";
},isNumber:function(value){return (value!==null&&(this.getClass(value)=="Number"||value instanceof Number));
},isBoolean:function(value){return (value!==null&&(this.getClass(value)=="Boolean"||value instanceof Boolean));
},isDate:function(value){return (value!==null&&(this.getClass(value)=="Date"||value instanceof Date));
},isError:function(value){return (value!==null&&(this.getClass(value)=="Error"||value instanceof Error));
}}});
qx.Class.define("qx.lang.Date",{statics:{now:function(){return +new Date;
}}});
qx.Class.define("qx.event.Registration",{statics:{__managers:{},getManager:function(target){if(target==null){target=window;
}else if(target.nodeType){target=qx.dom.Node.getWindow(target);
}else if(!qx.dom.Node.isWindow(target)){target=window;
}var hash=target.$$hash||qx.core.ObjectRegistry.toHashCode(target);
var manager=this.__managers[hash];

if(!manager){manager=new qx.event.Manager(target,this);
this.__managers[hash]=manager;
}return manager;
},removeManager:function(mgr){var id=mgr.getWindowId();
delete this.__managers[id];
},addListener:function(target,type,listener,self,capture){return this.getManager(target).addListener(target,type,listener,self,capture);
},removeListener:function(target,type,listener,self,capture){return this.getManager(target).removeListener(target,type,listener,self,capture);
},removeListenerById:function(target,id){return this.getManager(target).removeListenerById(target,id);
},removeAllListeners:function(target){return this.getManager(target).removeAllListeners(target);
},deleteAllListeners:function(target){var targetKey=target.$$hash;

if(targetKey){this.getManager(target).deleteAllListeners(targetKey);
}},hasListener:function(target,type,capture){return this.getManager(target).hasListener(target,type,capture);
},serializeListeners:function(target){return this.getManager(target).serializeListeners(target);
},createEvent:function(type,clazz,args){if(clazz==null){clazz=qx.event.type.Event;
}var obj=qx.event.Pool.getInstance().getObject(clazz);
args?obj.init.apply(obj,args):obj.init();
if(type){obj.setType(type);
}return obj;
},dispatchEvent:function(target,event){return this.getManager(target).dispatchEvent(target,event);
},fireEvent:function(target,type,clazz,args){var msg;
var evt=this.createEvent(type,clazz||null,args);
return this.getManager(target).dispatchEvent(target,evt);
},fireNonBubblingEvent:function(target,type,clazz,args){var mgr=this.getManager(target);

if(!mgr.hasListener(target,type,false)){return true;
}var evt=this.createEvent(type,clazz||null,args);
return mgr.dispatchEvent(target,evt);
},PRIORITY_FIRST:-32000,PRIORITY_NORMAL:0,PRIORITY_LAST:32000,__handlers:[],addHandler:function(handler){this.__handlers.push(handler);
this.__handlers.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getHandlers:function(){return this.__handlers;
},__dispatchers:[],addDispatcher:function(dispatcher,priority){this.__dispatchers.push(dispatcher);
this.__dispatchers.sort(function(a,b){return a.PRIORITY-b.PRIORITY;
});
},getDispatchers:function(){return this.__dispatchers;
}}});
qx.Class.define("qx.core.ObjectRegistry",{statics:{inShutDown:false,__registry:{},__nextHash:0,__freeHashes:[],register:function(obj){var registry=this.__registry;

if(!registry){return;
}var hash=obj.$$hash;

if(hash==null){var cache=this.__freeHashes;

if(cache.length>0){hash=cache.pop();
}else{hash=(this.__nextHash++)+"";
}obj.$$hash=hash;
}registry[hash]=obj;
},unregister:function(obj){var hash=obj.$$hash;

if(hash==null){return;
}var registry=this.__registry;

if(registry&&registry[hash]){delete registry[hash];
this.__freeHashes.push(hash);
}try{delete obj.$$hash;
}catch(ex){if(obj.removeAttribute){obj.removeAttribute("$$hash");
}}},toHashCode:function(obj){var hash=obj.$$hash;

if(hash!=null){return hash;
}var cache=this.__freeHashes;

if(cache.length>0){hash=cache.pop();
}else{hash=(this.__nextHash++)+"";
}return obj.$$hash=hash;
},clearHashCode:function(obj){var hash=obj.$$hash;

if(hash!=null){this.__freeHashes.push(hash);
try{delete obj.$$hash;
}catch(ex){if(obj.removeAttribute){obj.removeAttribute("$$hash");
}}}},fromHashCode:function(hash){return this.__registry[hash]||null;
},shutdown:function(){this.inShutDown=true;
var registry=this.__registry;
var hashes=[];

for(var hash in registry){hashes.push(hash);
}hashes.sort(function(a,b){return parseInt(b,10)-parseInt(a,10);
});
var obj,i=0,l=hashes.length;

while(true){try{for(;i<l;i++){hash=hashes[i];
obj=registry[hash];

if(obj&&obj.dispose){obj.dispose();
}}}catch(ex){qx.Bootstrap.error(this,"Could not dispose object "+obj.toString()+": "+ex);

if(i!==l){i++;
continue;
}}break;
}qx.Bootstrap.debug(this,"Disposed "+l+" objects");
delete this.__registry;
},getRegistry:function(){return this.__registry;
}}});
qx.Bootstrap.define("qx.dev.StackTrace",{statics:{getStackTrace:qx.core.Environment.select("engine.name",{"gecko":function(){try{throw new Error();
}catch(ex){var errorTrace=this.getStackTraceFromError(ex);
qx.lang.Array.removeAt(errorTrace,0);
var callerTrace=this.getStackTraceFromCaller(arguments);
var trace=callerTrace.length>errorTrace.length?callerTrace:errorTrace;

for(var i=0;i<Math.min(callerTrace.length,errorTrace.length);i++){var callerCall=callerTrace[i];

if(callerCall.indexOf("anonymous")>=0){continue;
}var callerArr=callerCall.split(":");

if(callerArr.length!=2){continue;
}var callerClassName=callerArr[0];
var methodName=callerArr[1];
var errorCall=errorTrace[i];
var errorArr=errorCall.split(":");
var errorClassName=errorArr[0];
var lineNumber=errorArr[1];

if(qx.Class.getByName(errorClassName)){var className=errorClassName;
}else{className=callerClassName;
}var line=className+":";

if(methodName){line+=methodName+":";
}line+=lineNumber;
trace[i]=line;
}return trace;
}},"mshtml|webkit":function(){return this.getStackTraceFromCaller(arguments);
},"opera":function(){var foo;

try{foo.bar();
}catch(ex){var trace=this.getStackTraceFromError(ex);
qx.lang.Array.removeAt(trace,0);
return trace;
}return [];
}}),getStackTraceFromCaller:qx.core.Environment.select("engine.name",{"opera":function(args){return [];
},"default":function(args){var trace=[];
var fcn=qx.lang.Function.getCaller(args);
var knownFunction={};

while(fcn){var fcnName=qx.lang.Function.getName(fcn);
trace.push(fcnName);

try{fcn=fcn.caller;
}catch(ex){break;
}
if(!fcn){break;
}var hash=qx.core.ObjectRegistry.toHashCode(fcn);

if(knownFunction[hash]){trace.push("...");
break;
}knownFunction[hash]=fcn;
}return trace;
}}),getStackTraceFromError:qx.core.Environment.select("engine.name",{"gecko":function(error){if(!error.stack){return [];
}var lineRe=/@(.+):(\d+)$/gm;
var hit;
var trace=[];

while((hit=lineRe.exec(error.stack))!=null){var url=hit[1];
var lineNumber=hit[2];
var className=this.__fileNameToClassName(url);
trace.push(className+":"+lineNumber);
}return trace;
},"webkit":function(error){if(error.stack){var lineRe=/at (.*)/gm;
var fileReParens=/\((.*?)(:[^\/].*)\)/;
var fileRe=/(.*?)(:[^\/].*)/;
var hit;
var trace=[];

while((hit=lineRe.exec(error.stack))!=null){var fileMatch=fileReParens.exec(hit[1]);

if(!fileMatch){fileMatch=fileRe.exec(hit[1]);
}
if(fileMatch){var className=this.__fileNameToClassName(fileMatch[1]);
trace.push(className+fileMatch[2]);
}else{trace.push(hit[1]);
}}return trace;
}else if(error.sourceURL&&error.line){return [this.__fileNameToClassName(error.sourceURL)+":"+error.line];
}else{return [];
}},"opera":function(error){if(error.stacktrace){var stacktrace=error.stacktrace;

if(stacktrace.indexOf("Error created at")>=0){stacktrace=stacktrace.split("Error created at")[0];
}if(stacktrace.indexOf("of linked script")>=0){var lineRe=/Line\ (\d+?)\ of\ linked\ script\ (.*?)$/gm;
var hit;
var trace=[];

while((hit=lineRe.exec(stacktrace))!=null){var lineNumber=hit[1];
var url=hit[2];
var className=this.__fileNameToClassName(url);
trace.push(className+":"+lineNumber);
}}else{var lineRe=/line\ (\d+?),\ column\ (\d+?)\ in\ (?:.*?)\ in\ (.*?):[^\/]/gm;
var hit;
var trace=[];

while((hit=lineRe.exec(stacktrace))!=null){var lineNumber=hit[1];
var columnNumber=hit[2];
var url=hit[3];
var className=this.__fileNameToClassName(url);
trace.push(className+":"+lineNumber+":"+columnNumber);
}}return trace;
}else if(error.message.indexOf("Backtrace:")>=0){var trace=[];
var traceString=qx.lang.String.trim(error.message.split("Backtrace:")[1]);
var lines=traceString.split("\n");

for(var i=0;i<lines.length;i++){var reResult=lines[i].match(/\s*Line ([0-9]+) of.* (\S.*)/);

if(reResult&&reResult.length>=2){var lineNumber=reResult[1];
var fileName=this.__fileNameToClassName(reResult[2]);
trace.push(fileName+":"+lineNumber);
}}return trace;
}else{return [];
}},"default":function(){return [];
}}),__fileNameToClassName:function(fileName){var scriptDir="/source/class/";
var jsPos=fileName.indexOf(scriptDir);
var paramPos=fileName.indexOf("?");

if(paramPos>=0){fileName=fileName.substring(0,paramPos);
}var className=(jsPos==-1)?fileName:fileName.substring(jsPos+scriptDir.length).replace(/\//g,".").replace(/\.js$/,"");
return className;
}}});
qx.Class.define("qx.lang.String",{statics:{camelCase:function(str){return str.replace(/\-([a-z])/g,function(match,chr){return chr.toUpperCase();
});
},hyphenate:function(str){return str.replace(/[A-Z]/g,function(match){return ('-'+match.charAt(0).toLowerCase());
});
},capitalize:function(str){return str.replace(/\b[a-z]/g,function(match){return match.toUpperCase();
});
},clean:function(str){return this.trim(str.replace(/\s+/g,' '));
},trimLeft:function(str){return str.replace(/^\s+/,"");
},trimRight:function(str){return str.replace(/\s+$/,"");
},trim:function(str){return str.replace(/^\s+|\s+$/g,"");
},startsWith:function(fullstr,substr){return fullstr.indexOf(substr)===0;
},endsWith:function(fullstr,substr){return fullstr.substring(fullstr.length-substr.length,fullstr.length)===substr;
},repeat:function(str,times){return str.length>0?new Array(times+1).join(str):"";
},pad:function(str,length,ch){var padLength=length-str.length;

if(padLength>0){if(typeof ch==="undefined"){ch="0";
}return this.repeat(ch,padLength)+str;
}else{return str;
}},firstUp:qx.Bootstrap.firstUp,firstLow:qx.Bootstrap.firstLow,contains:function(str,substring){return str.indexOf(substring)!=-1;
},format:function(pattern,args){var str=pattern;

for(var i=0;i<args.length;i++){str=str.replace(new RegExp("%"+(i+1),"g"),args[i]+"");
}return str;
},escapeRegexpChars:function(str){return str.replace(/([.*+?^${}()|[\]\/\\])/g,'\\$1');
},toArray:function(str){return str.split(/\B|\b/g);
},stripTags:function(str){return str.replace(/<\/?[^>]+>/gi,"");
},stripScripts:function(str,exec){var scripts="";
var text=str.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(){scripts+=arguments[1]+'\n';
return "";
});

if(exec===true){qx.lang.Function.globalEval(scripts);
}return text;
}}});
qx.Class.define("qx.lang.RingBuffer",{extend:Object,construct:function(maxEntries){this.setMaxEntries(maxEntries||50);
},members:{__nextIndexToStoreTo:0,__entriesStored:0,__isMarkActive:false,__entriesStoredSinceMark:0,__entries:null,__maxEntries:null,setMaxEntries:function(maxEntries){this.__maxEntries=maxEntries;
this.clear();
},getMaxEntries:function(){return this.__maxEntries;
},addEntry:function(entry){this.__entries[this.__nextIndexToStoreTo]=entry;
this.__nextIndexToStoreTo=this.__addToIndex(this.__nextIndexToStoreTo,1);
var max=this.getMaxEntries();

if(this.__entriesStored<max){this.__entriesStored++;
}if(this.__isMarkActive&&(this.__entriesStoredSinceMark<max)){this.__entriesStoredSinceMark++;
}},mark:function(){this.__isMarkActive=true;
this.__entriesStoredSinceMark=0;
},clearMark:function(){this.__isMarkActive=false;
},getAllEntries:function(){return this.getEntries(this.getMaxEntries(),false);
},getEntries:function(count,startingFromMark){if(count>this.__entriesStored){count=this.__entriesStored;
}if(startingFromMark&&this.__isMarkActive&&(count>this.__entriesStoredSinceMark)){count=this.__entriesStoredSinceMark;
}
if(count>0){var indexOfYoungestElementInHistory=this.__addToIndex(this.__nextIndexToStoreTo,-1);
var startIndex=this.__addToIndex(indexOfYoungestElementInHistory,-count+1);
var result;

if(startIndex<=indexOfYoungestElementInHistory){result=this.__entries.slice(startIndex,indexOfYoungestElementInHistory+1);
}else{result=this.__entries.slice(startIndex,this.__entriesStored).concat(this.__entries.slice(0,indexOfYoungestElementInHistory+1));
}}else{result=[];
}return result;
},clear:function(){this.__entries=new Array(this.getMaxEntries());
this.__entriesStored=0;
this.__entriesStoredSinceMark=0;
this.__nextIndexToStoreTo=0;
},__addToIndex:function(idx,addMe){var max=this.getMaxEntries();
var result=(idx+addMe)%max;
if(result<0){result+=max;
}return result;
}}});
qx.Class.define("qx.log.appender.RingBuffer",{extend:qx.lang.RingBuffer,construct:function(maxMessages){this.setMaxMessages(maxMessages||50);
},members:{setMaxMessages:function(maxMessages){this.setMaxEntries(maxMessages);
},getMaxMessages:function(){return this.getMaxEntries();
},process:function(entry){this.addEntry(entry);
},getAllLogEvents:function(){return this.getAllEntries();
},retrieveLogEvents:function(count,startingFromMark){return this.getEntries(count,startingFromMark);
},clearHistory:function(){this.clear();
}}});
qx.Class.define("qx.log.Logger",{statics:{__level:"debug",setLevel:function(value){this.__level=value;
},getLevel:function(){return this.__level;
},setTreshold:function(value){this.__buffer.setMaxMessages(value);
},getTreshold:function(){return this.__buffer.getMaxMessages();
},__appender:{},__id:0,register:function(appender){if(appender.$$id){return;
}var id=this.__id++;
this.__appender[id]=appender;
appender.$$id=id;
var levels=this.__levels;
var entries=this.__buffer.getAllLogEvents();

for(var i=0,l=entries.length;i<l;i++){if(levels[entries[i].level]>=levels[this.__level]){appender.process(entries[i]);
}}},unregister:function(appender){var id=appender.$$id;

if(id==null){return;
}delete this.__appender[id];
delete appender.$$id;
},debug:function(object,message){qx.log.Logger.__log("debug",arguments);
},info:function(object,message){qx.log.Logger.__log("info",arguments);
},warn:function(object,message){qx.log.Logger.__log("warn",arguments);
},error:function(object,message){qx.log.Logger.__log("error",arguments);
},trace:function(object){qx.log.Logger.__log("info",[object,qx.dev.StackTrace.getStackTrace().join("\n")]);
},deprecatedMethodWarning:function(fcn,msg){var functionName;
},deprecatedClassWarning:function(clazz,msg){var className;
},deprecatedEventWarning:function(clazz,event,msg){var className;
},deprecatedMixinWarning:function(clazz,msg){var mixinName;
},deprecatedConstantWarning:function(clazz,constant,msg){var self,constantValue;
},deprecateMethodOverriding:function(object,baseclass,methodName,msg){var clazz;
},clear:function(){this.__buffer.clearHistory();
},__buffer:new qx.log.appender.RingBuffer(50),__levels:{debug:0,info:1,warn:2,error:3},__log:function(level,args){var levels=this.__levels;

if(levels[level]<levels[this.__level]){return;
}var object=args.length<2?null:args[0];
var start=object?1:0;
var items=[];

for(var i=start,l=args.length;i<l;i++){items.push(this.__serialize(args[i],true));
}var time=new Date;
var entry={time:time,offset:time-qx.Bootstrap.LOADSTART,level:level,items:items,win:window};
if(object){if(object.$$hash!==undefined){entry.object=object.$$hash;
}else if(object.$$type){entry.clazz=object;
}}this.__buffer.process(entry);
var appender=this.__appender;

for(var id in appender){appender[id].process(entry);
}},__detect:function(value){if(value===undefined){return "undefined";
}else if(value===null){return "null";
}
if(value.$$type){return "class";
}var type=typeof value;

if(type==="function"||type=="string"||type==="number"||type==="boolean"){return type;
}else if(type==="object"){if(value.nodeType){return "node";
}else if(value.classname){return "instance";
}else if(value instanceof Array){return "array";
}else if(value instanceof Error){return "error";
}else if(value instanceof Date){return "date";
}else{return "map";
}}
if(value.toString){return "stringify";
}return "unknown";
},__serialize:function(value,deep){var type=this.__detect(value);
var text="unknown";
var trace=[];

switch(type){case "null":case "undefined":text=type;
break;
case "string":case "number":case "boolean":case "date":text=value;
break;
case "node":if(value.nodeType===9){text="document";
}else if(value.nodeType===3){text="text["+value.nodeValue+"]";
}else if(value.nodeType===1){text=value.nodeName.toLowerCase();

if(value.id){text+="#"+value.id;
}}else{text="node";
}break;
case "function":text=qx.lang.Function.getName(value)||type;
break;
case "instance":text=value.basename+"["+value.$$hash+"]";
break;
case "class":case "stringify":text=value.toString();
break;
case "error":trace=qx.dev.StackTrace.getStackTraceFromError(value);
text=value.toString();
break;
case "array":if(deep){text=[];

for(var i=0,l=value.length;i<l;i++){if(text.length>20){text.push("...(+"+(l-i)+")");
break;
}text.push(this.__serialize(value[i],false));
}}else{text="[...("+value.length+")]";
}break;
case "map":if(deep){var temp;
var sorted=[];

for(var key in value){sorted.push(key);
}sorted.sort();
text=[];

for(var i=0,l=sorted.length;i<l;i++){if(text.length>20){text.push("...(+"+(l-i)+")");
break;
}key=sorted[i];
temp=this.__serialize(value[key],false);
temp.key=key;
text.push(temp);
}}else{var number=0;

for(var key in value){number++;
}text="{...("+number+")}";
}break;
}return {type:type,text:text,trace:trace};
}},defer:function(statics){var logs=qx.Bootstrap.$$logs;

for(var i=0;i<logs.length;i++){statics.__log(logs[i][0],logs[i][1]);
}qx.Bootstrap.debug=statics.debug;
qx.Bootstrap.info=statics.info;
qx.Bootstrap.warn=statics.warn;
qx.Bootstrap.error=statics.error;
qx.Bootstrap.trace=statics.trace;
}});
qx.Class.define("qx.log.appender.Util",{statics:{toHtml:function(entry){var output=[];
var item,msg,sub,list;
output.push("<span class='offset'>",this.formatOffset(entry.offset,6),"</span> ");

if(entry.object){var obj=entry.win.qx.core.ObjectRegistry.fromHashCode(entry.object);

if(obj){output.push("<span class='object' title='Object instance with hash code: "+obj.$$hash+"'>",obj.classname,"[",obj.$$hash,"]</span>: ");
}}else if(entry.clazz){output.push("<span class='object'>"+entry.clazz.classname,"</span>: ");
}var items=entry.items;

for(var i=0,il=items.length;i<il;i++){item=items[i];
msg=item.text;

if(msg instanceof Array){var list=[];

for(var j=0,jl=msg.length;j<jl;j++){sub=msg[j];

if(typeof sub==="string"){list.push("<span>"+this.escapeHTML(sub)+"</span>");
}else if(sub.key){list.push("<span class='type-key'>"+sub.key+"</span>:<span class='type-"+sub.type+"'>"+this.escapeHTML(sub.text)+"</span>");
}else{list.push("<span class='type-"+sub.type+"'>"+this.escapeHTML(sub.text)+"</span>");
}}output.push("<span class='type-"+item.type+"'>");

if(item.type==="map"){output.push("{",list.join(", "),"}");
}else{output.push("[",list.join(", "),"]");
}output.push("</span>");
}else{output.push("<span class='type-"+item.type+"'>"+this.escapeHTML(msg)+"</span> ");
}}var wrapper=document.createElement("DIV");
wrapper.innerHTML=output.join("");
wrapper.className="level-"+entry.level;
return wrapper;
},formatOffset:function(offset,length){var str=offset.toString();
var diff=(length||6)-str.length;
var pad="";

for(var i=0;i<diff;i++){pad+="0";
}return pad+str;
},FORMAT_STACK:null,escapeHTML:function(value){return String(value).replace(/[<>&"']/g,this.__escapeHTMLReplace);
},__escapeHTMLReplace:function(ch){var map={"<":"&lt;",">":"&gt;","&":"&amp;","'":"&#39;",'"':"&quot;"};
return map[ch]||"?";
},toText:function(entry){return this.toTextArray(entry).join(" ");
},toTextArray:function(entry){var output=[];
output.push(this.formatOffset(entry.offset,6));

if(entry.object){var obj=entry.win.qx.core.ObjectRegistry.fromHashCode(entry.object);

if(obj){output.push(obj.classname+"["+obj.$$hash+"]:");
}}else if(entry.clazz){output.push(entry.clazz.classname+":");
}var items=entry.items;
var item,msg;

for(var i=0,il=items.length;i<il;i++){item=items[i];
msg=item.text;

if(item.trace&&item.trace.length>0){if(typeof (this.FORMAT_STACK)=="function"){msg+="\n"+this.FORMAT_STACK(item.trace);
}else{msg+="\n"+item.trace;
}}
if(msg instanceof Array){var list=[];

for(var j=0,jl=msg.length;j<jl;j++){list.push(msg[j].text);
}
if(item.type==="map"){output.push("{",list.join(", "),"}");
}else{output.push("[",list.join(", "),"]");
}}else{output.push(msg);
}}return output;
}}});
qx.Class.define("qx.type.BaseError",{extend:Error,construct:function(comment,failMessage){Error.call(this,failMessage);
this.__comment=comment||"";
this.message=failMessage||qx.type.BaseError.DEFAULTMESSAGE;
},statics:{DEFAULTMESSAGE:"error"},members:{__comment:null,message:null,getComment:function(){return this.__comment;
},toString:function(){return this.__comment+(this.message?": "+this.message:"");
}}});
qx.Bootstrap.define("qx.event.GlobalError",{statics:{setErrorHandler:function(callback,context){var wrappedHandler,self;
this.__callback=callback||null;
this.__context=context||window;
},__onErrorWindow:function(msg,uri,lineNumber){if(this.__callback){this.handleError(new qx.core.WindowError(msg,uri,lineNumber));
return true;
}},observeMethod:function(method){var self;
{return method;
};
},handleError:function(ex){if(this.__callback){this.__callback.call(this.__context,ex);
}}},defer:function(statics){qx.core.Environment.add("qx.globalErrorHandling",true);
statics.setErrorHandler(null,null);
qx.core.Setting.defineDeprecated("qx.globalErrorHandling","on");
}});
qx.Bootstrap.define("qx.core.WindowError",{extend:Error,construct:function(failMessage,uri,lineNumber){Error.call(this,failMessage);
this.__failMessage=failMessage;
this.__uri=uri||"";
this.__lineNumber=lineNumber===undefined?-1:lineNumber;
},members:{__failMessage:null,__uri:null,__lineNumber:null,toString:function(){return this.__failMessage;
},getUri:function(){return this.__uri;
},getLineNumber:function(){return this.__lineNumber;
}}});
qx.Bootstrap.define("qx.core.GlobalError",{extend:Error,construct:function(exc,args){this.__failMessage="GlobalError: "+(exc&&exc.message?exc.message:exc);
Error.call(this,this.__failMessage);
this.__arguments=args;
this.__exc=exc;
},members:{__exc:null,__arguments:null,__failMessage:null,toString:function(){return this.__failMessage;
},getArguments:function(){return this.__arguments;
},getSourceException:function(){return this.__exc;
}},destruct:function(){this.__exc=null;
this.__arguments=null;
this.__failMessage=null;
}});
qx.Class.define("qx.core.AssertionError",{extend:qx.type.BaseError,construct:function(comment,failMessage){qx.type.BaseError.call(this,comment,failMessage);
this.__trace=qx.dev.StackTrace.getStackTrace();
},members:{__trace:null,getStackTrace:function(){return this.__trace;
}}});
qx.Class.define("qx.core.ValidationError",{extend:qx.type.BaseError});
qx.Mixin.define("qx.data.MBinding",{members:{bind:function(sourcePropertyChain,targetObject,targetProperty,options){return qx.data.SingleValueBinding.bind(this,sourcePropertyChain,targetObject,targetProperty,options);
},removeBinding:function(id){qx.data.SingleValueBinding.removeBindingFromObject(this,id);
},removeAllBindings:function(){qx.data.SingleValueBinding.removeAllBindingsForObject(this);
},getBindings:function(){return qx.data.SingleValueBinding.getAllBindingsForObject(this);
}}});
qx.Class.define("qx.core.Object",{extend:Object,include:[qx.data.MBinding],construct:function(){qx.core.ObjectRegistry.register(this);
},statics:{$$type:"Object"},members:{toHashCode:function(){return this.$$hash;
},toString:function(){return this.classname+"["+this.$$hash+"]";
},base:function(args,varags){if(arguments.length===1){return args.callee.base.call(this);
}else{return args.callee.base.apply(this,Array.prototype.slice.call(arguments,1));
}},self:function(args){return args.callee.self;
},clone:function(){var clazz=this.constructor;
var clone=new clazz;
var props=qx.Class.getProperties(clazz);
var user=qx.core.Property.$$store.user;
var setter=qx.core.Property.$$method.set;
var name;
for(var i=0,l=props.length;i<l;i++){name=props[i];

if(this.hasOwnProperty(user[name])){clone[setter[name]](this[user[name]]);
}}return clone;
},set:function(data,value){var setter=qx.core.Property.$$method.set;

if(qx.Bootstrap.isString(data)){if(!this[setter[data]]){if(this["set"+qx.Bootstrap.firstUp(data)]!=undefined){this["set"+qx.Bootstrap.firstUp(data)](value);
return this;
}}return this[setter[data]](value);
}else{for(var prop in data){if(!this[setter[prop]]){if(this["set"+qx.Bootstrap.firstUp(prop)]!=undefined){this["set"+qx.Bootstrap.firstUp(prop)](data[prop]);
continue;
}}this[setter[prop]](data[prop]);
}return this;
}},get:function(prop){var getter=qx.core.Property.$$method.get;

if(!this[getter[prop]]){if(this["get"+qx.Bootstrap.firstUp(prop)]!=undefined){return this["get"+qx.Bootstrap.firstUp(prop)]();
}}return this[getter[prop]]();
},reset:function(prop){var resetter=qx.core.Property.$$method.reset;

if(!this[resetter[prop]]){if(this["reset"+qx.Bootstrap.firstUp(prop)]!=undefined){this["reset"+qx.Bootstrap.firstUp(prop)]();
return;
}}this[resetter[prop]]();
},__Registration:qx.event.Registration,addListener:function(type,listener,self,capture){if(!this.$$disposed){return this.__Registration.addListener(this,type,listener,self,capture);
}return null;
},addListenerOnce:function(type,listener,self,capture){var callback=function(e){this.removeListener(type,callback,this,capture);
listener.call(self||this,e);
};
return this.addListener(type,callback,this,capture);
},removeListener:function(type,listener,self,capture){if(!this.$$disposed){return this.__Registration.removeListener(this,type,listener,self,capture);
}return false;
},removeListenerById:function(id){if(!this.$$disposed){return this.__Registration.removeListenerById(this,id);
}return false;
},hasListener:function(type,capture){return this.__Registration.hasListener(this,type,capture);
},dispatchEvent:function(evt){if(!this.$$disposed){return this.__Registration.dispatchEvent(this,evt);
}return true;
},fireEvent:function(type,clazz,args){if(!this.$$disposed){return this.__Registration.fireEvent(this,type,clazz,args);
}return true;
},fireNonBubblingEvent:function(type,clazz,args){if(!this.$$disposed){return this.__Registration.fireNonBubblingEvent(this,type,clazz,args);
}return true;
},fireDataEvent:function(type,data,oldData,cancelable){if(!this.$$disposed){if(oldData===undefined){oldData=null;
}return this.__Registration.fireNonBubblingEvent(this,type,qx.event.type.Data,[data,oldData,!!cancelable]);
}return true;
},__userData:null,setUserData:function(key,value){if(!this.__userData){this.__userData={};
}this.__userData[key]=value;
},getUserData:function(key){if(!this.__userData){return null;
}var data=this.__userData[key];
return data===undefined?null:data;
},__Logger:qx.log.Logger,debug:function(varargs){this.__logMessage("debug",arguments);
},info:function(varargs){this.__logMessage("info",arguments);
},warn:function(varargs){this.__logMessage("warn",arguments);
},error:function(varargs){this.__logMessage("error",arguments);
},trace:function(){this.__Logger.trace(this);
},__logMessage:function(level,varargs){var argumentsArray=qx.lang.Array.fromArguments(varargs);
argumentsArray.unshift(this);
this.__Logger[level].apply(this.__Logger,argumentsArray);
},isDisposed:function(){return this.$$disposed||false;
},dispose:function(){var key,value,ff2,ie6;
if(this.$$disposed){return;
}this.$$disposed=true;
this.$$instance=null;
this.$$allowconstruct=null;
var clazz=this.constructor;
var mixins;

while(clazz.superclass){if(clazz.$$destructor){clazz.$$destructor.call(this);
}if(clazz.$$includes){mixins=clazz.$$flatIncludes;

for(var i=0,l=mixins.length;i<l;i++){if(mixins[i].$$destructor){mixins[i].$$destructor.call(this);
}}}clazz=clazz.superclass;
}if(this.__removePropertyReferences){this.__removePropertyReferences();
}},__removePropertyReferences:null,__removePropertyReferencesOld:function(){var properties=qx.Class.getProperties(this.constructor);

for(var i=0,l=properties.length;i<l;i++){delete this["$$user_"+properties[i]];
}},_disposeObjects:function(varargs){qx.util.DisposeUtil.disposeObjects(this,arguments);
},_disposeSingletonObjects:function(varargs){qx.util.DisposeUtil.disposeObjects(this,arguments,true);
},_disposeArray:function(field){qx.util.DisposeUtil.disposeArray(this,field);
},_disposeMap:function(field){qx.util.DisposeUtil.disposeMap(this,field);
}},environment:{"qx.disposerDebugLevel":0},defer:function(statics,members){var ie6=navigator.userAgent.indexOf("MSIE 6.0")!=-1;
var ff2=navigator.userAgent.indexOf("rv:1.8.1")!=-1;
if(ie6||ff2){members.__removePropertyReferences=members.__removePropertyReferencesOld;
}},destruct:function(){if(!qx.core.ObjectRegistry.inShutDown){qx.event.Registration.removeAllListeners(this);
}else{qx.event.Registration.deleteAllListeners(this);
}qx.core.ObjectRegistry.unregister(this);
this.__userData=null;
var clazz=this.constructor;
var properties;
var store=qx.core.Property.$$store;
var storeUser=store.user;
var storeTheme=store.theme;
var storeInherit=store.inherit;
var storeUseinit=store.useinit;
var storeInit=store.init;

while(clazz){properties=clazz.$$properties;

if(properties){for(var name in properties){if(properties[name].dereference){this[storeUser[name]]=this[storeTheme[name]]=this[storeInherit[name]]=this[storeUseinit[name]]=this[storeInit[name]]=undefined;
}}}clazz=clazz.superclass;
}}});
qx.Interface.define("qx.event.IEventDispatcher",{members:{canDispatchEvent:function(target,event,type){this.assertInstance(event,qx.event.type.Event);
this.assertString(type);
},dispatchEvent:function(target,event,type){this.assertInstance(event,qx.event.type.Event);
this.assertString(type);
}}});
qx.Class.define("qx.event.dispatch.Direct",{extend:qx.core.Object,implement:qx.event.IEventDispatcher,construct:function(manager){this._manager=manager;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST},members:{canDispatchEvent:function(target,event,type){return !event.getBubbles();
},dispatchEvent:function(target,event,type){var expectedEventClassName,expectedEventClass;
event.setEventPhase(qx.event.type.Event.AT_TARGET);
var listeners=this._manager.getListeners(target,type,false);

if(listeners){for(var i=0,l=listeners.length;i<l;i++){var context=listeners[i].context||target;
listeners[i].handler.call(context,event);
}}}},defer:function(statics){qx.event.Registration.addDispatcher(statics);
}});
qx.Class.define("qx.event.dispatch.AbstractBubbling",{extend:qx.core.Object,implement:qx.event.IEventDispatcher,type:"abstract",construct:function(manager){this._manager=manager;
},members:{_getParent:function(target){throw new Error("Missing implementation");
},canDispatchEvent:function(target,event,type){return event.getBubbles();
},dispatchEvent:function(target,event,type){var parent=target;
var manager=this._manager;
var captureListeners,bubbleListeners;
var localList;
var listener,context;
var currentTarget;
var targetList=[];
captureListeners=manager.getListeners(target,type,true);
bubbleListeners=manager.getListeners(target,type,false);

if(captureListeners){targetList.push(captureListeners);
}
if(bubbleListeners){targetList.push(bubbleListeners);
}var parent=this._getParent(target);
var bubbleList=[];
var bubbleTargets=[];
var captureList=[];
var captureTargets=[];
while(parent!=null){captureListeners=manager.getListeners(parent,type,true);

if(captureListeners){captureList.push(captureListeners);
captureTargets.push(parent);
}bubbleListeners=manager.getListeners(parent,type,false);

if(bubbleListeners){bubbleList.push(bubbleListeners);
bubbleTargets.push(parent);
}parent=this._getParent(parent);
}event.setEventPhase(qx.event.type.Event.CAPTURING_PHASE);

for(var i=captureList.length-1;i>=0;i--){currentTarget=captureTargets[i];
event.setCurrentTarget(currentTarget);
localList=captureList[i];

for(var j=0,jl=localList.length;j<jl;j++){listener=localList[j];
context=listener.context||currentTarget;
listener.handler.call(context,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.AT_TARGET);
event.setCurrentTarget(target);

for(var i=0,il=targetList.length;i<il;i++){localList=targetList[i];

for(var j=0,jl=localList.length;j<jl;j++){listener=localList[j];
context=listener.context||target;
listener.handler.call(context,event);
}
if(event.getPropagationStopped()){return;
}}event.setEventPhase(qx.event.type.Event.BUBBLING_PHASE);

for(var i=0,il=bubbleList.length;i<il;i++){currentTarget=bubbleTargets[i];
event.setCurrentTarget(currentTarget);
localList=bubbleList[i];

for(var j=0,jl=localList.length;j<jl;j++){listener=localList[j];
context=listener.context||currentTarget;
listener.handler.call(context,event);
}
if(event.getPropagationStopped()){return;
}}}}});
qx.Class.define("qx.event.dispatch.DomBubbling",{extend:qx.event.dispatch.AbstractBubbling,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL},members:{_getParent:function(target){return target.parentNode;
},canDispatchEvent:function(target,event,type){return target.nodeType!==undefined&&event.getBubbles();
}},defer:function(statics){qx.event.Registration.addDispatcher(statics);
}});
qx.Interface.define("qx.event.IEventHandler",{statics:{TARGET_DOMNODE:1,TARGET_WINDOW:2,TARGET_OBJECT:4,TARGET_DOCUMENT:8},members:{canHandleEvent:function(target,type){},registerEvent:function(target,type,capture){},unregisterEvent:function(target,type,capture){}}});
qx.Class.define("qx.event.handler.UserAction",{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(manager){this.base(arguments);
this.__manager=manager;
this.__window=manager.getWindow();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{useraction:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__manager:null,__window:null,canHandleEvent:function(target,type){},registerEvent:function(target,type,capture){},unregisterEvent:function(target,type,capture){}},destruct:function(){this.__manager=this.__window=null;
},defer:function(statics){qx.event.Registration.addHandler(statics);
}});
qx.Class.define("qx.event.handler.Mouse",{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(manager){this.base(arguments);
this.__manager=manager;
this.__window=manager.getWindow();
this.__root=this.__window.document;
this._initButtonObserver();
this._initMoveObserver();
this._initWheelObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{mousemove:1,mouseover:1,mouseout:1,mousedown:1,mouseup:1,click:1,dblclick:1,contextmenu:1,mousewheel:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE+qx.event.IEventHandler.TARGET_DOCUMENT+qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{__onButtonEventWrapper:null,__onMoveEventWrapper:null,__onWheelEventWrapper:null,__lastEventType:null,__lastMouseDownTarget:null,__manager:null,__window:null,__root:null,canHandleEvent:function(target,type){},registerEvent:qx.core.Environment.get("os.name")===
"ios"?
function(target,type,capture){target["on"+type]=qx.lang.Function.returnNull;
}:qx.lang.Function.returnNull,unregisterEvent:qx.core.Environment.get("os.name")===
"ios"?
function(target,type,capture){target["on"+type]=undefined;
}:qx.lang.Function.returnNull,__fireEvent:function(domEvent,type,target){if(!target){target=qx.bom.Event.getTarget(domEvent);
}if(target&&target.nodeType){qx.event.Registration.fireEvent(target,type||domEvent.type,type=="mousewheel"?qx.event.type.MouseWheel:qx.event.type.Mouse,[domEvent,target,null,true,true]);
}qx.event.Registration.fireEvent(this.__window,"useraction",qx.event.type.Data,[type||domEvent.type]);
},__getMouseWheelTarget:function(){var targets=[this.__window,this.__root,this.__root.body];
var target=this.__window;
var type="DOMMouseScroll";

for(var i=0;i<targets.length;i++){if(qx.bom.Event.supportsEvent(targets[i],"mousewheel")){type="mousewheel";
target=targets[i];
break;
}}return {type:type,target:target};
},_initButtonObserver:function(){this.__onButtonEventWrapper=qx.lang.Function.listener(this._onButtonEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__root,"mousedown",this.__onButtonEventWrapper);
Event.addNativeListener(this.__root,"mouseup",this.__onButtonEventWrapper);
Event.addNativeListener(this.__root,"click",this.__onButtonEventWrapper);
Event.addNativeListener(this.__root,"dblclick",this.__onButtonEventWrapper);
Event.addNativeListener(this.__root,"contextmenu",this.__onButtonEventWrapper);
},_initMoveObserver:function(){this.__onMoveEventWrapper=qx.lang.Function.listener(this._onMoveEvent,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__root,"mousemove",this.__onMoveEventWrapper);
Event.addNativeListener(this.__root,"mouseover",this.__onMoveEventWrapper);
Event.addNativeListener(this.__root,"mouseout",this.__onMoveEventWrapper);
},_initWheelObserver:function(){this.__onWheelEventWrapper=qx.lang.Function.listener(this._onWheelEvent,this);
var data=this.__getMouseWheelTarget();
qx.bom.Event.addNativeListener(data.target,data.type,this.__onWheelEventWrapper);
},_stopButtonObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__root,"mousedown",this.__onButtonEventWrapper);
Event.removeNativeListener(this.__root,"mouseup",this.__onButtonEventWrapper);
Event.removeNativeListener(this.__root,"click",this.__onButtonEventWrapper);
Event.removeNativeListener(this.__root,"dblclick",this.__onButtonEventWrapper);
Event.removeNativeListener(this.__root,"contextmenu",this.__onButtonEventWrapper);
},_stopMoveObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__root,"mousemove",this.__onMoveEventWrapper);
Event.removeNativeListener(this.__root,"mouseover",this.__onMoveEventWrapper);
Event.removeNativeListener(this.__root,"mouseout",this.__onMoveEventWrapper);
},_stopWheelObserver:function(){var data=this.__getMouseWheelTarget();
qx.bom.Event.removeNativeListener(data.target,data.type,this.__onWheelEventWrapper);
},_onMoveEvent:qx.event.GlobalError.observeMethod(function(domEvent){this.__fireEvent(domEvent);
}),_onButtonEvent:qx.event.GlobalError.observeMethod(function(domEvent){var type=domEvent.type;
var target=qx.bom.Event.getTarget(domEvent);
if(qx.core.Environment.get("engine.name")=="gecko"||qx.core.Environment.get("engine.name")=="webkit"){if(target&&target.nodeType==3){target=target.parentNode;
}}
if(this.__rightClickFixPre){this.__rightClickFixPre(domEvent,type,target);
}
if(this.__doubleClickFixPre){this.__doubleClickFixPre(domEvent,type,target);
}this.__fireEvent(domEvent,type,target);

if(this.__rightClickFixPost){this.__rightClickFixPost(domEvent,type,target);
}
if(this.__differentTargetClickFixPost){this.__differentTargetClickFixPost(domEvent,type,target);
}this.__lastEventType=type;
}),_onWheelEvent:qx.event.GlobalError.observeMethod(function(domEvent){this.__fireEvent(domEvent,"mousewheel");
}),__rightClickFixPre:qx.core.Environment.select("engine.name",{"webkit":function(domEvent,type,target){if(parseFloat(qx.core.Environment.get("engine.version"))<530){if(type=="contextmenu"){this.__fireEvent(domEvent,"mouseup",target);
}}},"default":null}),__rightClickFixPost:qx.core.Environment.select("engine.name",{"opera":function(domEvent,type,target){if(type=="mouseup"&&domEvent.button==2){this.__fireEvent(domEvent,"contextmenu",target);
}},"default":null}),__doubleClickFixPre:qx.core.Environment.select("engine.name",{"mshtml":function(domEvent,type,target){if(domEvent.target!==undefined){return;
}
if(type=="mouseup"&&this.__lastEventType=="click"){this.__fireEvent(domEvent,"mousedown",target);
}else if(type=="dblclick"){this.__fireEvent(domEvent,"click",target);
}},"default":null}),__differentTargetClickFixPost:qx.core.Environment.select("engine.name",{"mshtml":null,"default":function(domEvent,type,target){switch(type){case "mousedown":this.__lastMouseDownTarget=target;
break;
case "mouseup":if(target!==this.__lastMouseDownTarget){var commonParent=qx.dom.Hierarchy.getCommonParent(target,this.__lastMouseDownTarget);
this.__fireEvent(domEvent,"click",commonParent);
}}}})},destruct:function(){this._stopButtonObserver();
this._stopMoveObserver();
this._stopWheelObserver();
this.__manager=this.__window=this.__root=this.__lastMouseDownTarget=null;
},defer:function(statics){qx.event.Registration.addHandler(statics);
}});
qx.Class.define("qx.event.handler.Element",{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(manager){this.base(arguments);
this._manager=manager;
this._registeredEvents={};
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{abort:true,load:true,scroll:true,select:true,reset:true,submit:true},CANCELABLE:{selectstart:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(target,type){if(type==="load"){return target.tagName.toLowerCase()!=="iframe";
}else{return true;
}},registerEvent:function(target,type,capture){var elementId=qx.core.ObjectRegistry.toHashCode(target);
var eventId=elementId+"-"+type;
var listener=qx.lang.Function.listener(this._onNative,this,eventId);
qx.bom.Event.addNativeListener(target,type,listener);
this._registeredEvents[eventId]={element:target,type:type,listener:listener};
},unregisterEvent:function(target,type,capture){var events=this._registeredEvents;

if(!events){return;
}var elementId=qx.core.ObjectRegistry.toHashCode(target);
var eventId=elementId+"-"+type;
var eventData=this._registeredEvents[eventId];

if(eventData){qx.bom.Event.removeNativeListener(target,type,eventData.listener);
}delete this._registeredEvents[eventId];
},_onNative:qx.event.GlobalError.observeMethod(function(nativeEvent,eventId){var events=this._registeredEvents;

if(!events){return;
}var eventData=events[eventId];
var isCancelable=this.constructor.CANCELABLE[eventData.type];
qx.event.Registration.fireNonBubblingEvent(eventData.element,eventData.type,qx.event.type.Native,[nativeEvent,undefined,undefined,undefined,isCancelable]);
})},destruct:function(){var entry;
var events=this._registeredEvents;

for(var id in events){entry=events[id];
qx.bom.Event.removeNativeListener(entry.element,entry.type,entry.listener);
}this._manager=this._registeredEvents=null;
},defer:function(statics){qx.event.Registration.addHandler(statics);
}});
qx.Class.define("qx.event.handler.Appear",{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(manager){this.base(arguments);
this.__manager=manager;
this.__targets={};
qx.event.handler.Appear.__instances[this.$$hash]=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{appear:true,disappear:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,__instances:{},refresh:function(){var all=this.__instances;

for(var hash in all){all[hash].refresh();
}}},members:{__manager:null,__targets:null,canHandleEvent:function(target,type){},registerEvent:function(target,type,capture){var hash=qx.core.ObjectRegistry.toHashCode(target)+type;
var targets=this.__targets;

if(targets&&!targets[hash]){targets[hash]=target;
target.$$displayed=target.offsetWidth>0;
}},unregisterEvent:function(target,type,capture){var hash=qx.core.ObjectRegistry.toHashCode(target)+type;
var targets=this.__targets;

if(!targets){return;
}
if(targets[hash]){delete targets[hash];
}},refresh:function(){var targets=this.__targets;
var elem;

for(var hash in targets){elem=targets[hash];
var displayed=elem.offsetWidth>0;

if((!!elem.$$displayed)!==displayed){elem.$$displayed=displayed;
var evt=qx.event.Registration.createEvent(displayed?"appear":"disappear");
this.__manager.dispatchEvent(elem,evt);
}}}},destruct:function(){this.__manager=this.__targets=null;
delete qx.event.handler.Appear.__instances[this.$$hash];
},defer:function(statics){qx.event.Registration.addHandler(statics);
}});
qx.Class.define("qx.bom.Element",{statics:{__initialAttributes:{"onload":true,"onpropertychange":true,"oninput":true,"onchange":true,"name":true,"type":true,"checked":true,"disabled":true},__helperElement:{},__allowMarkup:{},allowCreationWithMarkup:function(win){if(!win){win=window;
}var key=win.location.href;

if(qx.bom.Element.__allowMarkup[key]==undefined){try{win.document.createElement("<INPUT TYPE='RADIO' NAME='RADIOTEST' VALUE='Second Choice'>");
qx.bom.Element.__allowMarkup[key]=true;
}catch(e){qx.bom.Element.__allowMarkup[key]=false;
}}return qx.bom.Element.__allowMarkup[key];
},getHelperElement:function(win){if(!win){win=window;
}var key=win.location.href;

if(!qx.bom.Element.__helperElement[key]){var helper=qx.bom.Element.__helperElement[key]=win.document.createElement("div");
if(qx.core.Environment.get("engine.name")=="webkit"){helper.style.display="none";
win.document.body.appendChild(helper);
}}return qx.bom.Element.__helperElement[key];
},create:function(name,attributes,win){if(!win){win=window;
}
if(!name){throw new Error("The tag name is missing!");
}var initial=this.__initialAttributes;
var attributesHtml="";

for(var key in attributes){if(initial[key]){attributesHtml+=key+"='"+attributes[key]+"' ";
}}var element;
if(attributesHtml!=""){if(qx.bom.Element.allowCreationWithMarkup(win)){element=win.document.createElement("<"+name+" "+attributesHtml+">");
}else{var helper=qx.bom.Element.getHelperElement(win);
helper.innerHTML="<"+name+" "+attributesHtml+"></"+name+">";
element=helper.firstChild;
}}else{element=win.document.createElement(name);
}
for(var key in attributes){if(!initial[key]){qx.bom.element.Attribute.set(element,key,attributes[key]);
}}return element;
},empty:function(element){return element.innerHTML="";
},addListener:function(element,type,listener,self,capture){return qx.event.Registration.addListener(element,type,listener,self,capture);
},removeListener:function(element,type,listener,self,capture){return qx.event.Registration.removeListener(element,type,listener,self,capture);
},removeListenerById:function(target,id){return qx.event.Registration.removeListenerById(target,id);
},hasListener:function(element,type,capture){return qx.event.Registration.hasListener(element,type,capture);
},focus:function(element){qx.event.Registration.getManager(element).getHandler(qx.event.handler.Focus).focus(element);
},blur:function(element){qx.event.Registration.getManager(element).getHandler(qx.event.handler.Focus).blur(element);
},activate:function(element){qx.event.Registration.getManager(element).getHandler(qx.event.handler.Focus).activate(element);
},deactivate:function(element){qx.event.Registration.getManager(element).getHandler(qx.event.handler.Focus).deactivate(element);
},capture:function(element,containerCapture){qx.event.Registration.getManager(element).getDispatcher(qx.event.dispatch.MouseCapture).activateCapture(element,containerCapture);
},releaseCapture:function(element){qx.event.Registration.getManager(element).getDispatcher(qx.event.dispatch.MouseCapture).releaseCapture(element);
},matchesSelector:function(element,selector){if(selector){return qx.bom.Selector.query(selector,element.parentNode).length>0;
}else{return false;
}},clone:function(element,events){var clone;

if(events||((qx.core.Environment.get("engine.name")=="mshtml")&&!qx.xml.Document.isXmlDocument(element))){var mgr=qx.event.Registration.getManager(element);
var all=qx.dom.Hierarchy.getDescendants(element);
all.push(element);
}if((qx.core.Environment.get("engine.name")=="mshtml")){for(var i=0,l=all.length;i<l;i++){mgr.toggleAttachedEvents(all[i],false);
}}var clone=element.cloneNode(true);
if((qx.core.Environment.get("engine.name")=="mshtml")){for(var i=0,l=all.length;i<l;i++){mgr.toggleAttachedEvents(all[i],true);
}}if(events===true){var cloneAll=qx.dom.Hierarchy.getDescendants(clone);
cloneAll.push(clone);
var eventList,cloneElem,origElem,eventEntry;

for(var i=0,il=all.length;i<il;i++){origElem=all[i];
eventList=mgr.serializeListeners(origElem);

if(eventList.length>0){cloneElem=cloneAll[i];

for(var j=0,jl=eventList.length;j<jl;j++){eventEntry=eventList[j];
mgr.addListener(cloneElem,eventEntry.type,eventEntry.handler,eventEntry.self,eventEntry.capture);
}}}}return clone;
}}});
qx.Class.define("qx.lang.Generics",{statics:{__map:{"Array":["join","reverse","sort","push","pop","shift","unshift","splice","concat","slice","indexOf","lastIndexOf","forEach","map","filter","some","every"],"String":["quote","substring","toLowerCase","toUpperCase","charAt","charCodeAt","indexOf","lastIndexOf","toLocaleLowerCase","toLocaleUpperCase","localeCompare","match","search","replace","split","substr","concat","slice"]},__wrap:function(obj,func){return function(s){return obj.prototype[func].apply(s,Array.prototype.slice.call(arguments,1));
};
},__init:function(){var map=qx.lang.Generics.__map;

for(var key in map){var obj=window[key];
var arr=map[key];

for(var i=0,l=arr.length;i<l;i++){var func=arr[i];

if(!obj[func]){obj[func]=qx.lang.Generics.__wrap(obj,func);
}}}}},defer:function(statics){statics.__init();
}});
qx.Class.define("qx.event.handler.Application",{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(manager){this.base(arguments);
this._window=manager.getWindow();
this.__domReady=false;
this.__loaded=false;
this._initObserver();
qx.event.handler.Application.$$instance=this;
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{ready:1,shutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true,onScriptLoaded:function(){var inst=qx.event.handler.Application.$$instance;

if(inst){inst.__fireReady();
}}},members:{canHandleEvent:function(target,type){},registerEvent:function(target,type,capture){},unregisterEvent:function(target,type,capture){},__isReady:null,__domReady:null,__loaded:null,__isUnloaded:null,__fireReady:function(){if(!this.__isReady&&this.__domReady&&qx.$$loader.scriptLoaded){if((qx.core.Environment.get("engine.name")=="mshtml")){if(qx.event.Registration.hasListener(this._window,"ready")){this.__isReady=true;
qx.event.Registration.fireEvent(this._window,"ready");
}}else{this.__isReady=true;
qx.event.Registration.fireEvent(this._window,"ready");
}}},isApplicationReady:function(){return this.__isReady;
},_initObserver:function(){if(qx.$$domReady||document.readyState=="complete"||document.readyState=="ready"){this.__domReady=true;
this.__fireReady();
}else{this._onNativeLoadWrapped=qx.lang.Function.bind(this._onNativeLoad,this);

if(qx.core.Environment.get("engine.name")=="gecko"||qx.core.Environment.get("engine.name")=="opera"||qx.core.Environment.get("engine.name")=="webkit"){qx.bom.Event.addNativeListener(this._window,"DOMContentLoaded",this._onNativeLoadWrapped);
}else if((qx.core.Environment.get("engine.name")=="mshtml")){var self=this;
var timer=function(){try{document.documentElement.doScroll("left");

if(document.body){self._onNativeLoadWrapped();
}}catch(error){window.setTimeout(timer,100);
}};
timer();
}qx.bom.Event.addNativeListener(this._window,"load",this._onNativeLoadWrapped);
}this._onNativeUnloadWrapped=qx.lang.Function.bind(this._onNativeUnload,this);
qx.bom.Event.addNativeListener(this._window,"unload",this._onNativeUnloadWrapped);
},_stopObserver:function(){if(this._onNativeLoadWrapped){qx.bom.Event.removeNativeListener(this._window,"load",this._onNativeLoadWrapped);
}qx.bom.Event.removeNativeListener(this._window,"unload",this._onNativeUnloadWrapped);
this._onNativeLoadWrapped=null;
this._onNativeUnloadWrapped=null;
},_onNativeLoad:qx.event.GlobalError.observeMethod(function(){this.__domReady=true;
this.__fireReady();
}),_onNativeUnload:qx.event.GlobalError.observeMethod(function(){if(!this.__isUnloaded){this.__isUnloaded=true;

try{qx.event.Registration.fireEvent(this._window,"shutdown");
}catch(e){throw e;
}finally{qx.core.ObjectRegistry.shutdown();
}}})},destruct:function(){this._stopObserver();
this._window=null;
},defer:function(statics){qx.event.Registration.addHandler(statics);
}});
qx.Class.define("qx.event.type.Event",{extend:qx.core.Object,statics:{CAPTURING_PHASE:1,AT_TARGET:2,BUBBLING_PHASE:3},members:{init:function(canBubble,cancelable){this._type=null;
this._target=null;
this._currentTarget=null;
this._relatedTarget=null;
this._originalTarget=null;
this._stopPropagation=false;
this._preventDefault=false;
this._bubbles=!!canBubble;
this._cancelable=!!cancelable;
this._timeStamp=(new Date()).getTime();
this._eventPhase=null;
return this;
},clone:function(embryo){if(embryo){var clone=embryo;
}else{var clone=qx.event.Pool.getInstance().getObject(this.constructor);
}clone._type=this._type;
clone._target=this._target;
clone._currentTarget=this._currentTarget;
clone._relatedTarget=this._relatedTarget;
clone._originalTarget=this._originalTarget;
clone._stopPropagation=this._stopPropagation;
clone._bubbles=this._bubbles;
clone._preventDefault=this._preventDefault;
clone._cancelable=this._cancelable;
return clone;
},stop:function(){if(this._bubbles){this.stopPropagation();
}
if(this._cancelable){this.preventDefault();
}},stopPropagation:function(){this._stopPropagation=true;
},getPropagationStopped:function(){return !!this._stopPropagation;
},preventDefault:function(){this._preventDefault=true;
},getDefaultPrevented:function(){return !!this._preventDefault;
},getType:function(){return this._type;
},setType:function(type){this._type=type;
},getEventPhase:function(){return this._eventPhase;
},setEventPhase:function(eventPhase){this._eventPhase=eventPhase;
},getTimeStamp:function(){return this._timeStamp;
},getTarget:function(){return this._target;
},setTarget:function(target){this._target=target;
},getCurrentTarget:function(){return this._currentTarget||this._target;
},setCurrentTarget:function(currentTarget){this._currentTarget=currentTarget;
},getRelatedTarget:function(){return this._relatedTarget;
},setRelatedTarget:function(relatedTarget){this._relatedTarget=relatedTarget;
},getOriginalTarget:function(){return this._originalTarget;
},setOriginalTarget:function(originalTarget){this._originalTarget=originalTarget;
},getBubbles:function(){return this._bubbles;
},setBubbles:function(bubbles){this._bubbles=bubbles;
},isCancelable:function(){return this._cancelable;
},setCancelable:function(cancelable){this._cancelable=cancelable;
}},destruct:function(){this._target=this._currentTarget=this._relatedTarget=this._originalTarget=null;
}});
qx.Class.define("qx.event.type.Data",{extend:qx.event.type.Event,members:{__data:null,__old:null,init:function(data,old,cancelable){this.base(arguments,false,cancelable);
this.__data=data;
this.__old=old;
return this;
},clone:function(embryo){var clone=this.base(arguments,embryo);
clone.__data=this.__data;
clone.__old=this.__old;
return clone;
},getData:function(){return this.__data;
},getOldData:function(){return this.__old;
}},destruct:function(){this.__data=this.__old=null;
}});
qx.Class.define("qx.event.type.Native",{extend:qx.event.type.Event,members:{init:function(nativeEvent,target,relatedTarget,canBubble,cancelable){this.base(arguments,canBubble,cancelable);
this._target=target||qx.bom.Event.getTarget(nativeEvent);
this._relatedTarget=relatedTarget||qx.bom.Event.getRelatedTarget(nativeEvent);

if(nativeEvent.timeStamp){this._timeStamp=nativeEvent.timeStamp;
}this._native=nativeEvent;
this._returnValue=null;
return this;
},clone:function(embryo){var clone=this.base(arguments,embryo);
var nativeClone={};
clone._native=this._cloneNativeEvent(this._native,nativeClone);
clone._returnValue=this._returnValue;
return clone;
},_cloneNativeEvent:function(nativeEvent,clone){clone.preventDefault=qx.lang.Function.empty;
return clone;
},preventDefault:function(){this.base(arguments);
qx.bom.Event.preventDefault(this._native);
},getNativeEvent:function(){return this._native;
},setReturnValue:function(returnValue){this._returnValue=returnValue;
},getReturnValue:function(){return this._returnValue;
}},destruct:function(){this._native=this._returnValue=null;
}});
qx.Class.define("qx.event.type.Dom",{extend:qx.event.type.Native,statics:{SHIFT_MASK:1,CTRL_MASK:2,ALT_MASK:4,META_MASK:8},members:{_cloneNativeEvent:function(nativeEvent,clone){var clone=this.base(arguments,nativeEvent,clone);
clone.shiftKey=nativeEvent.shiftKey;
clone.ctrlKey=nativeEvent.ctrlKey;
clone.altKey=nativeEvent.altKey;
clone.metaKey=nativeEvent.metaKey;
return clone;
},getModifiers:function(){var mask=0;
var evt=this._native;

if(evt.shiftKey){mask|=qx.event.type.Dom.SHIFT_MASK;
}
if(evt.ctrlKey){mask|=qx.event.type.Dom.CTRL_MASK;
}
if(evt.altKey){mask|=qx.event.type.Dom.ALT_MASK;
}
if(evt.metaKey){mask|=qx.event.type.Dom.META_MASK;
}return mask;
},isCtrlPressed:function(){return this._native.ctrlKey;
},isShiftPressed:function(){return this._native.shiftKey;
},isAltPressed:function(){return this._native.altKey;
},isMetaPressed:function(){return this._native.metaKey;
},isCtrlOrCommandPressed:function(){if(qx.core.Environment.get("os.name")=="osx"){return this._native.metaKey;
}else{return this._native.ctrlKey;
}}}});
qx.Class.define("qx.event.type.Mouse",{extend:qx.event.type.Dom,members:{_cloneNativeEvent:function(nativeEvent,clone){var clone=this.base(arguments,nativeEvent,clone);
clone.button=nativeEvent.button;
clone.clientX=nativeEvent.clientX;
clone.clientY=nativeEvent.clientY;
clone.pageX=nativeEvent.pageX;
clone.pageY=nativeEvent.pageY;
clone.screenX=nativeEvent.screenX;
clone.screenY=nativeEvent.screenY;
clone.wheelDelta=nativeEvent.wheelDelta;
clone.detail=nativeEvent.detail;
clone.srcElement=nativeEvent.srcElement;
clone.target=nativeEvent.target;
return clone;
},__buttonsDom2EventModel:{0:"left",2:"right",1:"middle"},__buttonsMshtmlEventModel:{1:"left",2:"right",4:"middle"},stop:function(){this.stopPropagation();
},getButton:function(){switch(this._type){case "contextmenu":return "right";
case "click":if(this.__normalizeIEClick){return this.__normalizeIEClick();
}default:if(this._native.target!==undefined){return this.__buttonsDom2EventModel[this._native.button]||"none";
}else{return this.__buttonsMshtmlEventModel[this._native.button]||"none";
}}},__normalizeIEClick:qx.core.Environment.select("engine.name",{"mshtml":function(){return "left";
},"default":null}),isLeftPressed:function(){return this.getButton()==="left";
},isMiddlePressed:function(){return this.getButton()==="middle";
},isRightPressed:function(){return this.getButton()==="right";
},getRelatedTarget:function(){return this._relatedTarget;
},getViewportLeft:function(){return this._native.clientX;
},getViewportTop:function(){return this._native.clientY;
},getDocumentLeft:function(){if(this._native.pageX!==undefined){return this._native.pageX;
}else{var win=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientX+qx.bom.Viewport.getScrollLeft(win);
}},getDocumentTop:function(){if(this._native.pageY!==undefined){return this._native.pageY;
}else{var win=qx.dom.Node.getWindow(this._native.srcElement);
return this._native.clientY+qx.bom.Viewport.getScrollTop(win);
}},getScreenLeft:function(){return this._native.screenX;
},getScreenTop:function(){return this._native.screenY;
}}});
qx.Class.define("qx.event.type.MouseWheel",{extend:qx.event.type.Mouse,statics:{MAXSCROLL:null,MINSCROLL:null,FACTOR:1},members:{stop:function(){this.stopPropagation();
this.preventDefault();
},__normalize:function(delta){var absDelta=Math.abs(delta);
if(qx.event.type.MouseWheel.MINSCROLL==null||qx.event.type.MouseWheel.MINSCROLL>absDelta){qx.event.type.MouseWheel.MINSCROLL=absDelta;
this.__recalculateMultiplicator();
}if(qx.event.type.MouseWheel.MAXSCROLL==null||qx.event.type.MouseWheel.MAXSCROLL<absDelta){qx.event.type.MouseWheel.MAXSCROLL=absDelta;
this.__recalculateMultiplicator();
}if(qx.event.type.MouseWheel.MAXSCROLL===absDelta&&qx.event.type.MouseWheel.MINSCROLL===absDelta){return 2*(delta/absDelta);
}var range=qx.event.type.MouseWheel.MAXSCROLL-qx.event.type.MouseWheel.MINSCROLL;
var ret=(delta/range)*Math.log(range)*qx.event.type.MouseWheel.FACTOR;
return ret<0?Math.min(ret,-1):Math.max(ret,1);
},__recalculateMultiplicator:function(){var max=qx.event.type.MouseWheel.MAXSCROLL||0;
var min=qx.event.type.MouseWheel.MINSCROLL||max;

if(max<=min){return;
}var range=max-min;
var maxRet=(max/range)*Math.log(range);

if(maxRet==0){maxRet=1;
}qx.event.type.MouseWheel.FACTOR=6/maxRet;
},getWheelDelta:function(){if(qx.core.Environment.get("qx.dynamicmousewheel")){if(this._native.detail){return this.__normalize(this._native.detail);
}return this.__normalize(-this._native.wheelDelta);
}else{var handler=qx.core.Environment.select("engine.name",{"default":function(){return -(this._native.wheelDelta/40);
},"gecko":function(){return this._native.detail;
},"webkit":function(){if(qx.core.Environment.get("browser.name")=="chrome"){if(qx.core.Environment.get("os.name")=="osx"){return -(this._native.wheelDelta/60);
}else{return -(this._native.wheelDelta/120);
}}else{if(qx.core.Environment.get("os.name")=="win"){var factor=120;
if(parseFloat(qx.core.Environment.get("engine.version"))==533.16){factor=1200;
}}else{factor=40;
if(parseFloat(qx.core.Environment.get("engine.version"))==533.16||parseFloat(qx.core.Environment.get("engine.version"))==533.17||parseFloat(qx.core.Environment.get("engine.version"))==533.18){factor=1200;
}}return -(this._native.wheelDelta/factor);
}}});
return handler.call(this);
}}}});
qx.Class.define("qx.util.ObjectPool",{extend:qx.core.Object,construct:function(size){this.base(arguments);
this.__pool={};

if(size!=null){this.setSize(size);
}},properties:{size:{check:"Integer",init:Infinity}},members:{__pool:null,getObject:function(clazz){if(this.$$disposed){return new clazz;
}
if(!clazz){throw new Error("Class needs to be defined!");
}var obj=null;
var pool=this.__pool[clazz.classname];

if(pool){obj=pool.pop();
}
if(obj){obj.$$pooled=false;
}else{obj=new clazz;
}return obj;
},poolObject:function(obj){if(!this.__pool){return;
}var classname=obj.classname;
var pool=this.__pool[classname];

if(obj.$$pooled){throw new Error("Object is already pooled: "+obj);
}
if(!pool){this.__pool[classname]=pool=[];
}if(pool.length>this.getSize()){if(obj.destroy){obj.destroy();
}else{obj.dispose();
}return;
}obj.$$pooled=true;
pool.push(obj);
}},destruct:function(){var pool=this.__pool;
var classname,list,i,l;

for(classname in pool){list=pool[classname];

for(i=0,l=list.length;i<l;i++){list[i].dispose();
}}delete this.__pool;
}});
qx.Class.define("qx.event.Pool",{extend:qx.util.ObjectPool,type:"singleton",construct:function(){this.base(arguments,30);
}});
qx.Class.define("qx.event.Timer",{extend:qx.core.Object,construct:function(interval){this.base(arguments);
this.setEnabled(false);

if(interval!=null){this.setInterval(interval);
}var self=this;
this.__oninterval=function(){self._oninterval.call(self);
};
},events:{"interval":"qx.event.type.Event"},statics:{once:function(func,obj,timeout){var timer=new qx.event.Timer(timeout);
timer.__onceFunc=func;
timer.addListener("interval",function(e){timer.stop();
func.call(obj,e);
timer.dispose();
obj=null;
},obj);
timer.start();
return timer;
}},properties:{enabled:{init:true,check:"Boolean",apply:"_applyEnabled"},interval:{check:"Integer",init:1000,apply:"_applyInterval"}},members:{__intervalHandler:null,__oninterval:null,_applyInterval:function(value,old){if(this.getEnabled()){this.restart();
}},_applyEnabled:function(value,old){if(old){window.clearInterval(this.__intervalHandler);
this.__intervalHandler=null;
}else if(value){this.__intervalHandler=window.setInterval(this.__oninterval,this.getInterval());
}},start:function(){this.setEnabled(true);
},startWith:function(interval){this.setInterval(interval);
this.start();
},stop:function(){this.setEnabled(false);
},restart:function(){this.stop();
this.start();
},restartWith:function(interval){this.stop();
this.startWith(interval);
},_oninterval:qx.event.GlobalError.observeMethod(function(){if(this.$$disposed){return;
}
if(this.getEnabled()){this.fireEvent("interval");
}})},destruct:function(){if(this.__intervalHandler){window.clearInterval(this.__intervalHandler);
}this.__intervalHandler=this.__oninterval=null;
}});
qx.Class.define("qx.event.handler.Object",{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_LAST,SUPPORTED_TYPES:null,TARGET_CHECK:qx.event.IEventHandler.TARGET_OBJECT,IGNORE_CAN_HANDLE:false},members:{canHandleEvent:function(target,type){return qx.Class.supportsEvent(target.constructor,type);
},registerEvent:function(target,type,capture){},unregisterEvent:function(target,type,capture){}},defer:function(statics){qx.event.Registration.addHandler(statics);
}});
qx.Class.define("qx.util.DisposeUtil",{statics:{disposeObjects:function(obj,arr,disposeSingletons){var name;

for(var i=0,l=arr.length;i<l;i++){name=arr[i];

if(obj[name]==null||!obj.hasOwnProperty(name)){continue;
}
if(!qx.core.ObjectRegistry.inShutDown){if(obj[name].dispose){if(!disposeSingletons&&obj[name].constructor.$$instance){throw new Error("The object stored in key "+name+" is a singleton! Please use disposeSingleton instead.");
}else{obj[name].dispose();
}}else{throw new Error("Has no disposable object under key: "+name+"!");
}}obj[name]=null;
}},disposeArray:function(obj,field){var data=obj[field];

if(!data){return;
}if(qx.core.ObjectRegistry.inShutDown){obj[field]=null;
return;
}try{var entry;

for(var i=data.length-1;i>=0;i--){entry=data[i];

if(entry){entry.dispose();
}}}catch(ex){throw new Error("The array field: "+field+" of object: "+obj+" has non disposable entries: "+ex);
}data.length=0;
obj[field]=null;
},disposeMap:function(obj,field){var data=obj[field];

if(!data){return;
}if(qx.core.ObjectRegistry.inShutDown){obj[field]=null;
return;
}try{var entry;

for(var key in data){entry=data[key];

if(data.hasOwnProperty(key)&&entry){entry.dispose();
}}}catch(ex){throw new Error("The map field: "+field+" of object: "+obj+" has non disposable entries: "+ex);
}obj[field]=null;
},disposeTriggeredBy:function(disposeMe,trigger){var triggerDispose=trigger.dispose;
trigger.dispose=function(){triggerDispose.call(trigger);
disposeMe.dispose();
};
}}});
qx.Class.define("qx.bom.Viewport",{statics:{getWidth:qx.core.Environment.select("engine.name",{"opera":function(win){if(parseFloat(qx.core.Environment.get("engine.version"))<9.5){return (win||window).document.body.clientWidth;
}else{var doc=(win||window).document;
return qx.bom.Document.isStandardMode(win)?doc.documentElement.clientWidth:doc.body.clientWidth;
}},"webkit":function(win){if(parseFloat(qx.core.Environment.get("engine.version"))<523.15){return (win||window).innerWidth;
}else{var doc=(win||window).document;
return qx.bom.Document.isStandardMode(win)?doc.documentElement.clientWidth:doc.body.clientWidth;
}},"default":function(win){var doc=(win||window).document;
return qx.bom.Document.isStandardMode(win)?doc.documentElement.clientWidth:doc.body.clientWidth;
}}),getHeight:qx.core.Environment.select("engine.name",{"opera":function(win){if(parseFloat(qx.core.Environment.get("engine.version"))<9.5){return (win||window).document.body.clientHeight;
}else{var doc=(win||window).document;
return qx.bom.Document.isStandardMode(win)?doc.documentElement.clientHeight:doc.body.clientHeight;
}},"webkit":function(win){if(parseFloat(qx.core.Environment.get("engine.version"))<523.15){return (win||window).innerHeight;
}else{var doc=(win||window).document;
return qx.bom.Document.isStandardMode(win)?doc.documentElement.clientHeight:doc.body.clientHeight;
}},"default":function(win){var doc=(win||window).document;
return qx.bom.Document.isStandardMode(win)?doc.documentElement.clientHeight:doc.body.clientHeight;
}}),getScrollLeft:qx.core.Environment.select("engine.name",{"mshtml":function(win){var doc=(win||window).document;
return doc.documentElement.scrollLeft||doc.body.scrollLeft;
},"default":function(win){return (win||window).pageXOffset;
}}),getScrollTop:qx.core.Environment.select("engine.name",{"mshtml":function(win){var doc=(win||window).document;
return doc.documentElement.scrollTop||doc.body.scrollTop;
},"default":function(win){return (win||window).pageYOffset;
}}),getOrientation:function(win){var orientation=(win||window).orientation;

if(orientation==null){orientation=this.getWidth(win)>this.getHeight(win)?90:0;
}return orientation;
},isLandscape:function(win){return Math.abs(this.getOrientation(win))==90;
},isPortrait:function(win){var orientation=this.getOrientation(win);
return (orientation==0||orientation==180);
}}});
qx.Class.define("qx.dom.Hierarchy",{statics:{getNodeIndex:function(node){var index=0;

while(node&&(node=node.previousSibling)){index++;
}return index;
},getElementIndex:function(element){var index=0;
var type=qx.dom.Node.ELEMENT;

while(element&&(element=element.previousSibling)){if(element.nodeType==type){index++;
}}return index;
},getNextElementSibling:function(element){while(element&&(element=element.nextSibling)&&!qx.dom.Node.isElement(element)){continue;
}return element||null;
},getPreviousElementSibling:function(element){while(element&&(element=element.previousSibling)&&!qx.dom.Node.isElement(element)){continue;
}return element||null;
},contains:qx.core.Environment.select("engine.name",{"webkit|mshtml|opera":function(element,target){if(qx.dom.Node.isDocument(element)){var doc=qx.dom.Node.getDocument(target);
return element&&doc==element;
}else if(qx.dom.Node.isDocument(target)){return false;
}else{return element.contains(target);
}},"gecko":function(element,target){return !!(element.compareDocumentPosition(target)&16);
},"default":function(element,target){while(target){if(element==target){return true;
}target=target.parentNode;
}return false;
}}),isRendered:qx.core.Environment.select("engine.name",{"mshtml":function(element){if(!element.parentNode||!element.offsetParent){return false;
}var doc=element.ownerDocument||element.document;
return doc.body.contains(element);
},"gecko":function(element){var doc=element.ownerDocument||element.document;
return !!(doc.compareDocumentPosition(element)&16);
},"default":function(element){if(!element.parentNode||!element.offsetParent){return false;
}var doc=element.ownerDocument||element.document;
return doc.body.contains(element);
}}),isDescendantOf:function(element,ancestor){return this.contains(ancestor,element);
},getCommonParent:qx.core.Environment.select("engine.name",{"mshtml|opera":function(element1,element2){if(element1===element2){return element1;
}
while(element1&&qx.dom.Node.isElement(element1)){if(element1.contains(element2)){return element1;
}element1=element1.parentNode;
}return null;
},"default":function(element1,element2){if(element1===element2){return element1;
}var known={};
var obj=qx.core.ObjectRegistry;
var h1,h2;

while(element1||element2){if(element1){h1=obj.toHashCode(element1);

if(known[h1]){return known[h1];
}known[h1]=element1;
element1=element1.parentNode;
}
if(element2){h2=obj.toHashCode(element2);

if(known[h2]){return known[h2];
}known[h2]=element2;
element2=element2.parentNode;
}}return null;
}}),getAncestors:function(element){return this._recursivelyCollect(element,"parentNode");
},getChildElements:function(element){element=element.firstChild;

if(!element){return [];
}var arr=this.getNextSiblings(element);

if(element.nodeType===1){arr.unshift(element);
}return arr;
},getDescendants:function(element){return qx.lang.Array.fromCollection(element.getElementsByTagName("*"));
},getFirstDescendant:function(element){element=element.firstChild;

while(element&&element.nodeType!=1){element=element.nextSibling;
}return element;
},getLastDescendant:function(element){element=element.lastChild;

while(element&&element.nodeType!=1){element=element.previousSibling;
}return element;
},getPreviousSiblings:function(element){return this._recursivelyCollect(element,"previousSibling");
},getNextSiblings:function(element){return this._recursivelyCollect(element,"nextSibling");
},_recursivelyCollect:function(element,property){var list=[];

while(element=element[property]){if(element.nodeType==1){list.push(element);
}}return list;
},getSiblings:function(element){return this.getPreviousSiblings(element).reverse().concat(this.getNextSiblings(element));
},isEmpty:function(element){element=element.firstChild;

while(element){if(element.nodeType===qx.dom.Node.ELEMENT||element.nodeType===qx.dom.Node.TEXT){return false;
}element=element.nextSibling;
}return true;
},cleanWhitespace:function(element){var node=element.firstChild;

while(node){var nextNode=node.nextSibling;

if(node.nodeType==3&&!/\S/.test(node.nodeValue)){element.removeChild(node);
}node=nextNode;
}}}});
qx.Class.define("qx.bom.element.Attribute",{statics:{__hints:{names:{"class":"className","for":"htmlFor",html:"innerHTML",text:(qx.core.Environment.get("engine.name")=="mshtml")?"innerText":"textContent",colspan:"colSpan",rowspan:"rowSpan",valign:"vAlign",datetime:"dateTime",accesskey:"accessKey",tabindex:"tabIndex",maxlength:"maxLength",readonly:"readOnly",longdesc:"longDesc",cellpadding:"cellPadding",cellspacing:"cellSpacing",frameborder:"frameBorder",usemap:"useMap"},runtime:{"html":1,"text":1},bools:{compact:1,nowrap:1,ismap:1,declare:1,noshade:1,checked:1,disabled:1,readOnly:1,multiple:1,selected:1,noresize:1,defer:1,allowTransparency:1},property:{$$html:1,$$widget:1,disabled:1,checked:1,readOnly:1,multiple:1,selected:1,value:1,maxLength:1,className:1,innerHTML:1,innerText:1,textContent:1,htmlFor:1,tabIndex:1},qxProperties:{$$widget:1,$$html:1},propertyDefault:{disabled:false,checked:false,readOnly:false,multiple:false,selected:false,value:"",className:"",innerHTML:"",innerText:"",textContent:"",htmlFor:"",tabIndex:0,maxLength:qx.core.Environment.select("engine.name",{"mshtml":2147483647,"webkit":524288,"default":-1})},removeableProperties:{disabled:1,multiple:1,maxLength:1},original:{href:1,src:1,type:1}},compile:function(map){var html=[];
var runtime=this.__hints.runtime;

for(var key in map){if(!runtime[key]){html.push(key,"='",map[key],"'");
}}return html.join("");
},get:qx.core.Environment.select("engine.name",{"mshtml":function(element,name){var hints=this.__hints;
var value;
name=hints.names[name]||name;
if(hints.original[name]){value=element.getAttribute(name,2);
}else if(hints.property[name]){value=element[name];

if(typeof hints.propertyDefault[name]!=="undefined"&&value==hints.propertyDefault[name]){if(typeof hints.bools[name]==="undefined"){return null;
}else{return value;
}}}else{value=element.getAttribute(name);
}if(hints.bools[name]){return !!value;
}return value;
},"default":function(element,name){var hints=this.__hints;
var value;
name=hints.names[name]||name;
if(hints.property[name]){value=element[name];

if(typeof hints.propertyDefault[name]!=="undefined"&&value==hints.propertyDefault[name]){if(typeof hints.bools[name]==="undefined"){return null;
}else{return value;
}}}else{value=element.getAttribute(name);
}if(hints.bools[name]){return !!value;
}return value;
}}),set:function(element,name,value){if(typeof value==="undefined"){return;
}var hints=this.__hints;
name=hints.names[name]||name;
if(hints.bools[name]){value=!!value;
}if(hints.property[name]&&(!(element[name]===undefined)||hints.qxProperties[name])){if(value==null){if(hints.removeableProperties[name]){element.removeAttribute(name);
return;
}else if(typeof hints.propertyDefault[name]!=="undefined"){value=hints.propertyDefault[name];
}}element[name]=value;
}else{if(value===true){element.setAttribute(name,name);
}else if(value===false||value===null){element.removeAttribute(name);
}else{element.setAttribute(name,value);
}}},reset:function(element,name){this.set(element,name,null);
}}});
qx.Class.define("qx.event.handler.Focus",{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(manager){this.base(arguments);
this._manager=manager;
this._window=manager.getWindow();
this._document=this._window.document;
this._root=this._document.documentElement;
this._body=this._document.body;
this._initObserver();
},properties:{active:{apply:"_applyActive",nullable:true},focus:{apply:"_applyFocus",nullable:true}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{focus:1,blur:1,focusin:1,focusout:1,activate:1,deactivate:1},IGNORE_CAN_HANDLE:true,FOCUSABLE_ELEMENTS:qx.core.Environment.select("engine.name",{"mshtml|gecko":{a:1,body:1,button:1,frame:1,iframe:1,img:1,input:1,object:1,select:1,textarea:1},"opera|webkit":{button:1,input:1,select:1,textarea:1}})},members:{__onNativeMouseDownWrapper:null,__onNativeMouseUpWrapper:null,__onNativeFocusWrapper:null,__onNativeBlurWrapper:null,__onNativeDragGestureWrapper:null,__onNativeSelectStartWrapper:null,__onNativeFocusInWrapper:null,__onNativeFocusOutWrapper:null,__previousFocus:null,__previousActive:null,canHandleEvent:function(target,type){},registerEvent:function(target,type,capture){},unregisterEvent:function(target,type,capture){},focus:function(element){if((qx.core.Environment.get("engine.name")=="mshtml")){window.setTimeout(function(){try{element.focus();
var selection=qx.bom.Selection.get(element);

if(selection.length==0){var textRange=element.createTextRange();
textRange.moveStart('character',element.value.length);
textRange.collapse();
textRange.select();
}}catch(ex){}},0);
}else{try{element.focus();
}catch(ex){}}this.setFocus(element);
this.setActive(element);
},activate:function(element){this.setActive(element);
},blur:function(element){try{element.blur();
}catch(ex){}
if(this.getActive()===element){this.resetActive();
}
if(this.getFocus()===element){this.resetFocus();
}},deactivate:function(element){if(this.getActive()===element){this.resetActive();
}},tryActivate:function(element){var active=this.__findActivatableElement(element);

if(active){this.setActive(active);
}},__fireEvent:function(target,related,type,bubbles){var Registration=qx.event.Registration;
var evt=Registration.createEvent(type,qx.event.type.Focus,[target,related,bubbles]);
Registration.dispatchEvent(target,evt);
},_windowFocused:true,__doWindowBlur:function(){if(this._windowFocused){this._windowFocused=false;
this.__fireEvent(this._window,null,"blur",false);
}},__doWindowFocus:function(){if(!this._windowFocused){this._windowFocused=true;
this.__fireEvent(this._window,null,"focus",false);
}},_initObserver:qx.core.Environment.select("engine.name",{"gecko":function(){this.__onNativeMouseDownWrapper=qx.lang.Function.listener(this.__onNativeMouseDown,this);
this.__onNativeMouseUpWrapper=qx.lang.Function.listener(this.__onNativeMouseUp,this);
this.__onNativeFocusWrapper=qx.lang.Function.listener(this.__onNativeFocus,this);
this.__onNativeBlurWrapper=qx.lang.Function.listener(this.__onNativeBlur,this);
this.__onNativeDragGestureWrapper=qx.lang.Function.listener(this.__onNativeDragGesture,this);
qx.bom.Event.addNativeListener(this._document,"mousedown",this.__onNativeMouseDownWrapper,true);
qx.bom.Event.addNativeListener(this._document,"mouseup",this.__onNativeMouseUpWrapper,true);
qx.bom.Event.addNativeListener(this._window,"focus",this.__onNativeFocusWrapper,true);
qx.bom.Event.addNativeListener(this._window,"blur",this.__onNativeBlurWrapper,true);
qx.bom.Event.addNativeListener(this._window,"draggesture",this.__onNativeDragGestureWrapper,true);
},"mshtml":function(){this.__onNativeMouseDownWrapper=qx.lang.Function.listener(this.__onNativeMouseDown,this);
this.__onNativeMouseUpWrapper=qx.lang.Function.listener(this.__onNativeMouseUp,this);
this.__onNativeFocusInWrapper=qx.lang.Function.listener(this.__onNativeFocusIn,this);
this.__onNativeFocusOutWrapper=qx.lang.Function.listener(this.__onNativeFocusOut,this);
this.__onNativeSelectStartWrapper=qx.lang.Function.listener(this.__onNativeSelectStart,this);
qx.bom.Event.addNativeListener(this._document,"mousedown",this.__onNativeMouseDownWrapper);
qx.bom.Event.addNativeListener(this._document,"mouseup",this.__onNativeMouseUpWrapper);
qx.bom.Event.addNativeListener(this._document,"focusin",this.__onNativeFocusInWrapper);
qx.bom.Event.addNativeListener(this._document,"focusout",this.__onNativeFocusOutWrapper);
qx.bom.Event.addNativeListener(this._document,"selectstart",this.__onNativeSelectStartWrapper);
},"webkit":function(){this.__onNativeMouseDownWrapper=qx.lang.Function.listener(this.__onNativeMouseDown,this);
this.__onNativeMouseUpWrapper=qx.lang.Function.listener(this.__onNativeMouseUp,this);
this.__onNativeFocusOutWrapper=qx.lang.Function.listener(this.__onNativeFocusOut,this);
this.__onNativeFocusWrapper=qx.lang.Function.listener(this.__onNativeFocus,this);
this.__onNativeBlurWrapper=qx.lang.Function.listener(this.__onNativeBlur,this);
this.__onNativeSelectStartWrapper=qx.lang.Function.listener(this.__onNativeSelectStart,this);
qx.bom.Event.addNativeListener(this._document,"mousedown",this.__onNativeMouseDownWrapper,true);
qx.bom.Event.addNativeListener(this._document,"mouseup",this.__onNativeMouseUpWrapper,true);
qx.bom.Event.addNativeListener(this._document,"selectstart",this.__onNativeSelectStartWrapper,false);
qx.bom.Event.addNativeListener(this._window,"DOMFocusOut",this.__onNativeFocusOutWrapper,true);
qx.bom.Event.addNativeListener(this._window,"focus",this.__onNativeFocusWrapper,true);
qx.bom.Event.addNativeListener(this._window,"blur",this.__onNativeBlurWrapper,true);
},"opera":function(){this.__onNativeMouseDownWrapper=qx.lang.Function.listener(this.__onNativeMouseDown,this);
this.__onNativeMouseUpWrapper=qx.lang.Function.listener(this.__onNativeMouseUp,this);
this.__onNativeFocusInWrapper=qx.lang.Function.listener(this.__onNativeFocusIn,this);
this.__onNativeFocusOutWrapper=qx.lang.Function.listener(this.__onNativeFocusOut,this);
qx.bom.Event.addNativeListener(this._document,"mousedown",this.__onNativeMouseDownWrapper,true);
qx.bom.Event.addNativeListener(this._document,"mouseup",this.__onNativeMouseUpWrapper,true);
qx.bom.Event.addNativeListener(this._window,"DOMFocusIn",this.__onNativeFocusInWrapper,true);
qx.bom.Event.addNativeListener(this._window,"DOMFocusOut",this.__onNativeFocusOutWrapper,true);
}}),_stopObserver:qx.core.Environment.select("engine.name",{"gecko":function(){qx.bom.Event.removeNativeListener(this._document,"mousedown",this.__onNativeMouseDownWrapper,true);
qx.bom.Event.removeNativeListener(this._document,"mouseup",this.__onNativeMouseUpWrapper,true);
qx.bom.Event.removeNativeListener(this._window,"focus",this.__onNativeFocusWrapper,true);
qx.bom.Event.removeNativeListener(this._window,"blur",this.__onNativeBlurWrapper,true);
qx.bom.Event.removeNativeListener(this._window,"draggesture",this.__onNativeDragGestureWrapper,true);
},"mshtml":function(){qx.bom.Event.removeNativeListener(this._document,"mousedown",this.__onNativeMouseDownWrapper);
qx.bom.Event.removeNativeListener(this._document,"mouseup",this.__onNativeMouseUpWrapper);
qx.bom.Event.removeNativeListener(this._document,"focusin",this.__onNativeFocusInWrapper);
qx.bom.Event.removeNativeListener(this._document,"focusout",this.__onNativeFocusOutWrapper);
qx.bom.Event.removeNativeListener(this._document,"selectstart",this.__onNativeSelectStartWrapper);
},"webkit":function(){qx.bom.Event.removeNativeListener(this._document,"mousedown",this.__onNativeMouseDownWrapper,true);
qx.bom.Event.removeNativeListener(this._document,"mouseup",this.__onNativeMouseUpWrapper,true);
qx.bom.Event.removeNativeListener(this._document,"selectstart",this.__onNativeSelectStartWrapper,false);
qx.bom.Event.removeNativeListener(this._window,"DOMFocusOut",this.__onNativeFocusOutWrapper,true);
qx.bom.Event.removeNativeListener(this._window,"focus",this.__onNativeFocusWrapper,true);
qx.bom.Event.removeNativeListener(this._window,"blur",this.__onNativeBlurWrapper,true);
},"opera":function(){qx.bom.Event.removeNativeListener(this._document,"mousedown",this.__onNativeMouseDownWrapper,true);
qx.bom.Event.removeNativeListener(this._document,"mouseup",this.__onNativeMouseUpWrapper,true);
qx.bom.Event.removeNativeListener(this._window,"DOMFocusIn",this.__onNativeFocusInWrapper,true);
qx.bom.Event.removeNativeListener(this._window,"DOMFocusOut",this.__onNativeFocusOutWrapper,true);
}}),__onNativeDragGesture:qx.event.GlobalError.observeMethod(qx.core.Environment.select("engine.name",{"gecko":function(domEvent){var target=qx.bom.Event.getTarget(domEvent);

if(!this.__isSelectable(target)){qx.bom.Event.preventDefault(domEvent);
}},"default":null})),__onNativeFocusIn:qx.event.GlobalError.observeMethod(qx.core.Environment.select("engine.name",{"mshtml":function(domEvent){this.__doWindowFocus();
var target=qx.bom.Event.getTarget(domEvent);
var focusTarget=this.__findFocusableElement(target);

if(focusTarget){this.setFocus(focusTarget);
}this.tryActivate(target);
},"opera":function(domEvent){var target=qx.bom.Event.getTarget(domEvent);

if(target==this._document||target==this._window){this.__doWindowFocus();

if(this.__previousFocus){this.setFocus(this.__previousFocus);
delete this.__previousFocus;
}
if(this.__previousActive){this.setActive(this.__previousActive);
delete this.__previousActive;
}}else{this.setFocus(target);
this.tryActivate(target);
if(!this.__isSelectable(target)){target.selectionStart=0;
target.selectionEnd=0;
}}},"default":null})),__onNativeFocusOut:qx.event.GlobalError.observeMethod(qx.core.Environment.select("engine.name",{"mshtml":function(domEvent){var relatedTarget=qx.bom.Event.getRelatedTarget(domEvent);
if(relatedTarget==null){this.__doWindowBlur();
this.resetFocus();
this.resetActive();
}},"webkit":function(domEvent){var target=qx.bom.Event.getTarget(domEvent);

if(target===this.getFocus()){this.resetFocus();
}
if(target===this.getActive()){this.resetActive();
}},"opera":function(domEvent){var target=qx.bom.Event.getTarget(domEvent);

if(target==this._document){this.__doWindowBlur();
this.__previousFocus=this.getFocus();
this.__previousActive=this.getActive();
this.resetFocus();
this.resetActive();
}else{if(target===this.getFocus()){this.resetFocus();
}
if(target===this.getActive()){this.resetActive();
}}},"default":null})),__onNativeBlur:qx.event.GlobalError.observeMethod(qx.core.Environment.select("engine.name",{"gecko":function(domEvent){var target=qx.bom.Event.getTarget(domEvent);

if(target===this._window||target===this._document){this.__doWindowBlur();
this.resetActive();
this.resetFocus();
}},"webkit":function(domEvent){var target=qx.bom.Event.getTarget(domEvent);

if(target===this._window||target===this._document){this.__doWindowBlur();
this.__previousFocus=this.getFocus();
this.__previousActive=this.getActive();
this.resetActive();
this.resetFocus();
}},"default":null})),__onNativeFocus:qx.event.GlobalError.observeMethod(qx.core.Environment.select("engine.name",{"gecko":function(domEvent){var target=qx.bom.Event.getTarget(domEvent);

if(target===this._window||target===this._document){this.__doWindowFocus();
target=this._body;
}this.setFocus(target);
this.tryActivate(target);
},"webkit":function(domEvent){var target=qx.bom.Event.getTarget(domEvent);

if(target===this._window||target===this._document){this.__doWindowFocus();

if(this.__previousFocus){this.setFocus(this.__previousFocus);
delete this.__previousFocus;
}
if(this.__previousActive){this.setActive(this.__previousActive);
delete this.__previousActive;
}}else{this.setFocus(target);
this.tryActivate(target);
}},"default":null})),__onNativeMouseDown:qx.event.GlobalError.observeMethod(qx.core.Environment.select("engine.name",{"gecko":function(domEvent){var target=qx.bom.Event.getTarget(domEvent);
var focusTarget=this.__findFocusableElement(target);

if(!focusTarget){qx.bom.Event.preventDefault(domEvent);
}else if(focusTarget===this._body){this.setFocus(focusTarget);
}},"mshtml":function(domEvent){var target=qx.bom.Event.getTarget(domEvent);
var focusTarget=this.__findFocusableElement(target);

if(focusTarget){if(!this.__isSelectable(target)){target.unselectable="on";
try{document.selection.empty();
}catch(ex){}try{focusTarget.focus();
}catch(ex){}}}else{qx.bom.Event.preventDefault(domEvent);
if(!this.__isSelectable(target)){target.unselectable="on";
}}},"webkit":function(domEvent){var target=qx.bom.Event.getTarget(domEvent);
var focusTarget=this.__findFocusableElement(target);

if(focusTarget){this.setFocus(focusTarget);
}else{qx.bom.Event.preventDefault(domEvent);
}},"opera":function(domEvent){var target=qx.bom.Event.getTarget(domEvent);
var focusTarget=this.__findFocusableElement(target);

if(!this.__isSelectable(target)){qx.bom.Event.preventDefault(domEvent);
if(focusTarget){var current=this.getFocus();

if(current&&current.selectionEnd){current.selectionStart=0;
current.selectionEnd=0;
current.blur();
}if(focusTarget){this.setFocus(focusTarget);
}}}else if(focusTarget){this.setFocus(focusTarget);
}},"default":null})),__onNativeMouseUp:qx.event.GlobalError.observeMethod(qx.core.Environment.select("engine.name",{"mshtml":function(domEvent){var target=qx.bom.Event.getTarget(domEvent);

if(target.unselectable){target.unselectable="off";
}this.tryActivate(this.__fixFocus(target));
},"gecko":function(domEvent){var target=qx.bom.Event.getTarget(domEvent);

while(target&&target.offsetWidth===undefined){target=target.parentNode;
}
if(target){this.tryActivate(target);
}},"webkit|opera":function(domEvent){var target=qx.bom.Event.getTarget(domEvent);
this.tryActivate(this.__fixFocus(target));
},"default":null})),__fixFocus:qx.event.GlobalError.observeMethod(qx.core.Environment.select("engine.name",{"mshtml|webkit":function(target){var focusedElement=this.getFocus();

if(focusedElement&&target!=focusedElement&&(focusedElement.nodeName.toLowerCase()==="input"||focusedElement.nodeName.toLowerCase()==="textarea")){target=focusedElement;
}return target;
},"default":function(target){return target;
}})),__onNativeSelectStart:qx.event.GlobalError.observeMethod(qx.core.Environment.select("engine.name",{"mshtml|webkit":function(domEvent){var target=qx.bom.Event.getTarget(domEvent);

if(!this.__isSelectable(target)){qx.bom.Event.preventDefault(domEvent);
}},"default":null})),__isFocusable:function(el){var index=qx.bom.element.Attribute.get(el,"tabIndex");

if(index>=1){return true;
}var focusable=qx.event.handler.Focus.FOCUSABLE_ELEMENTS;

if(index>=0&&focusable[el.tagName]){return true;
}return false;
},__findFocusableElement:function(el){while(el&&el.nodeType===1){if(el.getAttribute("qxKeepFocus")=="on"){return null;
}
if(this.__isFocusable(el)){return el;
}el=el.parentNode;
}return this._body;
},__findActivatableElement:function(el){var orig=el;

while(el&&el.nodeType===1){if(el.getAttribute("qxKeepActive")=="on"){return null;
}el=el.parentNode;
}return orig;
},__isSelectable:function(node){while(node&&node.nodeType===1){var attr=node.getAttribute("qxSelectable");

if(attr!=null){return attr==="on";
}node=node.parentNode;
}return true;
},_applyActive:function(value,old){if(old){this.__fireEvent(old,value,"deactivate",true);
}
if(value){this.__fireEvent(value,old,"activate",true);
}},_applyFocus:function(value,old){if(old){this.__fireEvent(old,value,"focusout",true);
}
if(value){this.__fireEvent(value,old,"focusin",true);
}if(old){this.__fireEvent(old,value,"blur",false);
}
if(value){this.__fireEvent(value,old,"focus",false);
}}},destruct:function(){this._stopObserver();
this._manager=this._window=this._document=this._root=this._body=this.__mouseActive=null;
},defer:function(statics){qx.event.Registration.addHandler(statics);
var focusable=statics.FOCUSABLE_ELEMENTS;

for(var entry in focusable){focusable[entry.toUpperCase()]=1;
}}});
qx.Class.define("qx.event.type.Focus",{extend:qx.event.type.Event,members:{init:function(target,relatedTarget,canBubble){this.base(arguments,canBubble,false);
this._target=target;
this._relatedTarget=relatedTarget;
return this;
}}});
qx.Class.define("qx.event.dispatch.MouseCapture",{extend:qx.event.dispatch.AbstractBubbling,construct:function(manager,registration){this.base(arguments,manager);
this.__window=manager.getWindow();
this.__registration=registration;
manager.addListener(this.__window,"blur",this.releaseCapture,this);
manager.addListener(this.__window,"focus",this.releaseCapture,this);
manager.addListener(this.__window,"scroll",this.releaseCapture,this);
},statics:{PRIORITY:qx.event.Registration.PRIORITY_FIRST},members:{__registration:null,__captureElement:null,__containerCapture:true,__window:null,_getParent:function(target){return target.parentNode;
},canDispatchEvent:function(target,event,type){return !!(this.__captureElement&&this.__captureEvents[type]);
},dispatchEvent:function(target,event,type){if(type=="click"){event.stopPropagation();
this.releaseCapture();
return;
}
if(this.__containerCapture||!qx.dom.Hierarchy.contains(this.__captureElement,target)){target=this.__captureElement;
}this.base(arguments,target,event,type);
},__captureEvents:{"mouseup":1,"mousedown":1,"click":1,"dblclick":1,"mousemove":1,"mouseout":1,"mouseover":1},activateCapture:function(element,containerCapture){var containerCapture=containerCapture!==false;

if(this.__captureElement===element&&this.__containerCapture==containerCapture){return;
}
if(this.__captureElement){this.releaseCapture();
}this.nativeSetCapture(element,containerCapture);

if(this.hasNativeCapture){var self=this;
qx.bom.Event.addNativeListener(element,"losecapture",function(){qx.bom.Event.removeNativeListener(element,"losecapture",arguments.callee);
self.releaseCapture();
});
}this.__containerCapture=containerCapture;
this.__captureElement=element;
this.__registration.fireEvent(element,"capture",qx.event.type.Event,[true,false]);
},getCaptureElement:function(){return this.__captureElement;
},releaseCapture:function(){var element=this.__captureElement;

if(!element){return;
}this.__captureElement=null;
this.__registration.fireEvent(element,"losecapture",qx.event.type.Event,[true,false]);
this.nativeReleaseCapture(element);
},hasNativeCapture:qx.core.Environment.get("engine.name")=="mshtml",nativeSetCapture:qx.core.Environment.select("engine.name",{"mshtml":function(element,containerCapture){element.setCapture(containerCapture!==false);
},"default":qx.lang.Function.empty}),nativeReleaseCapture:qx.core.Environment.select("engine.name",{"mshtml":function(element){element.releaseCapture();
},"default":qx.lang.Function.empty})},destruct:function(){this.__captureElement=this.__window=this.__registration=null;
},defer:function(statics){qx.event.Registration.addDispatcher(statics);
}});
qx.Class.define("qx.event.handler.Window",{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(manager){this.base(arguments);
this._manager=manager;
this._window=manager.getWindow();
this._initWindowObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{error:1,load:1,beforeunload:1,unload:1,resize:1,scroll:1,beforeshutdown:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_WINDOW,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(target,type){},registerEvent:function(target,type,capture){},unregisterEvent:function(target,type,capture){},_initWindowObserver:function(){this._onNativeWrapper=qx.lang.Function.listener(this._onNative,this);
var types=qx.event.handler.Window.SUPPORTED_TYPES;

for(var key in types){qx.bom.Event.addNativeListener(this._window,key,this._onNativeWrapper);
}},_stopWindowObserver:function(){var types=qx.event.handler.Window.SUPPORTED_TYPES;

for(var key in types){qx.bom.Event.removeNativeListener(this._window,key,this._onNativeWrapper);
}},_onNative:qx.event.GlobalError.observeMethod(function(e){if(this.isDisposed()){return;
}var win=this._window;

try{var doc=win.document;
}catch(e){return ;
}var html=doc.documentElement;
var target=qx.bom.Event.getTarget(e);

if(target==null||target===win||target===doc||target===html){var event=qx.event.Registration.createEvent(e.type,qx.event.type.Native,[e,win]);
qx.event.Registration.dispatchEvent(win,event);
var result=event.getReturnValue();

if(result!=null){e.returnValue=result;
return result;
}}})},destruct:function(){this._stopWindowObserver();
this._manager=this._window=null;
},defer:function(statics){qx.event.Registration.addHandler(statics);
}});
qx.Class.define("qx.event.handler.Capture",{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{capture:true,losecapture:true},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true},members:{canHandleEvent:function(target,type){},registerEvent:function(target,type,capture){},unregisterEvent:function(target,type,capture){}},defer:function(statics){qx.event.Registration.addHandler(statics);
}});
qx.Class.define("qx.bom.element.Class",{statics:{__splitter:/\s+/g,__trim:/^\s+|\s+$/g,add:qx.lang.Object.select(qx.core.Environment.get("html.classlist")?"native":"default",{"native":function(element,name){element.classList.add(name);
return name;
},"default":function(element,name){if(!this.has(element,name)){element.className+=(element.className?" ":"")+name;
}return name;
}}),addClasses:qx.lang.Object.select(qx.core.Environment.get("html.classlist")?"native":"default",{"native":function(element,classes){for(var i=0;i<classes.length;i++){element.classList.add(classes[i]);
}return element.className;
},"default":function(element,classes){var keys={};
var result;
var old=element.className;

if(old){result=old.split(this.__splitter);

for(var i=0,l=result.length;i<l;i++){keys[result[i]]=true;
}
for(var i=0,l=classes.length;i<l;i++){if(!keys[classes[i]]){result.push(classes[i]);
}}}else{result=classes;
}return element.className=result.join(" ");
}}),get:function(element){var className=element.className;

if(typeof className.split!=='function'){if(typeof className==='object'){if(qx.Bootstrap.getClass(className)=='SVGAnimatedString'){className=className.baseVal;
}else{className='';
}}
if(typeof className==='undefined'){className='';
}}return className;
},has:qx.lang.Object.select(qx.core.Environment.get("html.classlist")?"native":"default",{"native":function(element,name){return element.classList.contains(name);
},"default":function(element,name){var regexp=new RegExp("(^|\\s)"+name+"(\\s|$)");
return regexp.test(element.className);
}}),remove:qx.lang.Object.select(qx.core.Environment.get("html.classlist")?"native":"default",{"native":function(element,name){element.classList.remove(name);
return name;
},"default":function(element,name){var regexp=new RegExp("(^|\\s)"+name+"(\\s|$)");
element.className=element.className.replace(regexp,"$2");
return name;
}}),removeClasses:qx.lang.Object.select(qx.core.Environment.get("html.classlist")?"native":"default",{"native":function(element,classes){for(var i=0;i<classes.length;i++){element.classList.remove(classes[i]);
}return element.className;
},"default":function(element,classes){var reg=new RegExp("\\b"+classes.join("\\b|\\b")+"\\b","g");
return element.className=element.className.replace(reg,"").replace(this.__trim,"").replace(this.__splitter," ");
}}),replace:function(element,oldName,newName){this.remove(element,oldName);
return this.add(element,newName);
},toggle:qx.lang.Object.select(qx.core.Environment.get("html.classlist")?"native":"default",{"native":function(element,name,toggle){if(toggle===undefined){element.classList.toggle(name);
}else{toggle?this.add(element,name):this.remove(element,name);
}return name;
},"default":function(element,name,toggle){if(toggle==null){toggle=!this.has(element,name);
}toggle?this.add(element,name):this.remove(element,name);
return name;
}})}});
qx.Class.define("qx.bom.element.Clip",{statics:{compile:function(map){if(!map){return "clip:auto;";
}var left=map.left;
var top=map.top;
var width=map.width;
var height=map.height;
var right,bottom;

if(left==null){right=(width==null?"auto":width+"px");
left="auto";
}else{right=(width==null?"auto":left+width+"px");
left=left+"px";
}
if(top==null){bottom=(height==null?"auto":height+"px");
top="auto";
}else{bottom=(height==null?"auto":top+height+"px");
top=top+"px";
}return "clip:rect("+top+","+right+","+bottom+","+left+");";
},get:function(element,mode){var clip=qx.bom.element.Style.get(element,"clip",mode,false);
var left,top,width,height;
var right,bottom;

if(typeof clip==="string"&&clip!=="auto"&&clip!==""){clip=qx.lang.String.trim(clip);
if(/\((.*)\)/.test(clip)){var result=RegExp.$1;
if(/,/.test(result)){var split=result.split(",");
}else{var split=result.split(" ");
}top=qx.lang.String.trim(split[0]);
right=qx.lang.String.trim(split[1]);
bottom=qx.lang.String.trim(split[2]);
left=qx.lang.String.trim(split[3]);
if(left==="auto"){left=null;
}
if(top==="auto"){top=null;
}
if(right==="auto"){right=null;
}
if(bottom==="auto"){bottom=null;
}if(top!=null){top=parseInt(top,10);
}
if(right!=null){right=parseInt(right,10);
}
if(bottom!=null){bottom=parseInt(bottom,10);
}
if(left!=null){left=parseInt(left,10);
}if(right!=null&&left!=null){width=right-left;
}else if(right!=null){width=right;
}
if(bottom!=null&&top!=null){height=bottom-top;
}else if(bottom!=null){height=bottom;
}}else{throw new Error("Could not parse clip string: "+clip);
}}return {left:left||null,top:top||null,width:width||null,height:height||null};
},set:function(element,map){if(!map){element.style.clip="rect(auto,auto,auto,auto)";
return;
}var left=map.left;
var top=map.top;
var width=map.width;
var height=map.height;
var right,bottom;

if(left==null){right=(width==null?"auto":width+"px");
left="auto";
}else{right=(width==null?"auto":left+width+"px");
left=left+"px";
}
if(top==null){bottom=(height==null?"auto":height+"px");
top="auto";
}else{bottom=(height==null?"auto":top+height+"px");
top=top+"px";
}element.style.clip="rect("+top+","+right+","+bottom+","+left+")";
},reset:function(element){element.style.clip="rect(auto, auto, auto, auto)";
}}});
qx.Class.define("qx.bom.element.Overflow",{statics:{__scrollbarSize:null,getScrollbarWidth:function(){if(this.__scrollbarSize!==null){return this.__scrollbarSize;
}var Style=qx.bom.element.Style;
var getStyleSize=function(el,propertyName){return parseInt(Style.get(el,propertyName),10)||0;
};
var getBorderRight=function(el){return (Style.get(el,"borderRightStyle")=="none"?0:getStyleSize(el,"borderRightWidth"));
};
var getBorderLeft=function(el){return (Style.get(el,"borderLeftStyle")=="none"?0:getStyleSize(el,"borderLeftWidth"));
};
var getInsetRight=qx.core.Environment.select("engine.name",{"mshtml":function(el){if(Style.get(el,"overflowY")=="hidden"||el.clientWidth==0){return getBorderRight(el);
}return Math.max(0,el.offsetWidth-el.clientLeft-el.clientWidth);
},"default":function(el){if(el.clientWidth==0){var ov=Style.get(el,"overflow");
var sbv=(ov=="scroll"||ov=="-moz-scrollbars-vertical"?16:0);
return Math.max(0,getBorderRight(el)+sbv);
}return Math.max(0,(el.offsetWidth-el.clientWidth-getBorderLeft(el)));
}});
var getScrollBarSizeRight=function(el){return getInsetRight(el)-getBorderRight(el);
};
var t=document.createElement("div");
var s=t.style;
s.height=s.width="100px";
s.overflow="scroll";
document.body.appendChild(t);
var c=getScrollBarSizeRight(t);
this.__scrollbarSize=c?c:16;
document.body.removeChild(t);
return this.__scrollbarSize;
},_compile:qx.core.Environment.select("engine.name",{"gecko":parseFloat(qx.core.Environment.get("engine.version"))<
1.8?
function(prop,value){if(value=="hidden"){value="-moz-scrollbars-none";
}return "overflow:"+value+";";
}:
function(prop,value){return prop+":"+value+";";
},"opera":parseFloat(qx.core.Environment.get("engine.version"))<
9.5?
function(prop,value){return "overflow:"+value+";";
}:
function(prop,value){return prop+":"+value+";";
},"default":function(prop,value){return prop+":"+value+";";
}}),compileX:function(value){return this._compile("overflow-x",value);
},compileY:function(value){return this._compile("overflow-y",value);
},getX:qx.core.Environment.select("engine.name",{"gecko":parseFloat(qx.core.Environment.get("engine.version"))<
1.8?
function(element,mode){var overflow=qx.bom.element.Style.get(element,"overflow",mode,false);

if(overflow==="-moz-scrollbars-none"){overflow="hidden";
}return overflow;
}:
function(element,mode){return qx.bom.element.Style.get(element,"overflowX",mode,false);
},"opera":parseFloat(qx.core.Environment.get("engine.version"))<
9.5?
function(element,mode){return qx.bom.element.Style.get(element,"overflow",mode,false);
}:
function(element,mode){return qx.bom.element.Style.get(element,"overflowX",mode,false);
},"default":function(element,mode){return qx.bom.element.Style.get(element,"overflowX",mode,false);
}}),setX:qx.core.Environment.select("engine.name",{"gecko":parseFloat(qx.core.Environment.get("engine.version"))<
1.8?
function(element,value){if(value=="hidden"){value="-moz-scrollbars-none";
}element.style.overflow=value;
}:
function(element,value){element.style.overflowX=value;
},"opera":parseFloat(qx.core.Environment.get("engine.version"))<
9.5?
function(element,value){element.style.overflow=value;
}:
function(element,value){element.style.overflowX=value;
},"default":function(element,value){element.style.overflowX=value;
}}),resetX:qx.core.Environment.select("engine.name",{"gecko":parseFloat(qx.core.Environment.get("engine.version"))<
1.8?
function(element){element.style.overflow="";
}:
function(element){element.style.overflowX="";
},"opera":parseFloat(qx.core.Environment.get("engine.version"))<
9.5?
function(element,value){element.style.overflow="";
}:
function(element,value){element.style.overflowX="";
},"default":function(element){element.style.overflowX="";
}}),getY:qx.core.Environment.select("engine.name",{"gecko":parseFloat(qx.core.Environment.get("engine.version"))<
1.8?
function(element,mode){var overflow=qx.bom.element.Style.get(element,"overflow",mode,false);

if(overflow==="-moz-scrollbars-none"){overflow="hidden";
}return overflow;
}:
function(element,mode){return qx.bom.element.Style.get(element,"overflowY",mode,false);
},"opera":parseFloat(qx.core.Environment.get("engine.version"))<
9.5?
function(element,mode){return qx.bom.element.Style.get(element,"overflow",mode,false);
}:
function(element,mode){return qx.bom.element.Style.get(element,"overflowY",mode,false);
},"default":function(element,mode){return qx.bom.element.Style.get(element,"overflowY",mode,false);
}}),setY:qx.core.Environment.select("engine.name",{"gecko":parseFloat(qx.core.Environment.get("engine.version"))<
1.8?
function(element,value){if(value==="hidden"){value="-moz-scrollbars-none";
}element.style.overflow=value;
}:
function(element,value){element.style.overflowY=value;
},"opera":parseFloat(qx.core.Environment.get("engine.version"))<
9.5?
function(element,value){element.style.overflow=value;
}:
function(element,value){element.style.overflowY=value;
},"default":function(element,value){element.style.overflowY=value;
}}),resetY:qx.core.Environment.select("engine.name",{"gecko":parseFloat(qx.core.Environment.get("engine.version"))<
1.8?
function(element){element.style.overflow="";
}:
function(element){element.style.overflowY="";
},"opera":parseFloat(qx.core.Environment.get("engine.version"))<
9.5?
function(element,value){element.style.overflow="";
}:
function(element,value){element.style.overflowY="";
},"default":function(element){element.style.overflowY="";
}})}});
qx.Class.define("qx.bom.element.Opacity",{statics:{SUPPORT_CSS3_OPACITY:false,compile:qx.core.Environment.select("engine.name",{"mshtml":function(opacity){if(opacity>=1){opacity=1;
}
if(opacity<0.00001){opacity=0;
}
if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){return "opacity:"+opacity+";";
}else{return "zoom:1;filter:alpha(opacity="+(opacity*100)+");";
}},"gecko":function(opacity){if(opacity>=1){opacity=0.999999;
}
if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){return "-moz-opacity:"+opacity+";";
}else{return "opacity:"+opacity+";";
}},"default":function(opacity){if(opacity>=1){return "";
}return "opacity:"+opacity+";";
}}),set:qx.core.Environment.select("engine.name",{"mshtml":function(element,opacity){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){if(opacity>=1){opacity="";
}element.style.opacity=opacity;
}else{var filter=qx.bom.element.Style.get(element,"filter",qx.bom.element.Style.COMPUTED_MODE,false);

if(opacity>=1){opacity=1;
}
if(opacity<0.00001){opacity=0;
}if(!element.currentStyle||!element.currentStyle.hasLayout){element.style.zoom=1;
}element.style.filter=filter.replace(/alpha\([^\)]*\)/gi,"")+"alpha(opacity="+opacity*100+")";
}},"gecko":function(element,opacity){if(opacity>=1){opacity=0.999999;
}
if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){element.style.MozOpacity=opacity;
}else{element.style.opacity=opacity;
}},"default":function(element,opacity){if(opacity>=1){opacity="";
}element.style.opacity=opacity;
}}),reset:qx.core.Environment.select("engine.name",{"mshtml":function(element){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){element.style.opacity="";
}else{var filter=qx.bom.element.Style.get(element,"filter",qx.bom.element.Style.COMPUTED_MODE,false);
element.style.filter=filter.replace(/alpha\([^\)]*\)/gi,"");
}},"gecko":function(element){if(!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){element.style.MozOpacity="";
}else{element.style.opacity="";
}},"default":function(element){element.style.opacity="";
}}),get:qx.core.Environment.select("engine.name",{"mshtml":function(element,mode){if(qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY){var opacity=qx.bom.element.Style.get(element,"opacity",mode,false);

if(opacity!=null){return parseFloat(opacity);
}return 1.0;
}else{var filter=qx.bom.element.Style.get(element,"filter",mode,false);

if(filter){var opacity=filter.match(/alpha\(opacity=(.*)\)/);

if(opacity&&opacity[1]){return parseFloat(opacity[1])/100;
}}return 1.0;
}},"gecko":function(element,mode){var opacity=qx.bom.element.Style.get(element,!qx.bom.element.Opacity.SUPPORT_CSS3_OPACITY?"MozOpacity":"opacity",mode,false);

if(opacity==0.999999){opacity=1.0;
}
if(opacity!=null){return parseFloat(opacity);
}return 1.0;
},"default":function(element,mode){var opacity=qx.bom.element.Style.get(element,"opacity",mode,false);

if(opacity!=null){return parseFloat(opacity);
}return 1.0;
}})},defer:function(statics){statics.SUPPORT_CSS3_OPACITY=(typeof document.documentElement.style.opacity=="string");
}});
qx.Class.define("qx.bom.element.Cursor",{statics:{__map:qx.core.Environment.select("engine.name",{"mshtml":{"cursor":"hand","ew-resize":"e-resize","ns-resize":"n-resize","nesw-resize":"ne-resize","nwse-resize":"nw-resize"},"opera":{"col-resize":"e-resize","row-resize":"n-resize","ew-resize":"e-resize","ns-resize":"n-resize","nesw-resize":"ne-resize","nwse-resize":"nw-resize"},"default":{}}),compile:function(cursor){return "cursor:"+(this.__map[cursor]||cursor)+";";
},get:function(element,mode){return qx.bom.element.Style.get(element,"cursor",mode,false);
},set:function(element,value){element.style.cursor=this.__map[value]||value;
},reset:function(element){element.style.cursor="";
}}});
qx.Class.define("qx.bom.element.BoxSizing",{statics:{__styleProperties:qx.core.Environment.select("engine.name",{"mshtml":null,"webkit":["boxSizing","KhtmlBoxSizing","WebkitBoxSizing"],"gecko":["MozBoxSizing"],"opera":["boxSizing"]}),__cssProperties:qx.core.Environment.select("engine.name",{"mshtml":null,"webkit":["box-sizing","-khtml-box-sizing","-webkit-box-sizing"],"gecko":["-moz-box-sizing"],"opera":["box-sizing"]}),__nativeBorderBox:{tags:{button:true,select:true},types:{search:true,button:true,submit:true,reset:true,checkbox:true,radio:true}},__usesNativeBorderBox:function(element){var map=this.__nativeBorderBox;
return map.tags[element.tagName.toLowerCase()]||map.types[element.type];
},compile:qx.core.Environment.select("engine.name",{"mshtml":function(value){},"default":function(value){var props=this.__cssProperties;
var css="";

if(props){for(var i=0,l=props.length;i<l;i++){css+=props[i]+":"+value+";";
}}return css;
}}),get:qx.core.Environment.select("engine.name",{"mshtml":function(element){if(qx.bom.Document.isStandardMode(qx.dom.Node.getDocument(element))){if(!this.__usesNativeBorderBox(element)){return "content-box";
}}return "border-box";
},"default":function(element){var props=this.__styleProperties;
var value;

if(props){for(var i=0,l=props.length;i<l;i++){value=qx.bom.element.Style.get(element,props[i],null,false);

if(value!=null&&value!==""){return value;
}}}return "";
}}),set:qx.core.Environment.select("engine.name",{"mshtml":function(element,value){},"default":function(element,value){var props=this.__styleProperties;

if(props){for(var i=0,l=props.length;i<l;i++){element.style[props[i]]=value;
}}}}),reset:function(element){this.set(element,"");
}}});
qx.Class.define("qx.bom.element.Style",{statics:{__detectVendorProperties:function(){var vendorProperties=["appearance","userSelect","textOverflow","borderImage"];
var styleNames={};
var style=document.documentElement.style;
var prefixes=['Moz','Webkit','Khtml','O','Ms'];

for(var i=0,l=vendorProperties.length;i<l;i++){var propName=vendorProperties[i];
var key=propName;

if(style[propName]){styleNames[key]=propName;
continue;
}propName=qx.lang.String.firstUp(propName);

for(var j=0,pl=prefixes.length;j<pl;j++){var prefixed=prefixes[j]+propName;

if(typeof style[prefixed]=='string'){styleNames[key]=prefixed;
break;
}}}this.__styleNames=styleNames;
this.__styleNames["userModify"]=qx.core.Environment.select("engine.name",{"gecko":"MozUserModify","webkit":"WebkitUserModify","default":"userSelect"});
this.__cssNames={};

for(var key in styleNames){this.__cssNames[key]=this.__hyphenate(styleNames[key]);
}this.__styleNames["float"]=qx.core.Environment.select("engine.name",{"mshtml":"styleFloat","default":"cssFloat"});
},__mshtmlPixel:{width:"pixelWidth",height:"pixelHeight",left:"pixelLeft",right:"pixelRight",top:"pixelTop",bottom:"pixelBottom"},__special:{clip:qx.bom.element.Clip,cursor:qx.bom.element.Cursor,opacity:qx.bom.element.Opacity,boxSizing:qx.bom.element.BoxSizing,overflowX:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setX,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getX,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetX,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileX,qx.bom.element.Overflow)},overflowY:{set:qx.lang.Function.bind(qx.bom.element.Overflow.setY,qx.bom.element.Overflow),get:qx.lang.Function.bind(qx.bom.element.Overflow.getY,qx.bom.element.Overflow),reset:qx.lang.Function.bind(qx.bom.element.Overflow.resetY,qx.bom.element.Overflow),compile:qx.lang.Function.bind(qx.bom.element.Overflow.compileY,qx.bom.element.Overflow)}},compile:function(map){var html=[];
var special=this.__special;
var names=this.__cssNames;
var name,value;

for(name in map){value=map[name];

if(value==null){continue;
}name=names[name]||name;
if(special[name]){html.push(special[name].compile(value));
}else{html.push(this.__hyphenate(name),":",value,";");
}}return html.join("");
},__hyphens:{},__hyphenate:function(propName){var hyphens=this.__hyphens;
var prop=hyphens[propName];

if(!prop){prop=hyphens[propName]=qx.lang.String.hyphenate(propName);
}return prop;
},setCss:qx.core.Environment.select("engine.name",{"mshtml":function(element,value){element.style.cssText=value;
},"default":function(element,value){element.setAttribute("style",value);
}}),getCss:qx.core.Environment.select("engine.name",{"mshtml":function(element){return element.style.cssText.toLowerCase();
},"default":function(element){return element.getAttribute("style");
}}),isPropertySupported:function(propertyName){return (this.__special[propertyName]||this.__styleNames[propertyName]||propertyName in document.documentElement.style);
},COMPUTED_MODE:1,CASCADED_MODE:2,LOCAL_MODE:3,set:function(element,name,value,smart){name=this.__styleNames[name]||name;
if(smart!==false&&this.__special[name]){return this.__special[name].set(element,value);
}else{element.style[name]=value!==null?value:"";
}},setStyles:function(element,styles,smart){var styleNames=this.__styleNames;
var special=this.__special;
var style=element.style;

for(var key in styles){var value=styles[key];
var name=styleNames[key]||key;

if(value===undefined){if(smart!==false&&special[name]){special[name].reset(element);
}else{style[name]="";
}}else{if(smart!==false&&special[name]){special[name].set(element,value);
}else{style[name]=value!==null?value:"";
}}}},reset:function(element,name,smart){name=this.__styleNames[name]||name;
if(smart!==false&&this.__special[name]){return this.__special[name].reset(element);
}else{element.style[name]="";
}},get:qx.core.Environment.select("engine.name",{"mshtml":function(element,name,mode,smart){name=this.__styleNames[name]||name;
if(smart!==false&&this.__special[name]){return this.__special[name].get(element,mode);
}if(!element.currentStyle){return element.style[name]||"";
}switch(mode){case this.LOCAL_MODE:return element.style[name]||"";
case this.CASCADED_MODE:return element.currentStyle[name]||"";
default:var currentStyle=element.currentStyle[name]||"";
if(/^-?[\.\d]+(px)?$/i.test(currentStyle)){return currentStyle;
}var pixel=this.__mshtmlPixel[name];

if(pixel){var localStyle=element.style[name];
element.style[name]=currentStyle||0;
var value=element.style[pixel]+"px";
element.style[name]=localStyle;
return value;
}if(/^-?[\.\d]+(em|pt|%)?$/i.test(currentStyle)){throw new Error("Untranslated computed property value: "+name+". Only pixel values work well across different clients.");
}return currentStyle;
}},"default":function(element,name,mode,smart){name=this.__styleNames[name]||name;
if(smart!==false&&this.__special[name]){return this.__special[name].get(element,mode);
}switch(mode){case this.LOCAL_MODE:return element.style[name]||"";
case this.CASCADED_MODE:if(element.currentStyle){return element.currentStyle[name]||"";
}throw new Error("Cascaded styles are not supported in this browser!");
default:var doc=qx.dom.Node.getDocument(element);
var computed=doc.defaultView.getComputedStyle(element,null);
return computed?computed[name]:"";
}}})},defer:function(statics){statics.__detectVendorProperties();
}});
qx.Class.define("qx.bom.Document",{statics:{isQuirksMode:qx.core.Environment.select("engine.name",{"mshtml":function(win){if(qx.core.Environment.get("engine.version")>=8){return (win||window).document.documentMode===5;
}else{return (win||window).document.compatMode!=="CSS1Compat";
}},"webkit":function(win){if(document.compatMode===undefined){var el=(win||window).document.createElement("div");
el.style.cssText="position:absolute;width:0;height:0;width:1";
return el.style.width==="1px"?true:false;
}else{return (win||window).document.compatMode!=="CSS1Compat";
}},"default":function(win){return (win||window).document.compatMode!=="CSS1Compat";
}}),isStandardMode:function(win){return !this.isQuirksMode(win);
},getWidth:function(win){var doc=(win||window).document;
var view=qx.bom.Viewport.getWidth(win);
var scroll=this.isStandardMode(win)?doc.documentElement.scrollWidth:doc.body.scrollWidth;
return Math.max(scroll,view);
},getHeight:function(win){var doc=(win||window).document;
var view=qx.bom.Viewport.getHeight(win);
var scroll=this.isStandardMode(win)?doc.documentElement.scrollHeight:doc.body.scrollHeight;
return Math.max(scroll,view);
}}});
qx.Class.define("qx.bom.element.Background",{statics:{__tmpl:["background-image:url(",null,");","background-position:",null,";","background-repeat:",null,";"],__emptyStyles:{backgroundImage:null,backgroundPosition:null,backgroundRepeat:null},__computePosition:function(left,top){var engine=qx.core.Environment.get("engine.name");
var version=qx.core.Environment.get("engine.version");

if(engine=="gecko"&&version<1.9&&left==top&&typeof left=="number"){top+=0.01;
}
if(left){var leftCss=(typeof left=="number")?left+"px":left;
}else{leftCss="0";
}
if(top){var topCss=(typeof top=="number")?top+"px":top;
}else{topCss="0";
}return leftCss+" "+topCss;
},__isBase64EncodedImage:function(url){var String=qx.lang.String;
var firstPartOfUrl=url.substr(0,50);
return String.startsWith(firstPartOfUrl,"data:")&&String.contains(firstPartOfUrl,"base64");
},compile:function(source,repeat,left,top){var position=this.__computePosition(left,top);
var backgroundImageUrl=qx.util.ResourceManager.getInstance().toUri(source);

if(this.__isBase64EncodedImage(backgroundImageUrl)){backgroundImageUrl="'"+backgroundImageUrl+"'";
}var tmpl=this.__tmpl;
tmpl[1]=backgroundImageUrl;
tmpl[4]=position;
tmpl[7]=repeat;
return tmpl.join("");
},getStyles:function(source,repeat,left,top){if(!source){return this.__emptyStyles;
}var position=this.__computePosition(left,top);
var backgroundImageUrl=qx.util.ResourceManager.getInstance().toUri(source);
var backgroundImageCssString;

if(this.__isBase64EncodedImage(backgroundImageUrl)){backgroundImageCssString="url('"+backgroundImageUrl+"')";
}else{backgroundImageCssString="url("+backgroundImageUrl+")";
}var map={backgroundPosition:position,backgroundImage:backgroundImageCssString};

if(repeat!=null){map.backgroundRepeat=repeat;
}return map;
},set:function(element,source,repeat,left,top){var styles=this.getStyles(source,repeat,left,top);

for(var prop in styles){element.style[prop]=styles[prop];
}}}});
qx.Class.define("qx.util.ResourceManager",{extend:qx.core.Object,type:"singleton",construct:function(){this.base(arguments);
},statics:{__registry:qx.$$resources||{},__urlPrefix:{}},members:{has:function(id){return !!this.self(arguments).__registry[id];
},getData:function(id){return this.self(arguments).__registry[id]||null;
},getImageWidth:function(id){var entry=this.self(arguments).__registry[id];
return entry?entry[0]:null;
},getImageHeight:function(id){var entry=this.self(arguments).__registry[id];
return entry?entry[1]:null;
},getImageFormat:function(id){var entry=this.self(arguments).__registry[id];
return entry?entry[2]:null;
},isClippedImage:function(id){qx.log.Logger.deprecatedMethodWarning(arguments.callee,"isClippedImage has been superseded by getCombinedFormat");
var entry=this.self(arguments).__registry[id];
return entry&&entry.length>4&&typeof (entry[4])=="string"&&this.constructor.__registry[entry[4]];
},getCombinedFormat:function(id){var clippedtype="";
var entry=this.self(arguments).__registry[id];
var isclipped=entry&&entry.length>4&&typeof (entry[4])=="string"&&this.constructor.__registry[entry[4]];

if(isclipped){var combId=entry[4];
var combImg=this.constructor.__registry[combId];
clippedtype=combImg[2];
}return clippedtype;
},toUri:function(id){if(id==null){return id;
}var entry=this.self(arguments).__registry[id];

if(!entry){return id;
}
if(typeof entry==="string"){var lib=entry;
}else{var lib=entry[3];
if(!lib){return id;
}}var urlPrefix="";

if((qx.core.Environment.get("engine.name")=="mshtml")&&qx.core.Environment.get("io.ssl")){urlPrefix=this.self(arguments).__urlPrefix[lib];
}return urlPrefix+qx.$$libraries[lib].resourceUri+"/"+id;
},toDataUri:function(resid){var resentry=this.constructor.__registry[resid];
var combined=this.constructor.__registry[resentry[4]];
var uri;

if(combined){var resstruct=combined[4][resid];
uri="data:image/"+resstruct["type"]+";"+resstruct["encoding"]+","+resstruct["data"];
}else{this.debug("ResourceManager.toDataUri: falling back for",resid);
uri=this.toUri(resid);
}return uri;
}},defer:function(statics){if((qx.core.Environment.get("engine.name")=="mshtml")){if(qx.core.Environment.get("io.ssl")){for(var lib in qx.$$libraries){var resourceUri;

if(qx.$$libraries[lib].resourceUri){resourceUri=qx.$$libraries[lib].resourceUri;
}else{statics.__urlPrefix[lib]="";
continue;
}if(resourceUri.match(/^\/\//)!=null){statics.__urlPrefix[lib]=window.location.protocol;
}else if(resourceUri.match(/^\//)!=null){statics.__urlPrefix[lib]=window.location.protocol+"//"+window.location.host;
}else if(resourceUri.match(/^\.\//)!=null){var url=document.URL;
statics.__urlPrefix[lib]=url.substring(0,url.lastIndexOf("/")+1);
}else if(resourceUri.match(/^http/)!=null){statics.__urlPrefix[lib]="";
}else{var index=window.location.href.indexOf("?");
var href;

if(index==-1){href=window.location.href;
}else{href=window.location.href.substring(0,index);
}statics.__urlPrefix[lib]=href.substring(0,href.lastIndexOf("/")+1);
}}}}}});
qx.Class.define("qx.bom.element.Dimension",{statics:{getWidth:qx.core.Environment.select("engine.name",{"gecko":function(element){if(element.getBoundingClientRect){var rect=element.getBoundingClientRect();
return Math.round(rect.right)-Math.round(rect.left);
}else{return element.offsetWidth;
}},"default":function(element){return element.offsetWidth;
}}),getHeight:qx.core.Environment.select("engine.name",{"gecko":function(element){if(element.getBoundingClientRect){var rect=element.getBoundingClientRect();
return Math.round(rect.bottom)-Math.round(rect.top);
}else{return element.offsetHeight;
}},"default":function(element){return element.offsetHeight;
}}),getSize:function(element){return {width:this.getWidth(element),height:this.getHeight(element)};
},__hiddenScrollbars:{visible:true,hidden:true},getContentWidth:function(element){var Style=qx.bom.element.Style;
var overflowX=qx.bom.element.Overflow.getX(element);
var paddingLeft=parseInt(Style.get(element,"paddingLeft")||"0px",10);
var paddingRight=parseInt(Style.get(element,"paddingRight")||"0px",10);

if(this.__hiddenScrollbars[overflowX]){var contentWidth=element.clientWidth;

if((qx.core.Environment.get("engine.name")=="opera")){contentWidth=contentWidth-paddingLeft-paddingRight;
}else{if(qx.dom.Node.isBlockNode(element)){contentWidth=contentWidth-paddingLeft-paddingRight;
}}return contentWidth;
}else{if(element.clientWidth>=element.scrollWidth){return Math.max(element.clientWidth,element.scrollWidth)-paddingLeft-paddingRight;
}else{var width=element.scrollWidth-paddingLeft;
if(qx.core.Environment.get("engine.name")=="mshtml"&&qx.core.Environment.get("engine.version")>=6){width-=paddingRight;
}return width;
}}},getContentHeight:function(element){var Style=qx.bom.element.Style;
var overflowY=qx.bom.element.Overflow.getY(element);
var paddingTop=parseInt(Style.get(element,"paddingTop")||"0px",10);
var paddingBottom=parseInt(Style.get(element,"paddingBottom")||"0px",10);

if(this.__hiddenScrollbars[overflowY]){return element.clientHeight-paddingTop-paddingBottom;
}else{if(element.clientHeight>=element.scrollHeight){return Math.max(element.clientHeight,element.scrollHeight)-paddingTop-paddingBottom;
}else{var height=element.scrollHeight-paddingTop;
if(qx.core.Environment.get("engine.name")=="mshtml"&&qx.core.Environment.get("engine.version")==6){height-=paddingBottom;
}return height;
}}},getContentSize:function(element){return {width:this.getContentWidth(element),height:this.getContentHeight(element)};
}}});
qx.Class.define("qx.bom.element.Scroll",{statics:{intoViewX:function(element,stop,align){var parent=element.parentNode;
var doc=qx.dom.Node.getDocument(element);
var body=doc.body;
var parentLocation,parentLeft,parentRight;
var parentOuterWidth,parentClientWidth,parentScrollWidth;
var parentLeftBorder,parentRightBorder,parentScrollBarWidth;
var elementLocation,elementLeft,elementRight,elementWidth;
var leftOffset,rightOffset,scrollDiff;
var alignLeft=align==="left";
var alignRight=align==="right";
stop=stop?stop.parentNode:doc;
while(parent&&parent!=stop){if(parent.scrollWidth>parent.clientWidth&&(parent===body||qx.bom.element.Overflow.getY(parent)!="visible")){if(parent===body){parentLeft=parent.scrollLeft;
parentRight=parentLeft+qx.bom.Viewport.getWidth();
parentOuterWidth=qx.bom.Viewport.getWidth();
parentClientWidth=parent.clientWidth;
parentScrollWidth=parent.scrollWidth;
parentLeftBorder=0;
parentRightBorder=0;
parentScrollBarWidth=0;
}else{parentLocation=qx.bom.element.Location.get(parent);
parentLeft=parentLocation.left;
parentRight=parentLocation.right;
parentOuterWidth=parent.offsetWidth;
parentClientWidth=parent.clientWidth;
parentScrollWidth=parent.scrollWidth;
parentLeftBorder=parseInt(qx.bom.element.Style.get(parent,"borderLeftWidth"),10)||0;
parentRightBorder=parseInt(qx.bom.element.Style.get(parent,"borderRightWidth"),10)||0;
parentScrollBarWidth=parentOuterWidth-parentClientWidth-parentLeftBorder-parentRightBorder;
}elementLocation=qx.bom.element.Location.get(element);
elementLeft=elementLocation.left;
elementRight=elementLocation.right;
elementWidth=element.offsetWidth;
leftOffset=elementLeft-parentLeft-parentLeftBorder;
rightOffset=elementRight-parentRight+parentRightBorder;
scrollDiff=0;
if(alignLeft){scrollDiff=leftOffset;
}else if(alignRight){scrollDiff=rightOffset+parentScrollBarWidth;
}else if(leftOffset<0||elementWidth>parentClientWidth){scrollDiff=leftOffset;
}else if(rightOffset>0){scrollDiff=rightOffset+parentScrollBarWidth;
}parent.scrollLeft+=scrollDiff;
qx.event.Registration.fireNonBubblingEvent(parent,"scroll");
}
if(parent===body){break;
}parent=parent.parentNode;
}},intoViewY:function(element,stop,align){var parent=element.parentNode;
var doc=qx.dom.Node.getDocument(element);
var body=doc.body;
var parentLocation,parentTop,parentBottom;
var parentOuterHeight,parentClientHeight,parentScrollHeight;
var parentTopBorder,parentBottomBorder,parentScrollBarHeight;
var elementLocation,elementTop,elementBottom,elementHeight;
var topOffset,bottomOffset,scrollDiff;
var alignTop=align==="top";
var alignBottom=align==="bottom";
stop=stop?stop.parentNode:doc;
while(parent&&parent!=stop){if(parent.scrollHeight>parent.clientHeight&&(parent===body||qx.bom.element.Overflow.getY(parent)!="visible")){if(parent===body){parentTop=parent.scrollTop;
parentBottom=parentTop+qx.bom.Viewport.getHeight();
parentOuterHeight=qx.bom.Viewport.getHeight();
parentClientHeight=parent.clientHeight;
parentScrollHeight=parent.scrollHeight;
parentTopBorder=0;
parentBottomBorder=0;
parentScrollBarHeight=0;
}else{parentLocation=qx.bom.element.Location.get(parent);
parentTop=parentLocation.top;
parentBottom=parentLocation.bottom;
parentOuterHeight=parent.offsetHeight;
parentClientHeight=parent.clientHeight;
parentScrollHeight=parent.scrollHeight;
parentTopBorder=parseInt(qx.bom.element.Style.get(parent,"borderTopWidth"),10)||0;
parentBottomBorder=parseInt(qx.bom.element.Style.get(parent,"borderBottomWidth"),10)||0;
parentScrollBarHeight=parentOuterHeight-parentClientHeight-parentTopBorder-parentBottomBorder;
}elementLocation=qx.bom.element.Location.get(element);
elementTop=elementLocation.top;
elementBottom=elementLocation.bottom;
elementHeight=element.offsetHeight;
topOffset=elementTop-parentTop-parentTopBorder;
bottomOffset=elementBottom-parentBottom+parentBottomBorder;
scrollDiff=0;
if(alignTop){scrollDiff=topOffset;
}else if(alignBottom){scrollDiff=bottomOffset+parentScrollBarHeight;
}else if(topOffset<0||elementHeight>parentClientHeight){scrollDiff=topOffset;
}else if(bottomOffset>0){scrollDiff=bottomOffset+parentScrollBarHeight;
}parent.scrollTop+=scrollDiff;
qx.event.Registration.fireNonBubblingEvent(parent,"scroll");
}
if(parent===body){break;
}parent=parent.parentNode;
}},intoView:function(element,stop,alignX,alignY){this.intoViewX(element,stop,alignX);
this.intoViewY(element,stop,alignY);
}}});
qx.Class.define("qx.bom.element.Location",{statics:{__style:function(elem,style){return qx.bom.element.Style.get(elem,style,qx.bom.element.Style.COMPUTED_MODE,false);
},__num:function(elem,style){return parseInt(qx.bom.element.Style.get(elem,style,qx.bom.element.Style.COMPUTED_MODE,false),10)||0;
},__computeScroll:function(elem){var left=0,top=0;
if(elem.getBoundingClientRect&&qx.core.Environment.get("engine.name")!="opera"){var win=qx.dom.Node.getWindow(elem);
left-=qx.bom.Viewport.getScrollLeft(win);
top-=qx.bom.Viewport.getScrollTop(win);
}else{var body=qx.dom.Node.getDocument(elem).body;
elem=elem.parentNode;
while(elem&&elem!=body){left+=elem.scrollLeft;
top+=elem.scrollTop;
elem=elem.parentNode;
}}return {left:left,top:top};
},__computeBody:qx.core.Environment.select("engine.name",{"mshtml":function(elem){var doc=qx.dom.Node.getDocument(elem);
var body=doc.body;
var left=0;
var top=0;
left-=body.clientLeft+doc.documentElement.clientLeft;
top-=body.clientTop+doc.documentElement.clientTop;

if(!qx.core.Environment.get("browser.quirksmode")){left+=this.__num(body,"borderLeftWidth");
top+=this.__num(body,"borderTopWidth");
}return {left:left,top:top};
},"webkit":function(elem){var doc=qx.dom.Node.getDocument(elem);
var body=doc.body;
var left=body.offsetLeft;
var top=body.offsetTop;
if(parseFloat(qx.core.Environment.get("engine.version"))<530.17){left+=this.__num(body,"borderLeftWidth");
top+=this.__num(body,"borderTopWidth");
}return {left:left,top:top};
},"gecko":function(elem){var body=qx.dom.Node.getDocument(elem).body;
var left=body.offsetLeft;
var top=body.offsetTop;
if(parseFloat(qx.core.Environment.get("engine.version"))<1.9){left+=this.__num(body,"marginLeft");
top+=this.__num(body,"marginTop");
}if(qx.bom.element.BoxSizing.get(body)!=="border-box"){left+=this.__num(body,"borderLeftWidth");
top+=this.__num(body,"borderTopWidth");
}return {left:left,top:top};
},"default":function(elem){var body=qx.dom.Node.getDocument(elem).body;
var left=body.offsetLeft;
var top=body.offsetTop;
return {left:left,top:top};
}}),__computeOffset:qx.core.Environment.select("engine.name",{"mshtml|webkit":function(elem){var doc=qx.dom.Node.getDocument(elem);
if(elem.getBoundingClientRect){var rect=elem.getBoundingClientRect();
var left=rect.left;
var top=rect.top;
}else{var left=elem.offsetLeft;
var top=elem.offsetTop;
elem=elem.offsetParent;
var body=doc.body;
while(elem&&elem!=body){left+=elem.offsetLeft;
top+=elem.offsetTop;
left+=this.__num(elem,"borderLeftWidth");
top+=this.__num(elem,"borderTopWidth");
elem=elem.offsetParent;
}}return {left:left,top:top};
},"gecko":function(elem){if(elem.getBoundingClientRect){var rect=elem.getBoundingClientRect();
var left=Math.round(rect.left);
var top=Math.round(rect.top);
}else{var left=0;
var top=0;
var body=qx.dom.Node.getDocument(elem).body;
var box=qx.bom.element.BoxSizing;

if(box.get(elem)!=="border-box"){left-=this.__num(elem,"borderLeftWidth");
top-=this.__num(elem,"borderTopWidth");
}
while(elem&&elem!==body){left+=elem.offsetLeft;
top+=elem.offsetTop;
if(box.get(elem)!=="border-box"){left+=this.__num(elem,"borderLeftWidth");
top+=this.__num(elem,"borderTopWidth");
}if(elem.parentNode&&this.__style(elem.parentNode,"overflow")!="visible"){left+=this.__num(elem.parentNode,"borderLeftWidth");
top+=this.__num(elem.parentNode,"borderTopWidth");
}elem=elem.offsetParent;
}}return {left:left,top:top};
},"default":function(elem){var left=0;
var top=0;
var body=qx.dom.Node.getDocument(elem).body;
while(elem&&elem!==body){left+=elem.offsetLeft;
top+=elem.offsetTop;
elem=elem.offsetParent;
}return {left:left,top:top};
}}),get:function(elem,mode){if(elem.tagName=="BODY"){var location=this.__getBodyLocation(elem);
var left=location.left;
var top=location.top;
}else{var body=this.__computeBody(elem);
var offset=this.__computeOffset(elem);
var scroll=this.__computeScroll(elem);
var left=offset.left+body.left-scroll.left;
var top=offset.top+body.top-scroll.top;
}var right=left+elem.offsetWidth;
var bottom=top+elem.offsetHeight;

if(mode){if(mode=="padding"||mode=="scroll"){var overX=qx.bom.element.Overflow.getX(elem);

if(overX=="scroll"||overX=="auto"){right+=elem.scrollWidth-elem.offsetWidth+this.__num(elem,"borderLeftWidth")+this.__num(elem,"borderRightWidth");
}var overY=qx.bom.element.Overflow.getY(elem);

if(overY=="scroll"||overY=="auto"){bottom+=elem.scrollHeight-elem.offsetHeight+this.__num(elem,"borderTopWidth")+this.__num(elem,"borderBottomWidth");
}}
switch(mode){case "padding":left+=this.__num(elem,"paddingLeft");
top+=this.__num(elem,"paddingTop");
right-=this.__num(elem,"paddingRight");
bottom-=this.__num(elem,"paddingBottom");
case "scroll":left-=elem.scrollLeft;
top-=elem.scrollTop;
right-=elem.scrollLeft;
bottom-=elem.scrollTop;
case "border":left+=this.__num(elem,"borderLeftWidth");
top+=this.__num(elem,"borderTopWidth");
right-=this.__num(elem,"borderRightWidth");
bottom-=this.__num(elem,"borderBottomWidth");
break;
case "margin":left-=this.__num(elem,"marginLeft");
top-=this.__num(elem,"marginTop");
right+=this.__num(elem,"marginRight");
bottom+=this.__num(elem,"marginBottom");
break;
}}return {left:left,top:top,right:right,bottom:bottom};
},__getBodyLocation:qx.core.Environment.select("engine.name",{"default":function(body){var top=body.offsetTop+this.__num(body,"marginTop");
var left=body.offsetLeft+this.__num(body,"marginLeft");
return {left:left,top:top};
},"mshtml":function(body){var top=body.offsetTop;
var left=body.offsetLeft;

if(!((parseFloat(qx.core.Environment.get("engine.version"))<8||qx.core.Environment.get("browser.documentmode")<8)&&!qx.core.Environment.get("browser.quirksmode"))){top+=this.__num(body,"marginTop");
left+=this.__num(body,"marginLeft");
}return {left:left,top:top};
},"gecko":function(body){var top=body.offsetTop+this.__num(body,"marginTop")+this.__num(body,"borderLeftWidth");
var left=body.offsetLeft+this.__num(body,"marginLeft")+this.__num(body,"borderTopWidth");
return {left:left,top:top};
}}),getLeft:function(elem,mode){return this.get(elem,mode).left;
},getTop:function(elem,mode){return this.get(elem,mode).top;
},getRight:function(elem,mode){return this.get(elem,mode).right;
},getBottom:function(elem,mode){return this.get(elem,mode).bottom;
},getRelative:function(elem1,elem2,mode1,mode2){var loc1=this.get(elem1,mode1);
var loc2=this.get(elem2,mode2);
return {left:loc1.left-loc2.left,top:loc1.top-loc2.top,right:loc1.right-loc2.right,bottom:loc1.bottom-loc2.bottom};
},getPosition:function(elem){return this.getRelative(elem,this.getOffsetParent(elem));
},getOffsetParent:function(element){var offsetParent=element.offsetParent||document.body;
var Style=qx.bom.element.Style;

while(offsetParent&&(!/^body|html$/i.test(offsetParent.tagName)&&Style.get(offsetParent,"position")==="static")){offsetParent=offsetParent.offsetParent;
}return offsetParent;
}}});
qx.Class.define("qx.event.handler.Input",{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(){this.base(arguments);
this._onChangeCheckedWrapper=qx.lang.Function.listener(this._onChangeChecked,this);
this._onChangeValueWrapper=qx.lang.Function.listener(this._onChangeValue,this);
this._onInputWrapper=qx.lang.Function.listener(this._onInput,this);
this._onPropertyWrapper=qx.lang.Function.listener(this._onProperty,this);
if((qx.core.Environment.get("engine.name")=="opera")){this._onKeyDownWrapper=qx.lang.Function.listener(this._onKeyDown,this);
this._onKeyUpWrapper=qx.lang.Function.listener(this._onKeyUp,this);
this._onBlurWrapper=qx.lang.Function.listener(this._onBlur,this);
}},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{input:1,change:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false},members:{__enter:false,__onInputTimeoutId:null,__oldValue:null,__oldInputValue:null,canHandleEvent:function(target,type){var lower=target.tagName.toLowerCase();

if(type==="input"&&(lower==="input"||lower==="textarea")){return true;
}
if(type==="change"&&(lower==="input"||lower==="textarea"||lower==="select")){return true;
}return false;
},registerEvent:function(target,type,capture){if(qx.core.Environment.get("engine.name")=="mshtml"&&(qx.core.Environment.get("engine.version")<9||(qx.core.Environment.get("engine.version")>=9&&qx.core.Environment.get("browser.documentmode")<9))){if(!target.__inputHandlerAttached){var tag=target.tagName.toLowerCase();
var elementType=target.type;

if(elementType==="text"||elementType==="password"||tag==="textarea"||elementType==="checkbox"||elementType==="radio"){qx.bom.Event.addNativeListener(target,"propertychange",this._onPropertyWrapper);
}
if(elementType!=="checkbox"&&elementType!=="radio"){qx.bom.Event.addNativeListener(target,"change",this._onChangeValueWrapper);
}
if(elementType==="text"||elementType==="password"){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,target);
qx.bom.Event.addNativeListener(target,"keypress",this._onKeyPressWrapped);
}target.__inputHandlerAttached=true;
}}else{if(type==="input"){this.__registerInputListener(target);
}else if(type==="change"){if(target.type==="radio"||target.type==="checkbox"){qx.bom.Event.addNativeListener(target,"change",this._onChangeCheckedWrapper);
}else{qx.bom.Event.addNativeListener(target,"change",this._onChangeValueWrapper);
}if((qx.core.Environment.get("engine.name")=="opera")||(qx.core.Environment.get("engine.name")=="mshtml")){if(target.type==="text"||target.type==="password"){this._onKeyPressWrapped=qx.lang.Function.listener(this._onKeyPress,this,target);
qx.bom.Event.addNativeListener(target,"keypress",this._onKeyPressWrapped);
}}}}},__registerInputListener:qx.core.Environment.select("engine.name",{"mshtml":function(target){if(qx.core.Environment.get("engine.version")>=9&&qx.core.Environment.get("browser.documentmode")>=9){qx.bom.Event.addNativeListener(target,"input",this._onInputWrapper);

if(target.type==="text"||target.type==="password"){this._inputFixWrapper=qx.lang.Function.listener(this._inputFix,this,target);
qx.bom.Event.addNativeListener(target,"keyup",this._inputFixWrapper);
}}},"webkit":function(target){var tag=target.tagName.toLowerCase();
if(parseFloat(qx.core.Environment.get("engine.version"))<532&&tag=="textarea"){qx.bom.Event.addNativeListener(target,"keypress",this._onInputWrapper);
}qx.bom.Event.addNativeListener(target,"input",this._onInputWrapper);
},"opera":function(target){qx.bom.Event.addNativeListener(target,"keyup",this._onKeyUpWrapper);
qx.bom.Event.addNativeListener(target,"keydown",this._onKeyDownWrapper);
qx.bom.Event.addNativeListener(target,"blur",this._onBlurWrapper);
qx.bom.Event.addNativeListener(target,"input",this._onInputWrapper);
},"default":function(target){qx.bom.Event.addNativeListener(target,"input",this._onInputWrapper);
}}),unregisterEvent:function(target,type){if(qx.core.Environment.get("engine.name")=="mshtml"&&qx.core.Environment.get("engine.version")<9&&qx.core.Environment.get("browser.documentmode")<9){if(target.__inputHandlerAttached){var tag=target.tagName.toLowerCase();
var elementType=target.type;

if(elementType==="text"||elementType==="password"||tag==="textarea"||elementType==="checkbox"||elementType==="radio"){qx.bom.Event.removeNativeListener(target,"propertychange",this._onPropertyWrapper);
}
if(elementType!=="checkbox"&&elementType!=="radio"){qx.bom.Event.removeNativeListener(target,"change",this._onChangeValueWrapper);
}
if(elementType==="text"||elementType==="password"){qx.bom.Event.removeNativeListener(target,"keypress",this._onKeyPressWrapped);
}
try{delete target.__inputHandlerAttached;
}catch(ex){target.__inputHandlerAttached=null;
}}}else{if(type==="input"){this.__unregisterInputListener(target);
}else if(type==="change"){if(target.type==="radio"||target.type==="checkbox"){qx.bom.Event.removeNativeListener(target,"change",this._onChangeCheckedWrapper);
}else{qx.bom.Event.removeNativeListener(target,"change",this._onChangeValueWrapper);
}}
if((qx.core.Environment.get("engine.name")=="opera")||(qx.core.Environment.get("engine.name")=="mshtml")){if(target.type==="text"||target.type==="password"){qx.bom.Event.removeNativeListener(target,"keypress",this._onKeyPressWrapped);
}}}},__unregisterInputListener:qx.core.Environment.select("engine.name",{"mshtml":function(target){if(qx.core.Environment.get("engine.version")>=9&&qx.core.Environment.get("browser.documentmode")>=9){qx.bom.Event.removeNativeListener(target,"input",this._onInputWrapper);

if(target.type==="text"||target.type==="password"){qx.bom.Event.removeNativeListener(target,"keyup",this._inputFixWrapper);
}}},"webkit":function(target){var tag=target.tagName.toLowerCase();
if(parseFloat(qx.core.Environment.get("engine.version"))<532&&tag=="textarea"){qx.bom.Event.removeNativeListener(target,"keypress",this._onInputWrapper);
}qx.bom.Event.removeNativeListener(target,"input",this._onInputWrapper);
},"opera":function(target){qx.bom.Event.removeNativeListener(target,"keyup",this._onKeyUpWrapper);
qx.bom.Event.removeNativeListener(target,"keydown",this._onKeyDownWrapper);
qx.bom.Event.removeNativeListener(target,"blur",this._onBlurWrapper);
qx.bom.Event.removeNativeListener(target,"input",this._onInputWrapper);
},"default":function(target){qx.bom.Event.removeNativeListener(target,"input",this._onInputWrapper);
}}),_onKeyPress:qx.core.Environment.select("engine.name",{"mshtml|opera":function(e,target){if(e.keyCode===13){if(target.value!==this.__oldValue){this.__oldValue=target.value;
qx.event.Registration.fireEvent(target,"change",qx.event.type.Data,[target.value]);
}}},"default":null}),_inputFix:qx.core.Environment.select("engine.name",{"mshtml":function(e,target){if(e.keyCode===46||e.keyCode===8){if(target.value!==this.__oldInputValue){this.__oldInputValue=target.value;
qx.event.Registration.fireEvent(target,"input",qx.event.type.Data,[target.value]);
}}},"default":null}),_onKeyDown:qx.core.Environment.select("engine.name",{"opera":function(e){if(e.keyCode===13){this.__enter=true;
}},"default":null}),_onKeyUp:qx.core.Environment.select("engine.name",{"opera":function(e){if(e.keyCode===13){this.__enter=false;
}},"default":null}),_onBlur:qx.core.Environment.select("engine.name",{"opera":function(e){if(this.__onInputTimeoutId&&qx.core.Environment.get("browser.version")<10.6){window.clearTimeout(this.__onInputTimeoutId);
}},"default":null}),_onInput:qx.event.GlobalError.observeMethod(function(e){var target=qx.bom.Event.getTarget(e);
var tag=target.tagName.toLowerCase();
if(!this.__enter||tag!=="input"){if((qx.core.Environment.get("engine.name")=="opera")&&qx.core.Environment.get("browser.version")<10.6){this.__onInputTimeoutId=window.setTimeout(function(){qx.event.Registration.fireEvent(target,"input",qx.event.type.Data,[target.value]);
},0);
}else{qx.event.Registration.fireEvent(target,"input",qx.event.type.Data,[target.value]);
}}}),_onChangeValue:qx.event.GlobalError.observeMethod(function(e){var target=qx.bom.Event.getTarget(e);
var data=target.value;

if(target.type==="select-multiple"){var data=[];

for(var i=0,o=target.options,l=o.length;i<l;i++){if(o[i].selected){data.push(o[i].value);
}}}qx.event.Registration.fireEvent(target,"change",qx.event.type.Data,[data]);
}),_onChangeChecked:qx.event.GlobalError.observeMethod(function(e){var target=qx.bom.Event.getTarget(e);

if(target.type==="radio"){if(target.checked){qx.event.Registration.fireEvent(target,"change",qx.event.type.Data,[target.value]);
}}else{qx.event.Registration.fireEvent(target,"change",qx.event.type.Data,[target.checked]);
}}),_onProperty:qx.core.Environment.select("engine.name",{"mshtml":qx.event.GlobalError.observeMethod(function(e){var target=qx.bom.Event.getTarget(e);
var prop=e.propertyName;

if(prop==="value"&&(target.type==="text"||target.type==="password"||target.tagName.toLowerCase()==="textarea")){if(!target.$$inValueSet){qx.event.Registration.fireEvent(target,"input",qx.event.type.Data,[target.value]);
}}else if(prop==="checked"){if(target.type==="checkbox"){qx.event.Registration.fireEvent(target,"change",qx.event.type.Data,[target.checked]);
}else if(target.checked){qx.event.Registration.fireEvent(target,"change",qx.event.type.Data,[target.value]);
}}}),"default":function(){}})},defer:function(statics){qx.event.Registration.addHandler(statics);
}});
qx.Class.define("qx.event.handler.Iframe",{extend:qx.core.Object,implement:qx.event.IEventHandler,statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{load:1,navigate:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:false,onevent:qx.event.GlobalError.observeMethod(function(target){var currentUrl=qx.bom.Iframe.queryCurrentUrl(target);

if(currentUrl!==target.$$url){qx.event.Registration.fireEvent(target,"navigate",qx.event.type.Data,[currentUrl]);
target.$$url=currentUrl;
}qx.event.Registration.fireEvent(target,"load");
})},members:{canHandleEvent:function(target,type){return target.tagName.toLowerCase()==="iframe";
},registerEvent:function(target,type,capture){},unregisterEvent:function(target,type,capture){}},defer:function(statics){qx.event.Registration.addHandler(statics);
}});
qx.Class.define("qx.bom.Input",{statics:{__types:{text:1,textarea:1,select:1,checkbox:1,radio:1,password:1,hidden:1,submit:1,image:1,file:1,search:1,reset:1,button:1},create:function(type,attributes,win){var attributes=attributes?qx.lang.Object.clone(attributes):{};
var tag;

if(type==="textarea"||type==="select"){tag=type;
}else{tag="input";
attributes.type=type;
}return qx.bom.Element.create(tag,attributes,win);
},setValue:function(element,value){var tag=element.nodeName.toLowerCase();
var type=element.type;
var Array=qx.lang.Array;
var Type=qx.lang.Type;

if(typeof value==="number"){value+="";
}
if((type==="checkbox"||type==="radio")){if(Type.isArray(value)){element.checked=Array.contains(value,element.value);
}else{element.checked=element.value==value;
}}else if(tag==="select"){var isArray=Type.isArray(value);
var options=element.options;
var subel,subval;

for(var i=0,l=options.length;i<l;i++){subel=options[i];
subval=subel.getAttribute("value");

if(subval==null){subval=subel.text;
}subel.selected=isArray?Array.contains(value,subval):value==subval;
}
if(isArray&&value.length==0){element.selectedIndex=-1;
}}else if((type==="text"||type==="textarea")&&(qx.core.Environment.get("engine.name")=="mshtml")){element.$$inValueSet=true;
element.value=value;
element.$$inValueSet=null;
}else{element.value=value;
}},getValue:function(element){var tag=element.nodeName.toLowerCase();

if(tag==="option"){return (element.attributes.value||{}).specified?element.value:element.text;
}
if(tag==="select"){var index=element.selectedIndex;
if(index<0){return null;
}var values=[];
var options=element.options;
var one=element.type=="select-one";
var clazz=qx.bom.Input;
var value;
for(var i=one?index:0,max=one?index+1:options.length;i<max;i++){var option=options[i];

if(option.selected){value=clazz.getValue(option);
if(one){return value;
}values.push(value);
}}return values;
}else{return (element.value||"").replace(/\r/g,"");
}},setWrap:qx.core.Environment.select("engine.name",{"mshtml":function(element,wrap){var wrapValue=wrap?"soft":"off";
var styleValue=wrap?"auto":"";
element.wrap=wrapValue;
element.style.overflowY=styleValue;
},"gecko|webkit":function(element,wrap){var wrapValue=wrap?"soft":"off";
var styleValue=wrap?"":"auto";
element.setAttribute("wrap",wrapValue);
element.style.overflow=styleValue;
},"default":function(element,wrap){element.style.whiteSpace=wrap?"normal":"nowrap";
}})}});
qx.Class.define("qx.bom.Label",{statics:{__styles:{fontFamily:1,fontSize:1,fontWeight:1,fontStyle:1,lineHeight:1},__prepareText:function(){var el=this.__createMeasureElement(false);
document.body.insertBefore(el,document.body.firstChild);
return this._textElement=el;
},__prepareHtml:function(){var el=this.__createMeasureElement(true);
document.body.insertBefore(el,document.body.firstChild);
return this._htmlElement=el;
},__createMeasureElement:function(html){var el=qx.bom.Element.create("div");
var style=el.style;
style.width=style.height="auto";
style.left=style.top="-1000px";
style.visibility="hidden";
style.position="absolute";
style.overflow="visible";

if(html){style.whiteSpace="normal";
}else{style.whiteSpace="nowrap";

if(!qx.core.Environment.get("css.textoverflow")&&qx.core.Environment.get("html.xul")){var inner=document.createElementNS("http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul","label");
var style=inner.style;
style.padding="0";

for(var key in this.__styles){style[key]="inherit";
}el.appendChild(inner);
}}return el;
},__getStyles:function(html){var styles={};

if(html){styles.whiteSpace="normal";
}else if(!qx.core.Environment.get("css.textoverflow")&&qx.core.Environment.get("html.xul")){styles.display="block";
}else{styles.overflow="hidden";
styles.whiteSpace="nowrap";
styles.textOverflow="ellipsis";
if((qx.core.Environment.get("engine.name")=="opera")){styles.OTextOverflow="ellipsis";
}}return styles;
},create:function(content,html,win){if(!win){win=window;
}
if(html){var el=win.document.createElement("div");
el.useHtml=true;
}else if(!qx.core.Environment.get("css.textoverflow")&&qx.core.Environment.get("html.xul")){var el=win.document.createElement("div");
var xulel=win.document.createElementNS("http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul","label");
var style=xulel.style;
style.cursor="inherit";
style.color="inherit";
style.overflow="hidden";
style.maxWidth="100%";
style.padding="0";
for(var key in this.__styles){xulel.style[key]="inherit";
}xulel.setAttribute("crop","end");
el.appendChild(xulel);
}else{var el=win.document.createElement("div");
qx.bom.element.Style.setStyles(el,this.__getStyles(html));
}
if(content){this.setValue(el,content);
}return el;
},setValue:function(element,value){value=value||"";

if(element.useHtml){element.innerHTML=value;
}else if(!qx.core.Environment.get("css.textoverflow")&&qx.core.Environment.get("html.xul")){element.firstChild.setAttribute("value",value);
}else{qx.bom.element.Attribute.set(element,"text",value);
}},getValue:function(element){if(element.useHtml){return element.innerHTML;
}else if(!qx.core.Environment.get("css.textoverflow")&&qx.core.Environment.get("html.xul")){return element.firstChild.getAttribute("value")||"";
}else{return qx.bom.element.Attribute.get(element,"text");
}},getHtmlSize:function(content,styles,width){var element=this._htmlElement||this.__prepareHtml();
element.style.width=width!==undefined?width+"px":"auto";
element.innerHTML=content;
return this.__measureSize(element,styles);
},getTextSize:function(text,styles){var element=this._textElement||this.__prepareText();

if(!qx.core.Environment.get("css.textoverflow")&&qx.core.Environment.get("html.xul")){element.firstChild.setAttribute("value",text);
}else{qx.bom.element.Attribute.set(element,"text",text);
}return this.__measureSize(element,styles);
},__measureSize:function(element,styles){var keys=this.__styles;

if(!styles){styles={};
}
for(var key in keys){element.style[key]=styles[key]||"";
}var size=qx.bom.element.Dimension.getSize(element);
if((qx.core.Environment.get("engine.name")=="gecko")){size.width++;
}if((qx.core.Environment.get("engine.name")=="mshtml")&&parseFloat(qx.core.Environment.get("engine.version"))>=9){size.width++;
}return size;
}}});
qx.Class.define("qx.bom.Iframe",{statics:{DEFAULT_ATTRIBUTES:{onload:"qx.event.handler.Iframe.onevent(this)",frameBorder:0,frameSpacing:0,marginWidth:0,marginHeight:0,hspace:0,vspace:0,border:0,allowTransparency:true},create:function(attributes,win){var attributes=attributes?qx.lang.Object.clone(attributes):{};
var initValues=qx.bom.Iframe.DEFAULT_ATTRIBUTES;

for(var key in initValues){if(attributes[key]==null){attributes[key]=initValues[key];
}}return qx.bom.Element.create("iframe",attributes,win);
},getWindow:function(iframe){try{return iframe.contentWindow;
}catch(ex){return null;
}},getDocument:qx.core.Environment.select("engine.name",{"mshtml":function(iframe){try{var win=this.getWindow(iframe);
return win?win.document:null;
}catch(ex){return null;
}},"default":function(iframe){try{return iframe.contentDocument;
}catch(ex){return null;
}}}),getBody:function(iframe){try{var doc=this.getDocument(iframe);
return doc?doc.getElementsByTagName("body")[0]:null;
}catch(ex){return null;
}},setSource:function(iframe,source){try{if(this.getWindow(iframe)&&qx.dom.Hierarchy.isRendered(iframe)){try{if((qx.core.Environment.get("engine.name")=="webkit")&&qx.core.Environment.get("os.name")=="osx"){var contentWindow=this.getWindow(iframe);

if(contentWindow){contentWindow.stop();
}}this.getWindow(iframe).location.replace(source);
}catch(ex){iframe.src=source;
}}else{iframe.src=source;
}this.__rememberUrl(iframe);
}catch(ex){qx.log.Logger.warn("Iframe source could not be set!");
}},queryCurrentUrl:function(iframe){var doc=this.getDocument(iframe);

try{if(doc&&doc.location){return doc.location.href;
}}catch(ex){}return null;
},__rememberUrl:function(iframe){var callback=function(){qx.bom.Event.removeNativeListener(iframe,"load",callback);
iframe.$$url=qx.bom.Iframe.queryCurrentUrl(iframe);
};
qx.bom.Event.addNativeListener(iframe,"load",callback);
}}});
qx.Class.define("qx.dom.Element",{statics:{hasChild:function(parent,child){return child.parentNode===parent;
},hasChildren:function(element){return !!element.firstChild;
},hasChildElements:function(element){element=element.firstChild;

while(element){if(element.nodeType===1){return true;
}element=element.nextSibling;
}return false;
},getParentElement:function(element){return element.parentNode;
},isInDom:function(element,win){if(!win){win=window;
}var domElements=win.document.getElementsByTagName(element.nodeName);

for(var i=0,l=domElements.length;i<l;i++){if(domElements[i]===element){return true;
}}return false;
},insertAt:function(node,parent,index){var ref=parent.childNodes[index];

if(ref){parent.insertBefore(node,ref);
}else{parent.appendChild(node);
}return true;
},insertBegin:function(node,parent){if(parent.firstChild){this.insertBefore(node,parent.firstChild);
}else{parent.appendChild(node);
}},insertEnd:function(node,parent){parent.appendChild(node);
},insertBefore:function(node,ref){ref.parentNode.insertBefore(node,ref);
return true;
},insertAfter:function(node,ref){var parent=ref.parentNode;

if(ref==parent.lastChild){parent.appendChild(node);
}else{return this.insertBefore(node,ref.nextSibling);
}return true;
},remove:function(node){if(!node.parentNode){return false;
}node.parentNode.removeChild(node);
return true;
},removeChild:function(node,parent){if(node.parentNode!==parent){return false;
}parent.removeChild(node);
return true;
},removeChildAt:function(index,parent){var child=parent.childNodes[index];

if(!child){return false;
}parent.removeChild(child);
return true;
},replaceChild:function(newNode,oldNode){if(!oldNode.parentNode){return false;
}oldNode.parentNode.replaceChild(newNode,oldNode);
return true;
},replaceAt:function(newNode,index,parent){var oldNode=parent.childNodes[index];

if(!oldNode){return false;
}parent.replaceChild(newNode,oldNode);
return true;
}}});
qx.Class.define("qx.bom.Cookie",{statics:{get:function(key){var start=document.cookie.indexOf(key+"=");
var len=start+key.length+1;

if((!start)&&(key!=document.cookie.substring(0,key.length))){return null;
}
if(start==-1){return null;
}var end=document.cookie.indexOf(";",len);

if(end==-1){end=document.cookie.length;
}return unescape(document.cookie.substring(len,end));
},set:function(key,value,expires,path,domain,secure){var cookie=[key,"=",escape(value)];

if(expires){var today=new Date();
today.setTime(today.getTime());
cookie.push(";expires=",new Date(today.getTime()+(expires*1000*60*60*24)).toGMTString());
}
if(path){cookie.push(";path=",path);
}
if(domain){cookie.push(";domain=",domain);
}
if(secure){cookie.push(";secure");
}document.cookie=cookie.join("");
},del:function(key,path,domain){if(!qx.bom.Cookie.get(key)){return;
}var cookie=[key,"="];

if(path){cookie.push(";path=",path);
}
if(domain){cookie.push(";domain=",domain);
}cookie.push(";expires=Thu, 01-Jan-1970 00:00:01 GMT");
document.cookie=cookie.join("");
}}});
qx.Class.define("qx.bom.Blocker",{extend:qx.core.Object,construct:function(){this.base(arguments);
this.__init();
},members:{__iframeElement:null,__blockerElement:null,__blockedElement:null,__isActive:false,__defaultZIndex:10000,__defaultBlockerOpacity:0,__defaultBlockerColor:"transparent",block:function(element){if(!this.__isActive){this.__blockedElement=element;
var styles=this.__calculateStyles();
this.__styleAndInsertBlocker(styles);
this.__isActive=true;
}},unblock:function(){if(this.__isActive){this.__removeBlocker();
this.__isActive=false;
}},isBlocked:function(){return this.__isActive;
},getBlockerElement:function(){return this.__blockerElement;
},setBlockerColor:function(color){qx.bom.element.Style.set(this.__blockerElement,"backgroundColor",color);
},getBlockerColor:function(){return qx.bom.element.Style.get(this.__blockerElement,"backgroundColor");
},setBlockerOpacity:function(opacity){qx.bom.element.Opacity.set(this.__blockerElement,opacity);
},getBlockerOpacity:function(){return qx.bom.element.Opacity.get(this.__blockerElement);
},setBlockerZIndex:function(zIndex){qx.bom.element.Style.set(this.__blockerElement,"zIndex",zIndex);
},getBlockerZIndex:function(){return qx.bom.element.Style.get(this.__blockerElement,"zIndex");
},__init:function(){this.__setupBlockerElement();

if((qx.core.Environment.get("engine.name")=="mshtml")){this.__setupIframeElement();
}qx.event.Registration.addListener(window,"resize",this.__onResize,this);
},__setupBlockerElement:function(){this.__blockerElement=qx.bom.Element.create("div");
qx.bom.element.Style.setStyles(this.__blockerElement,{display:"block",opacity:this.__defaultBlockerOpacity,backgroundColor:this.__defaultBlockerColor});
this.setBlockerZIndex(this.__defaultZIndex);
},__setupIframeElement:function(){this.__iframeElement=qx.bom.Iframe.create();
qx.bom.element.Attribute.set(this.__iframeElement,"allowTransparency",false);
qx.bom.element.Attribute.set(this.__iframeElement,"src","javascript:false;");
qx.bom.element.Style.setStyles(this.__iframeElement,{display:"block",opacity:this.__defaultBlockerOpacity});
},__calculateStyles:function(){var styles={position:"absolute"};

if(this.__isWholeDocumentBlockTarget()){styles.left="0px";
styles.top="0px";
styles.right=null;
styles.bottom=null;
styles.width=qx.bom.Document.getWidth()+"px";
styles.height=qx.bom.Document.getHeight()+"px";
}else{styles.width=qx.bom.element.Dimension.getWidth(this.__blockedElement)+"px";
styles.height=qx.bom.element.Dimension.getHeight(this.__blockedElement)+"px";
styles.left=qx.bom.element.Location.getLeft(this.__blockedElement)+"px";
styles.top=qx.bom.element.Location.getTop(this.__blockedElement)+"px";
}return styles;
},__styleAndInsertBlocker:function(styles){var target=document.body;
qx.bom.element.Style.setStyles(this.__blockerElement,styles);
qx.dom.Element.insertEnd(this.__blockerElement,target);

if((qx.core.Environment.get("engine.name")=="mshtml")){styles.zIndex=this.getBlockerZIndex()-1;
qx.bom.element.Style.setStyles(this.__iframeElement,styles);
qx.dom.Element.insertEnd(this.__iframeElement,document.body);
}},__removeBlocker:function(){qx.dom.Element.remove(this.__blockerElement);

if((qx.core.Environment.get("engine.name")=="mshtml")){qx.dom.Element.remove(this.__iframeElement);
}},__onResize:function(e){if(this.__isWholeDocumentBlockTarget()){this.__resizeBlocker({width:"0px",height:"0px"});
qx.event.Timer.once(function(){var dimension={width:qx.bom.Document.getWidth()+"px",height:qx.bom.Document.getHeight()+"px"};
this.__resizeBlocker(dimension);
},this,0);
}},__resizeBlocker:function(dimension){qx.bom.element.Style.setStyles(this.__blockerElement,dimension);

if((qx.core.Environment.get("engine.name")=="mshtml")){qx.bom.element.Style.setStyles(this.__iframeElement,dimension);
}},__isWholeDocumentBlockTarget:function(){return (this.__blockedElement==null||qx.dom.Node.isWindow(this.__blockedElement)||qx.dom.Node.isDocument(this.__blockedElement));
}},destruct:function(){qx.event.Registration.removeListener(window,"resize",this.__onResize,this);
this.__iframeElement=this.__blockerElement=this.__blockedElement=null;
}});
qx.Class.define("qx.xml.Document",{statics:{DOMDOC:null,XMLHTTP:null,isXmlDocument:function(elem){if(elem.nodeType===9){return elem.documentElement.nodeName!=="HTML";
}else if(elem.ownerDocument){return this.isXmlDocument(elem.ownerDocument);
}else{return false;
}},create:qx.core.Environment.select("engine.name",{"mshtml":function(namespaceUri,qualifiedName){var obj=new ActiveXObject(this.DOMDOC);
if(this.DOMDOC=="MSXML2.DOMDocument.3.0"){obj.setProperty("SelectionLanguage","XPath");
}
if(qualifiedName){var str='<\?xml version="1.0" encoding="utf-8"?>\n<';
str+=qualifiedName;

if(namespaceUri){str+=" xmlns='"+namespaceUri+"'";
}str+=" />";
obj.loadXML(str);
}return obj;
},"default":function(namespaceUri,qualifiedName){return document.implementation.createDocument(namespaceUri||"",qualifiedName||"",null);
}}),fromString:qx.core.Environment.select("engine.name",{"mshtml":function(str){var dom=qx.xml.Document.create();
dom.loadXML(str);
return dom;
},"default":function(str){var parser=new DOMParser();
return parser.parseFromString(str,"text/xml");
}})},defer:function(statics){if((qx.core.Environment.get("engine.name")=="mshtml")){var domDoc=["MSXML2.DOMDocument.6.0","MSXML2.DOMDocument.3.0"];
var httpReq=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0"];

for(var i=0,l=domDoc.length;i<l;i++){try{new ActiveXObject(domDoc[i]);
new ActiveXObject(httpReq[i]);
}catch(ex){continue;
}statics.DOMDOC=domDoc[i];
statics.XMLHTTP=httpReq[i];
break;
}}}});
