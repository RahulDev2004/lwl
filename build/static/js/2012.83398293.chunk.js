"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[2012],{97620:(e,s,a)=>{a.d(s,{Z:()=>o});var t=a(72791),r=a(58563),i=a(51496),l=a(80184);const n=e=>(0,l.jsxs)("div",{className:"relative",children:[(0,l.jsx)(r.tq,{slidesPerView:4,modules:[i.W_,i.tl,i.pt,i.N1],className:"".concat(e.className," instagram-posts"),...e.carouselOption,children:e.data&&e.data.slice(0,e.total_posts).map(((e,s)=>(0,l.jsx)(r.o5,{children:(0,l.jsx)("figure",{className:"relative overflow-hidden mb-0 rounded-[3px]",children:(0,l.jsxs)("a",{"aria-label":"instagram",href:e.permalink,target:"_blank",rel:"noreferrer",children:[(0,l.jsx)("img",{src:e.media_url,alt:"",width:"180",height:"180"}),(0,l.jsx)("i",{className:"fab fa-instagram"})]})})},s)))}),e.title&&(0,l.jsx)("div",{className:"instagram-title whitespace-nowrap font-serif absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 py-[15px] px-9 bg-white text-darkgray rounded-[2px] font-medium text-md tracking-[1px] uppercase",children:e.title})]});n.defaultProps={total_posts:8};const c=(0,t.memo)(n),d=e=>{const s=(0,t.useRef)(null),[r,i]=(0,t.useState)(!0),[n,d]=(0,t.useState)("");return(0,t.useEffect)((()=>{(async()=>{const e=await fetch("https://graph.instagram.com/me/media?fields=id,media_type,media_url,timestamp,permalink,comments_count,like_count&access_token=".concat({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_INSTA_API_KEY)),s=await e.json(),a=await s.data;d(a)})()}),[]),(0,t.useEffect)((()=>{null!==n&&null!==s.current&&Promise.resolve().then(a.bind(a,38480)).then((e=>{e.initializeIsotop(s.current).on("arrangeComplete",(()=>i(!1)))}))}),[n]),!0!==e.carousel?(0,l.jsx)("div",{className:"grid-wrapper",children:(0,l.jsxs)("ul",{ref:s,className:"grid-container".concat(e.grid?" ".concat(e.grid):"").concat(r?" loading":""," instagram-posts"),children:[(0,l.jsx)("li",{className:"grid-sizer"}),n&&n.slice(0,e.total_posts).map(((e,s)=>(0,l.jsx)("li",{className:"grid-item",children:(0,l.jsx)("figure",{className:"relative overflow-hidden rounded-[3px]",children:(0,l.jsxs)("a",{"aria-label":"instagram",href:e.permalink,target:"_blank",rel:"noreferrer",children:[(0,l.jsx)("img",{className:"w-full",src:e.media_url,alt:"",width:179,height:179}),(0,l.jsx)("span",{className:"insta-counts",children:(0,l.jsx)("i",{className:"fab fa-instagram"})})]})})},s)))]})}):(0,l.jsx)(c,{data:n,...e})};d.defaultProps={theme:"instagram-style-01",total_posts:6};const o=(0,t.memo)(d)},25629:(e,s,a)=>{a.r(s),a.d(s,{default:()=>m});a(72791);var t=a(47022),r=a(89743),i=a(2677),l=a(34290),n=a(11087),c=a(21240),d=a(97620),o=a(80184);const m=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("section",{className:"bg-darkgray py-[25px]",children:(0,o.jsx)(t.Z,{children:(0,o.jsxs)(r.Z,{className:"items-center justify-center mb-0",children:[(0,o.jsx)(i.Z,{xl:8,lg:6,children:(0,o.jsx)("h1",{className:"font-serif text-white font-medium mb-0 md:text-center text-lg",children:"Instagram"})}),(0,o.jsx)(i.Z,{xl:4,lg:6,className:"breadcrumb justify-end text-xs font-serif md:mt-[10px] mb-0 md:justify-center",children:(0,o.jsxs)("ul",{className:"xs-text-center",children:[(0,o.jsx)("li",{children:(0,o.jsx)(n.rU,{to:"/","aria-label":"breadcrumb",className:"hover:text-white",children:"Home"})}),(0,o.jsx)("li",{children:(0,o.jsx)(n.rU,{to:"#","aria-label":"breadcrumb",onClick:e=>e.preventDefault(),className:"hover:text-white",children:"Elements"})}),(0,o.jsx)("li",{children:"Instagram"})]})})]})})}),(0,o.jsx)(l.m.section,{className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",...c.Ji,children:(0,o.jsxs)(t.Z,{children:[(0,o.jsx)(r.Z,{className:"justify-center",children:(0,o.jsx)(i.Z,{md:12,className:"text-center mb-[7%]",children:(0,o.jsx)("h6",{className:"font-serif text-darkgray font-medium",children:"Instagram style 01"})})}),(0,o.jsx)(r.Z,{className:"justify-center",children:(0,o.jsx)(i.Z,{md:12,children:(0,o.jsx)(d.Z,{carousel:!0,carouselOption:{loop:!0,slidesPerView:2,spaceBetween:15,autoplay:{delay:3500,disableOnInteraction:!1},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{1200:{slidesPerView:6},992:{slidesPerView:3},768:{slidesPerView:3}}},total_posts:8,title:"#instagram decor",grid:"",animation:c.Ji})})})]})}),(0,o.jsx)(l.m.section,{className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] bg-lightgray",...c.Ji,children:(0,o.jsxs)(t.Z,{children:[(0,o.jsx)("h6",{className:"font-serif text-gray-900 text-center font-medium mb-24",children:"Instagram style 02"}),(0,o.jsx)(r.Z,{className:"justify-center",children:(0,o.jsx)(i.Z,{md:8,className:"xs:px-0",children:(0,o.jsx)(d.Z,{total_posts:6,grid:"grid grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large",animation:c.Ji})})})]})})]})},47022:(e,s,a)=>{a.d(s,{Z:()=>d});var t=a(41418),r=a.n(t),i=a(72791),l=a(10162),n=a(80184);const c=i.forwardRef(((e,s)=>{let{bsPrefix:a,fluid:t=!1,as:i="div",className:c,...d}=e;const o=(0,l.vE)(a,"container"),m="string"===typeof t?"-".concat(t):"-fluid";return(0,n.jsx)(i,{ref:s,...d,className:r()(c,t?"".concat(o).concat(m):o)})}));c.displayName="Container";const d=c},92199:(e,s,a)=>{a.d(s,{L:()=>r});var t=a(72791),r=a(26219).j?t.useLayoutEffect:t.useEffect}}]);
//# sourceMappingURL=2012.83398293.chunk.js.map