"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[7896],{83992:(e,t,a)=>{a.d(t,{Z:()=>c});a(72791);var l=a(47022),s=a(89743),r=a(2677),i=a(80184);const c=e=>{const t=()=>{e.onFilterChange&&e.onFilterChange()};return(e.title||e.filterData)&&(0,i.jsx)(l.Z,{className:"mb-24 md:mb-[4.5rem] sm:mb-8",children:(0,i.jsxs)(s.Z,{className:"".concat(e.title?"justify-between":"justify-center"," items-center md:justify-center md:items-center md:text-center md:flex-col"),children:[e.title&&(0,i.jsx)(r.Z,{xs:"auto",className:"md:mb-[30px]",children:(0,i.jsx)("h3",{className:"heading-4 font-serif m-0 p-0 font-semibold text-darkgray tracking-[-1px]",children:e.title})}),(0,i.jsx)(r.Z,{xs:"auto",children:e.filterData&&(0,i.jsx)("ul",{className:"filter-menu items-center justify-center flex flex-wrap uppercase",children:e.filterData.map(((e,a)=>(0,i.jsx)("li",{className:"px-[20px]".concat(0===a?" active":""),children:(0,i.jsx)("span",{"data-filter":e.key,onClick:t,children:e.title})},a)))})})]})})}},12989:(e,t,a)=>{a.d(t,{Z:()=>d});var l=a(72791),s=a(34290),r=a(11087),i=a(83992),c=a(39555),o=a(80184);const n=e=>{const t=(0,l.useRef)(),[c,n]=(0,l.useState)(!0);(0,l.useEffect)((()=>{let e=t.current.querySelectorAll("img");Promise.all(Array.prototype.slice.call(e).filter((e=>!e.complete)).map((e=>new Promise((t=>{e.onload=e.onerror=t}))))).then((()=>{Promise.resolve().then(a.bind(a,38480)).then((e=>{e.initializeIsotop(t.current).on("arrangeComplete",(()=>n(!1)))}))}))}),[]);const d={"--overlay-color":"object"===typeof e.overlay?"linear-gradient(to right top, ".concat(e.overlay.map(((e,t)=>e)),")"):e.overlay};return(0,o.jsxs)("div",{className:"grid-wrapper",children:[(0,o.jsx)(i.Z,{title:e.title,filterData:e.filterData,onFilterChange:()=>{t.current.querySelectorAll("li").forEach((e=>{var t;return null===(t=e.childNodes[0])||void 0===t?void 0:t.classList.add("appear")}))}}),(0,o.jsxs)("ul",{ref:t,className:"grid-container text-center".concat(e.grid?" ".concat(e.grid):"").concat(e.className?" ".concat(e.className):"").concat(c?" loading":""),children:[(0,o.jsx)("li",{className:"grid-sizer"}),e.data.map(((t,a)=>(0,o.jsx)("li",{className:"grid-item".concat(t.double_col?" grid-item-double":""," ").concat(t.category.toString().split(",").join(" ").toLowerCase()),children:(0,o.jsx)(r.rU,{"aria-label":"link",target:e.target,to:t.link,children:(0,o.jsx)(s.m.div,{className:"portfolio-bordered",initial:{opacity:0},whileInView:!c&&{opacity:1},viewport:{once:!0},transition:{duration:.6,ease:"easeOut"},children:(0,o.jsxs)("div",{className:"portfolio-image",style:d,children:[t.img&&(0,o.jsx)("img",{className:"w-full",src:t.img,height:470,width:550,alt:"portfolio-bordered"}),(0,o.jsx)("div",{className:"portfolio-border-hover",children:(0,o.jsxs)("div",{className:"scale block font-serif",children:[(0,o.jsx)("div",{className:"text-darkgray font-medium",children:t.title}),(0,o.jsx)("div",{className:"text-spanishgray text-sm uppercase",children:t.subtitle})]})})]})})})},a)))]})]})};n.defaultProps={data:c.GH};const d=(0,l.memo)(n)},27861:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});a(72791);var l=a(47022),s=a(89743),r=a(2677),i=a(38616),c=a(12989),o=a(39555),n=a(80184);const d=e=>(0,n.jsxs)("div",{style:e.style,children:[(0,n.jsxs)("div",{className:"py-[80px] h-auto overflow-hidden md:relative md:py-[40px]",children:[(0,n.jsx)(i.VS,{className:"lg-no-parallax absolute top-[0] w-full h-full bg-no-repeat lg:bg-cover",translateY:[-40,40],style:{backgroundImage:"url(/assets/img/webp/portfolio-bg.webp)"}}),(0,n.jsx)(l.Z,{className:"h-full relative",children:(0,n.jsx)(s.Z,{className:"justify-center h-[300px] sm:h-[250px]",children:(0,n.jsxs)(r.Z,{xl:6,lg:6,sm:8,className:"text-center flex justify-center flex-col font-serif",children:[(0,n.jsx)("h1",{className:"text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] mb-[15px] inline-block text-xmd leading-[20px]",children:"Portfolio bordered three column"}),(0,n.jsx)("h2",{className:"text-darkgray font-medium -tracking-[1px] mb-0",children:"Portfolio bordered"})]})})})]}),(0,n.jsx)("section",{className:"py-[130px] pt-0 overflow-hidden relative lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,n.jsx)(l.Z,{children:(0,n.jsx)(s.Z,{children:(0,n.jsx)(r.Z,{xs:12,className:"xs:px-0",children:(0,n.jsx)(c.Z,{overlay:["#556fff","#b263e4","#e05fc4","#f767a6","#ff798e"],grid:"grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-large",filterData:o.ws,data:o.GH})})})})})]})},47022:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(41418),s=a.n(l),r=a(72791),i=a(10162),c=a(80184);const o=r.forwardRef(((e,t)=>{let{bsPrefix:a,fluid:l=!1,as:r="div",className:o,...n}=e;const d=(0,i.vE)(a,"container"),m="string"===typeof l?"-".concat(l):"-fluid";return(0,c.jsx)(r,{ref:t,...n,className:s()(o,l?"".concat(d).concat(m):d)})}));o.displayName="Container";const n=o},89743:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(41418),s=a.n(l),r=a(72791),i=a(10162),c=a(80184);const o=r.forwardRef(((e,t)=>{let{bsPrefix:a,className:l,as:r="div",...o}=e;const n=(0,i.vE)(a,"row"),d=(0,i.pi)(),m=(0,i.zG)(),f="".concat(n,"-cols"),x=[];return d.forEach((e=>{const t=o[e];let a;delete o[e],null!=t&&"object"===typeof t?({cols:a}=t):a=t;const l=e!==m?"-".concat(e):"";null!=a&&x.push("".concat(f).concat(l,"-").concat(a))})),(0,c.jsx)(r,{ref:t,...o,className:s()(l,n,...x)})}));o.displayName="Row";const n=o},92199:(e,t,a)=>{a.d(t,{L:()=>s});var l=a(72791),s=a(26219).j?l.useLayoutEffect:l.useEffect}}]);
//# sourceMappingURL=7896.a7ee663a.chunk.js.map