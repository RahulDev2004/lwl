(self.webpackChunklitho=self.webpackChunklitho||[]).push([[8100],{43739:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>o});var t=a(72791),i=a(11087),r=a(43360),l=a(80184);const c=e=>{const s=e.themeColor&&e.themeColor[0],a=e.themeColor&&e.themeColor[1],t=e.color&&e.color[0],c=e.color&&e.color[1],o={"--gradient-color":"object"===typeof e.themeColor?"linear-gradient(45deg, ".concat(s,", ").concat(a,", ").concat(s,")"):e.themeColor,"--brand-color":"object"===typeof e.themeColor?"linear-gradient(to right, ".concat(s,", ").concat(a,", ").concat(s,")"):e.themeColor,"--text-color":"object"===typeof e.color?"linear-gradient(to right, ".concat(t,", ").concat(c,", ").concat(t,")"):e.color};return e.href||"submit"===e.type?(0,l.jsx)(r.Z,{as:e.href?"a":"submit"===e.type?"button":"a",type:"submit"===e.type?"submit":void 0,style:o,className:"border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""),href:e.href,onClick:e.onClick,disabled:e.disabled,variant:"secondary","aria-label":e.ariaLabel,target:e.target,children:(0,l.jsx)(n,{...e})}):(0,l.jsx)(i.rU,{style:o,target:e.target,className:"btn border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""," "),to:e.to?e.to:"#",onClick:e.onClick,"aria-label":e.ariaLabel,children:(0,l.jsx)(n,{...e})})},n=e=>(0,l.jsxs)(l.Fragment,{children:[e.icon&&"after"!==e.iconPosition&&(0,l.jsx)("i",{className:"".concat(e.icon," left-icon")}),e.title,e.icon&&"after"===e.iconPosition&&(0,l.jsx)("i",{className:"".concat(e.icon," right-icon")}),"btn-link-gradient"===e.theme&&(0,l.jsx)("span",{})]});c.defaultProps={size:"lg",style:"primary"};const o=(0,t.memo)(c)},7984:(e,s,a)=>{"use strict";a.d(s,{rs:()=>c,sD:()=>r,ye:()=>l});var t=a(81724);const i=RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/),r=t.Ry().shape({name:t.Z_().required("Field is required."),email:t.Z_().email("Invalid email.").required("Field is required."),phone:t.Z_().required().matches(i,"Invalid phone")}),l=t.Ry().shape({name:t.Z_().required("Field is required."),email:t.Z_().email("Invalid email.").required("Field is required.")}),c=t.Ry().shape({name:t.Z_().required("Field is required."),email:t.Z_().email("Invalid email.").required("Field is required."),terms_condition:t.O7().oneOf([!0],"Message").required()});t.Ry().shape({name:t.Z_().required("Field is required."),email:t.Z_().email("Invalid email.").required("Field is required."),phone:t.Z_().required().matches(i,"Invalid phone"),comment:t.Z_().required("Field is required.")})},28033:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>c});var t=a(72791),i=a(30018),r=a(80184);const l=e=>{const[s,a]=(0,t.useState)(!0);if(s)return(0,r.jsx)(i.Z,{className:"".concat(e.theme).concat(e.className?" ".concat(e.className):""),variant:e.variant,onClose:()=>a(!1),dismissible:e.dismissible,children:e.message})};l.defaultProps={className:"",theme:"message-box01"};const c=(0,t.memo)(l)},51331:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>g});a(72791);var t=a(47022),i=a(89743),r=a(2677),l=a(11087),c=a(34290),n=a(71856),o=a(92506),m=a(81724),d=a(38616),x=a(17728),p=a(28033),u=a(43739),b=a(21240),h=a(7984),y=a(38480),f=a(80184);const g=()=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("section",{className:"bg-darkgray py-[25px]",children:(0,f.jsx)(t.Z,{children:(0,f.jsxs)(i.Z,{className:"items-center justify-center mb-0",children:[(0,f.jsx)(r.Z,{xl:8,lg:6,children:(0,f.jsx)("h1",{className:"font-serif text-white font-medium mb-0 md:text-center text-lg",children:"Subscribe"})}),(0,f.jsx)(r.Z,{xl:4,lg:6,className:"breadcrumb justify-end text-xs font-serif md:mt-[10px] mb-0 md:justify-center",children:(0,f.jsxs)("ul",{className:"xs-text-center",children:[(0,f.jsx)("li",{children:(0,f.jsx)(l.rU,{to:"/","aria-label":"breadcrumb",className:"hover:text-white",children:"Home"})}),(0,f.jsx)("li",{children:(0,f.jsx)(l.rU,{to:"/elements/subscribe","aria-label":"breadcrumb",onClick:e=>e.preventDefault(),className:"hover:text-white",children:"Elements"})}),(0,f.jsx)("li",{children:"Subscribe"})]})})]})})}),(0,f.jsx)(c.m.section,{className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] bg-lightgray overflow-hidden",...b.Ji,children:(0,f.jsxs)(t.Z,{children:[(0,f.jsx)(i.Z,{children:(0,f.jsx)(r.Z,{className:"mb-[6%]",children:(0,f.jsx)("h6",{className:"text-darkgray font-medium font-serif mb-[25px] sm:mb-[15px] text-center",children:"Subscribe style 01"})})}),(0,f.jsx)(i.Z,{className:"justify-center",children:(0,f.jsxs)(r.Z,{xl:6,md:8,lg:7,className:"px-md-0",children:[(0,f.jsx)("h4",{className:"font-bold text-darkgray tracking-[-1px] mb-16 text-center font-serif",children:"GET LATEST UPDATE FOR OUR TRUSTED APPLICATIONS"}),(0,f.jsx)(o.J9,{initialValues:{email:""},validationSchema:m.Ry().shape({email:m.Z_().email("Invalid email.").required("Field is required.")}),onSubmit:async(e,s)=>{s.setSubmitting(!0);"success"===(await(0,y.sendEmail)(e)).status&&(0,y.resetForm)(s)},children:e=>{let{isSubmitting:s,status:a}=e;return(0,f.jsxs)("div",{className:"relative mb-16 xs:mb-8 subscribe-style-01",children:[(0,f.jsxs)(o.l0,{className:"relative",children:[(0,f.jsx)(x.II,{showErrorMsg:!1,type:"email",name:"email",className:"border-[1px] pl-[50px] extra-large-input border-solid border-transparent",placeholder:"Enter your email address"}),(0,f.jsxs)("button",{"aria-label":"subscribe",type:"submit",className:"text-[14px] tracking-[1px] py-[12px] px-[28px] uppercase".concat(s?" loading":""),children:[(0,f.jsx)("i",{className:"far fa-envelope"}),"Subscribe"]})]}),(0,f.jsx)(n.M,{children:a&&(0,f.jsx)(c.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"absolute top-[115%] left-0 w-full",children:(0,f.jsx)(p.default,{className:"mt-[15px] py-[13px] px-[20px] text-md rounded-[100px] text-center",theme:"message-box01",variant:"success",message:"Your message has been sent successfully subscribed to our email list!"})})})]})}}),(0,f.jsx)("p",{className:"text-center text-[#828282] leading-[24px] text-sm m-auto w-[70%] lg:w-[60%] md:w-3/4 xs:w-full",children:"We are committed to protecting your privacy. We will never collect information about you without your explicit consent."})]})})]})}),(0,f.jsxs)(c.m.section,{className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] overflow-hidden",...b.Ji,children:[(0,f.jsx)(t.Z,{children:(0,f.jsx)(i.Z,{children:(0,f.jsx)(r.Z,{className:"mb-[6%]",children:(0,f.jsx)("h6",{className:"mb-[25px] text-darkgray font-medium font-serif text-center xs:mb-[15px]",children:"Subscribe style 02"})})})}),(0,f.jsxs)(t.Z,{children:[(0,f.jsx)(i.Z,{className:"justify-center",children:(0,f.jsxs)(r.Z,{className:"text-center",lg:6,md:7,sm:12,children:[(0,f.jsx)("span",{className:"text-basecolor text-lg mb-[15px] inline-block",children:"Love to work together"}),(0,f.jsx)("h5",{className:"font-serif font-medium -tracking-[0.5px] text-darkgray inline-block mb-[60px] sm:mb-[30px] w-[99%]",children:"Are you ready to work with us? Let's grow your business."})]})}),(0,f.jsx)(i.Z,{className:"justify-center",children:(0,f.jsx)(r.Z,{md:8,children:(0,f.jsx)(o.J9,{initialValues:{email:""},validationSchema:m.Ry().shape({email:m.Z_().email("Invalid email.").required("Field is required.")}),onSubmit:async(e,s)=>{s.setSubmitting(!0);"success"===(await(0,y.sendEmail)(e)).status&&(0,y.resetForm)(s)},children:e=>{let{isSubmitting:s,status:a}=e;return(0,f.jsxs)("div",{className:"relative mb-16 subscribe-style-02 w-4/5 my-0 mx-auto md:w-full",children:[(0,f.jsxs)(o.l0,{className:"relative",children:[(0,f.jsx)(x.II,{showErrorMsg:!1,type:"email",name:"email",className:"border-[1px] medium-input border-solid border-transparent !pr-[175px] xs:!pr-[32px]",placeholder:"Enter your email address"}),(0,f.jsx)("button",{"aria-label":"subscribe",type:"submit",className:"text-xs py-[12px] px-[28px] uppercase".concat(s?" loading":""),children:"Start a project"})]}),(0,f.jsx)(n.M,{children:a&&(0,f.jsx)(c.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"absolute top-[115%] left-0 w-full",children:(0,f.jsx)(p.default,{className:"py-[5px] rounded-[100px] text-center",theme:"message-box01",variant:"success",message:"Your message has been sent successfully subscribed to our email list!"})})})]})}})})})]})]}),(0,f.jsx)(c.m.section,{className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] bg-lightgray overflow-hidden",...b.Ji,children:(0,f.jsxs)(t.Z,{children:[(0,f.jsx)(i.Z,{children:(0,f.jsx)(r.Z,{className:"mb-[6%]",children:(0,f.jsx)("h6",{className:"text-darkgray font-medium font-serif mb-[25px] sm:mb-[15px] text-center",children:"Subscribe style 03"})})}),(0,f.jsxs)(i.Z,{className:"justify-center",children:[(0,f.jsxs)(r.Z,{md:8,lg:7,className:"text-center",children:[(0,f.jsx)("span",{className:"block text-xmd font-serif font-medium text-basecolor mb-[20px]",children:"Love to work together"}),(0,f.jsx)("h4",{className:"font-serif font-semibold text-darkgray inline-block mb-[72px] text-center sm:mb-[33px] xs:mb-[50px]",children:"Beautifully simple handcrafted templates for your website"})]}),(0,f.jsx)(r.Z,{md:8,lg:6,children:(0,f.jsx)(o.J9,{initialValues:{email:""},validationSchema:m.Ry().shape({email:m.Z_().email("Invalid email.").required("Field is required.")}),onSubmit:async(e,s)=>{s.setSubmitting(!0);"success"===(await(0,y.sendEmail)(e)).status&&(0,y.resetForm)(s)},children:e=>{let{isSubmitting:s,status:a}=e;return(0,f.jsxs)("div",{className:"relative mb-16 subscribe-style-03",children:[(0,f.jsxs)(o.l0,{className:"relative",children:[(0,f.jsx)(x.II,{showErrorMsg:!1,type:"email",name:"email",className:"large-input border-[1px] border-solid border-transparent",placeholder:"Your email address"}),(0,f.jsx)("button",{"aria-label":"subscribe",type:"submit",className:"text-xs tracking-[1px] py-[12px] px-[28px] uppercase".concat(s?" loading":""),children:"Notify Me"})]}),(0,f.jsx)(n.M,{children:a&&(0,f.jsx)(c.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"absolute top-[115%] left-0 w-full",children:(0,f.jsx)(p.default,{className:"py-[5px] rounded-[4px]",theme:"message-box01",variant:"success",message:"Your message has been sent successfully subscribed to our email list!"})})})]})}})})]})]})}),(0,f.jsx)(c.m.section,{className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] overflow-hidden",...b.Ji,children:(0,f.jsxs)(t.Z,{children:[(0,f.jsx)(i.Z,{children:(0,f.jsx)(r.Z,{className:"mb-[6%]",children:(0,f.jsx)("h6",{className:"text-darkgray font-medium font-serif mb-[25px] xs:mb-[15px] text-center",children:"Subscribe style 04"})})}),(0,f.jsx)(i.Z,{className:"justify-center",children:(0,f.jsxs)(r.Z,{md:10,lg:7,className:"text-center",children:[(0,f.jsx)("span",{className:"font-serif font-medium text-basecolor text-xmd uppercase mb-[20px] inline-block sm:mb-[10px]",children:"Love to work together"}),(0,f.jsx)("h4",{className:"font-serif font-semibold text-darkgray inline-block mb-[72px] text-center sm:mb-[33px]",children:"Are you ready to work with us? Let's grow your business."})]})}),(0,f.jsx)(i.Z,{className:"justify-center",children:(0,f.jsx)(r.Z,{md:9,children:(0,f.jsx)(o.J9,{initialValues:{email:""},validationSchema:m.Ry().shape({email:m.Z_().email("Invalid email.").required("Field is required.")}),onSubmit:async(e,s)=>{s.setSubmitting(!0);"success"===(await(0,y.sendEmail)(e)).status&&(0,y.resetForm)(s)},children:e=>{let{isSubmitting:s,status:a}=e;return(0,f.jsxs)("div",{className:"relative mb-16 subscribe-style-04 w-4/5 my-0 mx-auto md:w-full",children:[(0,f.jsxs)(o.l0,{className:"relative",children:[(0,f.jsx)(x.II,{showErrorMsg:!1,type:"email",name:"email",className:"border-[1px] border-solid border-transparent large-input",placeholder:"Enter your email address"}),(0,f.jsx)("button",{"aria-label":"subscribe",type:"submit",className:"text-xs tracking-[1px] py-[12px] px-[28px] uppercase".concat(s?" loading":""),children:"Subscribe Now"})]}),(0,f.jsx)(n.M,{children:a&&(0,f.jsx)(c.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"absolute top-[115%] left-0 w-full",children:(0,f.jsx)(p.default,{className:"py-[5px] rounded-[4px] text-center",theme:"message-box01",variant:"success",message:"Your message has been sent successfully subscribed to our email list!"})})})]})}})})})]})}),(0,f.jsxs)(c.m.section,{className:"py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] relative bg-cover bg-fixed bg-center overflow-hidden lg:bg-local",style:{backgroundImage:"url('https://via.placeholder.com/1920x677')"},...b.Ji,children:[(0,f.jsx)("div",{className:"absolute top-0 left-0 h-full w-full bg-darkpurple2 opacity-80 z-[1]"}),(0,f.jsx)(t.Z,{className:"relative z-[2]",children:(0,f.jsxs)(i.Z,{className:"justify-center",children:[(0,f.jsx)(r.Z,{xl:5,lg:6,sm:8,className:"lg:text-center md:mb-[30px]",children:(0,f.jsx)("h6",{className:"font-serif font-medium text-white mb-0 text-left md:text-center",children:"Don't miss this amazing big events conference and opportunities!"})}),(0,f.jsx)(r.Z,{xl:{span:5,offset:2},lg:{span:5,offset:1},sm:9,children:(0,f.jsx)(o.J9,{initialValues:{email:""},validationSchema:m.Ry().shape({email:m.Z_().email("Invalid email.").required("Field is required.")}),onSubmit:async(e,s)=>{s.setSubmitting(!0);"success"===(await(0,y.sendEmail)(e)).status&&(0,y.resetForm)(s)},children:e=>{let{isSubmitting:s,status:a}=e;return(0,f.jsxs)("div",{className:"relative subscribe-style-05",children:[(0,f.jsxs)(o.l0,{className:"relative",children:[(0,f.jsx)(x.II,{showErrorMsg:!1,type:"email",name:"email",className:"border-[1px] border-solid border-transparent rounded-[4px] large-input",placeholder:"Enter your email address"}),(0,f.jsxs)("button",{"aria-label":"subscribe",type:"submit",className:"text-xs py-[12px] px-[28px] uppercase font-semibold xs:text-center".concat(s?" loading":""),children:[(0,f.jsx)("i",{className:"far fa-envelope text-neonorange text-sm leading-none mr-[10px] xs:mr-0"}),"Subscribe"]})]}),(0,f.jsx)(n.M,{children:a&&(0,f.jsx)(c.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"mt-[25px] absolute left-0 w-full",children:(0,f.jsx)(p.default,{className:"rounded-[4px] text-md py-[10px] px-[22px] z-10",theme:"message-box01",variant:"success",message:"Your message has been sent successfully subscribed to our email list!"})})})]})}})})]})})]}),(0,f.jsx)(c.m.section,{className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px]",...b.Ji,children:(0,f.jsx)(t.Z,{children:(0,f.jsxs)(i.Z,{className:"justify-center",children:[(0,f.jsx)(r.Z,{md:10,className:"text-center mb-[6%]",children:(0,f.jsx)("h6",{className:"text-darkgray font-medium font-serif text-center xs:mb-[15px]",children:"Subscribe style 06"})}),(0,f.jsx)(r.Z,{className:"col-12",children:(0,f.jsx)("div",{className:"bg-gradient-to-tr from-[#ec606c] via-[#ee6757] to-[#eb7242] rounded-[5px] py-[55px] md:py-[40px]",children:(0,f.jsxs)(i.Z,{className:"justify-center items-center mx-0",children:[(0,f.jsx)(r.Z,{lg:2,className:"md:mb-[30px] pl-0 sm:mb-[20px]",children:(0,f.jsx)("h6",{className:"font-serif font-medium text-white mb-0 text-right md:text-center",children:"Get your free quote today?"})}),(0,f.jsx)(r.Z,{lg:7,md:9,className:"col-11 xs:px-0",children:(0,f.jsx)(o.J9,{initialValues:{email:""},validationSchema:m.Ry().shape({email:m.Z_().email("Invalid email.").required("Field is required.")}),onSubmit:async(e,s)=>{await new Promise((e=>setTimeout(e,500))),(0,y.resetForm)(s)},children:e=>{let{isSubmitting:s,status:a}=e;return(0,f.jsxs)("div",{className:"relative subscribe-style-06",children:[(0,f.jsxs)(o.l0,{className:"relative",children:[(0,f.jsx)(x.II,{showErrorMsg:!1,type:"email",name:"email",labelClass:"sm:w-full pr-[30px] sm:pr-0 flex-1 sm:flex-none",className:"border-[1px] large-input border-solid border-transparent w-full",placeholder:"Enter your email address"}),(0,f.jsxs)("button",{"aria-label":"subscribe",type:"submit",className:"text-xs tracking-[1px] py-[12px] px-[28px] uppercase".concat(s?" loading":""),children:[(0,f.jsx)("i",{className:"far fa-envelope mr-[10px]"}),"get started"]})]}),(0,f.jsx)(n.M,{children:a&&(0,f.jsx)(c.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"absolute top-[115%] left-0 w-full",children:(0,f.jsx)(p.default,{className:"rounded-[4px] text-md py-[10px] px-[22px]",theme:"message-box01",variant:"success",message:"Your message has been sent successfully subscribed to our email list!"})})})]})}})})]})})})]})})}),(0,f.jsx)(c.m.section,{className:"bg-lightgray py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] overflow-hidden",...b.Ji,children:(0,f.jsxs)(t.Z,{children:[(0,f.jsx)(i.Z,{children:(0,f.jsx)(r.Z,{className:"mb-[6%]",children:(0,f.jsx)("h6",{className:"mb-[25px] xs:mb-[15px] text-darkgray font-medium font-serif text-center",children:"Subscribe style 07"})})}),(0,f.jsxs)(i.Z,{className:"justify-center items-center flex-col",children:[(0,f.jsx)(r.Z,{md:10,lg:7,className:"text-center",children:(0,f.jsxs)("h5",{className:"font-light text-darkgray inline-block text-center mb-[46px]",children:["Are you ready to work with us? ",(0,f.jsx)("span",{className:"block font-semibold bg-gradient-to-r text-gradient from-[#556fff] via-[#e05fc4] to-[#ff798e] sm:inline",children:"Let's grow your business."})]})}),(0,f.jsx)(r.Z,{md:6,className:"subscription-from w-[45%] sm:w-full",children:(0,f.jsx)(o.J9,{initialValues:{email:""},validationSchema:m.Ry().shape({email:m.Z_().email("Invalid email.").required("Field is required.")}),onSubmit:async(e,s)=>{s.setSubmitting(!0);"success"===(await(0,y.sendEmail)(e)).status&&(0,y.resetForm)(s)},children:e=>{let{isSubmitting:s,status:a}=e;return(0,f.jsxs)("div",{className:"relative subscribe-style-07",children:[(0,f.jsxs)(o.l0,{className:"relative",children:[(0,f.jsx)(x.II,{showErrorMsg:!1,type:"email",name:"email",className:"border-[1px] extra-large-input border-solid border-transparent",placeholder:"Your email address"}),(0,f.jsx)("button",{"aria-label":"subscribe",type:"submit",className:"text-xs tracking-[1px] py-[12px] px-[28px] uppercase".concat(s?" loading":""),children:(0,f.jsx)("i",{className:"fa fa-arrow-right"})})]}),(0,f.jsx)(n.M,{children:a&&(0,f.jsx)(c.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"mt-[25px] absolute top-[115%] left-0 w-full",children:(0,f.jsx)(p.default,{className:"rounded-[4px] text-md py-[10px] px-[22px]",theme:"message-box01",variant:"success",message:"Your message has been sent successfully subscribed to our email list!"})})})]})}})})]})]})}),(0,f.jsxs)(c.m.div,{className:"relative overflow-hidden py-[130px] lg:py-[90px] md:py-[75px] sm:py-[50px] sm:px-[15px]",...b.Ji,children:[(0,f.jsx)(d.VS,{className:"lg-no-parallax bg-cover cover-background absolute top-[-30px] left-0 h-[100vh] lg:h-[64vh] lg:top-[-75px] lg:!translate-y-0 md:h-[60vh] md:-top-[30px] sm:top-0 sm:h-[56vh] xs:h-[50vh] w-full",translateY:[-40,40],style:{backgroundImage:"url(https://via.placeholder.com/1920x1100)"}}),(0,f.jsx)("div",{className:"absolute top-0 left-0 w-full h-full opacity-75 bg-gradient-to-tr from-[#0039e3] via-[#5e28dd] to-[#8600d4]"}),(0,f.jsx)(t.Z,{className:"relative",children:(0,f.jsx)(i.Z,{className:"justify-center",children:(0,f.jsx)(r.Z,{xl:7,lg:8,md:10,className:"xs:px-0",children:(0,f.jsxs)("div",{className:"text-center font-serif font-medium bg-white rounded-[6px] p-28 sm:p-20 xs:p-16",children:[(0,f.jsx)("span",{className:"text-basecolor block uppercase mb-[10px]",children:"Let's get started now"}),(0,f.jsx)("h6",{className:"inline-block text-darkgray -tracking-[1px] w-[80%] mb-14 lg:w-[85%] sm:w-[55%] xs:w-full",children:"Don't miss this amazing latest news and opportunities!"}),(0,f.jsx)(o.J9,{initialValues:{email:""},validationSchema:m.Ry().shape({email:m.Z_().email("Invalid email.").required("Field is required.")}),onSubmit:async(e,s)=>{await new Promise((e=>setTimeout(e,500))),(0,y.resetForm)(s)},children:e=>{let{isSubmitting:s,status:a}=e;return(0,f.jsxs)("div",{className:"relative subscribe-style-08",children:[(0,f.jsxs)(o.l0,{className:"relative",children:[(0,f.jsx)(x.II,{showErrorMsg:!1,type:"text",name:"name",className:"border-[1px] medium-input border-solid border-transparent font-sans",placeholder:"Your name"}),(0,f.jsx)(x.II,{showErrorMsg:!1,type:"email",name:"email",className:"border-[1px] medium-input border-solid border-transparent font-sans",placeholder:"Your email address"}),(0,f.jsx)("button",{"aria-label":"subscribe",type:"submit",className:"text-xs py-[12px] px-[28px] uppercase".concat(s?" loading":""),children:"Subscribe Newsletter"})]}),(0,f.jsx)(n.M,{children:a&&(0,f.jsx)(c.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"w-full absolute mt-[15px]",children:(0,f.jsx)(p.default,{className:"rounded-[4px] text-md py-[10px] px-[22px]",theme:"message-box01",variant:"success",message:"Your message has been sent successfully subscribed to our email list!"})})})]})}})]})})})})]}),(0,f.jsx)(c.m.section,{className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] bg-darkgray overflow-hidden",...b.Ji,children:(0,f.jsxs)(t.Z,{children:[(0,f.jsx)(i.Z,{children:(0,f.jsx)(r.Z,{className:"mb-[6%]",children:(0,f.jsx)("h6",{className:"text-white font-medium font-serif mb-[25px] sm:mb-[15px] text-center",children:"Subscribe style 09"})})}),(0,f.jsx)(i.Z,{className:"justify-center",children:(0,f.jsx)(r.Z,{md:10,lg:7,className:"text-center mb-[20px]",children:(0,f.jsx)("h4",{className:"font-serif font-semibold inline-block text-center mb-[25px] -tracking-[.5px] text-transparent bg-clip-text bg-gradient-to-r from-[#975ade] via-[#d473c0] to-[#e6686f]",children:"Subscribe to newsletter"})})}),(0,f.jsx)(i.Z,{className:"justify-center",children:(0,f.jsx)(r.Z,{md:6,children:(0,f.jsx)(o.J9,{initialValues:{email:""},validationSchema:m.Ry().shape({email:m.Z_().email("Invalid email.").required("Field is required.")}),onSubmit:async(e,s)=>{s.setSubmitting(!0);"success"===(await(0,y.sendEmail)(e)).status&&(0,y.resetForm)(s)},children:e=>{let{isSubmitting:s,status:a}=e;return(0,f.jsxs)("div",{className:"relative mb-16 subscribe-style-09 my-0 mx-auto",children:[(0,f.jsxs)(o.l0,{className:"relative",children:[(0,f.jsx)(x.II,{showErrorMsg:!1,type:"email",name:"email",className:"border-[1px] border-solid border-transparent large-input",placeholder:"Enter your email address"}),(0,f.jsx)("button",{"aria-label":"subscribe",type:"submit",className:"text-lg tracking-[1px] py-[12px] px-[28px] btn-gradient uppercase".concat(s?" loading":""),children:(0,f.jsx)("i",{className:"far fa-envelope m-0"})})]}),(0,f.jsx)(n.M,{children:a&&(0,f.jsx)(c.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"absolute top-[115%] left-0 w-full",children:(0,f.jsx)(p.default,{className:"py-[5px] rounded-[4px]",theme:"message-box01",variant:"success",message:"Your message has been sent successfully subscribed to our email list!"})})})]})}})})})]})}),(0,f.jsx)("section",{className:"py-[160px] lg:py-[120px] md:py-[95px] sm:py-[80px] xs:py-[50px] bg-cover bg-no-repeat overflow-hidden relative bg-center",style:{backgroundImage:"url(https://via.placeholder.com/1920x745)"},children:(0,f.jsx)(t.Z,{children:(0,f.jsx)(i.Z,{className:"m-0 justify-center",children:(0,f.jsx)(r.Z,{xl:10,lg:11,className:"col-12 relative bg-white overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.1)]",children:(0,f.jsxs)(c.m.div,{className:"row",...b.Ji,children:[(0,f.jsx)(r.Z,{md:6,className:"col-12 bg-no-repeat bg-cover overflow-hidden relative bg-center sm:h-[350px]",style:{backgroundImage:"url(https://via.placeholder.com/800x838)"}}),(0,f.jsxs)(r.Z,{md:6,className:"col-12 p-24 lg:p-20 md:p-12 sm:20 xs:p-14",children:[(0,f.jsx)("h5",{className:"font-serif font-bold text-[#262b35] uppercase tracking-[-.5px] mb-[20px]",children:"GET BOOK YOUR SPA APPOINTMENT"}),(0,f.jsx)("p",{className:"w-[90%] lg:w-full mb-[35px]",children:"Lorem ipsum is simply dummy text of the printing and typesetting industry"}),(0,f.jsx)(o.J9,{initialValues:{name:"",email:""},validationSchema:h.ye,onSubmit:async(e,s)=>{await new Promise((e=>setTimeout(e,500))),(0,y.resetForm)(s)},children:e=>{let{isSubmitting:s,status:a}=e;return(0,f.jsxs)(o.l0,{children:[(0,f.jsx)(x.II,{showErrorMsg:!1,type:"text",name:"name",labelclass:"mb-[25px]",className:"rounded-[5px] py-[15px] px-[20px] border-[1px] border-transparent w-full bg-lightgray mb-[20px]",placeholder:"Your name"}),(0,f.jsx)(x.II,{showErrorMsg:!1,type:"email",name:"email",labelclass:"mb-[30px]",className:"rounded-[5px] py-[15px] px-[20px] border-[1px] border-transparent w-full bg-lightgray mb-[20px]",placeholder:"Your email address"}),(0,f.jsx)(u.default,{ariaLabel:"link for subscribe",type:"submit",className:"text-sm leading-none font-serif font-medium rounded-[4px] w-full uppercase".concat(s?" loading":""),themeColor:["#fd7f87","#f7aa80"],color:"#fff",size:"lg",title:"Get started now"}),(0,f.jsx)(n.M,{children:a&&(0,f.jsx)(c.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,f.jsx)(p.default,{className:"mt-[20px] mb-0 text-md leading-[22px] py-[10px] relative",theme:"message-box01",variant:"success",message:"Your message has been sent successfully subscribed to our email list!"})})})]})}})]})]})})})})})]})},80888:(e,s,a)=>{"use strict";var t=a(79047);function i(){}function r(){}r.resetWarningCache=i,e.exports=function(){function e(e,s,a,i,r,l){if(l!==t){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function s(){return e}e.isRequired=e;var a={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:s,element:e,elementType:e,instanceOf:s,node:e,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:r,resetWarningCache:i};return a.PropTypes=a,a}},52007:(e,s,a)=>{e.exports=a(80888)()},79047:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},43360:(e,s,a)=>{"use strict";a.d(s,{Z:()=>m});var t=a(41418),i=a.n(t),r=a(72791),l=a(15341),c=a(10162),n=a(80184);const o=r.forwardRef(((e,s)=>{let{as:a,bsPrefix:t,variant:r="primary",size:o,active:m=!1,disabled:d=!1,className:x,...p}=e;const u=(0,c.vE)(t,"btn"),[b,{tagName:h}]=(0,l.FT)({tagName:a,disabled:d,...p}),y=h;return(0,n.jsx)(y,{...b,...p,ref:s,disabled:d,className:i()(x,u,m&&"active",r&&"".concat(u,"-").concat(r),o&&"".concat(u,"-").concat(o),p.href&&d&&"disabled")})}));o.displayName="Button";const m=o},80473:(e,s,a)=>{"use strict";a.d(s,{Z:()=>d});var t=a(52007),i=a.n(t),r=a(72791),l=a(41418),c=a.n(l),n=a(80184);const o={"aria-label":i().string,onClick:i().func,variant:i().oneOf(["white"])},m=r.forwardRef(((e,s)=>{let{className:a,variant:t,"aria-label":i="Close",...r}=e;return(0,n.jsx)("button",{ref:s,type:"button",className:c()("btn-close",t&&"btn-close-".concat(t),a),"aria-label":i,...r})}));m.displayName="CloseButton",m.propTypes=o;const d=m},47022:(e,s,a)=>{"use strict";a.d(s,{Z:()=>o});var t=a(41418),i=a.n(t),r=a(72791),l=a(10162),c=a(80184);const n=r.forwardRef(((e,s)=>{let{bsPrefix:a,fluid:t=!1,as:r="div",className:n,...o}=e;const m=(0,l.vE)(a,"container"),d="string"===typeof t?"-".concat(t):"-fluid";return(0,c.jsx)(r,{ref:s,...o,className:i()(n,t?"".concat(m).concat(d):m)})}));n.displayName="Container";const o=n},89743:(e,s,a)=>{"use strict";a.d(s,{Z:()=>o});var t=a(41418),i=a.n(t),r=a(72791),l=a(10162),c=a(80184);const n=r.forwardRef(((e,s)=>{let{bsPrefix:a,className:t,as:r="div",...n}=e;const o=(0,l.vE)(a,"row"),m=(0,l.pi)(),d=(0,l.zG)(),x="".concat(o,"-cols"),p=[];return m.forEach((e=>{const s=n[e];let a;delete n[e],null!=s&&"object"===typeof s?({cols:a}=s):a=s;const t=e!==d?"-".concat(e):"";null!=a&&p.push("".concat(x).concat(t,"-").concat(a))})),(0,c.jsx)(r,{ref:s,...n,className:i()(t,o,...p)})}));n.displayName="Row";const o=n},27472:(e,s,a)=>{"use strict";a.d(s,{Z:()=>c});var t=a(72791),i=a(41418),r=a.n(i),l=a(80184);const c=e=>t.forwardRef(((s,a)=>(0,l.jsx)("div",{...s,ref:a,className:r()(s.className,e)})))},92199:(e,s,a)=>{"use strict";a.d(s,{L:()=>i});var t=a(72791),i=a(26219).j?t.useLayoutEffect:t.useEffect}}]);
//# sourceMappingURL=8100.f7bfa286.chunk.js.map