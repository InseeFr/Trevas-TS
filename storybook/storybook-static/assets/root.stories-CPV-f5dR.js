import{U as E}from"./ui-KSR5GjLV.js";import"./index-RYns6xqu.js";import"./iframe-B1zIIC6Q.js";import"../sb-preview/runtime.js";const h={title:"Interpretor",component:E},r={args:{inputScript:'"default"'}},e={args:{inputScript:'"Welcome " || NAME || ", you are " || (if cast(AGE, integer) >= 18 then "major" else "minor") || "."',inputBindings:{NAME:"Mauro",AGE:26}}},t={args:{inputScript:"current_date()"}},s={args:{inputScript:"(10 + 2) * 123456"}};var a,o,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    inputScript: '"default"'
  }
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var i,c,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    inputScript: '"Welcome " || NAME || ", you are " || (if cast(AGE, integer) >= 18 then "major" else "minor") || "."',
    inputBindings: {
      "NAME": "Mauro",
      "AGE": 26
    }
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,m,d;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    inputScript: "current_date()"
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var g,l,S;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    inputScript: "(10 + 2) * 123456"
  }
}`,...(S=(l=s.parameters)==null?void 0:l.docs)==null?void 0:S.source}}};const B=["Default","Bindings","CurrentDate","Parenthesis"];export{e as Bindings,t as CurrentDate,r as Default,s as Parenthesis,B as __namedExportsOrder,h as default};
