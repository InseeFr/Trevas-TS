import{U as _}from"./ui-KSR5GjLV.js";import"./index-RYns6xqu.js";import"./iframe-B1zIIC6Q.js";import"../sb-preview/runtime.js";const N={title:"Interpretor/Comparison/Dates",component:_},a={args:{inputScript:'cast("2020-01-01", date, "YYYY-MM-DD") = cast(current_date(), date, "YYYY-MM-DD")'}},t={args:{inputScript:'cast("2020-01-01", date, "YYYY-MM-DD") < cast("2020-01-02", date, "YYYY-MM-DD")'}},r={args:{inputScript:'cast("2020-01-01", date, "YYYY-MM-DD") <= cast("2020-01-02", date, "YYYY-MM-DD")'}},s={args:{inputScript:'cast("2020-01-01", date, "YYYY-MM-DD") > cast("2020-01-02", date, "YYYY-MM-DD")'}},e={args:{inputScript:'cast("2020-01-01", date, "YYYY-MM-DD") >= cast("2020-01-02", date, "YYYY-MM-DD")'}},Y={args:{inputScript:'cast("2020-01-01", date, "YYYY-MM-DD") <> cast("2020-01-01", date, "YYYY-MM-DD")'}};var c,o,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    inputScript: 'cast("2020-01-01", date, "YYYY-MM-DD") = cast(current_date(), date, "YYYY-MM-DD")'
  }
}`,...(p=(o=a.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};var M,D,d;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    inputScript: 'cast("2020-01-01", date, "YYYY-MM-DD") < cast("2020-01-02", date, "YYYY-MM-DD")'
  }
}`,...(d=(D=t.parameters)==null?void 0:D.docs)==null?void 0:d.source}}};var i,n,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    inputScript: 'cast("2020-01-01", date, "YYYY-MM-DD") <= cast("2020-01-02", date, "YYYY-MM-DD")'
  }
}`,...(u=(n=r.parameters)==null?void 0:n.docs)==null?void 0:u.source}}};var m,g,S;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    inputScript: 'cast("2020-01-01", date, "YYYY-MM-DD") > cast("2020-01-02", date, "YYYY-MM-DD")'
  }
}`,...(S=(g=s.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var l,T,E;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    inputScript: 'cast("2020-01-01", date, "YYYY-MM-DD") >= cast("2020-01-02", date, "YYYY-MM-DD")'
  }
}`,...(E=(T=e.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var h,q,O;Y.parameters={...Y.parameters,docs:{...(h=Y.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    inputScript: 'cast("2020-01-01", date, "YYYY-MM-DD") <> cast("2020-01-01", date, "YYYY-MM-DD")'
  }
}`,...(O=(q=Y.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};const U=["EqualTo","LessThan","LessThanOrEqualTo","MoreThan","MoreThanOrEqualTo","NotEqualTo"];export{a as EqualTo,t as LessThan,r as LessThanOrEqualTo,s as MoreThan,e as MoreThanOrEqualTo,Y as NotEqualTo,U as __namedExportsOrder,N as default};
