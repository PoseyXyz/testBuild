(this.webpackJsonpbooks=this.webpackJsonpbooks||[]).push([[0],{26:function(e,t,a){e.exports=a(40)},38:function(e,t,a){e.exports=a.p+"static/media/45.8722fbd0.gif"},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),s=a.n(c),l=a(7),m=(a(31),a(12)),o=a(13),u=a(16),i=a(15),d=a(8),p=a(18),h=a.n(p),E=a(11),v=a(24),f=r.a.createContext(),b=function(e){var t=e.children,a=Object(n.useState)([]),c=Object(d.a)(a,2),s=c[0],l=c[1],m=Object(n.useState)([]),o=Object(d.a)(m,2),u=o[0],i=o[1],p=Object(n.useState)(""),b=Object(d.a)(p,2),g=b[0],j=b[1];Object(n.useEffect)((function(){O()}),[g]);var O=function(){var e=Object(v.a)(h.a.mark((function e(){var t,a,n,r,c,s,m,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.tvmaze.com/search/shows?q=".concat(g,"/"));case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.next=8,fetch("https://api.tvmaze.com/search/shows?q=wam/",{headers:{},dataType:"json",method:"GET"});case 8:return n=e.sent,e.next=11,n.json();case 11:return r=e.sent,e.next=14,fetch("https://api.tvmaze.com/search/shows?q=blac/",{headers:{},dataType:"json",method:"GET"});case 14:return c=e.sent,e.next=17,c.json();case 17:return s=e.sent,e.next=20,fetch("https://api.tvmaze.com/search/shows?q=tite/",{headers:{},dataType:"json",method:"GET"});case 20:return m=e.sent,e.next=23,m.json();case 23:o=e.sent,l([].concat(Object(E.a)(r),Object(E.a)(s),Object(E.a)(o),Object(E.a)(a))),i(a);case 26:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(f.Provider,{value:{search:g,scheduled:s,searchedMovies:u,handleChange:function(e){j(e.target.value)},getData:O,showDetails:function(e){return s.find((function(t){return t.show.name===e}))}}},t)},g=f.Consumer;var j=function(e){var t=e.movie,a=t.show;return r.a.createElement(r.a.Fragment,null,null===t.show.image?r.a.createElement("div",{style:{display:"none"}}):r.a.createElement("div",{className:"single-movie-box"},r.a.createElement("img",{src:a.image?a.image.medium:"",alt:"Not Found"}),r.a.createElement("div",{className:"details"},r.a.createElement("p",{className:"name"},a.name),r.a.createElement(l.b,{to:"/details/".concat(a.name)},r.a.createElement("button",{className:"details-link"},"Details")))))};var O=function(e){var t=Object(n.useContext)(f).scheduled;return r.a.createElement("div",{className:"top"},r.a.createElement("p",{className:"top-picks"},"Top Picks"),r.a.createElement("div",{className:"movies-grid"},t.map((function(e,t){return r.a.createElement(j,{key:t,movie:e})}))))};var N=function(e){var t=Object(n.useContext)(f),c=t.searchedMovies,s=t.search,l=t.handleChange,m=Object(n.useState)(!1),o=Object(d.a)(m,2),u=o[0],i=o[1];return Object(n.useEffect)((function(){0===c.length?setTimeout((function(){i(!0)}),4e3):i(!1)}),[c]),r.a.createElement("div",{className:"Home"},r.a.createElement("input",{value:s,onChange:l,placeholder:"Search for a movie"}),s.length>0?r.a.createElement("div",null,0===c.length?r.a.createElement("div",{className:"not-found"},u?r.a.createElement("p",null,"Nothing Found"):r.a.createElement("img",{src:a(38)})):r.a.createElement("div",{className:"movies-grid"},c.map((function(e,t){return r.a.createElement(j,{key:t,movie:e})})))):r.a.createElement(O,null))},w=a(1),k=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={id:n.props.match.params.title},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(g,null,(function(t){var a=(0,t.showDetails)(e.state.id);if(!a)return r.a.createElement("div",null,"The resource you requested for couldn't be retreived");var n=a.show,c=n.summary;return r.a.createElement("div",{className:"details-page"},r.a.createElement("img",{src:null===n.image?"":n.image.original,alt:"Not Found"}),r.a.createElement("div",{className:"container"},r.a.createElement("h3",{className:"name"},n.name),r.a.createElement("div",{className:"summary"},r.a.createElement("span",null,c.replace(/<\/?[^>]+>/gi,""))),r.a.createElement("div",{className:"language"},r.a.createElement("p",null,"Language:"),r.a.createElement("span",null,n.language)),r.a.createElement("div",{className:"release"},r.a.createElement("p",null,"Release Date:"),r.a.createElement("span",null,n.premiered)),r.a.createElement("div",{className:"runtime"},r.a.createElement("p",null,"Runtime:"),r.a.createElement("span",null,n.runtime," minutes")),r.a.createElement("div",{className:"network"},r.a.createElement("p",null,"Network:"),r.a.createElement("span",null,n.network?n.network.name:"null")),r.a.createElement("div",{className:"genres"},r.a.createElement("p",null,"Genres:"),n.genres.map((function(e,t){return r.a.createElement("span",{key:t},e)})))))}))}}]),a}(n.Component),x=(a(39),function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(w.c,null,r.a.createElement(w.a,{exact:!0,path:"/",component:N}),r.a.createElement(w.a,{exact:!0,path:"/details/:title",component:k})))}}]),a}(n.Component));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null,r.a.createElement(l.a,null,r.a.createElement(x,null)))),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.16e6abcf.chunk.js.map