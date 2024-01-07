"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[4576],{6117:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(72791),s=a(34290),i=a(80184);const r=e=>(0,i.jsxs)(s.m.blockquote,{className:"".concat(e.theme).concat(e.className?" ".concat(e.className):""),...e.animation,children:[e.icon&&(0,i.jsx)("i",{className:e.icon}),e.title&&(0,i.jsx)("h6",{children:e.title}),e.author&&(0,i.jsx)("span",{className:"text-basecolor",children:e.author})]});r.defaultProps={author:"",theme:"blockquote-style-01",title:"",icon:""};const o=(0,l.memo)(r)},8219:(e,t,a)=>{a.d(t,{Z:()=>n});a(72791);var l=a(11087),s=a(34290),i=a(21240),r=a(43739),o=a(19630),c=a(80184);const n=e=>{let{authorId:t,className:a}=e;const n=o.tY.filter((e=>e.id===t))[0];return n&&(0,c.jsxs)(s.m.div,{...i.Ji,className:"flex justify-center items-center w-full shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-[5px] p-16 sm:block".concat(a?" ".concat(a):""),children:[(0,c.jsxs)("div",{className:"w-[130px] mr-[60px] sm:mx-auto text-center",children:[(0,c.jsx)("img",{width:"",height:"",src:n.img,className:"rounded-full w-[110px] mx-auto",alt:n.name}),(0,c.jsx)(l.rU,{"aria-label":"link",to:"/blogs/author/".concat(t),className:"text-darkgray font-serif font-medium mt-[20px] block text-md hover:text-fastblue",children:n.name}),(0,c.jsx)("span",{className:"text-medium block leading-[18px] sm:mb-[25px]",children:n.designation})]}),(0,c.jsxs)("div",{className:"w-[75%] md:text-start sm:w-full sm:text-center",children:[(0,c.jsx)("p",{className:"mb-[25px]",children:n.description}),(0,c.jsx)(r.default,{ariaLabel:"authorbox",to:"/blogs/author/".concat(t),className:"font-medium font-serif after:h-[2px] after:bg-black hover:text-black uppercase btn-link md:mb-[15px]",size:"md",color:"#232323",title:"All author posts"})]})]})}},79629:(e,t,a)=>{a.d(t,{Z:()=>g});a(72791);var l=a(92506),s=a(81724),i=a(57689),r=a(11087),o=a(34290),c=a(52101),n=a(29213),m=a(17728),d=a(19630),x=a(21240),p=a(80184);const h=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"}],g=e=>{const t=(0,i.s0)();return(0,p.jsxs)("aside",{className:"col-12 col-xl-3 offset-xl-1 col-lg-4 col-md-7 md:pl-[15px]",children:[(0,p.jsxs)("div",{className:"inline-block w-full mb-20",children:[(0,p.jsx)("span",{className:"mb-[25px] font-medium text-darkgray text-lg font-serif block",children:"Search posts"}),(0,p.jsx)("div",{className:"relative",children:(0,p.jsx)(l.J9,{initialValues:{search:""},validationSchema:s.Ry().shape({search:s.Z_().required("Field is required.")}),onSubmit:async(e,a)=>{await new Promise((e=>setTimeout(e,500))),a.resetForm(),t("/page/search-result",{state:{search:e}})},children:e=>{let{isSubmitting:t,status:a}=e;return(0,p.jsx)("div",{className:"relative",children:(0,p.jsxs)(l.l0,{className:"relative",children:[(0,p.jsx)(m.II,{showErrorMsg:!1,type:"text",name:"search",className:"border-[1px] py-[15px] px-[20px] w-full rounded-[5px] border-solidborder-transparent",placeholder:"Enter your keyword..."}),(0,p.jsx)("button",{type:"submit",className:"text-xs tracking-[1px] text-fastblue py-[15px] !absolute top-[8%] right-0 px-[20px] uppercase".concat(t?" loading":""),children:(0,p.jsx)("i",{className:"feather-search"})})]})})}})})]}),(0,p.jsxs)("div",{className:"p-[38px] mb-20 rounded-[4px] border-mediumgray border text-center",children:[d.tY&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.rU,{"aria-label":"link",to:"#",children:(0,p.jsx)("img",{height:"",width:"",src:d.tY.filter((t=>t.id===e.data[0].author))[0].img,alt:d.tY.filter((t=>t.id===e.data[0].author))[0].name,className:"mb-[5px] rounded-[50%] block mx-auto w-[100px]"})}),(0,p.jsx)(r.rU,{"aria-label":"link",to:"#",className:"mt-[20px] font-medium text-darkgray text-md font-serif inline-block",children:d.tY.filter((t=>t.id===e.data[0].author))[0].name})]}),(0,p.jsx)("span",{className:"mb-[20px] leading-[18px] text-[14px] block",children:"Co-founder"}),(0,p.jsx)("p",{className:"mb-[25px]",children:"Lorem ipsum is simply dummy text of the printing and industry lorem ipsum has been standard."}),(0,p.jsx)(n.default,{theme:"social-icon-style-01",size:"xs",iconColor:"dark",data:h.slice(0,4)})]}),(0,p.jsxs)("div",{className:"mb-20 xs:mb-[35px]",children:[(0,p.jsx)(o.m.span,{className:"mb-[35px] font-medium font-serif text-darkgray text-lg block",...x.Ji,children:"Categories"}),(0,p.jsxs)(o.m.ul,{className:"pl-0",...x.Ji,children:[(0,p.jsxs)("li",{className:"relative inline-block w-full mb-[15px] leading-[18px]",children:[(0,p.jsx)(r.rU,{"aria-label":"link",to:"/blogs/blog-grid",className:"inline-block text-left",children:"Entertainment"}),(0,p.jsx)("span",{className:"text-[14px] absolute top-[1px] right-0 text-right",children:"10"})]}),(0,p.jsxs)("li",{className:"relative inline-block w-full mb-[15px] leading-[18px]",children:[(0,p.jsx)(r.rU,{"aria-label":"link",to:"/blogs/blog-grid",className:"inline-block text-left",children:"Business"}),(0,p.jsx)("span",{className:"text-[14px] absolute top-[1px] right-0 text-right",children:"05"})]}),(0,p.jsxs)("li",{className:"relative inline-block w-full mb-[15px] leading-[18px]",children:[(0,p.jsx)(r.rU,{"aria-label":"link",to:"/blogs/blog-grid",className:"inline-block text-left",children:"Creative"}),(0,p.jsx)("span",{className:"text-[14px] absolute top-[1px] right-0 text-right",children:"03"})]}),(0,p.jsxs)("li",{className:"relative inline-block w-full mb-[15px] leading-[18px]",children:[(0,p.jsx)(r.rU,{"aria-label":"link",to:"/blogs/blog-grid",className:"inline-block text-left",children:"Lifestyle"}),(0,p.jsx)("span",{className:"text-[14px] absolute top-[1px] right-0 text-right",children:"02"})]}),(0,p.jsxs)("li",{className:"relative inline-block w-full mb-[15px] leading-[18px]",children:[(0,p.jsx)(r.rU,{"aria-label":"link",to:"/blogs/blog-grid",className:"inline-block text-left",children:"Fashion"}),(0,p.jsx)("span",{className:"text-[14px] absolute top-[1px] right-0 text-right",children:"19"})]}),(0,p.jsxs)("li",{className:"relative inline-block w-full leading-[18px] mb-0",children:[(0,p.jsx)(r.rU,{"aria-label":"link",to:"/blogs/blog-grid",className:"inline-block text-left",children:"Design"}),(0,p.jsx)("span",{className:"text-[14px] absolute top-[1px] right-0 text-right",children:"21"})]})]})]}),(0,p.jsxs)("div",{className:"mb-20 xs:mb-[35px]",children:[(0,p.jsx)("span",{className:"mb-[35px] font-medium font-serif text-darkgray text-lg block",children:"Recent posts"}),(0,p.jsxs)("ul",{children:[(0,p.jsxs)(o.m.li,{className:"flex mb-[45px]",...x.Ji,transition:{delay:.2},children:[(0,p.jsx)("figure",{className:"h-[65px] w-[80px] m-0 shrink-0\t",children:(0,p.jsx)(r.rU,{"aria-label":"link",to:"/blogs/blog-post-layout-01",children:(0,p.jsx)("img",{height:"",width:"",src:"https://via.placeholder.com/940x940",alt:"",className:"rounded-[3px]"})})}),(0,p.jsxs)("div",{className:"leading-normal pl-[30px] relative top-[-3px] grow",children:[(0,p.jsx)(r.rU,{"aria-label":"link",to:"/blogs/blog-post-layout-01",className:"mb-[5px] sm:mb-0 font-medium text-darkgray inline-block",children:"Fashion is anything"}),(0,p.jsx)("span",{className:"leading-[22px] text-[14px] block",children:"Lorem ipsum is simply as dummy text of the..."})]})]}),(0,p.jsxs)(o.m.li,{className:"flex mb-[45px]",...x.Ji,transition:{delay:.4},children:[(0,p.jsx)("figure",{className:"h-[65px] w-[80px] m-0 shrink-0\t",children:(0,p.jsx)(r.rU,{"aria-label":"link",to:"/blogs/blog-post-layout-02",children:(0,p.jsx)("img",{height:"",width:"",src:"https://via.placeholder.com/800x800",alt:"",className:"rounded-[3px]"})})}),(0,p.jsxs)("div",{className:"leading-normal pl-[30px] relative top-[-3px] grow",children:[(0,p.jsx)(r.rU,{"aria-label":"link",to:"/blogs/blog-post-layout-02",className:"mb-[5px] sm:mb-0 font-medium text-darkgray inline-block",children:"Design transcends"}),(0,p.jsx)("span",{className:"leading-[22px] text-[14px] block",children:"Lorem ipsum is simply as dummy text of the..."})]})]}),(0,p.jsxs)(o.m.li,{className:"flex mb-[45px]",...x.Ji,transition:{delay:.6},children:[(0,p.jsx)("figure",{className:"h-[65px] w-[80px] m-0 shrink-0\t",children:(0,p.jsx)(r.rU,{"aria-label":"link",to:"/blogs/blog-post-layout-03",children:(0,p.jsx)("img",{src:"https://via.placeholder.com/800x800",alt:"",height:"",width:"",className:"rounded-[3px]"})})}),(0,p.jsxs)("div",{className:"leading-normal pl-[30px] relative top-[-3px] grow",children:[(0,p.jsx)(r.rU,{"aria-label":"link",to:"/blogs/blog-post-layout-03",className:"mb-[5px] sm:mb-0 font-medium text-darkgray inline-block",children:"Never give in except"}),(0,p.jsx)("span",{className:"leading-[22px] text-[14px] block",children:"Lorem ipsum is simply as dummy text of the..."})]})]})]})]}),(0,p.jsxs)(o.m.div,{className:"visible mb-20 md:w-[90%] sm:w-full",...x.Ji,children:[(0,p.jsx)("span",{className:"mb-[35px] font-medium font-serif text-darkgray text-lg block",children:"Tags cloud"}),(0,p.jsx)(r.rU,{"aria-label":"tag",to:"/blogs/blog-grid",className:"inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]",children:"Development"}),(0,p.jsx)(r.rU,{"aria-label":"tag",to:"/blogs/blog-grid",className:"inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]",children:"Mountains"}),(0,p.jsx)(r.rU,{"aria-label":"tag",to:"/blogs/blog-grid",className:"inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]",children:"Lifestyle"}),(0,p.jsx)(r.rU,{"aria-label":"tag",to:"/blogs/blog-grid",className:"inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]",children:"Hotel"}),(0,p.jsx)(r.rU,{"aria-label":"tag",to:"/blogs/blog-grid",className:"inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]",children:"Event"}),(0,p.jsx)(r.rU,{"aria-label":"tag",to:"/blogs/blog-grid",className:"inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]",children:"Multimedia "}),(0,p.jsx)(r.rU,{"aria-label":"tag",to:"/blogs/blog-grid",className:"inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]",children:"Fashion"})]}),(0,p.jsxs)(o.m.div,{...x.Ji,children:[(0,p.jsx)("span",{className:"mb-[35px] font-medium font-serif text-darkgray text-lg block",children:"Instagram"}),(0,p.jsx)(c.default,{})]})]})}},90325:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(72791),s=a(34290),i=a(80184);const r=e=>(0,i.jsx)(s.m.div,{className:"".concat(e.theme," ").concat(e.className," contents"),...e.animation,children:(0,i.jsxs)("p",{className:"contents",children:[(0,i.jsx)("span",{className:"text-basecolor",children:e.content&&e.content.charAt(0)}),e.content&&e.content.slice(1)]})});r.defaultProps={theme:"dropcaps-style01"};const o=(0,l.memo)(r)},8022:(e,t,a)=>{a.d(t,{Z:()=>j});var l=a(72791),s=a(2677),i=a(6596),r=a.n(i),o=a(48559),c=a(34290),n=a(80184);const m=e=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{width:"297",height:"367",className:"w-full max-w-full h-auto",src:e.data.src,alt:"grid"}),(0,n.jsx)("div",{className:"image-box-wrapper absolute w-full h-full left-0 top-0 flex items-center justify-center",children:(0,n.jsx)("i",{className:"feather-zoom-in text-[28px] font-light text-white"})})]}),d=(0,l.memo)(m),x=e=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{width:"300",height:"300",src:e.data.src,alt:"grid"}),(0,n.jsx)("div",{className:"image-box-wrapper absolute w-full h-full left-0 top-0 flex items-center justify-center py-[50px]",children:(0,n.jsx)("i",{className:"feather-zoom-in text-[28px] font-light text-white"})})]}),p=(0,l.memo)(x),h=e=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{width:"297",height:"297",className:"w-full max-w-full h-auto",src:e.data.src,alt:"grid"}),(0,n.jsx)("div",{className:"image-box-wrapper absolute w-full h-full left-0 top-0  flex items-center justify-center py-[50px]",children:(0,n.jsx)("i",{className:"feather-zoom-in  text-[28px] font-light\ttext-white"})})]}),g=(0,l.memo)(h);var b=a(16802);const u=(e,t,a)=>{switch(e.theme){case"image-gallery-01":default:return(0,n.jsx)(d,{data:t});case"image-gallery-02":return(0,n.jsx)(p,{data:t});case"image-gallery-03":return(0,n.jsx)(g,{data:t})}},f=e=>{const[t,a]=(0,l.useState)(!1),[i,m]=(0,l.useState)(0),d=e.overlay&&"object"===typeof e.overlay?"linear-gradient(to top right, ".concat(e.overlay.map(((e,t)=>e)),")"):e.overlay,x=(0,l.useRef)(),p=(0,l.useRef)();return(0,l.useEffect)((()=>{x.current=new(r())(p.current,{itemSelector:".grid-item",layoutMode:"masonry",percentPosition:!0,stagger:0,masonry:{columnWidth:".grid-sizer"}}),setTimeout((()=>{x.current.arrange({filter:"*"})}),1e3)}),[]),(0,n.jsxs)(n.Fragment,{children:[t&&(0,n.jsx)(o.Z,{imageCaption:"".concat(e.data[i].title,"... ").concat(i+1," of ").concat(e.data.length),mainSrc:e.data[i].src,onCloseRequest:()=>a(!1),nextSrc:e.data[(i+1)%e.data.length].src,prevSrc:e.data[(i+e.data.length-1)%e.data.length].src,onMovePrevRequest:()=>m((i+e.data.length-1)%e.data.length),onMoveNextRequest:()=>m((i+1)%e.data.length)}),(0,n.jsx)(s.Z,{children:(0,n.jsxs)("ul",{ref:p,className:"".concat(e.theme," ").concat(e.className?"".concat(e.className):"","grid-container ").concat(e.grid?"".concat(e.grid):""),children:[(0,n.jsx)("li",{className:"grid-sizer"}),e.data.map(((t,l)=>(0,n.jsx)(c.m.li,{...e.animation,transition:{delay:l*e.animationDelay},className:"grid-item".concat(t.double_col?" grid-item-double":""),children:(0,n.jsx)("div",{className:"image-box",style:{background:"image-gallery-03"===e.theme?e.overlay[l]&&e.overlay[l]:d},onClick:()=>(e=>{a(!0),m(e)})(l),children:u(e,t)})},l)))]})})]})};f.defaultProps={data:b.xq,animationDelay:.2};const j=(0,l.memo)(f)},16802:(e,t,a)=>{a.d(t,{KQ:()=>s,wp:()=>i,xq:()=>l});const l=[{src:"https://via.placeholder.com/800x989",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x989",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x989",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x989",title:"Lightbox gallery image title"}],s=[{double_col:!0,src:"https://via.placeholder.com/800x794",title:"Lightbox gallery image title"},{double_col:!0,src:"https://via.placeholder.com/800x387",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x794",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x794",title:"Lightbox gallery image title"}],i=[{src:"https://via.placeholder.com/800x800",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x1200",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x800",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x800",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x1200",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x1200",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x1200",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x800",title:"Lightbox gallery image title"}]},2523:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Z});var l=a(72791),s=a(2677),i=a(29790),r=a(47022),o=a(89743),c=a(57689),n=a(11087),m=a(21240),d=a(8022),x=a(38392),p=a(29213),h=a(59511),g=a(20057),b=a(5104),u=a(6117),f=a(90325),j=a(8219),y=a(49823),N=a(79629),k=a(19630),v=a(80184);const w=[{src:"https://via.placeholder.com/800x650",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x650",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x650",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x650",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x650",title:"Lightbox gallery image title"},{src:"https://via.placeholder.com/800x650",title:"Lightbox gallery image title"}],L=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"}],Z=e=>{const[t,a]=(0,l.useState)(),Z=(0,c.UO)(),{id:_}=Z;return(0,l.useEffect)((()=>{const e=k.qm.filter((e=>e.id===parseInt(_)));a(e)}),[_]),(0,v.jsxs)("div",{style:e.style,children:[(0,v.jsx)(x.default,{topSpace:{desktop:!0},type:"reverse-scroll",className:"border-b border-b-[#0000001a]",children:(0,v.jsxs)(x.HeaderNav,{theme:"white",menu:"light",expand:"lg",fluid:"sm",containerClass:"sm:px-0",className:"py-[0px] md:pr-[15px] md:pl-0 md:py-[20px]",children:[(0,v.jsx)(s.Z,{className:"col-auto col-lg-2 me-auto ps-lg-0",children:(0,v.jsx)(n.rU,{"aria-label":"header logo",className:"flex items-center",to:"/",children:(0,v.jsxs)(i.Z.Brand,{className:"inline-block p-0 m-0",children:[(0,v.jsx)("img",{className:"default-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-fast-blue-black.webp","data-rjs":"/assets/img/webp/logo-fast-blue-black@2x.webp",alt:"logo"}),(0,v.jsx)("img",{className:"alt-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-fast-blue-black.webp","data-rjs":"/assets/img/webp/logo-fast-blue-black@2x.webp",alt:"logo"}),(0,v.jsx)("img",{className:"mobile-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-fast-blue-black.webp","data-rjs":"/assets/img/webp/logo-fast-blue-black@2x.webp",alt:"logo"})]})})}),(0,v.jsxs)(i.Z.Toggle,{className:"order-last md:ml-[8px]",children:[(0,v.jsx)("span",{className:"navbar-toggler-line"}),(0,v.jsx)("span",{className:"navbar-toggler-line"}),(0,v.jsx)("span",{className:"navbar-toggler-line"}),(0,v.jsx)("span",{className:"navbar-toggler-line"})]}),(0,v.jsx)(i.Z.Collapse,{className:"col-auto justify-center",children:(0,v.jsx)(x.Menu,{...e})}),(0,v.jsx)(s.Z,{className:"col-auto col-lg-2 text-end pe-0 md:mr-[10px] xs:hidden",children:(0,v.jsx)(p.default,{theme:"social-icon-style-01 block text-end",iconColor:"dark",size:"xs",data:L.slice(0,3)})})]})}),(0,v.jsx)(y.default,{}),t?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("section",{className:"py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,v.jsx)(r.Z,{children:(0,v.jsxs)(o.Z,{className:"justify-center",children:[(0,v.jsx)(s.Z,{lg:8,className:"right-sidebar md:mb-[60px] sm:mb-[40px]",children:(0,v.jsxs)(o.Z,{children:[(0,v.jsxs)(s.Z,{className:"blog-details-text last:mb-0 mb-24",children:[(0,v.jsxs)("ul",{className:"flex mb-8 xs:block",children:[(0,v.jsxs)("li",{className:"inline-block align-middle mr-[25px]",children:[(0,v.jsx)("i",{className:"feather-calendar text-fastblue mr-[10px]"}),(0,v.jsx)("span",{children:t[0].date})]}),(0,v.jsxs)("li",{className:"inline-block align-middle mr-[25px] capitalize",children:[(0,v.jsx)("i",{className:"feather-folder text-fastblue mr-[10px]"}),t[0].category.map(((e,a)=>(0,v.jsx)(n.rU,{"aria-label":"link",to:"/blogs/category/".concat(e.toString().split(" ").join("").toLowerCase()),children:a===t[0].category.length-1?e:"".concat(e,", ")},a)))]}),k.tY&&(0,v.jsxs)("li",{className:"inline-block align-middle",children:[(0,v.jsx)("i",{className:"feather-user text-fastblue mr-[10px]"}),"By ",(0,v.jsx)(n.rU,{to:"/blogs/author/".concat(t[0].author),children:k.tY.filter((e=>e.id===t[0].author))[0].name})]})]}),(0,v.jsx)("h5",{className:"font-serif font-medium text-darkgray mb-[4.5rem]",children:t[0].title}),(0,v.jsx)(d.Z,{theme:"image-gallery-01 grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-small mb-[4.5rem]",data:w,overlay:"#232323",animation:m.Ji}),(0,v.jsx)("p",{className:"mb-[25px]",children:"Lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."}),(0,v.jsx)("p",{className:"mb-[25px]",children:"There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of lorem ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."}),(0,v.jsx)(u.Z,{className:"my-[5.5rem] ml-24 sm:ml-0",theme:"blockquote-style-02",title:"Tomorrow is the most important thing in life. Comes into us at midnight very clean. It's perfect when it arrives and it puts itself in our hands. It hopes we've learned something from yesterday.",author:"JOHN WAYNE"}),(0,v.jsx)("img",{height:"",width:"",src:"https://via.placeholder.com/780x500",alt:"",className:"w-full rounded-[6px] mb-16"}),(0,v.jsx)(f.Z,{theme:"dropcaps-style04",content:"Master design is simply dummy text of the printing and typesetting industry. lorem ipsum has been the an industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}),(0,v.jsx)("p",{className:"my-[25px]",children:"There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."})]}),(0,v.jsxs)(s.Z,{xs:12,className:"flex items-center justify-between mb-[35px] sm:block",children:[t[0].tags&&(0,v.jsx)("div",{className:"tag-cloud sm:flex sm:justify-center sm:mb-[10px] sm:flex-wrap gap-y-5",children:t[0].tags.map(((e,t)=>(0,v.jsx)(n.rU,{"aria-label":"links",to:"/blogs/blog-grid",children:e},t)))}),t[0].likes&&(0,v.jsx)("div",{className:"text-center md:text-end px-0 flex justify-end sm:justify-center",children:(0,v.jsxs)(n.rU,{"aria-label":"link",className:"uppercase text-darkgray text-xs w-auto font-medium inline-block border border-mediumgray rounded pt-[5px] pb-[6px] px-[18px] leading-[20px] hover:text-black transition-default hover:shadow-[0_0_10px_rgba(23,23,23,0.10)] ",to:"#",children:[(0,v.jsx)("i",{className:"far fa-heart mr-2 text-[#fa5c47]"}),(0,v.jsxs)("span",{children:[t[0].likes," Likes"]})]})})]}),(0,v.jsx)(s.Z,{children:(0,v.jsx)(j.Z,{authorId:t[0].author,className:"mb-[45px]"})}),(0,v.jsx)(p.default,{animation:m.Ji,theme:"social-icon-style-09 m-auto",className:"justify-center",size:"md",iconColor:"dark",data:L})]})}),(0,v.jsx)(N.Z,{data:t})]})})}),(0,v.jsx)("section",{className:"bg-lightgray py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] overflow-hidden",children:(0,v.jsxs)(r.Z,{children:[(0,v.jsx)(o.Z,{className:"justify-center",children:(0,v.jsxs)(s.Z,{lg:5,md:6,className:"text-center mb-20",children:[(0,v.jsx)("span",{className:"font-serif font-medium uppercase inline-block",children:"You may also like"}),(0,v.jsx)("h5",{className:"font-serif font-medium text-darkgray -tracking-[1px]",children:"Related Posts"})]})}),(0,v.jsx)(b.Z,{filter:!1,overlay:["#0039e3","#4132e0","#5e28dd","#741bd9","#8600d4"],pagination:"false",grid:"grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large",data:k.qm.slice(0,3)})]})}),(0,v.jsx)(g.Z,{}),(0,v.jsx)(h.Z,{theme:"dark",className:"bg-[#262b35] text-slateblue"})]}):void 0]})}},89743:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(41418),s=a.n(l),i=a(72791),r=a(10162),o=a(80184);const c=i.forwardRef(((e,t)=>{let{bsPrefix:a,className:l,as:i="div",...c}=e;const n=(0,r.vE)(a,"row"),m=(0,r.pi)(),d=(0,r.zG)(),x="".concat(n,"-cols"),p=[];return m.forEach((e=>{const t=c[e];let a;delete c[e],null!=t&&"object"===typeof t?({cols:a}=t):a=t;const l=e!==d?"-".concat(e):"";null!=a&&p.push("".concat(x).concat(l,"-").concat(a))})),(0,o.jsx)(i,{ref:t,...c,className:s()(l,n,...p)})}));c.displayName="Row";const n=c}}]);
//# sourceMappingURL=4576.85663eec.chunk.js.map