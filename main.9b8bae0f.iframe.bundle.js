(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{212:function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_runner_work_react_observer_infinite_scroll_react_observer_infinite_scroll_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(137),_home_runner_work_react_observer_infinite_scroll_react_observer_infinite_scroll_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(119),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),react_use__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(842),react_use__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(289),ahooks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(843),ahooks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(844),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__=(__webpack_require__(828),__webpack_require__(45)),InfiniteScroll=Object(react__WEBPACK_IMPORTED_MODULE_2__.memo)(Object(react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((function(_ref,ref){var children=_ref.children,next=_ref.next,style=_ref.style,hasMore=_ref.hasMore,loader=_ref.loader,dataLength=_ref.dataLength,inverse=_ref.inverse,intersectionOption=_ref.intersectionOption,_intersectionOption=Object(_home_runner_work_react_observer_infinite_scroll_react_observer_infinite_scroll_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)(Object(_home_runner_work_react_observer_infinite_scroll_react_observer_infinite_scroll_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__.a)({},function getDefaultIntersectionOption(isInverse){return isInverse?{root:null,rootMargin:"20px 0px 0px 0px",threshold:1}:{root:null,rootMargin:"-20px 0px 0px 0px",threshold:1}}(inverse)),intersectionOption),stateRef=Object(react__WEBPACK_IMPORTED_MODULE_2__.useRef)({initTime:0}),_useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(!0),_useState2=Object(_home_runner_work_react_observer_infinite_scroll_react_observer_infinite_scroll_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),loadingShow=_useState2[0],setLoadingShow=_useState2[1],intersectionRef=Object(react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),inverseViewRef=Object(react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),intersection=Object(react_use__WEBPACK_IMPORTED_MODULE_3__.a)(intersectionRef,_intersectionOption),isIntoVIew=Object(react__WEBPACK_IMPORTED_MODULE_2__.useMemo)((function(){return intersection&&1===intersection.intersectionRatio&&0!==stateRef.current.initTime&&intersection.time-stateRef.current.initTime>300}),[intersection]),scrollToBottom=Object(ahooks__WEBPACK_IMPORTED_MODULE_5__.a)((function(){var _intersectionRef$curr,_inverseViewRef$curre;if(inverse)return null==inverseViewRef||null===(_inverseViewRef$curre=inverseViewRef.current)||void 0===_inverseViewRef$curre?void 0:_inverseViewRef$curre.scrollIntoView({behavior:"auto",block:"end",inline:"nearest"});null==intersectionRef||null===(_intersectionRef$curr=intersectionRef.current)||void 0===_intersectionRef$curr||_intersectionRef$curr.scrollIntoView({behavior:"auto",block:"end",inline:"nearest"})}));Object(react__WEBPACK_IMPORTED_MODULE_2__.useImperativeHandle)(ref,(function(){return{scrollToBottom:scrollToBottom}})),Object(react_use__WEBPACK_IMPORTED_MODULE_4__.a)((function(){isIntoVIew&&hasMore&&(!loadingShow&&setLoadingShow(!0),next())}),[isIntoVIew,hasMore,loadingShow]);var oldDataLength=Object(ahooks__WEBPACK_IMPORTED_MODULE_6__.a)(dataLength);return Object(react_use__WEBPACK_IMPORTED_MODULE_4__.a)((function(){(oldDataLength===dataLength&&!hasMore||hasMore&&dataLength!==oldDataLength)&&loadingShow&&setLoadingShow(!1)}),[oldDataLength,dataLength,hasMore,loadingShow]),Object(react_use__WEBPACK_IMPORTED_MODULE_4__.a)((function(){(null==intersection?void 0:intersection.time)&&0===stateRef.current.initTime&&(stateRef.current.initTime=null==intersection?void 0:intersection.time)}),[stateRef,intersection]),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{className:inverse?"react-infinite-scroll-wrap inverse":"react-infinite-scroll-wrap",style:style,children:[inverse&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{ref:inverseViewRef,className:"inverse-view"}),children,Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{ref:intersectionRef}),loadingShow&&hasMore&&(loader||"loading...")]})})));__webpack_exports__.a=InfiniteScroll;try{src.displayName="src",src.__docgenInfo={description:"",displayName:"src",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<InfiniteScrollOutRef>"}},next:{defaultValue:null,description:"",name:"next",required:!0,type:{name:"Fn"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},hasMore:{defaultValue:null,description:"",name:"hasMore",required:!0,type:{name:"boolean"}},loader:{defaultValue:null,description:"",name:"loader",required:!0,type:{name:"ReactNode"}},inverse:{defaultValue:null,description:"",name:"inverse",required:!1,type:{name:"boolean"}},dataLength:{defaultValue:null,description:"",name:"dataLength",required:!0,type:{name:"number"}},intersectionOption:{defaultValue:null,description:"",name:"intersectionOption",required:!1,type:{name:"IntersectionObserverInit"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/index.tsx#src"]={docgenInfo:src.__docgenInfo,name:"src",path:"src/index.tsx#src"})}catch(__react_docgen_typescript_loader_error){}},470:function(module,exports,__webpack_require__){__webpack_require__(471),__webpack_require__(630),__webpack_require__(631),__webpack_require__(835),__webpack_require__(831),__webpack_require__(837),__webpack_require__(836),__webpack_require__(832),__webpack_require__(838),__webpack_require__(833),__webpack_require__(834),__webpack_require__(839),__webpack_require__(840),module.exports=__webpack_require__(824)},538:function(module,exports){},631:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(336)},824:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(336).configure)([__webpack_require__(825),__webpack_require__(826)],module,!1)}).call(this,__webpack_require__(192)(module))},825:function(module,exports,__webpack_require__){var map={"./stories/Doc.stories.mdx":841};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=825},826:function(module,exports,__webpack_require__){var map={"./stories/ScrolleableTop.stories.tsx":827,"./stories/WindowInfiniteScrollComponent.stories.tsx":830};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=826},827:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ScrolleableTop",(function(){return ScrolleableTop}));var _home_runner_work_react_observer_infinite_scroll_react_observer_infinite_scroll_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(119),_home_runner_work_react_observer_infinite_scroll_react_observer_infinite_scroll_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(137),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(212),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(45),ScrolleableTop=function ScrolleableTop(){var targetRef=Object(react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),targetWrapRef=Object(react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null),_useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(Array.from({length:20})),_useState2=Object(_home_runner_work_react_observer_infinite_scroll_react_observer_infinite_scroll_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState,2),list=_useState2[0],setList=_useState2[1],next=Object(react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((function(){setTimeout((function(){setList((function(pre){return pre.concat(Array.from({length:20}))}))}),2e3)}),[]),toBottom=Object(react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((function(){var _targetRef$current,_targetRef$current2;(null==targetRef||null===(_targetRef$current=targetRef.current)||void 0===_targetRef$current?void 0:_targetRef$current.scrollToBottom)&&(null==targetRef||null===(_targetRef$current2=targetRef.current)||void 0===_targetRef$current2||_targetRef$current2.scrollToBottom())}),[targetRef]);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{ref:targetWrapRef,style:{height:300,overflow:"auto",position:"relative",display:"flex",flexDirection:"column-reverse"},children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{onClick:toBottom,style:{width:100,height:30,right:30,top:30,zIndex:500,position:"fixed"},children:"TO BOTTOM"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_index__WEBPACK_IMPORTED_MODULE_3__.a,{intersectionOption:{root:targetWrapRef.current},dataLength:list.length,inverse:!0,next:next,hasMore:!0,ref:targetRef,loader:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h4",{children:"Loading..."}),children:list.map((function(_,i){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{style:{height:30,margin:4,border:"1px solid hotpink"},children:["#",i+1," row"]},i)}))})]})};__webpack_exports__.default={title:"Example/ScrolleableTop",component:ScrolleableTop},ScrolleableTop.parameters=Object(_home_runner_work_react_observer_infinite_scroll_react_observer_infinite_scroll_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"() => {\n  const targetRef = useRef<InfiniteScrollOutRef>(null);\n  const targetWrapRef = useRef(null);\n  const [list, setList] = useState(Array.from({ length: 20 }));\n\n  const next = useCallback(() => {\n    setTimeout(() => {\n      setList(pre => pre.concat(Array.from({ length: 20 })));\n    }, 2000);\n  }, []);\n\n  const toBottom = useCallback(() => {\n    targetRef?.current?.scrollToBottom && targetRef?.current?.scrollToBottom();\n  }, [targetRef]);\n  return (\n    <div\n      ref={targetWrapRef}\n      style={{\n        height: 300,\n        overflow: 'auto',\n        position: 'relative',\n        display: 'flex',\n        flexDirection: 'column-reverse',\n      }}>\n      <button\n        onClick={toBottom}\n        style={{\n          width: 100,\n          height: 30,\n          right: 30,\n          top: 30,\n          zIndex: 500,\n          position: 'fixed',\n        }}>\n        TO BOTTOM\n      </button>\n      <InfiniteScroll\n        intersectionOption={{ root: targetWrapRef.current }}\n        dataLength={list.length}\n        inverse\n        next={next}\n        hasMore={true}\n        ref={targetRef}\n        loader={<h4>Loading...</h4>}>\n        {list.map((_, i) => (\n          <div key={i} style={{ height: 30, margin: 4, border: '1px solid hotpink' }}>\n            #{i + 1} row\n          </div>\n        ))}\n      </InfiniteScroll>\n    </div>\n  );\n}"}},ScrolleableTop.parameters)},828:function(module,exports,__webpack_require__){},830:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"WindowInfiniteScrollComponent",(function(){return WindowInfiniteScrollComponent}));var _home_runner_work_react_observer_infinite_scroll_react_observer_infinite_scroll_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(119),_home_runner_work_react_observer_infinite_scroll_react_observer_infinite_scroll_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(137),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(0),_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(212),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(45),WindowInfiniteScrollComponent=function WindowInfiniteScrollComponent(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(Array.from({length:20})),_useState2=Object(_home_runner_work_react_observer_infinite_scroll_react_observer_infinite_scroll_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState,2),data=_useState2[0],setData=_useState2[1];return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_index__WEBPACK_IMPORTED_MODULE_3__.a,{hasMore:!0,next:function next(){setTimeout((function(){setData((function(pre){return pre.concat(Array.from({length:20}))}))}),2e3)},loader:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1",{children:"Loading..."}),dataLength:data.length,children:data.map((function(_,i){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{style:{height:30,margin:4,border:"1px solid hotpink"},children:["#",i+1," row"]},i)}))})})};__webpack_exports__.default={title:"Example/WindowInfiniteScrollComponent",component:WindowInfiniteScrollComponent},WindowInfiniteScrollComponent.parameters=Object(_home_runner_work_react_observer_infinite_scroll_react_observer_infinite_scroll_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"() => {\n    const [data, setData] = useState(Array.from({ length: 20 }));\n    const next = () => {\n        setTimeout(() => {\n            setData(pre => pre.concat(Array.from({ length: 20 })));\n        }, 2000);\n    };\n    return (\n        <>\n            <InfiniteScroll hasMore={true} next={next} loader={<h1>Loading...</h1>} dataLength={data.length}>\n                {data.map((_, i) => (\n                    <div key={i} style={{ height: 30, margin: 4, border: '1px solid hotpink' }}>\n                        #{i + 1} row\n                    </div>\n                ))}\n            </InfiniteScroll>\n        </>\n    );\n}"}},WindowInfiniteScrollComponent.parameters)},840:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var client_api=__webpack_require__(853),esm=__webpack_require__(4),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},841:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(0);var esm=__webpack_require__(6),dist_esm=__webpack_require__(211);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return Object(esm.b)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)("h1",{id:"react-observer-infinite-scroll"},"react-observer-infinite-scroll"),Object(esm.b)("p",null,"一个基于 ",Object(esm.b)("inlineCode",{parentName:"p"},"IntersectionObserver")," 的无限滚动 ",Object(esm.b)("inlineCode",{parentName:"p"},"react-hook")," 组件，支持正向滚动、逆向滚动（类似微信聊天回滚加载历史数据）、滑到底部"),Object(esm.b)("h1",{id:"install"},"install"),Object(esm.b)("pre",null,Object(esm.b)("code",{parentName:"pre",className:"language-bash"},"npm install --save react-observer-infinite-scroll\n\n// in code ES6\nimport InfiniteScroll from 'react-observer-infinite-scroll';\n")),Object(esm.b)("h1",{id:"demos"},"demos"),Object(esm.b)("h2",{id:"scrolleabletop"},"ScrolleableTop"),Object(esm.b)("p",null,"类似聊天查看历史记录倒序无限加载"),Object(esm.b)("pre",null,Object(esm.b)("code",{parentName:"pre",className:"language-jsx"},"import { useCreation } from 'ahooks';\nimport React, { RefObject } from 'react';\nimport { useState } from 'react';\nimport InfiniteScroll, { InfiniteScrollOutRef } from '../index';\n\nconst ScrolleableTop = () => {\n  const targetRef = useCreation<RefObject<InfiniteScrollOutRef>>(() => ({ current: null }), []);\n  const targetWrapRef = useCreation<RefObject<HTMLDivElement>>(() => ({ current: null }), []);\n  const [list, setList] = useState(Array.from({ length: 20 }));\n\n  const next = () => {\n    setTimeout(() => {\n      setList(pre => pre.concat(Array.from({ length: 20 })));\n    }, 2000);\n  };\n  const toBottom=()=>{\n     targetRef?.current?.scrollToBottom && targetRef?.current?.scrollToBottom()\n  }\n  return (\n    <div\n      ref={targetWrapRef}\n      style={{\n        height: 300,\n        overflow: 'auto',\n        position: 'relative',\n        display: 'flex',\n        flexDirection: 'column-reverse',\n      }}>\n      <button onClick={toBottom}  style={{\n        width: 100,\n        height: 30,\n        right: 30,\n        top: 30,\n        zIndex: 500,\n        position: 'fixed',\n      }}>TO BOTTOM</button>\n      <InfiniteScroll\n        intersectionOption={{ root: targetWrapRef.current }}\n        dataLength={list.length}\n        inverse\n        next={next}\n        hasMore={true}\n        ref={targetRef}\n        loader={<h4>Loading...</h4>}>\n        {list.map((_, i) => (\n          <div key={i} style={{ height: 30, margin: 4, border: '1px solid hotpink' }}>\n            #{i + 1} row\n          </div>\n        ))}\n      </InfiniteScroll>\n    </div>\n  );\n};\nexport default ScrolleableTop;\n\n")),Object(esm.b)("h2",{id:"windowinfinitescrollcomponent"},"WindowInfiniteScrollComponent"),Object(esm.b)("p",null,"常用的基于 全局 ",Object(esm.b)("inlineCode",{parentName:"p"},"Windows")," 的无限下拉"),Object(esm.b)("pre",null,Object(esm.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport InfiniteScroll from '../index';\ntype State = {\n  data: any[];\n};\nexport default class WindowInfiniteScrollComponent extends React.Component<\n  {},\n  State\n> {\n  state = {\n    data: Array.from({ length: 20 }),\n  };\n\n  next = () => {\n    setTimeout(() => {\n      this.setState({ data: this.state.data.concat(Array.from({ length: 20 })) });\n    }, 2000);\n  };\n  render() {\n    return (\n      <>\n        <InfiniteScroll\n          hasMore={true}\n          next={this.next}\n          loader={<h1>Loading...</h1>}\n          dataLength={this.state.data.length}\n        >\n          {this.state.data.map((_, i) => (\n            <div\n              key={i}\n              style={{ height: 30, margin: 4, border: '1px solid hotpink' }}\n            >\n              #{i + 1} row\n            </div>\n          ))}\n        </InfiniteScroll>\n      </>\n    );\n  }\n}\n\n")),Object(esm.b)("h1",{id:"props"},"props"),Object(esm.b)("table",null,Object(esm.b)("thead",{parentName:"table"},Object(esm.b)("tr",{parentName:"thead"},Object(esm.b)("th",{parentName:"tr",align:null},"name"),Object(esm.b)("th",{parentName:"tr",align:null},"type"),Object(esm.b)("th",{parentName:"tr",align:null},"description"))),Object(esm.b)("tbody",{parentName:"table"},Object(esm.b)("tr",{parentName:"tbody"},Object(esm.b)("td",{parentName:"tr",align:null},Object(esm.b)("strong",{parentName:"td"},"next")),Object(esm.b)("td",{parentName:"tr",align:null},"function"),Object(esm.b)("td",{parentName:"tr",align:null},"触发滚动的回调函数")),Object(esm.b)("tr",{parentName:"tbody"},Object(esm.b)("td",{parentName:"tr",align:null},Object(esm.b)("strong",{parentName:"td"},"hasMore")),Object(esm.b)("td",{parentName:"tr",align:null},"boolean"),Object(esm.b)("td",{parentName:"tr",align:null},"是否可以加载更多")),Object(esm.b)("tr",{parentName:"tbody"},Object(esm.b)("td",{parentName:"tr",align:null},Object(esm.b)("strong",{parentName:"td"},"children")),Object(esm.b)("td",{parentName:"tr",align:null},"node (list)"),Object(esm.b)("td",{parentName:"tr",align:null},"滚动列表子级元素")),Object(esm.b)("tr",{parentName:"tbody"},Object(esm.b)("td",{parentName:"tr",align:null},Object(esm.b)("strong",{parentName:"td"},"loader")),Object(esm.b)("td",{parentName:"tr",align:null},"node"),Object(esm.b)("td",{parentName:"tr",align:null},"加载动画元素")),Object(esm.b)("tr",{parentName:"tbody"},Object(esm.b)("td",{parentName:"tr",align:null},Object(esm.b)("strong",{parentName:"td"},"style")),Object(esm.b)("td",{parentName:"tr",align:null},"object"),Object(esm.b)("td",{parentName:"tr",align:null},"容器样式表")),Object(esm.b)("tr",{parentName:"tbody"},Object(esm.b)("td",{parentName:"tr",align:null},Object(esm.b)("strong",{parentName:"td"},"intersectionOption")),Object(esm.b)("td",{parentName:"tr",align:null},"object"),Object(esm.b)("td",{parentName:"tr",align:null},"IntersectionObserver 参数")),Object(esm.b)("tr",{parentName:"tbody"},Object(esm.b)("td",{parentName:"tr",align:null},Object(esm.b)("strong",{parentName:"td"},"inverse")),Object(esm.b)("td",{parentName:"tr",align:null},"boolean"),Object(esm.b)("td",{parentName:"tr",align:null},"是否倒序")),Object(esm.b)("tr",{parentName:"tbody"},Object(esm.b)("td",{parentName:"tr",align:null},Object(esm.b)("strong",{parentName:"td"},"dataLength")),Object(esm.b)("td",{parentName:"tr",align:null},"number"),Object(esm.b)("td",{parentName:"tr",align:null},"滚动列表核心数据的数值")))))}function Doc_stories_extends(){return(Doc_stories_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}MDXContent.isMDXComponent=!0;const Doc_stories_layoutProps={};function Doc_stories_MDXContent({components:components,...props}){return Object(esm.b)("wrapper",Doc_stories_extends({},Doc_stories_layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.b)(dist_esm.b,{title:"Doc",mdxType:"Meta"}),Object(esm.b)(MDXContent,{mdxType:"README"}))}Doc_stories_MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Doc",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>Object(esm.b)(dist_esm.a,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(esm.b)(Doc_stories_MDXContent,null))};__webpack_exports__.default=componentMeta}},[[470,2,3]]]);