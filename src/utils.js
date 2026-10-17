import { employees,services } from './data';
export const money=n=>new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:0}).format(n||0);
export const dateLabel=d=>d?new Date(`${d}T12:00:00`).toLocaleDateString('en-IN',{day:'numeric',month:'short'}):'—';
export const member=id=>employees.find(x=>x.id===id)?.name||'Unassigned';
export const service=id=>services.find(x=>x.id===id)?.name||'—';
export function range(filters){const today='2026-10-17'; let start,end=today;if(filters.preset==='today')start=end=today;if(filters.preset==='last7'){start='2026-10-11';end=today}if(filters.preset==='last30'){start='2026-09-18';end=today}if(filters.preset==='custom'){start=filters.start||today;end=filters.end||today}return {start,end};}
export function previous(r){let s=new Date(`${r.start}T12:00:00`),e=new Date(`${r.end}T12:00:00`),days=Math.round((e-s)/86400000)+1;e=new Date(s);e.setDate(e.getDate()-1);s=new Date(e);s.setDate(s.getDate()-days+1);const f=x=>x.toISOString().slice(0,10);return {start:f(s),end:f(e)};}
export function filterRows(rows, filters, type, period=range(filters)){const field=type==='payments'?'paidAt':'createdAt';return rows.filter(x=>{const d=x[field]||x.createdAt; if(d<period.start||d>period.end)return false; if(filters.user!=='all'&&x.assignedEmployeeId&&x.assignedEmployeeId!==filters.user)return false; if(filters.department!=='all'&&x.assignedEmployeeId&&employees.find(e=>e.id===x.assignedEmployeeId)?.department!==filters.department)return false;return true})}
export const change=(current,old)=>old===0?(current?'New':'0%'):`${Math.round(((current-old)/old)*100)}%`;
export function netPayments(items){return items.reduce((s,p)=>s+(p.status==='Successful'?p.amount:p.status==='Refunded'?-p.amount:0),0)}
export const group=(rows,key,fn=()=>1)=>Object.entries(rows.reduce((a,x)=>{const k=typeof key==='function'?key(x):x[key];a[k]=(a[k]||0)+fn(x);return a},{})).map(([label,value])=>({label,value}));
