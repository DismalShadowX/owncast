(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1591],{42011:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config-chat",function(){return t(7343)}])},20284:function(e,n,t){"use strict";t.d(n,{Q:function(){return u},Y:function(){return d}});var a=t(85893),s=t(67294),l=t(47271),c=t(14845),r=t(62376),i=t(65326);let{Title:o}=l.default,u="#5a67d8",d=e=>{let{title:n,description:t,placeholder:l,maxLength:d,values:f,handleDeleteIndex:h,handleCreateString:m,submitStatus:g,continuousStatusMessage:p}=e,[b,v]=(0,s.useState)("");return(0,a.jsxs)("div",{className:"edit-string-array-container",children:[(0,a.jsx)(o,{level:3,className:"section-title",children:n}),(0,a.jsx)("p",{className:"description",children:t}),(0,a.jsx)("div",{className:"edit-current-strings",children:null==f?void 0:f.map((e,n)=>(0,a.jsx)(c.Z,{closable:!0,onClose:()=>{h(n)},color:u,children:e},"tag-".concat(e,"-").concat(n)))}),p&&(0,a.jsx)("div",{className:"continuous-status-section",children:(0,a.jsx)(i.E,{status:p})}),(0,a.jsx)("div",{className:"add-new-string-section",children:(0,a.jsx)(r.nv,{fieldName:"string-input",value:b,onChange:e=>{let{value:n}=e;v(n)},onPressEnter:()=>{m(b.trim()),v("")},maxLength:d,placeholder:l,status:g})})]})};d.defaultProps={maxLength:50,description:null,submitStatus:null,continuousStatusMessage:null}},86088:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var a=t(85893),s=t(67294),l=t(38376),c=t(70329),r=t(65326),i=t(53068),o=t(84443);let u=e=>{let{apiPath:n,checked:t,reversed:u=!1,configPath:d="",disabled:f=!1,fieldName:h,label:m,tip:g,useSubmit:p,onChange:b}=e,[v,x]=(0,s.useState)(null),C=null,{setFieldInConfigState:N}=(0,s.useContext)(o.a)||{},j=()=>{x(null),clearTimeout(C),C=null},k=async e=>{if(p){x((0,c.kg)(c.Jk));let t=u?!e:e;await (0,i.Si)({apiPath:n,data:{value:t},onSuccess:()=>{N({fieldName:h,value:t,path:d}),x((0,c.kg)(c.zv))},onError:e=>{x((0,c.kg)(c.Un,"There was an error: ".concat(e)))}}),C=setTimeout(j,i.sI)}b&&b(e)},E=null!==v&&v.type===c.Jk;return(0,a.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[m&&(0,a.jsx)("div",{className:"label-side",children:(0,a.jsx)("span",{className:"formfield-label",children:m})}),(0,a.jsxs)("div",{className:"input-side",children:[(0,a.jsxs)("div",{className:"input-group",children:[(0,a.jsx)(l.Z,{className:"switch field-".concat(h),loading:E,onChange:k,defaultChecked:t,checked:t,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:f}),(0,a.jsx)(r.E,{status:v})]}),(0,a.jsx)("p",{className:"field-tip",children:g})]})]})};u.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},55050:function(e,n,t){"use strict";var a=t(75664);n.Z=a.Z},49947:function(e,n,t){"use strict";var a=t(82215),s=t(63085),l=a.ZP;l.Header=a.h4,l.Footer=a.$_,l.Content=a.VY,l.Sider=s.Z,l._InternalSiderContext=s.D,n.default=l},6647:function(e,n,t){"use strict";var a=t(37525);n.Z=a.Z},38376:function(e,n,t){"use strict";t.d(n,{Z:function(){return C}});var a=t(87462),s=t(4942),l=t(38813),c=t(93967),r=t.n(c),i=t(97685),o=t(45987),u=t(67294),d=t(21640),f=t(79097),h=u.forwardRef(function(e,n){var t,a=e.prefixCls,l=void 0===a?"rc-switch":a,c=e.className,h=e.checked,m=e.defaultChecked,g=e.disabled,p=e.loadingIcon,b=e.checkedChildren,v=e.unCheckedChildren,x=e.onClick,C=e.onChange,N=e.onKeyDown,j=(0,o.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),k=(0,d.Z)(!1,{value:h,defaultValue:m}),E=(0,i.Z)(k,2),Z=E[0],y=E[1];function S(e,n){var t=Z;return g||(y(t=e),null==C||C(t,n)),t}var w=r()(l,c,(t={},(0,s.Z)(t,"".concat(l,"-checked"),Z),(0,s.Z)(t,"".concat(l,"-disabled"),g),t));return u.createElement("button",Object.assign({},j,{type:"button",role:"switch","aria-checked":Z,disabled:g,className:w,ref:n,onKeyDown:function(e){e.which===f.Z.LEFT?S(!1,e):e.which===f.Z.RIGHT&&S(!0,e),null==N||N(e)},onClick:function(e){var n=S(!Z,e);null==x||x(n,e)}}),p,u.createElement("span",{className:"".concat(l,"-inner")},Z?b:v))});h.displayName="Switch";var m=t(71946),g=t(6089),p=t(41395),b=t(40823),v=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>n.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)0>n.indexOf(a[s])&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t},x=u.forwardRef(function(e,n){var t=e.prefixCls,c=e.size,i=e.disabled,o=e.loading,d=e.className,f=v(e,["prefixCls","size","disabled","loading","className"]),x=u.useContext(m.E_),C=x.getPrefixCls,N=x.direction,j=u.useContext(p.Z),k=u.useContext(g.Z),E=(null!=i?i:k)||o,Z=C("switch",t),y=u.createElement("div",{className:"".concat(Z,"-handle")},o&&u.createElement(l.Z,{className:"".concat(Z,"-loading-icon")})),S=r()((0,s.Z)((0,s.Z)((0,s.Z)({},"".concat(Z,"-small"),"small"===(c||j)),"".concat(Z,"-loading"),o),"".concat(Z,"-rtl"),"rtl"===N),void 0===d?"":d);return u.createElement(b.Z,{insertExtraNode:!0},u.createElement(h,(0,a.Z)({},f,{prefixCls:Z,className:S,disabled:E,ref:n,loadingIcon:y})))});x.__ANT_SWITCH=!0;var C=x},14845:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var a=t(4942),s=t(87462),l=t(97685),c=t(96494),r=t(93967),i=t.n(r),o=t(55548),u=t(67294),d=t(71946),f=t(5505),h=t(40823),m=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>n.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)0>n.indexOf(a[s])&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t},g=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>n.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,a=Object.getOwnPropertySymbols(e);s<a.length;s++)0>n.indexOf(a[s])&&Object.prototype.propertyIsEnumerable.call(e,a[s])&&(t[a[s]]=e[a[s]]);return t},p=new RegExp("^(".concat(f.Y.join("|"),")(-inverse)?$")),b=new RegExp("^(".concat(f.E.join("|"),")$")),v=u.forwardRef(function(e,n){var t=e.prefixCls,r=e.className,f=e.style,m=e.children,v=e.icon,x=e.color,C=e.onClose,N=e.closeIcon,j=e.closable,k=g(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),E=u.useContext(d.E_),Z=E.getPrefixCls,y=E.direction,S=u.useState(!0),w=(0,l.Z)(S,2),O=w[0],P=w[1];u.useEffect(function(){"visible"in k&&P(k.visible)},[k.visible]);var _=function(){return!!x&&(p.test(x)||b.test(x))},U=(0,s.Z)({backgroundColor:x&&!_()?x:void 0},f),I=_(),D=Z("tag",t),T=i()(D,(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},"".concat(D,"-").concat(x),I),"".concat(D,"-has-color"),x&&!I),"".concat(D,"-hidden"),!O),"".concat(D,"-rtl"),"rtl"===y),r),M=function(e){e.stopPropagation(),null==C||C(e),!e.defaultPrevented&&("visible"in k||P(!1))},F="onClick"in k||m&&"a"===m.type,A=(0,o.Z)(k,["visible"]),J=v||null,R=J?u.createElement(u.Fragment,null,J,u.createElement("span",null,m)):m,z=u.createElement("span",(0,s.Z)({},A,{ref:n,className:T,style:U}),R,void 0!==j&&j?N?u.createElement("span",{className:"".concat(D,"-close-icon"),onClick:M},N):u.createElement(c.Z,{className:"".concat(D,"-close-icon"),onClick:M}):null);return F?u.createElement(h.Z,null,z):z});v.CheckableTag=function(e){var n=e.prefixCls,t=e.className,l=e.checked,c=e.onChange,r=e.onClick,o=m(e,["prefixCls","className","checked","onChange","onClick"]),f=(0,u.useContext(d.E_).getPrefixCls)("tag",n),h=i()(f,(0,a.Z)((0,a.Z)({},"".concat(f,"-checkable"),!0),"".concat(f,"-checkable-checked"),l),t);return u.createElement("span",(0,s.Z)({},o,{className:h,onClick:function(e){null==c||c(!l),null==r||r(e)}}))};var x=v},7343:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var a=t(85893),s=t(47271),l=t(6647),c=t(55050),r=t(67294),i=t(62376),o=t(55926),u=t(86088),d=t(20284),f=t(70329),h=t(53068),m=t(84443),g=t(695);function p(){var e;let{Title:n}=s.default,[t,g]=(0,r.useState)(null),[p,b]=(0,r.useState)(null),[v,x]=(0,r.useState)(null),{serverConfig:C,setFieldInConfigState:N}=(0,r.useContext)(m.a)||{},{chatDisabled:j,chatJoinMessagesEnabled:k,forbiddenUsernames:E,instanceDetails:Z,suggestedUsernames:y,chatEstablishedUserMode:S,chatSpamProtectionEnabled:w,chatSlurFilterEnabled:O}=C,{welcomeMessage:P}=Z,_=e=>{let{fieldName:n,value:a}=e;g({...t,[n]:a})};function U(){b(null)}function I(){(0,h.Si)({apiPath:h.CJ,data:{value:t.forbiddenUsernames},onSuccess:()=>{N({fieldName:"forbiddenUsernames",value:t.forbiddenUsernames}),b((0,f.kg)(f.zv)),setTimeout(U,h.sI)},onError:e=>{b((0,f.kg)(f.Un,e)),setTimeout(U,h.sI)}})}function D(){x(null)}function T(){(0,h.Si)({apiPath:h.cf,data:{value:t.suggestedUsernames},onSuccess:()=>{N({fieldName:"suggestedUsernames",value:t.suggestedUsernames}),x((0,f.kg)(f.zv)),setTimeout(D,h.sI)},onError:e=>{b((0,f.kg)(f.Un,e)),setTimeout(D,h.sI)}})}return((0,r.useEffect)(()=>{g({chatDisabled:j,chatJoinMessagesEnabled:k,forbiddenUsernames:E,suggestedUsernames:y,welcomeMessage:P,chatEstablishedUserMode:S,chatSpamProtectionEnabled:w,chatSlurFilterEnabled:O})},[C]),t)?(0,a.jsxs)("div",{className:"config-server-details-form",children:[(0,a.jsx)(n,{children:"Chat Settings"}),(0,a.jsxs)(l.Z,{gutter:[45,16],children:[(0,a.jsx)(c.Z,{md:24,lg:12,children:(0,a.jsxs)("div",{className:"form-module",children:[(0,a.jsx)(u.Z,{fieldName:"chatDisabled",...h.yj,checked:!t.chatDisabled,reversed:!0,onChange:function(e){_({fieldName:"chatDisabled",value:!e})}}),(0,a.jsx)(u.Z,{fieldName:"chatJoinMessagesEnabled",...h.kB,checked:t.chatJoinMessagesEnabled,onChange:function(e){_({fieldName:"chatJoinMessagesEnabled",value:e})}}),(0,a.jsx)(o.$7,{fieldName:"welcomeMessage",...h.IX,type:i.Sk,value:t.welcomeMessage,initialValue:P,onChange:_}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(d.Y,{title:h.Dg.label,placeholder:h.Dg.placeholder,description:h.Dg.tip,values:t.forbiddenUsernames,handleDeleteIndex:function(e){t.forbiddenUsernames.splice(e,1),I()},handleCreateString:function(e){t.forbiddenUsernames.push(e),_({fieldName:"forbiddenUsernames",value:t.forbiddenUsernames}),I()},submitStatus:p}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(d.Y,{title:h.AN.label,placeholder:h.AN.placeholder,description:h.AN.tip,values:t.suggestedUsernames,handleDeleteIndex:function(e){t.suggestedUsernames.splice(e,1),T()},handleCreateString:function(e){t.suggestedUsernames.push(e),_({fieldName:"suggestedUsernames",value:t.suggestedUsernames}),T()},submitStatus:v,continuousStatusMessage:0===(e=t.suggestedUsernames.length)?(0,f.kg)("success",h.AN.no_entries):e>0&&e<10?(0,f.kg)("warning",h.AN.min_not_reached):null})]})}),(0,a.jsx)(c.Z,{md:24,lg:12,children:(0,a.jsxs)("div",{className:"form-module",children:[(0,a.jsx)(u.Z,{fieldName:"chatSpamProtectionEnabled",...h.U5,checked:t.chatSpamProtectionEnabled,onChange:function(e){_({fieldName:"chatSpamProtectionEnabled",value:e})}}),(0,a.jsx)(u.Z,{fieldName:"chatEstablishedUserMode",...h.dj,checked:t.chatEstablishedUserMode,onChange:function(e){_({fieldName:"chatEstablishedUserMode",value:e})}}),(0,a.jsx)(u.Z,{fieldName:"chatSlurFilterEnabled",...h.T_,checked:t.chatSlurFilterEnabled,onChange:function(e){_({fieldName:"chatSlurFilterEnabled",value:e})}})]})})]})]}):null}p.getLayout=function(e){return(0,a.jsx)(g.l,{page:e})}},11163:function(e,n,t){e.exports=t(73035)},88370:function(e,n,t){"use strict";function a(e){return n=>{let t=(e?Math[e]:Math.trunc)(n);return 0===t?0:t}}t.d(n,{u:function(){return a}})},87691:function(e,n,t){"use strict";t.d(n,{_:function(){return s}});var a=t(32841);function s(e,n){return+(0,a.Q)(e)-+(0,a.Q)(n)}},20209:function(e,n,t){"use strict";t.d(n,{c:function(){return l}});var a=t(88370),s=t(87691);function l(e,n,t){let l=(0,s._)(e,n)/1e3;return(0,a.u)(t?.roundingMethod)(l)}},32841:function(e,n,t){"use strict";function a(e){let n=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===n?new e.constructor(+e):new Date("number"==typeof e||"[object Number]"===n||"string"==typeof e||"[object String]"===n?e:NaN)}t.d(n,{Q:function(){return a}})}},function(e){e.O(0,[6410,8768,947,7406,4716,2862,7271,9083,811,695,2888,9774,179],function(){return e(e.s=42011)}),_N_E=e.O()}]);