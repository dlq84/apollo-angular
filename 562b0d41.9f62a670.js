(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{131:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var o=t(0),a=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),p=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),b=o,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||r;return t?a.a.createElement(m,l(l({ref:n},c),{},{components:t})):a.a.createElement(m,l({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=b;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=t[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},88:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var o=t(2),a=t(7),r=(t(0),t(131)),i={title:"Testing Apollo in Angular",description:"Have peace of mind when using apollo-angular in production"},l={unversionedId:"guides/testing",id:"version-1.0/guides/testing",isDocsHomePage:!1,title:"Testing Apollo in Angular",description:"Have peace of mind when using apollo-angular in production",source:"@site/versioned_docs/version-1.0/guides/testing.md",permalink:"/docs/1.0/guides/testing",editUrl:"https://github.com/kamilkisiela/apollo-angular/edit/master/website/versioned_docs/version-1.0/guides/testing.md",version:"1.0",sidebar:"version-1.0/docs",previous:{title:"State management",permalink:"/docs/1.0/guides/state-management"},next:{title:"Tools and Packages",permalink:"/docs/1.0/guides/tools-and-packages"}},s=[{value:"An introduction",id:"an-introduction",children:[]},{value:"<code>ApolloTestingModule</code>",id:"apollotestingmodule",children:[]},{value:"Expecting and answering operations",id:"expecting-and-answering-operations",children:[{value:"expectOne",id:"expectone",children:[]},{value:"expectNone",id:"expectnone",children:[]},{value:"match",id:"match",children:[]},{value:"verify",id:"verify",children:[]},{value:"TestOperation",id:"testoperation",children:[]}]},{value:"Using named clients",id:"using-named-clients",children:[]},{value:"Using a custom cache",id:"using-a-custom-cache",children:[]},{value:"Summary",id:"summary",children:[]}],c={rightToc:s};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Running tests against code meant for production has long been a best practice. It provides additional security for the code that's already written, and prevents accidental regressions in the future. Components utilizing ",Object(r.b)("inlineCode",{parentName:"p"},"apollo-angular"),", the Angular implementation of Apollo Client, are no exception."),Object(r.b)("p",null,"Although ",Object(r.b)("inlineCode",{parentName:"p"},"apollo-angular")," has a lot going on under the hood, the library provides multiple tools for testing that simplify those abstractions, and allows complete focus on the component logic."),Object(r.b)("h2",{id:"an-introduction"},"An introduction"),Object(r.b)("p",null,"This guide will explain step-by-step how to test ",Object(r.b)("inlineCode",{parentName:"p"},"apollo-angular")," code. The following examples use the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://facebook.github.io/jest/docs/en/tutorial-react.html"}),"Jest")," testing framework, but most concepts should be reusable with other libraries."),Object(r.b)("p",null,"Consider the component below, which makes a basic query, and displays its results:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import {Component, OnInit, Input} from '@angular/core';\nimport {Apollo} from 'apollo-angular';\nimport gql from 'graphql-tag';\nimport { Observable } from 'rxjs';\nimport { shareReplay, pluck} from 'rxjs/operators';\n\n// Make sure the query is also exported -- not just the component\nexport const GET_DOG_QUERY = gql`\n  query getDog($name: String) {\n    dog(name: $name) {\n      id\n      name\n      breed\n    }\n  }\n`;\n\n@Component({\n  selector: 'dog',\n  template: `\n    <div *ngIf=\"loading$\">Loading ...</div>\n    <div *ngIf=\"error$\">Error!</div>\n    <p *ngIf=\"dog$ | async as dog\">\n      {dog.name} is a {dog.breed}\n    </p>\n  `\n})\nexport class DogComponent implements OnInit {\n  @Input() name: string;\n\n  loading$: Observable<boolean>;\n  error$: Observable<any>;\n  dog$: Observable<any>;\n\n  constructor(private apollo: Apollo) {}\n\n  ngOnInit() {\n    const source$ = this.getDog();\n\n    this.loading$ = source$.pipe(pluck('loading'));\n    this.error$ = source$.pipe(pluck('errors'));\n    this.dog$ = source$.pipe(pluck('data', 'dog'));\n  }\n\n  getDog() {\n    return this.apollo.watchQuery({\n      query: GET_DOG_QUERY,\n      variables: {\n        name: this.name\n      }\n    })\n    .valueChanges\n    .pipe(shareReplay(1));\n  }\n}\n")),Object(r.b)("h2",{id:"apollotestingmodule"},Object(r.b)("inlineCode",{parentName:"h2"},"ApolloTestingModule")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"apollo-angular/testing")," module exports a ",Object(r.b)("inlineCode",{parentName:"p"},"ApolloTestingModule")," module and ",Object(r.b)("inlineCode",{parentName:"p"},"ApolloTestingController")," service which simplifies the testing of Angular components by mocking calls to the GraphQL endpoint. This allows the tests to be run in isolation and provides consistent results on every run by removing the dependence on remote data."),Object(r.b)("p",null,"By using this ",Object(r.b)("inlineCode",{parentName:"p"},"ApolloTestingController")," service, it's possible to specify the exact results that should be returned for a certain query."),Object(r.b)("p",null,"Here's an example of a test for the above ",Object(r.b)("inlineCode",{parentName:"p"},"Dog")," component using ",Object(r.b)("inlineCode",{parentName:"p"},"ApolloTestingController"),", which shows how to define the mocked response for ",Object(r.b)("inlineCode",{parentName:"p"},"GET_DOG_QUERY"),"."),Object(r.b)("p",null,"But first, we need to set everything up."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import {\n  ApolloTestingModule,\n  ApolloTestingController,\n} from 'apollo-angular/testing';\n\ndescribe('DogComponent', () => {\n  controller: ApolloTestingController;\n\n  beforeEach(() => {\n    TestBed.configureTestingModule({\n      imports: [ApolloTestingModule],\n    });\n\n    controller = TestBed.get(ApolloTestingController);\n  });\n\n  afterEach(() => {\n    controller.verify();\n  });\n});\n")),Object(r.b)("p",null,"As you can see, it feels a lot like ",Object(r.b)("inlineCode",{parentName:"p"},"HttpTestingController"),", it has pretty much the same API so nothing new for you!"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"We recommend you to read ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://angular.io/guide/http#testing-http-requests"}),'"Testing HTTP requests"')," chapter of Angular docs.")),Object(r.b)("p",null,"In this configuration, we get mock ",Object(r.b)("inlineCode",{parentName:"p"},"Apollo")," service by importing ",Object(r.b)("inlineCode",{parentName:"p"},"ApolloTestingModule")," and we make sure there is no open operations thanks to ",Object(r.b)("inlineCode",{parentName:"p"},"controller.verify()"),"."),Object(r.b)("p",null,"Because ",Object(r.b)("inlineCode",{parentName:"p"},"ApolloTestingController")," is similar to ",Object(r.b)("inlineCode",{parentName:"p"},"HttpTestingController")," we won't get into details of unit testing components, we're going to focus mostly on Apollo service and explaining the API of the testing utility service."),Object(r.b)("h2",{id:"expecting-and-answering-operations"},"Expecting and answering operations"),Object(r.b)("p",null,"With all that we can write a test that expects an operation to occur and provides a mock response."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"test('expect and answer', () => {\n  //Scaffold the component\n  TestBed.createComponent(DogComponent);\n  component = fixture.componentInstance;\n\n  //Call the relevant method\n  component.getDog().subscribe(dog => {\n    //Make some assertion about the result;\n    expect(dog.id).toEqual(0);\n    expect(dog.name).toEqual('Mr Apollo');\n  });\n\n  // The following `expectOne()` will match the operation's document.\n  // If no requests or multiple requests matched that document\n  // `expectOne()` would throw.\n  const op = controller.expectOne(GET_DOG_QUERY);\n\n  // Assert that one of variables is Mr Apollo.\n  expect(op.operation.variables.name).toEqual('Mr Apollo');\n\n  // Respond with mock data, causing Observable to resolve.\n  op.flush({\n    data: {\n      dog: {\n        id: 0,\n        name: 'Mr Apollo',\n        breed: 'foo',\n      },\n    },\n  });\n\n  // Finally, assert that there are no outstanding operations.\n  controller.verify();\n});\n")),Object(r.b)("p",null,"When it receives a ",Object(r.b)("inlineCode",{parentName:"p"},"GET_DOG_QUERY")," with matching ",Object(r.b)("inlineCode",{parentName:"p"},"variables"),", it returns the corresponding object that has been flushed."),Object(r.b)("h3",{id:"expectone"},"expectOne"),Object(r.b)("p",null,"You can do a lot more with ",Object(r.b)("inlineCode",{parentName:"p"},"expectOne")," than showed in the example."),Object(r.b)("p",null,"Important thing, it accepts two arguments. First is different for different use cases, the second one stays always the same, it's a string with a description of your assertion. In case of failing assertion, the error is thrown with an error message including the given description."),Object(r.b)("p",null,"Let's explore all those possible cases ",Object(r.b)("inlineCode",{parentName:"p"},"expectOne")," accepts:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"you can match an operation by its name, simply by passing a string as a first argument."),Object(r.b)("li",{parentName:"ul"},"by passing the whole Operation object the expectOne method compares: operation's name, variables, document and extensions."),Object(r.b)("li",{parentName:"ul"},"the first argument can also be a function that provides an Operation object and expect a boolean in return"),Object(r.b)("li",{parentName:"ul"},"or passing a GraphQL Document")),Object(r.b)("h3",{id:"expectnone"},"expectNone"),Object(r.b)("p",null,"It accepts the same arguments as ",Object(r.b)("inlineCode",{parentName:"p"},"expectOne")," but it's a negation of it."),Object(r.b)("h3",{id:"match"},"match"),Object(r.b)("p",null,"Search for operations that match the given parameters, without any expectations."),Object(r.b)("h3",{id:"verify"},"verify"),Object(r.b)("p",null,"Verify that no unmatched operations are outstanding.\nIf any operations are outstanding, fail with an error message indicating which operations were not handled."),Object(r.b)("h3",{id:"testoperation"},"TestOperation"),Object(r.b)("p",null,"It's an object returned by ",Object(r.b)("inlineCode",{parentName:"p"},"expectOne")," and ",Object(r.b)("inlineCode",{parentName:"p"},"match")," methods."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"TestOperation")," has three available methods:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"flush(result: ExecutionResult | ApolloError): void")," - it accepts a result object or ApolloError instance"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"networkError(error: Error): void")," - to flush an operation with a network error"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"graphqlErrors(errors: GraphQLError[]): void")," - to flush an operation with graphql errors")),Object(r.b)("h2",{id:"using-named-clients"},"Using named clients"),Object(r.b)("p",null,"The process is pretty much the same as using a default client but the setup is a bit different:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import {\n  ApolloTestingModule,\n  ApolloTestingController,\n} from 'apollo-angular/testing';\n\ndescribe('DogComponent', () => {\n  controller: ApolloTestingController;\n\n  beforeEach(() => {\n    TestBed.configureTestingModule({\n      imports: [ApolloTestingModule.withClients(['clientA', 'clientB'])],\n    });\n\n    controller = TestBed.get(ApolloTestingController);\n  });\n\n  afterEach(() => {\n    controller.verify();\n  });\n});\n")),Object(r.b)("p",null,"Now you're able to test named clients."),Object(r.b)("p",null,"If you want to check which client was called to perform a graphql operation:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"test('expect to call clientA', () => {\n  // Scaffold the component\n  TestBed.createComponent(DogComponent);\n  component = fixture.componentInstance;\n\n  // Call the relevant method\n  component.getDog().subscribe();\n\n  const op = controller.expectOne(GET_DOG_QUERY);\n\n  // Check what is the name of a client that performed the query\n  expect(op.clientName).toEqual('clientA');\n\n  // Respond with mock data, causing Observable to resolve.\n  op.flush({\n    data: {\n      dog: {\n        id: 0,\n        name: 'Mr Apollo',\n        breed: 'foo',\n      },\n    },\n  });\n\n  // Finally, assert that there are no outstanding operations.\n  controller.verify();\n});\n")),Object(r.b)("h2",{id:"using-a-custom-cache"},"Using a custom cache"),Object(r.b)("p",null,"By default, every ApolloCache is created with these options:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"{\n  addTypename: false;\n}\n")),Object(r.b)("p",null,"If you would like to change it in the default client, do the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import {APOLLO_TESTING_CACHE} from 'apollo-angular/testing';\n\nbeforeEach(() => {\n  TestBed.configureTestingModule({\n    imports: [ApolloTestingModule],\n    providers: [\n      {\n        provide: APOLLO_TESTING_CACHE,\n        useValue: {\n          addTypename: true,\n        },\n      },\n    ],\n  });\n\n  // ...\n});\n")),Object(r.b)("p",null,"For named clients:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts"}),"import {APOLLO_TESTING_NAMED_CACHE} from 'apollo-angular/testing';\n\nbeforeEach(() => {\n  TestBed.configureTestingModule({\n    imports: [ApolloTestingModule],\n    providers: [\n      {\n        provide: APOLLO_TESTING_CACHE,\n        useValue: {\n          clientA: {\n            addTypename: true,\n          },\n          clientB: {\n            addTypename: true,\n          }\n        },\n      },\n    ],\n  });\n\n  // ...\n});\n")),Object(r.b)("h2",{id:"summary"},"Summary"),Object(r.b)("p",null,"For the sake of simplicity, we didn't show how to test loading state, errors and so on but it's similar to what we showed above."),Object(r.b)("p",null,"Testing UI components isn't a simple issue, but hopefully these tools will create confidence when testing components that are dependent on data."))}p.isMDXComponent=!0}}]);