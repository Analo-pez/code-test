(this["webpackJsonpnew-project-02"]=this["webpackJsonpnew-project-02"]||[]).push([[0],[,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/ic_checked.e6da1b03.svg"},,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/mercadona.3ea849d2.jpg"},function(e,a,t){e.exports=t.p+"static/media/loading.c96906cf.jpg"},function(e,a,t){e.exports=t.p+"static/media/ic_hide.7d85da83.svg"},function(e,a,t){e.exports=t(46)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),o=t(19),r=t.n(o),l=(t(33),t(6)),i=t(1),s=(t(34),t(3)),m=t(20);t(35);function u(){var e=Object(m.a)(["\n    color: rgba(0,0,0,0.75);;\n    background-color: #4FD053;\n    outline-style: none;\n    padding: 20px;\n    font-size: 20px;\n    margin-top: 30px;\n    &:hover{\n        cursor: pointer;\n        color: white;\n        font-size: 30px;\n        border-color: transparent;\n}"]);return u=function(){return e},e}var d=t(21).a.button(u());var p=function(e){var a=Object(n.useState)(localStorage.getItem("postalcode")||""),t=Object(l.a)(a,2),o=t[0],r=t[1];return c.a.createElement("div",{className:"pageLanding"},c.a.createElement("header",{className:"headerLanding"},c.a.createElement("h1",{className:"headerLanding__title "},"LolaMarket")),c.a.createElement("main",{className:"sectionPrincipal"},c.a.createElement("section",{className:"sectionPrincipal__box"},c.a.createElement("h2",{className:"sectionPrincipal__box--title"}," Hacemos tu compra"),c.a.createElement("p",{className:"sectionPrincipal__box--subtitle"}," El nuevo servicio para hacer la compra en tus supermercados de confianza "),c.a.createElement("input",{className:"sectionPrincipal__box--input",placeholder:"Tu c\xf3digo postal",onChange:r,value:e.value,type:"number"}),c.a.createElement(s.b,{to:"/tienda",className:"box-button"},c.a.createElement(d,{className:"start-button",onClick:function(e){""!==o?localStorage.setItem("postalcode",o):(e.preventDefault(),alert("Introduce un c\xf3digo postal"))}},"Buscar tienda")))))},E=(t(42),t(25)),h=t.n(E);var g=function(){return c.a.createElement("div",{className:"pageShop"},c.a.createElement("header",{className:"headerLanding"},c.a.createElement("h1",{className:"headerLanding__title "},"LolaMarket")),c.a.createElement("h1",{className:"pageShop__title"},"Resultados de la b\xfasqueda"),c.a.createElement("img",{className:"pageShop__img",src:h.a,alt:"mercadona"}),c.a.createElement(s.b,{to:"/tienda/mercadona",className:"pageShop__button"},c.a.createElement(d,{className:"start-button"},"Empezar compra")))},f=function(e){return c.a.createElement("div",{className:"navBar__header"},c.a.createElement("img",{className:"navBar__header--img",src:e.logoMarket,alt:"logo supermercado",title:e.name}),c.a.createElement(s.b,{to:"/tienda/mercadona"},c.a.createElement("div",{className:"navBar__header--box"},c.a.createElement("h3",{className:"navBar__header--box--title"},e.name),c.a.createElement("p",{className:"navBar__header--box--text"},"Comprando en ",e.postalcode))),c.a.createElement(s.b,{to:"/"},c.a.createElement("p",{className:"navBar__header--change",onClick:localStorage.removeItem("postalcode")},"cambiar")))},b="https://api.comprea.com/v7/";var _=t(26),v=t.n(_),N=(t(43),function(){return c.a.createElement("div",{className:"loader"},c.a.createElement("p",{className:"loader__text"},"Loading..."),c.a.createElement("img",{src:v.a,alt:"Loader",className:"loader__img"}))}),j=(t(44),t(12)),x=t.n(j),k=function(e){var a=Object(n.useState)(!1),t=Object(l.a)(a,2),o=t[0],r=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.b,{to:"/tienda/mercadona/".concat(e.categoryTitle,"/").concat(e.productTitle,"/").concat(e.productId)},c.a.createElement("li",{className:"accordion-content",onClick:function(){return r(!o)}},c.a.createElement("p",{className:"title"},e.productTitle),c.a.createElement("img",{className:"accordion-content--icon\n            ".concat(o?"":"hidden"),src:x.a,alt:"checked"}))))},y=(t(45),t(27)),O=t.n(y),S=function(e){var a=Object(n.useState)(!1),t=Object(l.a)(a,2),o=t[0],r=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"collapsible",onClick:function(){return r(!o)}},c.a.createElement("img",{className:"collapsible__icon",src:e.iconCategory,alt:e.categoryTitle}),c.a.createElement(s.b,{to:"/tienda/mercadona/".concat(e.categoryTitle),className:"collapsible__box"},c.a.createElement("h2",{className:"collapsible__box--title"},e.categoryTitle),c.a.createElement("img",{className:"collapsible__box--icon  ".concat(o?"":"rotate"),src:O.a,alt:"collapsible"}))),c.a.createElement("div",{id:"upperElement",className:"accordion-item ".concat(o?"":"collapsed")},c.a.createElement("ul",{className:"container"},c.a.createElement("li",{className:"accordion-content"},c.a.createElement("a",{className:"container__title",href:"/tienda/mercadona/".concat(e.categoryTitle)}," Ver toda la secci\xf3n"),c.a.createElement("img",{className:"accordion-content--icon \n                            ".concat(e.isSelected?"":"hidden"),src:x.a,alt:"checked"})),e.content)))},T=function(e){var a=e.products.map((function(e){return c.a.createElement(k,{key:e.uuid,productId:e.uuid,productTitle:e.name})})),t=e.categories.map((function(e){return c.a.createElement("li",{key:e.id},c.a.createElement(S,{iconCategory:e.icon,categoryTitle:e.name,content:a},"   "))}));return c.a.createElement("ul",null,t)};var B=function(e){var a=Object(n.useState)(!1),t=Object(l.a)(a,2),o=t[0],r=t[1],s=Object(n.useState)([]),m=Object(l.a)(s,2),u=m[0],d=m[1],E=Object(n.useState)([]),h=Object(l.a)(E,2),_=h[0],v=h[1],j=Object(n.useState)([]),x=Object(l.a)(j,2),k=x[0],y=x[1];return Object(n.useEffect)((function(){r(!0),fetch("".concat(b,"user/session")).then((function(e){return e.json()})).then((function(e){var a=e.token;return fetch("".concat(b,"user/postalcode?token=").concat(a,"&postalcode=").concat("28010"))})).then((function(e){return e.json()})).then((function(e){d(e.services[1].markets[2]),r(!1)})),fetch("".concat(b,"user/session")).then((function(e){return e.json()})).then((function(e){var a=e.token;return fetch("".concat(b,"company/categories?token=").concat(a,"&postalcode=").concat("28010","&company_id=").concat("1"))})).then((function(e){return e.json()})).then((function(e){v(e.categories),r(!1)})),fetch("".concat(b,"user/session")).then((function(e){return e.json()})).then((function(e){var a=e.token;return fetch("".concat(b,"company/items?token=").concat(a,"&postalcode=").concat("28010","&company_id=").concat("1","&category_id=").concat("99658"))})).then((function(e){return e.json()})).then((function(e){y(e.items),r(!1)}))}),[]),o?c.a.createElement(N,null):c.a.createElement(c.a.Fragment,null,c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:p}),c.a.createElement(i.a,{exact:!0,path:"/tienda",component:g}),c.a.createElement(i.a,{path:"/tienda/mercadona"},c.a.createElement("nav",{className:"navBar"},c.a.createElement(f,{logoMarket:u.picture,name:u.name,postalcode:"Madrid"}),c.a.createElement(T,{categories:_,products:k})))))};r.a.render(c.a.createElement(s.a,null,c.a.createElement(B,null)),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.53fe2a21.chunk.js.map