import{g as c}from"./index-UnnYb8SL.js";function d(e,n){for(var r=0;r<n.length;r++){const t=n[r];if(typeof t!="string"&&!Array.isArray(t)){for(const a in t)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(t,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>t[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var o,s;function p(){if(s)return o;s=1,o=e,e.displayName="javastacktrace",e.aliases=[];function e(n){n.languages.javastacktrace={summary:{pattern:/^([\t ]*)(?:(?:Caused by:|Suppressed:|Exception in thread "[^"]*")[\t ]+)?[\w$.]+(?::.*)?$/m,lookbehind:!0,inside:{keyword:{pattern:/^([\t ]*)(?:(?:Caused by|Suppressed)(?=:)|Exception in thread)/m,lookbehind:!0},string:{pattern:/^(\s*)"[^"]*"/,lookbehind:!0},exceptions:{pattern:/^(:?\s*)[\w$.]+(?=:|$)/,lookbehind:!0,inside:{"class-name":/[\w$]+$/,namespace:/\b[a-z]\w*\b/,punctuation:/\./}},message:{pattern:/(:\s*)\S.*/,lookbehind:!0,alias:"string"},punctuation:/:/}},"stack-frame":{pattern:/^([\t ]*)at (?:[\w$./]|@[\w$.+-]*\/)+(?:<init>)?\([^()]*\)/m,lookbehind:!0,inside:{keyword:{pattern:/^(\s*)at(?= )/,lookbehind:!0},source:[{pattern:/(\()\w+\.\w+:\d+(?=\))/,lookbehind:!0,inside:{file:/^\w+\.\w+/,punctuation:/:/,"line-number":{pattern:/\b\d+\b/,alias:"number"}}},{pattern:/(\()[^()]*(?=\))/,lookbehind:!0,inside:{keyword:/^(?:Native Method|Unknown Source)$/}}],"class-name":/[\w$]+(?=\.(?:<init>|[\w$]+)\()/,function:/(?:<init>|[\w$]+)(?=\()/,"class-loader":{pattern:/(\s)[a-z]\w*(?:\.[a-z]\w*)*(?=\/[\w@$.]*\/)/,lookbehind:!0,alias:"namespace",inside:{punctuation:/\./}},module:{pattern:/([\s/])[a-z]\w*(?:\.[a-z]\w*)*(?:@[\w$.+-]*)?(?=\/)/,lookbehind:!0,inside:{version:{pattern:/(@)[\s\S]+/,lookbehind:!0,alias:"number"},punctuation:/[@.]/}},namespace:{pattern:/(?:\b[a-z]\w*\.)+/,inside:{punctuation:/\./}},punctuation:/[()/.]/}},more:{pattern:/^([\t ]*)\.{3} \d+ [a-z]+(?: [a-z]+)*/m,lookbehind:!0,inside:{punctuation:/\.{3}/,number:/\d+/,keyword:/\b[a-z]+(?: [a-z]+)*\b/}}}}return o}var u=p();const l=c(u),k=d({__proto__:null,default:l},[u]);export{k as j};
