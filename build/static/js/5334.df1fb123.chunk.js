"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[5334,3739],{43739:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});var i=s(72791),a=s(11087),r=s(43360),l=s(80184);const o=e=>{const t=e.themeColor&&e.themeColor[0],s=e.themeColor&&e.themeColor[1],i=e.color&&e.color[0],o=e.color&&e.color[1],c={"--gradient-color":"object"===typeof e.themeColor?"linear-gradient(45deg, ".concat(t,", ").concat(s,", ").concat(t,")"):e.themeColor,"--brand-color":"object"===typeof e.themeColor?"linear-gradient(to right, ".concat(t,", ").concat(s,", ").concat(t,")"):e.themeColor,"--text-color":"object"===typeof e.color?"linear-gradient(to right, ".concat(i,", ").concat(o,", ").concat(i,")"):e.color};return e.href||"submit"===e.type?(0,l.jsx)(r.Z,{as:e.href?"a":"submit"===e.type?"button":"a",type:"submit"===e.type?"submit":void 0,style:c,className:"border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""),href:e.href,onClick:e.onClick,disabled:e.disabled,variant:"secondary","aria-label":e.ariaLabel,target:e.target,children:(0,l.jsx)(n,{...e})}):(0,l.jsx)(a.rU,{style:c,target:e.target,className:"btn border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""," "),to:e.to?e.to:"#",onClick:e.onClick,"aria-label":e.ariaLabel,children:(0,l.jsx)(n,{...e})})},n=e=>(0,l.jsxs)(l.Fragment,{children:[e.icon&&"after"!==e.iconPosition&&(0,l.jsx)("i",{className:"".concat(e.icon," left-icon")}),e.title,e.icon&&"after"===e.iconPosition&&(0,l.jsx)("i",{className:"".concat(e.icon," right-icon")}),"btn-link-gradient"===e.theme&&(0,l.jsx)("span",{})]});o.defaultProps={size:"lg",style:"primary"};const c=(0,i.memo)(o)},47952:(e,t,s)=>{s.d(t,{Z:()=>m});var i=s(72791),a=s(11087),r=s(89743),l=s(34290),o=s(82307),n=s(80184);const c=e=>(0,n.jsx)(r.Z,{className:e.grid,children:e.data.map(((t,s)=>(0,n.jsx)(l.m.div,{className:"col px-[15px]".concat(e.className?" ".concat(e.className):""),...e.animation,transition:{delay:s*e.animationDelay},children:(0,n.jsxs)("div",{className:e.theme,children:[(0,n.jsxs)("div",{className:"img-wrapper",children:["service-style-05"===e.theme&&(0,n.jsxs)("span",{className:"text-xmd",children:[s+1>=10?"":"0",s+1]}),t.img&&(0,n.jsx)("img",{height:238,width:360,className:"w-full max-w-full align-middle",src:t.img,alt:"service-style-5"}),"service-style-01"===e.theme&&(0,n.jsx)("div",{className:"services-box-hover",children:(t.icon||t.link)&&(0,n.jsx)(a.rU,{"aria-label":"services",to:t.link?t.link:"#",children:(0,n.jsx)("i",{className:t.icon})})})]}),(0,n.jsxs)("div",{className:"service-style",children:["service-style-03"===e.theme&&(0,n.jsx)("span",{className:"verticalline"}),t.title&&(0,n.jsx)("span",{className:"title font-medium text-darkgray block font-serif mb-[10px]",children:t.title}),t.content&&(0,n.jsx)("p",{children:t.content}),("service-style-02"===e.theme||"service-style-05"===e.theme)&&(0,n.jsx)("div",{className:"info-service",children:(t.linkTitle||t.icon)&&(0,n.jsxs)(a.rU,{"aria-label":"services",to:t.link?t.link:"#",className:"no-underline font-serif font-medium text-gray-900 text-sm uppercase block",children:[t.linkTitle,(0,n.jsx)("i",{className:t.icon})]})})]})]})},s)))});c.defaultProps={data:o.pq,theme:"service-style-01",animationDelay:.2};const m=(0,i.memo)(c)},82307:(e,t,s)=>{s.d(t,{N2:()=>o,Qs:()=>a,ZI:()=>r,_R:()=>l,dT:()=>c,pq:()=>i,q_:()=>n});const i=[{img:"https://via.placeholder.com/800x618",icon:"fas fa-arrow-right",title:"FINANCE SERVICES",content:"Lorem ipsum consectetur adipiscing elit do eiusmod tempor incididunt.",link:"/page/our-story"},{img:"https://via.placeholder.com/800x618",icon:"fas fa-arrow-right",title:"BUSINESS PLANNING",content:"Lorem ipsum consectetur adipiscing elit do eiusmod tempor incididunt.",link:"/page/our-story"},{img:"https://via.placeholder.com/800x618",icon:"fas fa-arrow-right",title:"MARKETING STRATEGY",content:"Lorem ipsum consectetur adipiscing elit do eiusmod tempor incididunt.",link:"/page/our-story"}],a=[{img:"https://via.placeholder.com/800x548",icon:"ti-arrow-right",title:"Professional liability",content:"Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod incididunt.",linkTitle:"More info",link:"/page/what-we-offer"},{img:"https://via.placeholder.com/800x548",icon:"ti-arrow-right",title:"Dedicated to our clients",content:"Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod incididunt.",linkTitle:"More info",link:"/page/what-we-offer"},{img:"https://via.placeholder.com/800x548",icon:"ti-arrow-right",title:"Outstanding services",content:"Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod incididunt.",linkTitle:"More info",link:"/page/what-we-offer"}],r=[{img:"https://via.placeholder.com/800x560",title:"Real time analytics",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"},{img:"https://via.placeholder.com/800x560",title:"Google advertising",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"},{img:"https://via.placeholder.com/800x560",title:"Pixel perfect design",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"}],l=[{img:"https://via.placeholder.com/197x197",title:"CONSTRUCTION",content:"Lorem elit simply dummy text and typesetting."},{img:"https://via.placeholder.com/197x197",title:"ENTERTAINMENT",content:"Lorem elit simply dummy text and typesetting."},{img:"https://via.placeholder.com/197x197",title:"CROCKERY",content:"Lorem elit simply dummy text and typesetting."},{img:"https://via.placeholder.com/197x197",title:"AGRICULTURE",content:"Lorem elit simply dummy text and typesetting."},{img:"https://via.placeholder.com/197x197",title:"RETAILERS",content:"Lorem elit simply dummy text and typesetting."},{img:"https://via.placeholder.com/197x197",title:"PHARMACEUTICAL",content:"Lorem elit simply dummy text and typesetting."}],o=[{title:"Developing strategy",icon:"feather-arrow-right",content:"Lorem ipsum is simply dummy text of the printing typesetting lorem ipsum been dummy text.",link:"/page/about-me",linkTitle:"More Info"},{title:"Blazing performance",icon:"feather-arrow-right",content:"Lorem ipsum is simply dummy text of the printing typesetting lorem ipsum been dummy text.",link:"/page/about-me",linkTitle:"More Info"},{title:"Customer satisfaction",icon:"feather-arrow-right",content:"Lorem ipsum is simply dummy text of the printing typesetting lorem ipsum been dummy text.",link:"/page/about-me",linkTitle:"More Info"}],n=[{img:"https://via.placeholder.com/337x337",title:"Daily healthy tips",content:"Lorem dolor amet consectetur adipiscing eiusmod tempor"},{img:"https://via.placeholder.com/337x337",title:"Professional trainers",content:"Lorem dolor amet consectetur adipiscing eiusmod tempor"},{img:"https://via.placeholder.com/337x337",title:"Physical activity",content:"Lorem dolor amet consectetur adipiscing eiusmod tempor"},{img:"https://via.placeholder.com/337x337",title:"Natural environment",content:"Lorem dolor amet consectetur adipiscing eiusmod tempor"}],c=[{img:"https://via.placeholder.com/600x625",title:"Cardio",content:"Lorem ipsum dolor amet consectetur adipiscing eiusmod tempor.",btnName:"Join classes",btnLink:"#"},{img:"https://via.placeholder.com/600x625",title:"Crossfit",content:"Lorem ipsum dolor amet consectetur adipiscing eiusmod tempor.",btnName:"Join classes",btnLink:"#"},{img:"https://via.placeholder.com/600x625",title:"Sculpturing",content:"Lorem ipsum dolor amet consectetur adipiscing eiusmod tempor.",btnName:"Join classes",btnLink:"#"},{img:"https://via.placeholder.com/600x625",title:"Cycling",content:"Lorem ipsum dolor amet consectetur adipiscing eiusmod tempor.",btnName:"Join classes",btnLink:"#"}]},70075:(e,t,s)=>{s.r(t),s.d(t,{default:()=>y});var i=s(72791),a=s(47022),r=s(89743),l=s(2677),o=s(34290),n=s(11087),c=s(21240),m=s(47952),d=s(58563),p=s(51496),x=s(43739),h=s(82307),u=s(80184);const g=e=>{const t=i.useRef(null);return(0,u.jsxs)("div",{className:"".concat(e.className?"".concat(e.className):""," relative"),children:[(0,u.jsx)("div",{onClick:()=>t.current.swiper.slidePrev(),className:"btn-slider-next absolute top-1/2 left-[-85px] -translate-y-1/2  rounded-full flex justify-center items-center text-darkgray shadow-[0_0_15px_rgba(0,0,0,0.1)] bg-[#fff] right-inherit h-[40px] w-[40px] hover:bg-darkgray hover:text-[#fff] transition-default cursor-pointer xl:left-[-11px] xl:z-[2] xs:-left-[15px]",children:(0,u.jsx)("i",{className:"feather-arrow-left text-xmd"})}),(0,u.jsx)(d.tq,{...e.carouselOption,className:"h-full black-move",ref:t,modules:[p.tl,p.pt,p.N1,p.W_],children:e.data.map(((e,t)=>(0,u.jsx)(d.o5,{children:(0,u.jsxs)(r.Z,{className:"m-0 h-full",children:[(0,u.jsx)(l.Z,{sm:6,className:"col-12 bg-cover xs:h-[200px] bg-no-repeat overflow-hidden relative bg-center ",style:{backgroundImage:"url(".concat(e.img,")")}}),(0,u.jsx)(l.Z,{sm:6,className:"col-12 flex p-16 bg-white lg:p-10 xs:p-16",children:(0,u.jsxs)("div",{className:"self-center",children:[(0,u.jsxs)("span",{className:"font-serif font-medium uppercase text-[#262b35] mb-[10px] block",children:[" ",e.title," "]}),(0,u.jsxs)("p",{className:"mb-[25px] xs:mb-[15px]",children:[" ",e.content]}),(0,u.jsx)(x.default,{ariaLabel:"Join classes",to:e.btnLink,className:"btn-fill btn-fancy font-medium font-serif rounded-none uppercase",themeColor:"#262b35",color:"#fff",size:"xs",title:e.btnName})]})})]})},t)))}),(0,u.jsx)("div",{onClick:()=>t.current.swiper.slideNext(),className:"btn-slider-prev absolute top-1/2 right-[-85px] -translate-y-1/2 bg-[#fff] rounded-full flex justify-center items-center text-darkgray right-inherit h-[40px] w-[40px] hover:bg-darkgray hover:text-[#fff] transition-default shadow-[0_0_15px_rgba(0,0,0,0.1)] ml-[10px] cursor-pointer xl:right-[-11px] xl:z-[2] xs:-right-[15px]",children:(0,u.jsx)("i",{className:"feather-arrow-right text-xmd"})})]})};g.defaultProps={data:h.dT};const f=(0,i.memo)(g),y=()=>(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("section",{className:"bg-darkgray py-[25px]",children:(0,u.jsx)(a.Z,{children:(0,u.jsxs)(r.Z,{className:"items-center justify-center mb-0",children:[(0,u.jsx)(l.Z,{xl:8,lg:6,children:(0,u.jsx)("h1",{className:"font-serif text-white font-medium mb-0 md:text-center text-lg",children:"Services"})}),(0,u.jsx)(l.Z,{xl:4,lg:6,className:"breadcrumb justify-end text-xs font-serif md:mt-[10px] mb-0 md:justify-center",children:(0,u.jsxs)("ul",{className:"xs-text-center",children:[(0,u.jsx)("li",{children:(0,u.jsx)(n.rU,{to:"/","aria-label":"breadcrumb",className:"hover:text-white",children:"Home"})}),(0,u.jsx)("li",{children:(0,u.jsx)(n.rU,{to:"#","aria-label":"breadcrumb",onClick:e=>e.preventDefault(),className:"hover:text-white",children:"Elements"})}),(0,u.jsx)("li",{children:"Services"})]})})]})})}),(0,u.jsx)(o.m.section,{className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",...c.Ji,children:(0,u.jsxs)(a.Z,{children:[(0,u.jsx)(r.Z,{className:"justify-center",children:(0,u.jsx)(l.Z,{md:12,className:"text-center mb-[6%]",children:(0,u.jsx)("h6",{className:"font-serif text-darkgray font-medium",children:"Services style 01"})})}),(0,u.jsx)(m.Z,{grid:"row-cols-1 row-cols-lg-3 row-cols-sm-2 gap-y-10 justify-center text-center",theme:"service-style-01",className:"",data:h.pq,animation:c.Ji})]})}),(0,u.jsx)(o.m.section,{className:"bg-lightgray py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",...c.Ji,children:(0,u.jsxs)(a.Z,{children:[(0,u.jsx)(r.Z,{className:"justify-center",children:(0,u.jsx)(l.Z,{md:12,className:"text-center mb-[7%]",children:(0,u.jsx)("h6",{className:"font-serif text-darkgray font-medium",children:"Services style 02"})})}),(0,u.jsx)(m.Z,{grid:"row-cols-1 row-cols-lg-3 row-cols-md-2 gap-y-10 justify-center",theme:"service-style-02",className:"",data:h.Qs,animation:c.Ji})]})}),(0,u.jsx)(o.m.section,{className:"bg-darkgray py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",...c.Ji,children:(0,u.jsxs)(a.Z,{children:[(0,u.jsx)(r.Z,{className:"justify-center",children:(0,u.jsx)(l.Z,{md:12,className:"text-center mb-[7%]",children:(0,u.jsx)("h6",{className:"font-serif text-white font-medium",children:"Services style 03"})})}),(0,u.jsx)(m.Z,{grid:"row-cols-1 row-cols-lg-3 row-cols-md-2 gap-y-10 justify-center",theme:"service-style-03",className:"",data:h.ZI,animation:c.Ji})]})}),(0,u.jsx)(o.m.section,{className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:pt-[50px] xs:pb-0",...c.Ji,children:(0,u.jsxs)(a.Z,{children:[(0,u.jsx)(r.Z,{className:"justify-center",children:(0,u.jsx)(l.Z,{md:12,className:"text-center mb-[6%]",children:(0,u.jsx)("h6",{className:"font-serif text-darkgray font-medium",children:"Services style 04"})})}),(0,u.jsx)(m.Z,{grid:"row-cols-1 row-cols-lg-3 row-cols-sm-2 gap-y-24 md:gap-y-[4rem] justify-center",theme:"service-style-04",className:"",data:h._R,animation:c.Ji})]})}),(0,u.jsx)(o.m.section,{className:"bg-lightgray border-t py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",...c.Ji,children:(0,u.jsxs)(a.Z,{children:[(0,u.jsx)(r.Z,{className:"justify-center",children:(0,u.jsx)(l.Z,{md:12,className:"text-center mb-[7%]",children:(0,u.jsx)("h6",{className:"font-serif text-darkgray font-medium",children:"Services style 05"})})}),(0,u.jsx)(r.Z,{className:"justify-center",children:(0,u.jsx)(l.Z,{lg:12,md:11,xs:12,className:"md:px-0",children:(0,u.jsx)(m.Z,{grid:"row-cols-lg-3 row-cols-1 md:my-0 md:mx-auto gap-y-10 justify-center",theme:"service-style-05",className:"col-md-10",data:h.N2,animation:c.Ji})})})]})}),(0,u.jsx)(o.m.section,{className:"py-[160px] overflow-hidden lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",...c.Ji,children:(0,u.jsxs)(a.Z,{children:[(0,u.jsx)(r.Z,{className:"justify-center",children:(0,u.jsx)(l.Z,{md:12,className:"text-center mb-[5%]",children:(0,u.jsx)("h6",{className:"font-serif text-darkgray font-medium",children:"Services style 06"})})}),(0,u.jsx)(r.Z,{className:"justify-center",children:(0,u.jsx)(l.Z,{lg:12,md:11,xs:12,className:"md:px-0",children:(0,u.jsx)(m.Z,{grid:"row row-cols-1 row-cols-lg-4 row-cols-sm-2 gap-y-[40px] justify-center",theme:"service-style-06",data:h.q_,animation:c.Ji})})})]})}),(0,u.jsx)(o.m.section,{className:"bg-darkslateblue py-[160px] relative overflow-hidden lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",children:(0,u.jsxs)(a.Z,{children:[(0,u.jsx)(r.Z,{className:"justify-center",children:(0,u.jsx)(l.Z,{md:12,className:"text-center mb-[7%]",children:(0,u.jsx)("h6",{className:"font-serif text-white font-medium",children:"Services style 07"})})}),(0,u.jsx)(r.Z,{className:"justify-center",children:(0,u.jsx)(l.Z,{lg:12,md:9,xs:12,className:"md:px-0 xs:!px-[15px]",children:(0,u.jsx)(f,{className:"",data:h.dT,carouselOption:{spaceBetween:30,slidesPerView:1,observer:!0,observeParents:!0,loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{992:{slidesPerView:2}}}})})})]})})]})},15341:(e,t,s)=>{s.d(t,{FT:()=>l,ZP:()=>n});var i=s(72791),a=s(80184);const r=["as","disabled"];function l(e){let{tagName:t,disabled:s,href:i,target:a,rel:r,role:l,onClick:o,tabIndex:n=0,type:c}=e;t||(t=null!=i||null!=a||null!=r?"a":"button");const m={tagName:t};if("button"===t)return[{type:c||"button",disabled:s},m];const d=e=>{(s||"a"===t&&function(e){return!e||"#"===e.trim()}(i))&&e.preventDefault(),s?e.stopPropagation():null==o||o(e)};return"a"===t&&(i||(i="#"),s&&(i=void 0)),[{role:null!=l?l:"button",disabled:void 0,tabIndex:s?void 0:n,href:i,target:"a"===t?a:void 0,"aria-disabled":s||void 0,rel:"a"===t?r:void 0,onClick:d,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),d(e))}},m]}const o=i.forwardRef(((e,t)=>{let{as:s,disabled:i}=e,o=function(e,t){if(null==e)return{};var s,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)s=r[i],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,r);const[n,{tagName:c}]=l(Object.assign({tagName:s,disabled:i},o));return(0,a.jsx)(c,Object.assign({},o,n,{ref:t}))}));o.displayName="Button";const n=o},43360:(e,t,s)=>{s.d(t,{Z:()=>m});var i=s(41418),a=s.n(i),r=s(72791),l=s(15341),o=s(10162),n=s(80184);const c=r.forwardRef(((e,t)=>{let{as:s,bsPrefix:i,variant:r="primary",size:c,active:m=!1,disabled:d=!1,className:p,...x}=e;const h=(0,o.vE)(i,"btn"),[u,{tagName:g}]=(0,l.FT)({tagName:s,disabled:d,...x}),f=g;return(0,n.jsx)(f,{...u,...x,ref:t,disabled:d,className:a()(p,h,m&&"active",r&&"".concat(h,"-").concat(r),c&&"".concat(h,"-").concat(c),x.href&&d&&"disabled")})}));c.displayName="Button";const m=c},47022:(e,t,s)=>{s.d(t,{Z:()=>c});var i=s(41418),a=s.n(i),r=s(72791),l=s(10162),o=s(80184);const n=r.forwardRef(((e,t)=>{let{bsPrefix:s,fluid:i=!1,as:r="div",className:n,...c}=e;const m=(0,l.vE)(s,"container"),d="string"===typeof i?"-".concat(i):"-fluid";return(0,o.jsx)(r,{ref:t,...c,className:a()(n,i?"".concat(m).concat(d):m)})}));n.displayName="Container";const c=n},92199:(e,t,s)=>{s.d(t,{L:()=>a});var i=s(72791),a=s(26219).j?i.useLayoutEffect:i.useEffect}}]);
//# sourceMappingURL=5334.df1fb123.chunk.js.map