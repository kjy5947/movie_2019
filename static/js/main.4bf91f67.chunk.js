(this.webpackJsonpmovie_2019=this.webpackJsonpmovie_2019||[]).push([[0],{32:function(e,t,a){e.exports=a(62)},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),s=a.n(o),c=a(7),l=a(1);var i=function(){return r.a.createElement("div",null,r.a.createElement(c.b,{to:"/"},"Home "),r.a.createElement(c.b,{to:"/about"},"About"))};var m=function(e){return console.log(e),r.a.createElement("div",{className:"about_container"},r.a.createElement("span",null,'"Freedom is the freedom to say that two plus two make four. If that is granted, all else follows."'),r.a.createElement("span",null,"George Orwell, 1984"))},u=a(10),v=a(11),p=a(13),d=a(12),E=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("span",null,e.state.title):null}}]),a}(r.a.Component),f=a(17),h=a.n(f),y=a(30),g=a(31),b=a.n(g);a(60);var _=function(e){var t=e.id,a=e.year,n=e.title,o=e.summary,s=e.poster,l=e.genres;return r.a.createElement(c.b,{to:{pathname:"/movie/".concat(t),state:{year:a,title:n,summary:o,poster:s,genres:l}}},r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:n,title:n}),r.a.createElement("div",{className:"movie_data"},r.a.createElement("h3",{className:"movie_title"},n),r.a.createElement("h5",{className:"movie_year"},a),r.a.createElement("ul",{className:"movie_genres"},l.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},o.slice(0,180)))))},N=(a(61),function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isloading:!0,movies:[]},e.getMovies=Object(y.a)(h.a.mark((function t(){var a,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({isloading:!1,movies:n});case 5:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isloading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader_text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(_,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));var j=function(){return r.a.createElement(c.a,null,r.a.createElement(i,null),r.a.createElement(l.a,{path:"/",exact:!0,component:N}),r.a.createElement(l.a,{path:"/about",component:m}),r.a.createElement(l.a,{path:"/movie/:id",component:E}))};s.a.render(r.a.createElement(j,null),document.getElementById("potato"))}},[[32,1,2]]]);
//# sourceMappingURL=main.4bf91f67.chunk.js.map