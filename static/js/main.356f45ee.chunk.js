(this["webpackJsonpweather-cards"]=this["webpackJsonpweather-cards"]||[]).push([[0],{50:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(11),c=n.n(a),i=n(34),o=n(25),s=n(2);var u=function(){return Object(s.jsx)("header",{children:Object(s.jsx)("h1",{children:"weather cards"})})},d=n(65),l=n(67),h=n(32),j=n.n(h),m=Object(d.a)({iconButton:{backgroundColor:"#FFFFFF",borderRadius:"0 6px 6px 0"}});var b=function(e){var t=Object(r.useState)(""),n=Object(o.a)(t,2),a=n[0],c=n[1],i=m();return Object(s.jsxs)("div",{className:"inputArea",children:[Object(s.jsx)("h1",{children:e.label}),Object(s.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e.handleSearch(a),c("")},className:"search-box",children:[Object(s.jsx)("input",{className:"search-bar",type:"text",id:"location",name:"location",value:a,onChange:function(e){var t=e.target.value;c(t)}}),Object(s.jsx)(l.a,{className:i.iconButton,type:"submit","aria-label":"search",children:Object(s.jsx)(j.a,{})})]})]})},p=n(33),f=n.n(p),x=[{group:2,condition:"thunderstorm",url:"assets/thunderstorm.gif"},{group:3,condition:"rain",url:"assets/rain.gif"},{group:5,condition:"rain",url:"assets/rain.gif"},{group:6,condition:"snow",url:"assets/snow.gif"},{group:7,condition:"atmosphere",url:"assets/atmosphere.gif"},{group:800,condition:"clear",url:"assets/clear.gif"},{group:8,condition:"clouds",url:"assets/clouds.gif"}];var O=function(e){var t=function(e){return x.filter((function(t){return t.group===e}))[0].url}(function(e){return 800===e?e:Number(e.toString()[0])}(e.weatherid));return Object(s.jsxs)("div",{className:"card",style:{backgroundImage:"url(".concat(t,")")},children:[Object(s.jsx)("div",{className:"card-delete",children:Object(s.jsx)(l.a,{onClick:function(){return e.handleDelete(e.id)},children:Object(s.jsx)(f.a,{})})}),Object(s.jsx)("div",{className:"card-location",children:e.location}),Object(s.jsx)("div",{className:"card-description",children:e.description}),Object(s.jsxs)("div",{className:"card-temperature",children:[Math.floor(e.temp),"\xb0 C"]}),Object(s.jsxs)("div",{className:"card-min-max",children:["Min: ",Math.floor(e.temp_min)," Max: ",Math.floor(e.temp_max)]})]})},g="12a629be1cabbbf31a09826b615fd0b3",v="https://api.openweathermap.org/data/2.5/";var w=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1];function c(e){a((function(t){return t.filter((function(t){return t.id!==e}))}))}return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(u,{}),Object(s.jsx)(b,{label:"enter your location search...",handleSearch:function(e){fetch("".concat(v,"weather?q=").concat(e,"&units=metric&APPID=").concat(g)).then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong")})).then((function(e){a((function(t){return[].concat(Object(i.a)(t),[e])}))})).catch((function(e){alert(e)}))}}),Object(s.jsx)("div",{className:"cards-container",children:n.map((function(e){return Object(s.jsx)(O,{id:e.id,description:e.weather[0].main,weatherid:e.weather[0].id,location:e.name,temp:e.main.temp,temp_min:e.main.temp_min,temp_max:e.main.temp_max,handleDelete:c},e.id)}))})]})};c.a.render(Object(s.jsx)(w,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.356f45ee.chunk.js.map