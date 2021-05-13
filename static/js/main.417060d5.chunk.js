(this.webpackJsonpbuild=this.webpackJsonpbuild||[]).push([[0],{19:function(e,c,t){},20:function(e,c,t){},21:function(e,c,t){},23:function(e,c,t){},24:function(e,c,t){},43:function(e,c,t){},44:function(e,c,t){},46:function(e,c,t){"use strict";t.r(c);var i=t(2),s=t(12),n=t.n(s),l=(t(19),t(20),t(21),t(0)),r=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("nav",{className:"navbar",children:Object(l.jsx)("div",{className:"container-fluid justify-content-center",children:Object(l.jsx)("h1",{className:"navbar-brand",id:"name",children:"Denis Salvino"})})})})},j=(t(23),function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"container-fluid mb-5 heroContainer",children:Object(l.jsx)("div",{id:"hero",className:"py-5 text-center block block-1"})})})}),a=(t(24),function(){return Object(l.jsxs)("div",{className:"col-md-4",id:"aside",children:[Object(l.jsxs)("div",{className:"text-center",children:[Object(l.jsxs)("p",{children:["Hello! My name is  ",Object(l.jsx)("strong",{children:"Denis Salvino"})," and I have just successfully become a Full-Stack Developer."]}),Object(l.jsxs)("p",{children:["I recently completed ",Object(l.jsx)("strong",{children:"Rice University's"})," Full-Stack coding boot camp. "]}),Object(l.jsx)("p",{children:"Along with this portfolio page created out of React.js, I have also created many different applications throughout the program that utilizes my Full-Stack and have published them on Github."})]}),Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col",children:[Object(l.jsx)("p",{children:"The Browser"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"HTML"}),Object(l.jsx)("li",{children:"CSS"}),Object(l.jsx)("li",{children:"JavaScript"}),Object(l.jsx)("li",{children:"JQuery"}),Object(l.jsx)("li",{children:"Bootstrap"})]})]}),Object(l.jsxs)("div",{className:"col",children:[Object(l.jsx)("p",{children:"Dev Tools"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"Heroku"}),Object(l.jsx)("li",{children:"Git"}),Object(l.jsx)("li",{children:"Github"})]})]}),Object(l.jsxs)("div",{className:"col",children:[Object(l.jsx)("p",{children:"API Interaction"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"APIs"}),Object(l.jsx)("li",{children:"JSON"}),Object(l.jsx)("li",{children:"AJAX"}),Object(l.jsx)("li",{children:"Axios"})]})]})]})}),Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsxs)("div",{className:"col",children:[Object(l.jsx)("p",{children:"Development"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"React.js"}),Object(l.jsx)("li",{children:"PWAs"})]})]}),Object(l.jsxs)("div",{className:"col",children:[Object(l.jsx)("p",{children:"Databases"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"MySQL"}),Object(l.jsx)("li",{children:"MongoDB"})]})]}),Object(l.jsxs)("div",{className:"col",children:[Object(l.jsx)("p",{children:"Comp Sci"}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:"Algorithms"}),Object(l.jsx)("li",{children:"Data Structures"})]})]})]})}),Object(l.jsxs)("div",{className:"text-center container col",children:[Object(l.jsx)("p",{children:"Server Side"}),Object(l.jsxs)("ul",{style:{listStyleType:"none",padding:0},children:[Object(l.jsx)("li",{children:"Templating Engines"}),Object(l.jsx)("li",{children:"Sessions"}),Object(l.jsx)("li",{children:"Tests"}),Object(l.jsx)("li",{children:"Node.js"}),Object(l.jsx)("li",{children:"Express.js"}),Object(l.jsx)("li",{children:"RESTful APIs"}),Object(l.jsx)("li",{children:"MVC"}),Object(l.jsx)("li",{children:"Authentication"}),Object(l.jsx)("li",{children:"ORM (Sequelize/Mongoose)"})]})]}),Object(l.jsxs)("div",{className:"container contact-container",children:[Object(l.jsx)("p",{children:"contact me"}),Object(l.jsxs)("div",{id:"contactInfo",children:[Object(l.jsx)("a",{href:"mailto:denis.salvino23@gmail.com",className:"linkStyle asideLink",children:"Email"}),Object(l.jsx)("a",{href:"https://github.com/dsalvino",className:"linkStyle asideLink",children:"Github"}),Object(l.jsx)("a",{href:"https://https://www.linkedin.com/in/denis-salvino23/",className:"linkStyle asideLink",children:"LinkedIn"}),Object(l.jsx)("a",{href:"https://dsalvino.github.io/example_work_portfolio/",className:"linkStyle asideLink",children:"Portfolio"})]}),Object(l.jsx)("a",{href:"https://github.com/dsalvino",id:"portfolio",className:"linkStyle asideLink",children:"Resume"})]})]})}),d=t(14),o=t(13),h=t.n(o),b=function(){return h.a.get("https://api.github.com/users/dsalvino/repos")};t(43);function x(e){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"col",children:Object(l.jsx)("div",{className:"card h-100",children:Object(l.jsxs)("div",{className:"card-body text-center",children:[Object(l.jsx)("h5",{className:"card-title",children:e.name}),Object(l.jsx)("h6",{className:"card-subtitle mb-2 text-muted",children:e.full_name}),Object(l.jsx)("p",{className:"card-text",children:e.description}),Object(l.jsx)("a",{href:e.html_url,className:"card-link linkStyle text-decoration-none",children:"GitHub Link"})]})})})})}var O=function(){var e=Object(i.useState)([]),c=Object(d.a)(e,2),t=c[0],s=c[1];Object(i.useEffect)((function(){n()}),[]);var n=function(){b().then((function(e){return s(e.data)})).catch((function(e){return console.log(e)}))};return Object(l.jsx)("div",{className:"col-md-8",children:t.length?Object(l.jsx)("div",{className:"row row-cols-1 row-cols-md-3 g-4 mb-5",children:t.sort((function(e,c){var t=e.created_at,i=c.created_at;return t<i?-1:t>i?1:0})).reverse().map((function(e){return Object(l.jsx)(x,{name:e.name,full_name:e.full_name,description:e.description,html_url:e.html_url},e.id)}))}):Object(l.jsx)("h3",{children:"No Results to Display"})})},u=function(){return Object(l.jsx)("div",{className:"container-fluid",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)(a,{}),Object(l.jsx)(O,{})]})})};t(44);var m=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(r,{}),Object(l.jsx)(j,{}),Object(l.jsx)(u,{})]})},v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,47)).then((function(c){var t=c.getCLS,i=c.getFID,s=c.getFCP,n=c.getLCP,l=c.getTTFB;t(e),i(e),s(e),n(e),l(e)}))};t(45);n.a.render(Object(l.jsx)(m,{}),document.getElementById("root")),v()}},[[46,1,2]]]);
//# sourceMappingURL=main.417060d5.chunk.js.map