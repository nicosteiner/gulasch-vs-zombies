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

qx.$$packageData['d3b9a3e89c6b']={"locales":{},"resources":{},"translations":{}};
qx.Class.define("qx.fx.Base",{extend:qx.core.Object,construct:function(element){this.base(arguments);
this.setQueue(qx.fx.queue.Manager.getInstance().getDefaultQueue());
this.__state=qx.fx.Base.EffectState.IDLE;
this.__element=element;
},events:{"setup":"qx.event.type.Event","update":"qx.event.type.Event","finish":"qx.event.type.Event"},properties:{duration:{init:0.5,check:"Number",apply:"_applyDuration"},fps:{init:100,check:"Number"},sync:{init:false,check:"Boolean"},from:{init:0,check:"Number"},to:{init:1,check:"Number"},delay:{init:0.0,check:"Number"},queue:{check:"Object",dereference:true},transition:{init:"linear",check:["linear","easeInQuad","easeOutQuad","sinodial","reverse","flicker","wobble","pulse","spring","none","full"]}},statics:{EffectState:{IDLE:'idle',PREPARING:'preparing',FINISHED:'finished',RUNNING:'running'}},members:{__state:null,__currentFrame:null,__startOn:null,__finishOn:null,__fromToDelta:null,__totalTime:null,__totalFrames:null,__position:null,__element:null,_getElement:function(){return this.__element;
},_setElement:function(element){this.__element=element;
},_applyDuration:function(value,old){},init:function(){this.__state=qx.fx.Base.EffectState.PREPARING;
this.__currentFrame=0;
this.__startOn=this.getDelay()*1000+(new Date().getTime());
this.__finishOn=this.__startOn+(this.getDuration()*1000);
this.__fromToDelta=this.getTo()-this.getFrom();
this.__totalTime=this.__finishOn-this.__startOn;
this.__totalFrames=this.getFps()*this.getDuration();
},beforeFinishInternal:function(){},beforeFinish:function(){},afterFinishInternal:function(){},afterFinish:function(){},beforeSetupInternal:function(){},beforeSetup:function(){},afterSetupInternal:function(){},afterSetup:function(){},beforeUpdateInternal:function(){},beforeUpdate:function(){},afterUpdateInternal:function(){},afterUpdate:function(){},beforeStartInternal:function(){},beforeStart:function(){},setup:function(){this.fireEvent("setup");
},update:function(position){},finish:function(){this.fireEvent("finish");
},start:function(){if(this.__state!=qx.fx.Base.EffectState.IDLE){return false;
}this.init();
this.beforeStartInternal();
this.beforeStart();

if(!this.getSync()){this.getQueue().add(this);
}return true;
},end:function(){this.render(1.0);
this.cancel();
this.beforeFinishInternal();
this.beforeFinish();
this.finish();
this.afterFinishInternal();
this.afterFinish();
},render:function(pos){if(this.__state==qx.fx.Base.EffectState.PREPARING){this.__state=qx.fx.Base.EffectState.RUNNING;
this.beforeSetupInternal();
this.beforeSetup();
this.setup();
this.afterSetupInternal();
this.afterSetup();
}
if(this.__state==qx.fx.Base.EffectState.RUNNING){this.__position=qx.fx.Transition.get(this.getTransition())(pos)*this.__fromToDelta+this.getFrom();
this.beforeUpdateInternal();
this.beforeUpdate();
this.update(this.__position);
this.afterUpdateInternal();
this.afterUpdate();

if(this.hasListener("update")){this.fireEvent("update");
}}},loop:function(timePos){if(timePos>=this.__startOn){if(timePos>=this.__finishOn){this.end();
}var pos=(timePos-this.__startOn)/this.__totalTime;
var frame=Math.round(pos*this.__totalFrames);
if(frame>this.__currentFrame){this.render(pos);
this.__currentFrame=frame;
}}},cancel:function(){if(!this.getSync()){this.getQueue().remove(this);
}this.__state=qx.fx.Base.EffectState.IDLE;
},resetState:function(){this.__state=qx.fx.Base.EffectState.IDLE;
}},destruct:function(){this.__element=this.__state=null;
}});
qx.Class.define("qx.fx.effect.core.Fade",{extend:qx.fx.Base,properties:{modifyDisplay:{init:true,check:"Boolean"},from:{init:1.0,refine:true},to:{init:0.0,refine:true}},members:{update:function(position){this.base(arguments);

if(qx.core.Environment.get("engine.name")=="mshtml"&&position==1){qx.bom.element.Opacity.reset(this._getElement());
}else{qx.bom.element.Opacity.set(this._getElement(),position);
}},beforeSetup:function(){this.base(arguments);
var element=this._getElement();

if((this.getModifyDisplay())&&(this.getTo()>0)){qx.bom.element.Style.set(element,"display","block");
}qx.bom.element.Opacity.set(element,this.getFrom());
},afterFinishInternal:function(){if((this.getModifyDisplay())&&(this.getTo()==0)){qx.bom.element.Style.set(this._getElement(),"display","none");
}}}});
qx.Class.define("qx.fx.queue.Manager",{extend:qx.core.Object,type:"singleton",construct:function(){this.base(arguments);
this.__instances={};
},members:{__instances:null,getQueue:function(queueName){if(typeof (this.__instances[queueName])=="object"){return this.__instances[queueName];
}else{return this.__instances[queueName]=new qx.fx.queue.Queue;
}},getDefaultQueue:function(){return this.getQueue("__default");
}},destruct:function(){this._disposeMap("__instances");
}});
qx.Class.define("qx.fx.queue.Queue",{extend:qx.core.Object,construct:function(){this.base(arguments);
this.__effects=[];
},properties:{limit:{init:Infinity,check:"Number"}},members:{__interval:null,__effects:null,add:function(effect){var timestamp=new Date().getTime();
effect._startOn+=timestamp;
effect._finishOn+=timestamp;

if(this.__effects.length<this.getLimit()){this.__effects.push(effect);
}else{effect.resetState();
}
if(!this.__interval){this.__interval=qx.lang.Function.periodical(this.loop,15,this);
}},remove:function(effect){qx.lang.Array.remove(this.__effects,effect);

if(this.__effects.length==0){window.clearInterval(this.__interval);
delete this.__interval;
}},loop:function(){var timePos=new Date().getTime();

for(var i=0,len=this.__effects.length;i<len;i++){this.__effects[i]&&this.__effects[i].loop(timePos);
}}},destruct:function(){this.__effects=null;
}});
qx.Class.define("qx.fx.Transition",{type:"static",statics:{get:function(functionName){return qx.fx.Transition[functionName]||false;
},linear:function(pos){return pos;
},easeInQuad:function(pos){return Math.pow(2,10*(pos-1));
},easeOutQuad:function(pos){return (-Math.pow(2,-10*pos)+1);
},sinodial:function(pos){return (-Math.cos(pos*Math.PI)/2)+0.5;
},reverse:function(pos){return 1-pos;
},flicker:function(pos){var pos=((-Math.cos(pos*Math.PI)/4)+0.75)+Math.random()/4;
return pos>1?1:pos;
},wobble:function(pos){return (-Math.cos(pos*Math.PI*(9*pos))/2)+0.5;
},pulse:function(pos,pulses){pulses=(typeof (pulses)=="Number")?pulses:5;
return (Math.round((pos%(1/pulses))*pulses)==0?Math.floor((pos*pulses*2)-(pos*pulses*2)):1-Math.floor((pos*pulses*2)-(pos*pulses*2)));
},spring:function(pos){return 1-(Math.cos(pos*4.5*Math.PI)*Math.exp(-pos*6));
},none:function(pos){return 0;
},full:function(pos){return 1;
}}});
qx.Class.define("qx.fx.effect.combination.ColorFlow",{extend:qx.fx.Base,construct:function(element){this.base(arguments,element);
this.__highlightEffects=[new qx.fx.effect.core.Highlight(element),new qx.fx.effect.core.Highlight(element)];
},properties:{startColor:{init:"#ffffff",check:"Color"},endColor:{init:"#ffffaa",check:"Color"},forwardTransition:{init:"linear",check:["linear","easeInQuad","easeOutQuad","sinodial","reverse","flicker","wobble","pulse","spring","none","full"]},backwardTransition:{init:"linear",check:["linear","easeInQuad","easeOutQuad","sinodial","reverse","flicker","wobble","pulse","spring","none","full"]},forwardDuration:{init:1.0,check:"Number"},backwardDuration:{init:1.0,check:"Number"},delayBetween:{init:0.3,check:"Number"},restoreBackground:{init:true,check:"Boolean"},keepBackgroundImage:{init:false,check:"Boolean"}},members:{__oldStyle:null,__highlightEffects:null,start:function(){if(!this.base(arguments)){return;
}var element=this._getElement();
this.setDuration(this.getForwardDuration()+this.getDelayBetween()+this.getBackwardDuration());
this.__oldStyle={backgroundImage:qx.bom.element.Style.get(element,"backgroundImage"),backgroundColor:qx.bom.element.Style.get(element,"backgroundColor")};
this.__highlightEffects[0].set({startColor:this.getStartColor(),endColor:this.getEndColor(),duration:this.getForwardDuration(),transition:this.getForwardTransition(),restoreBackground:false,keepBackgroundImage:this.getKeepBackgroundImage()});
this.__highlightEffects[1].set({startColor:this.getEndColor(),endColor:this.getStartColor(),duration:this.getBackwardDuration(),transition:this.getBackwardTransition(),restoreBackground:this.getRestoreBackground(),keepBackgroundImage:this.getKeepBackgroundImage(),delay:this.getDelayBetween()});
var self=this;
this.__highlightEffects[0].afterFinishInternal=function(){self.__highlightEffects[1].start();
};
this.__highlightEffects[0].start();
}},destruct:function(){this._disposeArray("__highlightEffects");
}});
qx.Class.define("qx.fx.effect.combination.Pulsate",{extend:qx.fx.Base,construct:function(element){this.base(arguments,element);
var duration=this.getDuration()/6;
var counter=0;
this.__fadeEffects=[new qx.fx.effect.core.Fade(element),new qx.fx.effect.core.Fade(element),new qx.fx.effect.core.Fade(element),new qx.fx.effect.core.Fade(element),new qx.fx.effect.core.Fade(element),new qx.fx.effect.core.Fade(element)];

for(var i=0,l=this.__fadeEffects.length;i<l;i++){this.__fadeEffects[i].set({duration:duration,to:((counter%2)!=0)?1:0,from:((counter%2)!=0)?0:1,transition:"sinodial",modifyDisplay:false});
counter++;
}},properties:{duration:{init:2,refine:true}},members:{__oldValue:null,__fadeEffects:null,__notRunEffects:null,beforeSetup:function(){this.__oldValue=qx.bom.element.Style.get(this._getElement(),"opacity");
},start:function(){if(!this.base(arguments)){return;
}this.__notRunEffects=[];
var counter=0;
var self=this;

for(var i=0,l=this.__fadeEffects.length;i<l;i++){this.__fadeEffects[i].id=counter;
this.__notRunEffects.push(this.__fadeEffects[i]);

if(counter<5){this.__fadeEffects[i].afterFinishInternal=function(){qx.lang.Array.remove(self.__notRunEffects,this);
self.__fadeEffects[this.id+1].start();
};
}counter++;
}this.__fadeEffects[0].start();
},afterFinish:function(){qx.bom.element.Style.set(this._getElement(),"opacity",this.__oldValue);
},_applyDuration:function(value,old){var effectDuration=value/6;

for(var i=0,l=this.__fadeEffects.length;i<l;i++){this.__fadeEffects[i].set({duration:effectDuration});
}},cancel:function(){for(var i=0,l=this.__notRunEffects.length;i<l;i++){this.__notRunEffects[i].cancel();
}this.base(arguments);
}},destruct:function(){this._disposeArray("__fadeEffects");
this._disposeArray("__notRunEffects");
}});
qx.Class.define("qx.fx.effect.combination.Shake",{extend:qx.fx.Base,construct:function(element){this.base(arguments,element);
this.__effects=[new qx.fx.effect.core.Move(element),new qx.fx.effect.core.Move(element),new qx.fx.effect.core.Move(element),new qx.fx.effect.core.Move(element),new qx.fx.effect.core.Move(element),new qx.fx.effect.core.Move(element)];
},properties:{direction:{init:"horizontal",check:["horizontal","vertical"]},duration:{init:0.5,refine:true},distance:{init:20,check:"Number"}},members:{__effects:null,start:function(){if(!this.base(arguments)){return;
}var distance=parseFloat(this.getDistance());
var split=parseFloat(this.getDuration())/10.0;

if(this.getDirection()=="horizontal"){this.__effects[0].set({x:distance,y:0,duration:split});
this.__effects[1].set({x:-distance*2,y:0,duration:split*2});
this.__effects[2].set({x:distance*2,y:0,duration:split*2});
this.__effects[3].set({x:-distance*2,y:0,duration:split*2});
this.__effects[4].set({x:distance*2,y:0,duration:split*2});
this.__effects[5].set({x:-distance,y:0,duration:split*2});
}else if(this.getDirection()=="vertical"){this.__effects[0].set({y:distance,x:0,duration:split});
this.__effects[1].set({y:-distance*2,x:0,duration:split*2});
this.__effects[2].set({y:distance*2,x:0,duration:split*2});
this.__effects[3].set({y:-distance*2,x:0,duration:split*2});
this.__effects[4].set({y:distance*2,x:0,duration:split*2});
this.__effects[5].set({y:-distance,x:0,duration:split*2});
}var effects=this.__effects;

for(var i=0,len=this.__effects.length;i<len;i++){this.__effects[i].id=i;

if(i<5){this.__effects[i].afterFinishInternal=function(){effects[this.id+1].start();
};
}}this.__effects[0].start();
}},destruct:function(){this._disposeArray("__effects");
}});
qx.Class.define("qx.fx.effect.combination.Switch",{extend:qx.fx.Base,construct:function(element){this.base(arguments,element);
this.setTransition("flicker");
var scaleEffect=this.__scaleEffect=new qx.fx.effect.core.Scale(element);
this.__scaleEffect.beforeSetup=function(){qx.bom.element.Style.set(element,"overflow","hidden");
};
this.__appearEffect=new qx.fx.effect.core.Fade(element);
this.__appearEffect.afterFinishInternal=function(){scaleEffect.start();
};
},properties:{duration:{init:0.5,refine:true},from:{init:0.0,refine:true},to:{init:1.0,refine:true},modifyDisplay:{init:true,check:"Boolean"},mode:{init:"off",check:["off"]}},members:{__scaleEffect:null,__appearEffect:null,setup:function(){this.base(arguments);
var element=this._getElement();
var oldOverflow=qx.bom.element.Style.get(element,"overflow");
this.__scaleEffect.afterFinishInternal=function(){qx.bom.element.Style.set(element,"overflow",oldOverflow);
};
},afterFinish:function(){if(this.getModifyDisplay()&&(this.getMode()=="off")){qx.bom.element.Style.set(this._getElement(),"display","none");
}},start:function(){if(!this.base(arguments)){return;
}
if(this.getMode()=="off"){this.__scaleEffect.set({scaleTo:1.0,duration:this.getDuration()/2,scaleFromCenter:true,scaleX:false,scaleContent:false,restoreAfterFinish:true});
this.__appearEffect.set({duration:this.getDuration()/2,from:this.getFrom(),to:1});
}else{}this.__appearEffect.start();
},_applyDuration:function(value,old){this.__scaleEffect.setDuration(value/2);
this.__appearEffect.setDuration(value/2);
}},destruct:function(){this._disposeObjects("__appearEffect","__scaleEffect");
}});
qx.Class.define("qx.fx.effect.combination.Grow",{extend:qx.fx.Base,construct:function(element){this.base(arguments,element);
this.__moveEffect=new qx.fx.effect.core.Move(element);
this.__scaleEffect=new qx.fx.effect.core.Scale(element);
this.__mainEffect=new qx.fx.effect.core.Parallel(this.__moveEffect,this.__scaleEffect);
},properties:{direction:{init:"center",check:["top-left","top-right","bottom-left","bottom-right","center"]},scaleTransition:{init:"sinodial",check:["linear","easeInQuad","easeOutQuad","sinodial","reverse","flicker","wobble","pulse","spring","none","full"]},moveTransition:{init:"sinodial",check:["linear","easeInQuad","easeOutQuad","sinodial","reverse","flicker","wobble","pulse","spring","none","full"]}},members:{__scaleEffect:null,__moveEffect:null,__mainEffect:null,setup:function(){this.base(arguments);
},start:function(){if(!this.base(arguments)){return;
}var element=this._getElement();
qx.bom.element.Style.set(element,"display","block");
qx.bom.element.Style.set(element,"overflow","hidden");
var initialMoveX,initialMoveY;
var moveX,moveY;
var oldStyle={top:qx.bom.element.Location.getTop(element),left:qx.bom.element.Location.getLeft(element),width:qx.bom.element.Dimension.getContentWidth(element),height:qx.bom.element.Dimension.getContentHeight(element),overflow:"visible"};
this.__scaleEffect.afterFinishInternal=function(){var value;
var element=this._getElement();

for(var property in oldStyle){value=oldStyle[property];

if(property!="overflow"){value+="px";
}qx.bom.element.Style.set(element,property,value);
}};

switch(this.getDirection()){case 'top-left':initialMoveX=initialMoveY=moveX=moveY=0;
break;
case 'top-right':initialMoveX=oldStyle.width;
initialMoveY=moveY=0;
moveX=-oldStyle.width;
break;
case 'bottom-left':initialMoveX=moveX=0;
initialMoveY=oldStyle.height;
moveY=-oldStyle.height;
break;
case 'bottom-right':initialMoveX=oldStyle.width;
initialMoveY=oldStyle.height;
moveX=-oldStyle.width;
moveY=-oldStyle.height;
break;
case 'center':initialMoveX=Math.round(oldStyle.width/2);
initialMoveY=Math.round(oldStyle.height/2);
moveX=-Math.round(oldStyle.width/2);
moveY=-Math.round(oldStyle.height/2);
break;
}this.__moveEffect.set({x:moveX,y:moveY,sync:true,transition:this.getMoveTransition()});
this.__scaleEffect.set({scaleTo:100,sync:true,scaleFrom:0,scaleFromCenter:false,transition:this.getScaleTransition(),alternateDimensions:[oldStyle.width,oldStyle.height]});
qx.bom.element.Style.set(element,"top",(oldStyle.top+initialMoveY)+"px");
qx.bom.element.Style.set(element,"left",(oldStyle.left+initialMoveX)+"px");
qx.bom.element.Style.set(element,"height","0px");
qx.bom.element.Style.set(element,"width","0px");
this.__mainEffect.start();
}},destruct:function(){this._disposeObjects("__moveEffect","__scaleEffect","__mainEffect");
}});
qx.Class.define("qx.fx.effect.combination.Shrink",{extend:qx.fx.Base,construct:function(element){this.base(arguments,element);
this.__moveEffect=new qx.fx.effect.core.Move(element);
this.__scaleEffect=new qx.fx.effect.core.Scale(element);
this.__mainEffect=new qx.fx.effect.core.Parallel(this.__moveEffect,this.__scaleEffect);
},properties:{direction:{init:"center",check:["top-left","top-right","bottom-left","bottom-right","center"]},moveTransition:{init:"sinodial",check:["linear","easeInQuad","easeOutQuad","sinodial","reverse","flicker","wobble","pulse","spring","none","full"]},scaleTransition:{init:"sinodial",check:["linear","easeInQuad","easeOutQuad","sinodial","reverse","flicker","wobble","pulse","spring","none","full"]},modifyDisplay:{init:true,check:"Boolean"}},members:{__oldStyle:null,__moveEffect:null,__scaleEffect:null,__mainEffect:null,setup:function(){this.base(arguments);
qx.bom.element.Style.set(this._getElement(),"overflow","hidden");
},afterFinishInternal:function(){this.base(arguments);
var element=this._getElement();
qx.bom.element.Style.set(element,"overflow","visible");
var value;

for(var property in this.__oldStyle){value=this.__oldStyle[property];

if(property!="overflow"){value+="px";
}qx.bom.element.Style.set(element,property,value);
}
if(this.getModifyDisplay()){qx.bom.element.Style.set(element,"display","none");
}},start:function(){if(!this.base(arguments)){return;
}var element=this._getElement();
var moveX,moveY;
this.__oldStyle={top:qx.bom.element.Location.getTop(element,"scroll"),left:qx.bom.element.Location.getLeft(element,"scroll"),width:qx.bom.element.Dimension.getContentWidth(element),height:qx.bom.element.Dimension.getContentHeight(element),opacity:qx.bom.element.Style.get(element,"opacity")};

switch(this.getDirection()){case 'top-left':moveX=moveY=0;
break;
case 'top-right':moveX=this.__oldStyle.width;
moveY=0;
break;
case 'bottom-left':moveX=0;
moveY=this.__oldStyle.height;
break;
case 'bottom-right':moveX=this.__oldStyle.width;
moveY=this.__oldStyle.height;
break;
case 'center':moveX=this.__oldStyle.width/2;
moveY=this.__oldStyle.height/2;
break;
}this.__moveEffect.set({x:moveX,y:moveY,sync:true,transition:this.getMoveTransition()});
this.__scaleEffect.set({scaleTo:0,sync:true,transition:this.getScaleTransition(),restoreAfterFinish:true});
this.__mainEffect.start();
}},destruct:function(){this._disposeObjects("__moveEffect","__scaleEffect","__mainEffect");
}});
qx.Class.define("qx.fx.effect.combination.Drop",{extend:qx.fx.Base,construct:function(element){this.base(arguments,element);
this.__moveEffect=new qx.fx.effect.core.Move(element);
this.__fadeEffect=new qx.fx.effect.core.Fade(element);
this.__mainEffect=new qx.fx.effect.core.Parallel(this.__moveEffect,this.__fadeEffect);
},properties:{direction:{init:"south",check:["south","west","east","north","south-west","south-east","north-east","north-west"]},xAmount:{init:100,check:"Number"},yAmount:{init:100,check:"Number"},mode:{init:"out",check:["in","out"]},modifyDisplay:{init:true,check:"Boolean"}},members:{__fadeEffect:null,__moveEffect:null,__mainEffect:null,start:function(){this.base(arguments);
var element=this._getElement();
qx.bom.element.Style.set(element,"display","block");
var xAmount=this.getXAmount();
var yAmount=this.getYAmount();
var oldStyle={top:qx.bom.element.Location.getTop(element),left:qx.bom.element.Location.getLeft(element)};
var moveEffectOptions={x:xAmount,y:yAmount,sync:true};

switch(this.getDirection()){case "south":moveEffectOptions.x=0;
moveEffectOptions.y=yAmount;
break;
case "north":moveEffectOptions.x=0;
moveEffectOptions.y=-yAmount;
break;
case "west":moveEffectOptions.x=-xAmount;
moveEffectOptions.y=0;
break;
case "east":moveEffectOptions.x=xAmount;
moveEffectOptions.y=0;
break;
case "south-west":moveEffectOptions.x=-xAmount;
moveEffectOptions.y=yAmount;
break;
case "south-east":moveEffectOptions.x=xAmount;
moveEffectOptions.y=yAmount;
break;
case "north-east":moveEffectOptions.x=xAmount;
moveEffectOptions.y=-yAmount;
break;
case "north-west":moveEffectOptions.x=-xAmount;
moveEffectOptions.y=-yAmount;
break;
}
if(this.getMode()=="in"){qx.bom.element.Style.set(element,"top",(oldStyle.top-moveEffectOptions.y)+"px");
qx.bom.element.Style.set(element,"left",(oldStyle.left-moveEffectOptions.x)+"px");
}this.__moveEffect.set(moveEffectOptions);
this.__fadeEffect.afterFinishInternal=function(){for(var property in oldStyle){qx.bom.element.Style.set(element,property,oldStyle[property]+"px");
}};
this.__fadeEffect.set({duration:0.5,sync:true,from:(this.getMode()=="out")?1:0,to:(this.getMode()=="out")?0:1,modifyDisplay:true});
this.__mainEffect.start();
}},destruct:function(){this._disposeObjects("__moveEffect","__fadeEffect","__mainEffect");
}});
qx.Class.define("qx.fx.effect.combination.Fold",{extend:qx.fx.Base,construct:function(element){this.base(arguments,element);
},properties:{modifyDisplay:{init:true,check:"Boolean"},mode:{init:"in",check:["in","out"]}},members:{__outerScaleEffect:null,__innerScaleEffect:null,__oldStyle:null,afterFinish:function(){var element=this._getElement();

if((this.getModifyDisplay())&&(this.getMode()=="in")){qx.bom.element.Style.set(element,"display","block");
}},start:function(){if(!this.base(arguments)){return;
}var element=this._getElement();
var self=this;
this.__outerScaleEffect=new qx.fx.effect.core.Scale(element);
this.__innerScaleEffect=new qx.fx.effect.core.Scale(element);
this.__outerScaleEffect.afterFinishInternal=function(){self.__innerScaleEffect.start();
};
this.__innerScaleEffect.afterFinishInternal=function(){self._cleanUp();
};
this.__oldStyle=this._getStyle();
qx.bom.element.Style.set(element,"overflow","hidden");

if(this.getMode()=="in"){this.__outerScaleEffect.set({scaleTo:5,scaleContent:false,scaleX:false,duration:this.getDuration()/2,scaleFrom:100,scaleFromCenter:true,alternateDimensions:[]});
this.__innerScaleEffect.set({scaleTo:5,scaleContent:false,scaleY:false,duration:this.getDuration()/2,scaleFrom:100,scaleFromCenter:true,alternateDimensions:[]});
}else{this.__outerScaleEffect.set({scaleTo:100,scaleContent:false,scaleY:false,duration:this.getDuration()/2,scaleFrom:0,scaleFromCenter:true,alternateDimensions:[this.__oldStyle.width,this.__oldStyle.height]});
this.__innerScaleEffect.set({scaleTo:100,scaleContent:false,scaleX:false,duration:this.getDuration()/2,scaleFrom:0,scaleFromCenter:false,alternateDimensions:[this.__oldStyle.width,this.__oldStyle.height]});
qx.bom.element.Style.set(element,"display","block");
qx.bom.element.Style.set(element,"height","0px");
qx.bom.element.Style.set(element,"width","0px");
}this.__outerScaleEffect.start();
},_cleanUp:function(){var value;
var element=this._getElement();

if((this.getMode()=="in")&&(this.getModifyDisplay())){qx.bom.element.Style.set(element,"display","none");
}
for(var property in this.__oldStyle){value=this.__oldStyle[property];

if(property!="overflow"){value+="px";
}qx.bom.element.Style.set(element,property,value);
}qx.bom.element.Style.set(element,"overflow","visible");
},_getStyle:function(){var element=this._getElement();
var hidden=(qx.bom.element.Style.get(element,"display")=="none");

if(hidden){qx.bom.element.Style.set(element,"visiblity","hidden");
qx.bom.element.Style.set(element,"display","block");
}var style={overflow:qx.bom.element.Style.get(element,"overflow"),top:qx.bom.element.Location.getTop(element),left:qx.bom.element.Location.getLeft(element),width:qx.bom.element.Dimension.getContentWidth(element),height:qx.bom.element.Dimension.getContentHeight(element)};

if(hidden){qx.bom.element.Style.set(element,"display","none");
qx.bom.element.Style.set(element,"visiblity","visible");
}return style;
}},destruct:function(){this._disposeObjects("__outerScaleEffect","__innerScaleEffect");
}});
qx.Class.define("qx.fx.effect.combination.Puff",{extend:qx.fx.Base,construct:function(element){this.base(arguments,element);
this.__scaleEffect=new qx.fx.effect.core.Scale(element);
this.__fadeEffect=new qx.fx.effect.core.Fade(element);
this.__mainEffect=new qx.fx.effect.core.Parallel(this.__scaleEffect,this.__fadeEffect);
},properties:{modifyDisplay:{init:true,check:"Boolean"}},members:{__fadeEffect:null,__scaleEffect:null,__mainEffect:null,afterFinishInternal:function(){if(this.getModifyDisplay()){qx.bom.element.Style.set(this._getElement(),"display","none");
}},start:function(){if(!this.base(arguments)){return;
}var element=this._getElement();
var oldStyle={opacity:qx.bom.element.Style.get(element,"opacity")};
this.__fadeEffect.afterFinishInternal=function(){var element=this._getElement();

for(var property in oldStyle){qx.bom.element.Style.set(element,property,oldStyle[property]);
}};
this.__scaleEffect.set({scaleTo:200,sync:true,scaleFromCenter:true,scaleContent:true,restoreAfterFinish:true});
this.__fadeEffect.set({sync:true,to:0.0,modifyDisplay:false});
this.__mainEffect.start();
}},destruct:function(){this._disposeArray("_effects");
this._disposeObjects("__mainEffect","__scaleEffect","__fadeEffect");
}});
qx.Class.define("qx.fx.effect.core.Consecutive",{extend:qx.fx.Base,construct:function(varargs){this.base(arguments);
this.__effects=arguments;
},members:{__effects:null},destruct:function(){this._disposeArray("_effects");
}});
qx.Class.define("qx.fx.effect.core.Highlight",{extend:qx.fx.Base,properties:{startColor:{init:"#ffffff",check:"Color"},endColor:{init:"#ffffaa",check:"Color"},restoreBackground:{init:true,check:"Boolean"},keepBackgroundImage:{init:false,check:"Boolean"}},members:{__oldStyle:null,__startColor:null,__endColor:null,__deltaColor:null,setup:function(){this.base(arguments);
var element=this._getElement();
this.__oldStyle={backgroundImage:qx.bom.element.Style.get(element,"backgroundImage"),backgroundColor:qx.bom.element.Style.get(element,"backgroundColor")};

if(!this.getKeepBackgroundImage()){qx.bom.element.Style.set(element,"backgroundImage","none");
}this.__startColor=qx.util.ColorUtil.cssStringToRgb(this.getStartColor());
this.__endColor=qx.util.ColorUtil.cssStringToRgb(this.getEndColor());
this.__deltaColor=[this.__endColor[0]-this.__startColor[0],this.__endColor[1]-this.__startColor[1],this.__endColor[2]-this.__startColor[2]];
},update:function(position){this.base(arguments);
var color=[this.__startColor[0]+Math.round(this.__deltaColor[0]*position),this.__startColor[1]+Math.round(this.__deltaColor[1]*position),this.__startColor[2]+Math.round(this.__deltaColor[2]*position)];
var hexColor="#"+qx.util.ColorUtil.rgbToHexString([color[0].toString(16),color[1].toString(16),color[2].toString(16)]);
qx.bom.element.Style.set(this._getElement(),"backgroundColor",hexColor);
},finish:function(){this.base(arguments);

if(this.getRestoreBackground()){qx.lang.Function.delay(this._restore,1000,this);
}},_restore:function(){var element=this._getElement();

for(var property in this.__oldStyle){qx.bom.element.Style.set(element,property,this.__oldStyle[property]);
}}},destruct:function(){this.__startColor=this.__endColor=this.__deltaColor=null;
}});
qx.Class.define("qx.util.ColorUtil",{statics:{REGEXP:{hex3:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,rgb:/^rgb\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/,rgba:/^rgba\(\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*,\s*([0-9]{1,3}\.{0,1}[0-9]*)\s*\)$/},SYSTEM:{activeborder:true,activecaption:true,appworkspace:true,background:true,buttonface:true,buttonhighlight:true,buttonshadow:true,buttontext:true,captiontext:true,graytext:true,highlight:true,highlighttext:true,inactiveborder:true,inactivecaption:true,inactivecaptiontext:true,infobackground:true,infotext:true,menu:true,menutext:true,scrollbar:true,threeddarkshadow:true,threedface:true,threedhighlight:true,threedlightshadow:true,threedshadow:true,window:true,windowframe:true,windowtext:true},NAMED:{black:[0,0,0],silver:[192,192,192],gray:[128,128,128],white:[255,255,255],maroon:[128,0,0],red:[255,0,0],purple:[128,0,128],fuchsia:[255,0,255],green:[0,128,0],lime:[0,255,0],olive:[128,128,0],yellow:[255,255,0],navy:[0,0,128],blue:[0,0,255],teal:[0,128,128],aqua:[0,255,255],transparent:[-1,-1,-1],magenta:[255,0,255],orange:[255,165,0],brown:[165,42,42]},isNamedColor:function(value){return this.NAMED[value]!==undefined;
},isSystemColor:function(value){return this.SYSTEM[value]!==undefined;
},supportsThemes:function(){return qx.Class.isDefined("qx.theme.manager.Color");
},isThemedColor:function(value){if(!this.supportsThemes()){return false;
}return qx.theme.manager.Color.getInstance().isDynamic(value);
},stringToRgb:function(str){if(this.supportsThemes()&&this.isThemedColor(str)){var str=qx.theme.manager.Color.getInstance().resolveDynamic(str);
}
if(this.isNamedColor(str)){return this.NAMED[str];
}else if(this.isSystemColor(str)){throw new Error("Could not convert system colors to RGB: "+str);
}else if(this.isRgbString(str)){return this.__rgbStringToRgb();
}else if(this.isHex3String(str)){return this.__hex3StringToRgb();
}else if(this.isHex6String(str)){return this.__hex6StringToRgb();
}throw new Error("Could not parse color: "+str);
},cssStringToRgb:function(str){if(this.isNamedColor(str)){return this.NAMED[str];
}else if(this.isSystemColor(str)){throw new Error("Could not convert system colors to RGB: "+str);
}else if(this.isRgbString(str)){return this.__rgbStringToRgb();
}else if(this.isRgbaString(str)){return this.__rgbaStringToRgb();
}else if(this.isHex3String(str)){return this.__hex3StringToRgb();
}else if(this.isHex6String(str)){return this.__hex6StringToRgb();
}throw new Error("Could not parse color: "+str);
},stringToRgbString:function(str){return this.rgbToRgbString(this.stringToRgb(str));
},rgbToRgbString:function(rgb){return "rgb("+rgb[0]+","+rgb[1]+","+rgb[2]+")";
},rgbToHexString:function(rgb){return (qx.lang.String.pad(rgb[0].toString(16).toUpperCase(),2)+qx.lang.String.pad(rgb[1].toString(16).toUpperCase(),2)+qx.lang.String.pad(rgb[2].toString(16).toUpperCase(),2));
},isValidPropertyValue:function(str){return this.isThemedColor(str)||this.isNamedColor(str)||this.isHex3String(str)||this.isHex6String(str)||this.isRgbString(str);
},isCssString:function(str){return this.isSystemColor(str)||this.isNamedColor(str)||this.isHex3String(str)||this.isHex6String(str)||this.isRgbString(str);
},isHex3String:function(str){return this.REGEXP.hex3.test(str);
},isHex6String:function(str){return this.REGEXP.hex6.test(str);
},isRgbString:function(str){return this.REGEXP.rgb.test(str);
},isRgbaString:function(str){return this.REGEXP.rgba.test(str);
},__rgbStringToRgb:function(){var red=parseInt(RegExp.$1,10);
var green=parseInt(RegExp.$2,10);
var blue=parseInt(RegExp.$3,10);
return [red,green,blue];
},__rgbaStringToRgb:function(){var red=parseInt(RegExp.$1,10);
var green=parseInt(RegExp.$2,10);
var blue=parseInt(RegExp.$3,10);
return [red,green,blue];
},__hex3StringToRgb:function(){var red=parseInt(RegExp.$1,16)*17;
var green=parseInt(RegExp.$2,16)*17;
var blue=parseInt(RegExp.$3,16)*17;
return [red,green,blue];
},__hex6StringToRgb:function(){var red=(parseInt(RegExp.$1,16)*16)+parseInt(RegExp.$2,16);
var green=(parseInt(RegExp.$3,16)*16)+parseInt(RegExp.$4,16);
var blue=(parseInt(RegExp.$5,16)*16)+parseInt(RegExp.$6,16);
return [red,green,blue];
},hex3StringToRgb:function(value){if(this.isHex3String(value)){return this.__hex3StringToRgb(value);
}throw new Error("Invalid hex3 value: "+value);
},hex6StringToRgb:function(value){if(this.isHex6String(value)){return this.__hex6StringToRgb(value);
}throw new Error("Invalid hex6 value: "+value);
},hexStringToRgb:function(value){if(this.isHex3String(value)){return this.__hex3StringToRgb(value);
}
if(this.isHex6String(value)){return this.__hex6StringToRgb(value);
}throw new Error("Invalid hex value: "+value);
},rgbToHsb:function(rgb){var hue,saturation,brightness;
var red=rgb[0];
var green=rgb[1];
var blue=rgb[2];
var cmax=(red>green)?red:green;

if(blue>cmax){cmax=blue;
}var cmin=(red<green)?red:green;

if(blue<cmin){cmin=blue;
}brightness=cmax/255.0;

if(cmax!=0){saturation=(cmax-cmin)/cmax;
}else{saturation=0;
}
if(saturation==0){hue=0;
}else{var redc=(cmax-red)/(cmax-cmin);
var greenc=(cmax-green)/(cmax-cmin);
var bluec=(cmax-blue)/(cmax-cmin);

if(red==cmax){hue=bluec-greenc;
}else if(green==cmax){hue=2.0+redc-bluec;
}else{hue=4.0+greenc-redc;
}hue=hue/6.0;

if(hue<0){hue=hue+1.0;
}}return [Math.round(hue*360),Math.round(saturation*100),Math.round(brightness*100)];
},hsbToRgb:function(hsb){var i,f,p,q,t;
var hue=hsb[0]/360;
var saturation=hsb[1]/100;
var brightness=hsb[2]/100;

if(hue>=1.0){hue%=1.0;
}
if(saturation>1.0){saturation=1.0;
}
if(brightness>1.0){brightness=1.0;
}var tov=Math.floor(255*brightness);
var rgb={};

if(saturation==0.0){rgb.red=rgb.green=rgb.blue=tov;
}else{hue*=6.0;
i=Math.floor(hue);
f=hue-i;
p=Math.floor(tov*(1.0-saturation));
q=Math.floor(tov*(1.0-(saturation*f)));
t=Math.floor(tov*(1.0-(saturation*(1.0-f))));

switch(i){case 0:rgb.red=tov;
rgb.green=t;
rgb.blue=p;
break;
case 1:rgb.red=q;
rgb.green=tov;
rgb.blue=p;
break;
case 2:rgb.red=p;
rgb.green=tov;
rgb.blue=t;
break;
case 3:rgb.red=p;
rgb.green=q;
rgb.blue=tov;
break;
case 4:rgb.red=t;
rgb.green=p;
rgb.blue=tov;
break;
case 5:rgb.red=tov;
rgb.green=p;
rgb.blue=q;
break;
}}return [rgb.red,rgb.green,rgb.blue];
},randomColor:function(){var r=Math.round(Math.random()*255);
var g=Math.round(Math.random()*255);
var b=Math.round(Math.random()*255);
return this.rgbToRgbString([r,g,b]);
}}});
qx.Class.define("qx.fx.effect.core.Scroll",{extend:qx.fx.Base,properties:{mode:{init:"relative",check:["relative","absolute"]},x:{init:0,check:"Number"},y:{init:0,check:"Number"}},members:{__startOffsets:null,__deltaOffsets:null,start:function(){if(!this.base(arguments)){return;
}var element=this._getElement();
this.__startOffsets={x:element.scrollLeft,y:element.scrollTop};
if(this._atEndPosition(this.__startOffsets.x,this.__startOffsets.y)){return;
}
if(this.getMode()=="absolute"){this.__deltaOffsets={left:this.getX()-this.__startOffsets.x,top:this.getY()-this.__startOffsets.y};
}},update:function(position){this.base(arguments);
var element=this._getElement();

if(this.getMode()=="relative"){if(this.getX()!=0){element.scrollLeft=this.__startOffsets.x+(this.getX()*position);
}
if(this.getY()!=0){element.scrollTop=this.__startOffsets.y+(this.getY()*position);
}}else{element.scrollLeft=this.__startOffsets.x+(this.__deltaOffsets.left*position);
element.scrollTop=this.__startOffsets.y+(this.__deltaOffsets.top*position);
}},_atEndPosition:function(left,top){var element=this._getElement();
var x=this.getX();
var y=this.getY();
return (((x<0)&&(left==0))||((x>0)&&(left==(element.scrollWidth-element.clientWidth))))&&
(((y<0)&&(top==0))||((y>0)&&(top==(element.scrollHeight-element.clientHeight))));
}}});
qx.Class.define("qx.fx.effect.core.Scale",{extend:qx.fx.Base,construct:function(element){this.base(arguments,element);
this.__originalStyle=qx.fx.effect.core.Scale.originalStyle;
this.__fontTypes=qx.fx.effect.core.Scale.fontTypes;
},properties:{scaleX:{init:true,check:"Boolean"},scaleY:{init:true,check:"Boolean"},scaleContent:{init:true,check:"Boolean"},scaleFromCenter:{init:true,check:"Boolean"},scaleFrom:{init:100.0,check:"Number"},scaleTo:{init:100,check:"Number"},restoreAfterFinish:{init:false,check:"Boolean"},alternateDimensions:{init:[],check:"Array"}},statics:{originalStyle:{'top':null,'left':null,'width':null,'height':null,'fontSize':null},fontTypes:{'em':'em','px':'px','%':'%','pt':'pt'}},members:{__elementPositioning:null,__originalTop:null,__originalLeft:null,__fontSize:null,__fontSizeType:null,__factor:null,__dims:null,__originalStyle:null,__fontTypes:null,setup:function(){this.base(arguments);
var element=this._getElement();
this.__elementPositioning=qx.bom.element.Style.get(element,"position");

for(var property in this.__originalStyle){this.__originalStyle[property]=element.style[property];
}this.__originalTop=qx.bom.element.Location.getTop(element);
this.__originalLeft=qx.bom.element.Location.getLeft(element);

try{var fontSize=qx.bom.element.Style.get(element,"fontSize");
}catch(ex){if(typeof (fontSize)!="string"){fontSize=(qx.core.Environment.get("engine.name")=="mshtml")?"12px":"100%";
}}
for(var type in this.__fontTypes){if(fontSize.indexOf(type)>0){this.__fontSize=parseFloat(fontSize);
this.__fontSizeType=type;
break;
}}this.__factor=(this.getScaleTo()-this.getScaleFrom())/100;
var dims=this.getAlternateDimensions();

if(dims.length==0){this.__dims=[element.offsetWidth,element.offsetHeight];
}else{this.__dims=dims;
}},update:function(position){var element=this._getElement();
this.base(arguments);
var currentScale=(this.getScaleFrom()/100.0)+(this.__factor*position);

if(this.getScaleContent()&&this.__fontSize){qx.bom.element.Style.set(element,"fontSize",this.__fontSize*currentScale+this.__fontSizeType);
}this._setDimensions(this.__dims[0]*currentScale,this.__dims[1]*currentScale);
},finish:function(){this.base(arguments);
var element=this._getElement();

if(this.getRestoreAfterFinish()){for(var property in this.__originalStyle){var value=this.__originalStyle[property];
qx.bom.element.Style.set(element,property,value);
}}},_setDimensions:function(width,height){var d={};
var element=this._getElement();
var scaleX=this.getScaleX();
var scaleY=this.getScaleY();

if(scaleX){d.width=Math.round(width)+'px';
}
if(scaleY){d.height=Math.round(height)+'px';
}
if(this.getScaleFromCenter()){var leftd=(width-this.__dims[0])/2;
var topd=(height-this.__dims[1])/2;

if(this.__elementPositioning=="absolute"){if(scaleY){d.top=this.__originalTop-topd+'px';
}
if(scaleX){d.left=this.__originalLeft-leftd+'px';
}}else{if(scaleY){d.top=-topd+'px';
}
if(scaleX){d.left=-leftd+'px';
}}}
for(var property in d){qx.bom.element.Style.set(element,property,d[property]);
}}},destruct:function(){this.__dims=this.__originalStyle=this.__fontTypes=null;
}});
qx.Class.define("qx.fx.effect.core.Move",{extend:qx.fx.Base,properties:{mode:{init:"relative",check:["relative","absolute"]},x:{init:0,check:"Number"},y:{init:0,check:"Number"}},members:{__x:null,__y:null,__originalLeft:null,__originalTop:null,__originalPosition:null,setup:function(){var element=this._getElement();
this.base(arguments);

if(element.parentNode){this.__originalLeft=qx.bom.element.Location.getLeft(element)-qx.bom.element.Location.getLeft(element.parentNode);
this.__originalTop=qx.bom.element.Location.getTop(element)-qx.bom.element.Location.getTop(element.parentNode);
}else{this.__originalLeft=qx.bom.element.Location.getLeft(element);
this.__originalTop=qx.bom.element.Location.getTop(element);
}this.__originalPosition=qx.bom.element.Style.get(element,"position");
qx.bom.element.Style.set(element,"position","absolute");

if(this.getMode()=='absolute'){this.__x=this.getX()-this.__originalLeft;
this.__y=this.getY()-this.__originalTop;
}else{this.__x=this.getX();
this.__y=this.getY();
}},update:function(position){var element=this._getElement();
this.base(arguments);
var left=Math.round(this.__x*position+this.__originalLeft);
var top=Math.round(this.__y*position+this.__originalTop);
qx.bom.element.Style.set(element,"left",left+"px");
qx.bom.element.Style.set(element,"top",top+"px");
},afterFinishInternal:function(){qx.bom.element.Style.set(this._getElement(),"position",this.__originalPosition);
}}});
qx.Class.define("qx.fx.effect.core.Parallel",{extend:qx.fx.Base,construct:function(varargs){this.base(arguments);
this.__effects=arguments;
},members:{__effects:null,finish:function(){this.base(arguments);
var effects=this.__effects;

for(var i=0;i<effects.length;i++){effects[i].render(1.0);
effects[i].cancel();
effects[i].beforeFinishInternal();
effects[i].beforeFinish();
effects[i].finish(1.0);
effects[i].afterFinishInternal();
effects[i].afterFinish();
}},update:function(position){this.base(arguments);
var effects=this.__effects;

for(var i=0;i<effects.length;i++){effects[i].render(position);
}},start:function(){if(!this.base(arguments)){return;
}var effects=this.__effects;

for(var i=0;i<effects.length;i++){effects[i].start();
}}},destruct:function(){this._disposeArray("__effects");
}});
