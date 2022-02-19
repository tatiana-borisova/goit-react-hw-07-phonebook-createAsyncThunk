(this["webpackJsonpgoit-react-hw-07-phonebook-create_async_thunk"]=this["webpackJsonpgoit-react-hw-07-phonebook-create_async_thunk"]||[]).push([[0],{12:function(t,e,n){t.exports={contact:"Contact_contact__1m2re",name:"Contact_name__2ZcKm",number:"Contact_number__2MvnN",button:"Contact_button__1wUL0"}},20:function(t,e,n){t.exports={filter:"Filter_filter__1E5tH",label:"Filter_label__3DcZT",input:"Filter_input__2DoVp"}},23:function(t,e,n){t.exports={title:"Section_title__2S6oE",section:"Section_section__Ap5Zy"}},24:function(t,e,n){t.exports={contacts:"ContactList_contacts__1Ny0J",contact:"ContactList_contact__3ZIyH"}},69:function(t,e,n){},8:function(t,e,n){t.exports={form:"Form_form__2TM1N",label:"Form_label__15SAE",input:"Form_input__2ESfd",button:"Form_button__243jh"}},80:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(16),o=n.n(r),u=n(4),s=n(18),i=n(6),l=n(35),b=n.n(l),j=n(9),d=n(2),f=n(3),p=Object(i.b)("contacts/changeFilter"),O=n(7),m=n.n(O),h=n(19),_=n(11),x=n.n(_);x.a.defaults.baseURL="https://61ba064d48df2f0017e5a8a4.mockapi.io/";var v,y,C,g=Object(i.c)("contacts/fetchContacts",function(){var t=Object(h.a)(m.a.mark((function t(e,n){var c,a,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,x.a.get("/contacts");case 4:return a=t.sent,r=a.data,t.abrupt("return",r);case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",c(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),N=Object(i.c)("contacts/onSubmitHandler",function(){var t=Object(h.a)(m.a.mark((function t(e,n){var c,a,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,x.a.post("/contacts",e);case 4:return a=t.sent,r=a.data,t.abrupt("return",r);case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",c(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),w=Object(i.c)("contacts/deleteContact",function(){var t=Object(h.a)(m.a.mark((function t(e,n){var c;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,x.a.delete("/contacts/".concat(e));case 4:return t.abrupt("return",e);case 7:return t.prev=7,t.t0=t.catch(1),t.abrupt("return",c(t.t0));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}()),k=Object(i.d)([],(v={},Object(d.a)(v,g.fulfilled,(function(t,e){return e.payload})),Object(d.a)(v,N.fulfilled,(function(t,e){return[].concat(Object(s.a)(t),[e.payload])})),Object(d.a)(v,w.fulfilled,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),v)),F=Object(i.d)("",Object(d.a)({},p,(function(t,e){return e.payload}))),L=Object(i.d)(!1,(y={},Object(d.a)(y,g.pending,(function(){return!0})),Object(d.a)(y,g.fulfilled,(function(){return!1})),Object(d.a)(y,g.rejected,(function(){return!1})),Object(d.a)(y,N.pending,(function(){return!0})),Object(d.a)(y,N.fulfilled,(function(){return!1})),Object(d.a)(y,N.rejected,(function(){return!1})),Object(d.a)(y,w.pending,(function(){return!0})),Object(d.a)(y,w.fulfilled,(function(){return!1})),Object(d.a)(y,w.rejected,(function(){return!1})),y)),S=Object(i.d)(null,(C={},Object(d.a)(C,g.rejected,(function(t){return console.log(t)})),Object(d.a)(C,N.rejected,(function(t){return console.log(t)})),Object(d.a)(C,w.rejected,(function(t){return console.log(t)})),C)),A=Object(f.b)({items:k,filter:F,loading:L,error:S}),E=[].concat(Object(s.a)(Object(i.e)({serializableCheck:{ignoredActions:[j.a,j.f,j.b,j.c,j.d,j.e]}})),[b.a]),Z=Object(i.a)({reducer:{contacts:A},middleware:E,devTools:!1}),T=(n(68),n(69),n(37)),z=(n(70),function(t){return t.contacts.loading}),D=function(t){return t.contacts.filter},J=function(t){return t.contacts.items},M=function(t){var e=J(t),n=D(t).toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)||t.number.includes(n)}))},V=n(23),H=n.n(V),P=n(1);function W(t){var e=t.title,n=t.children;return Object(P.jsxs)("section",{className:H.a.section,children:[e&&Object(P.jsx)("h2",{className:H.a.title,children:e}),n]})}W.defaultProps={title:""};var q=n(25),B=n(36),I=n.n(B),U=n(8),K=n.n(U),R=function(){var t=Object(c.useState)(""),e=Object(q.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(""),o=Object(q.a)(r,2),s=o[0],i=o[1],l=Object(u.c)(J),b=Object(u.b)(),j=function(t){var e=t.currentTarget,n=e.name,c=e.value;"name"===n&&a(c),"number"===n&&i(c)};return Object(P.jsxs)("form",{className:K.a.form,onSubmit:function(t){t.preventDefault();var e=l.find((function(t){return t.name.toLowerCase()===n.toLowerCase()})),c=l.find((function(t){return t.number.toLowerCase()===s.toLowerCase()}));e||c?alert("".concat(e?n:""," ").concat(c?s:""," is already in contacts")):b(N({id:I.a.generate(),name:n,number:s})),a(""),i("")},children:[Object(P.jsxs)("label",{className:K.a.label,children:["Name",Object(P.jsx)("input",{className:K.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"The name can only consist of letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc.",required:!0,placeholder:"Enter name",value:n,onChange:j})]}),Object(P.jsxs)("label",{className:K.a.label,children:["Number",Object(P.jsx)("input",{className:K.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"Enter number",value:s,onChange:j})]}),Object(P.jsx)("button",{type:"submit",className:K.a.button,children:"Add contact"})]})},$=n(20),G=n.n($),Q=function(){var t=Object(u.c)(D),e=Object(u.b)();return Object(P.jsx)("p",{className:G.a.filter,children:Object(P.jsxs)("label",{className:G.a.label,children:["Find contacts",Object(P.jsx)("input",{className:G.a.input,type:"text",placeholder:"Enter name or number",value:t,onChange:function(t){return e(p(t.currentTarget.value))}})]})})},X=n(12),Y=n.n(X),tt=function(t){var e=t.data,n=e.name,c=e.number,a=e.id,r=Object(u.b)();return Object(P.jsxs)("div",{className:Y.a.contact,children:[Object(P.jsxs)("span",{className:Y.a.name,children:[n,":"]}),Object(P.jsx)("a",{className:Y.a.number,href:"tel:".concat(c),children:c}),Object(P.jsx)("button",{className:Y.a.button,type:"button",onClick:function(){return function(t){return r(w(t))}(a)},children:"Delete"})]})},et=n(24),nt=n.n(et),ct=function(){var t=Object(u.c)(M);return Object(P.jsx)("div",{className:nt.a.contacts,children:Object(P.jsx)("ul",{children:t.map((function(t){return Object(P.jsx)("li",{className:nt.a.contact,children:Object(P.jsx)(tt,{data:t})},t.id)}))})})},at=function(){var t=Object(u.b)(),e=Object(u.c)(z);return Object(c.useEffect)((function(){return t(g())}),[t]),Object(P.jsxs)("div",{children:[Object(P.jsx)(W,{title:"Phonebook",children:Object(P.jsx)(R,{})}),Object(P.jsxs)(W,{title:"Contacts",children:[Object(P.jsx)(Q,{}),Object(P.jsx)(ct,{}),e&&Object(P.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:Object(P.jsx)(T.a,{color:"#7dcdff"})})]})]})};o.a.render(Object(P.jsx)(a.a.StrictMode,{children:Object(P.jsx)(u.a,{store:Z,children:Object(P.jsx)(at,{})})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.22925159.chunk.js.map