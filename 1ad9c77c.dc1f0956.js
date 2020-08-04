(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{131:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),c=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||r;return n?o.a.createElement(m,s(s({ref:t},p),{},{components:n})):o.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n(2),o=n(7),r=(n(0),n(131)),i={title:"Query, Mutation, Subscription services",description:"Additional API to use GraphQL in Angular"},s={unversionedId:"data/services",id:"data/services",isDocsHomePage:!1,title:"Query, Mutation, Subscription services",description:"Additional API to use GraphQL in Angular",source:"@site/docs/data/services.md",permalink:"/docs/data/services",editUrl:"https://github.com/kamilkisiela/apollo-angular/edit/master/website/docs/data/services.md",version:"next",sidebar:"docs",previous:{title:"Subscriptions",permalink:"/docs/data/subscriptions"},next:{title:"Network layer",permalink:"/docs/data/network"}},l=[{value:"Query",id:"query",children:[{value:"Basic example",id:"basic-example",children:[]},{value:"Example with variables",id:"example-with-variables",children:[]},{value:"API of Query",id:"api-of-query",children:[]}]},{value:"Mutation",id:"mutation",children:[{value:"Basic example",id:"basic-example-1",children:[]},{value:"API of Mutation",id:"api-of-mutation",children:[]}]},{value:"Subscription",id:"subscription",children:[{value:"Basic example",id:"basic-example-2",children:[]},{value:"API of Subscription",id:"api-of-subscription",children:[]}]},{value:"Code Generation",id:"code-generation",children:[]}],p={rightToc:l};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"If you're familiar with the library, you already know the Apollo service.\nIt is a regular Angular service, pretty much the only one you need to use."),Object(r.b)("p",null,"The API is straightforward, ",Object(r.b)("inlineCode",{parentName:"p"},"query")," and ",Object(r.b)("inlineCode",{parentName:"p"},"watchQuery")," methods for Queries, ",Object(r.b)("inlineCode",{parentName:"p"},"mutate")," and ",Object(r.b)("inlineCode",{parentName:"p"},"subscribe")," accordingly for Mutations and Subscriptions. There is more than that but if you don't do anything advanced that's all you really need."),Object(r.b)("p",null,"We decided to introduce a new approach of working with GraphQL in Angular."),Object(r.b)("p",null,"There are now 3 new APIs: ",Object(r.b)("inlineCode",{parentName:"p"},"Query"),", ",Object(r.b)("inlineCode",{parentName:"p"},"Mutation")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Subscription"),". Each of them allows to define the shape of a result & variables.\nThe only thing you need to do is to set the document property. That\u2019s it, you use it as a regular Angular service."),Object(r.b)("p",null,"In this approach GraphQL Documents are first-class citizens, you think about the query, for example, as a main subject."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The best part about the new API is that you don't have to create those services, there's a tool that does it for you.\nTo read more about it, go to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#code-generation"}),'"Code Generation"')," section")),Object(r.b)("h2",{id:"query"},"Query"),Object(r.b)("p",null,"To get started with the new API, let's see how you define queries with it."),Object(r.b)("p",null,"You create a service and extend it with a ",Object(r.b)("inlineCode",{parentName:"p"},"Query")," class from ",Object(r.b)("inlineCode",{parentName:"p"},"apollo-angular"),". Only thing you need to set is a ",Object(r.b)("inlineCode",{parentName:"p"},"document")," property."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import {Injectable} from '@angular/core';\nimport {Query, gql} from 'apollo-angular';\n\nexport interface Post {\n  id: string;\n  title: string;\n  votes: number;\n  author: {\n    id: string;\n    firstName: string;\n    lastName: string;\n  };\n}\nexport interface Response {\n  posts: Post[];\n}\n\n\n@Injectable({\n  providedIn: 'root',\n})\nexport class AllPostsGQL extends Query<Response> {\n  document = gql`\n    query allPosts {\n      posts {\n        id\n        title\n        votes\n        author {\n          id\n          firstName\n          lastName\n        }\n      }\n    }\n  `;\n}\n")),Object(r.b)("p",null,"We have now a ready to use GraphQL Query that takes advantage of ",Object(r.b)("inlineCode",{parentName:"p"},"Apollo")," service under the hood."),Object(r.b)("h3",{id:"basic-example"},"Basic example"),Object(r.b)("p",null,"Let's see how to actually use it in a component:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component, OnInit } from '@angular/core';\nimport { Observable } from 'rxjs';\nimport { map } from 'rxjs/operators';\n\n// import a service\nimport { Post, AllPostsGQL } from './graphql';\n\n@Component({...})\nexport class ListComponent implements OnInit {\n  posts: Observable<Post[]>;\n\n  // inject it\n  constructor(private allPostsGQL: AllPostsGQL) {}\n\n  ngOnInit() {\n    // use it!\n    this.posts = this.allPostsGQL.watch()\n      .valueChanges\n      .pipe(\n        map(result => result.data.posts)\n      );\n  }\n}\n")),Object(r.b)("h3",{id:"example-with-variables"},"Example with variables"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"@Component({...})\nexport class ListComponent implements OnInit {\n\n  // ...\n\n  ngOnInit() {\n    // variables as first argument\n    // options as second\n    this.posts = this.allPostsGQL.watch({\n      first: 10\n    }, {\n      fetchPolicy: 'network-only'\n    })\n      .valueChanges\n      .pipe(\n        map(result => result.data.posts)\n      );\n  }\n}\n")),Object(r.b)("h3",{id:"api-of-query"},"API of Query"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Query")," class has two methods:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"watch(variables?, options?)")," - it's the same as ",Object(r.b)("inlineCode",{parentName:"li"},"Apollo.watchQuery")," except it accepts variables as a first argument and regular options as the second one"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fetch(variables?, options?)")," - same as ",Object(r.b)("inlineCode",{parentName:"li"},"Apollo.query"),", it fetches data once.")),Object(r.b)("h2",{id:"mutation"},"Mutation"),Object(r.b)("p",null,"You create a service and extend it with a ",Object(r.b)("inlineCode",{parentName:"p"},"Mutation")," class from ",Object(r.b)("inlineCode",{parentName:"p"},"apollo-angular"),". Only thing you need to set is a ",Object(r.b)("inlineCode",{parentName:"p"},"document")," property."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import {Injectable} from '@angular/core';\nimport {Mutation, gql} from 'apollo-angular';\n\n@Injectable({\n  providedIn: 'root',\n})\nexport class UpvotePostGQL extends Mutation {\n  document = gql`\n    mutation upvotePost($postId: Int!) {\n      upvotePost(postId: $postId) {\n        id\n        votes\n      }\n    }\n  `;\n}\n")),Object(r.b)("p",null,"We have now a ready to use GraphQL Mutation."),Object(r.b)("h3",{id:"basic-example-1"},"Basic example"),Object(r.b)("p",null,"Let's see how to actually use it in a component:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import {Component, Input} from '@angular/core';\nimport {UpvotePostGQL} from './graphql';\n\n@Component({\n  selector: 'app-upvoter',\n  template: `\n    <button (click)=\"upvote()\">\n      Upvote\n    </button>\n  `,\n})\nexport class UpvoterComponent {\n  @Input()\n  postId: number;\n\n  constructor(private upvotePostGQL: UpvotePostGQL) {}\n\n  upvote() {\n    this.upvotePostGQL\n      .mutate({\n        postId: this.postId,\n      })\n      .subscribe();\n  }\n}\n")),Object(r.b)("h3",{id:"api-of-mutation"},"API of Mutation"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Mutation")," class has only one method:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"mutate(variables?, options?)")," - it's the same as ",Object(r.b)("inlineCode",{parentName:"li"},"Apollo.mutate")," except it accepts variables as a first argument and regular options as the second one.")),Object(r.b)("h2",{id:"subscription"},"Subscription"),Object(r.b)("p",null,"You create a service and extend it with a ",Object(r.b)("inlineCode",{parentName:"p"},"Subscription")," class from ",Object(r.b)("inlineCode",{parentName:"p"},"apollo-angular"),". Only thing you need to set is a ",Object(r.b)("inlineCode",{parentName:"p"},"document")," property."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import {Injectable} from '@angular/core';\nimport {Subscription, gql} from 'apollo-angular';\n\n@Injectable({\n  providedIn: 'root',\n})\nexport class NewPostGQL extends Subscription {\n  document = gql`\n    subscription newPost {\n      newPost {\n        id\n        title\n      }\n    }\n  `;\n}\n")),Object(r.b)("p",null,"We have now a ready to use GraphQL Subscription."),Object(r.b)("h3",{id:"basic-example-2"},"Basic example"),Object(r.b)("p",null,"Let's see how to actually use it in a component:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import {Component, Input} from '@angular/core';\nimport {NewPostGQL} from './graphql';\n\n@Component({ ... })\nexport class ActivityComponent {\n  constructor(newPostGQL: NewPostGQL) {\n    this.lastPost = newPostGQL.subscribe();\n  }\n}\n")),Object(r.b)("h3",{id:"api-of-subscription"},"API of Subscription"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Subscription")," class has only one method:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"subscribe(variables?, options?, extraOptions?)")," - it's the same as ",Object(r.b)("inlineCode",{parentName:"li"},"Apollo.subscribe")," except its first argument expect variables.")),Object(r.b)("h2",{id:"code-generation"},"Code Generation"),Object(r.b)("p",null,"There's a tool to generate a ready to use in your component, strongly typed Angular services, for every defined query, mutation or subscription."),Object(r.b)("p",null,"In short, you define a query in ",Object(r.b)("inlineCode",{parentName:"p"},".graphql")," file so your IDE gives you autocompletion and validation."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query allPosts {\n  posts {\n    id\n    title\n    votes\n    author {\n      id\n      firstName\n      lastName\n    }\n  }\n}\n")),Object(r.b)("p",null,"Code generation tool outputs to a file, a fully featured service called ",Object(r.b)("inlineCode",{parentName:"p"},"AllPostsGQL")," with every interface you will need."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Component, OnInit } from '@angular/core';\nimport { Observable } from 'rxjs';\nimport { map } from 'rxjs/operators';\n\n// import a service and a type from the generated output\nimport { Post, AllPostsGQL } from './generated';\n\n@Component({...})\nexport class ListComponent implements OnInit {\n  posts: Observable<Post[]>;\n\n  // inject it\n  constructor(private allPostsGQL: AllPostsGQL) {}\n\n  ngOnInit() {\n    // use it!\n    this.posts = this.allPostsGQL.watch()\n      .valueChanges\n      .pipe(\n        map(result => result.data.posts)\n      );\n  }\n}\n")),Object(r.b)("p",null,"To learn more about the tool, please read the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://medium.com/the-guild/apollo-angular-code-generation-7903da1f8559"}),'"Apollo-Angular 1.2\u200a \u2014 \u200ausing GraphQL in your apps just got a whole lot easier!"')," article or go straight to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://graphql-code-generator.com/docs/plugins/typescript-apollo-angular"}),"documentation"),"."))}c.isMDXComponent=!0}}]);