"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9244],{6003:function(e,a,t){var n=t(5310),s=t(1582),r=t(8948),i=t(7378);a.Z=function(e){var a=(0,s.If)().colorMode,t="inherit";e.lightBg&&"dark"!==a&&(t=e.lightBg),e.darkBg&&"dark"===a&&(t=e.darkBg);var o={};return e.sx&&(o=Object.assign({backgroundColor:t,m:"auto",display:"flex"},o,e.sx)),i.createElement(n.Z,{component:"img",sx:o,src:(0,r.Z)(e.img)})}},8527:function(e,a,t){t.r(a),t.d(a,{assets:function(){return d},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return m},metadata:function(){return c},toc:function(){return u}});var n=t(2685),s=t(1244),r=(t(7378),t(5318)),i=t(6003),o=t(4384),l=(t(1884),["components"]),m={sidebar_position:1,slug:".",title:"Architecture"},p="Data Feed Architecture",c={unversionedId:"feed/architecture",id:"feed/architecture",title:"Architecture",description:"An aggregator or data feed is what on-chain developers use when building smart contracts. A data feed is a collection of jobs that get aggregated to produce a single, deterministic result. Typically the first task in a job will fetch external data with subsequent tasks responsible for parsing the response and transforming the value into a single data type, like an integer or decimal.",source:"@site/docs/feed/architecture.mdx",sourceDirName:"feed",slug:"/feed/",permalink:"/feed/",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:".",title:"Architecture"},sidebar:"tutorialSidebar",previous:{title:"Monitoring",permalink:"/oracle/operator/monitoring"},next:{title:"Feed Operator",permalink:"/feed/operator"}},d={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Job Definitions",id:"job-definitions",level:2},{value:"Job Weights",id:"job-weights",level:3},{value:"Lease Contract",id:"lease-contract",level:3},{value:"Requesting Updates",id:"requesting-updates",level:2},{value:"Periodic Updates",id:"periodic-updates",level:3},{value:"Data Feed Cost",id:"data-feed-cost",level:2},{value:"Variance Threshold",id:"variance-threshold",level:3},{value:"History Buffer",id:"history-buffer",level:2},{value:"Update Lifecycle",id:"update-lifecycle",level:2},{value:"Update Request",id:"update-request",level:3},{value:"Oracle Execution",id:"oracle-execution",level:3},{value:"Oracle Consensus",id:"oracle-consensus",level:3},{value:"Data Feed Composability",id:"data-feed-composability",level:2},{value:"More Information",id:"more-information",level:2}],h={toc:u};function k(e){var a=e.components,t=(0,s.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-feed-architecture"},"Data Feed Architecture"),(0,r.kt)("p",null,"An aggregator or data feed is what on-chain developers use when building smart contracts. A data feed is a collection of jobs that get aggregated to produce a single, deterministic result. Typically the first task in a job will fetch external data with subsequent tasks responsible for parsing the response and transforming the value into a single data type, like an integer or decimal."),(0,r.kt)("p",null,"When an oracle is assigned to process a data feed update, the oracle executes the defined jobs, computes the weighted median of the job responses, and publishes the result on-chain. If sufficient oracles respond, the on-chain program computes the final result as the median of the assigned oracle responses."),(0,r.kt)("p",null,"Data feeds published on Solana are public and there is no mechanism to prevent other users from reading and consuming the data. Because of this, Switchboard, by default, treats feeds as public utilities allowing anyone to contribute. This is by design as data feeds should be community controlled. If a program is relying on an oracle and the lease expires, any user is allowed to extend the lease, push on a crank, and keep the feed updating, but only if the feed config allows it. Switchboard envisions data feeds being community governed by the protocols supporting them. As a feed grows in popularity and is used across protocols, the feed maintenance cost can be spread across the protocols to reduce the economic burden on a single entity."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)(o.ZP,{container:!0,spacing:3,mdxType:"Grid"},(0,r.kt)(o.ZP,{item:!0,md:4,sm:12,order:{xs:2,sm:1},mdxType:"Grid"},(0,r.kt)("ul",null,(0,r.kt)("li",null,(0,r.kt)("b",null,"Aggregator: "),"Contains the data feed configuration, dictating how data feed updates get requested, updated, and resolved on-chain."),(0,r.kt)("li",null,(0,r.kt)("b",null,"Job Account: "),"Stores the blueprints for how data is fetched off-chain for a particular data source."),(0,r.kt)("li",null,(0,r.kt)("b",null,"Permission Account: "),"Permits a data feed to join an oracle queue."),(0,r.kt)("li",null,(0,r.kt)("b",null,"Lease Contract: "),"Pre-funded escrow contract to reward oracles for their work."),(0,r.kt)("li",null,(0,r.kt)("b",null,"Crank: "),"Optional, owned by the queue and allows a data feed to be updated at a regular interval."),(0,r.kt)("li",null,(0,r.kt)("b",null,"History Buffer: "),"Optional, allows a feed to store the last N values."))),(0,r.kt)(o.ZP,{item:!0,md:8,sx:12,order:{xs:1,sm:2},mdxType:"Grid"},(0,r.kt)(i.Z,{img:"/img/feeds/Aggregator_Accounts.png",sx:{display:"flex"},mdxType:"MarkdownImage"}))),(0,r.kt)("hr",null),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"See ",(0,r.kt)("a",{parentName:"p",href:"/idl/accounts/AggregatorAccountData"},"/idl/accounts/AggregatorAccountData")," for the full list of an AggregatorAccount's configuration parameters."))),(0,r.kt)("h2",{id:"job-definitions"},"Job Definitions"),(0,r.kt)("p",null,"An Aggregator Account stores a collection of Job Account public keys along with the hashes of the job definitions. This is to prevent malicious RPC nodes from providing incorrect task definitions to oracles before fulfillment."),(0,r.kt)("p",null,"A Job Account is a collection of ",(0,r.kt)("a",{parentName:"p",href:"/api/tasks"},"Switchboard Tasks")," that get executed by an oracle sequentially. Each Job Account typically corresponds to a single data source. A data feed requires at least one job account and at most 16 job accounts. Switchboard Job Accounts can be used to source data from:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HTTP endpoints, public or private",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mrow",{parentName:"msup"}),(0,r.kt)("mrow",{parentName:"msup"},(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"^{[1]}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.888em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span"}),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.888em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},(0,r.kt)("span",{parentName:"span",className:"mopen mtight"},"["),(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose mtight"},"]")))))))))))))),(0,r.kt)("li",{parentName:"ul"},"Websockets"),(0,r.kt)("li",{parentName:"ul"},"On-Chain data from Solana, Ethereum, etc",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Anchor programs"),(0,r.kt)("li",{parentName:"ul"},"JupiterSwap"),(0,r.kt)("li",{parentName:"ul"},"Uniswap"),(0,r.kt)("li",{parentName:"ul"},"SushiSwap"),(0,r.kt)("li",{parentName:"ul"},"Saber"),(0,r.kt)("li",{parentName:"ul"},"... and more")))),(0,r.kt)("p",null,(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mrow",{parentName:"msup"}),(0,r.kt)("mrow",{parentName:"msup"},(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"["),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"]")))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"^{[1]}")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.888em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span"}),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.888em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},(0,r.kt)("span",{parentName:"span",className:"mopen mtight"},"["),(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"1"),(0,r.kt)("span",{parentName:"span",className:"mclose mtight"},"]")))))))))))))," Endpoints requiring an API key require a ",(0,r.kt)("a",{parentName:"p",href:"/queue/private-queues"},"Private Queue")," to prevent leaking the API key on-chain"),(0,r.kt)("h3",{id:"job-weights"},"Job Weights"),(0,r.kt)("p",null,"A data feed can assign job weights to a job account which will be used when the oracle calculates the median across the job responses. This is useful to weight data sources by some metric such as liquidity or a reliability score."),(0,r.kt)("p",null,"It is ",(0,r.kt)("strong",{parentName:"p"},"strongly")," recommended to utilize job weights as ",(0,r.kt)("em",{parentName:"p"},"not all data sources are created equally"),"."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Currently the only way to set a job weight is to remove and re-add the job account to a feed."))),(0,r.kt)("h3",{id:"lease-contract"},"Lease Contract"),(0,r.kt)("p",null,"The LeaseContract is a pre-funded escrow account to reward oracles for fulfilling update request. The LeaseContract has a pre-specified ",(0,r.kt)("inlineCode",{parentName:"p"},"lease.withdrawAuthority")," which is the only wallet allowed to withdraw funds from the lease escrow. Any user is able to contribute to a LeaseContract and keep the feed updating."),(0,r.kt)("p",null,"When a new openRound is successfully requested for a data feed, the user who requested it is transferred ",(0,r.kt)("inlineCode",{parentName:"p"},"queue.reward")," tokens from the feeds LeaseContract. This is to incentivize users and crank turners to keep feeds updating based on a feeds config."),(0,r.kt)("p",null,"When a data feed result is accepted on-chain by a batch of oracles, the oracle rewards, as specified by ",(0,r.kt)("inlineCode",{parentName:"p"},"queue.reward"),", are automatically deducted from the ",(0,r.kt)("inlineCode",{parentName:"p"},"lease.escrow")," and transferred to an ",(0,r.kt)("inlineCode",{parentName:"p"},"oracle.tokenAccount"),"."),(0,r.kt)("h2",{id:"requesting-updates"},"Requesting Updates"),(0,r.kt)("p",null,"A feed is updated when someone calls ",(0,r.kt)("inlineCode",{parentName:"p"},"aggregatorOpenRound")," on-chain. If openRound is called before ",(0,r.kt)("inlineCode",{parentName:"p"},"aggregator.minUpdateDelaySeconds")," have elapsed, the openRound call will fail and the user will forfeit their transaction fees. If successful, the user is rewarded for keeping the feed updating."),(0,r.kt)("h3",{id:"periodic-updates"},"Periodic Updates"),(0,r.kt)("p",null,"Any data feed permitted to request updates on a queue is also permitted to join a queue's existing Crank, ",(0,r.kt)("inlineCode",{parentName:"p"},"aggregator.crankPubkey"),". A Crank is the scheduling mechanism behind feeds that allow them to be periodically updated. The Crank is a buffer account that stores a collection of aggregator public keys, ordered by their next available update, with some level of jitter added to prevent a predictable oracle allocation cycle"),(0,r.kt)("p",null,"When a feeds Lease Contract is low on funds, it is automatically removed from the crank and must be manually repushed upon refunding the LeaseContract."),(0,r.kt)("p",null,"A feed can set ",(0,r.kt)("inlineCode",{parentName:"p"},"aggregator.disableCrank")," to prevent being pushed onto a Crank and draining it's lease."),(0,r.kt)("h2",{id:"data-feed-cost"},"Data Feed Cost"),(0,r.kt)("p",null,"Each data feed update cost can be calculated by the following equation:"),(0,r.kt)("p",null,(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"C"),(0,r.kt)("mi",{parentName:"mrow"},"o"),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("msub",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msub"},"t"),(0,r.kt)("mrow",{parentName:"msub"},(0,r.kt)("mi",{parentName:"mrow"},"p"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow"},"U"),(0,r.kt)("mi",{parentName:"mrow"},"p"),(0,r.kt)("mi",{parentName:"mrow"},"d"),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mi",{parentName:"mrow"},"e"))),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow"},"+"),(0,r.kt)("mi",{parentName:"mrow"},"n"),(0,r.kt)("mi",{parentName:"mrow"},"u"),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mi",{parentName:"mrow"},"S"),(0,r.kt)("mi",{parentName:"mrow"},"u"),(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mi",{parentName:"mrow"},"c"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mi",{parentName:"mrow"},"s"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mo",{parentName:"mrow"},"\xd7"),(0,r.kt)("mi",{parentName:"mrow"},"q"),(0,r.kt)("mi",{parentName:"mrow"},"u"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"u"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"."),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"w"),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow"},"d")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"Cost_{perUpdate}=(1 + numSuccess) \xd7 queue.reward")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.9694em",verticalAlign:"-0.2861em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07153em"}},"C"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"os"),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t vlist-t2"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.3361em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"p"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.02778em"}},"er"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight",style:{marginRight:"0.10903em"}},"U"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"p"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"d"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"a"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"t"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal mtight"},"e"))))),(0,r.kt)("span",{parentName:"span",className:"vlist-s"},"\u200b")),(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.2861em"}},(0,r.kt)("span",{parentName:"span"})))))),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"m"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.05764em"}},"S"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"ccess"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\xd7"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"q"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"u"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord"},"."),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"re"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02691em"}},"w"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"r"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"d")))))),(0,r.kt)("p",null,"where,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"em"},"+1"))," is to reward the update requester for keeping the feed updating"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"numSuccess")," is the number of successful oracle responses, which will always be between ",(0,r.kt)("inlineCode",{parentName:"li"},"[aggregator.minOracleResults, aggregator.oracleRequestBatchSize]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"queue.reward")," is the queue's set oracle reward")),(0,r.kt)("p",null,"If an update round fails to receive ",(0,r.kt)("inlineCode",{parentName:"p"},"minOracleResults"),", only the update requester receives funds from the lease escrow."),(0,r.kt)("h3",{id:"variance-threshold"},"Variance Threshold"),(0,r.kt)("p",null,"A feed can set an ",(0,r.kt)("inlineCode",{parentName:"p"},"aggregator.varianceThreshold")," to instruct an oracle to skip reporting a value on-chain if the percentage change between the current result and the ",(0,r.kt)("inlineCode",{parentName:"p"},"aggregator.previousConfirmedRoundResult")," is not exceeded. This is a cost saving tool to conserve lease cost during low volatility."),(0,r.kt)("p",null,"A feeds ",(0,r.kt)("inlineCode",{parentName:"p"},"aggregator.forceReportPeriod")," is the compliment and instructs an oracle to always report a result if ",(0,r.kt)("inlineCode",{parentName:"p"},"aggregator.forceReportPeriod")," seconds have elapsed since the last successful confirmed round. This can be thought of as the maximum allowable staleness for a feed."),(0,r.kt)("p",null,"The two settings above can greatly increase the lifespan of a feed's lease but also makes it difficult to estimate the remaining time on a lease."),(0,r.kt)("p",null,"Check out ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/switchboard-v2/tree/main/packages/lease-observer"},"@switchboard-xyz/lease-observer")," to get PagerDuty alerts when a lease crosses a low balance threshold."),(0,r.kt)("h2",{id:"history-buffer"},"History Buffer"),(0,r.kt)("p",null,"A history buffer account stores a set number of accepted results for an aggregator, and given Solana\u2019s maximum account size of 10MB, the maximum number of samples a single history buffer can support is ~350,000 samples. An aggregator can only have a single history buffer associated with it."),(0,r.kt)("p",null,"A history buffer has a static account size when it is initialized, equal to: ",(0,r.kt)("inlineCode",{parentName:"p"},"12 Bytes + (28 Bytes \xd7 Num Samples)"),". Each time an aggregator value is updated on-chain, the associated history buffer is shifted to the right, and the last value is dropped."),(0,r.kt)("p",null,"This feature allows Switchboard tasks to parse a history buffer and perform a set of calculations, such as the TwapTask. This allows feeds to reference other feeds and perform complex calculations based on historical samples."),(0,r.kt)("h2",{id:"update-lifecycle"},"Update Lifecycle"),(0,r.kt)("p",null,"Let's walk through what the feed update lifecycle looks like."),(0,r.kt)("h3",{id:"update-request"},"Update Request"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Any user calls ",(0,r.kt)("a",{parentName:"li",href:"/idl/instructions/aggregatorOpenRound"},"aggregatorOpenRound"),", either manually or via a crank turn"),(0,r.kt)("li",{parentName:"ul"},"sbv2 program checks if ",(0,r.kt)("inlineCode",{parentName:"li"},"aggregator.minUpdateDelaySeconds")," have passed since the last openRound call"),(0,r.kt)("li",{parentName:"ul"},"sbv2 program checks if a LeaseContract has enough funds to reward the oracles for the next round"),(0,r.kt)("li",{parentName:"ul"},"sbv2 program assigns the next ",(0,r.kt)("inlineCode",{parentName:"li"},"aggregator.oracleRequestBatchSize")," oracles to the update request and emits an ",(0,r.kt)("a",{parentName:"li",href:"/idl/events/AggregatorOpenRoundEvent"},"AggregatorOpenRoundEvent"))),(0,r.kt)("h3",{id:"oracle-execution"},"Oracle Execution"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Oracle watches the chain for an ",(0,r.kt)("a",{parentName:"li",href:"/idl/events/AggregatorOpenRoundEvent"},"AggregatorOpenRoundEvent")," with the oracle's public key assigned to the update"),(0,r.kt)("li",{parentName:"ul"},"Oracle fetches the feed and job account definitions from its RPC Provider"),(0,r.kt)("li",{parentName:"ul"},"Oracle verifies the job account definitions match the feeds ",(0,r.kt)("inlineCode",{parentName:"li"},"aggregator.jobHashes")),(0,r.kt)("li",{parentName:"ul"},"Oracle executes the job definitions in parallel"),(0,r.kt)("li",{parentName:"ul"},"When an oracle receives ",(0,r.kt)("inlineCode",{parentName:"li"},"aggregator.minJobResults"),", it calculates the weighted median based on the feeds ",(0,r.kt)("inlineCode",{parentName:"li"},"aggregator.jobWeights"),". Note, this is not enforced on-chain and is purely up to the oracle to respect"),(0,r.kt)("li",{parentName:"ul"},"If a feed has configured a ",(0,r.kt)("inlineCode",{parentName:"li"},"aggregator.varianceThreshold")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"aggregator.forceReportPeriod")," has not elapsed, the oracle calculates the percentage change between its calculated result and the previous confirmed round. If it does not exceed the feeds ",(0,r.kt)("inlineCode",{parentName:"li"},"aggregator.varianceThreshold"),", the oracle drops the update request and waits for new update request"),(0,r.kt)("li",{parentName:"ul"},"If a feeds configuration dictate a new on-chain result, the oracle submits an ",(0,r.kt)("a",{parentName:"li",href:"https://docs.switchboard.xyz/idl/instructions/aggregatorSaveResult"},"aggregatorSaveResult")," transaction")),(0,r.kt)("h3",{id:"oracle-consensus"},"Oracle Consensus"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"sbv2 program waits for ",(0,r.kt)("inlineCode",{parentName:"li"},"aggregator.minOracleResults")," to be submitted by the assigned oracles"),(0,r.kt)("li",{parentName:"ul"},"When sufficient oracle responses, the sbv2 program computes the accepted value from the median of the oracle responses"),(0,r.kt)("li",{parentName:"ul"},"If a feed has a history buffer account, the accepted result is pushed onto the buffer"),(0,r.kt)("li",{parentName:"ul"},"Oracles that responded within ",(0,r.kt)("inlineCode",{parentName:"li"},"queue.varianceToleranceMultiplier")," are rewarded ",(0,r.kt)("inlineCode",{parentName:"li"},"queue.reward")," from the feed's LeaseContract"),(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"queue.slashingEnabled"),", oracles that responded outside the ",(0,r.kt)("inlineCode",{parentName:"li"},"queue.varianceToleranceMultiplier")," are slashed ",(0,r.kt)("inlineCode",{parentName:"li"},"queue.reward")," tokens from it's ",(0,r.kt)("inlineCode",{parentName:"li"},"oracle.tokenAccount")," and transferred to the feed's ",(0,r.kt)("inlineCode",{parentName:"li"},"lease.escrow")),(0,r.kt)("li",{parentName:"ul"},"If additional oracle responses are submitted after a value has been accepted, the median is recalculated based on the new response set, oracle rewards are redistributed, and the history buffer value is updated")),(0,r.kt)("h2",{id:"data-feed-composability"},"Data Feed Composability"),(0,r.kt)("p",null,"Data feeds may reference other data feeds and build upon each other. It is ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"strongly"))," recommended that you own any feed that you reference in case of downstream impacts out of your control. While anyone can extend another feeds lease, a lease owner can always withdraw any lease funds and prevent future updates."),(0,r.kt)("p",null,"As an example, you could construct the following feed definition:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a Switchboard feed that sources SOL/USD prices from a variety of exchanges, each weighted by their 7d volume, along with a history buffer"),(0,r.kt)("li",{parentName:"ul"},"Create a Switchboard feed that uses an OracleTask to fetch the Pyth SOL/USD price every 10 seconds, along with a history buffer"),(0,r.kt)("li",{parentName:"ul"},"Create a Switchboard feed that uses an OracleTask to fetch the Chainlink SOL/USD price every 10 seconds, along with a history buffer"),(0,r.kt)("li",{parentName:"ul"},"Finally, create a Switchboard feed that calculates the 1min TWAP of each source above and returns the median of the results")),(0,r.kt)("p",null,"This is just a small window into how Switchboard feeds can build on each other and let the downstream consumer configure their feeds to meet their own use cases."),(0,r.kt)("h2",{id:"more-information"},"More Information"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api/tasks"},"/api/tasks")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/idl/accounts/AggregatorAccountData"},"/idl/accounts/AggregatorAccountData")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/idl/accounts/CrankAccountData"},"/idl/accounts/CrankAccountData")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/idl/accounts/AggregatorHistoryBuffer"},"/idl/accounts/AggregatorHistoryBuffer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/idl/accounts/PermissionAccountData"},"/idl/accounts/PermissionAccountData")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/idl/accounts/JobAccountData"},"/idl/accounts/JobAccountData")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/idl/accounts/LeaseAccountData"},"/idl/accounts/LeaseAccountData")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/switchboard-xyz/switchboard-v2/tree/main/packages/feed-parser"},"feed-parser Typescript Example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/switchboard-xyz/switchboard-v2/tree/main/packages/feed-walkthrough"},"feed-walkthrough Typescript Example"))))}k.isMDXComponent=!0}}]);