(self.webpackChunklitho=self.webpackChunklitho||[]).push([[7883],{8022:(e,t,l)=>{"use strict";l.d(t,{Z:()=>b});var a=l(72791),r=l(2677),i=l(6596),o=l.n(i),s=l(48559),n=l(34290),c=l(80184);const p=e=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("img",{width:"297",height:"367",className:"w-full max-w-full h-auto",src:e.data.src,alt:"grid"}),(0,c.jsx)("div",{className:"image-box-wrapper absolute w-full h-full left-0 top-0 flex items-center justify-center",children:(0,c.jsx)("i",{className:"feather-zoom-in text-[28px] font-light text-white"})})]}),m=(0,a.memo)(p),d=e=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("img",{width:"300",height:"300",src:e.data.src,alt:"grid"}),(0,c.jsx)("div",{className:"image-box-wrapper absolute w-full h-full left-0 top-0 flex items-center justify-center py-[50px]",children:(0,c.jsx)("i",{className:"feather-zoom-in text-[28px] font-light text-white"})})]}),h=(0,a.memo)(d),g=e=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("img",{width:"297",height:"297",className:"w-full max-w-full h-auto",src:e.data.src,alt:"grid"}),(0,c.jsx)("div",{className:"image-box-wrapper absolute w-full h-full left-0 top-0  flex items-center justify-center py-[50px]",children:(0,c.jsx)("i",{className:"feather-zoom-in  text-[28px] font-light\ttext-white"})})]}),x=(0,a.memo)(g);var f=l(16802);const u=(e,t,l)=>{switch(e.theme){case"image-gallery-01":default:return(0,c.jsx)(m,{data:t});case"image-gallery-02":return(0,c.jsx)(h,{data:t});case"image-gallery-03":return(0,c.jsx)(x,{data:t})}},y=e=>{const[t,l]=(0,a.useState)(!1),[i,p]=(0,a.useState)(0),m=e.overlay&&"object"===typeof e.overlay?"linear-gradient(to top right, ".concat(e.overlay.map(((e,t)=>e)),")"):e.overlay,d=(0,a.useRef)(),h=(0,a.useRef)();return(0,a.useEffect)((()=>{d.current=new(o())(h.current,{itemSelector:".grid-item",layoutMode:"masonry",percentPosition:!0,stagger:0,masonry:{columnWidth:".grid-sizer"}}),setTimeout((()=>{d.current.arrange({filter:"*"})}),1e3)}),[]),(0,c.jsxs)(c.Fragment,{children:[t&&(0,c.jsx)(s.Z,{imageCaption:"".concat(e.data[i].title,"... ").concat(i+1," of ").concat(e.data.length),mainSrc:e.data[i].src,onCloseRequest:()=>l(!1),nextSrc:e.data[(i+1)%e.data.length].src,prevSrc:e.data[(i+e.data.length-1)%e.data.length].src,onMovePrevRequest:()=>p((i+e.data.length-1)%e.data.length),onMoveNextRequest:()=>p((i+1)%e.data.length)}),(0,c.jsx)(r.Z,{children:(0,c.jsxs)("ul",{ref:h,className:"".concat(e.theme," ").concat(e.className?"".concat(e.className):"","grid-container ").concat(e.grid?"".concat(e.grid):""),children:[(0,c.jsx)("li",{className:"grid-sizer"}),e.data.map(((t,a)=>(0,c.jsx)(n.m.li,{...e.animation,transition:{delay:a*e.animationDelay},className:"grid-item".concat(t.double_col?" grid-item-double":""),children:(0,c.jsx)("div",{className:"image-box",style:{background:"image-gallery-03"===e.theme?e.overlay[a]&&e.overlay[a]:m},onClick:()=>(e=>{l(!0),p(e)})(a),children:u(e,t)})},a)))]})})]})};y.defaultProps={data:f.xq,animationDelay:.2};const b=(0,a.memo)(y)},16802:(e,t,l)=>{"use strict";l.d(t,{KQ:()=>r,wp:()=>i,xq:()=>a});const a=[{src:"https://via.placeholder.com/800x989",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x989",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x989",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x989",title:"Lightbox gallery image title"}],r=[{double_col:!0,src:"https://via.placeholder.com/800x794",title:"Lightbox gallery image title"},{double_col:!0,src:"https://via.placeholder.com/800x387",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x794",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x794",title:"Lightbox gallery image title"}],i=[{src:"https://via.placeholder.com/800x800",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x1200",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x800",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x800",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x1200",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x1200",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x1200",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x800",title:"Lightbox gallery image title"}]},10732:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>m});l(72791);var a=l(47022),r=l(89743),i=l(2677),o=l(11087),s=l(21240),n=l(8022),c=l(16802),p=l(80184);const m=()=>(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("section",{className:"bg-darkgray py-[25px]",children:(0,p.jsx)(a.Z,{children:(0,p.jsxs)(r.Z,{className:"items-center justify-center mb-0",children:[(0,p.jsx)(i.Z,{xl:8,lg:6,children:(0,p.jsx)("h1",{className:"font-serif text-white font-medium mb-0 md:text-center text-lg",children:"Image gallery"})}),(0,p.jsx)(i.Z,{xl:4,lg:6,className:"breadcrumb justify-end text-xs font-serif md:mt-[10px] mb-0 md:justify-center",children:(0,p.jsxs)("ul",{className:"xs-text-center",children:[(0,p.jsx)("li",{children:(0,p.jsx)(o.rU,{to:"/","aria-label":"breadcrumb",className:"hover:text-white",children:"Home"})}),(0,p.jsx)("li",{children:(0,p.jsx)(o.rU,{to:"#","aria-label":"breadcrumb",onClick:e=>e.preventDefault(),className:"hover:text-white",children:"Elements"})}),(0,p.jsx)("li",{children:"Image gallery"})]})})]})})}),(0,p.jsx)("section",{className:"border-bottom border-color-extra-light-gray px-[10%] lg:px-0 py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,p.jsxs)(a.Z,{fluid:!0,children:[(0,p.jsx)(r.Z,{children:(0,p.jsx)(i.Z,{className:"mb-[6%]",children:(0,p.jsx)("h6",{className:"font-serif text-dark text-center font-medium mb-[25px] lg:mb-[15px]",children:"Image gallery style 01"})})}),(0,p.jsx)(r.Z,{children:(0,p.jsx)(n.Z,{theme:"image-gallery-01",data:c.xq,overlay:["#556fff","#b263e4","#e05fc4","#f767a6","#ff798e"],className:"",animation:s.Ji})})]})}),(0,p.jsx)("section",{className:"bg-lightgray border-bottom border-color-extra-light-gray px-[10%] lg:px-0 py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,p.jsxs)(a.Z,{fluid:!0,children:[(0,p.jsx)(r.Z,{children:(0,p.jsx)(i.Z,{className:"mb-[6%]",children:(0,p.jsx)("h6",{className:"font-serif text-dark text-center font-medium mb-[25px] lg:mb-[15px]",children:"Image gallery style 02"})})}),(0,p.jsx)(r.Z,{children:(0,p.jsx)(n.Z,{theme:"image-gallery-02",grid:"grid grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-large",data:c.KQ,overlay:["#36c1e1","#28ccc0","#74cf8e","#bac962","#feb95b"],animation:s.Ji})})]})}),(0,p.jsx)("section",{className:"bg-lightgray px-[6%] py-[130px] lg:px-0 lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,p.jsxs)(a.Z,{fluid:!0,children:[(0,p.jsx)(r.Z,{children:(0,p.jsx)(i.Z,{className:"mb-[6%]",children:(0,p.jsx)("h6",{className:"font-serif text-dark text-center font-medium mb-[25px] lg:mb-[15px]",children:"Image gallery style 03"})})}),(0,p.jsx)(r.Z,{children:(0,p.jsx)(n.Z,{grid:"grid grid-4col xl-grid-4col lg-grid-4col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large text-center",theme:"image-gallery-03",data:c.wp,overlay:["#58bc4b","#d9a026","#813ea9","#82bc13","#214bdf","#e28e1a","#04c05c","#e52d8c"],animation:s.Ji})})]})})]})},80888:(e,t,l)=>{"use strict";var a=l(79047);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,l,r,i,o){if(o!==a){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var l={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return l.PropTypes=l,l}},52007:(e,t,l)=>{e.exports=l(80888)()},79047:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},47022:(e,t,l)=>{"use strict";l.d(t,{Z:()=>c});var a=l(41418),r=l.n(a),i=l(72791),o=l(10162),s=l(80184);const n=i.forwardRef(((e,t)=>{let{bsPrefix:l,fluid:a=!1,as:i="div",className:n,...c}=e;const p=(0,o.vE)(l,"container"),m="string"===typeof a?"-".concat(a):"-fluid";return(0,s.jsx)(i,{ref:t,...c,className:r()(n,a?"".concat(p).concat(m):p)})}));n.displayName="Container";const c=n},89743:(e,t,l)=>{"use strict";l.d(t,{Z:()=>c});var a=l(41418),r=l.n(a),i=l(72791),o=l(10162),s=l(80184);const n=i.forwardRef(((e,t)=>{let{bsPrefix:l,className:a,as:i="div",...n}=e;const c=(0,o.vE)(l,"row"),p=(0,o.pi)(),m=(0,o.zG)(),d="".concat(c,"-cols"),h=[];return p.forEach((e=>{const t=n[e];let l;delete n[e],null!=t&&"object"===typeof t?({cols:l}=t):l=t;const a=e!==m?"-".concat(e):"";null!=l&&h.push("".concat(d).concat(a,"-").concat(l))})),(0,s.jsx)(i,{ref:t,...n,className:r()(a,c,...h)})}));n.displayName="Row";const c=n},23688:(e,t,l)=>{"use strict";function a(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function r(e){this.setState(function(t){var l=this.constructor.getDerivedStateFromProps(e,t);return null!==l&&void 0!==l?l:null}.bind(this))}function i(e,t){try{var l=this.props,a=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(l,a)}finally{this.props=l,this.state=a}}function o(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!==typeof e.getDerivedStateFromProps&&"function"!==typeof t.getSnapshotBeforeUpdate)return e;var l=null,o=null,s=null;if("function"===typeof t.componentWillMount?l="componentWillMount":"function"===typeof t.UNSAFE_componentWillMount&&(l="UNSAFE_componentWillMount"),"function"===typeof t.componentWillReceiveProps?o="componentWillReceiveProps":"function"===typeof t.UNSAFE_componentWillReceiveProps&&(o="UNSAFE_componentWillReceiveProps"),"function"===typeof t.componentWillUpdate?s="componentWillUpdate":"function"===typeof t.UNSAFE_componentWillUpdate&&(s="UNSAFE_componentWillUpdate"),null!==l||null!==o||null!==s){var n=e.displayName||e.name,c="function"===typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+n+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==l?"\n  "+l:"")+(null!==o?"\n  "+o:"")+(null!==s?"\n  "+s:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"===typeof e.getDerivedStateFromProps&&(t.componentWillMount=a,t.componentWillReceiveProps=r),"function"===typeof t.getSnapshotBeforeUpdate){if("function"!==typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=i;var p=t.componentDidUpdate;t.componentDidUpdate=function(e,t,l){var a=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:l;p.call(this,e,t,a)}}return e}l.r(t),l.d(t,{polyfill:()=>o}),a.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0,i.__suppressDeprecationWarning=!0},92199:(e,t,l)=>{"use strict";l.d(t,{L:()=>r});var a=l(72791),r=l(26219).j?a.useLayoutEffect:a.useEffect}}]);
//# sourceMappingURL=7883.d6796185.chunk.js.map