(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{131:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?a.a.createElement(f,l(l({ref:t},c),{},{components:n})):a.a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(7),o=(n(0),n(131)),i={title:"Prefetching data"},l={unversionedId:"recipes/prefetching",id:"version-1.0/recipes/prefetching",isDocsHomePage:!1,title:"Prefetching data",description:"One of the easiest ways to make your application's UI feel a lot snappier with Apollo Client is to use prefetching. Prefetching simply means fetching data before it needs to be rendered on the screen, for example by loading all data required for a view as soon as you anticipate that a user will navigate to it.",source:"@site/versioned_docs/version-1.0/recipes/prefetching.md",permalink:"/docs/1.0/recipes/prefetching",editUrl:"https://github.com/kamilkisiela/apollo-angular/edit/master/website/versioned_docs/version-1.0/recipes/prefetching.md",version:"1.0",sidebar:"version-1.0/docs",previous:{title:"Authentication",permalink:"/docs/1.0/recipes/authentication"},next:{title:"Server Side Rendering",permalink:"/docs/1.0/recipes/server-side-rendering"}},s=[],c={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"One of the easiest ways to make your application's UI feel a lot snappier with Apollo Client is to use prefetching. Prefetching simply means fetching data before it needs to be rendered on the screen, for example by loading all data required for a view as soon as you anticipate that a user will navigate to it."),Object(o.b)("p",null,"In Apollo Client, prefetching is very simple and can be done by running a component's query before rendering."),Object(o.b)("p",null,"GitHunt uses ",Object(o.b)("inlineCode",{parentName:"p"},"Apollo")," and calls ",Object(o.b)("inlineCode",{parentName:"p"},"query")," method as soon as the user hovers over a link to the comments  page.\nWith the data prefetched, the comments page renders immediately, and the user often experiences no delay at all:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { Apollo } from 'apollo-angular';\nimport gql from 'graphql-tag';\n\n@Component({\n  template: `\n    <a [routerLink]=\"['/', org, repoName]\" (mouseover)=\"prefetchComments(fullName)\">\n      View comments ({{ commentCount }})\n    </a>\n  `\n})\nclass RepoInfoComponent {\n  org: string;\n  fullName: string;\n  repoName: string;\n  entry: any;\n\n  constructor(private apollo: Apollo) {}\n\n  prefetchComments(repoFullName: string) {\n    this.apollo.query({\n      query: commentQuery,\n      variables: { repoName: repoFullName },\n    }).subscribe();\n  }\n}\n")),Object(o.b)("p",null,"There are a lot of different ways to anticipate that the user will end up needing some data in the UI. In addition to using the hover state, here are some other places you can preload data:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The next step of a multi-step wizard immediately"),Object(o.b)("li",{parentName:"ol"},"The route of a call-to-action button"),Object(o.b)("li",{parentName:"ol"},"All of the data for a sub-area of the application, to make navigating within that area instant")),Object(o.b)("p",null,"If you have some other ideas, please send a PR to this article, and maybe add some more code snippets. A special form of prefetching is ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/1.0/recipes/server-side-rendering#store-rehydration"}),"store hydration from the server"),", so you might also consider hydrating more data than is actually needed for the first page load to make other interactions faster."))}p.isMDXComponent=!0}}]);