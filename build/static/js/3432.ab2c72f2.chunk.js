"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[3432],{6117:(e,s,a)=>{a.d(s,{Z:()=>o});var l=a(72791),t=a(34290),i=a(80184);const r=e=>(0,i.jsxs)(t.m.blockquote,{className:"".concat(e.theme).concat(e.className?" ".concat(e.className):""),...e.animation,children:[e.icon&&(0,i.jsx)("i",{className:e.icon}),e.title&&(0,i.jsx)("h6",{children:e.title}),e.author&&(0,i.jsx)("span",{className:"text-basecolor",children:e.author})]});r.defaultProps={author:"",theme:"blockquote-style-01",title:"",icon:""};const o=(0,l.memo)(r)},8219:(e,s,a)=>{a.d(s,{Z:()=>c});a(72791);var l=a(11087),t=a(34290),i=a(21240),r=a(43739),o=a(19630),n=a(80184);const c=e=>{let{authorId:s,className:a}=e;const c=o.tY.filter((e=>e.id===s))[0];return c&&(0,n.jsxs)(t.m.div,{...i.Ji,className:"flex justify-center items-center w-full shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-[5px] p-16 sm:block".concat(a?" ".concat(a):""),children:[(0,n.jsxs)("div",{className:"w-[130px] mr-[60px] sm:mx-auto text-center",children:[(0,n.jsx)("img",{width:"",height:"",src:c.img,className:"rounded-full w-[110px] mx-auto",alt:c.name}),(0,n.jsx)(l.rU,{"aria-label":"link",to:"/blogs/author/".concat(s),className:"text-darkgray font-serif font-medium mt-[20px] block text-md hover:text-fastblue",children:c.name}),(0,n.jsx)("span",{className:"text-medium block leading-[18px] sm:mb-[25px]",children:c.designation})]}),(0,n.jsxs)("div",{className:"w-[75%] md:text-start sm:w-full sm:text-center",children:[(0,n.jsx)("p",{className:"mb-[25px]",children:c.description}),(0,n.jsx)(r.default,{ariaLabel:"authorbox",to:"/blogs/author/".concat(s),className:"font-medium font-serif after:h-[2px] after:bg-black hover:text-black uppercase btn-link md:mb-[15px]",size:"md",color:"#232323",title:"All author posts"})]})]})}},79629:(e,s,a)=>{a.d(s,{Z:()=>h});a(72791);var l=a(92506),t=a(81724),i=a(57689),r=a(11087),o=a(34290),n=a(52101),c=a(29213),m=a(17728),d=a(19630),x=a(21240),p=a(80184);const b=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"}],h=e=>{const s=(0,i.s0)();return(0,p.jsxs)("aside",{className:"col-12 col-xl-3 offset-xl-1 col-lg-4 col-md-7 md:pl-[15px]",children:[(0,p.jsxs)("div",{className:"inline-block w-full mb-20",children:[(0,p.jsx)("span",{className:"mb-[25px] font-medium text-darkgray text-lg font-serif block",children:"Search posts"}),(0,p.jsx)("div",{className:"relative",children:(0,p.jsx)(l.J9,{initialValues:{search:""},validationSchema:t.Ry().shape({search:t.Z_().required("Field is required.")}),onSubmit:async(e,a)=>{await new Promise((e=>setTimeout(e,500))),a.resetForm(),s("/page/search-result",{state:{search:e}})},children:e=>{let{isSubmitting:s,status:a}=e;return(0,p.jsx)("div",{className:"relative",children:(0,p.jsxs)(l.l0,{className:"relative",children:[(0,p.jsx)(m.II,{showErrorMsg:!1,type:"text",name:"search",className:"border-[1px] py-[15px] px-[20px] w-full rounded-[5px] border-solidborder-transparent",placeholder:"Enter your keyword..."}),(0,p.jsx)("button",{type:"submit",className:"text-xs tracking-[1px] text-fastblue py-[15px] !absolute top-[8%] right-0 px-[20px] uppercase".concat(s?" loading":""),children:(0,p.jsx)("i",{className:"feather-search"})})]})})}})})]}),(0,p.jsxs)("div",{className:"p-[38px] mb-20 rounded-[4px] border-mediumgray border text-center",children:[d.tY&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(r.rU,{"aria-label":"link",to:"#",children:(0,p.jsx)("img",{height:"",width:"",src:d.tY.filter((s=>s.id===e.data[0].author))[0].img,alt:d.tY.filter((s=>s.id===e.data[0].author))[0].name,className:"mb-[5px] rounded-[50%] block mx-auto w-[100px]"})}),(0,p.jsx)(r.rU,{"aria-label":"link",to:"#",className:"mt-[20px] font-medium text-darkgray text-md font-serif inline-block",children:d.tY.filter((s=>s.id===e.data[0].author))[0].name})]}),(0,p.jsx)("span",{className:"mb-[20px] leading-[18px] text-[14px] block",children:"Co-founder"}),(0,p.jsx)("p",{className:"mb-[25px]",children:"Lorem ipsum is simply dummy text of the printing and industry lorem ipsum has been standard."}),(0,p.jsx)(c.default,{theme:"social-icon-style-01",size:"xs",iconColor:"dark",data:b.slice(0,4)})]}),(0,p.jsxs)("div",{className:"mb-20 xs:mb-[35px]",children:[(0,p.jsx)(o.m.span,{className:"mb-[35px] font-medium font-serif text-darkgray text-lg block",...x.Ji,children:"Categories"}),(0,p.jsxs)(o.m.ul,{className:"pl-0",...x.Ji,children:[(0,p.jsxs)("li",{className:"relative inline-block w-full mb-[15px] leading-[18px]",children:[(0,p.jsx)(r.rU,{"aria-label":"link",to:"/blogs/blog-grid",className:"inline-block text-left",children:"Entertainment"}),(0,p.jsx)("span",{className:"text-[14px] absolute top-[1px] right-0 text-right",children:"10"})]}),(0,p.jsxs)("li",{className:"relative inline-block w-full mb-[15px] leading-[18px]",children:[(0,p.jsx)(r.rU,{"aria-label":"link",to:"/blogs/blog-grid",className:"inline-block text-left",children:"Business"}),(0,p.jsx)("span",{className:"text-[14px] absolute top-[1px] right-0 text-right",children:"05"})]}),(0,p.jsxs)("li",{className:"relative inline-block w-full mb-[15px] leading-[18px]",children:[(0,p.jsx)(r.rU,{"aria-label":"link",to:"/blogs/blog-grid",className:"inline-block text-left",children:"Creative"}),(0,p.jsx)("span",{className:"text-[14px] absolute top-[1px] right-0 text-right",children:"03"})]}),(0,p.jsxs)("li",{className:"relative inline-block w-full mb-[15px] leading-[18px]",children:[(0,p.jsx)(r.rU,{"aria-label":"link",to:"/blogs/blog-grid",className:"inline-block text-left",children:"Lifestyle"}),(0,p.jsx)("span",{className:"text-[14px] absolute top-[1px] right-0 text-right",children:"02"})]}),(0,p.jsxs)("li",{className:"relative inline-block w-full mb-[15px] leading-[18px]",children:[(0,p.jsx)(r.rU,{"aria-label":"link",to:"/blogs/blog-grid",className:"inline-block text-left",children:"Fashion"}),(0,p.jsx)("span",{className:"text-[14px] absolute top-[1px] right-0 text-right",children:"19"})]}),(0,p.jsxs)("li",{className:"relative inline-block w-full leading-[18px] mb-0",children:[(0,p.jsx)(r.rU,{"aria-label":"link",to:"/blogs/blog-grid",className:"inline-block text-left",children:"Design"}),(0,p.jsx)("span",{className:"text-[14px] absolute top-[1px] right-0 text-right",children:"21"})]})]})]}),(0,p.jsxs)("div",{className:"mb-20 xs:mb-[35px]",children:[(0,p.jsx)("span",{className:"mb-[35px] font-medium font-serif text-darkgray text-lg block",children:"Recent posts"}),(0,p.jsxs)("ul",{children:[(0,p.jsxs)(o.m.li,{className:"flex mb-[45px]",...x.Ji,transition:{delay:.2},children:[(0,p.jsx)("figure",{className:"h-[65px] w-[80px] m-0 shrink-0\t",children:(0,p.jsx)(r.rU,{"aria-label":"link",to:"/blogs/blog-post-layout-01",children:(0,p.jsx)("img",{height:"",width:"",src:"https://via.placeholder.com/940x940",alt:"",className:"rounded-[3px]"})})}),(0,p.jsxs)("div",{className:"leading-normal pl-[30px] relative top-[-3px] grow",children:[(0,p.jsx)(r.rU,{"aria-label":"link",to:"/blogs/blog-post-layout-01",className:"mb-[5px] sm:mb-0 font-medium text-darkgray inline-block",children:"Fashion is anything"}),(0,p.jsx)("span",{className:"leading-[22px] text-[14px] block",children:"Lorem ipsum is simply as dummy text of the..."})]})]}),(0,p.jsxs)(o.m.li,{className:"flex mb-[45px]",...x.Ji,transition:{delay:.4},children:[(0,p.jsx)("figure",{className:"h-[65px] w-[80px] m-0 shrink-0\t",children:(0,p.jsx)(r.rU,{"aria-label":"link",to:"/blogs/blog-post-layout-02",children:(0,p.jsx)("img",{height:"",width:"",src:"https://via.placeholder.com/800x800",alt:"",className:"rounded-[3px]"})})}),(0,p.jsxs)("div",{className:"leading-normal pl-[30px] relative top-[-3px] grow",children:[(0,p.jsx)(r.rU,{"aria-label":"link",to:"/blogs/blog-post-layout-02",className:"mb-[5px] sm:mb-0 font-medium text-darkgray inline-block",children:"Design transcends"}),(0,p.jsx)("span",{className:"leading-[22px] text-[14px] block",children:"Lorem ipsum is simply as dummy text of the..."})]})]}),(0,p.jsxs)(o.m.li,{className:"flex mb-[45px]",...x.Ji,transition:{delay:.6},children:[(0,p.jsx)("figure",{className:"h-[65px] w-[80px] m-0 shrink-0\t",children:(0,p.jsx)(r.rU,{"aria-label":"link",to:"/blogs/blog-post-layout-03",children:(0,p.jsx)("img",{src:"https://via.placeholder.com/800x800",alt:"",height:"",width:"",className:"rounded-[3px]"})})}),(0,p.jsxs)("div",{className:"leading-normal pl-[30px] relative top-[-3px] grow",children:[(0,p.jsx)(r.rU,{"aria-label":"link",to:"/blogs/blog-post-layout-03",className:"mb-[5px] sm:mb-0 font-medium text-darkgray inline-block",children:"Never give in except"}),(0,p.jsx)("span",{className:"leading-[22px] text-[14px] block",children:"Lorem ipsum is simply as dummy text of the..."})]})]})]})]}),(0,p.jsxs)(o.m.div,{className:"visible mb-20 md:w-[90%] sm:w-full",...x.Ji,children:[(0,p.jsx)("span",{className:"mb-[35px] font-medium font-serif text-darkgray text-lg block",children:"Tags cloud"}),(0,p.jsx)(r.rU,{"aria-label":"tag",to:"/blogs/blog-grid",className:"inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]",children:"Development"}),(0,p.jsx)(r.rU,{"aria-label":"tag",to:"/blogs/blog-grid",className:"inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]",children:"Mountains"}),(0,p.jsx)(r.rU,{"aria-label":"tag",to:"/blogs/blog-grid",className:"inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]",children:"Lifestyle"}),(0,p.jsx)(r.rU,{"aria-label":"tag",to:"/blogs/blog-grid",className:"inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]",children:"Hotel"}),(0,p.jsx)(r.rU,{"aria-label":"tag",to:"/blogs/blog-grid",className:"inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]",children:"Event"}),(0,p.jsx)(r.rU,{"aria-label":"tag",to:"/blogs/blog-grid",className:"inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]",children:"Multimedia "}),(0,p.jsx)(r.rU,{"aria-label":"tag",to:"/blogs/blog-grid",className:"inline-block text-center text-sm mt-0 ml-[6px] mb-[10px] mr-0 pt-[5px] px-[18px] pb-[6px] rounded-[4px] border-mediumgray border hover:text-[#828282] hover:shadow-[0_0_15px_rgba(0,0,0,0.1)]",children:"Fashion"})]}),(0,p.jsxs)(o.m.div,{...x.Ji,children:[(0,p.jsx)("span",{className:"mb-[35px] font-medium font-serif text-darkgray text-lg block",children:"Instagram"}),(0,p.jsx)(n.default,{})]})]})}},90325:(e,s,a)=>{a.d(s,{Z:()=>o});var l=a(72791),t=a(34290),i=a(80184);const r=e=>(0,i.jsx)(t.m.div,{className:"".concat(e.theme," ").concat(e.className," contents"),...e.animation,children:(0,i.jsxs)("p",{className:"contents",children:[(0,i.jsx)("span",{className:"text-basecolor",children:e.content&&e.content.charAt(0)}),e.content&&e.content.slice(1)]})});r.defaultProps={theme:"dropcaps-style01"};const o=(0,l.memo)(r)},62397:(e,s,a)=>{a.r(s),a.d(s,{default:()=>v});var l=a(72791),t=a(2677),i=a(29790),r=a(47022),o=a(89743),n=a(57689),c=a(11087),m=a(8219),d=a(20057),x=a(38392),p=a(5104),b=a(29213),h=a(6117),g=a(90325),u=a(59511),f=a(49823),j=a(79629),k=a(19630),N=a(21240),y=a(80184);const w=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"}],v=e=>{const[s,a]=(0,l.useState)(),v=(0,n.UO)(),{id:U}=v;return(0,l.useEffect)((()=>{const e=k.qm.filter((e=>e.id===parseInt(U)));a(e)}),[U]),(0,y.jsxs)("div",{style:e.style,children:[(0,y.jsx)(x.Header,{topSpace:{desktop:!0},type:"reverse-scroll",className:"border-b border-b-[#0000001a]",children:(0,y.jsxs)(x.HeaderNav,{theme:"white",menu:"light",expand:"lg",fluid:"sm",containerClass:"sm:px-0",className:"py-[0px] md:pr-[15px] md:pl-0 md:py-[20px]",children:[(0,y.jsx)(t.Z,{className:"col-auto col-lg-2 me-auto ps-lg-0",children:(0,y.jsx)(c.rU,{"aria-label":"header logo",className:"flex items-center",to:"/",children:(0,y.jsxs)(i.Z.Brand,{className:"inline-block p-0 m-0",children:[(0,y.jsx)("img",{className:"default-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-fast-blue-black.webp","data-rjs":"/assets/img/webp/logo-fast-blue-black@2x.webp",alt:"logo"}),(0,y.jsx)("img",{className:"alt-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-fast-blue-black.webp","data-rjs":"/assets/img/webp/logo-fast-blue-black@2x.webp",alt:"logo"}),(0,y.jsx)("img",{className:"mobile-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-fast-blue-black.webp","data-rjs":"/assets/img/webp/logo-fast-blue-black@2x.webp",alt:"logo"})]})})}),(0,y.jsxs)(i.Z.Toggle,{className:"order-last md:ml-[8px]",children:[(0,y.jsx)("span",{className:"navbar-toggler-line"}),(0,y.jsx)("span",{className:"navbar-toggler-line"}),(0,y.jsx)("span",{className:"navbar-toggler-line"}),(0,y.jsx)("span",{className:"navbar-toggler-line"})]}),(0,y.jsx)(i.Z.Collapse,{className:"col-auto justify-center",children:(0,y.jsx)(x.Menu,{...e})}),(0,y.jsx)(t.Z,{className:"col-auto col-lg-2 text-end pe-0 md:mr-[10px] xs:hidden",children:(0,y.jsx)(b.default,{theme:"social-icon-style-01 block text-end",iconColor:"dark",size:"xs",data:w.slice(0,3)})})]})}),(0,y.jsx)(f.default,{}),s?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)("section",{className:"py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,y.jsx)(r.Z,{children:(0,y.jsxs)(o.Z,{className:"justify-center",children:[(0,y.jsx)(t.Z,{lg:8,className:"right-sidebar md:mb-[60px] sm:mb-[40px]",children:(0,y.jsxs)(o.Z,{children:[(0,y.jsxs)(t.Z,{className:"blog-details-text last:mb-0 mb-24",children:[(0,y.jsxs)("ul",{className:"flex mb-8 xs:block",children:[s[0].date&&(0,y.jsxs)("li",{className:"inline-block align-middle mr-[25px]",children:[(0,y.jsx)("i",{className:"feather-calendar text-fastblue mr-[10px]"}),(0,y.jsx)("span",{children:s[0].date})]}),(0,y.jsxs)("li",{className:"inline-block align-middle mr-[25px]",children:[(0,y.jsx)("i",{className:"feather-folder text-fastblue mr-[10px]"}),s[0].category.map(((e,a)=>(0,y.jsx)(c.rU,{"aria-label":"link",to:"/blogs/category/".concat(e.toString().split(" ").join("").toLowerCase()),children:a===s[0].category.length-1?e:"".concat(e,", ")},a)))]}),k.tY&&(0,y.jsxs)("li",{className:"inline-block align-middle",children:[(0,y.jsx)("i",{className:"feather-user text-fastblue mr-[10px]"}),"By ",(0,y.jsx)(c.rU,{to:"/blogs/author/".concat(s[0].author),children:k.tY.filter((e=>e.id===s[0].author))[0].name})]})]}),(0,y.jsx)("h5",{className:"font-serif font-medium text-darkgray mb-[4.5rem]",children:s[0].title}),(0,y.jsx)("img",{width:"",height:"",src:s[0].img,alt:"",className:"w-full rounded-[6px] mb-[4.5rem]"}),(0,y.jsx)("p",{className:"mb-[25px]",children:"Lorem ipsum is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."}),(0,y.jsx)("p",{className:"mb-[25px]",children:"There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of lorem ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."}),(0,y.jsx)(h.Z,{className:"my-[5.5rem] ml-24 sm:ml-0",theme:"blockquote-style-02",title:"Tomorrow is the most important thing in life. Comes into us at midnight very clean. It's perfect when it arrives and it puts itself in our hands. It hopes we've learned something from yesterday.",author:"JOHN WAYNE"}),(0,y.jsx)("img",{width:"",height:"",src:"https://via.placeholder.com/780x500",alt:"",className:"w-full rounded-[6px] mb-16"}),(0,y.jsx)(g.Z,{theme:"dropcaps-style04",content:"Master design is simply dummy text of the printing and typesetting industry. lorem ipsum has been the an industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}),(0,y.jsx)("p",{className:"my-[25px]",children:"There are many variations of passages of lorem ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."})]}),(0,y.jsxs)(t.Z,{xs:12,className:"flex items-center justify-between mb-[35px] sm:block",children:[s[0].tags&&(0,y.jsx)("div",{className:"tag-cloud sm:flex sm:justify-center sm:mb-[10px] sm:flex-wrap gap-y-5",children:s[0].tags.map(((e,s)=>(0,y.jsx)(c.rU,{"aria-label":"links",to:"/blogs/blog-grid",children:e},s)))}),s[0].likes&&(0,y.jsx)("div",{className:"text-center md:text-end px-0 flex justify-end sm:justify-center",children:(0,y.jsxs)(c.rU,{"aria-label":"link",className:"uppercase text-darkgray text-xs w-auto font-medium inline-block border border-mediumgray rounded pt-[5px] pb-[6px] px-[18px] leading-[20px] hover:text-black transition-default hover:shadow-[0_0_10px_rgba(23,23,23,0.10)] ",to:"#",children:[(0,y.jsx)("i",{className:"far fa-heart mr-2 text-[#fa5c47]"}),(0,y.jsxs)("span",{children:[s[0].likes," Likes"]})]})})]}),(0,y.jsx)(t.Z,{children:(0,y.jsx)(m.Z,{authorId:s[0].author,className:"mb-[45px]"})}),(0,y.jsx)(b.default,{animation:N.Ji,theme:"social-icon-style-09 m-auto",className:"justify-center",size:"md",iconColor:"dark",data:w})]})}),(0,y.jsx)(j.Z,{data:s})]})})}),(0,y.jsx)("section",{className:"bg-lightgray py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] overflow-hidden",children:(0,y.jsxs)(r.Z,{children:[(0,y.jsx)(o.Z,{className:"justify-center",children:(0,y.jsxs)(t.Z,{lg:5,md:6,className:"text-center mb-20",children:[(0,y.jsx)("span",{className:"font-serif font-medium uppercase inline-block",children:"You may also like"}),(0,y.jsx)("h5",{className:"font-serif font-medium text-darkgray -tracking-[1px]",children:"Related Posts"})]})}),(0,y.jsx)(p.Z,{filter:!1,overlay:["#0039e3","#4132e0","#5e28dd","#741bd9","#8600d4"],pagination:"false",grid:"grid grid-3col xl-grid-3col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large",data:k.qm.slice(0,3)})]})}),(0,y.jsx)(d.Z,{}),(0,y.jsx)(u.Z,{theme:"dark",className:"bg-[#262b35] text-slateblue"})]}):void 0]})}},89743:(e,s,a)=>{a.d(s,{Z:()=>c});var l=a(41418),t=a.n(l),i=a(72791),r=a(10162),o=a(80184);const n=i.forwardRef(((e,s)=>{let{bsPrefix:a,className:l,as:i="div",...n}=e;const c=(0,r.vE)(a,"row"),m=(0,r.pi)(),d=(0,r.zG)(),x="".concat(c,"-cols"),p=[];return m.forEach((e=>{const s=n[e];let a;delete n[e],null!=s&&"object"===typeof s?({cols:a}=s):a=s;const l=e!==d?"-".concat(e):"";null!=a&&p.push("".concat(x).concat(l,"-").concat(a))})),(0,o.jsx)(i,{ref:s,...n,className:t()(l,c,...p)})}));n.displayName="Row";const c=n}}]);
//# sourceMappingURL=3432.ab2c72f2.chunk.js.map