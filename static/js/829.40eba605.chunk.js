"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[829],{829:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r,a,u,i,c=e(433),o=e(439),s=e(791),p=e(689),f=e(436),l=e(168),h=e(686),d=h.Z.ul(r||(r=(0,l.Z)(["\n  padding: 20px;\n  list-style: none;\n"]))),x=h.Z.li(a||(a=(0,l.Z)(["\n  background-color: #f2eee6;\n  padding: 20px;\n  font-size: 14px;\n  text-align: justify;\n  /* box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12); */\n  margin-bottom: 20px;\n"]))),g=h.Z.p(u||(u=(0,l.Z)(["\n  font-weight: bold;\n"]))),v=h.Z.p(i||(i=(0,l.Z)(["\n  font-style: italic;\n"]))),Z=e(184);var m=function(){var n=(0,p.UO)().movieId,t=(0,s.useState)([]),e=(0,o.Z)(t,2),r=e[0],a=e[1];return(0,s.useEffect)((function(){n&&(0,f.nA)(n,"reviews").then((function(n){var t=n.results;a((0,c.Z)(t))})).catch((function(n){return console.log(n)}))}),[n]),(0,Z.jsx)("div",{children:(0,Z.jsx)(d,{children:r.length?r.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,Z.jsxs)(x,{children:[(0,Z.jsxs)(g,{children:["Author: ",e]}),(0,Z.jsx)(v,{children:r})]},t)})):(0,Z.jsx)("div",{children:"Wie don't have any reviews for this movie"})})})}},436:function(n,t,e){e.d(t,{WK:function(){return p},Y5:function(){return l},nA:function(){return d},wr:function(){return o}});var r=e(861),a=e(687),u=e.n(a),i=e(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3/";var c={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWU3MTM3ZDlmYzM2MTcxNjZlYjExZDNhOGQ0MGFiMCIsInN1YiI6IjY0YTY3NzgzY2FlNjMyMDExZmEzMGNmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gEOkQD0FXxUfmOhTCa-454ep2pjfF3H_I2ZZK8BBfzw"}};function o(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/trending/all/day?language=en-US",c);case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/search/movie?query=".concat(t,"&language=en-US"),c);case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(t,"?language=en-US"),c);case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n,t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function n(t,e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("movie/".concat(t,"/").concat(e,"?language=en-US"),c);case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=829.40eba605.chunk.js.map