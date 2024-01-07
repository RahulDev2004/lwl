"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[8120],{5104:(e,a,l)=>{l.d(a,{Z:()=>x});var t=l(72791),s=l(11087),i=l(34290),r=l(75585),c=l(83992),n=l(19630),o=l(80184);const d=n.qm.filter((e=>"clean"===e.blogType)),m=e=>{const a=(0,t.useRef)(),[n,d]=(0,t.useState)(!0);(0,t.useEffect)((()=>{Promise.resolve().then(l.bind(l,38480)).then((e=>{e.initializeIsotop(a.current).on("arrangeComplete",(()=>d(!1)))}))}),[]);const m={"--overlay-color":"object"===typeof e.overlay?"linear-gradient(to right top, ".concat(e.overlay.map(((e,a)=>e)),")"):e.overlay};return(0,o.jsxs)("div",{className:"grid-wrapper",children:[(0,o.jsx)(c.Z,{title:e.title,filterData:e.filterData,onFilterChange:()=>{a.current.querySelectorAll("li").forEach((e=>{var a;return null===(a=e.childNodes[0])||void 0===a?void 0:a.classList.add("appear")}))}}),(0,o.jsxs)("ul",{ref:a,className:"blog-clean grid-container text-center".concat(e.grid?" ".concat(e.grid):"").concat(n?" loading":"").concat(!1===e.filter?"":" mt-28 md:mt-[4.5rem] sm:mt-8"),children:[(0,o.jsx)("li",{className:"grid-sizer"}),e.data.map(((a,l)=>(0,o.jsx)("li",{className:"grid-item".concat(a.double_col?" grid-item-double":""," ").concat(a.category.map((e=>e.split(" ").join(""))).toString().split(",").join(" ").toLowerCase()),children:(0,o.jsxs)(i.m.div,{className:"blog-post rounded-[6px] overflow-hidden",style:m,initial:{opacity:0},whileInView:!n&&{opacity:1},viewport:{once:!0},transition:{duration:.6,ease:"easeOut"},children:[(0,o.jsx)("div",{className:"blog-post-img relative overflow-hidden",style:m,children:(0,o.jsxs)(s.rU,{"aria-label":"link",to:"".concat(e.link).concat([a.id]),className:"",children:[(0,o.jsx)("img",{className:"w-full",height:280,width:350,src:a.img,alt:"blog-clean"}),(0,o.jsx)("div",{className:"blog-rounded-icon bg-white",children:(0,o.jsx)("i",{className:"feather-arrow-right text-darkgray text-lg"})})]})}),(0,o.jsxs)("div",{className:"post-details p-[30px] sm:px-[25px] bg-white",children:[(0,o.jsxs)("span",{className:"text-md uppercase",children:[" ",a.date," "]}),(0,o.jsxs)(s.rU,{"aria-label":"link",to:"".concat(e.link).concat([a.id]),className:"font-medium text-darkgray font-serif block",children:[" ",a.title," "]})]})]})},l)))]}),!0===e.pagination&&(0,o.jsx)("div",{className:"flex justify-center mt-[7.5rem] md:mt-20",children:(0,o.jsx)(r.Z,{})})]})};m.defaultProps={data:d,link:"/blog-types/blog-standard-post/"};const x=(0,t.memo)(m)},75585:(e,a,l)=>{l.d(a,{Z:()=>i});l(72791);var t=l(11087),s=l(80184);const i=()=>(0,s.jsxs)("ul",{className:"pagination pagination-style-01 font-sans font-medium items-center",children:[(0,s.jsx)("li",{className:"page-item",children:(0,s.jsx)(t.rU,{"aria-label":"link",className:"page-link",to:"#",children:(0,s.jsx)("i",{className:"feather-arrow-left text-lg"})})}),(0,s.jsx)("li",{className:"page-item",children:(0,s.jsx)(t.rU,{"aria-label":"link",className:"page-link",to:"#",children:" 01 "})}),(0,s.jsx)("li",{className:"page-item active",children:(0,s.jsx)(t.rU,{"aria-label":"link",className:"page-link",to:"#",children:" 02 "})}),(0,s.jsx)("li",{className:"page-item",children:(0,s.jsx)(t.rU,{"aria-label":"link",className:"page-link",to:"#",children:" 03 "})}),(0,s.jsx)("li",{className:"page-item",children:(0,s.jsx)(t.rU,{"aria-label":"link",className:"page-link",to:"#",children:" 04 "})}),(0,s.jsx)("li",{className:"page-item",children:(0,s.jsx)(t.rU,{"aria-label":"link",className:"page-link",to:"#",children:(0,s.jsx)("i",{className:"feather-arrow-right text-lg"})})})]})},83992:(e,a,l)=>{l.d(a,{Z:()=>c});l(72791);var t=l(47022),s=l(89743),i=l(2677),r=l(80184);const c=e=>{const a=()=>{e.onFilterChange&&e.onFilterChange()};return(e.title||e.filterData)&&(0,r.jsx)(t.Z,{className:"mb-24 md:mb-[4.5rem] sm:mb-8",children:(0,r.jsxs)(s.Z,{className:"".concat(e.title?"justify-between":"justify-center"," items-center md:justify-center md:items-center md:text-center md:flex-col"),children:[e.title&&(0,r.jsx)(i.Z,{xs:"auto",className:"md:mb-[30px]",children:(0,r.jsx)("h3",{className:"heading-4 font-serif m-0 p-0 font-semibold text-darkgray tracking-[-1px]",children:e.title})}),(0,r.jsx)(i.Z,{xs:"auto",children:e.filterData&&(0,r.jsx)("ul",{className:"filter-menu items-center justify-center flex flex-wrap uppercase",children:e.filterData.map(((e,l)=>(0,r.jsx)("li",{className:"px-[20px]".concat(0===l?" active":""),children:(0,r.jsx)("span",{"data-filter":e.key,onClick:a,children:e.title})},l)))})})]})})}},72663:(e,a,l)=>{l.r(a),l.d(a,{default:()=>m});l(72791);var t=l(47022),s=l(89743),i=l(2677),r=l(38616),c=l(5104),n=l(19630),o=l(80184);const d=n.qm.filter((e=>"clean"===e.blogType)),m=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"py-[80px] h-auto overflow-hidden md:relative md:py-[40px]",children:[(0,o.jsx)(r.VS,{className:"lg-no-parallax bg-cover absolute -top-[100px] landscape:md:top-[-20px] left-0 w-full h-[100vh]",translateY:[-40,40],style:{backgroundImage:"url(/assets/img/webp/portfolio-bg2.webp)"}}),(0,o.jsx)(t.Z,{className:"h-full relative",children:(0,o.jsx)(s.Z,{className:"justify-center h-[300px] sm:h-[250px]",children:(0,o.jsxs)(i.Z,{xl:6,lg:6,md:8,className:"text-center flex justify-center flex-col font-serif",children:[(0,o.jsx)("h1",{className:"text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] mb-[15px] inline-block text-xmd leading-[20px]",children:"Blog Clean"}),(0,o.jsx)("h2",{className:"text-darkgray font-medium -tracking-[1px] mb-0",children:"Attractive articles updated daily"})]})})})]}),(0,o.jsx)("section",{className:"overflow-hidden relative px-[11%] xl:px-[2%] pb-[130px] bg-lightgray lg:px-0 lg:pb-[90px] md:pb-[75px] md:pt-0 sm:pb-[50px]",children:(0,o.jsx)(t.Z,{fluid:!0,children:(0,o.jsx)(s.Z,{children:(0,o.jsx)(i.Z,{className:"md:px-0",children:(0,o.jsx)(c.Z,{filterData:n.ws,overlay:["#0039e3","#4132e0","#5e28dd","#741bd9","#8600d4"],pagination:!0,grid:"grid grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large",data:d.slice(0,12)})})})})})]})},47022:(e,a,l)=>{l.d(a,{Z:()=>o});var t=l(41418),s=l.n(t),i=l(72791),r=l(10162),c=l(80184);const n=i.forwardRef(((e,a)=>{let{bsPrefix:l,fluid:t=!1,as:i="div",className:n,...o}=e;const d=(0,r.vE)(l,"container"),m="string"===typeof t?"-".concat(t):"-fluid";return(0,c.jsx)(i,{ref:a,...o,className:s()(n,t?"".concat(d).concat(m):d)})}));n.displayName="Container";const o=n},89743:(e,a,l)=>{l.d(a,{Z:()=>o});var t=l(41418),s=l.n(t),i=l(72791),r=l(10162),c=l(80184);const n=i.forwardRef(((e,a)=>{let{bsPrefix:l,className:t,as:i="div",...n}=e;const o=(0,r.vE)(l,"row"),d=(0,r.pi)(),m=(0,r.zG)(),x="".concat(o,"-cols"),p=[];return d.forEach((e=>{const a=n[e];let l;delete n[e],null!=a&&"object"===typeof a?({cols:l}=a):l=a;const t=e!==m?"-".concat(e):"";null!=l&&p.push("".concat(x).concat(t,"-").concat(l))})),(0,c.jsx)(i,{ref:a,...n,className:s()(t,o,...p)})}));n.displayName="Row";const o=n},92199:(e,a,l)=>{l.d(a,{L:()=>s});var t=l(72791),s=l(26219).j?t.useLayoutEffect:t.useEffect}}]);
//# sourceMappingURL=8120.d8b114b3.chunk.js.map