import{g as l}from"./index-UnnYb8SL.js";import{r as u}from"./c-ltRIfGhU.js";function f(r,t){for(var e=0;e<t.length;e++){const o=t[e];if(typeof o!="string"&&!Array.isArray(o)){for(const c in o)if(c!=="default"&&!(c in r)){const n=Object.getOwnPropertyDescriptor(o,c);n&&Object.defineProperty(r,c,n.get?n:{enumerable:!0,get:()=>o[c]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var a,i;function g(){if(i)return a;i=1;var r=u();a=t,t.displayName="objectivec",t.aliases=["objc"];function t(e){e.register(r),e.languages.objectivec=e.languages.extend("c",{string:{pattern:/@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,greedy:!0},keyword:/\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,operator:/-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/}),delete e.languages.objectivec["class-name"],e.languages.objc=e.languages.objectivec}return a}var s=g();const b=l(s),v=f({__proto__:null,default:b},[s]);export{v as o};
