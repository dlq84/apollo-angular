(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(7),i=(n(0),n(131)),o={title:"Customizing the behavior of cached fields",sidebar_title:"Customizing field behavior"},c={unversionedId:"caching/field-behavior",id:"caching/field-behavior",isDocsHomePage:!1,title:"Customizing the behavior of cached fields",description:"You can customize how a particular field in your Apollo Client cache is read and written. To do so, you define a field policy for the field. A field policy can include:",source:"@site/docs/caching/field-behavior.md",permalink:"/docs/caching/field-behavior",editUrl:"https://github.com/kamilkisiela/apollo-angular/edit/master/website/docs/caching/field-behavior.md",version:"next",sidebar:"docs",previous:{title:"Garbage collection and cache eviction",permalink:"/docs/caching/garbage-collection"},next:{title:"Advanced topics on caching",permalink:"/docs/caching/advanced-topics"}},l=[],p={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You can customize how a particular field in your Apollo Client cache is read and written. To do so, you define a ",Object(i.b)("strong",{parentName:"p"},"field policy")," for the field. A field policy can include:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("inlineCode",{parentName:"li"},"read")," function that specifies what happens when the field's cached value is read"),Object(i.b)("li",{parentName:"ul"},"A ",Object(i.b)("inlineCode",{parentName:"li"},"merge")," function that specifies what happens when field's cached value is written"),Object(i.b)("li",{parentName:"ul"},"An array of key arguments that help the cache avoid storing unnecessary duplicate data.")),Object(i.b)("p",null,"Please read the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/react/caching/cache-field-behavior/"}),'"Customizing the behavior of cached fields"')," chapter on Apollo Client documentation."))}u.isMDXComponent=!0},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,b=d["".concat(o,".").concat(f)]||d[f]||s[f]||i;return n?a.a.createElement(b,c(c({ref:t},p),{},{components:n})):a.a.createElement(b,c({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);