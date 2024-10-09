import{U as g}from"./ui-KSR5GjLV.js";import"./index-RYns6xqu.js";import"./iframe-B1zIIC6Q.js";import"../sb-preview/runtime.js";const B={title:"Interpretor/Dataset/Arithmetic",component:g},n={ds1:{dataStructure:[{name:"Id_1",type:"INTEGER",role:"IDENTIFIER"},{name:"Id_2",type:"STRING",role:"IDENTIFIER"},{name:"Me_1",type:"INTEGER",role:"MEASURE"},{name:"Me_2",type:"NUMBER",role:"MEASURE"}],dataPoints:[[10,"A",5,5],[10,"B",2,10.5],[11,"A",3,12.2],[11,"B",4,20.3]]},ds2:{dataStructure:[{name:"Id_1",type:"INTEGER",role:"IDENTIFIER"},{name:"Id_2",type:"STRING",role:"IDENTIFIER"},{name:"Me_1",type:"INTEGER",role:"MEASURE"},{name:"Me_2",type:"NUMBER",role:"MEASURE"}],dataPoints:[[10,"A",10,3],[10,"C",11,6.2],[11,"B",6,7]]}},r={args:{inputScript:"ds1 / ds2",inputBindings:n}},e={args:{inputScript:"ds1 - ds2",inputBindings:n}},s={args:{inputScript:"ds1 * ds2",inputBindings:n}},t={args:{inputScript:"ds1 + ds2 - 2",inputBindings:n}};var a,o,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    inputScript: "ds1 / ds2",
    inputBindings
  }
}`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var p,d,c;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    inputScript: "ds1 - ds2",
    inputBindings
  }
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,m,E;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    inputScript: "ds1 * ds2",
    inputBindings
  }
}`,...(E=(m=s.parameters)==null?void 0:m.docs)==null?void 0:E.source}}};var I,S,l;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    inputScript: "ds1 + ds2 - 2",
    inputBindings
  }
}`,...(l=(S=t.parameters)==null?void 0:S.docs)==null?void 0:l.source}}};const T=["Div","Minus","Mul","Plus"];export{r as Div,e as Minus,s as Mul,t as Plus,T as __namedExportsOrder,B as default};
