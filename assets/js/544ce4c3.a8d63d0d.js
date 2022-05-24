"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5815],{5318:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return m}});var n=r(7378);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var i=n.createContext({}),c=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):u(u({},e),t)),r},p=function(t){var e=c(t.components);return n.createElement(i.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),f=c(r),m=a,s=f["".concat(i,".").concat(m)]||f[m]||d[m]||l;return r?n.createElement(s,u(u({ref:e},p),{},{components:r})):n.createElement(s,u({ref:e},p))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,u=new Array(l);u[0]=f;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o.mdxType="string"==typeof t?t:a,u[1]=o;for(var c=2;c<l;c++)u[c]=r[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2890:function(t,e,r){r.r(e),r.d(e,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var n=r(2685),a=r(1244),l=(r(7378),r(5318)),u=["components"],o={},i=void 0,c={unversionedId:"accounts/BufferRelayerAccountData",id:"accounts/BufferRelayerAccountData",title:"BufferRelayerAccountData",description:"| Field                 | Type                                                | Description                                                                                                                                          |",source:"@site/idl/accounts/BufferRelayerAccountData.md",sourceDirName:"accounts",slug:"/accounts/BufferRelayerAccountData",permalink:"/idl/accounts/BufferRelayerAccountData",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AggregatorHistoryBuffer",permalink:"/idl/accounts/AggregatorHistoryBuffer"},next:{title:"CrankAccountData",permalink:"/idl/accounts/CrankAccountData"}},p={},d=[],f={toc:d};function m(t){var e=t.components,r=(0,a.Z)(t,u);return(0,l.kt)("wrapper",(0,n.Z)({},f,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"u8","[32]"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the buffer account to store on-chain.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"queuePubkey"),(0,l.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,l.kt)("td",{parentName:"tr",align:null},"Public key of the ",(0,l.kt)("a",{parentName:"td",href:"/idl/accounts/OracleQueueAccountData"},"OracleQueueAccountData")," that is currently assigned to fulfill buffer relayer update request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"escrow"),(0,l.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,l.kt)("td",{parentName:"tr",align:null},"Token account to reward oracles for completing update request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"authority"),(0,l.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,l.kt)("td",{parentName:"tr",align:null},"The account delegated as the authority for making account changes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jobPubkey"),(0,l.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,l.kt)("td",{parentName:"tr",align:null},"Public key of the ",(0,l.kt)("a",{parentName:"td",href:"/idl/accounts/JobAccountData"},"JobAccountData")," that defines how the buffer relayer is updated")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jobHash"),(0,l.kt)("td",{parentName:"tr",align:null},"u8","[32]"),(0,l.kt)("td",{parentName:"tr",align:null},"Used to protect against malicious RPC nodes providing incorrect task definitions to oracles before fulfillment")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"minUpdateDelaySeconds"),(0,l.kt)("td",{parentName:"tr",align:null},"u32"),(0,l.kt)("td",{parentName:"tr",align:null},"Minimum delay between update request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"isLocked"),(0,l.kt)("td",{parentName:"tr",align:null},"bool"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether buffer relayer config is locked for further changes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"currentRound"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/idl/types/BufferRelayerRound"},"BufferRelayerRound")),(0,l.kt)("td",{parentName:"tr",align:null},"The current buffer relayer update round that is yet to be confirmed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"latestConfirmedRound"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/idl/types/BufferRelayerRound"},"BufferRelayerRound")),(0,l.kt)("td",{parentName:"tr",align:null},"The latest confirmed buffer relayer update round")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result"),(0,l.kt)("td",{parentName:"tr",align:null},"bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"The buffer holding the latest confirmed result")))))}m.isMDXComponent=!0}}]);