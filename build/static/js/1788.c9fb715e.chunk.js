(self.webpackChunklitho=self.webpackChunklitho||[]).push([[1788,5705,2502,4368],{43739:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>r});var o=a(72791),i=a(11087),n=a(43360),s=a(80184);const c=e=>{const t=e.themeColor&&e.themeColor[0],a=e.themeColor&&e.themeColor[1],o=e.color&&e.color[0],c=e.color&&e.color[1],r={"--gradient-color":"object"===typeof e.themeColor?"linear-gradient(45deg, ".concat(t,", ").concat(a,", ").concat(t,")"):e.themeColor,"--brand-color":"object"===typeof e.themeColor?"linear-gradient(to right, ".concat(t,", ").concat(a,", ").concat(t,")"):e.themeColor,"--text-color":"object"===typeof e.color?"linear-gradient(to right, ".concat(o,", ").concat(c,", ").concat(o,")"):e.color};return e.href||"submit"===e.type?(0,s.jsx)(n.Z,{as:e.href?"a":"submit"===e.type?"button":"a",type:"submit"===e.type?"submit":void 0,style:r,className:"border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""),href:e.href,onClick:e.onClick,disabled:e.disabled,variant:"secondary","aria-label":e.ariaLabel,target:e.target,children:(0,s.jsx)(l,{...e})}):(0,s.jsx)(i.rU,{style:r,target:e.target,className:"btn border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""," "),to:e.to?e.to:"#",onClick:e.onClick,"aria-label":e.ariaLabel,children:(0,s.jsx)(l,{...e})})},l=e=>(0,s.jsxs)(s.Fragment,{children:[e.icon&&"after"!==e.iconPosition&&(0,s.jsx)("i",{className:"".concat(e.icon," left-icon")}),e.title,e.icon&&"after"===e.iconPosition&&(0,s.jsx)("i",{className:"".concat(e.icon," right-icon")}),"btn-link-gradient"===e.theme&&(0,s.jsx)("span",{})]});c.defaultProps={size:"lg",style:"primary"};const r=(0,o.memo)(c)},90180:(e,t,a)=>{"use strict";a.d(t,{Z:()=>j});var o=a(72791),i=a(47022),n=a(89743),s=a(2677),c=a(11087),l=a(71856),r=a(34290),m=a(81724),d=a(92506),f=a(28033),p=a(17728),b=a(29213),h=a(54198),g=a(38480),x=a(90013),u=a(80184);const w=[{color:"#828282",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#828282",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#828282",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#828282",link:"https://www.instagram.com/",icon:"fab fa-instagram"}],k=e=>(0,u.jsxs)(h.Footer,{theme:e.theme,className:"".concat(e.className?" ".concat(e.className):""," footer-style-03"),children:[(0,u.jsx)("div",{className:"py-[6%] lg:py-[8%] md:py-[50px] md:pb-0 xs:py-[50px]",children:(0,u.jsx)(i.Z,{children:(0,u.jsxs)(n.Z,{className:"justify-between md:justify-start",children:[(0,u.jsxs)(s.Z,{lg:{span:3,order:0},sm:{span:6,order:1},className:"md:mb-[40px] xs:mb-[25px]",children:[(0,u.jsx)("span",{className:"font-serif font-medium block text-themecolor mb-[20px] xs:mb-[10px]",children:"About company"}),(0,u.jsx)("p",{className:"md:w-9/12 xs:w-full",children:"Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore enim ad minim nostrud."})]}),(0,u.jsx)(h.default,{data:x.Z.slice(0,2),lg:{span:2,order:0},md:6,sm:{span:6,order:2},className:"xl:px-[15px] md:mb-[40px] xs:mb-[25px]",titleClass:"capitalize leading-[20px] mb-[25px]"}),(0,u.jsxs)(s.Z,{xl:{span:3},lg:{span:4,order:0},sm:{span:6,order:3},md:5,children:[(0,u.jsx)("span",{className:"font-serif font-medium block text-themecolor mb-[20px] xs:mb-[10px]",children:"Subscribe to newsletter"}),(0,u.jsx)("p",{className:"mb-[25px] md:mb-[20px]",children:"Enter your email address for receiving valuable newsletters."}),(0,u.jsx)(d.J9,{initialValues:{email:""},validationSchema:m.Ry().shape({email:m.Z_().email("Invalid email.").required("Field is required.")}),onSubmit:async(e,t)=>{t.setSubmitting(!0);"success"===(await(0,g.sendEmail)(e)).status&&(0,g.resetForm)(t)},children:e=>{let{isSubmitting:t,status:a}=e;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(d.l0,{className:"w-full relative flex rounded-[0.25rem] overflow-hidden",children:[(0,u.jsx)(p.II,{showErrorMsg:!1,type:"email",name:"email",labelClass:"w-full",className:"border-[1px] border-solid border-transparent py-[13px] pl-[15px] pr-[15px] w-full",placeholder:"Enter your email address"}),(0,u.jsx)("button",{"aria-label":"subscribe",type:"submit",className:"text-lg tracking-[1px] py-[8px] px-[18px] btn-gradient uppercase".concat(t?" loading":""),children:(0,u.jsx)("i",{className:"feather-mail text-lg m-0"})})]}),(0,u.jsx)(l.M,{children:a&&(0,u.jsx)(r.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"mt-[20px] w-full text relative",children:(0,u.jsx)(f.default,{className:"absolute py-[13px] px-[20px] text-md leading-[20px] rounded-[4px]",theme:"message-box01",variant:"success",message:"Your message has been sent successfully subscribed to our email list!"})})})]})}})]})]})})}),(0,u.jsx)("div",{className:"py-[35px] border-t border-[#ffffff1a]",children:(0,u.jsx)(i.Z,{children:(0,u.jsxs)(n.Z,{children:[(0,u.jsx)(s.Z,{md:3,className:"sm:mb-[20px]",children:(0,u.jsx)(c.rU,{"aria-label":"link",to:"/",className:"sm:flex sm:justify-center",children:(0,u.jsx)("img",{src:e.logo,alt:"logo",width:"111",height:"36"})})}),(0,u.jsx)(s.Z,{md:6,className:"flex justify-center sm:mb-[20px]",children:(0,u.jsxs)("p",{className:"mb-0 xs:text-center",children:["\xa9 ",(new Date).getFullYear()," Litho is Proudly Powered by ",(0,u.jsx)("a",{"aria-label":"themezaa",className:"text-themecolor underline underline-offset-4",rel:"noreferrer",target:"_blank",href:"https://www.themezaa.com/",children:"ThemeZaa"})]})}),(0,u.jsx)(s.Z,{md:3,children:(0,u.jsx)(b.default,{size:"xs",theme:"social-icon-style-01",className:"felx justify-end md:justify-center",iconColor:"dark"===e.theme?"light":"dark",data:w})})]})})})]});k.defaultProps={data:x.Z,logo:"/assets/img/webp/logo-white.webp"};const j=(0,o.memo)(k)},44368:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d});var o=a(72791),i=a(89743),n=a(34290),s=a(11087),c=a(43739),l=a(98899),r=a(80184);const m=e=>(0,r.jsx)(i.Z,{className:"".concat(e.grid," md:justify-center"),children:e.data.map(((t,a)=>(0,r.jsx)(n.m.div,{className:"col".concat(e.theme?" ".concat(e.theme):"").concat(e.className?" ".concat(e.className):""),...e.animation,transition:{delay:a*e.animationDelay,ease:e.animationTransition,duration:e.animationDuration},children:(0,r.jsxs)("div",{className:"rounded-md w-full",children:[t.img?(0,r.jsx)("img",{height:42,width:51,className:"inline-block items-center justify-center mb-[30px]",src:t.img,alt:"featurebox"}):t.icon?"icon-with-text-05"===e.theme?(0,r.jsx)(s.rU,{"aria-label":"link for icon",to:"#",children:(0,r.jsx)("i",{className:t.icon})}):(0,r.jsx)("i",{className:t.icon}):t.textIcon?(0,r.jsx)("span",{className:"text-basecolor inline-block icon-text",children:t.textIcon}):(0,r.jsx)("span",{className:"text-basecolor inline-block icon-text",children:"".concat(a<=9?"0":"").concat(a+1)}),(0,r.jsxs)("div",{className:"feature-box-content",children:[t.title&&(0,r.jsx)("span",{className:"font-medium title font-serif",children:t.title}),t.content&&(0,r.jsx)("p",{children:t.content}),"icon-with-text-11"===e.theme?(0,r.jsx)(c.default,{ariaLabel:"iconwithtext",href:"#",className:"font-medium font-serif uppercase btn-link after:h-[2px] after:bg-darkgray md:text-md md:mb-[15px]",size:"xl",color:"#232323",title:"Read more"}):""]}),(t.linkTitle||t.link)&&(0,r.jsx)(c.default,{ariaLabel:"iconwithtext",className:"font-medium font-serif uppercase btn-link after:h-[1px] md:text-md md:mb-[15px] after:bg-basecolor hover:text-basecolor",to:t.link,title:t.linkTitle})]})},a)))});m.defaultProps={data:l.y_,animationDelay:.6,animationDuration:.8,animationTransition:"circOut",theme:"icon-with-text-01"};const d=(0,o.memo)(m)},28033:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var o=a(72791),i=a(30018),n=a(80184);const s=e=>{const[t,a]=(0,o.useState)(!0);if(t)return(0,n.jsx)(i.Z,{className:"".concat(e.theme).concat(e.className?" ".concat(e.className):""),variant:e.variant,onClose:()=>a(!1),dismissible:e.dismissible,children:e.message})};s.defaultProps={className:"",theme:"message-box01"};const c=(0,o.memo)(s)},25705:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var o=a(72791),i=a(92520),n=a(80184);const s=e=>{let{theme:t,children:a,className:s,...c}=e;return(0,o.useEffect)((()=>{let e=document.querySelectorAll(".smooth-scrollbar");const t=()=>{e.forEach((e=>{setTimeout((()=>{let t=e.querySelector(".scroll-content");null!==t&&t.clientHeight>e.clientHeight&&e.classList.add("scrollbar-appear"),null!==t&&t.clientHeight<e.clientHeight&&e.classList.remove("scrollbar-appear")}),500)}))};t(),window.addEventListener("resize",t),document.querySelectorAll(".accordion-button").forEach((e=>{e.addEventListener("click",t)}));let a=document.querySelectorAll(".navbar-nav > .nav-item");"undefined"!=typeof a&&null!=a&&a.forEach((e=>{let a=e.querySelector(".fa");"undefined"!=typeof a&&null!=a&&a.addEventListener("click",t)}))}),[]),(0,n.jsx)(i.Scrollbar,{...c,className:"smooth-scrollbar ".concat(t).concat(s?" ".concat(s):""),plugins:{overscroll:{effect:"bounce"}},children:a})};s.defaultProps={theme:"light"};const c=(0,o.memo)(s)},29213:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var o=a(72791),i=a(34290),n=a(96006),s=a(80184);const c=e=>(0,s.jsx)("ul",{className:"social-icon flex-wrap gap-y-5 p-0 ".concat(e.theme," ").concat(e.size," ").concat(e.iconColor," ").concat(e.className),children:e.data.map(((t,a)=>"social-icon-style-11"!==e.theme?(0,s.jsx)(i.m.li,{style:{"--social-icon-color":t.color?t.color:"#000"},...e.animation,transition:{delay:a*e.animationDelay},children:(0,s.jsxs)("a",{href:t.link,"aria-label":"social icon",target:"_blank",rel:"noreferrer",children:[t.name&&(0,s.jsx)("span",{className:"flex brand-label",children:t.name?t.name:"icon"}),t.icon&&(0,s.jsx)("i",{className:"".concat(t.icon," brand-icon")}),(0,s.jsx)("span",{})]})},a):(0,s.jsx)(i.m.li,{style:{"--social-icon-color":t.color?t.color:"#000"},...e.animation,transition:{delay:a*e.animationDelay},children:(0,s.jsxs)("a",{href:t.link,"aria-label":"social icon",target:"_blank",rel:"noreferrer",children:[t.socialback&&(0,s.jsx)("div",{className:"social-back",children:(0,s.jsx)("span",{children:t.socialback})}),(0,s.jsxs)("div",{className:"".concat(t.position," social-front grid"),children:[t.icon&&(0,s.jsx)("i",{className:t.icon}),t.name&&(0,s.jsx)("span",{children:t.name?t.name:"icon"})]})]})},a)))});c.defaultProps={data:n.mc,theme:"social-icon-style-01",size:"lg",iconColor:"light",className:"justify-center",animationDelay:.2};const l=(0,o.memo)(c)},96006:(e,t,a)=>{"use strict";a.d(t,{Fg:()=>c,JV:()=>b,Q6:()=>r,Tq:()=>s,X_:()=>i,Xy:()=>m,gE:()=>f,k9:()=>l,kJ:()=>d,mc:()=>o,y:()=>n,zm:()=>p});const o=[{color:"#0038e3",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#0038e3",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#0038e3",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#0038e3",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0038e3",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#0038e3",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0038e3",link:"https://www.behance.net/",icon:"fab fa-behance"}],i=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],n=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],s=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],c=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],l=[{color:"#0038e3",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#0038e3",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#0038e3",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#0038e3",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0038e3",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#0038e3",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0038e3",link:"https://www.behance.net/",icon:"fab fa-behance"}],r=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],m=[{name:"FACEBOOK",color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{name:"DRIBBBLE",color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{name:"BEHANCE",color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"},{name:"INSTAGRAM",color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"}],d=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],f=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#007bb6",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],p=[{position:"top-left",name:"FACEBOOK",color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f",socialback:"LIKE US"},{position:"top",name:"TWITTER",color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter",socialback:"FOLLOW US"},{position:"top-left",name:"LINKEDIN",color:"#007bb6",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in",socialback:"JOIN US"},{position:"top-right",name:"GOOGLE",color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g",socialback:"FOLLOW US"}],b=[{color:"#000",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#000",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#000",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#000",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#000",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#000",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#000",link:"https://www.behance.net/",icon:"fab fa-behance"}]},25308:(e,t,a)=>{"use strict";a.d(t,{Z:()=>f});var o=a(72791),i=a(81620),n=a(34290),s=a(89743),c=a(58563),l=a(51496),r=a(80184);const m=(e,t,a)=>{switch(e.theme){case"testimonials-style-01":return(0,r.jsxs)("div",{className:"".concat(e.theme," bg-lightgray relative"),children:[(0,r.jsx)("i",{className:"ti-quote-left absolute -top-[25px] left-[50px] inline-block text-[50px] z-10"}),(0,r.jsx)("p",{className:"text-xmd w-[75%] mb-0 lg:w-[85%] md:w-[80%]",children:t.content}),(0,r.jsxs)("div",{className:"author border-t border-mediumgray flex items-center mt-10 pt-10",children:[t.img&&(0,r.jsx)("img",{width:"",height:"",className:"rounded-circle w-[60px] h-[60px] mr-[19px]",alt:"",src:t.img}),(0,r.jsxs)("div",{className:"inline-block align-middle",children:[t.name&&(0,r.jsx)("span",{className:"font-serif text-md font-medium leading-[20px] text-darkgray block uppercase",children:t.name}),t.designation&&(0,r.jsx)("span",{className:"block text-sm uppercase",children:t.designation})]})]})]});case"testimonials-style-02":return(0,r.jsxs)("div",{className:"".concat(e.theme," "),children:[t.img&&(0,r.jsx)("img",{width:"",height:"",className:"w-full h-auto",src:t.img,alt:""}),(0,r.jsxs)("div",{className:"bg-white p-[49px] text-center relative",children:[(0,r.jsx)("div",{className:"testimonials-rounded-icon absolute -top-[40px] left-1/2 text-[28px] h-[75px] w-[75px] leading-[71px] overflow-hidden bg-white rounded-full flex items-center justify-center",children:(0,r.jsx)("i",{className:"fa fa-quote-left"})}),t.content&&(0,r.jsx)("p",{className:"mb-7",children:t.content}),t.name&&(0,r.jsx)("span",{className:"font-serif font-medium text-center text-darkgray block",children:t.name}),t.designation&&(0,r.jsx)("span",{className:"block font-serif text-sm font-medium",children:t.designation})]})]});case"testimonials-style-03":return(0,r.jsxs)("div",{className:"".concat(e.theme),children:[(0,r.jsx)("div",{className:"testimonials-bubble py-8 px-12 lg:px-8 relative bg-white mb-[35px] rounded",children:t.content&&(0,r.jsx)("p",{className:"mb-0",children:t.content})}),(0,r.jsxs)("div",{className:"px-[20px] flex items-center",children:[t.img&&(0,r.jsx)("img",{width:"",height:"",className:"rounded-circle w-[60px] h-[60px] mr-[19px]",src:t.img,alt:""}),(0,r.jsxs)("div",{className:"inline-block align-middle",children:[t.name&&(0,r.jsx)("span",{className:"font-serif text-md font-medium leading-[24px] text-darkgray block",children:t.name}),t.designation&&(0,r.jsx)("span",{className:"block text-sm",children:t.designation})]})]})]});case"testimonials-style-04":return(0,r.jsxs)("div",{className:"".concat(e.theme),children:[(0,r.jsx)("div",{className:"testimonials-bubble relative rounded-[5px] py-[30px] px-[40px] bg-white mb-[35px]",children:t.content&&(0,r.jsx)("p",{className:"mb-0",children:t.content})}),(0,r.jsxs)("div",{className:"items-center px-[20px] flex",children:[t.img&&(0,r.jsx)("img",{width:"",height:"",className:"rounded-circle w-[60px] h-[60px] mr-[15px]",src:t.img,alt:""}),(0,r.jsxs)("div",{className:"items-center",children:[t.name&&(0,r.jsx)("span",{className:"font-serif text-md leading-[16px] font-medium text-darkgray block",children:t.name}),t.rating&&(0,r.jsx)("div",{className:"star-rating",children:(0,r.jsx)("span",{style:{width:20*"".concat(t.rating)+"%"}})})]})]})]});case"testimonials-style-05":return(0,r.jsx)("div",{className:"".concat(e.theme," bg-white py-[3rem] px-[3.5rem] rounded-lg lg:p-10"),children:(0,r.jsxs)("div",{className:"items-center flex flex-wrap",children:[t&&(0,r.jsx)("img",{width:"",height:"",className:"rounded-circle w-[60px] h-[60px] mr-[20px]",alt:"",src:t.img}),(0,r.jsxs)("div",{children:[t.rating&&(0,r.jsx)("div",{className:"star-rating",children:(0,r.jsx)("span",{style:{width:20*"".concat(t.rating)+"%"}})}),t.name&&(0,r.jsx)("span",{className:"font-serif text-md leading-5 font-medium text-gray-900 block",children:t.name}),t.company&&(0,r.jsx)("span",{className:"text-sm",children:t.company})]}),(0,r.jsx)("div",{className:"testimonials-bubble relative bg-white mt-[25px]",children:t.content&&(0,r.jsx)("p",{className:"mb-0",children:t.content})})]})});default:return(0,r.jsxs)("div",{className:"".concat(e.theme," bg-lightgray relative"),children:[(0,r.jsx)("i",{className:"ti-quote-left"}),(0,r.jsx)("p",{className:"text-xmd w-75 mb-0",children:t.content}),(0,r.jsxs)("div",{className:"author border-t border-mediumgray flex items-center mt-10 pt-10",children:[t.img&&(0,r.jsx)("img",{width:"",height:"",className:"rounded-circle w-[60px] h-[60px] mr-[16px]",alt:"",src:t.img}),(0,r.jsxs)("div",{children:[t.name&&(0,r.jsx)("span",{className:"font-serif text-md font-medium text-darkgray block",children:t.name}),t.designation&&(0,r.jsx)("span",{className:"text-sm",children:t.designation})]})]})]})}},d=e=>{const t=(0,o.useRef)(null);return!0===e.carousel?(0,r.jsx)(c.tq,{ref:t,modules:[l.W_,l.tl,l.pt,l.N1],className:"testimonials-swiper".concat(e.className?" ".concat(e.className):""),...e.carouselOption,children:e.data.map(((t,a)=>(0,r.jsxs)(c.o5,{...e.animation,transition:{delay:a*e.animationDelay},children:[" ",m(e,t)]},a)))}):(0,r.jsx)(s.Z,{className:e.grid,children:e.data.map(((t,a)=>(0,r.jsxs)(n.m.div,{className:"col flex justify-center".concat(e.className?" ".concat(e.className):""),...e.animation,transition:{delay:a*e.animationDelay},children:[" ",m(e,t)]},a)))})};d.defaultProps={data:i.W7,animationDelay:.5,theme:"testimonials-style-01",carouselOption:{slidesPerView:1,loop:!0,spaceBetween:20,autoplay:{delay:3e3,disableOnInteraction:!1},navigation:!0,breakpoints:{1200:{slidesPerView:4},992:{slidesPerView:3},768:{slidesPerView:3}}}};const f=(0,o.memo)(d)},81620:(e,t,a)=>{"use strict";a.d(t,{A7:()=>s,J4:()=>c,Mh:()=>n,W7:()=>o,_g:()=>i});const o=[{name:"SHOKO MUGIKURA",designation:"GRAPHIC DESIGNER",content:"Their team are easy to work with and helped me make amazing websites in a short amount of time. Thanks guys for all your hard work.",img:"https://via.placeholder.com/125x125"},{name:"JONSAN DONNER",designation:"SALES MANAGER",content:"Trust us we looked for a very long time and wasted thousands of dollars testing other teams, freelancers, and outsource companies.",img:"https://via.placeholder.com/125x125"},{name:"MACKANGY ROSE",designation:"CREATIVE DIRECTOR",content:"This is an excellent company! I personally enjoyed the energy and the professional support the whole team gave to us into creating website.",img:"https://via.placeholder.com/125x125"}],i=[{name:"JEREMY SMITH",designation:"CO FOUNDER",content:"Lorem ipsum dolor amet consectetur do eiusmod tempor incididunt labore ut enim ad minim veniam",img:"https://via.placeholder.com/800x580"},{name:"SHOKO MUGIKURA",designation:"CREATIVE HEAD",content:"Lorem ipsum dolor amet consectetur do eiusmod tempor incididunt labore ut enim ad minim veniam",img:"https://via.placeholder.com/800x580"},{name:"HERMAN MILLER",designation:"HR MANAGER",content:"Lorem ipsum dolor amet consectetur do eiusmod tempor incididunt labore ut enim ad minim veniam",img:"https://via.placeholder.com/800x580"}],n=[{name:"Herman Miller",designation:"ThemeZaa Design",content:"Lorem ipsum dolor amet consectetur do tempor incididunt labore et dolore magna nostrud exercitation ullamco.",img:"https://via.placeholder.com/125x125"},{name:"Jeremy Girard",designation:"Microsoft Corporation",content:"Lorem ipsum dolor amet consectetur do tempor incididunt labore et dolore magna nostrud exercitation ullamco.",img:"https://via.placeholder.com/125x125"},{name:"Alexander Harvard",designation:"ThemeZaa Design",content:"Lorem ipsum dolor amet consectetur do tempor incididunt labore et dolore magna nostrud exercitation ullamco.",img:"https://via.placeholder.com/125x125"}],s=[{name:"Herman Miller",content:"Lorem ipsum dolor amet consectetur do tempor incididunt labore et dolore magna nostrud exercitation ullamco.",img:"https://via.placeholder.com/125x125",rating:5},{name:"Jeremy Girard",content:"Lorem ipsum dolor amet consectetur do tempor incididunt labore et dolore magna nostrud exercitation ullamco.",img:"https://via.placeholder.com/125x125",rating:5},{name:"Alexander Harvard",content:"Lorem ipsum dolor amet consectetur do tempor incididunt labore et dolore magna nostrud exercitation ullamco.",img:"https://via.placeholder.com/125x125",rating:5}],c=[{name:"Herman Miller",content:"Simply superb resort. Management and staff deserve special appreciation and thanks for hospitality.",img:"https://via.placeholder.com/125x125",rating:5},{name:"Loretta Smith",content:"We are back home now and feel that it is only right to write to you to express our warmest gratitude.",img:"https://via.placeholder.com/125x125",rating:5},{name:"Jeremy Girard",content:"Wonderful place to live for holidays. Can\u2019t believe can have such beautiful environment to spend peaceful.",img:"https://via.placeholder.com/125x125",rating:5}]},62752:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var o=a(72791);function i(e,t){(0,o.useEffect)((()=>{const a=a=>{e.current&&!e.current.contains(a.target)&&t(a)};return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}}),[e,t])}},47040:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>g});a(72791);var o=a(47022),i=a(89743),n=a(2677),s=a(11087),c=a(34290),l=a(90180),r=a(21240),m=a(44368),d=a(49823),f=a(25308),p=a(81620),b=a(98899),h=a(80184);const g=e=>(0,h.jsxs)("div",{style:e.style,children:[(0,h.jsx)(d.default,{}),(0,h.jsx)("section",{className:"bg-darkgray py-[25px]",children:(0,h.jsx)(o.Z,{children:(0,h.jsxs)(i.Z,{className:"items-center justify-center mb-0",children:[(0,h.jsx)(n.Z,{xl:8,lg:6,children:(0,h.jsx)("h1",{className:"font-serif text-white font-medium mb-0 md:text-center text-lg",children:"Footer style 03"})}),(0,h.jsx)(n.Z,{xl:4,lg:6,className:"breadcrumb justify-end text-xs font-serif md:mt-[10px] mb-0 md:justify-center",children:(0,h.jsxs)("ul",{className:"xs-text-center",children:[(0,h.jsx)("li",{children:(0,h.jsx)(s.rU,{to:"/","aria-label":"footer breadcrumb",className:"hover:text-white",children:"Home"})}),(0,h.jsx)("li",{children:(0,h.jsx)(s.rU,{to:"#","aria-label":"footer breadcrumb",className:"hover:text-white",children:"Features"})}),(0,h.jsx)("li",{children:"Footer"})]})})]})})}),(0,h.jsx)("section",{className:"py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] bg-white",children:(0,h.jsx)(o.Z,{children:(0,h.jsx)(m.default,{grid:"row-cols-1 row-cols-lg-4 row-cols-sm-2 gap-y-5",theme:"icon-with-text-03 text-center",data:b.RR,animation:r.Ji,animationDelay:0})})}),(0,h.jsx)("section",{className:"bg-[#f7f8fc] py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px]",children:(0,h.jsxs)(o.Z,{children:[(0,h.jsx)(i.Z,{className:"justify-center",children:(0,h.jsxs)(c.m.div,{className:"text-center mb-20 col-xl-5 col-lg-6 col-sm-8",...r.Ji,children:[(0,h.jsx)("span",{className:"text-center font-serif text-md inline-block font-medium text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] uppercase mb-[20px] sm:mb-[15px]",children:" What people are saying "}),(0,h.jsx)("h5",{className:"font-serif text-[2.3rem] justify-center text-center text-darkgray font-semibold -tracking-[1px]",children:" What our valuable customer are saying about us? "})]})}),(0,h.jsx)(i.Z,{className:"justify-center",children:(0,h.jsx)(n.Z,{className:"col-12 col-md-12 col-sm-8",children:(0,h.jsx)(f.Z,{grid:"row-cols-1 row-cols-md-2 row-cols-lg-3 gap-y-10 justify-center",theme:"testimonials-style-03",data:p.Mh,animation:r.Ji,animationDelay:.3})})})]})}),(0,h.jsx)(l.Z,{className:"text-slateblue bg-[#262b35]",theme:"dark"})]})},80888:(e,t,a)=>{"use strict";var o=a(79047);function i(){}function n(){}n.resetWarningCache=i,e.exports=function(){function e(e,t,a,i,n,s){if(s!==o){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:n,resetWarningCache:i};return a.PropTypes=a,a}},52007:(e,t,a)=>{e.exports=a(80888)()},79047:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},43360:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var o=a(41418),i=a.n(o),n=a(72791),s=a(15341),c=a(10162),l=a(80184);const r=n.forwardRef(((e,t)=>{let{as:a,bsPrefix:o,variant:n="primary",size:r,active:m=!1,disabled:d=!1,className:f,...p}=e;const b=(0,c.vE)(o,"btn"),[h,{tagName:g}]=(0,s.FT)({tagName:a,disabled:d,...p}),x=g;return(0,l.jsx)(x,{...h,...p,ref:t,disabled:d,className:i()(f,b,m&&"active",n&&"".concat(b,"-").concat(n),r&&"".concat(b,"-").concat(r),p.href&&d&&"disabled")})}));r.displayName="Button";const m=r},80473:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var o=a(52007),i=a.n(o),n=a(72791),s=a(41418),c=a.n(s),l=a(80184);const r={"aria-label":i().string,onClick:i().func,variant:i().oneOf(["white"])},m=n.forwardRef(((e,t)=>{let{className:a,variant:o,"aria-label":i="Close",...n}=e;return(0,l.jsx)("button",{ref:t,type:"button",className:c()("btn-close",o&&"btn-close-".concat(o),a),"aria-label":i,...n})}));m.displayName="CloseButton",m.propTypes=r;const d=m},47022:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var o=a(41418),i=a.n(o),n=a(72791),s=a(10162),c=a(80184);const l=n.forwardRef(((e,t)=>{let{bsPrefix:a,fluid:o=!1,as:n="div",className:l,...r}=e;const m=(0,s.vE)(a,"container"),d="string"===typeof o?"-".concat(o):"-fluid";return(0,c.jsx)(n,{ref:t,...r,className:i()(l,o?"".concat(m).concat(d):m)})}));l.displayName="Container";const r=l},27472:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var o=a(72791),i=a(41418),n=a.n(i),s=a(80184);const c=e=>o.forwardRef(((t,a)=>(0,s.jsx)("div",{...t,ref:a,className:n()(t.className,e)})))},92199:(e,t,a)=>{"use strict";a.d(t,{L:()=>i});var o=a(72791),i=a(26219).j?o.useLayoutEffect:o.useEffect}}]);
//# sourceMappingURL=1788.c9fb715e.chunk.js.map