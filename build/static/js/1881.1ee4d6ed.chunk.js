"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[1881,6826],{83992:(e,t,l)=>{l.d(t,{Z:()=>c});l(72791);var a=l(47022),s=l(89743),r=l(2677),i=l(80184);const c=e=>{const t=()=>{e.onFilterChange&&e.onFilterChange()};return(e.title||e.filterData)&&(0,i.jsx)(a.Z,{className:"mb-24 md:mb-[4.5rem] sm:mb-8",children:(0,i.jsxs)(s.Z,{className:"".concat(e.title?"justify-between":"justify-center"," items-center md:justify-center md:items-center md:text-center md:flex-col"),children:[e.title&&(0,i.jsx)(r.Z,{xs:"auto",className:"md:mb-[30px]",children:(0,i.jsx)("h3",{className:"heading-4 font-serif m-0 p-0 font-semibold text-darkgray tracking-[-1px]",children:e.title})}),(0,i.jsx)(r.Z,{xs:"auto",children:e.filterData&&(0,i.jsx)("ul",{className:"filter-menu items-center justify-center flex flex-wrap uppercase",children:e.filterData.map(((e,l)=>(0,i.jsx)("li",{className:"px-[20px]".concat(0===l?" active":""),children:(0,i.jsx)("span",{"data-filter":e.key,onClick:t,children:e.title})},l)))})})]})})}},35892:(e,t,l)=>{l.r(t),l.d(t,{default:()=>d});var a=l(72791),s=l(34290),r=l(83992),i=l(39555),c=l(11087),o=l(80184);const n=e=>{const t=(0,a.useRef)(),[i,n]=(0,a.useState)(!0);(0,a.useEffect)((()=>{let e=t.current.querySelectorAll("img");Promise.all(Array.prototype.slice.call(e).filter((e=>!e.complete)).map((e=>new Promise((t=>{e.onload=e.onerror=t}))))).then((()=>{Promise.resolve().then(l.bind(l,38480)).then((e=>{e.initializeIsotop(t.current).on("arrangeComplete",(()=>n(!1)))}))}))}),[]);return(0,o.jsxs)("div",{className:"grid-wrapper",children:[(0,o.jsx)(r.Z,{title:e.title,filterData:e.filterData,onFilterChange:()=>{t.current.querySelectorAll("li").forEach((e=>{var t;return null===(t=e.childNodes[0])||void 0===t?void 0:t.classList.add("appear")}))}}),(0,o.jsxs)("ul",{ref:t,className:"grid-container text-center".concat(e.grid?" ".concat(e.grid):"").concat(e.className?" ".concat(e.className):"").concat(i?" loading":""),children:[(0,o.jsx)("li",{className:"grid-sizer"}),e.data.map(((t,l)=>(0,o.jsx)("li",{className:"grid-item".concat(t.double_col?" grid-item-double":""," ").concat(t.category?t.category.toString().split(",").join(" ").toLowerCase():""),children:(0,o.jsx)(c.rU,{to:t.link,target:e.target,"aria-label":"link",children:(0,o.jsx)(s.m.div,{className:"portfolio-boxed overflow-hidden",initial:{opacity:0},whileInView:!i&&{opacity:1},viewport:{once:!0},transition:{duration:.6,ease:"easeOut"},children:(0,o.jsxs)("div",{className:"portfolio-image relative",children:[t.img&&(0,o.jsx)("img",{className:"w-full",src:t.img,height:447,width:550,alt:"portfolio-boxed"}),(0,o.jsx)("div",{className:"porfolio-hover absolute bg-white rounded-[3px]",children:(0,o.jsxs)("div",{className:"flex px-[30px] py-[15px] text-left self-end items-center w-full landscape:xl:px-[20px]",children:[(t.subtitle||t.title)&&(0,o.jsxs)("div",{className:"mr-auto",children:[t.subtitle&&(0,o.jsx)("div",{className:"mt-[5px] text-spanishgray text-sm font-serif uppercase",children:t.subtitle}),t.title&&(0,o.jsx)("div",{className:"font-medium text-darkgray font-serif uppercase",children:t.title})]}),(0,o.jsx)("div",{className:"ml-auto",children:(0,o.jsx)("i",{className:"line-icon-Arrow-OutRight text-[32px] inline-block top-[3px] text-darkgray relative"})})]})})]})})})},l)))]})]})};n.defaultProps={data:i.w_};const d=(0,a.memo)(n)},7646:(e,t,l)=>{l.r(t),l.d(t,{default:()=>d});l(72791);var a=l(47022),s=l(89743),r=l(2677),i=l(38616),c=l(35892),o=l(39555),n=l(80184);const d=e=>(0,n.jsxs)("div",{style:e.style,children:[(0,n.jsxs)("div",{className:"py-[80px] h-auto overflow-hidden md:relative md:py-[40px]",children:[(0,n.jsx)(i.VS,{className:"lg-no-parallax absolute top-[0] w-full h-full bg-no-repeat lg:bg-cover",translateY:[-40,40],style:{backgroundImage:"url(/assets/img/webp/portfolio-bg.webp)"}}),(0,n.jsx)(a.Z,{className:"h-full relative",children:(0,n.jsx)(s.Z,{className:"justify-center h-[300px] sm:h-[250px]",children:(0,n.jsxs)(r.Z,{xl:6,lg:6,sm:8,className:"text-center flex justify-center flex-col font-serif",children:[(0,n.jsx)("h1",{className:"text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] mb-[15px] inline-block text-xmd leading-[20px]",children:"Portfolio boxed three column"}),(0,n.jsx)("h2",{className:"text-darkgray font-medium -tracking-[1px] mb-0",children:"Portfolio boxed"})]})})})]}),(0,n.jsx)("section",{className:"pb-[130px] lg:pb-[90px] md:pb-[75px] sm:pb-[50px] relative",children:(0,n.jsx)(a.Z,{children:(0,n.jsx)(s.Z,{children:(0,n.jsx)(r.Z,{xs:12,className:"xs:px-0",children:(0,n.jsx)(c.default,{grid:"grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-large text-center",filterData:o.ws,data:o.w_})})})})})]})},47022:(e,t,l)=>{l.d(t,{Z:()=>n});var a=l(41418),s=l.n(a),r=l(72791),i=l(10162),c=l(80184);const o=r.forwardRef(((e,t)=>{let{bsPrefix:l,fluid:a=!1,as:r="div",className:o,...n}=e;const d=(0,i.vE)(l,"container"),x="string"===typeof a?"-".concat(a):"-fluid";return(0,c.jsx)(r,{ref:t,...n,className:s()(o,a?"".concat(d).concat(x):d)})}));o.displayName="Container";const n=o},89743:(e,t,l)=>{l.d(t,{Z:()=>n});var a=l(41418),s=l.n(a),r=l(72791),i=l(10162),c=l(80184);const o=r.forwardRef(((e,t)=>{let{bsPrefix:l,className:a,as:r="div",...o}=e;const n=(0,i.vE)(l,"row"),d=(0,i.pi)(),x=(0,i.zG)(),m="".concat(n,"-cols"),f=[];return d.forEach((e=>{const t=o[e];let l;delete o[e],null!=t&&"object"===typeof t?({cols:l}=t):l=t;const a=e!==x?"-".concat(e):"";null!=l&&f.push("".concat(m).concat(a,"-").concat(l))})),(0,c.jsx)(r,{ref:t,...o,className:s()(a,n,...f)})}));o.displayName="Row";const n=o},92199:(e,t,l)=>{l.d(t,{L:()=>s});var a=l(72791),s=l(26219).j?a.useLayoutEffect:a.useEffect}}]);
//# sourceMappingURL=1881.1ee4d6ed.chunk.js.map