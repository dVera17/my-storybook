import{j as S}from"./jsx-runtime-D_zvdyIk.js";const g=({label:s,size:x,allCaps:o,color:L,fontColor:z})=>S.jsx("span",{className:`${x} ${L}`,style:{color:z},children:o&&o===!0?s.toUpperCase():s});g.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Text to display"},size:{required:!1,tsType:{name:"union",raw:`'normal' | "h1" | "h2" | "h3"`,elements:[{name:"literal",value:"'normal'"},{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'}]},description:"Label Size"},allCaps:{required:!1,tsType:{name:"boolean"},description:"All Caps"},color:{required:!1,tsType:{name:"union",raw:"'text-primary' | 'text-secondary' | 'text-tertiary'",elements:[{name:"literal",value:"'text-primary'"},{name:"literal",value:"'text-secondary'"},{name:"literal",value:"'text-tertiary'"}]},description:"Label Color"},fontColor:{required:!1,tsType:{name:"string"},description:"fontColor"}}};const v={title:"UI/labels/MyLabel",component:g,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"},fontColor:{control:"color"}}},e={args:{label:"Basic Label",size:"normal",allCaps:!1}},a={args:{label:"All Caps Label",size:"normal",allCaps:!0}},r={args:{label:"Secondary Label",size:"normal",allCaps:!1,color:"text-secondary"}},l={args:{label:"Custom Color Label",size:"normal",allCaps:!1,fontColor:"#5517ac"}};var n,t,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: "Basic Label",
    size: "normal",
    allCaps: false
  }
}`,...(c=(t=e.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var i,m,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "All Caps Label",
    size: "normal",
    allCaps: true
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,u,C;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: "Secondary Label",
    size: "normal",
    allCaps: false,
    color: "text-secondary"
  }
}`,...(C=(u=r.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};var y,b,f;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "Custom Color Label",
    size: "normal",
    allCaps: false,
    fontColor: "#5517ac"
  }
}`,...(f=(b=l.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const T=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secondary,T as __namedExportsOrder,v as default};
