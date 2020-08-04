(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{131:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),u=p(n),O=a,s=u["".concat(i,".").concat(O)]||u[O]||d[O]||l;return n?r.a.createElement(s,o(o({ref:t},c),{},{components:n})):r.a.createElement(s,o({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=O;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(7),l=(n(0),n(131)),i={title:"Network layer",description:"How to interact with your GraphQL API"},o={unversionedId:"data/network",id:"data/network",isDocsHomePage:!1,title:"Network layer",description:"How to interact with your GraphQL API",source:"@site/docs/data/network.md",permalink:"/docs/data/network",editUrl:"https://github.com/kamilkisiela/apollo-angular/edit/master/website/docs/data/network.md",version:"next",sidebar:"docs",previous:{title:"Query, Mutation, Subscription services",permalink:"/docs/data/services"},next:{title:"Pagination",permalink:"/docs/data/pagination"}},b=[{value:"Usage",id:"usage",children:[]},{value:"HttpClient",id:"httpclient",children:[]},{value:"Options",id:"options",children:[]},{value:"Context",id:"context",children:[{value:"Uri as function",id:"uri-as-function",children:[]},{value:"File upload",id:"file-upload",children:[]},{value:"Middleware",id:"middleware",children:[]},{value:"Afterware (error)",id:"afterware-error",children:[]}]},{value:"Usage",id:"usage-1",children:[]},{value:"HttpClient",id:"httpclient-1",children:[]},{value:"Options",id:"options-1",children:[]},{value:"BatchOptions",id:"batchoptions",children:[]},{value:"Context",id:"context-1",children:[]}],c={rightToc:b};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Apollo Angular comes with two kinds of network layer based on Angular's ",Object(l.b)("inlineCode",{parentName:"p"},"HttpClient"),"."),Object(l.b)("h1",{id:"http-link"},"Http Link"),Object(l.b)("p",null,"An Apollo Link to allow sending a single http request per operation. It's based on Angular's ",Object(l.b)("inlineCode",{parentName:"p"},"HttpClient"),"."),Object(l.b)("p",null,"Why not ",Object(l.b)("inlineCode",{parentName:"p"},"@apollo/client/link/http"),"? You get SSR for free, ability to use Http Interceptors and easier testing."),Object(l.b)("h2",{id:"usage"},"Usage"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import {HttpLink} from 'apollo-angular/http';\nimport {APOLLO_OPTIONS} from 'apollo-angular';\n\n@NgModule({\n  providers: [\n    {\n      provide: APOLLO_OPTIONS,\n      useFactory(httpLink: HttpLink) {\n        return {\n          // other options\n          link: httpLink.create({uri: '/graphql'}),\n        };\n      },\n      deps: [HttpLink],\n    },\n  ],\n})\nclass AppModule {}\n")),Object(l.b)("h2",{id:"httpclient"},"HttpClient"),Object(l.b)("p",null,"The HTTP Link relies on having ",Object(l.b)("inlineCode",{parentName:"p"},"HttpClient")," (from ",Object(l.b)("inlineCode",{parentName:"p"},"@angular/common/http"),")\npresent in your application."),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)("p",null,"HTTP Link takes an object with some options on it to customize the behavior of\nthe link. If your server supports it, the HTTP link can also send over metadata\nabout the request in the extensions field. To enable this, pass\n",Object(l.b)("inlineCode",{parentName:"p"},"includeExtensions")," as true. If you would like to use persisted queries or just\nnot to send a query, disable ",Object(l.b)("inlineCode",{parentName:"p"},"includeQuery"),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"value"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"default"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"uri"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string / function"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"/graphql")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"includeExtensions"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"false")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"includeQuery"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"true")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"headers"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"HttpHeaders"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"none")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"withCredentials"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"none")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"method"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"POST")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false")))),Object(l.b)("h2",{id:"context"},"Context"),Object(l.b)("p",null,"The HTTP Link uses the ",Object(l.b)("inlineCode",{parentName:"p"},"headers")," field on the context to allow passing headers\nto the HTTP request. It also supports the ",Object(l.b)("inlineCode",{parentName:"p"},"withCredentials")," field for defining\ncredentials policy for request. These options will override the same key if\npassed when creating the the link. If some setting is different than the one in\nOptions, this one will be used."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"value"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"default"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"uri"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"as in options")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"includeExtensions"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"as in options")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"includeQuery"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"as in options")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"headers"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"HttpHeaders"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"none"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"withCredentials"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"as in options")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"method"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"as in options")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"useMultipart"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"as in options")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false")))),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import {HttpLink} from 'apollo-link/http';\nimport {Apollo, APOLLO_OPTIONS} from 'apollo-angular';\nimport {InMemoryCache} from '@apollo/client/core';\nimport {HttpClientModule} from '@angular/common/http';\n\n@NgModules({\n  imports: [HttpClientModule],\n  providers: [\n    {\n      provide: APOLLO_OPTIONS,\n      useFactory(httpLink: HttpLink) {\n        return {\n          link: httpLink.create({uri: '/graphql'}),\n          cache: new InMemoryCache(),\n        };\n      },\n      deps: [HttpLink],\n    },\n  ],\n})\nclass AppModule {}\n\n// a query with apollo-angular\n// somewhere in Component\napollo.query({\n  query: MY_QUERY,\n  context: {\n    // example of setting the headers with context per operation\n    headers: new HttpHeaders().set('X-Custom-Header', 'custom-value'),\n  },\n});\n")),Object(l.b)("h3",{id:"uri-as-function"},"Uri as function"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"@NgModules({\n  imports: [HttpClientModule],\n  providers: [\n    {\n      provide: APOLLO_OPTIONS,\n      useFactory(httpLink: HttpLink) {\n        return {\n          link: httpLink.create({\n            uri(operation) {\n              return operation.operationName === 'login' ? '/auth' : '/graphq';\n            },\n          }),\n          cache: new InMemoryCache(),\n        };\n      },\n      deps: [HttpLink],\n    },\n  ],\n})\nclass AppModule {}\n")),Object(l.b)("h3",{id:"file-upload"},"File upload"),Object(l.b)("p",null,"In order to upload a file, you need to turn on ",Object(l.b)("inlineCode",{parentName:"p"},"useMultipart")," flag:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"apollo.query({\n  query: MY_QUERY,\n  context: {\n    useMultipart: true,\n  },\n});\n")),Object(l.b)("h3",{id:"middleware"},"Middleware"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import {ApolloLink} from '@apollo/client/core';\nimport {HttpLink} from 'apollo-angular/http';\n\n@NgModules({\n  imports: [HttpClientModule],\n  providers: [\n    {\n      provide: APOLLO_OPTIONS,\n      useFactory(httpLink: HttpLink) {\n        const http = httpLink.create({uri: '/graphql'});\n        const middleware = new ApolloLink((operation, forward) => {\n          operation.setContext({\n            headers: new HttpHeaders().set(\n              'Authorization',\n              localStorage.getItem('token') || null,\n            ),\n          });\n          return forward(operation);\n        });\n\n        const link = middleware.concat(http);\n\n        return {\n          link,\n          cache: new InMemoryCache(),\n        };\n      },\n      deps: [HttpLink],\n    },\n  ],\n})\nclass AppModule {}\n")),Object(l.b)("h3",{id:"afterware-error"},"Afterware (error)"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import {ApolloLink} from '@apollo/client/core';\nimport {HttpLink} from 'apollo-angular/http';\nimport {onError} from '@apollo/client/link/error';\n\nimport {Auth} from './auth.service';\n\n@NgModules({\n  imports: [HttpClientModule],\n  providers: [\n    {\n      provide: APOLLO_OPTIONS,\n      useFactory(httpLink: HttpLink) {\n        const http = httpLink.create({uri: '/graphql'});\n        const error = onError(({networkError}) => {\n          if (networkError.status === 401) {\n            auth.logout();\n          }\n        });\n\n        const link = error.concat(http);\n\n        return {\n          link,\n          cache: new InMemoryCache(),\n        };\n      },\n      deps: [HttpLink],\n    },\n  ],\n})\nclass AppModule {}\n")),Object(l.b)("h1",{id:"http-batching-link"},"Http Batching Link"),Object(l.b)("p",null,"An Apollo Link to combine multiple GraphQL operations into single HTTP request."),Object(l.b)("h2",{id:"usage-1"},"Usage"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import {HttpBatchLink} from 'apollo-angular/http';\n\n@NgModule({\n  providers: [\n    {\n      provide: APOLLO_OPTIONS,\n      useFactory(httpLink: HttpBatchLink) {\n        return {\n          // other options\n          link: httpLink.create({uri: '/graphql'}),\n        };\n      },\n      deps: [HttpBatchLink],\n    },\n  ],\n})\nclass AppModule {}\n")),Object(l.b)("h2",{id:"httpclient-1"},"HttpClient"),Object(l.b)("p",null,"The HTTP Link relies on having ",Object(l.b)("inlineCode",{parentName:"p"},"HttpClient")," (from ",Object(l.b)("inlineCode",{parentName:"p"},"@angular/common/http"),")\npresent in your application."),Object(l.b)("h2",{id:"options-1"},"Options"),Object(l.b)("p",null,"Accepts the same options as ",Object(l.b)("inlineCode",{parentName:"p"},"HttpLink"),"."),Object(l.b)("h2",{id:"batchoptions"},"BatchOptions"),Object(l.b)("p",null,"The batching options indicate how operations are batched together."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"value"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"default"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"required"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"batchInterval"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"10"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"batchMax"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"10"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"batchKey"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Function"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"false")))),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"batchInterval")," - the maximum time a batch will wait before automatically being sent over the network"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"batchMax")," - the size of batches"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"batchKey")," a function that accepts an operation and returns a string key, which uniquely names the batch the operation belongs to, defaults to returning the same string.")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"NOTICE: ",Object(l.b)("inlineCode",{parentName:"p"},"batchKey")," by default batches together requests with the same uri and the same options. Since options from an operation's context overwrites those from a link you could end up with few differents keys and what it means, few separate requests.")),Object(l.b)("h2",{id:"context-1"},"Context"),Object(l.b)("p",null,"Works in the same way as in ",Object(l.b)("inlineCode",{parentName:"p"},"HttpLink"),"."),Object(l.b)("p",null,"To skip batching you can set ",Object(l.b)("inlineCode",{parentName:"p"},"skipBatching: true")," in operation's context."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"NOTICE: ",Object(l.b)("inlineCode",{parentName:"p"},"skipBatching")," works only with the default ",Object(l.b)("inlineCode",{parentName:"p"},"batchKey"),". To create custom one you should check if ",Object(l.b)("inlineCode",{parentName:"p"},"skipBatching")," is set in context and generate a random ",Object(l.b)("inlineCode",{parentName:"p"},"batchKey")," for that operation.")))}p.isMDXComponent=!0}}]);