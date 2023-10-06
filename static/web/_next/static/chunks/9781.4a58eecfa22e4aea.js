"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9781],{39781:function(i,l,e){function mkGas(i){var l=[],e="",a={".abort":"builtin",".align":"builtin",".altmacro":"builtin",".ascii":"builtin",".asciz":"builtin",".balign":"builtin",".balignw":"builtin",".balignl":"builtin",".bundle_align_mode":"builtin",".bundle_lock":"builtin",".bundle_unlock":"builtin",".byte":"builtin",".cfi_startproc":"builtin",".comm":"builtin",".data":"builtin",".def":"builtin",".desc":"builtin",".dim":"builtin",".double":"builtin",".eject":"builtin",".else":"builtin",".elseif":"builtin",".end":"builtin",".endef":"builtin",".endfunc":"builtin",".endif":"builtin",".equ":"builtin",".equiv":"builtin",".eqv":"builtin",".err":"builtin",".error":"builtin",".exitm":"builtin",".extern":"builtin",".fail":"builtin",".file":"builtin",".fill":"builtin",".float":"builtin",".func":"builtin",".global":"builtin",".gnu_attribute":"builtin",".hidden":"builtin",".hword":"builtin",".ident":"builtin",".if":"builtin",".incbin":"builtin",".include":"builtin",".int":"builtin",".internal":"builtin",".irp":"builtin",".irpc":"builtin",".lcomm":"builtin",".lflags":"builtin",".line":"builtin",".linkonce":"builtin",".list":"builtin",".ln":"builtin",".loc":"builtin",".loc_mark_labels":"builtin",".local":"builtin",".long":"builtin",".macro":"builtin",".mri":"builtin",".noaltmacro":"builtin",".nolist":"builtin",".octa":"builtin",".offset":"builtin",".org":"builtin",".p2align":"builtin",".popsection":"builtin",".previous":"builtin",".print":"builtin",".protected":"builtin",".psize":"builtin",".purgem":"builtin",".pushsection":"builtin",".quad":"builtin",".reloc":"builtin",".rept":"builtin",".sbttl":"builtin",".scl":"builtin",".section":"builtin",".set":"builtin",".short":"builtin",".single":"builtin",".size":"builtin",".skip":"builtin",".sleb128":"builtin",".space":"builtin",".stab":"builtin",".string":"builtin",".struct":"builtin",".subsection":"builtin",".symver":"builtin",".tag":"builtin",".text":"builtin",".title":"builtin",".type":"builtin",".uleb128":"builtin",".val":"builtin",".version":"builtin",".vtable_entry":"builtin",".vtable_inherit":"builtin",".warning":"builtin",".weak":"builtin",".weakref":"builtin",".word":"builtin"},t={};function clikeComment(i,l){for(var e,a=!1;null!=(e=i.next());){if("/"===e&&a){l.tokenize=null;break}a="*"===e}return"comment"}return"x86"===i?(e="#",t.al="variable",t.ah="variable",t.ax="variable",t.eax="variableName.special",t.rax="variableName.special",t.bl="variable",t.bh="variable",t.bx="variable",t.ebx="variableName.special",t.rbx="variableName.special",t.cl="variable",t.ch="variable",t.cx="variable",t.ecx="variableName.special",t.rcx="variableName.special",t.dl="variable",t.dh="variable",t.dx="variable",t.edx="variableName.special",t.rdx="variableName.special",t.si="variable",t.esi="variableName.special",t.rsi="variableName.special",t.di="variable",t.edi="variableName.special",t.rdi="variableName.special",t.sp="variable",t.esp="variableName.special",t.rsp="variableName.special",t.bp="variable",t.ebp="variableName.special",t.rbp="variableName.special",t.ip="variable",t.eip="variableName.special",t.rip="variableName.special",t.cs="keyword",t.ds="keyword",t.ss="keyword",t.es="keyword",t.fs="keyword",t.gs="keyword"):("arm"===i||"armv6"===i)&&(e="@",a.syntax="builtin",t.r0="variable",t.r1="variable",t.r2="variable",t.r3="variable",t.r4="variable",t.r5="variable",t.r6="variable",t.r7="variable",t.r8="variable",t.r9="variable",t.r10="variable",t.r11="variable",t.r12="variable",t.sp="variableName.special",t.lr="variableName.special",t.pc="variableName.special",t.r13=t.sp,t.r14=t.lr,t.r15=t.pc,l.push(function(i,l){if("#"===i)return l.eatWhile(/\w/),"number"})),{name:"gas",startState:function(){return{tokenize:null}},token:function(i,n){if(n.tokenize)return n.tokenize(i,n);if(i.eatSpace())return null;var b,r=i.next();if("/"===r&&i.eat("*"))return n.tokenize=clikeComment,clikeComment(i,n);if(r===e)return i.skipToEnd(),"comment";if('"'===r)return function(i,l){for(var e,a=!1;null!=(e=i.next());){if('"'===e&&!a)return!1;a=!a&&"\\"===e}}(i,0),"string";if("."===r)return i.eatWhile(/\w/),(b=a[i.current().toLowerCase()])||null;if("="===r)return i.eatWhile(/\w/),"tag";if("{"===r||"}"===r)return"bracket";if(/\d/.test(r))return"0"===r&&i.eat("x")?i.eatWhile(/[0-9a-fA-F]/):i.eatWhile(/\d/),"number";if(/\w/.test(r))return(i.eatWhile(/\w/),i.eat(":"))?"tag":(b=t[i.current().toLowerCase()])||null;for(var u=0;u<l.length;u++)if(b=l[u](r,i,n))return b},languageData:{commentTokens:{line:e,block:{open:"/*",close:"*/"}}}}}e.r(l),e.d(l,{gas:function(){return a},gasArm:function(){return t}});let a=mkGas("x86"),t=mkGas("arm")}}]);