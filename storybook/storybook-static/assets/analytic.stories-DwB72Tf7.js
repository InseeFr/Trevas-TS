import{U as p}from"./ui-KSR5GjLV.js";import"./index-RYns6xqu.js";import"./iframe-B1zIIC6Q.js";import"../sb-preview/runtime.js";const d={title:"Interpretor/Dataset/Analytic",component:p},t={args:{inputScript:"first_value(DS_1 over())",inputBindings:{DS_1:{dataStructure:[{name:"col1",type:"INTEGER",role:"MEASURE"}],dataPoints:[[1],[2],[3]]}}}},r={args:{inputScript:"last_value(DS_1 over())",inputBindings:{DS_1:{dataStructure:[{name:"col1",type:"INTEGER",role:"MEASURE"}],dataPoints:[[1],[2],[3]]}}}};var n,a,e;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    inputScript: "first_value(DS_1 over())",
    inputBindings: {
      DS_1: {
        dataStructure: [{
          name: "col1",
          type: "INTEGER",
          role: "MEASURE"
        }],
        dataPoints: [[1], [2], [3]]
      }
    }
  }
}`,...(e=(a=t.parameters)==null?void 0:a.docs)==null?void 0:e.source}}};var s,o,i;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    inputScript: "last_value(DS_1 over())",
    inputBindings: {
      DS_1: {
        dataStructure: [{
          name: "col1",
          type: "INTEGER",
          role: "MEASURE"
        }],
        dataPoints: [[1], [2], [3]]
      }
    }
  }
}`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const m=["FirstValue","LastValue"];export{t as FirstValue,r as LastValue,m as __namedExportsOrder,d as default};
