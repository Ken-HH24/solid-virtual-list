import{i,c as n,t as l}from"./index-91bba038.js";import{S as x}from"./index.es-1d538949.js";const c=l('<div class="flex flex-col items-center text-slate-800"><div class="min-w-[800px] py-6"><div class="text-2xl mb-4">Fixed Size Virtual List</div><div class="w-full h-[600px] border-[1px] border-gray-900 rounded-md">'),m=l('<div class="h-[60px] w-full px-[10px] flex items-center border-b-[1px] border-gray-900 text-gray-900 box-border"># '),u=()=>{const s=new Array(1e3).fill(0).map((e,t)=>({id:t}));return(()=>{const e=c(),t=e.firstChild,a=t.firstChild,d=a.nextSibling;return i(d,n(x,{estimateSize:60,dataSource:s,dataId:"id",itemRender:o=>(()=>{const r=m();return r.firstChild,i(r,o,null),r})()})),e})()};export{u as default};
