"use strict";(self.webpackChunkmovie_app=self.webpackChunkmovie_app||[]).push([[330],{3330:function(t,e,n){n.r(e),n.d(e,{default:function(){return x}});var s=n(2791),i=n(9434),a=n(4970),c=n(68),r=n(8699),o=n(7689),l=n(184),d=function(){var t=(0,i.v9)((function(t){return t.WatchListData.data})),e=(0,o.s0)();return console.log(t),(0,l.jsx)("div",{className:"d-flex flex-wrap justify-content-start align-items-start m-0",children:t.map((function(t){return(0,l.jsx)("div",{className:"movie_card",id:t.id,onClick:function(){return e("/movie-details/".concat(t.id))},children:(0,l.jsxs)("div",{className:"info_section mb-1",children:[(0,l.jsx)("div",{className:"movie_header",children:(0,l.jsxs)("div",{className:"",style:{display:"flex",alignItems:"start",justifyContent:"start",width:"63%",height:"400px"},children:[t.poster_path?(0,l.jsx)("img",{className:"h-100 w-100",style:{borderRadius:"5%"},src:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),alt:t.title}):(0,l.jsx)(r.Z,{}),(0,l.jsxs)("div",{style:{marginLeft:"25px",textAlign:"start"},className:"d-flex flex-column justify-content-center",children:[(0,l.jsx)("h1",{className:"mt-4",style:{width:"60%"},children:t.title}),(0,l.jsx)(a.Z,{rating:t.vote_average}),(0,l.jsxs)("h5",{className:"mt-2",children:["Released at: ",t.release_date]}),(0,l.jsx)("div",{className:"movie_desc mb-3",style:{width:"60%"},children:(0,l.jsx)("p",{className:"text ",children:t.overview})}),(0,l.jsx)("div",{className:"movie_social",style:{width:"400px",alignItems:"end",display:"flex"}})]})]})}),(0,l.jsx)("div",{className:"d-flex position-absolute bottom-0 end-0 m-3",children:(0,l.jsx)(c.Z,{movie:t})})]})})}))})},u=(n(8595),n(4534)),m=n(2308);function h(){var t=(0,s.useContext)(m.A).language;return(0,l.jsx)(u.Z,{msg:"ar"===t?"\u0644\u0627 \u064a\u0648\u062c\u062f \u0644\u062f\u064a\u0643 \u0627\u0641\u0644\u0627\u0645 \u0641\u064a \u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0645\u0641\u0636\u0644\u0629":"No Movies in watch list"})}function x(){return 0===(0,i.v9)((function(t){return t.WatchListData.data})).length?(0,l.jsx)(h,{}):(0,l.jsxs)("div",{className:"",style:{padding:"2% 7%"},children:[(0,l.jsx)("h3",{className:"text-black fw-bold mb-4",children:"My Watch List"}),(0,l.jsx)(d,{})]})}},4534:function(t,e,n){n.d(e,{Z:function(){return l}});var s=n(2791),i=n(9806),a=n(1632),c=(n(8595),n(7689)),r=n(2308),o=n(184);function l(t){var e=t.msg,n=(0,c.s0)(),l=(0,s.useContext)(r.w).backgroundTheme,d=(0,s.useContext)(r.A).language;return(0,o.jsxs)("div",{className:"".concat(l?"text-black":"text-white"," empty-wishlsit"),style:{height:"1000px"},children:[(0,o.jsx)(i.G,{style:{fontSize:"300px"},icon:a.ym2}),(0,o.jsx)("p",{style:{fontSize:"24px",margin:"32px"},children:e}),(0,o.jsx)("button",{style:{paddingLeft:"100px",paddingRight:"100px",backgroundColor:"#D48166"},className:"btn",onClick:function(){return n("/")},children:(0,o.jsx)("h4",{style:{color:"white"},children:"ar"===d?"\u0639\u0648\u062f\u0629 \u0627\u0644\u064a \u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629":"Back To Home"})})]})}},68:function(t,e,n){n.d(e,{Z:function(){return l}});n(2791);var s=n(9806),i=n(1632),a=n(6850),c=n(9434),r=n(3392),o=n(184);function l(t){var e=t.movie,n=(0,c.v9)((function(t){return t.WatchListData.data})).some((function(t){return t.id===e.id})),l=(0,c.I0)();return(0,o.jsx)("div",{children:(0,o.jsx)(s.G,{id:e.id,icon:n?i.m6i:a.m6i,style:{color:"#D48166",fontSize:"2rem"},className:"icon-button",onClick:function(t){return function(t,e){t.stopPropagation(),console.log("love clicked"),l((0,r.W)(e))}(t,e)}})})}},8699:function(t,e,n){n.d(e,{Z:function(){return c}});var s=n(2791),i=n(2308),a=n(184);function c(t){var e=t.title,n=(0,s.useContext)(i.w).backgroundTheme;return(0,a.jsx)("img",{src:n?"https://i.ibb.co/hHsccZg/imgnot-found.png":"https://i.ibb.co/SJ3Sqsm/image.png",style:{width:"100%",height:"100%",borderRadius:"27px"},alt:e})}},4970:function(t,e,n){n.d(e,{Z:function(){return r}});var s=n(9806),i=n(1632),a=n(6850),c=n(184);function r(t){var e=t.rating;e/=2;for(var n=[null],r=0;r<5;r++)e>=1?(n.push((0,c.jsx)(s.G,{icon:i.Tab,style:{color:"#D48166"}},r)),e-=1):0<e?(n.push((0,c.jsx)(s.G,{icon:i.pG1,style:{color:"#D48166"}},r)),e=0):n.push((0,c.jsx)(s.G,{icon:a.Tab,style:{color:"#D48166"}},r));return(0,c.jsx)("div",{className:"rating",children:n})}}}]);
//# sourceMappingURL=330.59d4a68b.chunk.js.map