"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7083],{5318:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return s}});var r=n(7378);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),i=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=i(t.components);return r.createElement(u.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),d=i(n),s=a,k=d["".concat(u,".").concat(s)]||d[s]||m[s]||l;return n?r.createElement(k,o(o({ref:e},p),{},{components:n})):r.createElement(k,o({ref:e},p))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var u in e)hasOwnProperty.call(e,u)&&(c[u]=e[u]);c.originalType=t,c.mdxType="string"==typeof t?t:a,o[1]=c;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},101:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return s},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return m}});var r=n(2685),a=n(1244),l=(n(7378),n(5318)),o=["components"],c={},u=void 0,i={unversionedId:"accounts/OracleAccountData",id:"accounts/OracleAccountData",title:"OracleAccountData",description:"Size 0.00531744 SOL",source:"@site/idl/accounts/OracleAccountData.md",sourceDirName:"accounts",slug:"/accounts/OracleAccountData",permalink:"/idl/accounts/OracleAccountData",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LeaseAccountData",permalink:"/idl/accounts/LeaseAccountData"},next:{title:"OracleQueueAccountData",permalink:"/idl/accounts/OracleQueueAccountData"}},p={},m=[],d={toc:m};function s(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("b",null,"Size: "),"636 Bytes",(0,l.kt)("br",null),(0,l.kt)("b",null,"Rent Exemption: "),"0.00531744 SOL",(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"u8","[32]"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the oracle to store on-chain.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metadata"),(0,l.kt)("td",{parentName:"tr",align:null},"u8","[128]"),(0,l.kt)("td",{parentName:"tr",align:null},"Metadata of the oracle to store on-chain.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"oracleAuthority"),(0,l.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,l.kt)("td",{parentName:"tr",align:null},"The account delegated as the authority for making account changes or withdrawing funds from a staking wallet.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"lastHeartbeat"),(0,l.kt)("td",{parentName:"tr",align:null},"i64"),(0,l.kt)("td",{parentName:"tr",align:null},"Timestamp when the oracle last heartbeated")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"numInUse"),(0,l.kt)("td",{parentName:"tr",align:null},"u32"),(0,l.kt)("td",{parentName:"tr",align:null},"Flag dictating if an oracle is active and has heartbeated before the queue's oracle timeout parameter")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tokenAccount"),(0,l.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,l.kt)("td",{parentName:"tr",align:null},"Stake account and reward/slashing wallet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"queuePubkey"),(0,l.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,l.kt)("td",{parentName:"tr",align:null},"Public key of the oracle queue who has granted it permission to use its resources")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"metrics"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/idl/types/OracleMetrics"},"OracleMetrics")),(0,l.kt)("td",{parentName:"tr",align:null},"Oracle track record")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ebuf"),(0,l.kt)("td",{parentName:"tr",align:null},"u8","[256]"),(0,l.kt)("td",{parentName:"tr",align:null},"Reserved")))))}s.isMDXComponent=!0}}]);