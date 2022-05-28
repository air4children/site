"use strict";(self.webpackChunkair_for_children_site=self.webpackChunkair_for_children_site||[]).push([[678],{1809:function(e,t,r){r.d(t,{Z:function(){return q}});var n=r(4942),a=r(5987),c=r(5900),i=r.n(c),o=r(7294),s=r(9541),l=r(8870),u=r(6132),d=r(5893),f=["bsPrefix","className","variant","as"];function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var p=o.forwardRef((function(e,t){var r=e.bsPrefix,c=e.className,o=e.variant,l=e.as,u=void 0===l?"img":l,p=(0,a.Z)(e,f),m=(0,s.vE)(r,"card-img");return(0,d.jsx)(u,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({ref:t,className:i()(o?"".concat(m,"-").concat(o):m,c)},p))}));p.displayName="CardImg";var m=p,v=r(8893),h=["bsPrefix","className","as"];function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=o.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,c=e.as,l=void 0===c?"div":c,u=(0,a.Z)(e,h),f=(0,s.vE)(r,"card-header"),b=(0,o.useMemo)((function(){return{cardHeaderBsPrefix:f}}),[f]);return(0,d.jsx)(v.Z.Provider,{value:b,children:(0,d.jsx)(l,w(w({ref:t},u),{},{className:i()(n,f)}))})}));y.displayName="CardHeader";var O=y,j=["bsPrefix","className","bg","text","border","body","children","as"];function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P=(0,u.Z)("h5"),Z=(0,u.Z)("h6"),I=(0,l.Z)("card-body"),S=(0,l.Z)("card-title",{Component:P}),k=(0,l.Z)("card-subtitle",{Component:Z}),M=(0,l.Z)("card-link",{Component:"a"}),N=(0,l.Z)("card-text",{Component:"p"}),_=(0,l.Z)("card-footer"),G=(0,l.Z)("card-img-overlay"),C=o.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,c=e.bg,o=e.text,l=e.border,u=e.body,f=e.children,b=e.as,p=void 0===b?"div":b,m=(0,a.Z)(e,j),v=(0,s.vE)(r,"card");return(0,d.jsx)(p,E(E({ref:t},m),{},{className:i()(n,v,c&&"bg-".concat(c),o&&"text-".concat(o),l&&"border-".concat(l)),children:u?(0,d.jsx)(I,{children:f}):f}))}));C.displayName="Card",C.defaultProps={body:!1};var q=Object.assign(C,{Img:m,Title:S,Subtitle:k,Body:I,Link:M,Text:N,Header:O,Footer:_,ImgOverlay:G})},4305:function(e,t,r){r.r(t),r.d(t,{default:function(){return F}});var n=r(7294),a=r(8406),c=r(9230),i=r(4942),o=r(885),s=r(5987),l=r(5655);var u=function(e,t){var r=(0,n.useRef)(!0);(0,n.useEffect)((function(){if(!r.current)return e();r.current=!1}),t)},d=r(9424),f=r(6400),b=r(9129),p=Math.pow(2,31)-1;function m(e,t,r){var n=r-Date.now();e.current=n<=p?setTimeout(t,n):setTimeout((function(){return m(e,t,r)}),p)}function v(){var e=(0,f.Z)(),t=(0,n.useRef)();return(0,b.Z)((function(){return clearTimeout(t.current)})),(0,n.useMemo)((function(){var r=function(){return clearTimeout(t.current)};return{set:function(n,a){void 0===a&&(a=0),e()&&(r(),a<=p?t.current=setTimeout(n,a):m(t,n,Date.now()+a))},clear:r}}),[])}var h=r(1324),g=r(5900),w=r.n(g),y=r(5210),O=(0,r(8870).Z)("carousel-caption"),j=r(9541),x=r(5893),E=["as","bsPrefix","className"];function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I=n.forwardRef((function(e,t){var r=e.as,n=void 0===r?"div":r,a=e.bsPrefix,c=e.className,i=(0,s.Z)(e,E),o=w()(c,(0,j.vE)(a,"carousel-item"));return(0,x.jsx)(n,Z(Z({ref:t},i),{},{className:o}))}));I.displayName="CarouselItem";var S=I,k=r(3888),M=r(1831),N=r(9059),_=r(558),G=["as","bsPrefix","slide","fade","controls","indicators","indicatorLabels","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","variant","className","children"];function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var D={slide:!0,fade:!1,controls:!0,indicators:!0,indicatorLabels:[],defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:(0,x.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:(0,x.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};var T=n.forwardRef((function(e,t){var r=(0,y.Ch)(e,{activeIndex:"onSelect"}),a=r.as,c=void 0===a?"div":a,i=r.bsPrefix,f=r.slide,b=r.fade,p=r.controls,m=r.indicators,g=r.indicatorLabels,O=r.activeIndex,E=r.onSelect,P=r.onSlide,Z=r.onSlid,I=r.interval,S=r.keyboard,C=r.onKeyDown,D=r.pause,T=r.onMouseOver,L=r.onMouseOut,R=r.wrap,z=r.touch,J=r.onTouchStart,A=r.onTouchMove,B=r.onTouchEnd,F=r.prevIcon,H=r.prevLabel,U=r.nextIcon,K=r.nextLabel,W=r.variant,X=r.className,Q=r.children,V=(0,s.Z)(r,G),Y=(0,j.vE)(i,"carousel"),$=(0,j.SC)(),ee=(0,n.useRef)(null),te=(0,n.useState)("next"),re=(0,o.Z)(te,2),ne=re[0],ae=re[1],ce=(0,n.useState)(!1),ie=(0,o.Z)(ce,2),oe=ie[0],se=ie[1],le=(0,n.useState)(!1),ue=(0,o.Z)(le,2),de=ue[0],fe=ue[1],be=(0,n.useState)(O||0),pe=(0,o.Z)(be,2),me=pe[0],ve=pe[1];(0,n.useEffect)((function(){de||O===me||(ee.current?ae(ee.current):ae((O||0)>me?"next":"prev"),f&&fe(!0),ve(O||0))}),[O,de,me,f]),(0,n.useEffect)((function(){ee.current&&(ee.current=null)}));var he,ge=0;(0,k.Ed)(Q,(function(e,t){++ge,t===O&&(he=e.props.interval)}));var we=(0,d.Z)(he),ye=(0,n.useCallback)((function(e){if(!de){var t=me-1;if(t<0){if(!R)return;t=ge-1}ee.current="prev",null==E||E(t,e)}}),[de,me,E,R,ge]),Oe=(0,l.Z)((function(e){if(!de){var t=me+1;if(t>=ge){if(!R)return;t=0}ee.current="next",null==E||E(t,e)}})),je=(0,n.useRef)();(0,n.useImperativeHandle)(t,(function(){return{element:je.current,prev:ye,next:Oe}}));var xe=(0,l.Z)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(je.current)&&($?ye():Oe())})),Ee="next"===ne?"start":"end";u((function(){f||(null==P||P(me,Ee),null==Z||Z(me,Ee))}),[me]);var Pe="".concat(Y,"-item-").concat(ne),Ze="".concat(Y,"-item-").concat(Ee),Ie=(0,n.useCallback)((function(e){(0,N.Z)(e),null==P||P(me,Ee)}),[P,me,Ee]),Se=(0,n.useCallback)((function(){fe(!1),null==Z||Z(me,Ee)}),[Z,me,Ee]),ke=(0,n.useCallback)((function(e){if(S&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void($?Oe(e):ye(e));case"ArrowRight":return e.preventDefault(),void($?ye(e):Oe(e))}null==C||C(e)}),[S,C,ye,Oe,$]),Me=(0,n.useCallback)((function(e){"hover"===D&&se(!0),null==T||T(e)}),[D,T]),Ne=(0,n.useCallback)((function(e){se(!1),null==L||L(e)}),[L]),_e=(0,n.useRef)(0),Ge=(0,n.useRef)(0),Ce=v(),qe=(0,n.useCallback)((function(e){_e.current=e.touches[0].clientX,Ge.current=0,"hover"===D&&se(!0),null==J||J(e)}),[D,J]),De=(0,n.useCallback)((function(e){e.touches&&e.touches.length>1?Ge.current=0:Ge.current=e.touches[0].clientX-_e.current,null==A||A(e)}),[A]),Te=(0,n.useCallback)((function(e){if(z){var t=Ge.current;Math.abs(t)>40&&(t>0?ye(e):Oe(e))}"hover"===D&&Ce.set((function(){se(!1)}),I||void 0),null==B||B(e)}),[z,D,ye,Oe,Ce,I,B]),Le=null!=I&&!oe&&!de,Re=(0,n.useRef)();(0,n.useEffect)((function(){var e,t;if(Le){var r=$?ye:Oe;return Re.current=window.setInterval(document.visibilityState?xe:r,null!=(e=null!=(t=we.current)?t:I)?e:void 0),function(){null!==Re.current&&clearInterval(Re.current)}}}),[Le,ye,Oe,we,I,xe,$]);var ze=(0,n.useMemo)((function(){return m&&Array.from({length:ge},(function(e,t){return function(e){null==E||E(t,e)}}))}),[m,ge,E]);return(0,x.jsxs)(c,q(q({ref:je},V),{},{onKeyDown:ke,onMouseOver:Me,onMouseOut:Ne,onTouchStart:qe,onTouchMove:De,onTouchEnd:Te,className:w()(X,Y,f&&"slide",b&&"".concat(Y,"-fade"),W&&"".concat(Y,"-").concat(W)),children:[m&&(0,x.jsx)("div",{className:"".concat(Y,"-indicators"),children:(0,k.UI)(Q,(function(e,t){return(0,x.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=g&&g.length?g[t]:"Slide ".concat(t+1),className:t===me?"active":void 0,onClick:ze?ze[t]:void 0,"aria-current":t===me},t)}))}),(0,x.jsx)("div",{className:"".concat(Y,"-inner"),children:(0,k.UI)(Q,(function(e,t){var r=t===me;return f?(0,x.jsx)(_.Z,{in:r,onEnter:r?Ie:void 0,onEntered:r?Se:void 0,addEndListener:M.Z,children:function(t,a){return n.cloneElement(e,q(q({},a),{},{className:w()(e.props.className,r&&"entered"!==t&&Pe,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&Ze)}))}}):n.cloneElement(e,{className:w()(e.props.className,r&&"active")})}))}),p&&(0,x.jsxs)(x.Fragment,{children:[(R||0!==O)&&(0,x.jsxs)(h.Z,{className:"".concat(Y,"-control-prev"),onClick:ye,children:[F,H&&(0,x.jsx)("span",{className:"visually-hidden",children:H})]}),(R||O!==ge-1)&&(0,x.jsxs)(h.Z,{className:"".concat(Y,"-control-next"),onClick:Oe,children:[U,K&&(0,x.jsx)("span",{className:"visually-hidden",children:K})]})]})]}))}));T.displayName="Carousel",T.defaultProps=D;var L=Object.assign(T,{Caption:O,Item:S}),R=r(3639),z=r(994),J=r(7408),A=r(1809),B=r(6594),F=function(e){var t=e.data;return n.createElement(n.Fragment,null,n.createElement(L,null,t.slideShow.edges.map((function(e){var t=e.node;return n.createElement(L.Item,{key:t.id},n.createElement(c.G,{image:t.childImageSharp.gatsbyImageData,alt:t.base}),n.createElement(L.Caption,null,n.createElement("h1",null,"Air 4 Children"),n.createElement("h2",null,"Nulla vitae elit libero, a pharetra augue mollis interdum.")))}))),n.createElement(a.Z,{pageTitle:"Air For Children"},n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),n.createElement("br",null),n.createElement(R.Z,{className:"index-module--container-body--DbtgL"},n.createElement(z.Z,null,n.createElement(J.Z,null,n.createElement(A.Z,null,n.createElement(c.S,{alt:"Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera",src:"../images/IMG_0088.JPG",__imageData:r(8288)}),n.createElement(A.Z.Body,null,n.createElement(A.Z.Title,null,"Workshops"),n.createElement(A.Z.Text,null,"Some quick example text to build here."),n.createElement(B.Z,{variant:"primary"},"Go somewhere")))),n.createElement(J.Z,null,n.createElement(A.Z,null,n.createElement(c.S,{alt:"Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera",src:"../images/IMG_0092.JPG",__imageData:r(7666)}),n.createElement(A.Z.Body,null,n.createElement(A.Z.Title,null,"Workshops"),n.createElement(A.Z.Text,null,"Some quick example text to build here."),n.createElement(B.Z,{variant:"primary"},"Go somewhere")))),n.createElement(J.Z,null,n.createElement(A.Z,null,n.createElement(c.S,{alt:"Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera",src:"../images/IMG_0133.JPG",__imageData:r(8338)}),n.createElement(A.Z.Body,null,n.createElement(A.Z.Title,null,"Workshops"),n.createElement(A.Z.Text,null,"Some quick example text to build here."),n.createElement(B.Z,{variant:"primary"},"Go somewhere")))))),n.createElement("br",null),n.createElement("p",null,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"),n.createElement("br",null),n.createElement(c.S,{alt:"Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera",src:"../images/IMG_0074.JPG",__imageData:r(3816)})))}},8288:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8d8d8","images":{"fallback":{"src":"/site/static/1b693eb34679b2d2373f78de878f1b42/92b54/IMG_0088.jpg","srcSet":"/site/static/1b693eb34679b2d2373f78de878f1b42/c45da/IMG_0088.jpg 1152w,\\n/site/static/1b693eb34679b2d2373f78de878f1b42/ff4e9/IMG_0088.jpg 2304w,\\n/site/static/1b693eb34679b2d2373f78de878f1b42/92b54/IMG_0088.jpg 4608w","sizes":"(min-width: 4608px) 4608px, 100vw"},"sources":[{"srcSet":"/site/static/1b693eb34679b2d2373f78de878f1b42/ac8d5/IMG_0088.webp 1152w,\\n/site/static/1b693eb34679b2d2373f78de878f1b42/9aafe/IMG_0088.webp 2304w,\\n/site/static/1b693eb34679b2d2373f78de878f1b42/e1ed2/IMG_0088.webp 4608w","type":"image/webp","sizes":"(min-width: 4608px) 4608px, 100vw"}]},"width":4608,"height":3072}')},7666:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/site/static/b2b7fe7d464cb6c2de77fa3565a44b2f/92b54/IMG_0092.jpg","srcSet":"/site/static/b2b7fe7d464cb6c2de77fa3565a44b2f/c45da/IMG_0092.jpg 1152w,\\n/site/static/b2b7fe7d464cb6c2de77fa3565a44b2f/ff4e9/IMG_0092.jpg 2304w,\\n/site/static/b2b7fe7d464cb6c2de77fa3565a44b2f/92b54/IMG_0092.jpg 4608w","sizes":"(min-width: 4608px) 4608px, 100vw"},"sources":[{"srcSet":"/site/static/b2b7fe7d464cb6c2de77fa3565a44b2f/ac8d5/IMG_0092.webp 1152w,\\n/site/static/b2b7fe7d464cb6c2de77fa3565a44b2f/9aafe/IMG_0092.webp 2304w,\\n/site/static/b2b7fe7d464cb6c2de77fa3565a44b2f/e1ed2/IMG_0092.webp 4608w","type":"image/webp","sizes":"(min-width: 4608px) 4608px, 100vw"}]},"width":4608,"height":3072}')},8338:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#382878","images":{"fallback":{"src":"/site/static/8f6ee7f4f2f0ed6fb30e6796516c5817/92b54/IMG_0133.jpg","srcSet":"/site/static/8f6ee7f4f2f0ed6fb30e6796516c5817/c45da/IMG_0133.jpg 1152w,\\n/site/static/8f6ee7f4f2f0ed6fb30e6796516c5817/ff4e9/IMG_0133.jpg 2304w,\\n/site/static/8f6ee7f4f2f0ed6fb30e6796516c5817/92b54/IMG_0133.jpg 4608w","sizes":"(min-width: 4608px) 4608px, 100vw"},"sources":[{"srcSet":"/site/static/8f6ee7f4f2f0ed6fb30e6796516c5817/ac8d5/IMG_0133.webp 1152w,\\n/site/static/8f6ee7f4f2f0ed6fb30e6796516c5817/9aafe/IMG_0133.webp 2304w,\\n/site/static/8f6ee7f4f2f0ed6fb30e6796516c5817/e1ed2/IMG_0133.webp 4608w","type":"image/webp","sizes":"(min-width: 4608px) 4608px, 100vw"}]},"width":4608,"height":3072}')},3816:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#180808","images":{"fallback":{"src":"/site/static/cccbbf12dc098aa06e016fe52021393c/92b54/IMG_0074.jpg","srcSet":"/site/static/cccbbf12dc098aa06e016fe52021393c/c45da/IMG_0074.jpg 1152w,\\n/site/static/cccbbf12dc098aa06e016fe52021393c/ff4e9/IMG_0074.jpg 2304w,\\n/site/static/cccbbf12dc098aa06e016fe52021393c/92b54/IMG_0074.jpg 4608w","sizes":"(min-width: 4608px) 4608px, 100vw"},"sources":[{"srcSet":"/site/static/cccbbf12dc098aa06e016fe52021393c/ac8d5/IMG_0074.webp 1152w,\\n/site/static/cccbbf12dc098aa06e016fe52021393c/9aafe/IMG_0074.webp 2304w,\\n/site/static/cccbbf12dc098aa06e016fe52021393c/e1ed2/IMG_0074.webp 4608w","type":"image/webp","sizes":"(min-width: 4608px) 4608px, 100vw"}]},"width":4608,"height":3072}')}}]);
//# sourceMappingURL=component---src-pages-index-js-b8508e679a379d40c626.js.map