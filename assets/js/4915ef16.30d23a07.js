"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8952],{5318:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return d}});var r=n(7378);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(f,o(o({ref:e},c),{},{components:n})):r.createElement(f,o({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6002:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(5773),a=n(808),i=(n(7378),n(5318)),o=["components"],l={},s=void 0,u={unversionedId:"instructions/permissionSet",id:"instructions/permissionSet",title:"permissionSet",description:"Sets the permission in the PermissionAccount",source:"@site/idl/instructions/permissionSet.md",sourceDirName:"instructions",slug:"/instructions/permissionSet",permalink:"/idl/instructions/permissionSet",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"permissionInit",permalink:"/idl/instructions/permissionInit"},next:{title:"programConfig",permalink:"/idl/instructions/programConfig"}},c={},p=[{value:"Accounts",id:"accounts",level:2},{value:"Params",id:"params",level:2}],m={toc:p};function d(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Sets the permission in the PermissionAccount"),(0,i.kt)("h2",{id:"accounts"},"Accounts"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"isMut"),(0,i.kt)("th",{parentName:"tr",align:null},"isSigner"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"permission"),(0,i.kt)("td",{parentName:"tr",align:null},"TRUE"),(0,i.kt)("td",{parentName:"tr",align:null},"FALSE"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("a",{parentName:"td",href:"/idl/accounts/PermissionAccountData"},"PermissionAccountData")," that is being updated.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"authority"),(0,i.kt)("td",{parentName:"tr",align:null},"FALSE"),(0,i.kt)("td",{parentName:"tr",align:null},"TRUE"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("a",{parentName:"td",href:"/idl/accounts/PermissionAccountData"},"PermissionAccountData")," authority that can update an account's permissions.")))),(0,i.kt)("h2",{id:"params"},"Params"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"permission"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/idl/types/SwitchboardPermission"},"SwitchboardPermission")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("a",{parentName:"td",href:"/idl/types/SwitchboardPermission"},"SwitchboardPermission")," enumeration to set.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"enable"),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies whether to enable or disable the permission.")))))}d.isMDXComponent=!0}}]);