"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9514,6119],{9835:function(e,t,a){a.r(t),a.d(t,{default:function(){return ee}});var n=a(7378),l=a(5473),r=a(2676),o=a(1582),i=a(8944),c=a(3059),s=a(2685);function d(e){return n.createElement("svg",(0,s.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var u=a(9213),m="collapseSidebarButton_Essf",b="collapseSidebarButtonIcon_bqna";function p(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",m),onClick:t},n.createElement(d,{className:b}))}var f=a(1244),v=a(1884),h=a(5626),E=a(8458),g="menuHtmlItem_Q7z_",k="menuExternalLink_ZyOS",_=a(6457),S=["item"],C=["item","onItemClick","activePath","level","index"],N=["item","onItemClick","activePath","level","index"];function Z(e){var t=e.item,a=(0,f.Z)(e,S);switch(t.type){case"category":return n.createElement(I,(0,s.Z)({item:t},a));case"html":return n.createElement(T,(0,s.Z)({item:t},a));default:return n.createElement(M,(0,s.Z)({item:t},a))}}function I(e){var t=e.item,a=e.onItemClick,l=e.activePath,r=e.level,c=e.index,d=(0,f.Z)(e,C),m=t.items,b=t.label,p=t.collapsible,h=t.className,E=t.href,g=function(e){var t=(0,_.Z)();return(0,n.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,o.Wl)(e):void 0}),[e,t])}(t),k=(0,o._F)(t,l),S=(0,o.Mg)(E,l),N=(0,o.uR)({initialState:function(){return!!p&&(!k&&t.collapsed)}}),Z=N.collapsed,I=N.setCollapsed;!function(e){var t=e.isActive,a=e.collapsed,l=e.setCollapsed,r=(0,o.D9)(t);(0,n.useEffect)((function(){t&&!r&&a&&l(!1)}),[t,r,a,l])}({isActive:k,collapsed:Z,setCollapsed:I});var T=(0,o.fP)(),M=T.expandedItem,y=T.setExpandedItem;function x(e){void 0===e&&(e=!Z),y(e?null:c),I(e)}var F=(0,o.LU)().autoCollapseSidebarCategories;return(0,n.useEffect)((function(){p&&M&&M!==c&&F&&I(!0)}),[p,M,c,I,F]),n.createElement("li",{className:(0,i.Z)(o.kM.docs.docSidebarItemCategory,o.kM.docs.docSidebarItemCategoryLevel(r),"menu__list-item",{"menu__list-item--collapsed":Z},h)},n.createElement("div",{className:(0,i.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":S})},n.createElement(v.Z,(0,s.Z)({className:(0,i.Z)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!E,"menu__link--active":k}),onClick:p?function(e){null==a||a(t),E?x(!1):(e.preventDefault(),x())}:function(){null==a||a(t)},"aria-current":S?"page":void 0,"aria-expanded":p?!Z:void 0,href:p?null!=g?g:"#":g},d),b),E&&p&&n.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:b}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),x()}})),n.createElement(o.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:Z},n.createElement(L,{items:m,tabIndex:Z?-1:0,onItemClick:a,activePath:l,level:r+1})))}function T(e){var t=e.item,a=e.level,l=e.index,r=t.value,c=t.defaultStyle,s=t.className;return n.createElement("li",{className:(0,i.Z)(o.kM.docs.docSidebarItemLink,o.kM.docs.docSidebarItemLinkLevel(a),c&&g+" menu__list-item",s),key:l,dangerouslySetInnerHTML:{__html:r}})}function M(e){var t=e.item,a=e.onItemClick,l=e.activePath,r=e.level,c=(e.index,(0,f.Z)(e,N)),d=t.href,u=t.label,m=t.className,b=(0,o._F)(t,l),p=(0,h.Z)(d);return n.createElement("li",{className:(0,i.Z)(o.kM.docs.docSidebarItemLink,o.kM.docs.docSidebarItemLinkLevel(r),"menu__list-item",m),key:u},n.createElement(v.Z,(0,s.Z)({className:(0,i.Z)("menu__link",!p&&k,{"menu__link--active":b}),"aria-current":b?"page":void 0,to:d},p&&{onClick:a?function(){return a(t)}:void 0},c),u,!p&&n.createElement(E.Z,null)))}var y=["items"];function x(e){var t=e.items,a=(0,f.Z)(e,y);return n.createElement(o.D_,null,t.map((function(e,t){return n.createElement(Z,(0,s.Z)({key:t,item:e,index:t},a))})))}var L=(0,n.memo)(x),F="menu_XU2j",A="menuWithAnnouncementBar_vo3y";function P(e){var t=e.path,a=e.sidebar,l=e.className,r=function(){var e=(0,o.nT)().isActive,t=(0,n.useState)(e),a=t[0],l=t[1];return(0,o.RF)((function(t){var a=t.scrollY;e&&l(0===a)}),[e]),e&&a}();return n.createElement("nav",{className:(0,i.Z)("menu thin-scrollbar",F,r&&A,l)},n.createElement("ul",{className:(0,i.Z)(o.kM.docs.docSidebarMenu,"menu__list")},n.createElement(L,{items:a,activePath:t,level:1})))}var w="sidebar_Uz2u",B="sidebarWithHideableNavbar_MFe1",H="sidebarHidden_x4MP",D="sidebarLogo_iqfm";function R(e){var t=e.path,a=e.sidebar,l=e.onCollapse,r=e.isHidden,s=(0,o.LU)(),d=s.navbar.hideOnScroll,u=s.hideableSidebar;return n.createElement("div",{className:(0,i.Z)(w,d&&B,r&&H)},d&&n.createElement(c.Z,{tabIndex:-1,className:D}),n.createElement(P,{path:t,sidebar:a}),u&&n.createElement(p,{onClick:l}))}var W=n.memo(R),q=function(e){var t=e.sidebar,a=e.path,l=(0,o.el)();return n.createElement("ul",{className:(0,i.Z)(o.kM.docs.docSidebarMenu,"menu__list")},n.createElement(L,{items:t,activePath:a,onItemClick:function(e){"category"===e.type&&e.href&&l.toggle(),"link"===e.type&&l.toggle()},level:1}))};function z(e){return n.createElement(o.Zo,{component:q,props:e})}var U=n.memo(z);function Y(e){var t=(0,o.iP)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(W,e),l&&n.createElement(U,e))}var O=a(6119),X="backToTopButton_ecpa",j="backToTopButtonShow_xx7T";function G(){var e=(0,n.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var a=document.documentElement.scrollTop;a>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*a)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}function J(){var e=(0,n.useState)(!1),t=e[0],a=e[1],l=(0,n.useRef)(!1),r=G(),c=r.smoothScrollTop,s=r.cancelScrollToTop;return(0,o.RF)((function(e,t){var n=e.scrollY,r=null==t?void 0:t.scrollY;if(r)if(l.current)l.current=!1;else{var o=n<r;if(o||s(),n<300)a(!1);else if(o){var i=document.documentElement.scrollHeight;n+window.innerHeight<i&&a(!0)}else a(!1)}})),(0,o.SL)((function(e){e.location.hash&&(l.current=!0,a(!1))})),n.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",o.kM.common.backToTopButton,X,t&&j),type:"button",onClick:function(){return c()}})}var K=a(5331),Q={docPage:"docPage_zNSk",docMainContainer:"docMainContainer_vJqy",docSidebarContainer:"docSidebarContainer_NEdF",docMainContainerEnhanced:"docMainContainerEnhanced_Fy8f",docSidebarContainerHidden:"docSidebarContainerHidden_PWOl",collapsedDocSidebar:"collapsedDocSidebar_Yq6N",expandSidebarButtonIcon:"expandSidebarButtonIcon_bWt4",docItemWrapperEnhanced:"docItemWrapperEnhanced_bMey"},V=a(1867);function $(e){var t=e.currentDocRoute,a=e.versionMetadata,l=e.children,c=e.sidebarName,s=(0,o.Vq)(),m=a.pluginId,b=a.version,p=(0,n.useState)(!1),f=p[0],v=p[1],h=(0,n.useState)(!1),E=h[0],g=h[1],k=(0,n.useCallback)((function(){E&&g(!1),v((function(e){return!e}))}),[E]);return n.createElement(n.Fragment,null,n.createElement(V.Z,{version:b,tag:(0,o.os)(m,b)}),n.createElement(r.Z,null,n.createElement("div",{className:Q.docPage},n.createElement(J,null),s&&n.createElement("aside",{className:(0,i.Z)(o.kM.docs.docSidebarContainer,Q.docSidebarContainer,f&&Q.docSidebarContainerHidden),onTransitionEnd:function(e){e.currentTarget.classList.contains(Q.docSidebarContainer)&&f&&g(!0)}},n.createElement(Y,{key:c,sidebar:s,path:t.path,onCollapse:k,isHidden:E}),E&&n.createElement("div",{className:Q.collapsedDocSidebar,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:k,onClick:k},n.createElement(d,{className:Q.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,i.Z)(Q.docMainContainer,(f||!s)&&Q.docMainContainerEnhanced)},n.createElement("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",Q.docItemWrapper,f&&Q.docItemWrapperEnhanced)},l)))))}function ee(e){var t=e.route.routes,a=e.versionMetadata,r=e.location,c=t.find((function(e){return(0,K.LX)(r.pathname,e)}));if(!c)return n.createElement(O.default,null);var s=c.sidebar,d=s?a.docsSidebars[s]:null;return n.createElement(o.FG,{className:(0,i.Z)(o.kM.wrapper.docsPages,o.kM.page.docsDocPage,a.className)},n.createElement(o.qu,{version:a},n.createElement(o.bT,{sidebar:null!=d?d:null},n.createElement($,{currentDocRoute:c,versionMetadata:a,sidebarName:s},(0,l.H)(t,{versionMetadata:a})))))}},6119:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var n=a(7378),l=a(2676),r=a(9213),o=a(1582);function i(){return n.createElement(n.Fragment,null,n.createElement(o.d,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),n.createElement(l.Z,null,n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);