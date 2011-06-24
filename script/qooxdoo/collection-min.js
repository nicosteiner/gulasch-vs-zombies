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

qx.$$packageData['538c4200ba8e']={"locales":{},"resources":{},"translations":{}};
qx.Class.define("qx.type.BaseArray",{extend:Array,construct:function(length_or_items){},members:{toArray:null,valueOf:null,pop:null,push:null,reverse:null,shift:null,sort:null,splice:null,unshift:null,concat:null,join:null,slice:null,toString:null,indexOf:null,lastIndexOf:null,forEach:null,filter:null,map:null,some:null,every:null}});
(function(){function createStackConstructor(stack){if((qx.core.Environment.get("engine.name")=="mshtml")){Stack.prototype={length:0,$$isArray:true};
var args="pop.push.reverse.shift.sort.splice.unshift.join.slice".split(".");

for(var length=args.length;length;){Stack.prototype[args[--length]]=Array.prototype[args[length]];
}}var slice=Array.prototype.slice;
Stack.prototype.concat=function(){var constructor=this.slice(0);

for(var i=0,length=arguments.length;i<length;i++){var copy;

if(arguments[i] instanceof Stack){copy=slice.call(arguments[i],0);
}else if(arguments[i] instanceof Array){copy=arguments[i];
}else{copy=[arguments[i]];
}constructor.push.apply(constructor,copy);
}return constructor;
};
Stack.prototype.toString=function(){return slice.call(this,0).toString();
};
Stack.prototype.toLocaleString=function(){return slice.call(this,0).toLocaleString();
};
Stack.prototype.constructor=Stack;
Stack.prototype.indexOf=qx.lang.Core.arrayIndexOf;
Stack.prototype.lastIndexOf=qx.lang.Core.arrayLastIndexOf;
Stack.prototype.forEach=qx.lang.Core.arrayForEach;
Stack.prototype.some=qx.lang.Core.arraySome;
Stack.prototype.every=qx.lang.Core.arrayEvery;
var filter=qx.lang.Core.arrayFilter;
var map=qx.lang.Core.arrayMap;
Stack.prototype.filter=function(){var ret=new this.constructor;
ret.push.apply(ret,filter.apply(this,arguments));
return ret;
};
Stack.prototype.map=function(){var ret=new this.constructor;
ret.push.apply(ret,map.apply(this,arguments));
return ret;
};
Stack.prototype.slice=function(){var ret=new this.constructor;
ret.push.apply(ret,Array.prototype.slice.apply(this,arguments));
return ret;
};
Stack.prototype.splice=function(){var ret=new this.constructor;
ret.push.apply(ret,Array.prototype.splice.apply(this,arguments));
return ret;
};
Stack.prototype.toArray=function(){return Array.prototype.slice.call(this,0);
};
Stack.prototype.valueOf=function(){return this.length;
};
return Stack;
}function Stack(length){if(arguments.length===1&&typeof length==="number"){this.length=-1<length&&length===length>>.5?length:this.push(length);
}else if(arguments.length){this.push.apply(this,arguments);
}}function PseudoArray(){}PseudoArray.prototype=[];
Stack.prototype=new PseudoArray;
Stack.prototype.length=0;
qx.type.BaseArray=createStackConstructor(Stack);
})();
qx.Class.define("qx.bom.Selector",{statics:{query:null,matches:null}});
(function(){var chunker=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,done=0,toString=Object.prototype.toString,hasDuplicate=false,baseHasDuplicate=true,rBackslash=/\\/g,rNonWord=/\W/;
[0,0].sort(function(){baseHasDuplicate=false;
return 0;
});
var Sizzle=function(selector,context,results,seed){results=results||[];
context=context||document;
var origContext=context;

if(context.nodeType!==1&&context.nodeType!==9){return [];
}
if(!selector||typeof selector!=="string"){return results;
}var m,set,checkSet,extra,ret,cur,pop,i,prune=true,contextXML=Sizzle.isXML(context),parts=[],soFar=selector;
do{chunker.exec("");
m=chunker.exec(soFar);

if(m){soFar=m[3];
parts.push(m[1]);

if(m[2]){extra=m[3];
break;
}}}while(m);

if(parts.length>1&&origPOS.exec(selector)){if(parts.length===2&&Expr.relative[parts[0]]){set=posProcess(parts[0]+parts[1],context);
}else{set=Expr.relative[parts[0]]?[context]:Sizzle(parts.shift(),context);

while(parts.length){selector=parts.shift();

if(Expr.relative[selector]){selector+=parts.shift();
}set=posProcess(selector,set);
}}}else{if(!seed&&parts.length>1&&context.nodeType===9&&!contextXML&&Expr.match.ID.test(parts[0])&&!Expr.match.ID.test(parts[parts.length-1])){ret=Sizzle.find(parts.shift(),context,contextXML);
context=ret.expr?Sizzle.filter(ret.expr,ret.set)[0]:ret.set[0];
}
if(context){ret=seed?
{expr:parts.pop(),set:makeArray(seed)}:Sizzle.find(parts.pop(),parts.length===1&&(parts[0]==="~"||parts[0]==="+")&&context.parentNode?context.parentNode:context,contextXML);
set=ret.expr?Sizzle.filter(ret.expr,ret.set):ret.set;

if(parts.length>0){checkSet=makeArray(set);
}else{prune=false;
}
while(parts.length){cur=parts.pop();
pop=cur;

if(!Expr.relative[cur]){cur="";
}else{pop=parts.pop();
}
if(pop==null){pop=context;
}Expr.relative[cur](checkSet,pop,contextXML);
}}else{checkSet=parts=[];
}}
if(!checkSet){checkSet=set;
}
if(!checkSet){Sizzle.error(cur||selector);
}
if(toString.call(checkSet)==="[object Array]"){if(!prune){results.push.apply(results,checkSet);
}else if(context&&context.nodeType===1){for(i=0;checkSet[i]!=null;i++){if(checkSet[i]&&(checkSet[i]===true||checkSet[i].nodeType===1&&Sizzle.contains(context,checkSet[i]))){results.push(set[i]);
}}}else{for(i=0;checkSet[i]!=null;i++){if(checkSet[i]&&checkSet[i].nodeType===1){results.push(set[i]);
}}}}else{makeArray(checkSet,results);
}
if(extra){Sizzle(extra,origContext,results,seed);
Sizzle.uniqueSort(results);
}return results;
};
Sizzle.uniqueSort=function(results){if(sortOrder){hasDuplicate=baseHasDuplicate;
results.sort(sortOrder);

if(hasDuplicate){for(var i=1;i<results.length;i++){if(results[i]===results[i-1]){results.splice(i--,1);
}}}}return results;
};
Sizzle.matches=function(expr,set){return Sizzle(expr,null,null,set);
};
Sizzle.matchesSelector=function(node,expr){return Sizzle(expr,null,null,[node]).length>0;
};
Sizzle.find=function(expr,context,isXML){var set;

if(!expr){return [];
}
for(var i=0,l=Expr.order.length;i<l;i++){var match,type=Expr.order[i];

if((match=Expr.leftMatch[type].exec(expr))){var left=match[1];
match.splice(1,1);

if(left.substr(left.length-1)!=="\\"){match[1]=(match[1]||"").replace(rBackslash,"");
set=Expr.find[type](match,context,isXML);

if(set!=null){expr=expr.replace(Expr.match[type],"");
break;
}}}}
if(!set){set=typeof context.getElementsByTagName!=="undefined"?context.getElementsByTagName("*"):[];
}return {set:set,expr:expr};
};
Sizzle.filter=function(expr,set,inplace,not){var match,anyFound,old=expr,result=[],curLoop=set,isXMLFilter=set&&set[0]&&Sizzle.isXML(set[0]);

while(expr&&set.length){for(var type in Expr.filter){if((match=Expr.leftMatch[type].exec(expr))!=null&&match[2]){var found,item,filter=Expr.filter[type],left=match[1];
anyFound=false;
match.splice(1,1);

if(left.substr(left.length-1)==="\\"){continue;
}
if(curLoop===result){result=[];
}
if(Expr.preFilter[type]){match=Expr.preFilter[type](match,curLoop,inplace,result,not,isXMLFilter);

if(!match){anyFound=found=true;
}else if(match===true){continue;
}}
if(match){for(var i=0;(item=curLoop[i])!=null;i++){if(item){found=filter(item,match,i,curLoop);
var pass=not^!!found;

if(inplace&&found!=null){if(pass){anyFound=true;
}else{curLoop[i]=false;
}}else if(pass){result.push(item);
anyFound=true;
}}}}
if(found!==undefined){if(!inplace){curLoop=result;
}expr=expr.replace(Expr.match[type],"");

if(!anyFound){return [];
}break;
}}}if(expr===old){if(anyFound==null){Sizzle.error(expr);
}else{break;
}}old=expr;
}return curLoop;
};
Sizzle.error=function(msg){throw "Syntax error, unrecognized expression: "+msg;
};
var Expr=Sizzle.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(elem){return elem.getAttribute("href");
},type:function(elem){return elem.getAttribute("type");
}},relative:{"+":function(checkSet,part){var isPartStr=typeof part==="string",isTag=isPartStr&&!rNonWord.test(part),isPartStrNotTag=isPartStr&&!isTag;

if(isTag){part=part.toLowerCase();
}
for(var i=0,l=checkSet.length,elem;i<l;i++){if((elem=checkSet[i])){while((elem=elem.previousSibling)&&elem.nodeType!==1){}checkSet[i]=isPartStrNotTag||elem&&elem.nodeName.toLowerCase()===part?elem||false:elem===part;
}}
if(isPartStrNotTag){Sizzle.filter(part,checkSet,true);
}},">":function(checkSet,part){var elem,isPartStr=typeof part==="string",i=0,l=checkSet.length;

if(isPartStr&&!rNonWord.test(part)){part=part.toLowerCase();

for(;i<l;i++){elem=checkSet[i];

if(elem){var parent=elem.parentNode;
checkSet[i]=parent.nodeName.toLowerCase()===part?parent:false;
}}}else{for(;i<l;i++){elem=checkSet[i];

if(elem){checkSet[i]=isPartStr?elem.parentNode:elem.parentNode===part;
}}
if(isPartStr){Sizzle.filter(part,checkSet,true);
}}},"":function(checkSet,part,isXML){var nodeCheck,doneName=done++,checkFn=dirCheck;

if(typeof part==="string"&&!rNonWord.test(part)){part=part.toLowerCase();
nodeCheck=part;
checkFn=dirNodeCheck;
}checkFn("parentNode",part,doneName,checkSet,nodeCheck,isXML);
},"~":function(checkSet,part,isXML){var nodeCheck,doneName=done++,checkFn=dirCheck;

if(typeof part==="string"&&!rNonWord.test(part)){part=part.toLowerCase();
nodeCheck=part;
checkFn=dirNodeCheck;
}checkFn("previousSibling",part,doneName,checkSet,nodeCheck,isXML);
}},find:{ID:function(match,context,isXML){if(typeof context.getElementById!=="undefined"&&!isXML){var m=context.getElementById(match[1]);
return m&&m.parentNode?[m]:[];
}},NAME:function(match,context){if(typeof context.getElementsByName!=="undefined"){var ret=[],results=context.getElementsByName(match[1]);

for(var i=0,l=results.length;i<l;i++){if(results[i].getAttribute("name")===match[1]){ret.push(results[i]);
}}return ret.length===0?null:ret;
}},TAG:function(match,context){if(typeof context.getElementsByTagName!=="undefined"){return context.getElementsByTagName(match[1]);
}}},preFilter:{CLASS:function(match,curLoop,inplace,result,not,isXML){match=" "+match[1].replace(rBackslash,"")+" ";

if(isXML){return match;
}
for(var i=0,elem;(elem=curLoop[i])!=null;i++){if(elem){if(not^(elem.className&&(" "+elem.className+" ").replace(/[\t\n\r]/g," ").indexOf(match)>=0)){if(!inplace){result.push(elem);
}}else if(inplace){curLoop[i]=false;
}}}return false;
},ID:function(match){return match[1].replace(rBackslash,"");
},TAG:function(match,curLoop){return match[1].replace(rBackslash,"").toLowerCase();
},CHILD:function(match){if(match[1]==="nth"){if(!match[2]){Sizzle.error(match[0]);
}match[2]=match[2].replace(/^\+|\s*/g,'');
var test=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(match[2]==="even"&&"2n"||match[2]==="odd"&&"2n+1"||!/\D/.test(match[2])&&"0n+"+match[2]||match[2]);
match[2]=(test[1]+(test[2]||1))-0;
match[3]=test[3]-0;
}else if(match[2]){Sizzle.error(match[0]);
}match[0]=done++;
return match;
},ATTR:function(match,curLoop,inplace,result,not,isXML){var name=match[1]=match[1].replace(rBackslash,"");

if(!isXML&&Expr.attrMap[name]){match[1]=Expr.attrMap[name];
}match[4]=(match[4]||match[5]||"").replace(rBackslash,"");

if(match[2]==="~="){match[4]=" "+match[4]+" ";
}return match;
},PSEUDO:function(match,curLoop,inplace,result,not){if(match[1]==="not"){if((chunker.exec(match[3])||"").length>1||/^\w/.test(match[3])){match[3]=Sizzle(match[3],null,null,curLoop);
}else{var ret=Sizzle.filter(match[3],curLoop,inplace,true^not);

if(!inplace){result.push.apply(result,ret);
}return false;
}}else if(Expr.match.POS.test(match[0])||Expr.match.CHILD.test(match[0])){return true;
}return match;
},POS:function(match){match.unshift(true);
return match;
}},filters:{enabled:function(elem){return elem.disabled===false&&elem.type!=="hidden";
},disabled:function(elem){return elem.disabled===true;
},checked:function(elem){return elem.checked===true;
},selected:function(elem){if(elem.parentNode){elem.parentNode.selectedIndex;
}return elem.selected===true;
},parent:function(elem){return !!elem.firstChild;
},empty:function(elem){return !elem.firstChild;
},has:function(elem,i,match){return !!Sizzle(match[3],elem).length;
},header:function(elem){return (/h\d/i).test(elem.nodeName);
},text:function(elem){return "text"===elem.getAttribute('type');
},radio:function(elem){return "radio"===elem.type;
},checkbox:function(elem){return "checkbox"===elem.type;
},file:function(elem){return "file"===elem.type;
},password:function(elem){return "password"===elem.type;
},submit:function(elem){return "submit"===elem.type;
},image:function(elem){return "image"===elem.type;
},reset:function(elem){return "reset"===elem.type;
},button:function(elem){return "button"===elem.type||elem.nodeName.toLowerCase()==="button";
},input:function(elem){return (/input|select|textarea|button/i).test(elem.nodeName);
}},setFilters:{first:function(elem,i){return i===0;
},last:function(elem,i,match,array){return i===array.length-1;
},even:function(elem,i){return i%2===0;
},odd:function(elem,i){return i%2===1;
},lt:function(elem,i,match){return i<match[3]-0;
},gt:function(elem,i,match){return i>match[3]-0;
},nth:function(elem,i,match){return match[3]-0===i;
},eq:function(elem,i,match){return match[3]-0===i;
}},filter:{PSEUDO:function(elem,match,i,array){var name=match[1],filter=Expr.filters[name];

if(filter){return filter(elem,i,match,array);
}else if(name==="contains"){return (elem.textContent||elem.innerText||Sizzle.getText([elem])||"").indexOf(match[3])>=0;
}else if(name==="not"){var not=match[3];

for(var j=0,l=not.length;j<l;j++){if(not[j]===elem){return false;
}}return true;
}else{Sizzle.error(name);
}},CHILD:function(elem,match){var type=match[1],node=elem;

switch(type){case "only":case "first":while((node=node.previousSibling)){if(node.nodeType===1){return false;
}}
if(type==="first"){return true;
}node=elem;
case "last":while((node=node.nextSibling)){if(node.nodeType===1){return false;
}}return true;
case "nth":var first=match[2],last=match[3];

if(first===1&&last===0){return true;
}var doneName=match[0],parent=elem.parentNode;

if(parent&&(parent.sizcache!==doneName||!elem.nodeIndex)){var count=0;

for(node=parent.firstChild;node;node=node.nextSibling){if(node.nodeType===1){node.nodeIndex=++count;
}}parent.sizcache=doneName;
}var diff=elem.nodeIndex-last;

if(first===0){return diff===0;
}else{return (diff%first===0&&diff/first>=0);
}}},ID:function(elem,match){return elem.nodeType===1&&elem.getAttribute("id")===match;
},TAG:function(elem,match){return (match==="*"&&elem.nodeType===1)||elem.nodeName.toLowerCase()===match;
},CLASS:function(elem,match){return (" "+(elem.className||elem.getAttribute("class"))+" ").indexOf(match)>-1;
},ATTR:function(elem,match){var name=match[1],result=Expr.attrHandle[name]?Expr.attrHandle[name](elem):elem[name]!=null?elem[name]:elem.getAttribute(name),value=result+"",type=match[2],check=match[4];
return result==null?type==="!=":type==="="?value===check:type==="*="?value.indexOf(check)>=0:type==="~="?(" "+value+" ").indexOf(check)>=0:!check?value&&result!==false:type==="!="?value!==check:type==="^="?value.indexOf(check)===0:type==="$="?value.substr(value.length-check.length)===check:type==="|="?value===check||value.substr(0,check.length+1)===check+"-":false;
},POS:function(elem,match,i,array){var name=match[2],filter=Expr.setFilters[name];

if(filter){return filter(elem,i,match,array);
}}}};
var origPOS=Expr.match.POS,fescape=function(all,num){return "\\"+(num-0+1);
};

for(var type in Expr.match){Expr.match[type]=new RegExp(Expr.match[type].source+(/(?![^\[]*\])(?![^\(]*\))/.source));
Expr.leftMatch[type]=new RegExp(/(^(?:.|\r|\n)*?)/.source+Expr.match[type].source.replace(/\\(\d+)/g,fescape));
}var makeArray=function(array,results){array=Array.prototype.slice.call(array,0);

if(results){results.push.apply(results,array);
return results;
}return array;
};
try{Array.prototype.slice.call(document.documentElement.childNodes,0)[0].nodeType;
}catch(e){makeArray=function(array,results){var i=0,ret=results||[];

if(toString.call(array)==="[object Array]"){Array.prototype.push.apply(ret,array);
}else{if(typeof array.length==="number"){for(var l=array.length;i<l;i++){ret.push(array[i]);
}}else{for(;array[i];i++){ret.push(array[i]);
}}}return ret;
};
}var sortOrder,siblingCheck;

if(document.documentElement.compareDocumentPosition){sortOrder=function(a,b){if(a===b){hasDuplicate=true;
return 0;
}
if(!a.compareDocumentPosition||!b.compareDocumentPosition){return a.compareDocumentPosition?-1:1;
}return a.compareDocumentPosition(b)&4?-1:1;
};
}else{sortOrder=function(a,b){var al,bl,ap=[],bp=[],aup=a.parentNode,bup=b.parentNode,cur=aup;
if(a===b){hasDuplicate=true;
return 0;
}else if(aup===bup){return siblingCheck(a,b);
}else if(!aup){return -1;
}else if(!bup){return 1;
}while(cur){ap.unshift(cur);
cur=cur.parentNode;
}cur=bup;

while(cur){bp.unshift(cur);
cur=cur.parentNode;
}al=ap.length;
bl=bp.length;
for(var i=0;i<al&&i<bl;i++){if(ap[i]!==bp[i]){return siblingCheck(ap[i],bp[i]);
}}return i===al?siblingCheck(a,bp[i],-1):siblingCheck(ap[i],b,1);
};
siblingCheck=function(a,b,ret){if(a===b){return ret;
}var cur=a.nextSibling;

while(cur){if(cur===b){return -1;
}cur=cur.nextSibling;
}return 1;
};
}Sizzle.getText=function(elems){var ret="",elem;

for(var i=0;elems[i];i++){elem=elems[i];
if(elem.nodeType===3||elem.nodeType===4){ret+=elem.nodeValue;
}else if(elem.nodeType!==8){ret+=Sizzle.getText(elem.childNodes);
}}return ret;
};
(function(){var form=document.createElement("div"),id="script"+(new Date()).getTime(),root=document.documentElement;
form.innerHTML="<a name='"+id+"'/>";
root.insertBefore(form,root.firstChild);
if(document.getElementById(id)){Expr.find.ID=function(match,context,isXML){if(typeof context.getElementById!=="undefined"&&!isXML){var m=context.getElementById(match[1]);
return m?m.id===match[1]||typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id").nodeValue===match[1]?[m]:undefined:[];
}};
Expr.filter.ID=function(elem,match){var node=typeof elem.getAttributeNode!=="undefined"&&elem.getAttributeNode("id");
return elem.nodeType===1&&node&&node.nodeValue===match;
};
}root.removeChild(form);
root=form=null;
})();
(function(){var div=document.createElement("div");
div.appendChild(document.createComment(""));
if(div.getElementsByTagName("*").length>0){Expr.find.TAG=function(match,context){var results=context.getElementsByTagName(match[1]);
if(match[1]==="*"){var tmp=[];

for(var i=0;results[i];i++){if(results[i].nodeType===1){tmp.push(results[i]);
}}results=tmp;
}return results;
};
}div.innerHTML="<a href='#'></a>";

if(div.firstChild&&typeof div.firstChild.getAttribute!=="undefined"&&div.firstChild.getAttribute("href")!=="#"){Expr.attrHandle.href=function(elem){return elem.getAttribute("href",2);
};
}div=null;
})();

if(document.querySelectorAll){(function(){var oldSizzle=Sizzle,div=document.createElement("div"),id="__sizzle__";
div.innerHTML="<p class='TEST'></p>";
if(div.querySelectorAll&&div.querySelectorAll(".TEST").length===0){return;
}Sizzle=function(query,context,extra,seed){context=context||document;
if(!seed&&!Sizzle.isXML(context)){var match=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(query);

if(match&&(context.nodeType===1||context.nodeType===9)){if(match[1]){return makeArray(context.getElementsByTagName(query),extra);
}else if(match[2]&&Expr.find.CLASS&&context.getElementsByClassName){return makeArray(context.getElementsByClassName(match[2]),extra);
}}
if(context.nodeType===9){if(query==="body"&&context.body){return makeArray([context.body],extra);
}else if(match&&match[3]){var elem=context.getElementById(match[3]);
if(elem&&elem.parentNode){if(elem.id===match[3]){return makeArray([elem],extra);
}}else{return makeArray([],extra);
}}
try{return makeArray(context.querySelectorAll(query),extra);
}catch(qsaError){}}else if(context.nodeType===1&&context.nodeName.toLowerCase()!=="object"){var oldContext=context,old=context.getAttribute("id"),nid=old||id,hasParent=context.parentNode,relativeHierarchySelector=/^\s*[+~]/.test(query);

if(!old){context.setAttribute("id",nid);
}else{nid=nid.replace(/'/g,"\\$&");
}
if(relativeHierarchySelector&&hasParent){context=context.parentNode;
}
try{if(!relativeHierarchySelector||hasParent){return makeArray(context.querySelectorAll("[id='"+nid+"'] "+query),extra);
}}catch(pseudoError){}finally{if(!old){oldContext.removeAttribute("id");
}}}}return oldSizzle(query,context,extra,seed);
};

for(var prop in oldSizzle){Sizzle[prop]=oldSizzle[prop];
}div=null;
})();
}(function(){var html=document.documentElement,matches=html.matchesSelector||html.mozMatchesSelector||html.webkitMatchesSelector||html.msMatchesSelector,pseudoWorks=false;

try{matches.call(document.documentElement,"[test!='']:sizzle");
}catch(pseudoError){pseudoWorks=true;
}
if(matches){Sizzle.matchesSelector=function(node,expr){expr=expr.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");

if(!Sizzle.isXML(node)){try{if(pseudoWorks||!Expr.match.PSEUDO.test(expr)&&!/!=/.test(expr)){return matches.call(node,expr);
}}catch(e){}}return Sizzle(expr,null,null,[node]).length>0;
};
}})();
(function(){var div=document.createElement("div");
div.innerHTML="<div class='test e'></div><div class='test'></div>";
if(!div.getElementsByClassName||div.getElementsByClassName("e").length===0){return;
}div.lastChild.className="e";

if(div.getElementsByClassName("e").length===1){return;
}Expr.order.splice(1,0,"CLASS");
Expr.find.CLASS=function(match,context,isXML){if(typeof context.getElementsByClassName!=="undefined"&&!isXML){return context.getElementsByClassName(match[1]);
}};
div=null;
})();
function dirNodeCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];

if(elem){var match=false;
elem=elem[dir];

while(elem){if(elem.sizcache===doneName){match=checkSet[elem.sizset];
break;
}
if(elem.nodeType===1&&!isXML){elem.sizcache=doneName;
elem.sizset=i;
}
if(elem.nodeName.toLowerCase()===cur){match=elem;
break;
}elem=elem[dir];
}checkSet[i]=match;
}}}function dirCheck(dir,cur,doneName,checkSet,nodeCheck,isXML){for(var i=0,l=checkSet.length;i<l;i++){var elem=checkSet[i];

if(elem){var match=false;
elem=elem[dir];

while(elem){if(elem.sizcache===doneName){match=checkSet[elem.sizset];
break;
}
if(elem.nodeType===1){if(!isXML){elem.sizcache=doneName;
elem.sizset=i;
}
if(typeof cur!=="string"){if(elem===cur){match=true;
break;
}}else if(Sizzle.filter(cur,[elem]).length>0){match=elem;
break;
}}elem=elem[dir];
}checkSet[i]=match;
}}}
if(document.documentElement.contains){Sizzle.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):true);
};
}else if(document.documentElement.compareDocumentPosition){Sizzle.contains=function(a,b){return !!(a.compareDocumentPosition(b)&16);
};
}else{Sizzle.contains=function(){return false;
};
}Sizzle.isXML=function(elem){var documentElement=(elem?elem.ownerDocument||elem:0).documentElement;
return documentElement?documentElement.nodeName!=="HTML":false;
};
var posProcess=function(selector,context){var match,tmpSet=[],later="",root=context.nodeType?[context]:context;
while((match=Expr.match.PSEUDO.exec(selector))){later+=match[0];
selector=selector.replace(Expr.match.PSEUDO,"");
}selector=Expr.relative[selector]?selector+"*":selector;

for(var i=0,l=root.length;i<l;i++){Sizzle(selector,root[i],tmpSet);
}return Sizzle.filter(later,tmpSet);
};
var Selector=qx.bom.Selector;
Selector.query=function(selector,context){return Sizzle(selector,context);
};
Selector.matches=function(selector,set){return Sizzle(selector,null,null,set);
};
})();
(function(){var setter=function(clazz,method){return function(arg1,arg2,arg3,arg4,arg5,arg6){var length=this.length;

if(length>0){var ptn=clazz[method];

for(var i=0;i<length;i++){if(this[i].nodeType===1){ptn.call(clazz,this[i],arg1,arg2,arg3,arg4,arg5,arg6);
}}}return this;
};
};
var getter=function(clazz,method){return function(arg1,arg2,arg3,arg4,arg5,arg6){if(this.length>0){var ret=this[0].nodeType===1?clazz[method](this[0],arg1,arg2,arg3,arg4,arg5,arg6):null;

if(ret&&ret.nodeType){return this.__pushStack([ret]);
}else{return ret;
}}return null;
};
};
qx.Class.define("qx.bom.Collection",{extend:qx.type.BaseArray,statics:{query:function(selector,context){var arr=qx.bom.Selector.query(selector,context);
return qx.lang.Array.cast(arr,qx.bom.Collection);
},id:function(id){var elem=document.getElementById(id);
if(elem&&elem.id!=id){return qx.bom.Collection.query("#"+id);
}if(elem){return new qx.bom.Collection(elem);
}else{return new qx.bom.Collection();
}},html:function(html,context){var arr=qx.bom.Html.clean([html],context);
return qx.lang.Array.cast(arr,qx.bom.Collection);
},__expr:/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,create:function(input,context){var Collection=qx.bom.Collection;
if(input.nodeType){return new Collection(input);
}else if(typeof input==="string"){var match=Collection.__expr.exec(input);

if(match){return match[1]?Collection.html(match[1],context):Collection.id(match[3].substring(1));
}else{return Collection.query(input,context);
}}else{return qx.lang.Array.cast(input,qx.bom.Collection);
}}},members:{__prevObject:null,setAttribute:setter(qx.bom.element.Attribute,"set"),resetAttribute:setter(qx.bom.element.Attribute,"reset"),getAttribute:getter(qx.bom.element.Attribute,"get"),addClass:setter(qx.bom.element.Class,"add"),getClass:getter(qx.bom.element.Class,"get"),hasClass:getter(qx.bom.element.Class,"has"),removeClass:setter(qx.bom.element.Class,"remove"),replaceClass:setter(qx.bom.element.Class,"replace"),toggleClass:setter(qx.bom.element.Class,"toggle"),setValue:setter(qx.bom.Input,"setValue"),getValue:getter(qx.bom.Input,"getValue"),setStyle:setter(qx.bom.element.Style,"set"),setStyles:setter(qx.bom.element.Style,"setStyles"),resetStyle:setter(qx.bom.element.Style,"reset"),getStyle:getter(qx.bom.element.Style,"get"),setCss:setter(qx.bom.element.Style,"setCss"),getCss:setter(qx.bom.element.Style,"getCss"),getOffset:getter(qx.bom.element.Location,"get"),getPosition:getter(qx.bom.element.Location,"getPosition"),getOffsetParent:getter(qx.bom.element.Location,"getOffsetParent"),setScrollLeft:function(value){var Node=qx.dom.Node;

for(var i=0,l=this.length,obj;i<l;i++){obj=this[i];

if(Node.isElement(obj)){obj.scrollLeft=value;
}else if(Node.isWindow(obj)){obj.scrollTo(value,this.getScrollTop(obj));
}else if(Node.isDocument(obj)){Node.getWindow(obj).scrollTo(value,this.getScrollTop(obj));
}}return this;
},setScrollTop:function(value){var Node=qx.dom.Node;

for(var i=0,l=this.length,obj;i<l;i++){obj=this[i];

if(Node.isElement(obj)){obj.scrollTop=value;
}else if(Node.isWindow(obj)){obj.scrollTo(this.getScrollLeft(obj),value);
}else if(Node.isDocument(obj)){Node.getWindow(obj).scrollTo(this.getScrollLeft(obj),value);
}}return this;
},getScrollLeft:function(){var obj=this[0];

if(!obj){return null;
}var Node=qx.dom.Node;

if(Node.isWindow(obj)||Node.isDocument(obj)){return qx.bom.Viewport.getScrollLeft();
}return obj.scrollLeft;
},getScrollTop:function(){var obj=this[0];

if(!obj){return null;
}var Node=qx.dom.Node;

if(Node.isWindow(obj)||Node.isDocument(obj)){return qx.bom.Viewport.getScrollTop();
}return obj.scrollTop;
},getWidth:function(){var obj=this[0];
var Node=qx.dom.Node;

if(obj){if(Node.isElement(obj)){return qx.bom.element.Dimension.getWidth(obj);
}else if(Node.isDocument(obj)){return qx.bom.Document.getWidth(Node.getWindow(obj));
}else if(Node.isWindow(obj)){return qx.bom.Viewport.getWidth(obj);
}}return null;
},getContentWidth:function(){var obj=this[0];

if(qx.dom.Node.isElement(obj)){return qx.bom.element.Dimension.getContentWidth(obj);
}return null;
},getHeight:function(){var obj=this[0];
var Node=qx.dom.Node;

if(obj){if(Node.isElement(obj)){return qx.bom.element.Dimension.getHeight(obj);
}else if(Node.isDocument(obj)){return qx.bom.Document.getHeight(Node.getWindow(obj));
}else if(Node.isWindow(obj)){return qx.bom.Viewport.getHeight(obj);
}}return null;
},getContentHeight:function(){var obj=this[0];

if(qx.dom.Node.isElement(obj)){return qx.bom.element.Dimension.getContentHeight(obj);
}return null;
},addListener:setter(qx.bom.Element,"addListener"),removeListener:setter(qx.bom.Element,"removeListener"),eq:function(index){return this.slice(index,+index+1);
},filter:function(selector,context){var res;

if(qx.lang.Type.isFunction(selector)){res=qx.type.BaseArray.prototype.filter.call(this,selector,context);
}else{res=qx.bom.Selector.matches(selector,this);
}return this.__pushStack(res);
},is:function(selector){return !!selector&&qx.bom.Selector.matches(selector,this).length>0;
},__simple:/^.[^:#\[\.,]*$/,not:function(selector){if(this.__simple.test(selector)){var res=qx.bom.Selector.matches(":not("+selector+")",this);
return this.__pushStack(res);
}var res=qx.bom.Selector.matches(selector,this);
return this.filter(function(value){return res.indexOf(value)===-1;
});
},add:function(selector,context){var res=qx.bom.Selector.query(selector,context);
var arr=qx.lang.Array.unique(this.concat(res));
return this.__pushStack(arr);
},children:function(selector){var children=[];

for(var i=0,l=this.length;i<l;i++){children.push.apply(children,qx.dom.Hierarchy.getChildElements(this[i]));
}
if(selector){children=qx.bom.Selector.matches(selector,children);
}return this.__pushStack(children);
},closest:function(selector){var arr=new qx.bom.Collection(1);
var Selector=qx.bom.Selector;
var ret=this.map(function(current){while(current&&current.ownerDocument){arr[0]=current;

if(Selector.matches(selector,arr).length>0){return current;
}current=current.parentNode;
}});
return this.__pushStack(qx.lang.Array.unique(ret));
},contents:function(){var res=[];
var lang=qx.lang.Array;

for(var i=0,l=this.length;i<l;i++){res.push.apply(res,lang.fromCollection(this[i].childNodes));
}return this.__pushStack(res);
},find:function(selector){var Selector=qx.bom.Selector;
if(this.length===1){return this.__pushStack(Selector.query(selector,this[0]));
}else{var ret=[];

for(var i=0,l=this.length;i<l;i++){ret.push.apply(ret,Selector.query(selector,this[i]));
}return this.__pushStack(qx.lang.Array.unique(ret));
}},next:function(selector){var Hierarchy=qx.dom.Hierarchy;
var ret=this.map(Hierarchy.getNextElementSibling,Hierarchy);
if(selector){ret=qx.bom.Selector.matches(selector,ret);
}return this.__pushStack(ret);
},nextAll:function(selector){return this.__hierarchyHelper("getNextSiblings",selector);
},prev:function(selector){var Hierarchy=qx.dom.Hierarchy;
var ret=this.map(Hierarchy.getPreviousElementSibling,Hierarchy);
if(selector){ret=qx.bom.Selector.matches(selector,ret);
}return this.__pushStack(ret);
},prevAll:function(selector){return this.__hierarchyHelper("getPreviousSiblings",selector);
},parent:function(selector){var Element=qx.dom.Element;
var ret=qx.lang.Array.unique(this.map(Element.getParentElement,Element));
if(selector){ret=qx.bom.Selector.matches(selector,ret);
}return this.__pushStack(ret);
},parents:function(selector){return this.__hierarchyHelper("getAncestors",selector);
},siblings:function(selector){return this.__hierarchyHelper("getSiblings",selector);
},__hierarchyHelper:function(method,selector){var all=[];
var Hierarchy=qx.dom.Hierarchy;

for(var i=0,l=this.length;i<l;i++){all.push.apply(all,Hierarchy[method](this[i]));
}var ret=qx.lang.Array.unique(all);
if(selector){ret=qx.bom.Selector.matches(selector,ret);
}return this.__pushStack(ret);
},__pushStack:function(arr){var coll=new qx.bom.Collection;
coll.__prevObject=this;
arr=Array.prototype.slice.call(arr,0);
coll.push.apply(coll,arr);
return coll;
},andSelf:function(){return this.add(this.__prevObject);
},end:function(){return this.__prevObject||new qx.bom.Collection();
},__manipulate:function(args,callback){var element=this[0];
var doc=element.ownerDocument||element;
var fragment=doc.createDocumentFragment();
var scripts=qx.bom.Html.clean(args,doc,fragment);
var first=fragment.firstChild;
if(first){var last=this.length-1;

for(var i=0,l=last;i<l;i++){callback.call(this,this[i],fragment.cloneNode(true));
}callback.call(this,this[last],fragment);
}if(scripts){var script;
var Loader=qx.io.ScriptLoader;
var Func=qx.lang.Function;

for(var i=0,l=scripts.length;i<l;i++){script=scripts[i];
if(script.src){Loader.get().load(script.src);
}else{Func.globalEval(script.text||script.textContent||script.innerHTML||"");
}if(script.parentNode){script.parentNode.removeChild(script);
}}}return this;
},__manipulateTo:function(args,original){var Selector=qx.bom.Selector;
var Lang=qx.lang.Array;
var col=[];

for(var i=0,l=args.length;i<l;i++){col.push.apply(col,Selector.query(args[i]));
}col=Lang.cast(Lang.unique(col),qx.bom.Collection);
for(var i=0,il=this.length;i<il;i++){col[original](this[i]);
}return this;
},append:function(varargs){return this.__manipulate(arguments,this.__appendCallback);
},prepend:function(varargs){return this.__manipulate(arguments,this.__prependCallback);
},__appendCallback:function(rel,child){rel.appendChild(child);
},__prependCallback:function(rel,child){rel.insertBefore(child,rel.firstChild);
},appendTo:function(varargs){return this.__manipulateTo(arguments,"append");
},prependTo:function(varargs){return this.__manipulateTo(arguments,"prepend");
},before:function(varargs){return this.__manipulate(arguments,this.__beforeCallback);
},after:function(varargs){return this.__manipulate(arguments,this.__afterCallback);
},__beforeCallback:function(rel,child){rel.parentNode.insertBefore(child,rel);
},__afterCallback:function(rel,child){rel.parentNode.insertBefore(child,rel.nextSibling);
},insertBefore:function(varargs){return this.__manipulateTo(arguments,"before");
},insertAfter:function(varargs){return this.__manipulateTo(arguments,"after");
},wrapAll:function(content){var first=this[0];

if(first){var wrap=qx.bom.Collection.create(content,first.ownerDocument).clone();
if(first.parentNode){first.parentNode.insertBefore(wrap[0],first);
}wrap.map(this.__getInnerHelper).append(this);
}return this;
},__getInnerHelper:function(elem){while(elem.firstChild){elem=elem.firstChild;
}return elem;
},wrapInner:function(content){var helper=new qx.bom.Collection(1);

for(var i=0,l=this.length;i<l;i++){helper[0]=this[i];
helper.contents().wrapAll(content);
}return this;
},wrap:function(content){var helper=new qx.bom.Collection(1);
for(var i=0,l=this.length;i<l;i++){helper[0]=this[i];
helper.wrapAll(content);
}return this;
},replaceWith:function(content){return this.after(content).remove();
},replaceAll:function(varargs){return this.__manipulateTo(arguments,"replaceWith");
},remove:function(selector){var coll=this;

if(selector){coll=this.filter(selector);

if(coll.length==0){return this;
}}for(var i=0,il=coll.length,current;i<il;i++){current=coll[i];

if(current.parentNode){current.parentNode.removeChild(current);
}}return coll;
},destroy:function(selector){if(this.length==0){return this;
}var Selector=qx.bom.Selector;
var coll=this;

if(selector){coll=this.filter(selector);

if(coll.length==0){return this;
}}var Manager=qx.event.Registration.getManager(this[0]);

for(var i=0,l=coll.length,current,inner;i<l;i++){current=coll[i];
Manager.removeAllListeners(current);
inner=Selector.query("*",current);

for(var j=0,jl=inner.length;j<jl;j++){Manager.removeAllListeners(inner[j]);
}if(current.parentNode){current.parentNode.removeChild(current);
}}if(selector){coll.end();
qx.lang.Array.exclude(this,coll);
}else{this.length=0;
}return this;
},empty:function(){var Collection=qx.bom.Collection;

for(var i=0,l=this.length;i<l;i++){Collection.query(">*",this[i]).destroy();
while(this.firstChild){this.removeChild(this.firstChild);
}}return this;
},clone:function(events){var Element=qx.bom.Element;
return events?
this.map(function(elem){return Element.clone(elem,true);
}):this.map(Element.clone,Element);
}},defer:function(statics){if(window.$==null){window.$=statics.create;
}}});
})();
qx.Class.define("qx.bom.Html",{statics:{__fixNonDirectlyClosableHelper:function(all,front,tag){return tag.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?all:front+"></"+tag+">";
},__convertMap:{opt:[1,"<select multiple='multiple'>","</select>"],leg:[1,"<fieldset>","</fieldset>"],table:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],def:qx.core.Environment.select("engine.name",{"mshtml":[1,"div<div>","</div>"],"default":null})},__convertHtmlString:function(html,context){var div=context.createElement("div");
html=html.replace(/(<(\w+)[^>]*?)\/>/g,this.__fixNonDirectlyClosableHelper);
var tags=html.replace(/^\s+/,"").substring(0,5).toLowerCase();
var wrap,map=this.__convertMap;

if(!tags.indexOf("<opt")){wrap=map.opt;
}else if(!tags.indexOf("<leg")){wrap=map.leg;
}else if(tags.match(/^<(thead|tbody|tfoot|colg|cap)/)){wrap=map.table;
}else if(!tags.indexOf("<tr")){wrap=map.tr;
}else if(!tags.indexOf("<td")||!tags.indexOf("<th")){wrap=map.td;
}else if(!tags.indexOf("<col")){wrap=map.col;
}else{wrap=map.def;
}if(wrap){div.innerHTML=wrap[1]+html+wrap[2];
var depth=wrap[0];

while(depth--){div=div.lastChild;
}}else{div.innerHTML=html;
}if((qx.core.Environment.get("engine.name")=="mshtml")){var hasBody=/<tbody/i.test(html);
var tbody=!tags.indexOf("<table")&&!hasBody?div.firstChild&&div.firstChild.childNodes:wrap[1]=="<table>"&&!hasBody?div.childNodes:[];

for(var j=tbody.length-1;j>=0;--j){if(tbody[j].tagName.toLowerCase()==="tbody"&&!tbody[j].childNodes.length){tbody[j].parentNode.removeChild(tbody[j]);
}}if(/^\s/.test(html)){div.insertBefore(context.createTextNode(html.match(/^\s*/)[0]),div.firstChild);
}}return qx.lang.Array.fromCollection(div.childNodes);
},clean:function(objs,context,fragment){context=context||document;
if(typeof context.createElement==="undefined"){context=context.ownerDocument||context[0]&&context[0].ownerDocument||document;
}if(!fragment&&objs.length===1&&typeof objs[0]==="string"){var match=/^<(\w+)\s*\/?>$/.exec(objs[0]);

if(match){return [context.createElement(match[1])];
}}var obj,ret=[];

for(var i=0,l=objs.length;i<l;i++){obj=objs[i];
if(typeof obj==="string"){obj=this.__convertHtmlString(obj,context);
}if(obj.nodeType){ret.push(obj);
}else if(obj instanceof qx.type.BaseArray){ret.push.apply(ret,Array.prototype.slice.call(obj,0));
}else if(obj.toElement){ret.push(obj.toElement());
}else{ret.push.apply(ret,obj);
}}if(fragment){var scripts=[],LArray=qx.lang.Array,elem,temp;

for(var i=0;ret[i];i++){elem=ret[i];

if(elem.nodeType==1&&elem.tagName.toLowerCase()==="script"&&(!elem.type||elem.type.toLowerCase()==="text/javascript")){if(elem.parentNode){elem.parentNode.removeChild(ret[i]);
}scripts.push(elem);
}else{if(elem.nodeType===1){temp=LArray.fromCollection(elem.getElementsByTagName("script"));
ret.splice.apply(ret,[i+1,0].concat(temp));
}fragment.appendChild(elem);
}}return scripts;
}return ret;
}}});
qx.Bootstrap.define("qx.io.ScriptLoader",{construct:function(){this.__oneventWrapped=qx.Bootstrap.bind(this.__onevent,this);
this.__elem=document.createElement("script");
},members:{__running:null,__disposed:null,__callback:null,__context:null,__oneventWrapped:null,__elem:null,load:function(url,callback,context){if(this.__running){throw new Error("Another request is still running!");
}this.__running=true;
this.__disposed=false;
var head=document.getElementsByTagName("head")[0];
var script=this.__elem;
this.__callback=callback||null;
this.__context=context||window;
script.type="text/javascript";
script.onerror=script.onload=script.onreadystatechange=this.__oneventWrapped;
script.src=url;
setTimeout(function(){head.appendChild(script);
},0);
},abort:function(){if(this.__running){this.dispose("abort");
}},dispose:function(status){if(this.__disposed){return;
}this.__disposed=true;
var script=this.__elem;
script.onerror=script.onload=script.onreadystatechange=null;
var scriptParent=script.parentNode;

if(scriptParent){scriptParent.removeChild(script);
}delete this.__running;
if(this.__callback){if(qx.core.Environment.get("engine.name")=="mshtml"||qx.core.Environment.get("engine.name")=="webkit"){var self=this;
setTimeout(qx.event.GlobalError.observeMethod(function(){self.__callback.call(self.__context,status);
delete self.__callback;
}),0);
}else{this.__callback.call(this.__context,status);
delete this.__callback;
}}},__onevent:qx.event.GlobalError.observeMethod(qx.core.Environment.select("engine.name",{"mshtml":function(e){var state=this.__elem.readyState;

if(state=="loaded"){this.dispose("success");
}else if(state=="complete"){this.dispose("success");
}else{return;
}},"opera":function(e){if(qx.Bootstrap.isString(e)||e.type==="error"){return this.dispose("fail");
}else if(e.type==="load"){return this.dispose("success");
}else{return;
}},"default":function(e){if(qx.Bootstrap.isString(e)||e.type==="error"){this.dispose("fail");
}else if(e.type==="load"){this.dispose("success");
}else if(e.type==="readystatechange"&&(e.target.readyState==="complete"||e.target.readyState==="loaded")){this.dispose("success");
}else{return;
}}}))}});
