(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2163],{41575:function(e,t,i){Promise.resolve().then(i.t.bind(i,90413,23)),Promise.resolve().then(i.t.bind(i,68326,23)),Promise.resolve().then(i.bind(i,31980)),Promise.resolve().then(i.bind(i,8667)),Promise.resolve().then(i.bind(i,35375)),Promise.resolve().then(i.bind(i,95519)),Promise.resolve().then(i.bind(i,23846)),Promise.resolve().then(i.bind(i,64757)),Promise.resolve().then(i.bind(i,92628)),Promise.resolve().then(i.bind(i,11211)),Promise.resolve().then(i.bind(i,55941)),Promise.resolve().then(i.bind(i,7730)),Promise.resolve().then(i.bind(i,82875)),Promise.resolve().then(i.bind(i,42478)),Promise.resolve().then(i.bind(i,3599)),Promise.resolve().then(i.bind(i,87801)),Promise.resolve().then(i.bind(i,30765)),Promise.resolve().then(i.bind(i,24504)),Promise.resolve().then(i.bind(i,23727)),Promise.resolve().then(i.bind(i,5227)),Promise.resolve().then(i.bind(i,61439)),Promise.resolve().then(i.bind(i,37053)),Promise.resolve().then(i.bind(i,78548)),Promise.resolve().then(i.bind(i,26650)),Promise.resolve().then(i.bind(i,57238)),Promise.resolve().then(i.bind(i,29767)),Promise.resolve().then(i.bind(i,45548)),Promise.resolve().then(i.bind(i,68761)),Promise.resolve().then(i.bind(i,1505)),Promise.resolve().then(i.bind(i,57953)),Promise.resolve().then(i.bind(i,27905)),Promise.resolve().then(i.bind(i,39046)),Promise.resolve().then(i.bind(i,11737)),Promise.resolve().then(i.bind(i,64243)),Promise.resolve().then(i.bind(i,63711)),Promise.resolve().then(i.bind(i,1880)),Promise.resolve().then(i.bind(i,4272)),Promise.resolve().then(i.bind(i,81786)),Promise.resolve().then(i.bind(i,25784))},80679:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{unstable_getImgProps:function(){return unstable_getImgProps},default:function(){return d}});let r=i(21024),s=i(7929),n=i(92637),a=i(90413),l=r._(i(69950)),unstable_getImgProps=e=>{(0,n.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,s.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}},d=a.Image},81786:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return FAQ_FrequentlyAskedQuestion}});var r=i(57437),s=i(2265),n=i(53911),a={src:"/_next/static/media/FAQTopBorder.f7d09081.svg",height:100,width:1e3,blurWidth:0,blurHeight:0},l=i(16691),d=i.n(l),FAQ_FrequentlyAskedQuestion=e=>{let{heading:t,FrequentlyAskedQuestionArray:i}=e,[l,u]=(0,s.useState)(null);return(0,r.jsxs)("div",{className:"w-[100%] bg-[#1c1e204f] relative py-5 md:py-36",children:[(0,r.jsx)(d(),{src:a,alt:"Top Border",className:"absolute top-0 w-full [transform:rotateY(180deg)]"}),(0,r.jsxs)("div",{className:"boxLayout mx-auto py-10 px-5 flex flex-col justify-center items-center ",children:[(0,r.jsx)("h1",{className:"text-[30px] md:text-[40px] font-semibold text-white flex flex-wrap justify-center items-center text-center",dangerouslySetInnerHTML:{__html:t}}),(0,r.jsx)("div",{className:"w-full my-10 text-white flex flex-col gap-5",children:i.map((e,t)=>(0,r.jsx)(n.Z,{index:t,question:e,openIndex:l,setOpenIndex:u},t))})]}),(0,r.jsx)(d(),{src:a,alt:"Top Border",className:"absolute bottom-[-85px] w-full h-[250px] [transform:rotateX(250deg)]"})]})}},53911:function(e,t,i){"use strict";i.d(t,{Z:function(){return FAQ_FrequentlyAskedQuestionDropDown}});var r=i(57437);i(2265);var s=i(16691),n=i.n(s),a=i(19686),l={src:"/_next/static/media/DropRightArrowGreen.0b94cc8e.svg",height:11,width:8,blurWidth:0,blurHeight:0},FAQ_FrequentlyAskedQuestionDropDown=e=>{let{index:t,question:i,openIndex:s,setOpenIndex:d}=e,u=s===t;return(0,r.jsxs)("div",{className:"bg-[#1B1D20] p-6 border-l-2 border-[#4FA83D]",children:[(0,r.jsxs)("div",{className:"flex justify-between hover:cursor-pointer",onClick:()=>{d(u?null:t)},children:[(0,r.jsx)("h1",{children:i.title}),(0,r.jsx)("button",{children:u?(0,r.jsx)(n(),{src:l,width:8,height:16,alt:"Down Arrow",className:"transform rotate-90 transition-all duration-500 "}):(0,r.jsx)(n(),{src:a.Z,width:8,height:16,alt:"Up Arrow",className:"transition-all duration-500"})})]}),u&&(0,r.jsx)("div",{className:"mt-5",children:(0,r.jsx)("p",{dangerouslySetInnerHTML:{__html:i.description}})})]},t)}},25784:function(e,t,i){"use strict";i.r(t);var r=i(57437);i(2265),t.default=e=>{let{heading:t}=e,handleSubmit=async e=>{e.preventDefault();try{let t=new FormData(e.currentTarget),i=JSON.stringify(Object.fromEntries(t.entries())),r=await fetch("https://webhook.site/f931fccd-9f94-40e3-94c6-9b7204be7984",{method:"POST",headers:{"Content-Type":"application/json"},body:i});r.ok?(alert("Email sent successfully!"),e.currentTarget.reset()):alert("Failed to send email. Please try again later.")}catch(e){console.error("Error sending email:",e),alert("An error occurred. Please try again later.")}};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"py-[60px] px-[10px]",children:(0,r.jsx)("div",{className:"max-w-[1140px] m-auto",children:(0,r.jsxs)("div",{className:" bg-[#4fa83d] px-5 py-5 md:py-[50px] md:px-[30px] rounded-[20px] bg-[url('/assets/GlobalImages/TryForFreeFormBg.svg')] bg-cover bg-no-repeat bg-center",children:[(0,r.jsx)("h2",{className:"mb-5 md:mx-[10%] text-white text-[22px] md:text-[30px] lg:text-[40px] font-semibold capitalize leading-[1.4em] text-center",dangerouslySetInnerHTML:{__html:t}}),(0,r.jsx)("div",{className:"p-[10px]",children:(0,r.jsx)("div",{className:"lg:mx-[20%] w-full lg:w-auto mt-[2%]",children:(0,r.jsx)("div",{className:"w-full p-[5px] bg-white border border-[#4fa83d] rounded-[10px] ",children:(0,r.jsxs)("form",{onSubmit:handleSubmit,children:[(0,r.jsx)("input",{type:"email",name:"email",placeholder:"Enter your email to sign-in",className:"md:w-[70%] w-full bg-transparent text-base text-black py-[7px] px-5 min-h-[59px] outline-none"}),(0,r.jsx)("button",{type:"submit",className:"bg-[#4FA83D] text-base text-white font-semibold border border-[#4FA83D] rounded-[10px] px-[40px] py-5 w-full md:w-[30%] transition duration-300 hover:bg-transparent hover:text-[#4fa83d]",children:"Try for free"})]})})})})]})})})})}},31980:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/BrandARYDigital.0bf01298.svg",height:59,width:54,blurWidth:0,blurHeight:0}},8667:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/BrandCWS.39ee3792.svg",height:28,width:86,blurWidth:0,blurHeight:0}},35375:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/BrandIBCLive.4e01ece0.svg",height:37,width:138,blurWidth:0,blurHeight:0}},23846:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/BrandIQBroadcast.2df1cb02.svg",height:24,width:138,blurWidth:0,blurHeight:0}},95519:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/BrandInterlinkMultiMedia.127ab217.svg",height:53,width:119,blurWidth:0,blurHeight:0}},64757:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/BrandLondonReal.e85f4dfd.svg",height:27,width:116,blurWidth:0,blurHeight:0}},11211:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/BrandMSLive.8f9aebce.svg",height:62,width:87,blurWidth:0,blurHeight:0}},92628:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/BrandMediaOne.08986dfc.svg",height:43,width:81,blurWidth:0,blurHeight:0}},55941:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/BrandMuusicTyme.e1de60a8.svg",height:35,width:133,blurWidth:0,blurHeight:0}},7730:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/BrandSLMedia.308c0fac.svg",height:29,width:110,blurWidth:0,blurHeight:0}},82875:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/BrandTeletica.97541e7f.svg",height:65,width:73,blurWidth:0,blurHeight:0}},42478:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/BrandVerve.38d2bc37.svg",height:45,width:97,blurWidth:0,blurHeight:0}},3599:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/BrandVivre.ac251fa7.svg",height:31,width:75,blurWidth:0,blurHeight:0}},87801:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/BrandWhiteAnthymTV.33af07f3.svg",height:25,width:114,blurWidth:0,blurHeight:0}},30765:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/LeftRectangle.974d5ad4.webp",height:84,width:84,blurDataURL:"data:image/webp;base64,UklGRrYAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSD4AAAABYBDbtql73/s/izsaWX4Ip2AM8zFERAgJEuwOYaqPDZqXVZqHZcrPNl+dLhbB974fK01gP1sDA3HpCwsoAlZQOCBSAAAAMAIAnQEqCAAIAAJAOCWwAnS6AfgAAdltsAAAQtQr9hiWQQqw//F7x0lyJLbu44CDrzNjw9+Bj/4vefdKcQ3DOdbb/k5MVGLzcvz/+Df/aMAAAA==",blurWidth:8,blurHeight:8}},24504:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/RightRectangle.2e453c05.png",height:84,width:84,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEVNqTtOqDxMaXFOqTxGpzROqzxNpzpNpzxNqTtPrD1Ssj+8fDglAAAACXRSTlPk/gDdDpmgPsVcNCKiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANElEQVR4nCXIwRHAIBDDQJ2PAHb/BTMQvXaEJK1JI43pBDR2XAZ9qbpYrh9vXHRsO9C89gEmwwELanXAmwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},26650:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/StarEmpty.ca9cd93d.svg",height:15,width:16,blurWidth:0,blurHeight:0}},57238:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/StarFilled.8e2e41f0.svg",height:15,width:16,blurWidth:0,blurHeight:0}},23727:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/client-Hannah.85f56d48.svg",height:47,width:46,blurWidth:0,blurHeight:0}},5227:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/client-Manoj.4bcab5e5.svg",height:47,width:46,blurWidth:0,blurHeight:0}},61439:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/client-Sai.1ddfbc97.svg",height:46,width:46,blurWidth:0,blurHeight:0}},37053:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/client-Shaheer.310d9f31.svg",height:47,width:46,blurWidth:0,blurHeight:0}},78548:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/client-Simran.59d25a05.svg",height:47,width:46,blurWidth:0,blurHeight:0}},19686:function(e,t){"use strict";t.Z={src:"/_next/static/media/DropRightArrow.713cd71b.svg",height:11,width:8,blurWidth:0,blurHeight:0}},29767:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/FeatureProductsRadiusTop.0937e18e.svg",height:100,width:1e3,blurWidth:0,blurHeight:0}},45548:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/CloudStorage.05355369.svg",height:239,width:334,blurWidth:0,blurHeight:0}},1505:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/LiveStreamPublish.a10afde9.svg",height:273,width:273,blurWidth:0,blurHeight:0}},57953:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/LiveStreamSchedule.023af4c1.svg",height:247,width:336,blurWidth:0,blurHeight:0}},27905:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/PlaylistScheduler.68502739.svg",height:243,width:243,blurWidth:0,blurHeight:0}},39046:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/RealtimePlaylistUpdate.495eb5ab.svg",height:268,width:268,blurWidth:0,blurHeight:0}},11737:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/SchedulePlaylistStatus.68761e98.svg",height:227,width:230,blurWidth:0,blurHeight:0}},64243:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/ScheduleTheVideo.f4b26557.png",height:133,width:136,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEUrKyssKywuLi0tLS0qKys3VTEsLCwlIyYsLCsrKystOysrKyvE27guOCzD2bWYqI93gnA/Pz9zfm3J4bzi3Mo1AAAAEnRSTlP+TvZDZP00/rfm+43l+6twcQQQk+RWAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAO0lEQVR4nCXJQQ6AIAwF0QF+WwUUxfvf1RDeapLBm5JaeTk359gciAhIEGYWsaJeNc9BXnN+nSJJT79/PMYBug2J9NkAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},63711:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/SitBackEnjoy.8c03255e.png",height:129,width:132,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEVMaXEnJicxPi4qKSolHic0NzMrLCstLC0rLCsrKyssLSwrKyssLCw+cDQ1NzQkJDYsKCyFlH5Dgjc2NzUlHiV+i3hESEI5DAA8AAAAF3RSTlMAa8/SLN3p/t7yxjezp5UOS7GU6SK7gsK2jmIAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA9SURBVHicFcGHEcAgDACxB+NCTc/+o+YiAZRI/Ho8muAua7x6JSLXKusQ8jSXVjsep8XYwd1mK4C5a9vgAzz6AcdRjEZCAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},1880:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/UploadTheVideo.002542e3.png",height:125,width:129,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEVxeXEpKCotLS0rJytBdjYoKCgrKyvU7cW30qUqKSrM4rzJ4bwrKyssLCsuLy4+ZDawRcBJAAAADnRSTlMB4fD9/h1gkip5ZGiqvI/ORtYAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA5SURBVHicLcZHDsAwDMRAeiW5pKz//9vAQHgYEKovqUM1O6yiOzLDL3LkDotH7bQA5jwCY/xz3cAHMDABHrEdabYAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},68761:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/dollarSetting.210c2980.svg",height:50,width:56,blurWidth:0,blurHeight:0}},4272:function(e,t,i){"use strict";i.r(t),t.default={src:"/_next/static/media/LongTick.1c08146d.svg",height:28,width:34,blurWidth:0,blurHeight:0}},30622:function(e,t,i){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=i(2265),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function q(e,t,i){var r,n={},u=null,c=null;for(r in void 0!==i&&(u=""+i),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,r)&&!d.hasOwnProperty(r)&&(n[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===n[r]&&(n[r]=t[r]);return{$$typeof:s,type:e,key:u,ref:c,props:n,_owner:l.current}}t.Fragment=n,t.jsx=q,t.jsxs=q},57437:function(e,t,i){"use strict";e.exports=i(30622)},16691:function(e,t,i){e.exports=i(80679)}},function(e){e.O(0,[413,8326,2971,2472,1744],function(){return e(e.s=41575)}),_N_E=e.O()}]);