"use strict";(self.webpackChunklitho=self.webpackChunklitho||[]).push([[4898,2101],{20060:(e,o,t)=>{t.r(o),t.d(o,{TextAnime:()=>n,TiltBox:()=>c});var a=t(72791),i=t(62461),l=t(34290),s=t(80184);const c=e=>(0,s.jsx)(l.m.div,{className:"justify-center",...e.animation,children:(0,s.jsx)(i.Z,{highlight:!1,stretchX:0,stretchY:0,rotateTouch:!1,className:"my-atropos ".concat(e.className," w-full"),children:e.children})}),n=e=>{const o=(0,a.useRef)(null),[t,i]=(0,a.useState)(0),[c,n]=(0,a.useState)(0),[r,m]=(0,a.useState)(0),f=(0,a.useRef)({}),p={"--text-color":"object"===typeof e.color?"linear-gradient(to right, ".concat(e.color.map((e=>e)),")"):e.color,"--line-color":"object"===typeof e.lineColor?"linear-gradient(to right, ".concat(e.lineColor.map((e=>e)),")"):e.lineColor};return(0,a.useEffect)((()=>{const o=setInterval((()=>{i((o=>o!==e.data.length-1?o+1:0))}),e.duration);return()=>clearTimeout(o)}),[]),(0,a.useEffect)((()=>{let e=0,t=0;setTimeout((()=>{o.current.querySelectorAll(".cd-words-wrapper > .cd-text").forEach((function(o){e=o.clientWidth>e?o.clientWidth:e,t=o.clientHeight>t?o.clientHeight:t})),n(e+10),m(t)}),1e3)}),[]),(0,s.jsx)(l.m.div,{initial:{width:"auto"},animate:{width:c,height:r},ref:o,className:"cd-words-wrapper".concat(t?" is-loading":"").concat(e.animation?" ".concat(e.animation):"").concat(e.className?" ".concat(e.className):""),style:p,children:e.data.map(((o,a)=>(0,s.jsx)("span",{className:"cd-text".concat(t===a?" is-visible":" is-hidden"),ref:e=>f.current[a]=e,children:"type"===e.animation||"flip"===e.animation?o.split("").map(((i,l)=>(0,s.jsx)("i",{className:t===a?"in":"out",style:{transitionDelay:"".concat(e.charSpeed/o.split("").length/2e3*l,"s")},children:i},l))):o},a)))})};c.defaultProps={className:"font-serif"}},59511:(e,o,t)=>{t.d(o,{Z:()=>g});var a=t(72791),i=t(11087),l=t(47022),s=t(89743),c=t(2677),n=t(29213),r=t(54198),m=t(52101),f=t(90013),p=t(80184);const d=[{color:"#828282",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#828282",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#828282",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#828282",link:"https://www.instagram.com/",icon:"fab fa-instagram"}],h=e=>(0,p.jsxs)(r.Footer,{theme:e.theme,className:"".concat(e.className?" ".concat(e.className):""),children:[(0,p.jsx)("div",{className:"py-[5%] lg:py-[95px] md:py-[50px]",children:(0,p.jsx)(l.Z,{children:(0,p.jsxs)(s.Z,{children:[(0,p.jsx)(r.default,{data:f.Z.slice(0,2),lg:3,sm:6,className:"xl:px-[15px] md:mb-[40px] xs:mb-[25px]",titleClass:"capitalize"}),(0,p.jsxs)(c.Z,{lg:3,sm:6,className:"xs:mb-[25px]",children:[(0,p.jsx)("span",{className:"mb-[20px] font-serif block font-medium text-themecolor xs:mb-[10px]",children:"Get in touch"}),(0,p.jsx)("p",{className:"w-[85%] mb-[15px]",children:"27 Eden walk eden centre, Orchard view, Paris, France"}),(0,p.jsxs)("div",{children:[(0,p.jsx)("i",{className:"feather-phone-call text-sm mr-[10px] text-themecolor"}),"+1 234 567 8910"]}),(0,p.jsxs)("div",{children:[(0,p.jsx)("i",{className:"feather-mail text-sm mr-[10px] text-themecolor"}),(0,p.jsx)("a",{"aria-label":"mail",href:"mailTo:info@yourdomain.com",children:"info@yourdomain.com"})]})]}),(0,p.jsxs)(c.Z,{lg:3,sm:6,children:[(0,p.jsx)("span",{className:"mb-[20px] font-medium font-serif text-themecolor block xs:mb-[20px]",children:"Follow us on Instagram"}),(0,p.jsxs)("div",{className:"w-full inline-block",children:[(0,p.jsx)(m.default,{total_posts:3}),(0,p.jsxs)("a",{"aria-label":"link",rel:"noreferrer",href:"https://www.instagram.com/",target:"_blank",className:"flex justify-start text-slateblue font-medium text-xs font-serif uppercase mt-[20px] items-center hover:text-white",children:[(0,p.jsx)("i",{className:"fab fa-instagram text-lg mr-[10px] text-gradient bg-gradient-to-r from-[#ff85a6] to-[#b783ff]"}),(0,p.jsx)("span",{className:"inline-block hover:text-white",children:"Follow instagram"})]})]})]})]})})}),(0,p.jsx)("div",{className:"py-[40px] border-t border-[#ffffff1a]",children:(0,p.jsx)(l.Z,{children:(0,p.jsxs)(s.Z,{children:[(0,p.jsx)(c.Z,{md:3,className:"sm:mb-[20px]",children:(0,p.jsx)(i.rU,{"aria-label":"homepage",to:"/",className:"sm:flex sm:justify-center",children:(0,p.jsx)("img",{alt:"logo",src:e.logo,width:"111",height:"36"})})}),(0,p.jsx)(c.Z,{md:6,className:"flex justify-center items-center text-center sm:mb-[20px]",children:(0,p.jsxs)("p",{className:"mb-0",children:["\xa9 ",(new Date).getFullYear()," Litho is Proudly Powered by ",(0,p.jsx)("a",{"aria-label":"themezaa",rel:"noreferrer",href:"https://www.themezaa.com/",className:"hover:text-white",target:"_blank",children:" ThemeZaa"})]})}),(0,p.jsx)(c.Z,{md:3,className:"text-right sm:text-center",children:(0,p.jsx)(n.default,{size:"xs",theme:"social-icon-style-01",className:"justify-end sm:justify-center",iconColor:"dark"===e.theme?"light":"dark",data:d})})]})})})]});h.defaultProps={data:f.Z,className:"bg-darkgray text-[#828282]",logo:"/assets/img/webp/logo-white.webp",theme:"light"};const g=(0,a.memo)(h)},52101:(e,o,t)=>{t.r(o),t.d(o,{default:()=>s});var a=t(72791),i=t(80184);const l=e=>{const o=(0,a.useRef)(),[l,s]=(0,a.useState)(!0);return(0,a.useEffect)((()=>{Promise.resolve().then(t.bind(t,38480)).then((e=>{e.initializeIsotop(o.current).on("arrangeComplete",(()=>s(!1)))}))}),[]),(0,i.jsx)("div",{className:"grid-wrapper mt-[10px]",children:(0,i.jsxs)("ul",{ref:o,className:"instagram-posts grid-container grid grid-3col mx-[-5px] gutter-small".concat(l?" loading":""),children:[(0,i.jsx)("li",{className:"grid-sizer"}),e.data.slice(0,e.total_posts).map(((e,o)=>(0,i.jsx)("li",{className:"grid-item rounded",children:(0,i.jsx)("figure",{className:"relative overflow-hidden rounded-[3px]",children:(0,i.jsxs)("a",{href:e.link,target:"_blank","aria-label":"instagram image",rel:"noreferrer",children:[(0,i.jsx)("img",{height:"112px",width:"112px",alt:"instagram-img",className:"w-full rounded-[3px]",src:e.img}),(0,i.jsx)("i",{className:"fab fa-instagram"})]})})},o)))]})})};l.defaultProps={data:[{link:"https://www.instagram.com/p/CSMapatMNo8/",img:"https://via.placeholder.com/112x112"},{link:"https://www.instagram.com/p/CSMapatMNo8/",img:"https://via.placeholder.com/112x112"},{link:"https://www.instagram.com/p/CSMapatMNo8/",img:"https://via.placeholder.com/112x112"},{link:"https://www.instagram.com/p/CSMapatMNo8/",img:"https://via.placeholder.com/112x112"},{link:"https://www.instagram.com/p/CSMapatMNo8/",img:"https://via.placeholder.com/112x112"},{link:"https://www.instagram.com/p/CSMapatMNo8/",img:"https://via.placeholder.com/112x112"}],total_posts:6};const s=(0,a.memo)(l)},13187:(e,o,t)=>{t.d(o,{Z:()=>p});var a=t(72791),i=t(11087),l=t(34290),s=t(58563),c=t(51496),n=t(83992),r=t(39555),m=t(80184);const f=e=>{const o=(0,a.useRef)(),r=(0,a.useRef)(),[f,p]=(0,a.useState)(!0);(0,a.useEffect)((()=>{if(!0!==e.carousel){let e=o.current.querySelectorAll("img");Promise.all(Array.prototype.slice.call(e).filter((e=>!e.complete)).map((e=>new Promise((o=>{e.onload=e.onerror=o}))))).then((()=>{Promise.resolve().then(t.bind(t,38480)).then((e=>{e.initializeIsotop(o.current).on("arrangeComplete",(()=>p(!1)))}))}))}}),[]);return(0,m.jsxs)("div",{className:"grid-wrapper",children:[(0,m.jsx)(n.Z,{title:e.title,filterData:e.filterData,onFilterChange:()=>{o.current.querySelectorAll("li").forEach((e=>{var o;return null===(o=e.childNodes[0])||void 0===o?void 0:o.classList.add("appear")}))}}),!0===e.carousel?(0,m.jsx)(s.tq,{modules:[c.tl,c.pt],...e.carouselOption,className:"".concat(e.className?" ".concat(e.className):""),ref:r,children:e.data.map(((o,t)=>(0,m.jsx)(s.o5,{children:(0,m.jsx)(l.m.div,{className:"portfolio-colorful",initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.6,ease:"easeOut"},children:(0,m.jsx)(i.rU,{"aria-label":"link for filter content",target:e.target,to:o.link,children:(0,m.jsx)("div",{className:"portfolio-box",style:{"--brand-color":"object"===typeof e.overlay?e.overlay[t]:e.overlay},children:(0,m.jsxs)("div",{className:"portfolio-image",children:[o.img&&(0,m.jsx)("img",{className:"w-full",src:o.img,height:675,width:540,alt:"portfolio-colorful"}),(0,m.jsxs)("div",{className:"portfolio-hover justify-between flex",children:[(0,m.jsxs)("div",{className:"portfolio-content",children:[o.subtitle&&(0,m.jsx)("span",{className:"text-sm font-serif text-white uppercase mb-[5px] opacity-70 inline-block",children:o.subtitle}),o.title&&(0,m.jsx)("h3",{className:"heading-6 font-semibold text-white uppercase mb-0",children:o.title})]}),(0,m.jsx)("i",{className:"ti-arrow-top-right text-basecolor"})]})]})})})})},t)))}):(0,m.jsxs)("ul",{ref:o,className:"grid-container text-center".concat(e.grid?" ".concat(e.grid):"").concat(e.className?" ".concat(e.className):"").concat(f?" loading":""),children:[(0,m.jsx)("li",{className:"grid-sizer"}),e.data.map(((o,t)=>(0,m.jsx)("li",{className:"grid-item".concat(o.double_col?" grid-item-double":""," ").concat(o.category?o.category.toString().split(",").join(" ").toLowerCase():""),children:(0,m.jsx)(l.m.div,{className:"portfolio-colorful",initial:{opacity:0},whileInView:!f&&{opacity:1},viewport:{once:!0},transition:{duration:.6,ease:"easeOut"},children:(0,m.jsx)(i.rU,{"aria-label":"link for filter content",to:o.link,children:(0,m.jsx)("div",{className:"portfolio-box",style:{"--brand-color":"object"===typeof e.overlay?e.overlay[t]:e.overlay},children:(0,m.jsxs)("div",{className:"portfolio-image",children:[o.img&&(0,m.jsx)("img",{className:"w-full",height:572,width:458,src:o.img,alt:"portfolio-box"}),(0,m.jsxs)("div",{className:"portfolio-hover justify-between flex",children:[(0,m.jsxs)("div",{className:"portfolio-content",children:[o.subtitle&&(0,m.jsx)("span",{className:" text-sm font-serif text-white uppercase mb-[5px] opacity-70 inline-block",children:o.subtitle}),o.title&&(0,m.jsx)("h3",{className:"heading-6 font-semibold text-white uppercase mb-0",children:o.title})]}),(0,m.jsx)("i",{className:"ti-arrow-top-right text-basecolor"})]})]})})})})},t)))]})]})};f.defaultProps={data:r.x0};const p=(0,a.memo)(f)},29213:(e,o,t)=>{t.r(o),t.d(o,{default:()=>n});var a=t(72791),i=t(34290),l=t(96006),s=t(80184);const c=e=>(0,s.jsx)("ul",{className:"social-icon flex-wrap gap-y-5 p-0 ".concat(e.theme," ").concat(e.size," ").concat(e.iconColor," ").concat(e.className),children:e.data.map(((o,t)=>"social-icon-style-11"!==e.theme?(0,s.jsx)(i.m.li,{style:{"--social-icon-color":o.color?o.color:"#000"},...e.animation,transition:{delay:t*e.animationDelay},children:(0,s.jsxs)("a",{href:o.link,"aria-label":"social icon",target:"_blank",rel:"noreferrer",children:[o.name&&(0,s.jsx)("span",{className:"flex brand-label",children:o.name?o.name:"icon"}),o.icon&&(0,s.jsx)("i",{className:"".concat(o.icon," brand-icon")}),(0,s.jsx)("span",{})]})},t):(0,s.jsx)(i.m.li,{style:{"--social-icon-color":o.color?o.color:"#000"},...e.animation,transition:{delay:t*e.animationDelay},children:(0,s.jsxs)("a",{href:o.link,"aria-label":"social icon",target:"_blank",rel:"noreferrer",children:[o.socialback&&(0,s.jsx)("div",{className:"social-back",children:(0,s.jsx)("span",{children:o.socialback})}),(0,s.jsxs)("div",{className:"".concat(o.position," social-front grid"),children:[o.icon&&(0,s.jsx)("i",{className:o.icon}),o.name&&(0,s.jsx)("span",{children:o.name?o.name:"icon"})]})]})},t)))});c.defaultProps={data:l.mc,theme:"social-icon-style-01",size:"lg",iconColor:"light",className:"justify-center",animationDelay:.2};const n=(0,a.memo)(c)},96006:(e,o,t)=>{t.d(o,{Fg:()=>c,JV:()=>h,Q6:()=>r,Tq:()=>s,X_:()=>i,Xy:()=>m,gE:()=>p,k9:()=>n,kJ:()=>f,mc:()=>a,y:()=>l,zm:()=>d});const a=[{color:"#0038e3",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#0038e3",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#0038e3",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#0038e3",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0038e3",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#0038e3",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0038e3",link:"https://www.behance.net/",icon:"fab fa-behance"}],i=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],l=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],s=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],c=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],n=[{color:"#0038e3",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#0038e3",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#0038e3",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#0038e3",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0038e3",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#0038e3",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0038e3",link:"https://www.behance.net/",icon:"fab fa-behance"}],r=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],m=[{name:"FACEBOOK",color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{name:"DRIBBBLE",color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{name:"BEHANCE",color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"},{name:"INSTAGRAM",color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"}],f=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],p=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#007bb6",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],d=[{position:"top-left",name:"FACEBOOK",color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f",socialback:"LIKE US"},{position:"top",name:"TWITTER",color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter",socialback:"FOLLOW US"},{position:"top-left",name:"LINKEDIN",color:"#007bb6",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in",socialback:"JOIN US"},{position:"top-right",name:"GOOGLE",color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g",socialback:"FOLLOW US"}],h=[{color:"#000",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#000",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#000",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#000",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#000",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#000",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#000",link:"https://www.behance.net/",icon:"fab fa-behance"}]},84898:(e,o,t)=>{t.r(o),t.d(o,{default:()=>k});t(72791);var a=t(2677),i=t(29790),l=t(47022),s=t(89743),c=t(11087),n=t(38616),r=t(34290),m=t(35667),f=t(38392),p=t(13187),d=t(59511),h=t(49823),g=t(20060),b=t(21240),w=t(80184);const x=[{icon:"feather-life-buoy",title:"Digital branding"},{icon:"feather-briefcase",title:"BRAND STRATEGY"},{icon:"feather-globe",title:"WEBSITE DESIGNING"},{icon:"feather-shopping-bag",title:"ECOMMERCE TOOL"}],u=[{title:"Mongolish",img:"https://via.placeholder.com/1000x817",category:[""],subtitle:"Branding",link:"/portfolio/single-project-page-01",double_col:!0},{title:"Masscoating",img:"https://via.placeholder.com/800x653",category:[""],subtitle:"Photography",link:"/portfolio/single-project-page-02"},{title:"Cortifiel",img:"https://via.placeholder.com/800x653",category:[""],subtitle:"Brochure",link:"/portfolio/single-project-page-03"},{title:"Everyday",img:"https://via.placeholder.com/1000x817",category:[""],subtitle:"Brochure",link:"/portfolio/single-project-page-04",double_col:!0},{title:"Scandinavian",img:"https://via.placeholder.com/800x653",category:[""],subtitle:"Branding",link:"/portfolio/single-project-page-05"},{title:"The Simplest",img:"https://via.placeholder.com/800x653",category:[""],subtitle:"Website",link:"/portfolio/single-project-page-01"}],k=e=>(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(f.Header,{topSpace:{desktop:!0},type:"reverse-scroll",children:(0,w.jsxs)(f.HeaderNav,{fluid:"fluid",theme:"dark",bg:"black",menu:"light",className:"px-[35px] py-[0px] md:px-0",children:[(0,w.jsx)(a.Z,{className:"col-auto col-sm-6 col-lg-2 me-auto ps-lg-0",children:(0,w.jsx)(c.rU,{"aria-label":"header logo",className:"flex items-center",to:"/",children:(0,w.jsxs)(i.Z.Brand,{className:"inline-block p-0 m-0",children:[(0,w.jsx)("img",{className:"default-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-white.webp","data-rjs":"/assets/img/webp/logo-white@2x.webp",alt:"logo"}),(0,w.jsx)("img",{className:"alt-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-white.webp","data-rjs":"/assets/img/webp/logo-white@2x.webp",alt:"logo"}),(0,w.jsx)("img",{className:"mobile-logo",width:"111",height:"36",loading:"lazy",src:"/assets/img/webp/logo-white.webp","data-rjs":"/assets/img/webp/logo-white@2x.webp",alt:"logo"})]})})}),(0,w.jsx)("div",{className:"col-auto hidden order-last md:block",children:(0,w.jsxs)(i.Z.Toggle,{className:"md:ml-[10px]",children:[(0,w.jsx)("span",{className:"navbar-toggler-line"}),(0,w.jsx)("span",{className:"navbar-toggler-line"}),(0,w.jsx)("span",{className:"navbar-toggler-line"}),(0,w.jsx)("span",{className:"navbar-toggler-line"})]})}),(0,w.jsx)(i.Z.Collapse,{className:"col-auto pe-0 justify-end",children:(0,w.jsx)(f.Menu,{...e})}),(0,w.jsxs)(a.Z,{className:"col-auto text-right pe-0",children:[(0,w.jsx)(f.SearchBar,{className:"xs:pl-[15px] pr-0"}),(0,w.jsx)(f.HeaderLanguage,{className:"xs:pl-[15px]"}),(0,w.jsx)(f.HeaderCart,{className:"xs:pl-[15px]",style:{"--base-color":"#0038e3"}})]})]})}),(0,w.jsx)(h.default,{}),(0,w.jsxs)("div",{className:"full-screen relative overflow-hidden md:h-[650px] sm:h-[400px]",children:[(0,w.jsx)(n.VS,{className:"lg-no-parallax bg-cover bg-right cover-background absolute top-[0px] left-0 w-full h-[100vh] sm:h-[50vh] md:top-[-60px]",translateY:[-40,40],style:{backgroundImage:"url(https://via.placeholder.com/1920x1080)"}}),(0,w.jsx)("div",{style:{backgroundImage:"url(https://via.placeholder.com/1920x1081)"},className:"absolute left-0 top-0 bg-no-repeat bg-center bg-cover w-full h-full overflow-hidden"}),(0,w.jsx)("div",{className:"flex items-center h-full",children:(0,w.jsx)(l.Z,{className:"relative",children:(0,w.jsx)(s.Z,{className:"items-center",children:(0,w.jsx)(a.Z,{lg:5,md:6,sm:7,className:"py-[8rem] md:flex md:items-center",children:(0,w.jsx)("h1",{className:"font-serif font-semibold text-[100px] leading-[95px] tracking-[-4px] text-white mb-0 lg:text-[90px] lg:leading-[90px] md:text-[70px] md:leading-[65px] sm:text-[45px] sm:leading-[43px] sm:tracking-[-.5px] xs:w-[65%]",children:"We are creative agency"})})})})}),(0,w.jsx)("div",{className:"scroll-down-bottom absolute bottom-[30px] w-auto left-0 right-0 z-[1]",children:(0,w.jsx)(m.rU,{to:"about",offset:0,delay:0,spy:!0,smooth:!0,duration:800,className:"section-link block w-[2px] h-[35px] bg-white mx-auto right-0 left-0 absolute hover:text-white",children:(0,w.jsx)("span",{className:"scroll-down-text absolute font-serif font-semibold tracking-[-.5px] bottom-[25px] w-[100px] h-auto mb-[5px] -rotate-90 origin-[0]",children:"scroll"})})})]}),(0,w.jsx)("section",{id:"about",className:"py-[160px] bg-darkgray overflow-hidden lg:py-[120px] md:py-[90px] sm:py-[80px] xs:py-[50px]",children:(0,w.jsxs)(l.Z,{children:[(0,w.jsxs)(s.Z,{children:[(0,w.jsx)(a.Z,{xl:4,lg:5,md:6,children:(0,w.jsxs)(r.m.h4,{className:"font-serif font-semibold text-white -tracking-[1px] sm:text-center xxs:mb-[45px]",...b.Ji,children:[(0,w.jsx)("span",{className:"block p-0 sm:text-center tracking-[-1px]",children:"A creative agency specialized in web"}),(0,w.jsx)(g.TextAnime,{duration:3e3,color:"#fff",className:"fancy-border-bottom text-left sm:text-center font-semibold my-0 mx-auto",animation:"slide",data:["strategy creation","customize tools","generated revenue"]})]})}),(0,w.jsxs)(r.m.div,{className:"sm:text-center col-xl-5 col-md-6 offset-xl-2 offset-lg-1",...b.Ji,transition:{delay:.5},children:[(0,w.jsx)("span",{className:"font-serif font-semibold text-white uppercase block mb-[15px]",children:"About litho web agency"}),(0,w.jsx)("p",{className:"text-xmd w-[95%] leading-[36px] md:w-full",children:"With years of experience in the website design and development industry pride ourselves on creating unique, creative and quality designs that are developed upon the latest modern coding and developing techniques."})]})]}),(0,w.jsx)(s.Z,{className:"row-cols-1 row-cols-lg-4 row-cols-sm-2 mt-36 justify-center md:mt-24 landscape:md:mt-12 xs:mt-[65px] gap-y-10",children:x.map(((e,o)=>(0,w.jsx)(r.m.div,{...b.Ji,transition:{delay:.2*o},children:(0,w.jsxs)("div",{className:"flex justify-center items-center h-full",children:[(0,w.jsx)("i",{className:"".concat(e.icon," align-middle text-[28px] text-white mr-[15px]")}),(0,w.jsx)("span",{className:"font-serif font-semibold uppercase",children:e.title})]})},o)))})]})}),(0,w.jsx)("section",{className:"bg-darkgray",children:(0,w.jsx)(l.Z,{fluid:!0,children:(0,w.jsx)(s.Z,{children:(0,w.jsx)(a.Z,{className:"sm:px-0",children:(0,w.jsx)(p.Z,{className:"m-0",overlay:"#232323e6",grid:"grid grid-4col xl-grid-4col lg-grid-3col md-grid-2col sm-grid-2col xs-grid-1col gutter-extra-large",data:u})})})})}),(0,w.jsx)(d.Z,{theme:"dark",className:"bg-darkgray text-[#828282]"})]})}}]);
//# sourceMappingURL=4898.34099b3b.chunk.js.map