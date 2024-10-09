import{U as O}from"./ui-KSR5GjLV.js";import"./index-RYns6xqu.js";import"./iframe-B1zIIC6Q.js";import"../sb-preview/runtime.js";const H={title:"Interpretor/Dataset/Aggregate",component:O},n={dataStructure:[{name:"Id_1",type:"STRING",role:"IDENTIFIER"},{name:"Id_2",type:"STRING",role:"IDENTIFIER"},{name:"Me_1",type:"INTEGER",role:"MEASURE"},{name:"Id_3",type:"STRING",role:"IDENTIFIER"}],dataPoints:[["2011","A",3,"XX"],["2011","A",5,"YY"],["2011","B",7,"YY"],["2012","A",2,"XX"],["2012","B",4,"YY"]]},r={args:{inputScript:"avg(DS_1 group by Id_1)",inputBindings:{DS_1:n}}},a={args:{inputScript:"count(DS_1 group by Id_1)",inputBindings:{DS_1:{dataStructure:[{name:"Id_1",type:"STRING",role:"IDENTIFIER"},{name:"Id_2",type:"STRING",role:"IDENTIFIER"},{name:"Id_3",type:"STRING",role:"IDENTIFIER"},{name:"Me_2",type:"STRING",role:"MEASURE"}],dataPoints:[["2011","A","XX","iii"],["2011","A","YY","jjj"],["2011","B","YY","iii"],["2012","A","XX","kkk"],["2012","B","YY","iii"]]}}}},e={args:{inputScript:"max(DS_1 group by Id_1)",inputBindings:{DS_1:n}}},t={args:{inputScript:"median(DS_1 group by Id_1)",inputBindings:{DS_1:n}}},i={args:{inputScript:"min(DS_1 group by Id_1)",inputBindings:{DS_1:n}}},s={args:{inputScript:"stddev_pop(DS_1 group by Id_1)",inputBindings:{DS_1:n}}},p={args:{inputScript:"var_pop(DS_1 group by Id_1)",inputBindings:{DS_1:n}}},o={args:{inputScript:"stddev_samp(DS_1 group by Id_1)",inputBindings:{DS_1:n}}},u={args:{inputScript:"var_samp(DS_1 group by Id_1)",inputBindings:{DS_1:n}}},d={args:{inputScript:"sum(DS_1 group by Id_1)",inputBindings:{DS_1:n}}};var c,S,g;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    inputScript: "avg(DS_1 group by Id_1)",
    inputBindings: {
      DS_1
    }
  }
}`,...(g=(S=r.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var m,_,I;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    inputScript: "count(DS_1 group by Id_1)",
    inputBindings: {
      DS_1: {
        dataStructure: [{
          name: "Id_1",
          type: "STRING",
          role: "IDENTIFIER"
        }, {
          name: "Id_2",
          type: "STRING",
          role: "IDENTIFIER"
        }, {
          name: "Id_3",
          type: "STRING",
          role: "IDENTIFIER"
        }, {
          name: "Me_2",
          type: "STRING",
          role: "MEASURE"
        }],
        dataPoints: [["2011", "A", "XX", "iii"], ["2011", "A", "YY", "jjj"], ["2011", "B", "YY", "iii"], ["2012", "A", "XX", "kkk"], ["2012", "B", "YY", "iii"]]
      }
    }
  }
}`,...(I=(_=a.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var D,l,y;e.parameters={...e.parameters,docs:{...(D=e.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    inputScript: "max(DS_1 group by Id_1)",
    inputBindings: {
      DS_1
    }
  }
}`,...(y=(l=e.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};var E,B,R;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    inputScript: "median(DS_1 group by Id_1)",
    inputBindings: {
      DS_1
    }
  }
}`,...(R=(B=t.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var N,T,b;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    inputScript: "min(DS_1 group by Id_1)",
    inputBindings: {
      DS_1
    }
  }
}`,...(b=(T=i.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var Y,v,A;s.parameters={...s.parameters,docs:{...(Y=s.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    inputScript: "stddev_pop(DS_1 group by Id_1)",
    inputBindings: {
      DS_1
    }
  }
}`,...(A=(v=s.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var G,M,X;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    inputScript: "var_pop(DS_1 group by Id_1)",
    inputBindings: {
      DS_1
    }
  }
}`,...(X=(M=p.parameters)==null?void 0:M.docs)==null?void 0:X.source}}};var F,P,j;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    inputScript: "stddev_samp(DS_1 group by Id_1)",
    inputBindings: {
      DS_1
    }
  }
}`,...(j=(P=o.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var k,x,U;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    inputScript: "var_samp(DS_1 group by Id_1)",
    inputBindings: {
      DS_1
    }
  }
}`,...(U=(x=u.parameters)==null?void 0:x.docs)==null?void 0:U.source}}};var V,f,C;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    inputScript: "sum(DS_1 group by Id_1)",
    inputBindings: {
      DS_1
    }
  }
}`,...(C=(f=d.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const J=["Average","Count","Max","Median","Min","PopulationStandardDeviation","PopulationVariance","SampleStandardDeviation","SampleVariance","Sum"];export{r as Average,a as Count,e as Max,t as Median,i as Min,s as PopulationStandardDeviation,p as PopulationVariance,o as SampleStandardDeviation,u as SampleVariance,d as Sum,J as __namedExportsOrder,H as default};
