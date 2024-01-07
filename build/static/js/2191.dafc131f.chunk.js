"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[2191],{83992:(e,t,l)=>{l.d(t,{Z:()=>c});l(72791);var a=l(47022),s=l(89743),r=l(2677),i=l(80184);const c=e=>{const t=()=>{e.onFilterChange&&e.onFilterChange()};return(e.title||e.filterData)&&(0,i.jsx)(a.Z,{className:"mb-24 md:mb-[4.5rem] sm:mb-8",children:(0,i.jsxs)(s.Z,{className:"".concat(e.title?"justify-between":"justify-center"," items-center md:justify-center md:items-center md:text-center md:flex-col"),children:[e.title&&(0,i.jsx)(r.Z,{xs:"auto",className:"md:mb-[30px]",children:(0,i.jsx)("h3",{className:"heading-4 font-serif m-0 p-0 font-semibold text-darkgray tracking-[-1px]",children:e.title})}),(0,i.jsx)(r.Z,{xs:"auto",children:e.filterData&&(0,i.jsx)("ul",{className:"filter-menu items-center justify-center flex flex-wrap uppercase",children:e.filterData.map(((e,l)=>(0,i.jsx)("li",{className:"px-[20px]".concat(0===l?" active":""),children:(0,i.jsx)("span",{"data-filter":e.key,onClick:t,children:e.title})},l)))})})]})})}},22077:(e,t,l)=>{l.d(t,{Z:()=>d});var a=l(72791),s=l(34290),r=l(11087),i=l(83992),c=l(39555),o=l(80184);const n=e=>{const t=(0,a.useRef)(),[c,n]=(0,a.useState)(!0);(0,a.useEffect)((()=>{let e=t.current.querySelectorAll("img");Promise.all(Array.prototype.slice.call(e).filter((e=>!e.complete)).map((e=>new Promise((t=>{e.onload=e.onerror=t}))))).then((()=>{Promise.resolve().then(l.bind(l,38480)).then((e=>{e.initializeIsotop(t.current).on("arrangeComplete",(()=>n(!1)))}))}))}),[]);const d={"--overlay-color":"object"===typeof e.overlay?"linear-gradient(to right top, ".concat(e.overlay.map((e=>e)),")"):e.overlay};return(0,o.jsxs)("div",{className:"grid-wrapper",children:[(0,o.jsx)(i.Z,{title:e.title,filterData:e.filterData,onFilterChange:()=>{t.current.querySelectorAll("li").forEach((e=>{var t;return null===(t=e.childNodes[0])||void 0===t?void 0:t.classList.add("appear")}))}}),(0,o.jsxs)("ul",{ref:t,className:"grid-container text-center".concat(e.grid?" ".concat(e.grid):"").concat(e.className?" ".concat(e.className):"").concat(c?" loading":""),children:[(0,o.jsx)("li",{className:"grid-sizer"}),e.data.map(((t,l)=>(0,o.jsx)("li",{className:"grid-item".concat(t.double_col?" grid-item-double":""," ").concat(t.category.toString().split(",").join(" ").toLowerCase()),children:(0,o.jsx)(r.rU,{"aria-label":"link",target:e.target,to:t.link,children:(0,o.jsx)(s.m.div,{className:"portfolio-overlay overflow-hidden",initial:{opacity:0},whileInView:!c&&{opacity:1},viewport:{once:!0},transition:{duration:.6,ease:"easeOut"},children:(0,o.jsxs)("div",{className:"portfolio-image relative",style:d,children:[t.img&&(0,o.jsx)("img",{className:"w-full",src:t.img,height:447,width:550,alt:"portfolio-overlay"}),(0,o.jsxs)("div",{className:"portfolio-hover absolute font-serif justify-end flex flex-col py-[50px] text-center xl:py-[30px]",children:[(0,o.jsx)("i",{className:"ti-plus portfolio-plus-icon font-light text-lg text-basecolor"}),t.title&&(0,o.jsx)("div",{className:"font-serif text-white text-[15px] font-medium block m-0",children:t.title}),t.subtitle&&(0,o.jsx)("div",{className:"block text-white opacity-70 text-md",children:t.subtitle})]})]})})})},l)))]})]})};n.defaultProps={data:c.XC};const d=(0,a.memo)(n)},37833:(e,t,l)=>{l.r(t),l.d(t,{default:()=>d});l(72791);var a=l(47022),s=l(89743),r=l(2677),i=l(38616),c=l(22077),o=l(39555),n=l(80184);const d=e=>(0,n.jsxs)("div",{style:e.style,children:[(0,n.jsxs)("div",{className:"py-[80px] h-auto overflow-hidden md:relative md:py-[40px]",children:[(0,n.jsx)(i.VS,{className:"lg-no-parallax absolute top-[0] w-full h-full bg-no-repeat lg:bg-cover",translateY:[-40,40],style:{backgroundImage:"url(/assets/img/webp/portfolio-bg.webp)"}}),(0,n.jsx)(a.Z,{className:"h-full relative",children:(0,n.jsx)(s.Z,{className:"justify-center h-[300px] sm:h-[250px]",children:(0,n.jsxs)(r.Z,{xl:6,lg:6,sm:8,className:"text-center flex justify-center flex-col font-serif",children:[(0,n.jsx)("h1",{className:"text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] mb-[15px] inline-block text-xmd leading-[20px]",children:"Portfolio overlay masonry column"}),(0,n.jsx)("h2",{className:"text-darkgray font-medium -tracking-[1px] mb-0",children:"Portfolio overlay"})]})})})]}),(0,n.jsx)("section",{className:"relative pt-0 pb-[130px] lg:pb-[90px] md:pb-[75px] sm:pb-[50px]",children:(0,n.jsx)(a.Z,{fluid:!0,children:(0,n.jsx)(s.Z,{children:(0,n.jsx)(r.Z,{xs:12,className:"xs:px-0",children:(0,n.jsx)(c.Z,{overlay:["#556fff","#b263e4","#e05fc4","#f767a6","#ff798e"],grid:"grid grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-large",filterData:o.ws,data:o.Vj})})})})})]})},47022:(e,t,l)=>{l.d(t,{Z:()=>n});var a=l(41418),s=l.n(a),r=l(72791),i=l(10162),c=l(80184);const o=r.forwardRef(((e,t)=>{let{bsPrefix:l,fluid:a=!1,as:r="div",className:o,...n}=e;const d=(0,i.vE)(l,"container"),m="string"===typeof a?"-".concat(a):"-fluid";return(0,c.jsx)(r,{ref:t,...n,className:s()(o,a?"".concat(d).concat(m):d)})}));o.displayName="Container";const n=o},89743:(e,t,l)=>{l.d(t,{Z:()=>n});var a=l(41418),s=l.n(a),r=l(72791),i=l(10162),c=l(80184);const o=r.forwardRef(((e,t)=>{let{bsPrefix:l,className:a,as:r="div",...o}=e;const n=(0,i.vE)(l,"row"),d=(0,i.pi)(),m=(0,i.zG)(),f="".concat(n,"-cols"),x=[];return d.forEach((e=>{const t=o[e];let l;delete o[e],null!=t&&"object"===typeof t?({cols:l}=t):l=t;const a=e!==m?"-".concat(e):"";null!=l&&x.push("".concat(f).concat(a,"-").concat(l))})),(0,c.jsx)(r,{ref:t,...o,className:s()(a,n,...x)})}));o.displayName="Row";const n=o},92199:(e,t,l)=>{l.d(t,{L:()=>s});var a=l(72791),s=l(26219).j?a.useLayoutEffect:a.useEffect}}]);
//# sourceMappingURL=2191.dafc131f.chunk.js.map