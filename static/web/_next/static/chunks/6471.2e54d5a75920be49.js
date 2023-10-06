"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6471],{36471:function(n,t,e){var i,r,a;function inBlock(n,t,e){return function(i,r){for(;!i.eol();){if(i.match(t)){r.tokenize=inText;break}i.next()}return e&&(r.tokenize=e),n}}function inLine(n){return function(t,e){for(;!t.eol();)t.next();return e.tokenize=inText,n}}function inText(n,t){function chain(e){return t.tokenize=e,e(n,t)}var e=n.sol(),i=n.next();switch(i){case"{":return n.eat("/"),n.eatSpace(),n.eatWhile(/[^\s\u00a0=\"\'\/?(}]/),t.tokenize=inPlugin,"tag";case"_":if(n.eat("_"))return chain(inBlock("strong","__",inText));break;case"'":if(n.eat("'"))return chain(inBlock("em","''",inText));break;case"(":if(n.eat("("))return chain(inBlock("link","))",inText));break;case"[":return chain(inBlock("url","]",inText));case"|":if(n.eat("|"))return chain(inBlock("comment","||"));break;case"-":if(n.eat("="))return chain(inBlock("header string","=-",inText));if(n.eat("-"))return chain(inBlock("error tw-deleted","--",inText));break;case"=":if(n.match("=="))return chain(inBlock("tw-underline","===",inText));break;case":":if(n.eat(":"))return chain(inBlock("comment","::"));break;case"^":return chain(inBlock("tw-box","^"));case"~":if(n.match("np~"))return chain(inBlock("meta","~/np~"))}if(e)switch(i){case"!":if(n.match("!!!!!")||n.match("!!!!"))return chain(inLine("header string"));if(n.match("!!!"))return chain(inLine("header string"));if(n.match("!!"))return chain(inLine("header string"));else return chain(inLine("header string"));case"*":case"#":case"+":return chain(inLine("tw-listitem bracket"))}return null}function inPlugin(n,t){var e=n.next(),r=n.peek();return"}"==e?(t.tokenize=inText,"tag"):"("==e||")"==e?"bracket":"="==e?(i="equals",">"==r&&(n.next(),r=n.peek()),/[\'\"]/.test(r)||(t.tokenize=function(n,t){for(;!n.eol();){var e=n.next(),i=n.peek();if(" "==e||","==e||/[ )}]/.test(i)){t.tokenize=inPlugin;break}}return"string"}),"operator"):/[\'\"]/.test(e)?(t.tokenize=function(n,t){for(;!n.eol();)if(n.next()==e){t.tokenize=inPlugin;break}return"string"},t.tokenize(n,t)):(n.eatWhile(/[^\s\u00a0=\"\'\/?]/),"keyword")}function pass(){for(var n=arguments.length-1;n>=0;n--)r.cc.push(arguments[n])}function cont(){return pass.apply(null,arguments),!0}function pushContext(n,t){var e=r.context&&r.context.noIndent;r.context={prev:r.context,pluginName:n,indent:r.indented,startOfLine:t,noIndent:e}}function popContext(){r.context&&(r.context=r.context.prev)}function attributes(n){return"keyword"==n?(a="attribute",cont(attributes)):"equals"==n?cont(attvalue,attributes):pass()}function attvalue(n){return"keyword"==n?(a="string",cont()):"string"==n?cont(attvaluemaybe):pass()}function attvaluemaybe(n){return"string"==n?cont(attvaluemaybe):pass()}e.r(t),e.d(t,{tiki:function(){return c}});let c={name:"tiki",startState:function(){return{tokenize:inText,cc:[],indented:0,startOfLine:!0,pluginName:null,context:null}},token:function(n,t){if(n.sol()&&(t.startOfLine=!0,t.indented=n.indentation()),n.eatSpace())return null;a=i=null;var e=t.tokenize(n,t);if((e||i)&&"comment"!=e)for(r=t;!(t.cc.pop()||function(n){if("openPlugin"==n){var t;return r.pluginName=null,cont(attributes,(t=r.startOfLine,function(n){return"selfclosePlugin"==n||"endPlugin"==n||"endPlugin"==n&&pushContext(r.pluginName,t),cont()}))}if("closePlugin"==n){var e,i=!1;return r.context?(i=null!=r.context.pluginName,popContext()):i=!0,i&&(a="error"),cont((e=i,function(n){return(e&&(a="error"),"endPlugin"==n)?cont():pass()}))}return"string"==n&&(r.context&&"!cdata"==r.context.name||pushContext("!cdata"),r.tokenize==inText&&popContext()),cont()})(i||e););return t.startOfLine=!1,a||e},indent:function(n,t,e){var i=n.context;if(i&&i.noIndent)return 0;for(i&&/^{\//.test(t)&&(i=i.prev);i&&!i.startOfLine;)i=i.prev;return i?i.indent+e.unit:0}}}}]);