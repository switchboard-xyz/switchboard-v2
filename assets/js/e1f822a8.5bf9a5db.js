"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5435],{5318:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},713:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var a=n(2685),r=n(1244),i=(n(7378),n(5318)),o=["components"],l={sidebar_position:1,slug:"/cli",title:"Overview"},s="sbv2",c={unversionedId:"cli/overview",id:"cli/overview",title:"Overview",description:"GitHub npm Page Last Updated",source:"@site/api/cli/overview.mdx",sourceDirName:"cli",slug:"/cli",permalink:"/api/cli",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/cli",title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"switchboard-tasks",permalink:"/api/tasks"},next:{title:"sbv2 print",permalink:"/api/cli/print"}},p={},u=[{value:"Install",id:"install",level:2},{value:"Overview",id:"overview",level:2},{value:"Examples",id:"examples",level:2},{value:"Print",id:"print",level:3},{value:"Create a Queue",id:"create-a-queue",level:3},{value:"Create Aggregator",id:"create-aggregator",level:3}],m={toc:u};function d(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sbv2"},"sbv2"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/switchboard-v2/tree/main/cli"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff",alt:"GitHub"}))," ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@switchboard-xyz/switchboardv2-cli"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/@switchboard-xyz/switchboardv2-cli",alt:"npm"}))," ",(0,i.kt)("img",{alt:"Page Last Updated",src:n(8164).Z,width:"190",height:"20"})),(0,i.kt)("p",null,"The Switchboard V2 CLI provides an easy to use interface to setup and manage Switchboard onchain accounts."),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("p",null,"Run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:"npm2yarn",npm2yarn:!0},"npm install -g @switchboard-xyz/switchboardv2-cli\n")),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Keypairs")," The Switchboard V2 CLI lets you specify a keypair from an absolute or relative filesystem path as well as a Google Secret Manager secret. The following flags are common among most commands, with the exception of the print commands that require no keypairs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--authority")," is the keypair that is or will be the authority for a given account. The authority is responsible for authorizing new permissions, changing an account, or withdrawing from a token account."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--keypair")," is required for any command that submits an onchain transaction such as creating accounts, turning the crank, or updating an account config. This keypair will default as the authority if the authority flag is not provided.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Token Amounts"),"\nAny commands that specify a token amount will be converted to the raw token amount if it contains a decimal. For example, wSOL has 9 decimal places so a CLI arguement of 1.5 would be interpretted as 1_500_000_000 tokens whereas 1 would be interpretted as 1 token."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Logging")," Most commands will have a ",(0,i.kt)("inlineCode",{parentName:"p"},"--silent"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"-s")," flag that will suppress console output and only output a new account public key to assist in scripting. A ",(0,i.kt)("inlineCode",{parentName:"p"},"--verbose"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"-v")," flag will do the opposite and log any debug or configuration information to help debug."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Help")," All commands can be run with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--help")," flag to print the available arguments and flags for a given command."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"print"},"Print"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# check account discriminator and print account information if found\nsbv2 print PUBLICKEY\n# print an oracle account by its public key\nsbv2 print:oracle ORACLEKEY\n# print an aggregator account and save to a JSON file\nsbv2 print:aggregator AGGREGATORKEY --outputFile outputFile.json\n")),(0,i.kt)("h3",{id:"create-a-queue"},"Create a Queue"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'sbv2 queue:create \\\n    --keypair payer-keypair.json \\\n    -f queue-schema.json \\\n    -n "My New Queue" \\\n    --numOracles 1 \\\n    -v\n')),(0,i.kt)("h3",{id:"create-aggregator"},"Create Aggregator"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# write sample json files to outputDirectory\nsbv2 print:json:samples outputDirectory\n# create aggregator from json\nsbv2 aggregator:create:json aggregator.json \\\n--keypair ../dev/switchboardxyz/payer-keypair.json \\\n--queueKey GhYg3R1V6DmJbwuc57qZeoYG6gUuvCotUF1zU3WCj98U \\\n--outputFile aggregator.schema.json\n")))}d.isMDXComponent=!0},8164:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTkwIiBoZWlnaHQ9IjIwIiByb2xlPSJpbWciIGFyaWEtbGFiZWw9IlBhZ2UgTGFzdFVwZGF0ZWQ6IE1heS0yMC0yMDIyIj48dGl0bGU+UGFnZSBMYXN0VXBkYXRlZDogTWF5LTIwLTIwMjI8L3RpdGxlPjxsaW5lYXJHcmFkaWVudCBpZD0icyIgeDI9IjAiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNiYmIiIHN0b3Atb3BhY2l0eT0iLjEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3Atb3BhY2l0eT0iLjEiLz48L2xpbmVhckdyYWRpZW50PjxjbGlwUGF0aCBpZD0iciI+PHJlY3Qgd2lkdGg9IjE5MCIgaGVpZ2h0PSIyMCIgcng9IjMiIGZpbGw9IiNmZmYiLz48L2NsaXBQYXRoPjxnIGNsaXAtcGF0aD0idXJsKCNyKSI+PHJlY3Qgd2lkdGg9IjEwOSIgaGVpZ2h0PSIyMCIgZmlsbD0iIzU1NSIvPjxyZWN0IHg9IjEwOSIgd2lkdGg9IjgxIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMDA3ZWM2Ii8+PHJlY3Qgd2lkdGg9IjE5MCIgaGVpZ2h0PSIyMCIgZmlsbD0idXJsKCNzKSIvPjwvZz48ZyBmaWxsPSIjZmZmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LWZhbWlseT0iVmVyZGFuYSxHZW5ldmEsRGVqYVZ1IFNhbnMsc2Fucy1zZXJpZiIgdGV4dC1yZW5kZXJpbmc9Imdlb21ldHJpY1ByZWNpc2lvbiIgZm9udC1zaXplPSIxMTAiPjx0ZXh0IGFyaWEtaGlkZGVuPSJ0cnVlIiB4PSI1NTUiIHk9IjE1MCIgZmlsbD0iIzAxMDEwMSIgZmlsbC1vcGFjaXR5PSIuMyIgdHJhbnNmb3JtPSJzY2FsZSguMSkiIHRleHRMZW5ndGg9Ijk5MCI+UGFnZSBMYXN0VXBkYXRlZDwvdGV4dD48dGV4dCB4PSI1NTUiIHk9IjE0MCIgdHJhbnNmb3JtPSJzY2FsZSguMSkiIGZpbGw9IiNmZmYiIHRleHRMZW5ndGg9Ijk5MCI+UGFnZSBMYXN0VXBkYXRlZDwvdGV4dD48dGV4dCBhcmlhLWhpZGRlbj0idHJ1ZSIgeD0iMTQ4NSIgeT0iMTUwIiBmaWxsPSIjMDEwMTAxIiBmaWxsLW9wYWNpdHk9Ii4zIiB0cmFuc2Zvcm09InNjYWxlKC4xKSIgdGV4dExlbmd0aD0iNzEwIj5NYXktMjAtMjAyMjwvdGV4dD48dGV4dCB4PSIxNDg1IiB5PSIxNDAiIHRyYW5zZm9ybT0ic2NhbGUoLjEpIiBmaWxsPSIjZmZmIiB0ZXh0TGVuZ3RoPSI3MTAiPk1heS0yMC0yMDIyPC90ZXh0PjwvZz48L3N2Zz4="}}]);