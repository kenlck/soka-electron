(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[851],{6337:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/graduates",function(){return n(839)}])},9693:function(e,t,n){"use strict";n.d(t,{ZP:function(){return v},gL:function(){return p},rx:function(){return g}});var r=n(5893),i=n(1006),o=n(408),a=n(8633),l=n(9709),s=n(5852),c=n(7294),u=n(9477);function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(s){l=!0,i=s}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e){var t=e.onPoiClick,n=e.isShowing,i=e.position,o=h(e,["onPoiClick","isShowing","position"]),f=(0,c.useRef)(null),x=(0,c.useRef)(),v=(0,l.L)("/gltfs/Indicators.gltf").nodes,p=m((0,a.s)(),2),g=p[0],j=p[1],y=new u.MeshStandardMaterial({color:"hotpink"}),w=v.Indicator_Block_A.material;return(0,s.xQ)((function(e){f.current&&(f.current.position.y=n?Math.sin(3*e.clock.elapsedTime)+3:i[1])})),(0,r.jsx)("group",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){d(e,t,n[t])}))}return e}({ref:x},o,{position:i,dispose:null,children:(0,r.jsx)("mesh",{ref:f,castShadow:!0,receiveShadow:!0,geometry:v.Indicator_Block_A.geometry,material:n?y:w,onPointerOver:g,onPointerOut:j,onClick:function(){return t("blockA")}})}))}function v(){var e=(0,o.df)().currentItem;return(0,r.jsx)("group",{children:i.A7.map((function(t,n){return(0,r.jsx)(x,{isShowing:(null===e||void 0===e?void 0:e.title)===t.title,onPoiClick:function(){},position:g(t.coordinate),scale:.1},n)}))})}function p(){var e=(0,o.YZ)().currentItem;return(0,r.jsx)("group",{children:i.wj.map((function(t,n){return(0,r.jsx)(x,{isShowing:(null===e||void 0===e?void 0:e.title)===t.title,onPoiClick:function(){},position:g(t.coordinate),scale:.1},n)}))})}function g(e){var t=e.lat,n=e.lng,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5.1,i=(90-t)*(Math.PI/180),o=(n+180)*(Math.PI/180),a=-r*Math.sin(i)*Math.cos(o),l=r*Math.sin(i)*Math.sin(o),s=r*Math.cos(i);return[a,s,l]}l.L.preload("/gltfs/Indicators.gltf")},3518:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(5893);function i(e){var t=e.imageUrl,n=e.title,i=e.onPressed;return(0,r.jsxs)("button",{className:"flex flex-col w-full items-stretch overflow-hidden border border-gray-300 shadow-md rounded-3xl",onClick:i,children:[(0,r.jsx)("img",{className:"w-full h-auto",src:t,alt:n,draggable:!1}),(0,r.jsxs)("div",{className:"flex flex-row items-center justify-between h-20 px-6 bg-white",children:[(0,r.jsx)("span",{children:n}),(0,r.jsx)("img",{src:"/img/arrow-forward.svg",alt:"Forward",width:32,height:32,draggable:!1})]})]})}},206:function(e,t,n){"use strict";n.d(t,{B:function(){return c},U:function(){return u}});var r=n(5893),i=n(7294),o=n(9477),a=n(5852),l=n(105),s={MOUSE:o.MOUSE,Vector2:o.Vector2,Vector3:o.Vector3,Vector4:o.Vector4,Quaternion:o.Quaternion,Matrix4:o.Matrix4,Spherical:o.Spherical,Box3:o.Box3,Sphere:o.Sphere,Raycaster:o.Raycaster,MathUtils:{DEG2RAD:o.MathUtils.DEG2RAD,clamp:o.MathUtils.clamp}};l.Z.install({THREE:s}),(0,a.l7)({CameraControlsDefault:l.Z});var c=(0,i.forwardRef)((function(e,t){var n=(0,i.useRef)(null),o=(0,a.Ky)((function(e){return e.camera})),l=(0,a.Ky)((function(e){return e.gl}));return(0,a.xQ)((function(e,t){var r;return null===(r=n.current)||void 0===r?void 0:r.update(t)})),(0,i.useEffect)((function(){return function(){var e;return null===(e=n.current)||void 0===e?void 0:e.dispose()}}),[]),(0,r.jsx)("cameraControlsDefault",{ref:f(n,t),args:[o,l.domElement]})}));function u(){var e=(0,i.useState)(null),t=e[0],n=e[1];return[t,(0,i.useCallback)((function(e){null!==e&&n(e)}),[])]}function f(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){var n=!0,r=!1,i=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done);n=!0){var l=o.value;"function"===typeof l?l(e):l&&(l.current=e)}}catch(s){r=!0,i=s}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}}}},8633:function(e,t,n){"use strict";n.d(t,{s:function(){return i}});var r=n(7294);function i(){var e=(0,r.useState)(!1),t=e[0],n=e[1];return(0,r.useEffect)((function(){document.body.style.cursor=t?"pointer":"auto"}),[t]),[(0,r.useCallback)((function(){n(!0)}),[]),(0,r.useCallback)((function(){n(!1)}),[])]}},839:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return _}});var r=n(5893),i=n(9693),o=n(3518),a=n(206),l=n(1006),s=n(408),c=n(6727),u=n(7854),f=n(7433),d=n(5852),h=n(7592),m=n(7294),x=n(1289),v=n(3337),p=n(9477),g=n(7878),j=n(105);function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(s){l=!0,i=s}finally{try{a||null==n.return||n.return()}finally{if(l)throw i}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var b=1/60*1e3,N=(0,m.lazy)((function(){return n.e(678).then(n.bind(n,8678))}));function S(){var e=function(){i(!1)},t=(0,m.useState)(!1),n=t[0],i=t[1],a=(0,m.useRef)(null),l=(0,g.Z)(a).onMouseDown;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"fixed bottom-0 left-0 pointer-events-auto",children:(0,r.jsx)(P,{onPressed:function(){i(!0)}})}),(0,r.jsx)(c.uT,{appear:!0,show:n,as:m.Fragment,children:(0,r.jsx)(c.Vq,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto",onClose:e,children:(0,r.jsxs)("div",{className:"min-h-screen px-4 text-center",children:[(0,r.jsx)(c.uT.Child,{as:m.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,r.jsx)(c.Vq.Overlay,{className:"fixed inset-0"})}),(0,r.jsx)(c.uT.Child,{as:m.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,r.jsxs)("div",{className:"absolute bottom-0 left-0 inline-block w-full overflow-hidden text-left align-middle transition-all transform rounded-2xl",children:[(0,r.jsx)(O,{onPressed:e}),(0,r.jsxs)("ul",{ref:a,onMouseDown:l,className:"flex flex-row p-10 overflow-x-scroll space-x-8",children:[(0,r.jsx)("li",{className:"shrink-0",children:(0,r.jsx)(o.Z,{onPressed:function(){},imageUrl:"https://via.placeholder.com/421x237",title:"Menu item 1"})}),(0,r.jsx)("li",{className:"shrink-0",children:(0,r.jsx)(o.Z,{onPressed:function(){},imageUrl:"https://via.placeholder.com/421x237",title:"Menu item 2"})}),(0,r.jsx)("li",{className:"shrink-0",children:(0,r.jsx)(o.Z,{onPressed:function(){},imageUrl:"https://via.placeholder.com/421x237",title:"Menu item 3"})}),(0,r.jsx)("li",{className:"shrink-0",children:(0,r.jsx)(o.Z,{onPressed:function(){},imageUrl:"https://via.placeholder.com/421x237",title:"Menu item 4"})}),(0,r.jsx)("li",{className:"shrink-0",children:(0,r.jsx)(o.Z,{onPressed:function(){},imageUrl:"https://via.placeholder.com/421x237",title:"Menu item 5"})})]})]})})]})})})]})}var k=function(){var e=(0,s.ZP)((function(e){return e.router})),t=(0,s.YZ)(),n=t.isShowing,i=t.currentItem,o=w((0,x.Z)({loop:!0,src:"/sound/earth.mp3",autoPlay:!0}),4),a=o[0],l=o[1],c=o[2],u=(o[3],l.playing),f=c.play,d=c.pause;return(0,r.jsxs)(r.Fragment,{children:[a,(0,r.jsxs)("div",{className:"flex flex-col items-center h-full py-16 select-none",children:[(null===i||void 0===i?void 0:i.logo)&&(0,r.jsx)("img",{className:"h-[120px]",src:null===i||void 0===i?void 0:i.logo,alt:"logo"}),!n&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{className:"mt-24 text-6xl",children:"Soka International Schools"}),(0,r.jsx)("h6",{className:"mt-6 text-2xl",children:"Soka International Schools"})]}),n&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{className:"mt-6 text-4xl font-bold",children:null===i||void 0===i?void 0:i.title}),(0,r.jsxs)("h6",{className:"mt-4 text-xl text-gray-700 font-semibold",children:["Established in ",null===i||void 0===i?void 0:i.year]})]}),(0,r.jsx)("div",{className:"flex-grow"}),!n&&(0,r.jsx)("button",{className:"h-20 p-4 text-3xl font-extrabold text-white pointer-events-auto bg-primary rounded-huge w-72",onClick:function(){return stop(),e.push("/campus")},children:"Begin Tour"})]}),(0,r.jsx)("div",{className:"fixed pointer-events-auto top-4 right-4",children:(0,r.jsx)("button",{onClick:function(){u?d():f()},className:"text-gray-500",children:u?(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-10 h-10",viewBox:"0 0 20 20",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})}):(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-10 h-10",viewBox:"0 0 20 20",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",clipRule:"evenodd"})})})}),(0,r.jsx)("div",{className:"fixed pointer-events-auto top-4 left-4",children:(0,r.jsx)("button",{onClick:function(){return e.back()},className:"text-gray-500",children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-6 h-6",viewBox:"0 0 20 20",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"})})})}),n&&(0,r.jsx)(M,{}),!n&&(0,r.jsx)(S,{})]})},C=6e4;function M(){var e=(0,s.YZ)(),t=e.currentProgress,n=e.currentItem;(0,v.Z)((function(){s.YZ.setState({currentProgress:t>C?0:t+b})}),b),(0,m.useEffect)((function(){var e=Math.floor(l.wj.length*t/C);s.YZ.setState({currentItem:l.wj[e]})}),[t]);var i=t/C*100,o=l.wj.map((function(e){return e.country}));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"fixed w-full px-16 pointer-events-auto bottom-16",children:(0,r.jsxs)("div",{className:"mt-6","aria-hidden":"true",children:[(0,r.jsx)("input",{type:"range",min:0,max:100,value:i,className:"range",onChange:function(e){s.YZ.setState({currentProgress:parseFloat(e.target.value)/100*C})},step:.1}),(0,r.jsx)("div",{className:"hidden mt-6 text-sm font-medium text-center text-gray-600 sm:grid grid-cols-11",children:o.map((function(e,t){return(0,r.jsx)("div",{children:e},t)}))})]})}),n&&(0,r.jsx)("div",{className:"fixed ml-auto pointer-events-auto top-72 bottom-32 right-16 w-[480px]",children:(0,r.jsx)("img",{className:"rounded-lg",src:n.image,alt:"Image of campus"})})]})}var P=function(e){var t=e.onPressed;return(0,r.jsx)("button",{className:"mb-10 ml-10",onClick:t,children:(0,r.jsx)("img",{src:"/img/menu.svg",alt:"logo",height:48,width:48})})},O=function(e){var t=e.onPressed;return(0,r.jsx)("div",{className:"w-16 h-16 ml-10 rounded-full shadow-xl hover:bg-gray-400",children:(0,r.jsx)("button",{className:"flex items-center justify-center w-full h-full",onClick:t,children:(0,r.jsx)("img",{src:"/img/close.svg",alt:"logo",height:48,width:48})})})};function E(){return(0,r.jsx)(u.V,{center:!0,children:(0,r.jsxs)("span",{className:"flex w-6 h-6",children:[(0,r.jsx)("span",{className:"absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-sky-400"}),(0,r.jsx)("span",{className:"relative inline-flex w-6 h-6 rounded-full bg-sky-500"})]})})}var A=new p.Spherical,I=function(){var e=(0,s.YZ)(),t=e.isShowing,n=e.currentItem,o=(0,d.Ky)((function(e){return e.gl})),l=(0,d.Ky)((function(e){return e.camera})),c=w((0,a.U)(),2),u=c[0],h=c[1];return(0,m.useEffect)((function(){o.physicallyCorrectLights=!1}),[o]),(0,m.useEffect)((function(){null!==u&&(u.camera=l,u.setLookAt(0,4,8,0,4,0),u.verticalDragToForward=!0,u.minDistance=8,u.maxDistance=15,u.mouseButtons.left=j.Z.ACTION.NONE,u.mouseButtons.right=j.Z.ACTION.NONE,u.touches.one=j.Z.ACTION.NONE)}),[l,u]),(0,m.useEffect)((function(){u&&u.setLookAt(0,0,10,0,0,0,!0)}),[0,u,10]),(0,m.useEffect)((function(){if(u&&n){var e=(0,i.rx)(n.coordinate);A.setFromCartesianCoords(e[0],e[1],e[2]),u.rotateAzimuthTo(A.theta,!0),u.rotatePolarTo(A.phi,!0)}}),[u,n,0,10]),(0,d.xQ)((function(e,n){t||(u.azimuthAngle-=10*n*p.MathUtils.DEG2RAD)})),(0,r.jsxs)("scene",{children:[(0,r.jsx)("ambientLight",{intensity:.4}),(0,r.jsx)("directionalLight",{intensity:.2,rotation:[-Math.PI/2,0,0]}),(0,r.jsx)(f.c,{makeDefault:!0,position:[0,0,8],rotation:[0,0,0],children:(0,r.jsx)("directionalLight",{"target-position":[0,0,0],position:[0,80,80],intensity:.5,color:"white"})}),(0,r.jsx)(a.B,{ref:h}),(0,r.jsxs)(m.Suspense,{fallback:(0,r.jsx)(E,{}),children:[(0,r.jsx)(N,{}),(0,r.jsx)(i.gL,{})]})]})},Z={initial:{height:"100vh",bottom:0},animate:{height:0,transition:{when:"afterChildren",duration:.6,ease:[.87,0,.13,1]}}},T=function(){return(0,r.jsx)("div",{className:"absolute inset-0 flex items-center justify-center",children:(0,r.jsx)(h.E.div,{className:"relative z-50 w-full bg-primary",initial:"initial",animate:"animate",variants:Z})})},_=!0;t.default=function(){return(0,r.jsxs)(h.E.section,{exit:{opacity:0},children:[(0,r.jsx)(T,{}),(0,r.jsx)(k,{}),(0,r.jsx)(I,{r3f:!0})]})}},3337:function(e,t,n){"use strict";var r=n(7294);t.Z=function(e,t){var n=(0,r.useRef)((function(){}));(0,r.useEffect)((function(){n.current=e})),(0,r.useEffect)((function(){if(null!==t){var e=setInterval((function(){return n.current()}),t||0);return function(){return clearInterval(e)}}}),[t])}}},function(e){e.O(0,[592,852,49,709,774,888,179],(function(){return t=6337,e(e.s=t);var t}));var t=e.O();_N_E=t}]);