"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3237],{43:function(e,t,n){var o;n.d(t,{F4:function(){return p},xB:function(){return d}});var r=n(7378),a=(n(8786),n(764)),i=(n(5839),n(3211)),l=n(4343),c=(o||(o=n.t(r,2))).useInsertionEffect?(o||(o=n.t(r,2))).useInsertionEffect:r.useLayoutEffect,d=(0,a.w)((function(e,t){var n=e.styles,o=(0,l.O)([n],void 0,(0,r.useContext)(a.T)),d=(0,r.useRef)();return c((function(){var e=t.key+"-global",n=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),r=!1,a=document.querySelector('style[data-emotion="'+e+" "+o.name+'"]');return t.sheet.tags.length&&(n.before=t.sheet.tags[0]),null!==a&&(r=!0,a.setAttribute("data-emotion",e),n.hydrate([a])),d.current=[n,r],function(){n.flush()}}),[t]),c((function(){var e=d.current,n=e[0];if(e[1])e[1]=!1;else{if(void 0!==o.next&&(0,i.My)(t,o.next,!0),n.tags.length){var r=n.tags[n.tags.length-1].nextElementSibling;n.before=r,n.flush()}t.insert("",o,n,!1)}}),[t,o.name]),null}));function s(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,l.O)(t)}var p=function(){var e=s.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}},5310:function(e,t,n){n.d(t,{Z:function(){return m}});var o=n(2685),r=n(1244),a=n(7378),i=n(8944),l=n(5642),c=n(1652),d=n(3772),s=n(6206),p=n(4246);const u=["className","component"];var f=n(4907);const g=function(e={}){const{defaultTheme:t,defaultClassName:n="MuiBox-root",generateClassName:f,styleFunctionSx:g=c.Z}=e,m=(0,l.ZP)("div")(g);return a.forwardRef((function(e,a){const l=(0,s.Z)(t),c=(0,d.Z)(e),{className:g,component:h="div"}=c,b=(0,r.Z)(c,u);return(0,p.jsx)(m,(0,o.Z)({as:h,ref:a,className:(0,i.Z)(g,f?f(n):n),theme:l},b))}))}({defaultTheme:(0,n(2905).Z)(),defaultClassName:"MuiBox-root",generateClassName:f.Z.generate});var m=g},7845:function(e,t,n){n.d(t,{T:function(){return b}});var o=n(5520),r=n(47),a=n(2750),i=n(9502),l=n(1884),c=n(1582),d=n(8948),s=n(4776),p=n(8745),u=n(7378),f=(0,p.Z)(i.Z)((function(e){var t,n=e.theme,o=e.dark;return(t={display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"stretch",textAlign:"left",backgroundColor:o?n.palette.footer.background:n.palette.white,position:"relative",borderRadius:"13.2px",boxShadow:"0 6px 7px 5px rgba("+(o?"107 107 107":"86, 86, 86")+", 0.03)"})[n.breakpoints.down(300)]={paddingLeft:""},t})),g=(0,p.Z)(a.Z)((function(e){var t;return(t={whiteSpace:"nowrap",fontSize:22,marginLeft:"22px",fontWeight:600,letterSpacing:"0.16px"})[e.theme.breakpoints.down(300)]={marginLeft:"10px"},t})),m=(0,p.Z)(a.Z)((function(e){var t,n=e.theme;return(t={fontSize:18.5,margin:"20px 0px 0px",height:"110px",lineHeight:1.29,letterSpacing:"0.44px"})[n.breakpoints.down(400)]={fontSize:"17px"},t[n.breakpoints.down(300)]={fontSize:13},t})),h=(0,p.Z)(r.Z)((function(e){var t;return(t={padding:"21px"})[e.theme.breakpoints.down(300)]={paddingLeft:"10px",paddingRight:"10px"},t}));function b(e){var t=e.title,n=e.image,r=e.description,a=e.linkTo,i=(0,c.If)().colorMode;(0,s.Z)();return u.createElement(f,{dark:"dark"===i?1:0},u.createElement(h,null,u.createElement("div",{style:{display:"flex",alignItems:"center"}},u.createElement("div",{style:{backgroundColor:"#4c6fff",borderRadius:"8px",height:48,width:48,display:"flex",alignItems:"center",justifyContent:"center"}},u.createElement("img",{src:(0,d.Z)(n),alt:"feature card",height:26,width:26})),u.createElement(g,{sx:{color:"dark"===i?"#dbdbdb":"#0b3863"}},t)),u.createElement(m,{variant:"body2",sx:{color:"dark"===i?"#dbdbdb":"#313e79"}},r),u.createElement("div",{style:{width:"100%",height:"31px",display:"flex",flexDirection:"column"}},u.createElement(o.Z,{sx:{margin:"0px -21px 15px",borderColor:"dark"===i?"gray":"Active Border"}}),u.createElement(l.Z,{to:a,style:{fontWeight:"bold",alignSelf:"flex-end",fontSize:14,marginRight:"21px"}},"View More"))))}},3277:function(e,t,n){n.d(t,{ZP:function(){return m}});var o=n(2905),r="#4c6fff",a="#ffffff",i={black:"#000000",blue:r,white:a,indigo:"#635bff",yellow:"#fab007",orange:"#ff7602",cyan:"#12bcf5",pink:"#D372FC",red:"#fc5a5a",lightGray:"#f3f4f7",transparent:"rgba(0,0,0,0)",footer:{background:"#0a2540",text:"#8998AA"},pageText:{title:"#0a2540",body:"#425466",bodySecondary:"#6B7C93",highlight:r},pageBackground:{primary:a,secondary:"#f7f9fc"},navbar:{marketplace:"#061024"},background:{},primary:{}};i.background={default:i.white},i.primary={main:i.black};var l,c,d,s,p=i,u=(0,o.Z)({typography:{fontFamily:["Source Sans Pro","Poppins"].join(","),fontPrimary:"Source Sans Pro"},components:{MuiTextField:{defaultProps:{autoComplete:"off"}},MuiFilledInput:{defaultProps:{autoComplete:"off"}}},palette:p}),f={root:{backgroundColor:u.palette.white,height:52,borderRadius:26,fontFamily:"Source Sans Pro",fontSize:16,fontWeight:600,fontStretch:"normal",fontStyle:"normal",whiteSpace:"nowrap",lineHeight:"normal",letterSpacing:.51,color:u.palette.black,"&.Mui-disabled":{color:u.palette.white[1]}},contained:(l={color:u.palette.white,textTransform:"none",padding:"0px 72px",backgroundColor:u.palette.blue,boxShadow:"0 11px 15px 0 rgba(164, 164, 164, 0.21)"},l[u.breakpoints.down("sm")]={padding:"0px 56px"},l["&:hover"]={boxShadow:"0 11px 15px 0 rgba(164, 164, 164, 0.21)",backgroundColor:u.palette.footer.background},l["@media (hover: none)"]={"&:hover":{boxShadow:"0 11px 15px 0 rgba(164, 164, 164, 0.21) !important",backgroundColor:u.palette.footer.background+" !important"}},l),containedSecondary:{color:u.palette.blue,backgroundColor:u.palette.white,"&:hover":{color:u.palette.white,backgroundColor:u.palette.footer.background},"@media (hover: none)":{"&:hover":{color:u.palette.white+" !important",backgroundColor:u.palette.footer.background+" !important"}}},text:{backgroundColor:u.palette.transparent,color:u.palette.blue,borderRadius:12,"&:hover":{backgroundColor:u.palette.transparent,color:u.palette.cyan},"& .MuiTouchRipple-root span":{backgroundColor:"rgba(0, 0, 0, 0.08)!important"}}},g={root:{fontFamily:"Source Sans Pro",fontSize:16,fontWeight:"normal",fontStretch:"normal",fontStyle:"normal",lineHeight:"normal",letterSpacing:"normal",color:u.palette.pageText.title,marginRight:12},h1:(c={fontFamily:"Source Sans Pro",fontSize:56,fontWeight:500,fontStretch:"normal",fontStyle:"normal",lineHeight:1.21,letterSpacing:.08,color:u.palette.pageText.title},c[u.breakpoints.down("sm")]={fontSize:42,lineHeight:1.28,letterSpacing:-2.23},c),h2:{fontFamily:"Source Sans Pro",fontSize:32,fontWeight:600,fontStretch:"normal",fontStyle:"normal",lineHeight:1.03,letterSpacing:2.91,color:u.palette.pageText.title},h3:(d={fontFamily:"Source Sans Pro",fontSize:22,fontWeight:600,fontStretch:"normal",fontStyle:"normal",lineHeight:1.5,letterSpacing:2,color:u.palette.pageText.title},d[u.breakpoints.down("sm")]={fontSize:15.4,letterSpacing:"1.4px"},d),subtitle1:{fontFamily:"Source Sans Pro",fontSize:18,fontWeight:600,fontStretch:"normal",fontStyle:"normal",lineHeight:1.83,letterSpacing:1.64,color:u.palette.blue},subtitle2:{},body1:(s={fontFamily:"Source Sans Pro",fontSize:20,fontWeight:"normal",fontStretch:"normal",fontStyle:"normal",lineHeight:1.6,letterSpacing:.49,color:u.palette.pageText.body},s[u.breakpoints.down("sm")]={fontSize:17,lineHeight:1.5,letterSpacing:.7},s),body2:{fontFamily:"Source Sans Pro",fontSize:17,fontWeight:"normal",fontStretch:"normal",fontStyle:"normal",lineHeight:1.53,letterSpacing:.5,color:u.palette.pageText.body},button:{},gutterBottom:{marginBottom:"8px"}};u.components={MuiTypography:{styleOverrides:g},MuiButton:{styleOverrides:f},MuiIconButton:{styleOverrides:{root:{backgroundColor:"rgba(0, 0, 0, 0)","&:hover":{backgroundColor:"rgba(0, 0, 0, 0.2)"}}}}};var m=u},9730:function(e,t,n){n.r(t),n.d(t,{default:function(){return W}});var o=n(2685),r=n(7378),a=n(2399),i=n(43),l=n(4246);function c(e){const{styles:t,defaultTheme:n={}}=e,o="function"==typeof t?e=>{return t(null==(o=e)||0===Object.keys(o).length?n:e);var o}:t;return(0,l.jsx)(i.xB,{styles:o})}var d=n(3126);var s=function(e){return(0,l.jsx)(c,(0,o.Z)({},e,{defaultTheme:d.Z}))};const p=(e,t)=>(0,o.Z)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},t&&{colorScheme:e.palette.mode}),u=e=>(0,o.Z)({color:e.palette.text.primary},e.typography.body1,{backgroundColor:e.palette.background.default,"@media print":{backgroundColor:e.palette.common.white}});var f=function(e){const t=(0,a.Z)({props:e,name:"MuiCssBaseline"}),{children:n,enableColorScheme:i=!1}=t;return(0,l.jsxs)(r.Fragment,{children:[(0,l.jsx)(s,{styles:e=>((e,t=!1)=>{var n,r;let a={html:p(e,t),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:e.typography.fontWeightBold},body:(0,o.Z)({margin:0},u(e),{"&::backdrop":{backgroundColor:e.palette.background.default}})};const i=null==(n=e.components)||null==(r=n.MuiCssBaseline)?void 0:r.styleOverrides;return i&&(a=[a,i]),a})(e,i)}),n]})},g=n(5310),m=n(1582),h=n(353),b=n(8745),x=n(9703),y=n(2676),S=n(4384),k=n(2750),w=n(4776),v=n(8181),Z=n(7845),C=[{title:"Introduction",image:"/img/icons/info.png",description:"Learn about Switchboard and how it enables the community to dictate what data lives on-chain.",linkTo:"/introduction"},{title:"Architecture",image:"/img/icons/arc.png",description:"Learn about Switchboard Oracle Queues and how they allocate oracle resources on-chain.",linkTo:"/queue"},{title:"Oracle",image:"/img/icons/oracle.png",description:"Learn how to contribute to the network and process data feed updates.",linkTo:"/oracle"},{title:"Data Feeds",image:"/img/icons/sol.png",description:"Learn how Switchboard data feeds work.",linkTo:"/feed"},{title:"Develop",image:"/img/icons/developers.png",description:"Learn how to develop with Switchboard and use the APIs.",linkTo:"/developers"},{title:"Publish",image:"/img/icons/publish.svg",description:"Publish your own data feeds on-chain through Switchboard.",linkTo:"https://publish.switchboard.xyz/"}],E=(0,b.Z)("div")((function(e){var t=e.theme;return{backgroundColor:e.dark?t.palette.footer.background:t.palette.white,width:"100vw",height:"200px",display:"flex",flexDirection:"column",justifyContent:"center",margin:"-50px 0px 55px",paddingLeft:"40px"}})),T=(0,b.Z)(k.Z)((function(e){var t=e.dark,n=e.theme;return{marginBottom:"12px",fontWeight:600,fontFamily:"Poppins",color:t?n.palette.white:"#171725",fontSize:25,letterSpacing:"0.12px"}}));function P(){var e=(0,w.Z)(),t=((0,v.Z)(e.breakpoints.down("sm"),{defaultMatches:!0}),(0,m.If)().colorMode);return r.createElement(r.Fragment,null,r.createElement(E,{dark:"dark"===t?1:0},r.createElement("div",{style:{maxWidth:"1024px",margin:"auto"}},r.createElement(T,{dark:"dark"===t?1:0},"Welcome to Switchboard Documentation"),r.createElement(k.Z,{variant:"body2",sx:{fontFamily:"Poppins",color:"#92929d",fontSize:16,lineHeight:1.43}},"Switchboard provides a permission-less data layer to bridge the gap between the internet and web3. Click on a card below to learn how you can build with us."))),r.createElement(S.ZP,{container:!0,spacing:3,sx:{maxWidth:1024,alignSelf:"center"}},C.map((function(e,t){return r.createElement(S.ZP,{item:!0,key:e.title,xs:12,sm:6,md:4},r.createElement(Z.T,e))}))))}var z=n(3277),F=(0,b.Z)("main")((function(e){var t,n=e.theme;return(t={backgroundColor:e.dark?"#1f354b":n.palette.pageBackground.secondary,padding:"50px 32px 90px",minHeight:"calc(100vh - 324px)",width:"100vw",display:"flex",flexDirection:"column",alignItems:"center"})[n.breakpoints.down(966)]={padding:"50px 32px 90px"},t})),M=function(){var e=(0,m.If)().colorMode;return r.createElement(F,{dark:"dark"===e?1:0},r.createElement(P,null),r.createElement(g.Z,{sx:{height:20}}))};function W(){(0,h.Z)().siteConfig;return r.createElement(x.Z,{theme:z.ZP},r.createElement(f,null,r.createElement(y.Z,{title:"Documentation",description:"Documentation for Switchboard V2"},r.createElement(M,null))))}}}]);