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

qx.$$packageData['1135ab0d6f0e']={"locales":{},"resources":{},"translations":{}};
qx.Bootstrap.define("qx.bom.request.Xhr",{construct:function(){this.__onNativeReadyStateChangeBound=qx.Bootstrap.bind(this.__onNativeReadyStateChange,this);
this.__initNativeXhr();
if(window.attachEvent){this.__onUnloadBound=qx.Bootstrap.bind(this.__onUnload,this);
window.attachEvent("onunload",this.__onUnloadBound);
}},statics:{UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4},members:{readyState:0,responseText:"",responseXML:null,status:0,statusText:"",open:function(method,url,async,user,password){if(this.__disposed){return;
}this.__send=false;
this.__abort=false;

if(typeof async=="undefined"){async=true;
}this.__async=async;
if(!this.__supportsManyRequests()&&this.readyState>qx.bom.request.Xhr.UNSENT){this.abort();
this.dispose();
this.__initNativeXhr();
}this.__nativeXhr.onreadystatechange=this.__onNativeReadyStateChangeBound;

try{this.__nativeXhr.open(method,url,async,user,password);
}catch(OpenFailed){if(window.XDomainRequest){this.readyState=4;
this.__nativeXhr=new XDomainRequest();
this.__nativeXhr.onerror=qx.Bootstrap.bind(function(){this.onreadystatechange();
this.onerror();
this.onloadend();
},this);
this.__nativeXhr.open(method,url,async,user,password);
return;
}window.setTimeout(qx.Bootstrap.bind(function(){this.readyState=4;
this.onreadystatechange();
this.onerror();
this.onloadend();
},this));
}if(qx.core.Environment.get("engine.name")==="gecko"&&parseInt(qx.core.Environment.get("engine.version"),10)<2&&!this.__async){this.readyState=qx.bom.request.Xhr.OPENED;
this.onreadystatechange();
}},setRequestHeader:function(header,value){if(this.__disposed){return;
}this.__nativeXhr.setRequestHeader(header,value);
},send:function(data){if(this.__disposed){return;
}data=typeof data=="undefined"?null:data;
if(this.__async){try{this.__nativeXhr.send(data);
this.__onNativeReadyStateChange();
}catch(NetworkError){}}else{this.__nativeXhr.send(data);
}if(qx.core.Environment.get("engine.name")==="gecko"&&!this.__async){this.__onNativeReadyStateChange();
}this.__send=true;
},abort:function(){if(this.__disposed){return;
}this.__abort=true;
this.__nativeXhr.abort();

if(this.__nativeXhr){this.readyState=this.__nativeXhr.readyState;
}},onreadystatechange:function(){},onload:function(){},onloadend:function(){},onerror:function(){},getResponseHeader:function(header){if(this.__disposed){return;
}return this.__nativeXhr.getResponseHeader(header);
},getAllResponseHeaders:function(){if(this.__disposed){return;
}return this.__nativeXhr.getAllResponseHeaders();
},dispose:function(){if(this.__disposed){return false;
}if(window.detachEvent){window.detachEvent("onunload",this.__onUnloadBound);
}try{this.__nativeXhr.onreadystatechange;
}catch(PropertiesNotAccessable){return;
}var noop=function(){};
this.__nativeXhr.onreadystatechange=noop;
this.__nativeXhr.onload=noop;
this.__nativeXhr.onerror=noop;
this.abort();
this.__nativeXhr=null;
this.__disposed=true;
return true;
},_getNativeXhr:function(){return this.__nativeXhr;
},_createNativeXhr:function(){var xhr=qx.core.Environment.get("io.xhr");

if(xhr==="xhr"){return new XMLHttpRequest();
}
if(xhr=="activex"){return new window.ActiveXObject("Microsoft.XMLHTTP");
}qx.log.Logger.error(this,"No XHR support available.");
},_getProtocol:function(){return window.location.protocol;
},__nativeXhr:null,__async:null,__onNativeReadyStateChangeBound:null,__onUnloadBound:null,__send:null,__abort:null,__disposed:null,__initNativeXhr:function(){this.__nativeXhr=this._createNativeXhr();
this.__nativeXhr.onreadystatechange=this.__onNativeReadyStateChangeBound;
this.__disposed=this.__send=this.__abort=false;
},__onNativeReadyStateChange:function(){var nxhr=this.__nativeXhr,propertiesReadable=true;
if(this.readyState==nxhr.readyState){return;
}this.readyState=nxhr.readyState;
if(this.readyState===qx.bom.request.Xhr.DONE&&this.__abort&&!this.__send){return;
}if(!this.__async&&(nxhr.readyState==2||nxhr.readyState==3)){return;
}this.status=0;
this.statusText=this.responseText="";
this.responseXML=null;

if(this.readyState>qx.bom.request.Xhr.OPENED){try{this.status=nxhr.status;
this.statusText=nxhr.statusText;
this.responseText=nxhr.responseText;
this.responseXML=nxhr.responseXML;
}catch(XhrPropertiesNotReadable){propertiesReadable=false;
}
if(propertiesReadable){this.__normalizeStatus();
this.__normalizeResponseXML();
}}this.onreadystatechange();
if(this.readyState===qx.bom.request.Xhr.DONE){this.statusText?this.onload():this.onerror();
this.onloadend();
}if(this.readyState==qx.bom.request.Xhr.DONE){if(nxhr){nxhr.onreadystatechange=function(){};
}}},__normalizeStatus:function(){var nxhr=this.__nativeXhr;
if(this._getProtocol()==="file:"&&this.status===0){this.status=200;
}if(this.status===1223){this.status=204;
}if(nxhr.readyState===qx.bom.request.Xhr.DONE&&this.status==0){this.status=304;
}},__normalizeResponseXML:function(){if(qx.core.Environment.get("engine.name")=="mshtml"&&(this.getResponseHeader("Content-Type")||"").match(/[^\/]+\/[^\+]+\+xml/)&&!this.responseXML.documentElement){var dom=new window.ActiveXObject("Microsoft.XMLDOM");
dom.async=false;
dom.validateOnParse=false;
dom.loadXML(this.responseText);
this.responseXML=dom;
}},__onUnload:function(){try{if(this){this.dispose();
}}catch(e){}},__supportsManyRequests:function(){var name=qx.core.Environment.get("engine.name");
var version=qx.core.Environment.get("engine.version");
return !(name=="mshtml"&&version<9||name=="gecko"&&version<3.5);
}}});
