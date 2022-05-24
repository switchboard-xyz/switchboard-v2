"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[937],{5318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,f=p["".concat(s,".").concat(h)]||p[h]||d[h]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9795:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(2685),o=n(1244),a=(n(7378),n(5318)),i=["components"],l={sidebar_position:1,id:"introduction",slug:"/introduction"},s="Introduction",c={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"Switchboard is a community-driven, decentralized oracle network built on Solana that allows anyone to publish on-chain data for smart contract developers to reliably build upon.",source:"@site/docs/introduction.mdx",sourceDirName:".",slug:"/introduction",permalink:"/introduction",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"introduction",slug:"/introduction"},sidebar:"tutorialSidebar",next:{title:"Program",permalink:"/program"}},u={},d=[{value:"What is an Oracle",id:"what-is-an-oracle",level:2},{value:"Use Cases",id:"use-cases",level:2}],p={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Switchboard is a community-driven, decentralized oracle network built on Solana that allows anyone to publish on-chain data for smart contract developers to reliably build upon.")),(0,a.kt)("p",null,"Switchboard is a community governed protocol \u2014 if additional on-chain data is needed, you will be able to publish it yourself after reading through these docs."),(0,a.kt)("p",null,"Solana was chosen for its sub-second transaction speed, allowing faster refresh rates of on-chain data to help support it\u2019s thriving developer ecosystem. Developing an oracle solution in this high-availability environment poses its own set of challenges that the Switchboard team is excited to solve!"),(0,a.kt)("p",null,"Switchboard gets its name from the early days of phone networks, when operators would shuffle telephone lines around a switchboard to complete a circuit and forward a dialer\u2019s call to the next hop in the circuit. Similarly, Switchboard is responsible for how external data gets updated and routed through the Solana blockchain until it reaches its appropriate destination."),(0,a.kt)("h2",{id:"what-is-an-oracle"},"What is an Oracle"),(0,a.kt)("p",null,"Smart contracts are the building blocks of web3 and can be thought of as the logic behind programmable money, although their use cases extend well beyond just monetary transactions. A smart contract encapsulates some pre-defined logic allowing anonymous participants to interact without a trusted intermediary. More complex smart contracts might rely on external data from the web but blockchains do not have the capability of directly relaying this information. Enter oracles."),(0,a.kt)("p",null,"Oracles are the gateway between a blockchain and the real world, providing the mechanisms to arrive at a reliable consensus for a single data point when given multiple sources. Oracles can then determine the most reliable value of the data point after examining the provided answer of each data source. In this way, oracles increase information integrity by removing the risk of a single point of failure or outlier."),(0,a.kt)("h2",{id:"use-cases"},"Use Cases"),(0,a.kt)("p",null,"Oracle services have many applicable uses in blockchain based applications today, such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Determining the current price of an asset for collateralized lending"),(0,a.kt)("li",{parentName:"ul"},"Determining the state of a tracking number to auto settle funds on arrival"),(0,a.kt)("li",{parentName:"ul"},"Determining the current standings of the MLB for fantasy sports rankings")),(0,a.kt)("p",null,"Oracles can be used for a variety of data sets as long as there is a reliable way to source the information."))}h.isMDXComponent=!0}}]);