"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1256],{5318:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>s});var r=n(7378);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),c=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=c(n),s=a,k=m["".concat(o,".").concat(s)]||m[s]||d[s]||l;return n?r.createElement(k,u(u({ref:e},p),{},{components:n})):r.createElement(k,u({ref:e},p))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,u=new Array(l);u[0]=m;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:a,u[1]=i;for(var c=2;c<l;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4825:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>u,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(5773),a=(n(7378),n(5318));const l={},u=void 0,i={unversionedId:"accounts/VrfAccountData",id:"accounts/VrfAccountData",title:"VrfAccountData",description:"Size 0.203134560SOL",source:"@site/idl/accounts/VrfAccountData.md",sourceDirName:"accounts",slug:"/accounts/VrfAccountData",permalink:"/idl/accounts/VrfAccountData",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SbState",permalink:"/idl/accounts/SbState"},next:{title:"Overview",permalink:"/idl/instructions/"}},o={},c=[],p={toc:c};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("b",null,"Size: "),"29058 Bytes",(0,a.kt)("br",null),(0,a.kt)("b",null,"Rent Exemption: "),"0.203134560SOL",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"status"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/idl/types/VrfStatus"},"VrfStatus")),(0,a.kt)("td",{parentName:"tr",align:null},"The current status of the VRF account.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"counter"),(0,a.kt)("td",{parentName:"tr",align:null},"u128"),(0,a.kt)("td",{parentName:"tr",align:null},"Incremental counter for tracking VRF rounds.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"authority"),(0,a.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,a.kt)("td",{parentName:"tr",align:null},"On-chain account delegated for making account changes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"oracleQueue"),(0,a.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,a.kt)("td",{parentName:"tr",align:null},"The ",(0,a.kt)("a",{parentName:"td",href:"/idl/accounts/OracleQueueAccountData"},"OracleQueueAccountData")," that is assigned to fulfill VRF update request.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"escrow"),(0,a.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,a.kt)("td",{parentName:"tr",align:null},"The token account used to hold funds for VRF update request.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"callback"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/idl/types/CallbackZC"},"CallbackZC")),(0,a.kt)("td",{parentName:"tr",align:null},"The callback that is invoked when an update request is successfully verified.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"batchSize"),(0,a.kt)("td",{parentName:"tr",align:null},"u32"),(0,a.kt)("td",{parentName:"tr",align:null},"The number of oracles assigned to a VRF update request.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"builders"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/idl/types/VrfBuilder"},"VrfBuilder"),"[8]"),(0,a.kt)("td",{parentName:"tr",align:null},"Struct containing the intermediate state between VRF crank actions.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"buildersLen"),(0,a.kt)("td",{parentName:"tr",align:null},"u32"),(0,a.kt)("td",{parentName:"tr",align:null},"The number of builders.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"testMode"),(0,a.kt)("td",{parentName:"tr",align:null},"bool"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"currentRound"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/idl/types/VrfRound"},"VrfRound")),(0,a.kt)("td",{parentName:"tr",align:null},"Oracle results from the current round of update request that has not been accepted as valid yet")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ebuf"),(0,a.kt)("td",{parentName:"tr",align:null},"u8","[1024]"),(0,a.kt)("td",{parentName:"tr",align:null},"Reserved.")))))}d.isMDXComponent=!0}}]);