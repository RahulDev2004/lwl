(self.webpackChunklitho=self.webpackChunklitho||[]).push([[8172,5705,2502],{43739:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>r});var a=o(72791),i=o(11087),n=o(43360),l=o(80184);const c=e=>{const t=e.themeColor&&e.themeColor[0],o=e.themeColor&&e.themeColor[1],a=e.color&&e.color[0],c=e.color&&e.color[1],r={"--gradient-color":"object"===typeof e.themeColor?"linear-gradient(45deg, ".concat(t,", ").concat(o,", ").concat(t,")"):e.themeColor,"--brand-color":"object"===typeof e.themeColor?"linear-gradient(to right, ".concat(t,", ").concat(o,", ").concat(t,")"):e.themeColor,"--text-color":"object"===typeof e.color?"linear-gradient(to right, ".concat(a,", ").concat(c,", ").concat(a,")"):e.color};return e.href||"submit"===e.type?(0,l.jsx)(n.Z,{as:e.href?"a":"submit"===e.type?"button":"a",type:"submit"===e.type?"submit":void 0,style:r,className:"border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""),href:e.href,onClick:e.onClick,disabled:e.disabled,variant:"secondary","aria-label":e.ariaLabel,target:e.target,children:(0,l.jsx)(s,{...e})}):(0,l.jsx)(i.rU,{style:r,target:e.target,className:"btn border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""," "),to:e.to?e.to:"#",onClick:e.onClick,"aria-label":e.ariaLabel,children:(0,l.jsx)(s,{...e})})},s=e=>(0,l.jsxs)(l.Fragment,{children:[e.icon&&"after"!==e.iconPosition&&(0,l.jsx)("i",{className:"".concat(e.icon," left-icon")}),e.title,e.icon&&"after"===e.iconPosition&&(0,l.jsx)("i",{className:"".concat(e.icon," right-icon")}),"btn-link-gradient"===e.theme&&(0,l.jsx)("span",{})]});c.defaultProps={size:"lg",style:"primary"};const r=(0,a.memo)(c)},28033:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>c});var a=o(72791),i=o(30018),n=o(80184);const l=e=>{const[t,o]=(0,a.useState)(!0);if(t)return(0,n.jsx)(i.Z,{className:"".concat(e.theme).concat(e.className?" ".concat(e.className):""),variant:e.variant,onClose:()=>o(!1),dismissible:e.dismissible,children:e.message})};l.defaultProps={className:"",theme:"message-box01"};const c=(0,a.memo)(l)},25705:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>c});var a=o(72791),i=o(92520),n=o(80184);const l=e=>{let{theme:t,children:o,className:l,...c}=e;return(0,a.useEffect)((()=>{let e=document.querySelectorAll(".smooth-scrollbar");const t=()=>{e.forEach((e=>{setTimeout((()=>{let t=e.querySelector(".scroll-content");null!==t&&t.clientHeight>e.clientHeight&&e.classList.add("scrollbar-appear"),null!==t&&t.clientHeight<e.clientHeight&&e.classList.remove("scrollbar-appear")}),500)}))};t(),window.addEventListener("resize",t),document.querySelectorAll(".accordion-button").forEach((e=>{e.addEventListener("click",t)}));let o=document.querySelectorAll(".navbar-nav > .nav-item");"undefined"!=typeof o&&null!=o&&o.forEach((e=>{let o=e.querySelector(".fa");"undefined"!=typeof o&&null!=o&&o.addEventListener("click",t)}))}),[]),(0,n.jsx)(i.Scrollbar,{...c,className:"smooth-scrollbar ".concat(t).concat(l?" ".concat(l):""),plugins:{overscroll:{effect:"bounce"}},children:o})};l.defaultProps={theme:"light"};const c=(0,a.memo)(l)},29213:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>s});var a=o(72791),i=o(34290),n=o(96006),l=o(80184);const c=e=>(0,l.jsx)("ul",{className:"social-icon flex-wrap gap-y-5 p-0 ".concat(e.theme," ").concat(e.size," ").concat(e.iconColor," ").concat(e.className),children:e.data.map(((t,o)=>"social-icon-style-11"!==e.theme?(0,l.jsx)(i.m.li,{style:{"--social-icon-color":t.color?t.color:"#000"},...e.animation,transition:{delay:o*e.animationDelay},children:(0,l.jsxs)("a",{href:t.link,"aria-label":"social icon",target:"_blank",rel:"noreferrer",children:[t.name&&(0,l.jsx)("span",{className:"flex brand-label",children:t.name?t.name:"icon"}),t.icon&&(0,l.jsx)("i",{className:"".concat(t.icon," brand-icon")}),(0,l.jsx)("span",{})]})},o):(0,l.jsx)(i.m.li,{style:{"--social-icon-color":t.color?t.color:"#000"},...e.animation,transition:{delay:o*e.animationDelay},children:(0,l.jsxs)("a",{href:t.link,"aria-label":"social icon",target:"_blank",rel:"noreferrer",children:[t.socialback&&(0,l.jsx)("div",{className:"social-back",children:(0,l.jsx)("span",{children:t.socialback})}),(0,l.jsxs)("div",{className:"".concat(t.position," social-front grid"),children:[t.icon&&(0,l.jsx)("i",{className:t.icon}),t.name&&(0,l.jsx)("span",{children:t.name?t.name:"icon"})]})]})},o)))});c.defaultProps={data:n.mc,theme:"social-icon-style-01",size:"lg",iconColor:"light",className:"justify-center",animationDelay:.2};const s=(0,a.memo)(c)},96006:(e,t,o)=>{"use strict";o.d(t,{Fg:()=>c,JV:()=>b,Q6:()=>r,Tq:()=>l,X_:()=>i,Xy:()=>f,gE:()=>p,k9:()=>s,kJ:()=>m,mc:()=>a,y:()=>n,zm:()=>d});const a=[{color:"#0038e3",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#0038e3",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#0038e3",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#0038e3",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0038e3",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#0038e3",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0038e3",link:"https://www.behance.net/",icon:"fab fa-behance"}],i=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],n=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],l=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],c=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],s=[{color:"#0038e3",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#0038e3",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#0038e3",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#0038e3",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0038e3",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#0038e3",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0038e3",link:"https://www.behance.net/",icon:"fab fa-behance"}],r=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],f=[{name:"FACEBOOK",color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{name:"DRIBBBLE",color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{name:"BEHANCE",color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"},{name:"INSTAGRAM",color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"}],m=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],p=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#007bb6",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],d=[{position:"top-left",name:"FACEBOOK",color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f",socialback:"LIKE US"},{position:"top",name:"TWITTER",color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter",socialback:"FOLLOW US"},{position:"top-left",name:"LINKEDIN",color:"#007bb6",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in",socialback:"JOIN US"},{position:"top-right",name:"GOOGLE",color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g",socialback:"FOLLOW US"}],b=[{color:"#000",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#000",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#000",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#000",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#000",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#000",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#000",link:"https://www.behance.net/",icon:"fab fa-behance"}]},62752:(e,t,o)=>{"use strict";o.d(t,{Z:()=>i});var a=o(72791);function i(e,t){(0,a.useEffect)((()=>{const o=o=>{e.current&&!e.current.contains(o.target)&&t(o)};return document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}}),[e,t])}},22656:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>k});o(72791);var a=o(47022),i=o(89743),n=o(2677),l=o(34290),c=o(71856),s=o(92506),r=o(81724),f=o(11087),m=o(17728),p=o(28033),d=o(29213),b=o(49823),h=o(38480),g=o(21240),w=o(80184);const u=[{color:"#fff",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#fff",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#fff",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"}],x={start:{d:"M138.92693095104482 7.887601015213008 C130.0407614796366 0.6655671559049301 105.13678445383023 -1.2260778499372722 93.7743371190718 0.19398253765942286 C76.52241300875639 2.350100257469652 40.023151182921666 14.04251273454984 30.201541438200067 28.388721681590567 C10.929171317896984 56.539448073378175 5.421327056359363 135.9255509123166 23.750443112357786 164.69934369402995 C36.10831588698061 184.09923561208046 85.88737110256994 198.9053742554075 108.87830870886877 199.60509843612436 C120.72782965338001 199.96573602632483 143.93733531547028 190.9447273920637 153.76602988682228 184.3161552148183 C165.64958043864942 176.30176714091004 188.83304277321565 155.05521249269236 191.24196528625475 140.92558821448853 C197.24828213435504 105.695314139614 166.66107689901452 30.427902743611956 138.92693095104482 7.887601015213008Z"},end:{d:"M194.76732932737994 68.07581963219864 C189.05627796873216 51.77985662149475 167.0258172972712 21.75354369785732 151.4679479462077 14.26173354792823 C128.44842704297372 3.176804342145724 72.9449769977162 4.213918563635485 49.271123416791795 13.822386430084805 C38.10673987398935 18.3536563457765 20.73865835855422 37.046140886691774 14.85298618261804 47.55969071427434 C7.014769294710606 61.56106240931041 -2.1176631181070182 94.29278328157122 0.5135567806981669 110.1216409525646 C4.10466705483331 131.7249943765561 26.001266281120085 177.30258909599334 46.65534701535798 184.58337896979597 C83.61983902143294 197.6137676155591 171.8407907572352 164.5091843459407 194.54933887167263 132.56412932859737 C203.890351553269 119.42373996827612 200.09950300207345 83.29068980454957 194.76732932737994 68.07581963219864Z"}},y={start:{d:"M130.26147932508917 4.688705448634252 C117.63442447607751 -3.1698304608736 84.4759056617675 -1.4108427818293219 70.7712946074514 4.366936778770906 C48.41016296862879 13.794252068685026 11.888574138141472 51.50145393879939 3.378199239985449 74.2273862813247 C-1.9953849565611046 88.5768964203011 -0.6670560808164234 121.89062841465648 6.490214357666744 135.43896145663535 C18.875716720390454 158.8840600238427 64.45706460398668 198.55151157557756 90.95225601331838 199.589850530822 C121.65677069332263 200.79315165824443 186.20259530225906 162.76339137380688 194.3506855995131 133.13530031404323 C203.86673575595648 98.53303275456364 160.7296767483216 23.650801235141994 130.26147932508917 4.688705448634252Z"},end:{d:"M191.8191746196319 60.3863764322229 C171.80412763367613 30.02120401833544 90.4623226509454 2.073084503589257 55.11710936183459 10.638228934501953 C38.04184735204352 14.776047657315967 14.047842611168942 45.972306295189846 7.404237395786453 62.23725714749884 C0.7799906562875147 78.45481435605362 -3.244913273088775 117.01732784183048 5.353389850271483 132.2803219805086 C21.657492842675737 161.2220125488936 87.79832919037327 199.69819198232986 120.96095982959523 197.77851585610253 C141.31190872993136 196.60046604530606 177.05772746141432 167.57600136280618 186.79422210320485 149.66651799250224 C197.47181144472052 130.02596810445323 204.12232975231825 79.0517049273779 191.8191746196319 60.3863764322229Z"}},k=()=>(0,w.jsxs)("div",{children:[(0,w.jsx)(b.default,{animation:!1}),(0,w.jsxs)("section",{className:"overflow-hidden relative px-[130px] lg:px-[0px]",style:{backgroundImage:"linear-gradient(to right top,#0039e3,#4132e0,#5e28dd,#741bd9,#8600d4)"},children:[(0,w.jsxs)(l.m.svg,{xmlns:"http://www.w3.org/2000/svg",height:"1200",width:"1200",viewBox:"0 0 250 250",id:"blobSvg",className:"absolute -top-[90px] left-[40%]",initial:"start",animate:"end",transition:{duration:10,ease:"easeOut",repeat:1/0},children:[(0,w.jsx)("defs",{children:(0,w.jsxs)("linearGradient",{id:"gradient-one",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[(0,w.jsx)("stop",{offset:"0%",style:{stopColor:"#4A22DB"}}),(0,w.jsx)("stop",{offset:"100%",style:{stopColor:"#4A22DB"}})]})}),(0,w.jsx)(l.m.path,{variants:x,transition:{duration:8,yoyo:1/0,repeat:1/0},fill:"url(#gradient-one)"})]}),(0,w.jsxs)(l.m.svg,{xmlns:"http://www.w3.org/2000/svg",height:"500",width:"500",viewBox:"0 0 400 400",id:"blobSvg",className:"absolute -top-[10%] -left-[50px] opacity-80 md:bottom",initial:"start",animate:"end",transition:{times:[1,6,2,2,6,2,2,6],duration:10,ease:"easeOut",repeat:1/0},children:[(0,w.jsx)("defs",{children:(0,w.jsxs)("linearGradient",{id:"gradient-two",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[(0,w.jsx)("stop",{offset:"0%",style:{stopColor:"#4722DB"}}),(0,w.jsx)("stop",{offset:"100%",style:{stopColor:"#4722DB"}})]})}),(0,w.jsx)(l.m.path,{variants:y,transition:{duration:2,yoyo:1/0,repeat:1/0},fill:"url(#gradient-two)"})]}),(0,w.jsx)(a.Z,{fluid:!0,className:"relative",children:(0,w.jsxs)(i.Z,{className:"items-center h-[100vh] landscape:md:h-auto sm:items-start xs:h-auto mxl:justify-center",children:[(0,w.jsxs)(n.Z,{md:6,xs:12,className:"text-[#fff] font-serif flex flex-col justify-between items-start sm:items-center sm:text-center sm:px-[100px] sm:pt-[50px] sm:pb-0 sm:h-auto xs:px-[20px] h-full py-[90px]",children:[(0,w.jsx)(f.rU,{"aria-label":"homepage",to:"/",className:"inline-block mb-14 sm:flex sm:justify-center xs:mb-[110px]",children:(0,w.jsx)(l.m.img,{loading:"lazy",alt:"logo",src:"/assets/img/webp/logo-white.webp",height:"36",width:"111",...g.ER})}),(0,w.jsxs)("div",{className:"w-[60%] xl:w-[85%] lg:w-full",children:[(0,w.jsx)(l.m.h6,{...g.eu,transition:{delay:.4,duration:.6,ease:"easeOut"},className:"text-[40px] mb-[30px] font-semibold -tracking-[1px] leading-[46px] lg:tracking-normal md:text-[28px] md:leading-[30px] sm:text-[35px] sm:leading-[41px] sm:mb-[20px]",children:"The website is in maintenance mode."}),(0,w.jsx)(l.m.span,{...g.eu,transition:{delay:.6,duration:.6,ease:"easeOut"},className:"text-xmd mb-[60px] inline-block opacity-70 sm:mb-[25px]",children:"We have almost done all the technical improvements and will be back very soon. Thank you for your patience!"}),(0,w.jsx)(l.m.div,{...g.eu,transition:{delay:.8,duration:.6,ease:"easeOut"},children:(0,w.jsx)(s.J9,{initialValues:{email:""},validationSchema:r.Ry().shape({email:r.Z_().email("Invalid email.").required("Field is required.")}),onSubmit:async(e,t)=>{t.setSubmitting(!0);"success"===(await(0,h.sendEmail)(e)).status&&(0,h.resetForm)(t)},children:e=>{let{isSubmitting:t,status:o}=e;return(0,w.jsxs)("div",{className:"relative mb-16 subscribe-style-03",children:[(0,w.jsxs)(s.l0,{className:"relative",children:[(0,w.jsx)(m.II,{showErrorMsg:!1,type:"email",name:"email",className:"border-[1px] border-solid pt-[18px] pr-[145px] pb-[19px] pl-[25px] border-transparent text-darkgray",placeholder:"Your email address"}),(0,w.jsx)("button",{type:"submit",className:"text-xs tracking-[1px] py-[12px] px-[28px] uppercase !text-fastblue hover:!text-darkgray".concat(t?" loading":""),children:"Notify Me"})]}),(0,w.jsx)(c.M,{children:o&&(0,w.jsx)(l.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"absolute top-[115%] left-0 w-full",children:(0,w.jsx)(p.default,{className:"py-[5px] rounded-[4px]",theme:"message-box01",variant:"success",message:"Your message has been sent successfully subscribed to our email list!"})})})]})}})})]}),(0,w.jsx)(l.m.div,{...g.Ji,transition:{delay:1,duration:.6,ease:"circOut"},children:(0,w.jsx)(d.default,{theme:"social-icon-style-01",className:"justify-start sm:justify-center",size:"sm",iconColor:"light",data:u})})]}),(0,w.jsxs)(n.Z,{className:"relative h-[750px] max-w-[750px] xl:w-[600px] xl:h-[600px] md:w-[450px] md:h-[450px] sm:scale-75 sm:bottom-0 xs:h-[350px]",children:[(0,w.jsx)(l.m.img,{loading:"lazy",width:"830",height:"439.45",className:"absolute bottom-0 left-1/2 -translate-x-1/2",src:"https://via.placeholder.com/950x503",alt:"maintenance",initial:{opacity:0,x:"-50%",y:50},animate:{opacity:1,x:"-50%",y:0},transition:{delay:1.4,duration:.6,ease:"easeOut"}}),(0,w.jsx)(l.m.div,{className:"absolute left-[20%] bottom-[40%] xl:bottom-[30%] xl:left-[10%] md:bottom-[15%] xs:left-0",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{delay:2,duration:1},children:(0,w.jsx)(l.m.img,{loading:"lazy",width:"170",height:"339",className:"xl:scale-75 md:scale-50 max-w-[inherit]",src:"https://via.placeholder.com/173x343",alt:"plant"})}),(0,w.jsxs)("div",{className:"absolute top-[100px] left-1/2 -translate-x-1/2 flex items-start xl:scale-75 sm:top-0",children:[(0,w.jsx)(l.m.img,{className:"",loading:"lazy",src:"https://via.placeholder.com/474x530",alt:"big-screen",initial:{opacity:0,y:50},animate:{opacity:1,y:[0,5,0]},transition:{delay:2,y:{repeat:1/0,duration:2}}}),(0,w.jsx)(l.m.img,{loading:"lazy",className:"relative right-[140px]",src:"https://via.placeholder.com/236x266",alt:"small-screen",initial:{opacity:0,y:50},animate:{opacity:1,y:[0,10,0]},transition:{delay:2,y:{repeat:1/0,duration:2.5}}})]}),(0,w.jsxs)("div",{className:"absolute bottom-[0px] left-1/2 -translate-x-1/2 flex items-center md:bottom-[-20px]",children:[(0,w.jsx)(l.m.img,{loading:"lazy",width:"387",height:"235",src:"https://via.placeholder.com/410x249",alt:"small-base",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{delay:1.6,duration:1.5}}),(0,w.jsx)(l.m.div,{className:"relative bottom-[-40px] right-[90px]",initial:{opacity:0,y:50},animate:{opacity:1,y:[0,15,0]},transition:{delay:1.8,y:{repeat:1/0,duration:2}},children:(0,w.jsx)("img",{loading:"lazy",width:"110",height:"80",className:"xl:scale-75 md:scale-50 max-w-[inherit]",src:"https://via.placeholder.com/108x79",alt:"right-icon"})}),(0,w.jsx)(l.m.div,{className:"relative bottom-[40px] right-[450px] xl:right-[370px] md:right-[320px] md:bottom-[30px] sm:right-[380px] xs:right-[320px]",initial:{opacity:0,y:50},animate:{opacity:1,y:[0,15,0],x:[0,15,0]},transition:{delay:1.8,x:{repeat:1/0,duration:2},y:{repeat:1/0,duration:2}},children:(0,w.jsx)(l.m.img,{loading:"lazy",width:"110",height:"80",className:"xl:scale-75 md:scale-50 max-w-[inherit]",src:"https://via.placeholder.com/110x80",alt:"left-icon"})})]}),(0,w.jsxs)("div",{className:"absolute bottom-[30%] right-[7%] flex items-start xl:bottom-[20%] xl:right-0 xl:scale-50 md:bottom-[10%]",children:[(0,w.jsx)(l.m.img,{loading:"lazy",className:"relative top-[70px] left-[100px]",src:"https://via.placeholder.com/109x93",alt:"laptop",initial:{opacity:0,y:50},animate:{opacity:1,y:[0,15,0]},transition:{delay:1.8,y:{repeat:1/0,duration:2.5}}}),(0,w.jsx)(l.m.img,{loading:"lazy",src:"https://via.placeholder.com/189x397",alt:"user",initial:{opacity:0,y:50},animate:{opacity:1,y:[0,15,0]},transition:{delay:1.8,y:{repeat:1/0,duration:2}}})]})]})]})})]})]})},80888:(e,t,o)=>{"use strict";var a=o(79047);function i(){}function n(){}n.resetWarningCache=i,e.exports=function(){function e(e,t,o,i,n,l){if(l!==a){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:i};return o.PropTypes=o,o}},52007:(e,t,o)=>{e.exports=o(80888)()},79047:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},43360:(e,t,o)=>{"use strict";o.d(t,{Z:()=>f});var a=o(41418),i=o.n(a),n=o(72791),l=o(15341),c=o(10162),s=o(80184);const r=n.forwardRef(((e,t)=>{let{as:o,bsPrefix:a,variant:n="primary",size:r,active:f=!1,disabled:m=!1,className:p,...d}=e;const b=(0,c.vE)(a,"btn"),[h,{tagName:g}]=(0,l.FT)({tagName:o,disabled:m,...d}),w=g;return(0,s.jsx)(w,{...h,...d,ref:t,disabled:m,className:i()(p,b,f&&"active",n&&"".concat(b,"-").concat(n),r&&"".concat(b,"-").concat(r),d.href&&m&&"disabled")})}));r.displayName="Button";const f=r},80473:(e,t,o)=>{"use strict";o.d(t,{Z:()=>m});var a=o(52007),i=o.n(a),n=o(72791),l=o(41418),c=o.n(l),s=o(80184);const r={"aria-label":i().string,onClick:i().func,variant:i().oneOf(["white"])},f=n.forwardRef(((e,t)=>{let{className:o,variant:a,"aria-label":i="Close",...n}=e;return(0,s.jsx)("button",{ref:t,type:"button",className:c()("btn-close",a&&"btn-close-".concat(a),o),"aria-label":i,...n})}));f.displayName="CloseButton",f.propTypes=r;const m=f},47022:(e,t,o)=>{"use strict";o.d(t,{Z:()=>r});var a=o(41418),i=o.n(a),n=o(72791),l=o(10162),c=o(80184);const s=n.forwardRef(((e,t)=>{let{bsPrefix:o,fluid:a=!1,as:n="div",className:s,...r}=e;const f=(0,l.vE)(o,"container"),m="string"===typeof a?"-".concat(a):"-fluid";return(0,c.jsx)(n,{ref:t,...r,className:i()(s,a?"".concat(f).concat(m):f)})}));s.displayName="Container";const r=s},89743:(e,t,o)=>{"use strict";o.d(t,{Z:()=>r});var a=o(41418),i=o.n(a),n=o(72791),l=o(10162),c=o(80184);const s=n.forwardRef(((e,t)=>{let{bsPrefix:o,className:a,as:n="div",...s}=e;const r=(0,l.vE)(o,"row"),f=(0,l.pi)(),m=(0,l.zG)(),p="".concat(r,"-cols"),d=[];return f.forEach((e=>{const t=s[e];let o;delete s[e],null!=t&&"object"===typeof t?({cols:o}=t):o=t;const a=e!==m?"-".concat(e):"";null!=o&&d.push("".concat(p).concat(a,"-").concat(o))})),(0,c.jsx)(n,{ref:t,...s,className:i()(a,r,...d)})}));s.displayName="Row";const r=s},27472:(e,t,o)=>{"use strict";o.d(t,{Z:()=>c});var a=o(72791),i=o(41418),n=o.n(i),l=o(80184);const c=e=>a.forwardRef(((t,o)=>(0,l.jsx)("div",{...t,ref:o,className:n()(t.className,e)})))},92199:(e,t,o)=>{"use strict";o.d(t,{L:()=>i});var a=o(72791),i=o(26219).j?a.useLayoutEffect:a.useEffect}}]);
//# sourceMappingURL=8172.73b62293.chunk.js.map