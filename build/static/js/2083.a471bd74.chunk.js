"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[2083,384,2101],{34564:(e,s,l)=>{l.d(s,{Z:()=>p});var t=l(72791),a=l(97948),o=l.n(a),i=l(52007),n=l(62752),c=l(12734),r=l(80184);const m={Close:e=>{const{customModal:s,setCustomModal:l}=(0,t.useContext)(c.Z);return(0,r.jsx)("div",{className:"inline-block".concat(e.className?" ".concat(e.className):""),onClick:e=>{e.target.closest(".ReactModalPortal").classList.remove("open"),setTimeout((()=>{l({...s,el:null,isOpen:!1})}),100)},children:e.children})},Wrapper:e=>{const s=(0,t.useRef)(null),a=(0,t.useRef)(null),{customModal:i,setCustomModal:m}=(0,t.useContext)(c.Z),p=()=>{s.current.node.classList.remove("open"),setTimeout((()=>{m({...i,el:null,isOpen:!1})}),100)},d=()=>{m({...i,el:s.current.node,isOpen:!0}),setTimeout((()=>{s.current.node.classList.add("open")}),100)};return(0,t.useEffect)((()=>{s.current.node.classList.add("custom_modal");const e=e=>{27===e.keyCode&&p()};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)}),[]),(0,t.useEffect)((()=>{!0===e.defaultOpen&&setTimeout((()=>{Promise.resolve().then(l.bind(l,38480)).then((e=>{"shown"===e.getCookie("litho-promo-popup")?p():d()}))}),200)}),[]),(0,n.Z)(a,p),o().setAppElement("#modal-outer"),(0,r.jsxs)("div",{className:e.className,children:[(0,r.jsx)("span",{className:e.modalBtn&&"inline-block",onClick:d,children:e.modalBtn}),(0,r.jsx)(o(),{className:e.animation,ref:s,isOpen:null!==i.el&&i.el===s.current.node&&!0===i.isOpen,onRequestClose:p,style:{overlay:{background:"rgba(35,35,35,0.93)"},content:{padding:0,border:"none",background:"transparent",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},contentLabel:"Example Modal",shouldCloseOnEsc:!0,parentSelector:()=>document.body,children:(0,r.jsxs)("div",{className:"modal-outer w-full text-center py-[40px] px-[15px]",children:[!0===e.closeBtnOuter&&(0,r.jsx)("div",{className:"close-btn absolute top-[30px] text-[30px] right-[30px] w-[44px] h-[44px] flex items-center justify-center cursor-pointer text-white landscape:top-[20px] landscape:right-[20px]",onClick:p,children:"\xd7"}),(0,r.jsx)("div",{className:"modal-inner inline-block w-auto max-w-full",ref:a,children:e.children})]})})]})}};m.Wrapper.defaultProps={closeBtnOuter:!0,defaultOpen:!1},m.Wrapper.propTypes={className:i.PropTypes.string,closeBtnOuter:i.PropTypes.bool,defaultOpen:i.PropTypes.bool,children:i.PropTypes.oneOfType([i.PropTypes.arrayOf(i.PropTypes.node),i.PropTypes.node]).isRequired},m.Close.propTypes={className:i.PropTypes.string,children:i.PropTypes.oneOfType([i.PropTypes.arrayOf(i.PropTypes.node),i.PropTypes.node]).isRequired};const p=m},59511:(e,s,l)=>{l.d(s,{Z:()=>h});var t=l(72791),a=l(11087),o=l(47022),i=l(89743),n=l(2677),c=l(29213),r=l(54198),m=l(52101),p=l(90013),d=l(80184);const f=[{color:"#828282",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#828282",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#828282",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#828282",link:"https://www.instagram.com/",icon:"fab fa-instagram"}],x=e=>(0,d.jsxs)(r.Footer,{theme:e.theme,className:"".concat(e.className?" ".concat(e.className):""),children:[(0,d.jsx)("div",{className:"py-[5%] lg:py-[95px] md:py-[50px]",children:(0,d.jsx)(o.Z,{children:(0,d.jsxs)(i.Z,{children:[(0,d.jsx)(r.default,{data:p.Z.slice(0,2),lg:3,sm:6,className:"xl:px-[15px] md:mb-[40px] xs:mb-[25px]",titleClass:"capitalize"}),(0,d.jsxs)(n.Z,{lg:3,sm:6,className:"xs:mb-[25px]",children:[(0,d.jsx)("span",{className:"mb-[20px] font-serif block font-medium text-themecolor xs:mb-[10px]",children:"Get in touch"}),(0,d.jsx)("p",{className:"w-[85%] mb-[15px]",children:"27 Eden walk eden centre, Orchard view, Paris, France"}),(0,d.jsxs)("div",{children:[(0,d.jsx)("i",{className:"feather-phone-call text-sm mr-[10px] text-themecolor"}),"+1 234 567 8910"]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("i",{className:"feather-mail text-sm mr-[10px] text-themecolor"}),(0,d.jsx)("a",{"aria-label":"mail",href:"mailTo:info@yourdomain.com",children:"info@yourdomain.com"})]})]}),(0,d.jsxs)(n.Z,{lg:3,sm:6,children:[(0,d.jsx)("span",{className:"mb-[20px] font-medium font-serif text-themecolor block xs:mb-[20px]",children:"Follow us on Instagram"}),(0,d.jsxs)("div",{className:"w-full inline-block",children:[(0,d.jsx)(m.default,{total_posts:3}),(0,d.jsxs)("a",{"aria-label":"link",rel:"noreferrer",href:"https://www.instagram.com/",target:"_blank",className:"flex justify-start text-slateblue font-medium text-xs font-serif uppercase mt-[20px] items-center hover:text-white",children:[(0,d.jsx)("i",{className:"fab fa-instagram text-lg mr-[10px] text-gradient bg-gradient-to-r from-[#ff85a6] to-[#b783ff]"}),(0,d.jsx)("span",{className:"inline-block hover:text-white",children:"Follow instagram"})]})]})]})]})})}),(0,d.jsx)("div",{className:"py-[40px] border-t border-[#ffffff1a]",children:(0,d.jsx)(o.Z,{children:(0,d.jsxs)(i.Z,{children:[(0,d.jsx)(n.Z,{md:3,className:"sm:mb-[20px]",children:(0,d.jsx)(a.rU,{"aria-label":"homepage",to:"/",className:"sm:flex sm:justify-center",children:(0,d.jsx)("img",{alt:"logo",src:e.logo,width:"111",height:"36"})})}),(0,d.jsx)(n.Z,{md:6,className:"flex justify-center items-center text-center sm:mb-[20px]",children:(0,d.jsxs)("p",{className:"mb-0",children:["\xa9 ",(new Date).getFullYear()," Litho is Proudly Powered by ",(0,d.jsx)("a",{"aria-label":"themezaa",rel:"noreferrer",href:"https://www.themezaa.com/",className:"hover:text-white",target:"_blank",children:" ThemeZaa"})]})}),(0,d.jsx)(n.Z,{md:3,className:"text-right sm:text-center",children:(0,d.jsx)(c.default,{size:"xs",theme:"social-icon-style-01",className:"justify-end sm:justify-center",iconColor:"dark"===e.theme?"light":"dark",data:f})})]})})})]});x.defaultProps={data:p.Z,className:"bg-darkgray text-[#828282]",logo:"/assets/img/webp/logo-white.webp",theme:"light"};const h=(0,t.memo)(x)},52101:(e,s,l)=>{l.r(s),l.d(s,{default:()=>i});var t=l(72791),a=l(80184);const o=e=>{const s=(0,t.useRef)(),[o,i]=(0,t.useState)(!0);return(0,t.useEffect)((()=>{Promise.resolve().then(l.bind(l,38480)).then((e=>{e.initializeIsotop(s.current).on("arrangeComplete",(()=>i(!1)))}))}),[]),(0,a.jsx)("div",{className:"grid-wrapper mt-[10px]",children:(0,a.jsxs)("ul",{ref:s,className:"instagram-posts grid-container grid grid-3col mx-[-5px] gutter-small".concat(o?" loading":""),children:[(0,a.jsx)("li",{className:"grid-sizer"}),e.data.slice(0,e.total_posts).map(((e,s)=>(0,a.jsx)("li",{className:"grid-item rounded",children:(0,a.jsx)("figure",{className:"relative overflow-hidden rounded-[3px]",children:(0,a.jsxs)("a",{href:e.link,target:"_blank","aria-label":"instagram image",rel:"noreferrer",children:[(0,a.jsx)("img",{height:"112px",width:"112px",alt:"instagram-img",className:"w-full rounded-[3px]",src:e.img}),(0,a.jsx)("i",{className:"fab fa-instagram"})]})})},s)))]})})};o.defaultProps={data:[{link:"https://www.instagram.com/p/CSMapatMNo8/",img:"https://via.placeholder.com/112x112"},{link:"https://www.instagram.com/p/CSMapatMNo8/",img:"https://via.placeholder.com/112x112"},{link:"https://www.instagram.com/p/CSMapatMNo8/",img:"https://via.placeholder.com/112x112"},{link:"https://www.instagram.com/p/CSMapatMNo8/",img:"https://via.placeholder.com/112x112"},{link:"https://www.instagram.com/p/CSMapatMNo8/",img:"https://via.placeholder.com/112x112"},{link:"https://www.instagram.com/p/CSMapatMNo8/",img:"https://via.placeholder.com/112x112"}],total_posts:6};const i=(0,t.memo)(o)},384:(e,s,l)=>{l.r(s),l.d(s,{default:()=>i});var t=l(72791),a=l(80184);const o=e=>{const s=(0,t.useRef)(null);return(0,t.useEffect)((()=>{function l(){if(s.current){let l=null===s||void 0===s?void 0:s.current.clientHeight,t=window.innerWidth>=768?l*e.value/100:0;null===s||void 0===s||s.current.style.setProperty("--overlapheight","-".concat(t,"px"))}}window.addEventListener("resize",l);let t=s.current.querySelectorAll("img");t.length>0?t.forEach((function(e){e.addEventListener("load",l)})):l()}),[]),(0,a.jsx)("div",{ref:s,className:"overlap-section".concat(e.className?" ".concat(e.className):""),children:e.children})};o.defaultProps={value:50};const i=(0,t.memo)(o)},29213:(e,s,l)=>{l.r(s),l.d(s,{default:()=>c});var t=l(72791),a=l(34290),o=l(96006),i=l(80184);const n=e=>(0,i.jsx)("ul",{className:"social-icon flex-wrap gap-y-5 p-0 ".concat(e.theme," ").concat(e.size," ").concat(e.iconColor," ").concat(e.className),children:e.data.map(((s,l)=>"social-icon-style-11"!==e.theme?(0,i.jsx)(a.m.li,{style:{"--social-icon-color":s.color?s.color:"#000"},...e.animation,transition:{delay:l*e.animationDelay},children:(0,i.jsxs)("a",{href:s.link,"aria-label":"social icon",target:"_blank",rel:"noreferrer",children:[s.name&&(0,i.jsx)("span",{className:"flex brand-label",children:s.name?s.name:"icon"}),s.icon&&(0,i.jsx)("i",{className:"".concat(s.icon," brand-icon")}),(0,i.jsx)("span",{})]})},l):(0,i.jsx)(a.m.li,{style:{"--social-icon-color":s.color?s.color:"#000"},...e.animation,transition:{delay:l*e.animationDelay},children:(0,i.jsxs)("a",{href:s.link,"aria-label":"social icon",target:"_blank",rel:"noreferrer",children:[s.socialback&&(0,i.jsx)("div",{className:"social-back",children:(0,i.jsx)("span",{children:s.socialback})}),(0,i.jsxs)("div",{className:"".concat(s.position," social-front grid"),children:[s.icon&&(0,i.jsx)("i",{className:s.icon}),s.name&&(0,i.jsx)("span",{children:s.name?s.name:"icon"})]})]})},l)))});n.defaultProps={data:o.mc,theme:"social-icon-style-01",size:"lg",iconColor:"light",className:"justify-center",animationDelay:.2};const c=(0,t.memo)(n)},96006:(e,s,l)=>{l.d(s,{Fg:()=>n,JV:()=>x,Q6:()=>r,Tq:()=>i,X_:()=>a,Xy:()=>m,gE:()=>d,k9:()=>c,kJ:()=>p,mc:()=>t,y:()=>o,zm:()=>f});const t=[{color:"#0038e3",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#0038e3",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#0038e3",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#0038e3",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0038e3",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#0038e3",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0038e3",link:"https://www.behance.net/",icon:"fab fa-behance"}],a=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],o=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],i=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],n=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],c=[{color:"#0038e3",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#0038e3",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#0038e3",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#0038e3",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0038e3",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#0038e3",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0038e3",link:"https://www.behance.net/",icon:"fab fa-behance"}],r=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],m=[{name:"FACEBOOK",color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{name:"DRIBBBLE",color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{name:"BEHANCE",color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"},{name:"INSTAGRAM",color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"}],p=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],d=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#007bb6",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],f=[{position:"top-left",name:"FACEBOOK",color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f",socialback:"LIKE US"},{position:"top",name:"TWITTER",color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter",socialback:"FOLLOW US"},{position:"top-left",name:"LINKEDIN",color:"#007bb6",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in",socialback:"JOIN US"},{position:"top-right",name:"GOOGLE",color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g",socialback:"FOLLOW US"}],x=[{color:"#000",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#000",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#000",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#000",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#000",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#000",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#000",link:"https://www.behance.net/",icon:"fab fa-behance"}]},2083:(e,s,l)=>{l.r(s),l.d(s,{default:()=>u});l(72791);var t=l(2677),a=l(29790),o=l(47022),i=l(89743),n=l(11087),c=l(34290),r=l(38616),m=l(38392),p=l(43739),d=l(384),f=l(34564),x=l(59511),h=l(49823),b=l(21240),g=l(80184);const u=e=>(0,g.jsxs)("div",{style:e.style,children:[(0,g.jsx)(m.Header,{topSpace:{md:!0},type:"reverse-scroll",children:(0,g.jsxs)(m.HeaderNav,{theme:"dark",expand:"lg",className:"px-[35px] py-[0px] lg:px-[15px] md:px-0",containerClass:"sm:px-0",children:[(0,g.jsx)(t.Z,{className:"col-auto col-sm-6 col-lg-2 me-auto ps-lg-0",children:(0,g.jsx)(n.rU,{"aria-label":"header logo",className:"flex items-center",to:"/",children:(0,g.jsxs)(a.Z.Brand,{className:"inline-block p-0 m-0",children:[(0,g.jsx)("img",{className:"default-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-white.webp","data-rjs":"/assets/img/webp/logo-white@2x.webp",alt:"logo"}),(0,g.jsx)("img",{className:"alt-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-black.webp","data-rjs":"/assets/img/webp/logo-black@2x.webp",alt:"logo"}),(0,g.jsx)("img",{className:"mobile-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-black.webp","data-rjs":"/assets/img/webp/logo-black@2x.webp",alt:"logo"})]})})}),(0,g.jsx)("div",{className:"col-auto hidden order-last md:block",children:(0,g.jsxs)(a.Z.Toggle,{className:"md:ml-[10px] sm:ml-0",children:[(0,g.jsx)("span",{className:"navbar-toggler-line"}),(0,g.jsx)("span",{className:"navbar-toggler-line"}),(0,g.jsx)("span",{className:"navbar-toggler-line"}),(0,g.jsx)("span",{className:"navbar-toggler-line"})]})}),(0,g.jsx)(a.Z.Collapse,{className:"col-auto pe-0 justify-end",children:(0,g.jsx)(m.Menu,{...e})}),(0,g.jsxs)(t.Z,{className:"col-auto text-right pe-0",children:[(0,g.jsx)(m.SearchBar,{className:"pr-0 xs:pl-[15px]"}),(0,g.jsx)(m.HeaderLanguage,{className:"xs:pl-[15px]"}),(0,g.jsx)(m.HeaderCart,{className:"xs:pl-[15px]",style:{"--base-color":"#0038e3"}})]})]})}),(0,g.jsx)(h.default,{}),(0,g.jsx)("section",{className:"p-0 h-[900px] lg:h-[750px] sm:h-[450px] xs:h-[350px] bg-cover flex items-end overflow-hidden relative bg-center",style:{backgroundImage:"url('https://via.placeholder.com/1920x915')"},children:(0,g.jsx)(o.Z,{children:(0,g.jsx)(i.Z,{className:"justify-center",children:(0,g.jsxs)(t.Z,{lg:12,className:"text-center",children:[(0,g.jsx)("img",{height:"",width:"",src:"https://via.placeholder.com/318x500",alt:"",className:"w-25 inline-block"}),(0,g.jsx)("h5",{className:"font-serif text-white mt-20 mb-36 font-semibold uppercase block xs:mt-12 xs:mb-20",children:"Gents club identity"}),(0,g.jsx)("span",{className:"w-[100px] h-[1px] inline-block align-middle bg-[#ff6437] xs:w-[60px] rotate-90"})]})})})}),(0,g.jsx)("section",{className:"overflow-hidden py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,g.jsx)(o.Z,{children:(0,g.jsx)(i.Z,{className:"justify-center",children:(0,g.jsx)(t.Z,{xl:10,children:(0,g.jsxs)(c.m.div,{...b.Ji,className:"row items-center",children:[(0,g.jsx)(t.Z,{lg:5,md:4,className:"text-center md:text-start sm:mb-[30px]",children:(0,g.jsx)("img",{height:"",width:"",className:"sm:mx-auto",src:"https://via.placeholder.com/291x286",alt:""})}),(0,g.jsxs)(t.Z,{lg:6,md:8,className:"text-center md:text-start",children:[(0,g.jsx)("span",{className:"text-darkgray text-[30px] text-left tracking-[-0.5px] leading-[40px] sm:text-center font-serif inline-block sm:leading-[30px] font-medium mb-[40px] sm:mb-[30px] sm:text-[20px]",children:"Gents club is a eCommerce brand based on London. One of our latest projects."}),(0,g.jsx)(f.Z.Wrapper,{className:"flex sm:justify-center",modalBtn:(0,g.jsxs)("div",{className:"flex items-center",children:[(0,g.jsx)(p.default,{type:"submit",size:"sm",className:"btn-sonar",themeColor:["#232323","#232323"],color:"#ff6437",title:(0,g.jsx)("i",{className:"icon-control-play !ml-[4px]"})}),(0,g.jsx)("span",{className:"font-medium font-serif text-md text-darkgray uppercase cursor-pointer border-b border-solid border-darkgray no-underline ml-[15px] hover:text-darkgray",children:"WATCH A PROJECTS"})]}),children:(0,g.jsx)("div",{className:"w-[1020px] max-w-full relative rounded mx-auto",children:(0,g.jsx)("div",{className:"fit-video",children:(0,g.jsx)("iframe",{width:"100%",height:"100%",className:"shadow-[0_0_8px_rgba(0,0,0,0.06)]",controls:!0,src:"https://www.youtube.com/embed/g0f_BRYJLJE?autoplay=1",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})})]}),(0,g.jsx)(t.Z,{lg:12,children:(0,g.jsx)("div",{className:"w-full h-[1px] bg-mediumgray opacity-70 my-[6.5rem] sm:my-[5rem]"})}),(0,g.jsx)(t.Z,{className:"font-serif uppercase leading-[12px]",children:(0,g.jsxs)(i.Z,{children:[(0,g.jsxs)(c.m.div,{...b.Ji,className:"col-12 col-md-3 col-sm-6 text-center font-medium uppercase text-sm leading-[12px] border-r border-mediumgray sm:mb-[30px] xs:border-none",children:[(0,g.jsx)("span",{className:"inline-block md:mb-[10px] md:block font-serif",children:"Date:"}),(0,g.jsx)("span",{className:"text-darkgray font-medium uppercase font-serif",children:" 08 January 2020"})]}),(0,g.jsxs)(c.m.div,{...b.Ji,transition:{delay:.5},className:"col-12 col-md-3 col-sm-6 text-center border-r font-medium uppercase text-sm leading-[12px] border-mediumgray sm:border-none sm:mb-[30px]",children:[(0,g.jsx)("span",{className:"inline-block md:mb-[10px] md:block font-serif",children:"client:"}),(0,g.jsx)("span",{className:"text-darkgray font-medium uppercase font-serif",children:" syrona jarabe de"})]}),(0,g.jsxs)(c.m.div,{...b.Ji,transition:{delay:.6},className:"col-12 col-md-3 col-sm-6 text-center border-r font-medium uppercase text-sm leading-[12px] border-mediumgray xs:border-none xs:mb-[30px]",children:[(0,g.jsx)("span",{className:"inline-block md:mb-[10px] md:block font-serif",children:"industry:"}),(0,g.jsx)("span",{className:"text-darkgray font-medium uppercase font-serif",children:" fashion shoes"})]}),(0,g.jsxs)(c.m.div,{...b.Ji,transition:{delay:.7},className:"col-12 col-md-3 col-sm-6 text-center font-medium uppercase text-sm leading-[12px]",children:[(0,g.jsx)("span",{className:"inline-block md:mb-[10px] font-serif md:block",children:"website:"}),(0,g.jsx)("a",{"aria-label":"themezaa",className:"text-darkgray text-sm font-medium uppercase leading-[0] font-serif hover:text-[#fd961e]",href:"https://www.themezaa.com/",target:"_blank",rel:"noreferrer",children:" www.themezaa.com"})]})]})})]})})})})}),(0,g.jsx)("section",{className:"p-0",children:(0,g.jsx)(o.Z,{fluid:!0,children:(0,g.jsxs)(i.Z,{children:[(0,g.jsx)(t.Z,{md:6,className:"bg-cover h-[700px] overflow-hidden relative bg-center bg-no-repeat md:h-[550px] sm:h-[350px] sm:mb-[15px]",style:{backgroundImage:"url(https://via.placeholder.com/960x830)"}}),(0,g.jsx)(t.Z,{md:6,className:"bg-cover h-[700px] overflow-hidden relative bg-center bg-no-repeat md:h-[550px] sm:h-[350px]",style:{backgroundImage:"url(https://via.placeholder.com/960x830)"}})]})})}),(0,g.jsx)("section",{className:"py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,g.jsx)(o.Z,{children:(0,g.jsxs)(i.Z,{className:"justify-between",children:[(0,g.jsx)(c.m.div,{...b.Ji,className:"col-12 col-lg-4 col-md-7 col-sm-9 md:mb-[35px]",children:(0,g.jsx)("h6",{className:"font-serif text-darkgray font-medium m-0",children:"Running allows me to set my mind free. Nothing seems impossible."})}),(0,g.jsxs)(c.m.div,{...b.Ji,transition:{delay:.5},className:"col-12 col-xl-3 col-lg-4 col-md-6 sm:mb-[30px]",children:[(0,g.jsxs)("div",{className:"flex font-serif text-darkgray mb-[15px] font-medium",children:[(0,g.jsx)("span",{className:"flex-shrink-0 self-center h-[1px] w-[40px] bg-[#ff6437] mr-[20px]"}),(0,g.jsx)("div",{className:"grow",children:"The Challenge"})]}),(0,g.jsx)("p",{className:"md:w-[80%] xs:w-full",children:"Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been."})]}),(0,g.jsxs)(c.m.div,{...b.Ji,transition:{delay:.6},className:"col-12 col-xl-3 col-lg-4 col-md-6",children:[(0,g.jsxs)("div",{className:"flex font-serif text-darkgray mb-[15px] font-medium",children:[(0,g.jsx)("span",{className:"flex-shrink-0 self-center h-[1px] w-[40px] bg-[#ff6437] mr-[20px]"}),(0,g.jsx)("div",{className:"grow",children:"The Approach"})]}),(0,g.jsx)("p",{className:"md:w-[80%] xs:w-full",children:"Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been."})]})]})})}),(0,g.jsx)("section",{className:"relative bg-cover overflow-hidden bg-fixed h-[750px] md:h-[550px] sm:h-[350px]",children:(0,g.jsx)(r.VS,{className:"lg-no-parallax h-[750px] relative bg-cover bg-fixed lg:bg-inherit lg:bg-center md:h-[550px] sm:h-[350px]",translateY:[-20,20],style:{backgroundImage:"url(https://via.placeholder.com/1920x1180)"}})}),(0,g.jsx)("section",{className:"py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,g.jsx)(o.Z,{children:(0,g.jsxs)(i.Z,{className:"justify-center items-center md:items-start mb-[35%] md:mb-[43%] sm:mb-0",children:[(0,g.jsx)(c.m.div,{...b.Ji,className:"col-12 col-lg-2 text-left md:text-center md:mb-[35px]",children:(0,g.jsx)("img",{height:"",width:"",src:"https://via.placeholder.com/130x130",alt:"",className:"inline-block"})}),(0,g.jsx)(c.m.div,{...b.Ji,transition:{delay:.5},className:"col-12 col-xl-5 col-md-6 col-sm-11 sm:text-start sm:mb-[30px] xs:text-center",children:(0,g.jsx)("span",{className:"font-serif text-darkgray text-[30px] tracking-[-0.5px] leading-[40px] font-medium inline-block xs:w-[95%] xs:mx-auto sm:text-[20px] sm:leading-[30px] sm:text-center",children:"For men shoes are the most important. Good shoes take you good places"})}),(0,g.jsxs)(c.m.div,{...b.Ji,transition:{delay:.6},className:"col-12 col-lg-4 offset-xl-1 col-md-6 col-sm-10 sm:text-center",children:[(0,g.jsx)("span",{className:"font-serif text-darkgray text-base font-medium mb-[15px] inline-block",children:"Design and style above average"}),(0,g.jsx)("p",{children:"Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum is simply dummy text of the printing and typesetting industry."})]})]})})}),(0,g.jsx)("section",{className:"bg-lightgray pb-[130px] lg:pb-[90px] md:pb-[75px] sm:py-[50px]",children:(0,g.jsx)(o.Z,{className:"sm:mb-[50px]",children:(0,g.jsxs)(i.Z,{className:"justify-center",children:[(0,g.jsx)(d.default,{children:(0,g.jsxs)(t.Z,{xl:12,className:"text-center mb-[100px] relative",children:[(0,g.jsx)("img",{height:"",width:"",src:"https://via.placeholder.com/1110x700",alt:"",className:"border-[10px] border-white w-full shadow-[0_0_25px_rgba(0,0,0,0.08)]"}),(0,g.jsx)(f.Z.Wrapper,{className:"flex absolute top-0 left-0 w-full h-full items-center justify-center",modalBtn:(0,g.jsx)(p.default,{type:"submit",size:"lg",className:"btn-sonar",themeColor:["#fff","#fff"],color:"#ff6437",title:(0,g.jsx)("i",{className:"icon-control-play !ml-[4px]"})}),children:(0,g.jsx)("div",{className:"w-[1020px] max-w-full relative rounded mx-auto",children:(0,g.jsx)("div",{className:"fit-video",children:(0,g.jsx)("iframe",{width:"100%",height:"100%",className:"shadow-[0_0_8px_rgba(0,0,0,0.06)]",controls:!0,src:"https://www.youtube.com/embed/g0f_BRYJLJE?autoplay=1",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})})})]})}),(0,g.jsxs)(c.m.div,{...b.Ji,className:"col-12 col-xl-5 col-lg-6 col-md-8 col-sm-10 text-center",children:[(0,g.jsx)("i",{className:"ti-quote-left text-[#ff6437] text-[50px] mb-[25px] block"}),(0,g.jsx)("span",{className:"text-xlg text-darkgray leading-[34px] font-serif block mb-[25px] lg:text-[18px] lg:leading-[24px] md:leading-[26px]",children:"A shoe that is too large is apt to trip one and when too small to pinch the feet so it is with those whose fortune does not suit them."}),(0,g.jsx)("span",{className:"font-serif uppercase text-sm font-medium tracking-[4px]",children:"James nichols"})]})]})})}),(0,g.jsx)(c.m.section,{...b.Ji,className:"py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,g.jsx)(o.Z,{children:(0,g.jsx)(i.Z,{children:(0,g.jsx)(t.Z,{children:(0,g.jsx)("img",{height:"",width:"",src:"https://via.placeholder.com/1140x612",className:"w-full h-auto",alt:""})})})})}),(0,g.jsx)("section",{className:"p-0 bg-cover bg-no-repeat h-[900px] overflow-hidden bg-center lg:h-[700px] md:h-[550px] xs:h-[300px]",style:{backgroundImage:"url('https://via.placeholder.com/1919x917')"}}),(0,g.jsx)("section",{className:"py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,g.jsx)(o.Z,{children:(0,g.jsxs)(i.Z,{className:"items-center justify-center",children:[(0,g.jsx)(t.Z,{lg:7,md:10,className:"flex justify-end lg:pl-[40px] md:mb-[50px]",children:(0,g.jsxs)("figure",{className:"relative m-0",children:[(0,g.jsx)("img",{height:"",width:"",src:"https://via.placeholder.com/570x389",alt:""}),(0,g.jsxs)("figcaption",{className:"absolute bg-[#ff6437] bottom-[-20px] left-[-50px] text-white p-[49px] lg:p-[45px] md:p-[42px] sm:p-[38px] w-[50%] xs:w-full xs:left-[-25px]",children:[(0,g.jsx)("span",{className:"uppercase text-sm tracking-[1px] text-darkgray font-serif font-medium mb-[10px] inline-block",children:"Different design"}),(0,g.jsx)("h6",{className:"font-serif uppercase font-medium mb-0",children:"Branding strategy and innovation"})]})]})}),(0,g.jsxs)(t.Z,{xl:{span:4,offset:1},lg:5,md:9,children:[(0,g.jsx)("span",{className:"font-serif text-[30px] text-darkgray leading-[40px] tracking-[-0.5px] font-medium inline-block mb-[25px] sm:text-[20px] sm:leading-[30px]",children:"We design experiences that make a difference"}),(0,g.jsx)("p",{className:"mb-[25px] md:mb-[20px] sm:mb-[15px]",children:"When an unknown printer took a galley of scrambled only five centuries, but also electronic typesetting. Lorem ipsum is simply dummy text of the printing and typesetting industry."}),(0,g.jsx)(p.default,{href:"#",className:"font-medium font-serif after:h-[2px] after:bg-black hover:text-black uppercase btn-link text-md md:mb-0",size:"xl",color:"#232323",title:"Explore Website"})]})]})})}),(0,g.jsx)("section",{className:"relative z-[1] bg-lightgray p-0 overflow-hidden",children:(0,g.jsx)(o.Z,{fluid:!0,className:"px-0",children:(0,g.jsxs)(i.Z,{sm:2,className:"row-cols-1 justify-center xs:text-center gx-0",children:[(0,g.jsx)(t.Z,{className:"relative",children:(0,g.jsxs)(n.rU,{to:"/portfolio/single-project-page-02",className:"portfolio_btn h-full px-28 py-16 justify-between items-center flex xl:p-12 md:inline-flex",children:[(0,g.jsx)("div",{className:"portfolio_img absolute top-0 left-0 h-full w-full -z-[1] duration-150\tbg-no-repeat bg-cover overflow-hidden bg-center",style:{backgroundImage:"url(https://via.placeholder.com/955x185)"}}),(0,g.jsxs)("div",{className:"btn_icon font-medium text-darkgray font-serif mr-uto uppercase",children:[(0,g.jsx)("i",{className:"line-icon-Arrow-OutLeft duration-100\ttext-[40px] inline-block mr-[20px] align-middle\t"}),(0,g.jsx)("span",{className:"text-sm inline-block md:hidden",children:"Prev project"})]}),(0,g.jsx)("span",{className:"portfolio_disc font-medium text-darkgray text-xlg font-serif block lg:text-[18px] lg:leading-[26px] md:text-left",children:"Model photography"})]})}),(0,g.jsx)(t.Z,{className:"relative md:flex md:justify-end xs:block",children:(0,g.jsxs)(n.rU,{to:"/portfolio/single-project-page-04",className:"portfolio_btn h-full px-28 py-16 justify-between items-center flex xl:p-12 md:inline-flex",children:[(0,g.jsx)("span",{className:"portfolio_disc font-medium text-darkgray text-xlg font-serif block lg:text-[18px] lg:leading-[26px] md:text-right",children:"Daimler financial"}),(0,g.jsx)("div",{className:"portfolio_img absolute top-0 left-0 h-full w-full -z-[1] duration-150\tbg-no-repeat bg-cover overflow-hidden bg-center",style:{backgroundImage:"url(https://via.placeholder.com/955x185)"}}),(0,g.jsxs)("div",{className:"btn_icon font-medium text-darkgray font-serif mr-uto uppercase",children:[(0,g.jsx)("span",{className:"text-sm inline-block md:hidden",children:"Next project "}),(0,g.jsx)("i",{className:"line-icon-Arrow-OutRight duration-100\ttext-[40px] inline-block ml-[20px] align-middle\t"})]})]})})]})})}),(0,g.jsx)(x.Z,{theme:"dark",className:"text-slateblue bg-[#262b35]"})]})},89743:(e,s,l)=>{l.d(s,{Z:()=>r});var t=l(41418),a=l.n(t),o=l(72791),i=l(10162),n=l(80184);const c=o.forwardRef(((e,s)=>{let{bsPrefix:l,className:t,as:o="div",...c}=e;const r=(0,i.vE)(l,"row"),m=(0,i.pi)(),p=(0,i.zG)(),d="".concat(r,"-cols"),f=[];return m.forEach((e=>{const s=c[e];let l;delete c[e],null!=s&&"object"===typeof s?({cols:l}=s):l=s;const t=e!==p?"-".concat(e):"";null!=l&&f.push("".concat(d).concat(t,"-").concat(l))})),(0,n.jsx)(o,{ref:s,...c,className:a()(t,r,...f)})}));c.displayName="Row";const r=c}}]);
//# sourceMappingURL=2083.a471bd74.chunk.js.map