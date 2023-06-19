"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_react-core_Entry_tsx"],{16730:(t,e,a)=>{a.d(e,{T:()=>o});var r=a(15345),n=a(86283);function o(t){if(!n.n4)return;let e=n.n4.createElement("title");e.textContent=t;let a=n.n4.querySelector("title");a?a.replaceWith(e):n.n4.head.appendChild(e),(0,r.x)(t)}},95253:(t,e,a)=>{let r;a.d(e,{Y:()=>h,q:()=>p});var n=a(88149),o=a(86058),i=a(44544),l=a(71643);let{getItem:s}=(0,i.Z)("localStorage"),c="dimension_",u=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let t=(0,n.n)("octolytics");delete t.baseContext,r=new o.R(t)}catch(t){}function d(t){let e=(0,n.n)("octolytics").baseContext||{};if(e)for(let[t,a]of(delete e.app_id,delete e.event_url,delete e.host,Object.entries(e)))t.startsWith(c)&&(e[t.replace(c,"")]=a,delete e[t]);let a=document.querySelector("meta[name=visitor-payload]");if(a){let t=JSON.parse(atob(a.content));Object.assign(e,t)}let r=new URLSearchParams(window.location.search);for(let[t,a]of r)u.includes(t.toLowerCase())&&(e[t]=a);return e.staff=(0,l.B)().toString(),Object.assign(e,t)}function h(t){r?.sendPageView(d(t))}function p(t,e={}){let a=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,n=a?{service:a}:{};for(let[t,a]of Object.entries(e))null!=a&&(n[t]=`${a}`);r&&(d(n),r.sendEvent(t||"unknown",d(n)))}},24791:(t,e,a)=>{var r;a.d(e,{x:()=>r}),function(t){t.FETCH_THEN_TRANSITION="fetch-then-transition",t.TRANSITION_WHILE_FETCHING="transition-while-fetch",t.TRANSITION_WITHOUT_FETCH="transition-without-fetch"}(r||(r={}))},34634:(t,e,a)=>{a.d(e,{A:()=>n});var r=a(67294);let n=(0,r.createContext)({})},17891:(t,e,a)=>{a.d(e,{E:()=>n,M:()=>o});var r=a(67294);let n=(0,r.createContext)(void 0);function o(){let t=(0,r.useContext)(n);return t}},89226:(t,e,a)=>{a.d(e,{V:()=>i});var r=a(67294),n=a(96974),o=a(34634);function i(){let t=(0,r.useContext)(o.A),e=(0,n.TH)();return t[e.key]}},73968:(t,e,a)=>{a.d(e,{T:()=>n});var r=a(89226);function n(){let t=(0,r.V)(),e=t&&"loaded"===t.type?t.data:void 0;return e?.payload}},1016:(t,e,a)=>{a.d(e,{k:()=>M,h:()=>O});var r,n,o,i=a(85893),l=a(67294),s=a(96974),c=a(24791),u=a(68202),d=a(16730);let h=(t,e)=>null!==t&&null!==e&&t.pathname===e.pathname&&t.search===e.search&&Boolean(e.hash);function p(t,e,a){let r=(0,l.useRef)(null);(0,l.useEffect)(()=>{if(r.current||(r.current=a),!h(r.current,a)&&(e||t)){if(e){let t=f(e);(0,d.T)(t)}else t?.type==="loaded"&&t.title&&(0,d.T)(y(t.title))}r.current?.key!==a.key&&(r.current=a)},[e,t,a])}let f=t=>{let e=404===t.httpStatus?"404 Page not found":500===t.httpStatus?"500 Internal server error":t.httpStatus?`Error ${t.httpStatus}`:"Error";return y(e)};function y(t){return`${t} \xb7 GitHub`}var v=a(86283);let m=class Navigator{setAppNavigationStateCallback(t){this.appNavigationStateCallback=t}update(t){Object.assign(this.state,t);let e=this.getAppNavigationState();this.appNavigationStateCallback?.(e)}getAppNavigationState(){let{location:t,error:e,navigateOnError:a,routeStateMap:r,appPayload:n,pendingNavigation:o}=this.state;return{location:t,error:e,navigateOnError:a,routeStateMap:r,appPayload:n,isLoading:Boolean(o)}}async handleHistoryUpdate(t){if("POP"!==t.action||history.state?.turboCount===this.state.turboCount){if(this.isHashNavigation(t)){this.navigateWithCurrentPayload(t);return}if("POP"!==t.action&&(0,u.LD)("react"),void 0!==this.state.routeStateMap[t.location.key])this.navigateFromHistory(t);else{let e=this.matchLocation(t.location);if(!e)throw Error("handleHistoryUpdate should only be called for matching routes");let[a,r]=e;if(r?.transitionType===c.x.TRANSITION_WHILE_FETCHING&&this.navigateWithoutPayload(t),r?.transitionType===c.x.TRANSITION_WITHOUT_FETCH){this.navigateWithoutPayload(t);return}this.enterLoadingState(t);let n=await r?.loader({location:t.location,params:a?.params});if(t.location!==this.state.pendingNavigation?.update.location)return;if(history.state&&"POP"!==t.action){let{turbo:t,...e}=history.state;history.replaceState({...e,skipTurbo:!0},"",location.href)}switch(n.type){case"loaded":this.leaveLoadingStateWithRouteData(t,n.data,n.title);break;case"error":this.leaveLoadingStateWithError(t,n.error,!1);break;case"redirect":window.location.replace(n.url+location.hash);break;case"route-handled-error":this.leaveLoadingStateWithError(t,n.error,!0);break;default:throw Error(`Unexpected loader result type: ${n.type}`)}}}}matchLocation(t){let e,a;for(let r of this.routes)if(e=(0,s.LX)(r.path,t.pathname)){a=r;break}return e&&a?[e,a]:null}isHashNavigation(t){let e=this.state.location,a=t.location;return h(e,a)}navigateFromHistory(t){this.update({location:t.location,pendingNavigation:null,error:null})}enterLoadingState(t){this.update({pendingNavigation:{update:t}})}leaveLoadingStateWithError(t,e,a){this.update({location:t.location,error:e,pendingNavigation:null,navigateOnError:a})}navigateWithoutPayload(t){this.update({location:t.location,error:null})}navigateWithCurrentPayload(t){let e=this.state.location.key,a=e+t.location.hash,r={...t.location,key:a},n={...this.state.routeStateMap,[a]:this.state.routeStateMap[e]};this.update({...t,location:r,routeStateMap:n,error:null})}leaveLoadingStateWithRouteData(t,e,a){this.update({location:t.location,pendingNavigation:null,routeStateMap:e?{...this.state.routeStateMap,[t.location.key]:{type:"loaded",data:e,title:a}}:this.state.routeStateMap,error:null})}constructor(t,e,a,r){this.routes=r;let n=this.matchLocation(t);if(!n)throw Error(`No route found for initial location: ${t.pathname}`);let[o,i]=n,{data:l,title:s}=i.loadFromEmbeddedData({embeddedData:e,location:t,params:o.params});this.state={location:t,routeStateMap:{[t.key]:{type:"loaded",data:l,title:s}},appPayload:a,pendingNavigation:null,error:null,navigateOnError:!1,turboCount:v.zu?.state?.turboCount}}};function g({initialLocation:t,embeddedData:e,routes:a}){let[r]=(0,l.useState)(()=>{let{appPayload:r,...n}=e;return new m(t,n,r,a)}),[n,o]=(0,l.useState)(()=>r.getAppNavigationState()),i=(0,l.useRef)(!1);i.current||(r.setAppNavigationStateCallback(o),i.current=!0);let s=(0,l.useCallback)(t=>{r.handleHistoryUpdate(t)},[r]);return[n,{handleHistoryUpdate:s}]}var E=a(72982),S=a(17551),N=a(41914),x=a(58989),T=a(17891),b=a(73968);function k(){let t=(0,b.T)(),e=(0,T.M)();(0,l.useEffect)(()=>{function a(){document.dispatchEvent(new CustomEvent("soft-nav:payload",{detail:{payload:t,appPayload:e}}))}return document.addEventListener(u.QE.INITIAL,a),()=>{document.removeEventListener(u.QE.INITIAL,a)}},[]),(0,l.useEffect)(()=>{document.dispatchEvent(new CustomEvent("soft-nav:payload",{detail:{payload:t,appPayload:e}}))},[e,t])}var w=a(1343),C=a(34634),j=a(77617),_=a(71643),L=a(95253);let I=(t,e,a,r)=>{(0,l.useEffect)(()=>{e||(t.key,(0,L.Y)({react_app:r}))},[r,t.key,e]);let n=(0,l.useRef)(void 0);(0,l.useEffect)(()=>{e||void 0!==n.current&&n.current===t.key||((0,u.sj)()?A(a):H(a),n.current=t.key)},[t.key,e,a])},A=t=>{t?(0,u.r_)():((0,u.TL)(),(0,u.BT)())},H=t=>{if(t)return;let e=R();e&&(0,_.b)({requestUrl:window.location.href,distributionKey:"REACT_NAV_DURATION",distributionValue:Math.round(e),distributionTags:["REACT_NAV_HARD"]})},P="react_nav_duration";function R(){window.performance.measure(P);let t=window.performance.getEntriesByName(P),e=t.pop();return e?e.duration:null}function W(t,e){let a=(0,l.useRef)(void 0);(0,l.useEffect)(()=>{let r=e.pathname+e.search;if(void 0===a.current)a.current=r;else if(a.current!==r&&!t){let t=document.querySelector("[data-react-autofocus]");t||(t=document.querySelector("react-app h1")),t?.focus(),a.current=r}},[t,e.pathname,e.search])}let O=(0,l.createContext)(null);function M({appName:t,initialPath:e,embeddedData:a,routes:r,App:n,wasServerRendered:o,ssrError:c}){let u=(0,l.useRef)(),d=globalThis.window,{pathname:h,search:f,hash:y}=new URL(`${e}${d?.location.hash??""}`,d?.location.href??"https://github.com");u.current||(u.current=d?(0,N.lX)({window:d}):(0,N.PP)({initialEntries:[{pathname:h,search:f,hash:y}]}));let m=u.current,{key:b,state:k}=m.location,[{location:_,error:L,routeStateMap:A,appPayload:H,navigateOnError:P,isLoading:R},{handleHistoryUpdate:M}]=g({initialLocation:{pathname:h,search:f,hash:y,key:b,state:k},appName:t,embeddedData:a,routes:r});return p(A[_.key],L,_),W(R,_),I(_,R,L,t),v.Qg&&(0,l.useLayoutEffect)(()=>{let t=m.listen(M);return t},[m,M]),(0,i.jsx)(w.R,{locale:a.locale,wasServerRendered:o,children:(0,i.jsx)(E.S,{children:(0,i.jsx)(x.i,{routes:r,history:m,children:L&&!P?(0,i.jsx)(S.m,{...L}):(0,i.jsx)(T.E.Provider,{value:H,children:(0,i.jsx)(O.Provider,{value:L,children:(0,i.jsx)(C.A.Provider,{value:A,children:(0,i.jsxs)(s.F0,{location:_,navigator:m,children:[(0,i.jsx)(s.Z5,{children:(0,i.jsx)(s.AW,{element:(0,i.jsx)(D,{App:n}),children:r.map(({path:t,Component:e},a)=>(0,i.jsx)(s.AW,{path:t,element:(0,i.jsx)(e,{})},a))})}),(0,i.jsx)(j.P,{ssrError:c})]})})})})})})})}function D({App:t}){return k(),t?(0,i.jsx)(t,{children:(0,i.jsx)(s.j3,{})}):(0,i.jsx)(s.j3,{})}try{(r=O).displayName||(r.displayName="NavigationErrorContext")}catch{}try{(n=M).displayName||(n.displayName="Entry")}catch{}try{(o=D).displayName||(o.displayName="AppWrapper")}catch{}},72982:(t,e,a)=>{a.d(e,{S:()=>ErrorBoundary});var r=a(85893),n=a(17551),o=a(67294);let ErrorBoundary=class ErrorBoundary extends o.Component{static getDerivedStateFromError(t){return{error:t}}componentDidCatch(t){setTimeout(()=>{throw t})}render(){return this.state.error?this.props.fallback||(0,r.jsx)(n.m,{type:"httpError"}):this.props.children}constructor(t){super(t),this.state={error:null}}}},17551:(t,e,a)=>{a.d(e,{m:()=>s});var r,n=a(85893),o=a(75308),i=a(42483);let l={404:"Didn\u2019t find anything here!",500:"Looks like something went wrong!"};function s({httpStatus:t,type:e}){let a="fetchError"===e?"Looks like network is down!":l[t||500];return(0,n.jsxs)(o.Z,{as:"h1",tabIndex:-1,sx:{display:"flex",flexDirection:"column",minWidth:"100%",minHeight:"100%",alignItems:"center",justifyContent:"center"},children:["Error",t?(0,n.jsx)(i.Z,{sx:{fontSize:"144px",fontWeight:"bold",lineHeight:1},children:t}):null,(0,n.jsx)(i.Z,{sx:{fontSize:4,pt:2},children:a})]})}try{(r=s).displayName||(r.displayName="ErrorPage")}catch{}}}]);
//# sourceMappingURL=ui_packages_react-core_Entry_tsx-9be260aed9bc.js.map