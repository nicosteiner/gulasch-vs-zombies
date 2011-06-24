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

qx.$$packageData['51394810b572']={"locales":{},"resources":{},"translations":{}};
qx.Class.define("qx.event.handler.Keyboard",{extend:qx.core.Object,implement:qx.event.IEventHandler,construct:function(manager){this.base(arguments);
this.__manager=manager;
this.__window=manager.getWindow();
if((qx.core.Environment.get("engine.name")=="gecko")){this.__root=this.__window;
}else{this.__root=this.__window.document.documentElement;
}this.__lastUpDownType={};
this._initKeyObserver();
},statics:{PRIORITY:qx.event.Registration.PRIORITY_NORMAL,SUPPORTED_TYPES:{keyup:1,keydown:1,keypress:1,keyinput:1},TARGET_CHECK:qx.event.IEventHandler.TARGET_DOMNODE,IGNORE_CAN_HANDLE:true,isValidKeyIdentifier:function(keyIdentifier){if(this._identifierToKeyCodeMap[keyIdentifier]){return true;
}
if(keyIdentifier.length!=1){return false;
}
if(keyIdentifier>="0"&&keyIdentifier<="9"){return true;
}
if(keyIdentifier>="A"&&keyIdentifier<="Z"){return true;
}
switch(keyIdentifier){case "+":case "-":case "*":case "/":return true;
default:return false;
}},isPrintableKeyIdentifier:function(keyIdentifier){if(keyIdentifier==="Space"){return true;
}else{return this._identifierToKeyCodeMap[keyIdentifier]?false:true;
}}},members:{__onKeyUpDownWrapper:null,__manager:null,__window:null,__root:null,__lastUpDownType:null,__lastKeyCode:null,__inputListeners:null,__onKeyPressWrapper:null,canHandleEvent:function(target,type){},registerEvent:function(target,type,capture){},unregisterEvent:function(target,type,capture){},_fireInputEvent:function(domEvent,charCode){var target=this.__getEventTarget();
if(target&&target.offsetWidth!=0){var event=qx.event.Registration.createEvent("keyinput",qx.event.type.KeyInput,[domEvent,target,charCode]);
this.__manager.dispatchEvent(target,event);
}if(this.__window){qx.event.Registration.fireEvent(this.__window,"useraction",qx.event.type.Data,["keyinput"]);
}},_fireSequenceEvent:function(domEvent,type,keyIdentifier){var target=this.__getEventTarget();
var keyCode=domEvent.keyCode;
var event=qx.event.Registration.createEvent(type,qx.event.type.KeySequence,[domEvent,target,keyIdentifier]);
this.__manager.dispatchEvent(target,event);
if(qx.core.Environment.get("engine.name")=="mshtml"||qx.core.Environment.get("engine.name")=="webkit"){if(type=="keydown"&&event.getDefaultPrevented()){if(!this._isNonPrintableKeyCode(keyCode)&&!this._emulateKeyPress[keyCode]){this._fireSequenceEvent(domEvent,"keypress",keyIdentifier);
}}}if(this.__window){qx.event.Registration.fireEvent(this.__window,"useraction",qx.event.type.Data,[type]);
}},__getEventTarget:function(){var focusHandler=this.__manager.getHandler(qx.event.handler.Focus);
var target=focusHandler.getActive();
if(!target||target.offsetWidth==0){target=focusHandler.getFocus();
}if(!target||target.offsetWidth==0){target=this.__manager.getWindow().document.body;
}return target;
},_initKeyObserver:function(){this.__onKeyUpDownWrapper=qx.lang.Function.listener(this.__onKeyUpDown,this);
this.__onKeyPressWrapper=qx.lang.Function.listener(this.__onKeyPress,this);
var Event=qx.bom.Event;
Event.addNativeListener(this.__root,"keyup",this.__onKeyUpDownWrapper);
Event.addNativeListener(this.__root,"keydown",this.__onKeyUpDownWrapper);
Event.addNativeListener(this.__root,"keypress",this.__onKeyPressWrapper);
},_stopKeyObserver:function(){var Event=qx.bom.Event;
Event.removeNativeListener(this.__root,"keyup",this.__onKeyUpDownWrapper);
Event.removeNativeListener(this.__root,"keydown",this.__onKeyUpDownWrapper);
Event.removeNativeListener(this.__root,"keypress",this.__onKeyPressWrapper);

for(var key in (this.__inputListeners||{})){var listener=this.__inputListeners[key];
Event.removeNativeListener(listener.target,"keypress",listener.callback);
}delete (this.__inputListeners);
},__onKeyUpDown:qx.event.GlobalError.observeMethod(qx.core.Environment.select("engine.name",{"mshtml":function(domEvent){domEvent=window.event||domEvent;
var keyCode=domEvent.keyCode;
var charCode=0;
var type=domEvent.type;
if(!(this.__lastUpDownType[keyCode]=="keydown"&&type=="keydown")){this._idealKeyHandler(keyCode,charCode,type,domEvent);
}if(type=="keydown"){if(this._isNonPrintableKeyCode(keyCode)||this._emulateKeyPress[keyCode]){this._idealKeyHandler(keyCode,charCode,"keypress",domEvent);
}}this.__lastUpDownType[keyCode]=type;
},"gecko":function(domEvent){var keyCode=this._keyCodeFix[domEvent.keyCode]||domEvent.keyCode;
var charCode=0;
var type=domEvent.type;
if(qx.core.Environment.get("os.name")=="win"){var keyIdentifier=keyCode?this._keyCodeToIdentifier(keyCode):this._charCodeToIdentifier(charCode);

if(!(this.__lastUpDownType[keyIdentifier]=="keydown"&&type=="keydown")){this._idealKeyHandler(keyCode,charCode,type,domEvent);
}this.__lastUpDownType[keyIdentifier]=type;
}else{this._idealKeyHandler(keyCode,charCode,type,domEvent);
}this.__firefoxInputFix(domEvent.target,type,keyCode);
},"webkit":function(domEvent){var keyCode=0;
var charCode=0;
var type=domEvent.type;
if(parseFloat(qx.core.Environment.get("engine.version"))<525.13){if(type=="keyup"||type=="keydown"){keyCode=this._charCode2KeyCode[domEvent.charCode]||domEvent.keyCode;
}else{if(this._charCode2KeyCode[domEvent.charCode]){keyCode=this._charCode2KeyCode[domEvent.charCode];
}else{charCode=domEvent.charCode;
}}this._idealKeyHandler(keyCode,charCode,type,domEvent);
}else{keyCode=domEvent.keyCode;
this._idealKeyHandler(keyCode,charCode,type,domEvent);
if(type=="keydown"){if(this._isNonPrintableKeyCode(keyCode)||this._emulateKeyPress[keyCode]){this._idealKeyHandler(keyCode,charCode,"keypress",domEvent);
}}this.__lastUpDownType[keyCode]=type;
}},"opera":function(domEvent){this.__lastKeyCode=domEvent.keyCode;
this._idealKeyHandler(domEvent.keyCode,0,domEvent.type,domEvent);
}})),__firefoxInputFix:qx.core.Environment.select("engine.name",{"gecko":function(target,type,keyCode){if(type==="keydown"&&(keyCode==33||keyCode==34||keyCode==38||keyCode==40)&&target.type=="text"&&target.tagName.toLowerCase()==="input"&&target.getAttribute("autoComplete")!=="off"){if(!this.__inputListeners){this.__inputListeners={};
}var hash=qx.core.ObjectRegistry.toHashCode(target);

if(this.__inputListeners[hash]){return;
}var self=this;
this.__inputListeners[hash]={target:target,callback:function(domEvent){qx.bom.Event.stopPropagation(domEvent);
self.__onKeyPress(domEvent);
}};
var listener=qx.event.GlobalError.observeMethod(this.__inputListeners[hash].callback);
qx.bom.Event.addNativeListener(target,"keypress",listener);
}},"default":null}),__onKeyPress:qx.event.GlobalError.observeMethod(qx.core.Environment.select("engine.name",{"mshtml":function(domEvent){domEvent=window.event||domEvent;

if(this._charCode2KeyCode[domEvent.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[domEvent.keyCode],0,domEvent.type,domEvent);
}else{this._idealKeyHandler(0,domEvent.keyCode,domEvent.type,domEvent);
}},"gecko":function(domEvent){var keyCode=this._keyCodeFix[domEvent.keyCode]||domEvent.keyCode;
var charCode=domEvent.charCode;
var type=domEvent.type;
this._idealKeyHandler(keyCode,charCode,type,domEvent);
},"webkit":function(domEvent){if(parseFloat(qx.core.Environment.get("engine.version"))<525.13){var keyCode=0;
var charCode=0;
var type=domEvent.type;

if(type=="keyup"||type=="keydown"){keyCode=this._charCode2KeyCode[domEvent.charCode]||domEvent.keyCode;
}else{if(this._charCode2KeyCode[domEvent.charCode]){keyCode=this._charCode2KeyCode[domEvent.charCode];
}else{charCode=domEvent.charCode;
}}this._idealKeyHandler(keyCode,charCode,type,domEvent);
}else{if(this._charCode2KeyCode[domEvent.keyCode]){this._idealKeyHandler(this._charCode2KeyCode[domEvent.keyCode],0,domEvent.type,domEvent);
}else{this._idealKeyHandler(0,domEvent.keyCode,domEvent.type,domEvent);
}}},"opera":function(domEvent){var keyCode=domEvent.keyCode;
var type=domEvent.type;
if(keyCode!=this.__lastKeyCode){this._idealKeyHandler(0,this.__lastKeyCode,type,domEvent);
}else{if(this._keyCodeToIdentifierMap[domEvent.keyCode]){this._idealKeyHandler(domEvent.keyCode,0,domEvent.type,domEvent);
}else{this._idealKeyHandler(0,domEvent.keyCode,domEvent.type,domEvent);
}}}})),_idealKeyHandler:function(keyCode,charCode,eventType,domEvent){var keyIdentifier;
if(keyCode||(!keyCode&&!charCode)){keyIdentifier=this._keyCodeToIdentifier(keyCode);
this._fireSequenceEvent(domEvent,eventType,keyIdentifier);
}else{keyIdentifier=this._charCodeToIdentifier(charCode);
this._fireSequenceEvent(domEvent,"keypress",keyIdentifier);
this._fireInputEvent(domEvent,charCode);
}},_specialCharCodeMap:{8:"Backspace",9:"Tab",13:"Enter",27:"Escape",32:"Space"},_emulateKeyPress:qx.core.Environment.select("engine.name",{"mshtml":{8:true,9:true},"webkit":{8:true,9:true,27:true},"default":{}}),_keyCodeToIdentifierMap:{16:"Shift",17:"Control",18:"Alt",20:"CapsLock",224:"Meta",37:"Left",38:"Up",39:"Right",40:"Down",33:"PageUp",34:"PageDown",35:"End",36:"Home",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",44:"PrintScreen",145:"Scroll",19:"Pause",91:qx.core.Environment.get("os.name")=="osx"?"cmd":"Win",92:"Win",93:qx.core.Environment.get("os.name")=="osx"?"cmd":"Apps"},_numpadToCharCode:{96:"0".charCodeAt(0),97:"1".charCodeAt(0),98:"2".charCodeAt(0),99:"3".charCodeAt(0),100:"4".charCodeAt(0),101:"5".charCodeAt(0),102:"6".charCodeAt(0),103:"7".charCodeAt(0),104:"8".charCodeAt(0),105:"9".charCodeAt(0),106:"*".charCodeAt(0),107:"+".charCodeAt(0),109:"-".charCodeAt(0),110:",".charCodeAt(0),111:"/".charCodeAt(0)},_charCodeA:"A".charCodeAt(0),_charCodeZ:"Z".charCodeAt(0),_charCode0:"0".charCodeAt(0),_charCode9:"9".charCodeAt(0),_isNonPrintableKeyCode:function(keyCode){return this._keyCodeToIdentifierMap[keyCode]?true:false;
},_isIdentifiableKeyCode:function(keyCode){if(keyCode>=this._charCodeA&&keyCode<=this._charCodeZ){return true;
}if(keyCode>=this._charCode0&&keyCode<=this._charCode9){return true;
}if(this._specialCharCodeMap[keyCode]){return true;
}if(this._numpadToCharCode[keyCode]){return true;
}if(this._isNonPrintableKeyCode(keyCode)){return true;
}return false;
},_keyCodeToIdentifier:function(keyCode){if(this._isIdentifiableKeyCode(keyCode)){var numPadKeyCode=this._numpadToCharCode[keyCode];

if(numPadKeyCode){return String.fromCharCode(numPadKeyCode);
}return (this._keyCodeToIdentifierMap[keyCode]||this._specialCharCodeMap[keyCode]||String.fromCharCode(keyCode));
}else{return "Unidentified";
}},_charCodeToIdentifier:function(charCode){return this._specialCharCodeMap[charCode]||String.fromCharCode(charCode).toUpperCase();
},_identifierToKeyCode:function(keyIdentifier){return qx.event.handler.Keyboard._identifierToKeyCodeMap[keyIdentifier]||keyIdentifier.charCodeAt(0);
}},destruct:function(){this._stopKeyObserver();
this.__lastKeyCode=this.__manager=this.__window=this.__root=this.__lastUpDownType=null;
},defer:function(statics,members){qx.event.Registration.addHandler(statics);
if(!statics._identifierToKeyCodeMap){statics._identifierToKeyCodeMap={};

for(var key in members._keyCodeToIdentifierMap){statics._identifierToKeyCodeMap[members._keyCodeToIdentifierMap[key]]=parseInt(key,10);
}
for(var key in members._specialCharCodeMap){statics._identifierToKeyCodeMap[members._specialCharCodeMap[key]]=parseInt(key,10);
}}
if((qx.core.Environment.get("engine.name")=="mshtml")){members._charCode2KeyCode={13:13,27:27};
}else if((qx.core.Environment.get("engine.name")=="gecko")){members._keyCodeFix={12:members._identifierToKeyCode("NumLock")};
}else if((qx.core.Environment.get("engine.name")=="webkit")){if(parseFloat(qx.core.Environment.get("engine.version"))<525.13){members._charCode2KeyCode={63289:members._identifierToKeyCode("NumLock"),63276:members._identifierToKeyCode("PageUp"),63277:members._identifierToKeyCode("PageDown"),63275:members._identifierToKeyCode("End"),63273:members._identifierToKeyCode("Home"),63234:members._identifierToKeyCode("Left"),63232:members._identifierToKeyCode("Up"),63235:members._identifierToKeyCode("Right"),63233:members._identifierToKeyCode("Down"),63272:members._identifierToKeyCode("Delete"),63302:members._identifierToKeyCode("Insert"),63236:members._identifierToKeyCode("F1"),63237:members._identifierToKeyCode("F2"),63238:members._identifierToKeyCode("F3"),63239:members._identifierToKeyCode("F4"),63240:members._identifierToKeyCode("F5"),63241:members._identifierToKeyCode("F6"),63242:members._identifierToKeyCode("F7"),63243:members._identifierToKeyCode("F8"),63244:members._identifierToKeyCode("F9"),63245:members._identifierToKeyCode("F10"),63246:members._identifierToKeyCode("F11"),63247:members._identifierToKeyCode("F12"),63248:members._identifierToKeyCode("PrintScreen"),3:members._identifierToKeyCode("Enter"),12:members._identifierToKeyCode("NumLock"),13:members._identifierToKeyCode("Enter")};
}else{members._charCode2KeyCode={13:13,27:27};
}}}});
qx.Class.define("qx.event.type.KeyInput",{extend:qx.event.type.Dom,members:{init:function(domEvent,target,charCode){this.base(arguments,domEvent,target,null,true,true);
this._charCode=charCode;
return this;
},clone:function(embryo){var clone=this.base(arguments,embryo);
clone._charCode=this._charCode;
return clone;
},getCharCode:function(){return this._charCode;
},getChar:function(){return String.fromCharCode(this._charCode);
}}});
qx.Class.define("qx.event.type.KeySequence",{extend:qx.event.type.Dom,members:{init:function(domEvent,target,identifier){this.base(arguments,domEvent,target,null,true,true);
this._keyCode=domEvent.keyCode;
this._identifier=identifier;
return this;
},clone:function(embryo){var clone=this.base(arguments,embryo);
clone._keyCode=this._keyCode;
clone._identifier=this._identifier;
return clone;
},getKeyIdentifier:function(){return this._identifier;
},getKeyCode:function(){return this._keyCode;
},isPrintable:function(){return qx.event.handler.Keyboard.isPrintableKeyIdentifier(this._identifier);
}}});
