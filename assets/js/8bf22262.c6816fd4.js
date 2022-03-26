"use strict";(self.webpackChunkstarcoin_cookbook=self.webpackChunkstarcoin_cookbook||[]).push([[8319],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},c=Object.keys(t);for(o=0;o<c.length;o++)n=c[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(o=0;o<c.length;o++)n=c[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=o.createContext({}),l=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=l(t.components);return o.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},f=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,c=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),f=l(n),d=r,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||c;return n?o.createElement(m,a(a({ref:e},u),{},{components:n})):o.createElement(m,a({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var c=n.length,a=new Array(c);a[0]=f;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,a[1]=i;for(var l=2;l<c;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4862:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var o=n(7462),r=n(3366),c=(n(7294),n(3905)),a=["components"],i={},s="Working with the Starcoin console",l={unversionedId:"getting_started/setup/starcoin-console",id:"getting_started/setup/starcoin-console",title:"Working with the Starcoin console",description:"TODO",source:"@site/docs/02-getting_started/02-setup/02-starcoin-console.md",sourceDirName:"02-getting_started/02-setup",slug:"/getting_started/setup/starcoin-console",permalink:"/starcoin-cookbook/docs/getting_started/setup/starcoin-console",editUrl:"https://github.com/starcoinorg/starcoin-cookbook/edit/main/docs/02-getting_started/02-setup/02-starcoin-console.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"How to use starcoin CLI",permalink:"/starcoin-cookbook/docs/getting_started/setup/starcoin-usage"},next:{title:"How to set up a local dev network",permalink:"/starcoin-cookbook/docs/getting_started/setup/dev-network"}},u={},p=[],f={toc:p};function d(t){var e=t.components,n=(0,r.Z)(t,a);return(0,c.kt)("wrapper",(0,o.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"working-with-the-starcoin-console"},"Working with the Starcoin console"),(0,c.kt)("p",null,"TODO"),(0,c.kt)("ol",null,(0,c.kt)("li",{parentName:"ol"},"How to start with console"),(0,c.kt)("li",{parentName:"ol"},"How to attach to the console"),(0,c.kt)("li",{parentName:"ol"},"How to connect remote node with console"),(0,c.kt)("li",{parentName:"ol"},"How to connect remote node and use local account")),(0,c.kt)("ol",{start:3},(0,c.kt)("li",{parentName:"ol"},"Attach to console by docker")),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --rm -it -v  ~/.starcoin/:/root/.starcoin/ starcoin/starcoin:latest /starcoin/starcoin --connect /root/.starcoin/main/starcoin.ipc console\n")))}d.isMDXComponent=!0}}]);