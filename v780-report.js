/* V7.8.9: read-only yearly report, references existing shared data; no mutations */
(()=>{'use strict';
const el=id=>document.getElementById(id),num=x=>Number(x||0)||0,fmt=x=>'RM '+num(x).toLocaleString('en-MY',{minimumFractionDigits:2,maximumFractionDigits:2});
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const sum=(arr)=>arr.reduce((a,x)=>a+num(x),0);
let last=[];
function draw(){const data=window.__mymoneyReportSnapshot?.();if(!data||!el('v780Year'))return;
const yr=el('v780Year').value, selected=el('v780Account').value, all=selected==='all', acc=(data.accounts||[]).filter(a=>all||a.id===selected), ids=new Set(acc.map(a=>a.id));
const inScope=id=>all||ids.has(id), dateBefore=(date,ym)=>String(date||'')<ym+'-01';
const tx=data.transactions||[], debtPays=data.payments||[], ts=data.transfers||[], loans=data.loans||[], loanPays=data.loanPayments||[], recPays=data.receivablePayments||[];
function flows(m){let v={income:0,expense:0,debtRepay:0,transferIn:0,transferOut:0,borrowIn:0,lendOut:0,borrowRepay:0,lendBack:0,receivableIn:0};
for(const x of tx.filter(x=>String(x.date||'').startsWith(m)&&inScope(x.accountId)&&!!x.accountId)){if(x.type==='income')v.income+=num(x.amount);else if(x.type==='expense')v.expense+=num(x.amount)}
for(const p of debtPays.filter(p=>String(p.date||'').startsWith(m)&&inScope(p.accountId)&&!!p.accountId))v.debtRepay+=num(p.amount);
for(const t of ts.filter(t=>String(t.date||'').startsWith(m))){if(t.to&&inScope(t.to))v.transferIn+=num(t.amount);if(t.from&&inScope(t.from))v.transferOut+=num(t.amount)}
for(const l of loans.filter(l=>String(l.date||'').startsWith(m)&&l.accountId&&inScope(l.accountId))){if(l.direction==='borrow')v.borrowIn+=num(l.amount);else v.lendOut+=num(l.amount)}
for(const p of loanPays.filter(p=>String(p.date||'').startsWith(m)&&p.accountId&&inScope(p.accountId))){const loan=loans.find(l=>l.id===p.loanId);if(loan?.direction==='borrow')v.borrowRepay+=num(p.amount);else if(loan?.direction==='lend')v.lendBack+=num(p.amount)}
for(const p of recPays.filter(p=>String(p.date||'').startsWith(m)&&p.accountId&&inScope(p.accountId)))v.receivableIn+=num(p.amount);
v.net=v.income-v.expense-v.debtRepay+v.transferIn-v.transferOut+v.borrowIn-v.lendOut-v.borrowRepay+v.lendBack+v.receivableIn;return v}
// The account opening balance is the first known end-of-month snapshot (October 2026).
// Earlier months are unknown, not zero. Roll forward only from November 2026.
const firstClosingMonth='2026-10',firstRollingMonth='2026-11';
const snapshot=sum(acc.map(a=>a.opening));
const historicMonths=new Set();
for(const collection of [tx,debtPays,ts,loans,loanPays,recPays])for(const x of collection){
  const m=String(x.date||'').slice(0,7);
  if(m>=firstRollingMonth && m<yr+'-01')historicMonths.add(m);
}
let running=snapshot;
for(const m of [...historicMonths].sort())running+=flows(m).net;
const opening=yr==='2026'?null:running;
last=Array.from({length:12},(_,i)=>{
  const m=yr+'-'+String(i+1).padStart(2,'0'),v=flows(m);
  if(m<firstClosingMonth)return {month:m,opening:null,...v,closing:null};
  if(m===firstClosingMonth){running=snapshot;return {month:m,opening:null,...v,closing:running};}
  const record={month:m,opening:running,...v,closing:running+v.net};
  running=record.closing;return record;
});
const total=key=>sum(last.map(r=>r[key]));let kpis=[['年初账户余额',opening],['全年收入',total('income')],['普通支出',total('expense')],['负债还款',total('debtRepay')],['借入到账',total('borrowIn')],['借出款项',total('lendOut')],['借入归还',total('borrowRepay')],['借出收回',total('lendBack')],['旧应收收款',total('receivableIn')],['年末账户余额',running]];
el('v780Kpis').innerHTML=kpis.map(([n,v])=>`<div class="card"><div class="sub">${esc(n)}</div><strong>${v==null?'—':fmt(v)}</strong></div>`).join('');
const columns=[['month','月份'],['opening','期初'],['income','收入'],['expense','支出'],['debtRepay','负债还款'],['borrowIn','借入'],['lendOut','借出'],['borrowRepay','借入归还'],['lendBack','借出收回'],['receivableIn','旧应收收款'],['transferIn','转入'],['transferOut','转出'],['closing','期末']];
const row=r=>'<tr>'+columns.map(([k])=>`<td style="padding:8px;white-space:nowrap;border-bottom:1px solid var(--line,#dde4ef)">${k==='month'?esc(r[k]):r[k]==null?'—':fmt(r[k])}</td>`).join('')+'</tr>';
el('v780Table').innerHTML=`<table style="width:100%;font-size:12px;border-collapse:collapse"><thead><tr>${columns.map(([k,n])=>`<th style="text-align:left;padding:8px;white-space:nowrap">${n}</th>`).join('')}</tr></thead><tbody>${last.map(row).join('')}</tbody></table>`;
const cats={};for(const x of tx.filter(x=>String(x.date||'').startsWith(yr)&&x.accountId&&inScope(x.accountId))) {const key=(x.type==='income'?'收入':'支出')+' · '+(x.category||'未分类');cats[key]=(cats[key]||0)+num(x.amount)}
el('v780Cats').innerHTML=Object.entries(cats).sort((a,b)=>b[1]-a[1]).map(([name,v])=>`<div class="item"><span>${esc(name)}</span><strong>${fmt(v)}</strong></div>`).join('')||'<p class="hint">所选年度没有关联账户的收支分类记录。</p>';
el('v780Accounts').innerHTML=acc.map(a=>{
// Resolve each account closing balance using its native account entries and loan-linked movements.
function balanceAt(a){let v=num(a.opening),id=a.id,end=yr+'-12-31';for(const x of tx)if(x.accountId===id&&x.date<=end)v+=(x.type==='income'?1:-1)*num(x.amount);for(const p of debtPays)if(p.accountId===id&&p.date<=end)v-=num(p.amount);for(const t of ts)if(t.date<=end){if(t.from===id)v-=num(t.amount);if(t.to===id)v+=num(t.amount)}for(const l of loans)if(l.accountId===id&&l.date<=end)v+=(l.direction==='borrow'?1:-1)*num(l.amount);for(const p of loanPays)if(p.accountId===id&&p.date<=end){let l=loans.find(x=>x.id===p.loanId);if(l)v+=(l.direction==='borrow'?-1:1)*num(p.amount)}for(const p of recPays)if(p.accountId===id&&p.date<=end)v+=num(p.amount);return v}
return `<div class="item"><div>${esc(a.name)} <span class="pill">${esc(a.type||'账户')}</span></div><strong>${fmt(balanceAt(a))}</strong></div>`}).join('')||'<p class="hint">没有账户。</p>';
const debtRows=(data.debts||[]).map(d=>{let b=num(d.original);for(const p of debtPays)if(p.debtId===d.id&&p.date<=yr+'-12-31')b-=num(p.principal??p.amount);return `${esc(d.name)}：${fmt(Math.max(0,b))}`});
const loanRows=loans.map(l=>{let b=num(l.amount)-sum(loanPays.filter(p=>p.loanId===l.id&&p.date<=yr+'-12-31').map(p=>p.amount));return `${l.direction==='borrow'?'借入':'借出'} · ${esc(l.person||l.name||'未命名')}：${fmt(Math.max(0,b))}`});
el('v780Debts').innerHTML=[...debtRows,...loanRows].map(v=>`<div class="item">${v}</div>`).join('')||'<p class="hint">没有相关记录。</p>';
el('v780Explain').textContent='统计口径：只计入已关联账户的收支与借款流水；未关联账户的记录保留在原始明细。账户余额与现金流不是会计利润。信用卡费用与债务余额请以原始负债模块及银行正式账单核对。单独筛选账户时，内部转账只算该账户的转入／转出。';
}
function init(){const data=window.__mymoneyReportSnapshot?.();const y=el('v780Year'),a=el('v780Account');if(!y||!a)return;const curr=String(new Date().getFullYear()),years=new Set([curr]);if(data)for(const list of [data.transactions,data.payments,data.transfers,data.loans,data.loanPayments,data.receivablePayments])for(const x of list||[])if(/^\d{4}/.test(x.date||''))years.add(x.date.slice(0,4));y.innerHTML=[...years].sort().reverse().map(v=>`<option value="${v}">${v}年</option>`).join('');a.innerHTML='<option value="all">全部账户</option>'+(!data?'':(data.accounts||[]).map(x=>`<option value="${esc(x.id)}">${esc(x.name)}</option>`).join(''));y.addEventListener('change',draw);a.addEventListener('change',draw);el('v780Csv').addEventListener('click',()=>{const fields=['month','opening','income','expense','debtRepay','borrowIn','lendOut','borrowRepay','lendBack','receivableIn','transferIn','transferOut','closing'];const csv='\ufeff'+[fields.join(','),...last.map(r=>fields.map(k=>JSON.stringify(r[k]??'')).join(','))].join('\r\n');const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8;'}));const link=document.createElement('a');link.href=url;link.download=`MyMoney_年度详细报表_${y.value}.csv`;link.click();URL.revokeObjectURL(url)});draw();window.addEventListener('mymoney-v73-update',draw);}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
