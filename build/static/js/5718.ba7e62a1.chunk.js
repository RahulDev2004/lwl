(self.webpackChunklitho=self.webpackChunklitho||[]).push([[5718,5705,2502],{43739:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>l});var n=o(72791),i=o(11087),a=o(43360),s=o(80184);const c=e=>{const t=e.themeColor&&e.themeColor[0],o=e.themeColor&&e.themeColor[1],n=e.color&&e.color[0],c=e.color&&e.color[1],l={"--gradient-color":"object"===typeof e.themeColor?"linear-gradient(45deg, ".concat(t,", ").concat(o,", ").concat(t,")"):e.themeColor,"--brand-color":"object"===typeof e.themeColor?"linear-gradient(to right, ".concat(t,", ").concat(o,", ").concat(t,")"):e.themeColor,"--text-color":"object"===typeof e.color?"linear-gradient(to right, ".concat(n,", ").concat(c,", ").concat(n,")"):e.color};return e.href||"submit"===e.type?(0,s.jsx)(a.Z,{as:e.href?"a":"submit"===e.type?"button":"a",type:"submit"===e.type?"submit":void 0,style:l,className:"border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""),href:e.href,onClick:e.onClick,disabled:e.disabled,variant:"secondary","aria-label":e.ariaLabel,target:e.target,children:(0,s.jsx)(r,{...e})}):(0,s.jsx)(i.rU,{style:l,target:e.target,className:"btn border-[2px] border-solid btn-".concat(e.size).concat(e.className?" "+e.className:"").concat("object"===typeof e.themeColor?" btn-gradient":"").concat("object"===typeof e.color?" text-gradient":""," "),to:e.to?e.to:"#",onClick:e.onClick,"aria-label":e.ariaLabel,children:(0,s.jsx)(r,{...e})})},r=e=>(0,s.jsxs)(s.Fragment,{children:[e.icon&&"after"!==e.iconPosition&&(0,s.jsx)("i",{className:"".concat(e.icon," left-icon")}),e.title,e.icon&&"after"===e.iconPosition&&(0,s.jsx)("i",{className:"".concat(e.icon," right-icon")}),"btn-link-gradient"===e.theme&&(0,s.jsx)("span",{})]});c.defaultProps={size:"lg",style:"primary"};const l=(0,n.memo)(c)},53744:(e,t,o)=>{"use strict";o.d(t,{Z:()=>N});var n=o(72791),i=o(34290),a=o(52007);function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,o){return t&&c(e.prototype,t),o&&c(e,o),e}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function p(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=f(e);if(t){var i=f(this).constructor;o=Reflect.construct(n,arguments,i)}else o=n.apply(this,arguments);return p(this,o)}}function u(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return b(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);"Object"===o&&e.constructor&&(o=e.constructor.name);if("Map"===o||"Set"===o)return Array.from(e);if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return b(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,o=String(e);if(0===t)return o;var n=o.match(/(.*?)([0-9]+)(.*)/),i=n?n[1]:"",a=n?n[3]:"",s=n?n[2]:o,c=s.length>=t?s:(u(Array(t)).map((function(){return"0"})).join("")+s).slice(-1*t);return"".concat(i).concat(c).concat(a)}var g={daysInHours:!1,zeroPadTime:2};function w(e,t){var o=e.days,n=e.hours,i=e.minutes,a=e.seconds,s=Object.assign(Object.assign({},g),t),c=s.daysInHours,r=s.zeroPadTime,l=s.zeroPadDays,f=void 0===l?r:l,m=Math.min(2,r),p=c?h(n+24*o,r):h(n,m);return{days:c?"":h(o,f),hours:p,minutes:h(i,m),seconds:h(a,m)}}var k=function(e){l(o,e);var t=d(o);function o(){var e;return s(this,o),(e=t.apply(this,arguments)).state={count:e.props.count||3},e.startCountdown=function(){e.interval=window.setInterval((function(){0===e.state.count-1?(e.stopCountdown(),e.props.onComplete&&e.props.onComplete()):e.setState((function(e){return{count:e.count-1}}))}),1e3)},e.stopCountdown=function(){clearInterval(e.interval)},e.addTime=function(t){e.stopCountdown(),e.setState((function(e){return{count:e.count+t}}),e.startCountdown)},e}return r(o,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?(0,n.cloneElement)(this.props.children,{count:this.state.count}):null}}]),o}(n.Component);k.propTypes={count:a.number,children:a.element,onComplete:a.func};var y=function(e){l(o,e);var t=d(o);function o(e){var i;if(s(this,o),(i=t.call(this,e)).mounted=!1,i.initialTimestamp=i.calcOffsetStartTimestamp(),i.offsetStartTimestamp=i.props.autoStart?0:i.initialTimestamp,i.offsetTime=0,i.legacyMode=!1,i.legacyCountdownRef=(0,n.createRef)(),i.tick=function(){var e=i.calcTimeDelta(),t=e.completed&&!i.props.overtime?void 0:i.props.onTick;i.setTimeDeltaState(e,void 0,t)},i.start=function(){if(!i.isStarted()){var e=i.offsetStartTimestamp;i.offsetStartTimestamp=0,i.offsetTime+=e?i.calcOffsetStartTimestamp()-e:0;var t=i.calcTimeDelta();i.setTimeDeltaState(t,"STARTED",i.props.onStart),i.props.controlled||t.completed&&!i.props.overtime||(i.clearTimer(),i.interval=window.setInterval(i.tick,i.props.intervalDelay))}},i.pause=function(){i.isPaused()||(i.clearTimer(),i.offsetStartTimestamp=i.calcOffsetStartTimestamp(),i.setTimeDeltaState(i.state.timeDelta,"PAUSED",i.props.onPause))},i.stop=function(){i.isStopped()||(i.clearTimer(),i.offsetStartTimestamp=i.calcOffsetStartTimestamp(),i.offsetTime=i.offsetStartTimestamp-i.initialTimestamp,i.setTimeDeltaState(i.calcTimeDelta(),"STOPPED",i.props.onStop))},i.isStarted=function(){return i.isStatus("STARTED")},i.isPaused=function(){return i.isStatus("PAUSED")},i.isStopped=function(){return i.isStatus("STOPPED")},i.isCompleted=function(){return i.isStatus("COMPLETED")},e.date){var a=i.calcTimeDelta();i.state={timeDelta:a,status:a.completed?"COMPLETED":"STOPPED"}}else i.legacyMode=!0;return i}return r(o,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(e){this.legacyMode||this.props.date!==e.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var e=this.props,t=e.date,o=e.now,n=e.precision,i=e.controlled,a=e.overtime;return function(e){var t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=o.now,i=void 0===n?Date.now:n,a=o.precision,s=void 0===a?0:a,c=o.controlled,r=o.offsetTime,l=void 0===r?0:r,f=o.overtime;t="string"===typeof e?new Date(e).getTime():e instanceof Date?e.getTime():e,c||(t+=l);var m=c?t:t-i(),p=Math.min(20,Math.max(0,s)),d=Math.round(1e3*parseFloat(((f?m:Math.max(0,m))/1e3).toFixed(p))),u=Math.abs(d)/1e3;return{total:d,days:Math.floor(u/86400),hours:Math.floor(u/3600%24),minutes:Math.floor(u/60%60),seconds:Math.floor(u%60),milliseconds:Number((u%1*1e3).toFixed()),completed:d<=0}}(t,{now:o,precision:n,controlled:i,offsetTime:this.offsetTime,overtime:a})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(e){this.legacyCountdownRef.current.addTime(e)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(e){return this.state.status===e}},{key:"setTimeDeltaState",value:function(e,t,o){var n=this;if(this.mounted){var i=e.completed&&!this.state.timeDelta.completed,a=e.completed&&"STARTED"===t;i&&!this.props.overtime&&this.clearTimer();return this.setState((function(o){var i=t||o.status;return e.completed&&!n.props.overtime?i="COMPLETED":t||"COMPLETED"!==i||(i="STOPPED"),{timeDelta:e,status:i}}),(function(){o&&o(n.state.timeDelta),n.props.onComplete&&(i||a)&&n.props.onComplete(e,a)}))}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var e=this.props,t=e.daysInHours,o=e.zeroPadTime,n=e.zeroPadDays,i=this.state.timeDelta;return Object.assign(Object.assign({},i),{api:this.getApi(),props:this.props,formatted:w(i,{daysInHours:t,zeroPadTime:o,zeroPadDays:n})})}},{key:"render",value:function(){if(this.legacyMode){var e=this.props,t=e.count,o=e.children,i=e.onComplete;return(0,n.createElement)(k,{ref:this.legacyCountdownRef,count:t,onComplete:i},o)}var a=this.props,s=a.className,c=a.overtime,r=a.children,l=a.renderer,f=this.getRenderProps();if(l)return l(f);if(r&&this.state.timeDelta.completed&&!c)return(0,n.cloneElement)(r,{countdown:f});var m=f.formatted,p=m.days,d=m.hours,u=m.minutes,b=m.seconds;return(0,n.createElement)("span",{className:s},f.total<0?"-":"",p,p?":":"",d,":",u,":",b)}}]),o}(n.Component);y.defaultProps=Object.assign(Object.assign({},g),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),y.propTypes={date:(0,a.oneOfType)([(0,a.instanceOf)(Date),a.string,a.number]),daysInHours:a.bool,zeroPadTime:a.number,zeroPadDays:a.number,controlled:a.bool,intervalDelay:a.number,precision:a.number,autoStart:a.bool,overtime:a.bool,className:a.string,children:a.element,renderer:a.func,now:a.func,onMount:a.func,onStart:a.func,onPause:a.func,onStop:a.func,onTick:a.func,onComplete:a.func};const v=y;var x=o(80184);const j=e=>(0,x.jsx)(i.m.div,{className:"".concat(e.theme," countdown flex flex-wrap ").concat(e.className),...e.animation,children:(0,x.jsx)(v,{date:e.date,renderer:S})}),S=e=>{let{days:t,hours:o,minutes:n,seconds:i,completed:a}=e;return a?(0,x.jsx)("span",{children:"You are good to go!"}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("span",{className:"number",children:h(t)}),(0,x.jsx)("span",{className:"unit",children:"Days"})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("span",{className:"number",children:h(o)}),(0,x.jsx)("span",{className:"unit",children:"Hours"})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("span",{className:"number",children:h(n)}),(0,x.jsx)("span",{className:"unit",children:"Minutes"})]}),(0,x.jsxs)("div",{children:[(0,x.jsx)("span",{className:"number",children:h(i)}),(0,x.jsx)("span",{className:"unit",children:"Seconds"})]})]})};j.defaultProps={theme:"countdown-style-01"};const N=(0,n.memo)(j)},28033:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>c});var n=o(72791),i=o(30018),a=o(80184);const s=e=>{const[t,o]=(0,n.useState)(!0);if(t)return(0,a.jsx)(i.Z,{className:"".concat(e.theme).concat(e.className?" ".concat(e.className):""),variant:e.variant,onClose:()=>o(!1),dismissible:e.dismissible,children:e.message})};s.defaultProps={className:"",theme:"message-box01"};const c=(0,n.memo)(s)},25705:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>c});var n=o(72791),i=o(92520),a=o(80184);const s=e=>{let{theme:t,children:o,className:s,...c}=e;return(0,n.useEffect)((()=>{let e=document.querySelectorAll(".smooth-scrollbar");const t=()=>{e.forEach((e=>{setTimeout((()=>{let t=e.querySelector(".scroll-content");null!==t&&t.clientHeight>e.clientHeight&&e.classList.add("scrollbar-appear"),null!==t&&t.clientHeight<e.clientHeight&&e.classList.remove("scrollbar-appear")}),500)}))};t(),window.addEventListener("resize",t),document.querySelectorAll(".accordion-button").forEach((e=>{e.addEventListener("click",t)}));let o=document.querySelectorAll(".navbar-nav > .nav-item");"undefined"!=typeof o&&null!=o&&o.forEach((e=>{let o=e.querySelector(".fa");"undefined"!=typeof o&&null!=o&&o.addEventListener("click",t)}))}),[]),(0,a.jsx)(i.Scrollbar,{...c,className:"smooth-scrollbar ".concat(t).concat(s?" ".concat(s):""),plugins:{overscroll:{effect:"bounce"}},children:o})};s.defaultProps={theme:"light"};const c=(0,n.memo)(s)},29213:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>r});var n=o(72791),i=o(34290),a=o(96006),s=o(80184);const c=e=>(0,s.jsx)("ul",{className:"social-icon flex-wrap gap-y-5 p-0 ".concat(e.theme," ").concat(e.size," ").concat(e.iconColor," ").concat(e.className),children:e.data.map(((t,o)=>"social-icon-style-11"!==e.theme?(0,s.jsx)(i.m.li,{style:{"--social-icon-color":t.color?t.color:"#000"},...e.animation,transition:{delay:o*e.animationDelay},children:(0,s.jsxs)("a",{href:t.link,"aria-label":"social icon",target:"_blank",rel:"noreferrer",children:[t.name&&(0,s.jsx)("span",{className:"flex brand-label",children:t.name?t.name:"icon"}),t.icon&&(0,s.jsx)("i",{className:"".concat(t.icon," brand-icon")}),(0,s.jsx)("span",{})]})},o):(0,s.jsx)(i.m.li,{style:{"--social-icon-color":t.color?t.color:"#000"},...e.animation,transition:{delay:o*e.animationDelay},children:(0,s.jsxs)("a",{href:t.link,"aria-label":"social icon",target:"_blank",rel:"noreferrer",children:[t.socialback&&(0,s.jsx)("div",{className:"social-back",children:(0,s.jsx)("span",{children:t.socialback})}),(0,s.jsxs)("div",{className:"".concat(t.position," social-front grid"),children:[t.icon&&(0,s.jsx)("i",{className:t.icon}),t.name&&(0,s.jsx)("span",{children:t.name?t.name:"icon"})]})]})},o)))});c.defaultProps={data:a.mc,theme:"social-icon-style-01",size:"lg",iconColor:"light",className:"justify-center",animationDelay:.2};const r=(0,n.memo)(c)},96006:(e,t,o)=>{"use strict";o.d(t,{Fg:()=>c,JV:()=>u,Q6:()=>l,Tq:()=>s,X_:()=>i,Xy:()=>f,gE:()=>p,k9:()=>r,kJ:()=>m,mc:()=>n,y:()=>a,zm:()=>d});const n=[{color:"#0038e3",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#0038e3",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#0038e3",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#0038e3",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0038e3",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#0038e3",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0038e3",link:"https://www.behance.net/",icon:"fab fa-behance"}],i=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],a=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],s=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],c=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],r=[{color:"#0038e3",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#0038e3",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#0038e3",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#0038e3",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0038e3",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#0038e3",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0038e3",link:"https://www.behance.net/",icon:"fab fa-behance"}],l=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],f=[{name:"FACEBOOK",color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{name:"DRIBBBLE",color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{name:"BEHANCE",color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"},{name:"INSTAGRAM",color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"}],m=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0077b5",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],p=[{color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#ea4c89",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#007bb6",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#fe1f49",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#1769ff",link:"https://www.behance.net/",icon:"fab fa-behance"}],d=[{position:"top-left",name:"FACEBOOK",color:"#3b5998",link:"https://www.facebook.com/",icon:"fab fa-facebook-f",socialback:"LIKE US"},{position:"top",name:"TWITTER",color:"#00aced",link:"https://twitter.com/",icon:"fab fa-twitter",socialback:"FOLLOW US"},{position:"top-left",name:"LINKEDIN",color:"#007bb6",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in",socialback:"JOIN US"},{position:"top-right",name:"GOOGLE",color:"#dc4a38",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g",socialback:"FOLLOW US"}],u=[{color:"#000",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#000",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#000",link:"https://accounts.google.com/signin/v2/identifier?passive=1209600&osid=1&continue=https%3A%2F%2Fplus.google.com%2F&followup=https%3A%2F%2Fplus.google.com%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin",icon:"fab fa-google-plus-g"},{color:"#000",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#000",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"},{color:"#000",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#000",link:"https://www.behance.net/",icon:"fab fa-behance"}]},62752:(e,t,o)=>{"use strict";o.d(t,{Z:()=>i});var n=o(72791);function i(e,t){(0,n.useEffect)((()=>{const o=o=>{e.current&&!e.current.contains(o.target)&&t(o)};return document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}}),[e,t])}},38943:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>S});var n=o(72791),i=o(47022),a=o(89743),s=o(2677),c=o(43360),r=o(11087),l=o(34290),f=o(71856),m=o(92506),p=o(81724),d=o(62752),u=o(43739),b=o(53744),h=o(29213),g=o(17728),w=o(28033),k=o(49823),y=o(21240),v=o(38480),x=o(80184);const j=[{color:"#0038e3",link:"https://www.facebook.com/",icon:"fab fa-facebook-f"},{color:"#0038e3",link:"https://dribbble.com/",icon:"fab fa-dribbble"},{color:"#0038e3",link:"https://twitter.com/",icon:"fab fa-twitter"},{color:"#0038e3",link:"https://www.instagram.com/",icon:"fab fa-instagram"},{color:"#0038e3",link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in"}],S=()=>{const[e,t]=(0,n.useState)(!1),o=(0,n.useRef)(),S=()=>{t(!1)};return(0,d.Z)(o,S),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(k.default,{animation:!1}),(0,x.jsxs)("div",{className:"coming-soon-v2",children:[(0,x.jsx)("section",{className:"cover-background",style:{backgroundImage:"url(https://via.placeholder.com/1920x1080)"},children:(0,x.jsx)(i.Z,{fluid:!0,children:(0,x.jsx)(a.Z,{children:(0,x.jsx)(s.Z,{sm:12,className:"h-[100vh] p-[100px] xl:p-[50px] sm:py-[20px] sm:px-[35px] landscape:md:h-auto",children:(0,x.jsxs)("div",{className:"flex h-full justify-between flex-col items-start sm:text-center sm:items-center",children:[(0,x.jsx)(r.rU,{"aria-label":"homepage",className:"inline-block mr-0 landscape:md:mb-[30px]",to:"/",children:(0,x.jsx)(l.m.img,{src:"/assets/img/webp/logo-white-big.webp",className:"xl:w-[100px] sm:w-full",height:"52",width:"160",loading:"lazy",alt:"logo",...y.Ji})}),(0,x.jsxs)("div",{className:"xs:text-center",children:[(0,x.jsx)(l.m.h1,{className:"font-serif text-gradient bg-gradient-to-r from-[#556fff] via-[#e05fc4] to-[#ff798e] font-semibold mb-[10px] inline-block xl:text-[4rem] xl:leading-none",...y.Ji,transition:{delay:.3},children:"Hello Guys!"}),(0,x.jsx)(l.m.h3,{className:"font-serif block text-white xl:text-xlg xl:mb-[20px]",...y.Ji,transition:{delay:.5},children:"We're coming soon..."}),(0,x.jsx)(l.m.p,{className:"text-xmd text-white leading-[28px] font-light mb-[50px] xl:mb-[20px] w-[450px] sm:w-full",...y.Ji,whileInView:{opacity:.5},transition:{delay:.7},children:"We're currently working hard on this page. Subscribe our newsletter to get update when it'll be live."}),(0,x.jsx)(l.m.div,{...y.Ji,transition:{delay:1},children:(0,x.jsx)(b.Z,{theme:"countdown-style-03",className:"text-white font-semibold !text-[47px] mb-[40px] xl:mb-[20px] row-cols-2 row-cols-sm-4",date:"2023-12-14T15:12:03",animation:y.Ji})}),(0,x.jsx)(l.m.div,{...y.Ji,transition:{delay:1.2},children:(0,x.jsx)(u.default,{onClick:()=>{t(!0)},className:"btn-fill drop-shadow-md font-medium font-serif uppercase rounded-[50px] btn-shadow text-[15px] md:mb-[15px]",size:"md",themeColor:"#fff",color:"#000",title:"notify me"})})]}),(0,x.jsx)(l.m.div,{...y.Ji,transition:{delay:1.4},children:(0,x.jsx)(h.default,{size:"sm",theme:"social-icon-style-06",className:"justify-center text-center",iconColor:"light",data:j})})]})})})})}),(0,x.jsx)("section",{className:"".concat(e?"notify-me":""),children:(0,x.jsxs)(l.m.div,{className:"fixed left-0 top-0 w-full h-full",initial:{translateY:"100%"},animate:{translateY:e?"0%":"100%"},transition:{ease:"easeIn",duration:.3},children:[(0,x.jsxs)(c.Z,{onClick:S,className:"btn-close fixed top-[30px] right-[30px] text-[30px] bg-transparent text-white ".concat(e?"inline-block":"hidden"),title:"Close (Esc)",children:[" ","\xd7"," "]}),(0,x.jsx)(l.m.div,{className:"fixed bottom-0 w-full bg-[#fff]",ref:o,children:(0,x.jsx)(i.Z,{className:"pt-[100px] md:py-[30px]",children:(0,x.jsxs)(a.Z,{className:"items-center justify-center sm:text-center gap-x-[15px] gap-y-10",children:[(0,x.jsx)(s.Z,{md:4,className:"sm:mb-10 md:inline-block sm:hidden",children:(0,x.jsx)("img",{src:"https://via.placeholder.com/352x359",alt:"coming-soon",width:"352",height:"359"})}),(0,x.jsxs)(s.Z,{md:7,lg:{span:6,offset:1},className:"pb-20 md:pb-[30px] sm:pb-0",children:[(0,x.jsx)("h4",{className:"font-serif text-darkgray font-semibold mb-[15px]",children:"Let's get started now"}),(0,x.jsx)("p",{className:"text-spanishgray mb-[42px] sm:mb-[33px]",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum is simply dummy."}),(0,x.jsx)(m.J9,{initialValues:{email:""},validationSchema:p.Ry().shape({email:p.Z_().email("Invalid email.").required("Field is required.")}),onSubmit:async(e,t)=>{t.setSubmitting(!0);"success"===(await(0,v.sendEmail)(e)).status&&(0,v.resetForm)(t)},children:e=>{let{isSubmitting:t,status:o}=e;return(0,x.jsxs)("div",{className:"relative subscribe-style-07",children:[(0,x.jsxs)(m.l0,{className:"relative",children:[(0,x.jsx)(g.II,{showErrorMsg:!1,type:"email",name:"email",className:"border-[1px] extra-large-input border-solid border-transparent",placeholder:"Your email address"}),(0,x.jsx)("button",{type:"submit",className:"text-xs tracking-[1px] py-[12px] px-[28px] uppercase".concat(t?" loading":""),children:(0,x.jsx)("i",{className:"fa fa-arrow-right"})})]}),(0,x.jsx)(f.M,{children:o&&(0,x.jsx)(l.m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"mt-[25px] top-[115%] left-0 w-full",children:(0,x.jsx)(w.default,{className:"rounded-[4px] text-md py-[10px] px-[22px]",theme:"message-box01",variant:"success",message:"Your message has been sent successfully subscribed to our email list!"})})})]})}})]})]})})})]})})]})]})}},80888:(e,t,o)=>{"use strict";var n=o(79047);function i(){}function a(){}a.resetWarningCache=i,e.exports=function(){function e(e,t,o,i,a,s){if(s!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:i};return o.PropTypes=o,o}},52007:(e,t,o)=>{e.exports=o(80888)()},79047:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},43360:(e,t,o)=>{"use strict";o.d(t,{Z:()=>f});var n=o(41418),i=o.n(n),a=o(72791),s=o(15341),c=o(10162),r=o(80184);const l=a.forwardRef(((e,t)=>{let{as:o,bsPrefix:n,variant:a="primary",size:l,active:f=!1,disabled:m=!1,className:p,...d}=e;const u=(0,c.vE)(n,"btn"),[b,{tagName:h}]=(0,s.FT)({tagName:o,disabled:m,...d}),g=h;return(0,r.jsx)(g,{...b,...d,ref:t,disabled:m,className:i()(p,u,f&&"active",a&&"".concat(u,"-").concat(a),l&&"".concat(u,"-").concat(l),d.href&&m&&"disabled")})}));l.displayName="Button";const f=l},80473:(e,t,o)=>{"use strict";o.d(t,{Z:()=>m});var n=o(52007),i=o.n(n),a=o(72791),s=o(41418),c=o.n(s),r=o(80184);const l={"aria-label":i().string,onClick:i().func,variant:i().oneOf(["white"])},f=a.forwardRef(((e,t)=>{let{className:o,variant:n,"aria-label":i="Close",...a}=e;return(0,r.jsx)("button",{ref:t,type:"button",className:c()("btn-close",n&&"btn-close-".concat(n),o),"aria-label":i,...a})}));f.displayName="CloseButton",f.propTypes=l;const m=f},47022:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var n=o(41418),i=o.n(n),a=o(72791),s=o(10162),c=o(80184);const r=a.forwardRef(((e,t)=>{let{bsPrefix:o,fluid:n=!1,as:a="div",className:r,...l}=e;const f=(0,s.vE)(o,"container"),m="string"===typeof n?"-".concat(n):"-fluid";return(0,c.jsx)(a,{ref:t,...l,className:i()(r,n?"".concat(f).concat(m):f)})}));r.displayName="Container";const l=r},89743:(e,t,o)=>{"use strict";o.d(t,{Z:()=>l});var n=o(41418),i=o.n(n),a=o(72791),s=o(10162),c=o(80184);const r=a.forwardRef(((e,t)=>{let{bsPrefix:o,className:n,as:a="div",...r}=e;const l=(0,s.vE)(o,"row"),f=(0,s.pi)(),m=(0,s.zG)(),p="".concat(l,"-cols"),d=[];return f.forEach((e=>{const t=r[e];let o;delete r[e],null!=t&&"object"===typeof t?({cols:o}=t):o=t;const n=e!==m?"-".concat(e):"";null!=o&&d.push("".concat(p).concat(n,"-").concat(o))})),(0,c.jsx)(a,{ref:t,...r,className:i()(n,l,...d)})}));r.displayName="Row";const l=r},27472:(e,t,o)=>{"use strict";o.d(t,{Z:()=>c});var n=o(72791),i=o(41418),a=o.n(i),s=o(80184);const c=e=>n.forwardRef(((t,o)=>(0,s.jsx)("div",{...t,ref:o,className:a()(t.className,e)})))},92199:(e,t,o)=>{"use strict";o.d(t,{L:()=>i});var n=o(72791),i=o(26219).j?n.useLayoutEffect:n.useEffect}}]);
//# sourceMappingURL=5718.ba7e62a1.chunk.js.map