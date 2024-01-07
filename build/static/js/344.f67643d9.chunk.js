"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[344],{83992:(e,t,s)=>{s.d(t,{Z:()=>c});s(72791);var l=s(47022),a=s(89743),i=s(2677),r=s(80184);const c=e=>{const t=()=>{e.onFilterChange&&e.onFilterChange()};return(e.title||e.filterData)&&(0,r.jsx)(l.Z,{className:"mb-24 md:mb-[4.5rem] sm:mb-8",children:(0,r.jsxs)(a.Z,{className:"".concat(e.title?"justify-between":"justify-center"," items-center md:justify-center md:items-center md:text-center md:flex-col"),children:[e.title&&(0,r.jsx)(i.Z,{xs:"auto",className:"md:mb-[30px]",children:(0,r.jsx)("h3",{className:"heading-4 font-serif m-0 p-0 font-semibold text-darkgray tracking-[-1px]",children:e.title})}),(0,r.jsx)(i.Z,{xs:"auto",children:e.filterData&&(0,r.jsx)("ul",{className:"filter-menu items-center justify-center flex flex-wrap uppercase",children:e.filterData.map(((e,s)=>(0,r.jsx)("li",{className:"px-[20px]".concat(0===s?" active":""),children:(0,r.jsx)("span",{"data-filter":e.key,onClick:t,children:e.title})},s)))})})]})})}},39223:(e,t,s)=>{s.d(t,{Z:()=>d});var l=s(72791),a=s(11087),i=s(34290),r=s(83992),c=s(39555),n=s(80184);const o=e=>{const t=(0,l.useRef)(),[c,o]=(0,l.useState)(!0);(0,l.useEffect)((()=>{let e=t.current.querySelectorAll("img");Promise.all(Array.prototype.slice.call(e).filter((e=>!e.complete)).map((e=>new Promise((t=>{e.onload=e.onerror=t}))))).then((()=>{Promise.resolve().then(s.bind(s,38480)).then((e=>{e.initializeIsotop(t.current).on("arrangeComplete",(()=>o(!1)))}))}))}));return(0,n.jsxs)("div",{className:"".concat(e.className?" ".concat(e.className):""," grid-wrapper"),children:[(0,n.jsx)(r.Z,{title:e.title,filterData:e.filterData,onFilterChange:()=>{t.current.querySelectorAll("li").forEach((e=>{var t;return null===(t=e.childNodes[0])||void 0===t?void 0:t.classList.add("appear")}))}}),(0,n.jsxs)("ul",{ref:t,className:"grid-container text-center".concat(e.grid?" ".concat(e.grid):"").concat(c?" loading":""),children:[(0,n.jsx)("li",{className:"grid-sizer"}),e.data.map(((t,s)=>(0,n.jsx)("li",{className:"grid-item".concat(t.double_col?" grid-item-double":""," ").concat(t.category.toString().split(",").join(" ").toLowerCase()),children:(0,n.jsx)(a.rU,{"aria-label":"link",target:e.target,to:t.link,className:"no-underline",children:(0,n.jsxs)(i.m.div,{className:"portfolio-switchimg overflow-hidden",initial:{opacity:0},whileInView:!c&&{opacity:1},viewport:{once:!0},transition:{duration:.6,ease:"easeOut"},children:[(0,n.jsxs)("div",{className:"portfolio-image",children:[t.frontimg&&(0,n.jsx)("img",{src:t.frontimg,width:600,height:500,alt:"portfolio-switch",className:"w-full"}),t.backimg&&(0,n.jsx)("img",{className:"portfolio-switch-image w-full",src:t.backimg,width:600,height:500,alt:"portfolio-switch"})]}),(0,n.jsxs)("div",{className:"py-[30px] portfolio-content lg:py-[20px] xs:py-[15px]",children:[t.title&&(0,n.jsx)("span",{className:"inline-block font-medium text-darkgray font-serif",children:t.title}),t.subtitle&&(0,n.jsx)("span",{className:"block text-spanishgray text-md",children:t.subtitle})]})]})})},s)))]})]})};o.defaultProps={data:c.xZ};const d=(0,l.memo)(o)},32723:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});s(72791);var l=s(47022),a=s(89743),i=s(2677),r=s(38616),c=s(39223),n=s(39555),o=s(80184);const d=e=>(0,o.jsxs)("div",{style:e.style,children:[(0,o.jsxs)("div",{className:"py-[80px] h-auto overflow-hidden md:relative md:py-[40px]",children:[(0,o.jsx)(r.VS,{className:"lg-no-parallax absolute top-[0] w-full h-full bg-no-repeat lg:bg-cover",translateY:[-40,40],style:{backgroundImage:"url(/assets/img/webp/portfolio-bg.webp)"}}),(0,o.jsx)(l.Z,{className:"h-full relative",children:(0,o.jsx)(a.Z,{className:"justify-center h-[300px] sm:h-[250px]",children:(0,o.jsxs)(i.Z,{xl:6,lg:6,sm:8,className:"text-center flex justify-center flex-col font-serif",children:[(0,o.jsx)("h1",{className:"text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] mb-[15px] inline-block text-xmd leading-[20px]",children:"Portfolio switch image four column"}),(0,o.jsx)("h2",{className:"text-darkgray font-medium -tracking-[1px] mb-0",children:"Portfolio switch image"})]})})})]}),(0,o.jsx)("section",{className:"relative pt-0 py-[130px] px-[4%] lg:py-[90px] lg:px-[2%] md:py-[75px] sm:py-[50px] xs:px-0",children:(0,o.jsx)(l.Z,{fluid:!0,children:(0,o.jsx)(a.Z,{children:(0,o.jsx)(i.Z,{xs:12,className:"xs:px-0",children:(0,o.jsx)(c.Z,{grid:"grid grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large text-center",filterData:n.ws,data:n.xZ})})})})})]})},47022:(e,t,s)=>{s.d(t,{Z:()=>o});var l=s(41418),a=s.n(l),i=s(72791),r=s(10162),c=s(80184);const n=i.forwardRef(((e,t)=>{let{bsPrefix:s,fluid:l=!1,as:i="div",className:n,...o}=e;const d=(0,r.vE)(s,"container"),m="string"===typeof l?"-".concat(l):"-fluid";return(0,c.jsx)(i,{ref:t,...o,className:a()(n,l?"".concat(d).concat(m):d)})}));n.displayName="Container";const o=n},89743:(e,t,s)=>{s.d(t,{Z:()=>o});var l=s(41418),a=s.n(l),i=s(72791),r=s(10162),c=s(80184);const n=i.forwardRef(((e,t)=>{let{bsPrefix:s,className:l,as:i="div",...n}=e;const o=(0,r.vE)(s,"row"),d=(0,r.pi)(),m=(0,r.zG)(),x="".concat(o,"-cols"),f=[];return d.forEach((e=>{const t=n[e];let s;delete n[e],null!=t&&"object"===typeof t?({cols:s}=t):s=t;const l=e!==m?"-".concat(e):"";null!=s&&f.push("".concat(x).concat(l,"-").concat(s))})),(0,c.jsx)(i,{ref:t,...n,className:a()(l,o,...f)})}));n.displayName="Row";const o=n},92199:(e,t,s)=>{s.d(t,{L:()=>a});var l=s(72791),a=s(26219).j?l.useLayoutEffect:l.useEffect}}]);
//# sourceMappingURL=344.f67643d9.chunk.js.map