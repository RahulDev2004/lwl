"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[9963,2101],{96158:(e,o,a)=>{a.d(o,{Z:()=>p});var l=a(72791),i=a(11087),t=a(34290),s=a(83992),c=a(75585),n=a(19630),r=a(80184);const m=n.qm.filter((e=>"metro"===e.blogType)),f=e=>{const o=(0,l.useRef)(),[n,m]=(0,l.useState)(!0);(0,l.useEffect)((()=>{Promise.resolve().then(a.bind(a,38480)).then((e=>{e.initializeIsotop(o.current).on("arrangeComplete",(()=>m(!1)))}))}),[]);const f={"--overlay-color":"object"===typeof e.overlay?"linear-gradient(to right top, ".concat(e.overlay.map(((e,o)=>e)),")"):e.overlay};return(0,r.jsxs)("div",{className:"grid-wrapper",children:[(0,r.jsx)(s.Z,{title:e.title,filterData:e.filterData,onFilterChange:()=>{o.current.querySelectorAll("li").forEach((e=>{var o;return null===(o=e.childNodes[0])||void 0===o?void 0:o.classList.add("appear")}))}}),(0,r.jsxs)("ul",{ref:o,className:"grid-container ".concat(e.grid?" ".concat(e.grid):"").concat(n?" loading":"").concat(!1===e.filter?"":" mt-28 md:mt-[4.5rem] sm:mt-8"),children:[(0,r.jsx)("li",{className:"grid-sizer"}),e.data.map(((o,a)=>(0,r.jsx)("li",{className:"grid-item".concat(o.double_col?" grid-item-double":""," ").concat(o.category.map((e=>e.split(" ").join(""))).toString().split(",").join(" ").toLowerCase()),children:(0,r.jsxs)(t.m.div,{className:"blog-metro",initial:{opacity:0},whileInView:!n&&{opacity:1},viewport:{once:!0},transition:{duration:.6,ease:"easeOut"},children:[(0,r.jsx)("div",{className:"blog-post-image",style:f,children:(0,r.jsx)("img",{className:"w-full",height:353,width:353,src:o.img,alt:"blog-post"})}),(0,r.jsxs)("div",{className:"post-details",children:[(0,r.jsxs)(i.rU,{"aria-label":"link",to:"/blogs/category/".concat([o.category[0].toString().split(" ").join("").toLowerCase()]),className:"post-btn",children:[" ",o.category[0]]}),(0,r.jsx)("span",{className:"post-date",children:o.date}),(0,r.jsx)(i.rU,{"aria-label":"link",to:"".concat(e.link).concat([o.id]),className:"post-title",children:o.title})]})]})},a)))]}),!0===e.pagination&&(0,r.jsx)("div",{className:"flex justify-center mt-[7.5rem] md:mt-20",children:(0,r.jsx)(c.Z,{})})]})};f.defaultProps={filter:!1,data:m,link:"blog-types/blog-standard-post/"};const p=(0,l.memo)(f)},75585:(e,o,a)=>{a.d(o,{Z:()=>t});a(72791);var l=a(11087),i=a(80184);const t=()=>(0,i.jsxs)("ul",{className:"pagination pagination-style-01 font-sans font-medium items-center",children:[(0,i.jsx)("li",{className:"page-item",children:(0,i.jsx)(l.rU,{"aria-label":"link",className:"page-link",to:"#",children:(0,i.jsx)("i",{className:"feather-arrow-left text-lg"})})}),(0,i.jsx)("li",{className:"page-item",children:(0,i.jsx)(l.rU,{"aria-label":"link",className:"page-link",to:"#",children:" 01 "})}),(0,i.jsx)("li",{className:"page-item active",children:(0,i.jsx)(l.rU,{"aria-label":"link",className:"page-link",to:"#",children:" 02 "})}),(0,i.jsx)("li",{className:"page-item",children:(0,i.jsx)(l.rU,{"aria-label":"link",className:"page-link",to:"#",children:" 03 "})}),(0,i.jsx)("li",{className:"page-item",children:(0,i.jsx)(l.rU,{"aria-label":"link",className:"page-link",to:"#",children:" 04 "})}),(0,i.jsx)("li",{className:"page-item",children:(0,i.jsx)(l.rU,{"aria-label":"link",className:"page-link",to:"#",children:(0,i.jsx)("i",{className:"feather-arrow-right text-lg"})})})]})},59511:(e,o,a)=>{a.d(o,{Z:()=>g});var l=a(72791),i=a(11087),t=a(47022),s=a(89743),c=a(2677),n=a(29213),r=a(54198),m=a(52101),f=a(90013),p=a(80184);const b=[{color:"#828282",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#828282",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#828282",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#828282",link:"https://www.instagram.com/",icon:"fab fa-instagram"}],d=e=>(0,p.jsxs)(r.Footer,{theme:e.theme,className:"".concat(e.className?" ".concat(e.className):""),children:[(0,p.jsx)("div",{className:"py-[5%] lg:py-[95px] md:py-[50px]",children:(0,p.jsx)(t.Z,{children:(0,p.jsxs)(s.Z,{children:[(0,p.jsx)(r.default,{data:f.Z.slice(0,2),lg:3,sm:6,className:"xl:px-[15px] md:mb-[40px] xs:mb-[25px]",titleClass:"capitalize"}),(0,p.jsxs)(c.Z,{lg:3,sm:6,className:"xs:mb-[25px]",children:[(0,p.jsx)("span",{className:"mb-[20px] font-serif block font-medium text-themecolor xs:mb-[10px]",children:"Get in touch"}),(0,p.jsx)("p",{className:"w-[85%] mb-[15px]",children:"27 Eden walk eden centre, Orchard view, Paris, France"}),(0,p.jsxs)("div",{children:[(0,p.jsx)("i",{className:"feather-phone-call text-sm mr-[10px] text-themecolor"}),"+1 234 567 8910"]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("i",{className:"feather-mail text-sm mr-[10px] text-themecolor"}),(0,p.jsx)("a",{"aria-label":"mail",href:"mailTo:info@yourdomain.com",children:"info@yourdomain.com"})]})]}),(0,p.jsxs)(c.Z,{lg:3,sm:6,children:[(0,p.jsx)("span",{className:"mb-[20px] font-medium font-serif text-themecolor block xs:mb-[20px]",children:"Follow us on Instagram"}),(0,p.jsxs)("div",{className:"w-full inline-block",children:[(0,p.jsx)(m.default,{total_posts:3}),(0,p.jsxs)("a",{"aria-label":"link",rel:"noreferrer",href:"https://www.instagram.com/",target:"_blank",className:"flex justify-start text-slateblue font-medium text-xs font-serif uppercase mt-[20px] items-center hover:text-white",children:[(0,p.jsx)("i",{className:"fab fa-instagram text-lg mr-[10px] text-gradient bg-gradient-to-r from-[#ff85a6] to-[#b783ff]"}),(0,p.jsx)("span",{className:"inline-block hover:text-white",children:"Follow instagram"})]})]})]})]})})}),(0,p.jsx)("div",{className:"py-[40px] border-t border-[#ffffff1a]",children:(0,p.jsx)(t.Z,{children:(0,p.jsxs)(s.Z,{children:[(0,p.jsx)(c.Z,{md:3,className:"sm:mb-[20px]",children:(0,p.jsx)(i.rU,{"aria-label":"homepage",to:"/",className:"sm:flex sm:justify-center",children:(0,p.jsx)("img",{alt:"logo",src:e.logo,width:"111",height:"36"})})}),(0,p.jsx)(c.Z,{md:6,className:"flex justify-center items-center text-center sm:mb-[20px]",children:(0,p.jsxs)("p",{className:"mb-0",children:["\xa9 ",(new Date).getFullYear()," Litho is Proudly Powered by ",(0,p.jsx)("a",{"aria-label":"themezaa",rel:"noreferrer",href:"https://www.themezaa.com/",className:"hover:text-white",target:"_blank",children:" ThemeZaa"})]})}),(0,p.jsx)(c.Z,{md:3,className:"text-right sm:text-center",children:(0,p.jsx)(n.default,{size:"xs",theme:"social-icon-style-01",className:"justify-end sm:justify-center",iconColor:"dark"===e.theme?"light":"dark",data:b})})]})})})]});d.defaultProps={data:f.Z,className:"bg-darkgray text-[#828282]",logo:"/assets/img/webp/logo-white.webp",theme:"light"};const g=(0,l.memo)(d)},52101:(e,o,a)=>{a.r(o),a.d(o,{default:()=>s});var l=a(72791),i=a(80184);const t=e=>{const o=(0,l.useRef)(),[t,s]=(0,l.useState)(!0);return(0,l.useEffect)((()=>{Promise.resolve().then(a.bind(a,38480)).then((e=>{e.initializeIsotop(o.current).on("arrangeComplete",(()=>s(!1)))}))}),[]),(0,i.jsx)("div",{className:"grid-wrapper mt-[10px]",children:(0,i.jsxs)("ul",{ref:o,className:"instagram-posts grid-container grid grid-3col mx-[-5px] gutter-small".concat(t?" loading":""),children:[(0,i.jsx)("li",{className:"grid-sizer"}),e.data.slice(0,e.total_posts).map(((e,o)=>(0,i.jsx)("li",{className:"grid-item rounded",children:(0,i.jsx)("figure",{className:"relative overflow-hidden rounded-[3px]",children:(0,i.jsxs)("a",{href:e.link,target:"_blank","aria-label":"instagram image",rel:"noreferrer",children:[(0,i.jsx)("img",{height:"112px",width:"112px",alt:"instagram-img",className:"w-full rounded-[3px]",src:e.img}),(0,i.jsx)("i",{className:"fab fa-instagram"})]})})},o)))]})})};t.defaultProps={data:[{link:"https://www.instagram.com/p/CSMapatMNo8/",img:"https://via.placeholder.com/112x112"},{link:"https://www.instagram.com/p/CSMapatMNo8/",img:"https://via.placeholder.com/112x112"},{link:"https://www.instagram.com/p/CSMapatMNo8/",img:"https://via.placeholder.com/112x112"},{link:"https://www.instagram.com/p/CSMapatMNo8/",img:"https://via.placeholder.com/112x112"},{link:"https://www.instagram.com/p/CSMapatMNo8/",img:"https://via.placeholder.com/112x112"},{link:"https://www.instagram.com/p/CSMapatMNo8/",img:"https://via.placeholder.com/112x112"}],total_posts:6};const s=(0,l.memo)(t)},29213:(e,o,a)=>{a.r(o),a.d(o,{default:()=>n});var l=a(72791),i=a(34290),t=a(96006),s=a(80184);const c=e=>(0,s.jsx)("ul",{className:"social-icon flex-wrap gap-y-5 p-0 ".concat(e.theme," ").concat(e.size," ").concat(e.iconColor," ").concat(e.className),children:e.data.map(((o,a)=>"social-icon-style-11"!==e.theme?(0,s.jsx)(i.m.li,{style:{"--social-icon-color":o.color?o.color:"#000"},...e.animation,transition:{delay:a*e.animationDelay},children:(0,s.jsxs)("a",{href:o.link,"aria-label":"social icon",target:"_blank",rel:"noreferrer",children:[o.name&&(0,s.jsx)("span",{className:"flex brand-label",children:o.name?o.name:"icon"}),o.icon&&(0,s.jsx)("i",{className:"".concat(o.icon," brand-icon")}),(0,s.jsx)("span",{})]})},a):(0,s.jsx)(i.m.li,{style:{"--social-icon-color":o.color?o.color:"#000"},...e.animation,transition:{delay:a*e.animationDelay},children:(0,s.jsxs)("a",{href:o.link,"aria-label":"social icon",target:"_blank",rel:"noreferrer",children:[o.socialback&&(0,s.jsx)("div",{className:"social-back",children:(0,s.jsx)("span",{children:o.socialback})}),(0,s.jsxs)("div",{className:"".concat(o.position," social-front grid"),children:[o.icon&&(0,s.jsx)("i",{className:o.icon}),o.name&&(0,s.jsx)("span",{children:o.name?o.name:"icon"})]})]})},a)))});c.defaultProps={data:t.mc,theme:"social-icon-style-01",size:"lg",iconColor:"light",className:"justify-center",animationDelay:.2};const n=(0,l.memo)(c)},96006:(e,o,a)=>{a.d(o,{Fg:()=>c,JV:()=>d,Q6:()=>r,Tq:()=>s,X_:()=>i,Xy:()=>m,gE:()=>p,k9:()=>n,kJ:()=>f,mc:()=>l,y:()=>t,zm:()=>b});const l=[{color:"#0038e3",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#0038e3",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#0038e3",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#0038e3",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0038e3",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#0038e3",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0038e3",link:"https://www.behance.net/",icon:"fab fa-behance"}],i=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],t=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],s=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],c=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],n=[{color:"#0038e3",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#0038e3",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#0038e3",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#0038e3",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0038e3",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#0038e3",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0038e3",link:"https://www.behance.net/",icon:"fab fa-behance"}],r=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],m=[{name:"FACEBOOK",color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{name:"DRIBBBLE",color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{name:"BEHANCE",color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"},{name:"INSTAGRAM",color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"}],f=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],p=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#007bb6",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],b=[{position:"top-left",name:"FACEBOOK",color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f",socialback:"LIKE US"},{position:"top",name:"TWITTER",color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter",socialback:"FOLLOW US"},{position:"top-left",name:"LINKEDIN",color:"#007bb6",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in",socialback:"JOIN US"},{position:"top-right",name:"GOOGLE",color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g",socialback:"FOLLOW US"}],d=[{color:"#000",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#000",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#000",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#000",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#000",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#000",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#000",link:"https://www.behance.net/",icon:"fab fa-behance"}]},9963:(e,o,a)=>{a.r(o),a.d(o,{default:()=>w});a(72791);var l=a(2677),i=a(29790),t=a(47022),s=a(89743),c=a(11087),n=a(38392),r=a(29213),m=a(96158),f=a(49823),p=a(59511),b=a(19630),d=a(80184);const g=[{color:"#0038e3",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#0038e3",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0038e3",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#0038e3",link:"https://www.instagram.com/",icon:"fab fa-instagram"}],h=b.qm.filter((e=>"metro"===e.blogType)),w=e=>(0,d.jsxs)("div",{style:e.style,children:[(0,d.jsx)(f.default,{}),(0,d.jsx)(n.default,{topSpace:{desktop:!0},className:"toplogo-header absolute top-0 left-0 w-full z-10",children:(0,d.jsxs)(n.HeaderNav,{fluid:"fluid",theme:"light",bg:"white",expand:"lg",className:"px-0 py-0",containerClass:"flex-col px-[105px] xl:px-[65px] lg:px-[20px] md:px-[15px] sm:px-0 xs:flex-row xs:!flex-wrap-[inherit]",children:[(0,d.jsx)("div",{className:"border-b md:border-0 bg-white py-[8px] md:py-[9px] w-full",children:(0,d.jsxs)(l.Z,{className:"col-12 col-sm-12 col-lg-8 lg:mx-auto text-center flex items-center justify-between mx-auto md:!pl-0 sm:!px-0",children:[(0,d.jsx)(n.MobileMenu,{className:"order-first d-lg-none flex items-center",type:"full",...e}),(0,d.jsx)(l.Z,{className:"header-social-icon text-start d-lg-flex d-none ms-0 me-auto me-lg-0 border-0 p-0",children:(0,d.jsx)("div",{className:"md:hidden",children:(0,d.jsx)(r.default,{theme:"social-icon-style-01",size:"xs",iconColor:"dark",className:"justify-start",data:g})})}),(0,d.jsx)(l.Z,{className:"navbar-brand mx-auto px-0",children:(0,d.jsx)(c.rU,{"aria-label":"header logo",className:"flex justify-center",to:"/",children:(0,d.jsxs)(i.Z.Brand,{className:"inline-block py-0 m-0",children:[(0,d.jsx)("img",{className:"default-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-fast-blue-black.webp","data-rjs":"/assets/img/webp/logo-fast-blue-black@2x.webp",alt:"logo"}),(0,d.jsx)("img",{className:"alt-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-fast-blue-black.webp","data-rjs":"/assets/img/webp/logo-fast-blue-black@2x.webp",alt:"logo"}),(0,d.jsx)("img",{className:"mobile-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-fast-blue-black.webp","data-rjs":"/assets/img/webp/logo-fast-blue-black@2x.webp",alt:"logo"})]})})}),(0,d.jsxs)(l.Z,{className:"flex items-center justify-end ms-auto p-0 md:flex-initial",children:[(0,d.jsx)(n.SearchBar,{className:"py-[9px] sm:pl-[15px] text-black pl-0"}),(0,d.jsx)(n.HeaderCart,{className:"py-[9px] sm:pl-[15px] text-black",style:{"--base-color":"#0038e3"}})]})]})}),(0,d.jsx)(n.Menu,{className:"md:hidden",...e})]})}),(0,d.jsx)("section",{className:"relative pt-0 py-[130px] px-[90px] xl:px-[45px] lg:px-0 lg:py-[90px] md:py-[75px] sm:py-[50px] z-0",children:(0,d.jsx)(t.Z,{fluid:!0,children:(0,d.jsx)(s.Z,{className:"justify-center",children:(0,d.jsx)(l.Z,{className:"px-[9px] sm:px-0",children:(0,d.jsx)(m.Z,{pagination:!1,overlay:"#1f232c",grid:"grid grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-large",data:h.slice(0,10)})})})})}),(0,d.jsx)(p.Z,{theme:"dark",className:"bg-[#262b35] text-slateblue"})]})},89743:(e,o,a)=>{a.d(o,{Z:()=>r});var l=a(41418),i=a.n(l),t=a(72791),s=a(10162),c=a(80184);const n=t.forwardRef(((e,o)=>{let{bsPrefix:a,className:l,as:t="div",...n}=e;const r=(0,s.vE)(a,"row"),m=(0,s.pi)(),f=(0,s.zG)(),p="".concat(r,"-cols"),b=[];return m.forEach((e=>{const o=n[e];let a;delete n[e],null!=o&&"object"===typeof o?({cols:a}=o):a=o;const l=e!==f?"-".concat(e):"";null!=a&&b.push("".concat(p).concat(l,"-").concat(a))})),(0,c.jsx)(t,{ref:o,...n,className:i()(l,r,...b)})}));n.displayName="Row";const r=n}}]);
//# sourceMappingURL=9963.4b0d8bfd.chunk.js.map