import{i as l,c as p,t as o}from"./index-91bba038.js";import{S as h}from"./index.es-1d538949.js";const x=o('<div class="flex flex-col items-center"><div class="min-w-[800px] py-6"><div class="text-2xl mb-4">Dynamic Size Virtual List</div><div class="w-full h-[600px] border-gray-900 text-gray-900 border-[1px] rounded-md">'),f=o('<div class="h-[60px] w-full px-[10px] flex items-center border-b-[1px] border-gray-900 box-border"><span># </span><span class="ml-4 font-semibold text-gray-900">height = '),u=t=>new Array(t).fill({}).map((a,e)=>({id:`${e}-${Math.random()}`,height:`${Math.floor(Math.random()*60+60)}px`})),g=u(1e4),y=()=>(()=>{const t=x(),a=t.firstChild,e=a.firstChild,d=e.nextSibling;return l(d,p(h,{estimateSize:80,dataSource:g,dataId:"id",itemRender:(c,m)=>{const s=m.height;return(()=>{const r=f(),i=r.firstChild;i.firstChild;const n=i.nextSibling;return n.firstChild,r.style.setProperty("height",s),l(i,c,null),l(n,s,null),r})()}})),t})();export{y as default};
