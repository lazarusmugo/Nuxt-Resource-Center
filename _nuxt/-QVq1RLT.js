import{c as p,ac as x,ad as v,E as _,k as o,f as n,ae as w,C as y,i,h as u,F as S,G as b,w as C,A as $,t as g,l as k,U as B}from"./BW1FV82y.js";import{_ as D}from"./D-X9W1qI.js";import{u as L}from"./BGESmBpG.js";const N={__name:"SearchBar",setup(c){const e=p("");return(s,t)=>x((o(),n("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>w(e)?e.value=a:null),onInput:t[1]||(t[1]=a=>s.$emit("search",_(e))),class:"p-2 w-full border rounded",placeholder:"Search docs..."},null,544)),[[v,_(e)]])}},V={class:"w-64 p-4 bg-gray-100 h-screen"},A={class:"mt-4"},E={__name:"Sidebar",async setup(c){let e,s;const{data:t}=([e,s]=y(()=>L("docs",()=>queryContent("docs").find())),e=await e,s(),e),a=p(t.value),f=d=>{a.value=t.value.filter(r=>r.title.toLowerCase().includes(d.toLowerCase()))};return(d,r)=>{const m=N,h=D;return o(),n("aside",V,[r[0]||(r[0]=i("h2",{class:"text-xl font-bold"},"Resource Center",-1)),u(m,{onSearch:f}),i("ul",A,[(o(!0),n(S,null,b(_(a),l=>(o(),n("li",{key:l._path},[u(h,{to:l._path,class:"block p-2 hover:bg-gray-200"},{default:C(()=>[$(g(l.title),1)]),_:2},1032,["to"])]))),128))])])}}},F={},R={class:"flex"},T={class:"flex-1 p-4"};function U(c,e){const s=E;return o(),n("div",R,[u(s),i("main",T,[B(c.$slots,"default")])])}const M=k(F,[["render",U]]);export{M as default};
