/* MyMoney V7.2.0 budget stage 1: isolated settings, never modifies ledger. */
(()=>{'use strict';
const KEY='mymoney-v720-budgets',MIRROR='mymoney-v8110-budget-safety',LEDGER='mymoney-local-v1',PREF='mymoney-v604-preferences';
const $=id=>document.getElementById(id),root=$('budget'),nav=document.querySelector('.tabs [data-tab="budget"]');if(!root||!nav)return;
const D={
'zh-CN':{usageCol:'使用率',budgetedMonths:'已设置预算月份',coverageHint:'预算覆盖情况：仅已设置的月份计入年度预算；未设置月份的支出仍计入全年支出。',coverageValue:'已设置 {n}/12 个月',monthlyCompare:"月度预算比较",categoryCompare:"类别与上月比较",annualSummary:"年度预算汇总",monthCol:"月份",budgetCol:"预算",actualCol:"实际支出",difference:"差额",vsPrevious:"较上月",overCategories:"本月超支类别",noOver:"没有超支类别",annualBudget:"全年预算",annualSpent:"全年支出",budgetNotSet:"预算未设置",comparisonHint:"按所选月份向前显示六个月；统计仅包含普通支出。",increase:"增加",decrease:"减少",unchanged:"持平",quickAdd:'快速设预算',unbudgeted:'未设置预算的支出类别',edit:'修改名称',editAsk:'输入新的类别名称',unsaved:'本月有尚未保存的修改，确定切换月份并放弃修改吗？',copySaved:'复制前会先保存本月预算。',add:'新增类别',name:'类别名称',namePlaceholder:'例如：餐饮、交通、宠物',remove:'删除',duplicate:'此类别已存在',emptyName:'请输入类别名称',removeAsk:'确定删除此类别预算？不会删除记账记录。',emptyCats:'尚未新增类别预算，请在下方自行新增。',added:'类别已新增，请保存预算。',removed:'类别已移除，请保存预算。',tab:'预算',title:'每月预算管理',month:'预算月份',total:'每月总预算（RM）',save:'保存预算',copy:'复制到下个月',sum:'总预算',spent:'已使用',left:'剩余预算',rate:'使用比例',cat:'类别预算',actual:'已支出',limit:'预算上限',over:'超支',warn:'接近预算上限',unset:'尚未设置',hint:'只统计当月普通支出，不包括收入、转账、负债还款或未付款的账单提醒。预算不会扣除账户余额。',copyAsk:'将本月预算复制到下个月？下个月已有预算将被覆盖。',saved:'预算已保存',copied:'已复制到下个月',invalid:'请输入有效的非负预算金额',none:'该月没有支出记录',uncat:'未分类',backup:'预算设置已包含在完整 JSON 备份中。'},
'zh-TW':{usageCol:'使用率',budgetedMonths:'已設定預算月份',coverageHint:'預算涵蓋情況：只有已設定月份計入年度預算；未設定月份的支出仍計入全年支出。',coverageValue:'已設定 {n}/12 個月',monthlyCompare:"每月預算比較",categoryCompare:"類別與上月比較",annualSummary:"年度預算彙總",monthCol:"月份",budgetCol:"預算",actualCol:"實際支出",difference:"差額",vsPrevious:"較上月",overCategories:"本月超支類別",noOver:"沒有超支類別",annualBudget:"全年預算",annualSpent:"全年支出",budgetNotSet:"預算未設定",comparisonHint:"從所選月份往前顯示六個月；只統計一般支出。",increase:"增加",decrease:"減少",unchanged:"持平",quickAdd:'快速設預算',unbudgeted:'未設定預算的支出類別',edit:'修改名稱',editAsk:'輸入新的類別名稱',unsaved:'本月有尚未儲存的修改，確定切換月份並放棄修改嗎？',copySaved:'複製前會先儲存本月預算。',add:'新增類別',name:'類別名稱',namePlaceholder:'例如：餐飲、交通、寵物',remove:'刪除',duplicate:'此類別已存在',emptyName:'請輸入類別名稱',removeAsk:'確定刪除此類別預算？不會刪除記帳記錄。',emptyCats:'尚未新增類別預算，請在下方自行新增。',added:'類別已新增，請儲存預算。',removed:'類別已移除，請儲存預算。',tab:'預算',title:'每月預算管理',month:'預算月份',total:'每月總預算（RM）',save:'儲存預算',copy:'複製到下個月',sum:'總預算',spent:'已使用',left:'剩餘預算',rate:'使用比例',cat:'類別預算',actual:'已支出',limit:'預算上限',over:'超支',warn:'接近預算上限',unset:'尚未設定',hint:'只統計當月一般支出，不包括收入、轉帳、負債還款或未付款的帳單提醒。預算不會扣除帳戶餘額。',copyAsk:'將本月預算複製到下個月？下個月已有預算將被覆蓋。',saved:'預算已儲存',copied:'已複製到下個月',invalid:'請輸入有效的非負預算金額',none:'該月沒有支出記錄',uncat:'未分類',backup:'預算設定已包含在完整 JSON 備份中。'},
'en':{usageCol:'Usage',budgetedMonths:'Budgeted Months',coverageHint:'Budget coverage: only configured months count toward the annual budget; spending includes all months.',coverageValue:'{n}/12 months configured',monthlyCompare:"Monthly Budget Comparison",categoryCompare:"Category vs Previous Month",annualSummary:"Annual Budget Summary",monthCol:"Month",budgetCol:"Budget",actualCol:"Actual Spending",difference:"Difference",vsPrevious:"vs Last Month",overCategories:"Over-budget Categories",noOver:"No over-budget categories",annualBudget:"Annual Budget",annualSpent:"Annual Spending",budgetNotSet:"Budget Not Set",comparisonHint:"Shows six months through the selected month; only regular expenses are counted.",increase:"Increase",decrease:"Decrease",unchanged:"No Change",quickAdd:'Set Budget',unbudgeted:'Expense categories without a budget',edit:'Rename',editAsk:'Enter the new category name',unsaved:'You have unsaved budget changes. Discard them and change month?',copySaved:'Your current budget will be saved before copying.',add:'Add Category',name:'Category Name',namePlaceholder:'e.g. Food, Transport, Pets',remove:'Remove',duplicate:'Category already exists',emptyName:'Enter a category name',removeAsk:'Remove this budget category? Transactions will not be deleted.',emptyCats:'No budget categories yet. Add your own below.',added:'Category added. Save your budget.',removed:'Category removed. Save your budget.',tab:'Budget',title:'Monthly Budget',month:'Budget month',total:'Monthly total budget (RM)',save:'Save Budget',copy:'Copy to Next Month',sum:'Total Budget',spent:'Spent',left:'Remaining',rate:'Used',cat:'Category Budgets',actual:'Spent',limit:'Budget Limit',over:'Over Budget',warn:'Near Limit',unset:'Not Set',hint:'Counts only regular expenses for this month. Income, transfers, debt repayments and unpaid bill reminders are excluded. Budgets never deduct account balances.',copyAsk:'Copy this month’s budgets to next month? Existing budgets there will be overwritten.',saved:'Budget saved',copied:'Copied to next month',invalid:'Enter a valid non-negative amount',none:'No expenses this month',uncat:'Uncategorized',backup:'Budget settings are included in Complete JSON Backup.'},
'ms':{usageCol:'Kadar Penggunaan',budgetedMonths:'Bulan Ada Bajet',coverageHint:'Liputan bajet: hanya bulan yang ditetapkan termasuk dalam bajet tahunan; perbelanjaan merangkumi semua bulan.',coverageValue:'{n}/12 bulan ditetapkan',monthlyCompare:"Perbandingan Bajet Bulanan",categoryCompare:"Kategori berbanding Bulan Lepas",annualSummary:"Ringkasan Bajet Tahunan",monthCol:"Bulan",budgetCol:"Bajet",actualCol:"Perbelanjaan Sebenar",difference:"Perbezaan",vsPrevious:"berbanding Bulan Lepas",overCategories:"Kategori Melebihi Bajet",noOver:"Tiada kategori melebihi bajet",annualBudget:"Bajet Tahunan",annualSpent:"Perbelanjaan Tahunan",budgetNotSet:"Bajet Belum Ditetapkan",comparisonHint:"Menunjukkan enam bulan sehingga bulan dipilih; hanya perbelanjaan biasa dikira.",increase:"Meningkat",decrease:"Menurun",unchanged:"Tiada Perubahan",quickAdd:'Tetapkan Bajet',unbudgeted:'Kategori perbelanjaan tanpa bajet',edit:'Tukar Nama',editAsk:'Masukkan nama kategori baharu',unsaved:'Ada perubahan bajet belum disimpan. Abaikan perubahan dan tukar bulan?',copySaved:'Bajet semasa akan disimpan sebelum disalin.',add:'Tambah Kategori',name:'Nama Kategori',namePlaceholder:'Contoh: Makanan, Pengangkutan, Haiwan',remove:'Padam',duplicate:'Kategori sudah wujud',emptyName:'Masukkan nama kategori',removeAsk:'Padam kategori bajet ini? Rekod transaksi tidak akan dipadam.',emptyCats:'Belum ada kategori bajet. Tambah kategori sendiri di bawah.',added:'Kategori ditambah. Sila simpan bajet.',removed:'Kategori dipadam. Sila simpan bajet.',tab:'Bajet',title:'Pengurusan Bajet Bulanan',month:'Bulan Bajet',total:'Jumlah Bajet Bulanan (RM)',save:'Simpan Bajet',copy:'Salin ke Bulan Hadapan',sum:'Jumlah Bajet',spent:'Telah Digunakan',left:'Baki Bajet',rate:'Peratus Digunakan',cat:'Bajet Mengikut Kategori',actual:'Perbelanjaan',limit:'Had Bajet',over:'Melebihi Bajet',warn:'Hampir Had Bajet',unset:'Belum Ditetapkan',hint:'Hanya perbelanjaan biasa bulan ini dikira. Pendapatan, pindahan, bayaran balik hutang dan peringatan bil yang belum dibayar tidak dikira. Bajet tidak menolak baki akaun.',copyAsk:'Salin bajet bulan ini ke bulan hadapan? Bajet sedia ada bagi bulan hadapan akan diganti.',saved:'Bajet disimpan',copied:'Disalin ke bulan hadapan',invalid:'Masukkan amaun bajet bukan negatif yang sah',none:'Tiada perbelanjaan bulan ini',uncat:'Tanpa Kategori',backup:'Tetapan bajet disertakan dalam Sandaran JSON Lengkap.'}};
for(const [key,words] of Object.entries({
 'zh-CN':{saveCategory:'保存类别预算设置',savedNearby:'已保存。更新网页后仍会保留。',unsavedNearby:'有未保存的修改',removedSaved:'已删除并自动保存，刷新后不会重新出现',renamedSaved:'类别名称已修改并保存',autoSaved:'修改已自动保存'},
 'zh-TW':{saveCategory:'儲存類別預算設定',savedNearby:'已儲存。重新整理後仍會保留。',unsavedNearby:'有尚未儲存的修改',removedSaved:'已刪除並自動儲存，重新整理後不會再出現',renamedSaved:'類別名稱已修改並儲存',autoSaved:'修改已自動儲存'},
 'en':{saveCategory:'Save Category Budgets',savedNearby:'Saved. Changes will remain after refreshing.',unsavedNearby:'Unsaved changes',removedSaved:'Removed and saved automatically; it will stay removed after a refresh',renamedSaved:'Category renamed and saved',autoSaved:'Changes saved automatically'},
 'ms':{saveCategory:'Simpan Bajet Kategori',savedNearby:'Disimpan. Perubahan kekal selepas muat semula.',unsavedNearby:'Perubahan belum disimpan',removedSaved:'Kategori dipadam dan disimpan secara automatik',renamedSaved:'Nama kategori telah ditukar dan disimpan',autoSaved:'Perubahan disimpan secara automatik'}
}))Object.assign(D[key],words);
function lang(){try{const x=JSON.parse(localStorage.getItem(PREF)||'{}').lang||document.documentElement.lang||'zh-CN';return /^ms/i.test(x)?'ms':/^en/i.test(x)?'en':/tw|hant/i.test(x)?'zh-TW':'zh-CN'}catch{return 'zh-CN'}}
const tx=x=>D[lang()][x];
// V8.1.10: budgets are kept outside the application ledger and mirrored on save.
// Never use a versioned budget key: older saved monthly budgets must remain readable.
function safeObject(raw){try{const x=JSON.parse(raw||'{}');return x&&typeof x==='object'&&!Array.isArray(x)?x:{}}catch{return {}}}
const HISTORY='mymoney-v8111-budget-snapshots';
// Preserve multiple distinct versions before an import or save can replace them.
function snapshot(all){
 try{
  const history=safeObject(localStorage.getItem(HISTORY));let changed=false;
  for(const [ym,entry] of Object.entries(all||{})){
   if(!/^\d{4}-(0[1-9]|1[0-2])$/.test(ym)||!entry||!entry.categories||!Object.keys(entry.categories).length)continue;
   const versions=Array.isArray(history[ym])?history[ym]:[];
   const data={total:entry.total||0,categories:{...entry.categories}};
   if(!versions.some(v=>JSON.stringify(v.data)===JSON.stringify(data))){
     versions.push({at:new Date().toISOString(),data});
     history[ym]=versions.slice(-12);changed=true;
   }
  }
  if(changed)localStorage.setItem(HISTORY,JSON.stringify(history));
 }catch(e){/* best-effort extra history; never block the main budget save */}
}
function writeBudgets(all){
 // Save snapshots before changing the primary budget key.
 snapshot(safeObject(localStorage.getItem(KEY)));
 snapshot(safeObject(localStorage.getItem(MIRROR)));
 snapshot(all);
 localStorage.setItem(KEY,JSON.stringify(all));
 try{localStorage.setItem(MIRROR,JSON.stringify(all))}catch(e){/* main save succeeded; mirror best effort */}
}
const DELETED='mymoney-v8112-budget-deleted';
function deletedFor(ym){
 const all=safeObject(localStorage.getItem(DELETED));
 return Array.isArray(all[ym])?all[ym]:[];
}
function updateDeleted(ym,name,remove){
 const all=safeObject(localStorage.getItem(DELETED));
 const names=new Set(Array.isArray(all[ym])?all[ym]:[]);
 if(remove)names.add(name);else names.delete(name);
 all[ym]=Array.from(names);
 try{localStorage.setItem(DELETED,JSON.stringify(all))}catch(e){}
}
function clearDeletedWhenSaved(ym,categories){
 const old=deletedFor(ym);for(const name of old)if(Object.prototype.hasOwnProperty.call(categories,name))updateDeleted(ym,name,false);
}
function read(){
 // V8.1.12: the primary record is authoritative even if it has fewer categories.
 // Never merge from a historic mirror; that resurrected intentionally deleted items.
 const raw=localStorage.getItem(KEY);
 if(raw!==null){
  try{const value=JSON.parse(raw);if(value&&typeof value==='object'&&!Array.isArray(value))return value}catch(e){}
 }
 // A missing or corrupt primary key can be restored from the safety copy, but
 // an explicit deletion tombstone must still win over an old safety copy.
 const backup=safeObject(localStorage.getItem(MIRROR));
 for(const [ym,entry] of Object.entries(backup)){
  if(!entry||!entry.categories)continue;
  const cat={...entry.categories};let changed=false;
  for(const name of deletedFor(ym))if(Object.prototype.hasOwnProperty.call(cat,name)){delete cat[name];changed=true}
  if(changed)backup[ym]={...entry,categories:cat};
 }
 if(Object.keys(backup).length){try{localStorage.setItem(KEY,JSON.stringify(backup))}catch(e){}}
 return backup;
}
function budgetTotal(b){
 if(!b||typeof b!=='object')return 0;
 const raw=Number(b.total);
 if(Number.isFinite(raw)&&raw>0)return raw;
 return Object.values(b.categories||{}).reduce((sum,v)=>{const n=Number(v);return sum+(Number.isFinite(n)&&n>0?n:0)},0);
}
// Only carry forward into the real current month when that month has never been configured.
// Do not modify historical records or overwrite an existing (even zero) monthly entry.
function carryCurrentBudget(){
 const all=read();if(Object.prototype.hasOwnProperty.call(all,month))return;
 const today=new Date(),current=today.getFullYear()+'-'+String(today.getMonth()+1).padStart(2,'0');
 if(month!==current)return;
 const prev=Object.keys(all).filter(k=>/^\d{4}-(0[1-9]|1[0-2])$/.test(k)&&k<month&&budgetTotal(all[k])>0).sort().pop();
 if(!prev)return;
 const [y,m]=prev.split('-').map(Number),age=(today.getFullYear()-y)*12+today.getMonth()+1-m;
 if(age<1||age>12)return;
 const source=all[prev];all[month]={total:budgetTotal(source),categories:{...(source.categories||{})},carriedFrom:prev};
 try{writeBudgets(all)}catch(e){}
}
function ledger(){try{const x=JSON.parse(localStorage.getItem(LEDGER)||'{}');return Array.isArray(x.transactions)?x.transactions:[]}catch{return []}}
function esc(x){return String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
const fmt=n=>'RM '+Number(n||0).toLocaleString('en-MY',{minimumFractionDigits:2,maximumFractionDigits:2});
const now=new Date();let month=now.getFullYear()+'-'+String(now.getMonth()+1).padStart(2,'0');
root.innerHTML='<div class="box"><h2 id="v720Title"></h2><div class="v720-tools"><label><span id="v720MonthLabel"></span><input id="v720Month" type="month"></label><label><span id="v720TotalLabel"></span><input id="v720Total" type="number" min="0" step="0.01" inputmode="decimal"></label></div><p class="hint" id="v720Hint"></p><div class="actions"><button type="button" class="btn" id="v720Save"></button><button type="button" class="btn secondary" id="v720Copy"></button></div><p id="v720Status" class="hint" role="status"></p><p id="v8110CarryStatus" class="hint"></p></div><div class="box"><div class="v720-grid" id="v720Summary"></div></div><div class="box"><h2 id="v720CatTitle"></h2><div id="v8111RestoreBox" style="display:none;margin:8px 0 14px;padding:10px;border:1px solid #d3e3f5;border-radius:10px"><p id="v8111RestoreHint" class="hint" style="margin:0 0 8px"></p><button type="button" class="btn secondary" id="v8111Restore"></button></div><div id="v8111BudgetImportBox" hidden style="display:none!important"><p class="hint" id="v8111ImportHelp" style="margin:0 0 8px"></p><input id="v8111ImportFile" type="file" accept=".json,application/json" style="max-width:380px"/><button type="button" class="btn secondary" id="v8111Import" style="margin:6px 0 0"></button></div><div id="v720Categories"></div><div class="actions" style="margin:12px 0 4px;align-items:center"><button type="button" class="btn" id="v8112SaveCategories"></button><span class="hint" id="v8112SaveState" role="status"></span></div><div id="v720Unbudgeted" class="v720-unbudgeted" hidden style="display:none!important"></div><div class="v720-add"><label for="v720NewName" id="v720NewLabel"></label><div class="v720-add-row"><input id="v720NewName" type="text" maxlength="60" list="v720Suggested"><datalist id="v720Suggested"></datalist><button type="button" class="btn secondary" id="v720Add"></button></div></div><p class="hint" id="v720Backup"></p></div><div class="box"><h2 id="v720MonthlyTitle"></h2><p class="hint" id="v720CompareHint"></p><div class="v720-table-wrap"><table class="v720-table"><thead id="v720MonthlyHead"></thead><tbody id="v720MonthlyBody"></tbody></table></div></div><div class="box"><h2 id="v720CompareTitle"></h2><div class="v720-table-wrap"><table class="v720-table"><thead id="v720CategoryHead"></thead><tbody id="v720CategoryBody"></tbody></table></div><h3 id="v720OverTitle"></h3><div id="v720OverList"></div></div><div class="box"><h2 id="v720AnnualTitle"></h2><div class="v720-grid" id="v720AnnualSummary"></div><p class="hint" id="v720CoverageHint"></p></div>';
$('v720Month').value=month;
let draft=null;let dirty=false;let draftTotal=null;
function categories(){const transactions=ledger().filter(x=>x.type==='expense'&&typeof x.date==='string'&&x.date.startsWith(month));const used={};for(const t of transactions){const name=String(t.category||tx('uncat'));used[name]=(used[name]||0)+(Number(t.amount)||0)}const config=read()[month]||{};if(!draft||draft.month!==month)draft={month,names:Object.keys(config.categories||{}),values:{...(config.categories||{})}};return {used,config,keys:draft.names}}
// Missing categories from an earlier month may be offered for recovery without overwriting current limits.
function recoveryPlan(){
 const all=read(),current=all[month]||{},own=current.categories||{};
 const history=safeObject(localStorage.getItem(HISTORY));
 const versions=Array.isArray(history[month])?history[month]:[];
 const richer=versions.map(v=>v&&v.data).filter(v=>v&&v.categories)
   .map(v=>Object.entries(v.categories).filter(([k,value])=>!Object.prototype.hasOwnProperty.call(own,k)&&!deletedFor(month).includes(k)&&Number(value)>0))
   .sort((a,b)=>b.length-a.length)[0];
 if(richer&&richer.length)return {source:month+' (saved history)',missing:richer};
 const candidates=Object.entries(all).filter(([ym,config])=>
  /^\d{4}-(0[1-9]|1[0-2])$/.test(ym)&&ym<month&&ym>=monthShift(month,-12)&&config&&config.categories)
  .sort((a,b)=>b[0].localeCompare(a[0]));
 for(const [source,config] of candidates){
  const missing=Object.entries(config.categories).filter(([k,v])=>!Object.prototype.hasOwnProperty.call(own,k)&&!deletedFor(month).includes(k)&&Number(v)>0);
  if(missing.length)return {source,missing};
 }
 return null;
}
function renderRecovery(){
 const plan=recoveryPlan(),box=$('v8111RestoreBox'),btn=$('v8111Restore'),hint=$('v8111RestoreHint');
 box.style.display=plan?'block':'none';if(!plan)return;
 const n=plan.missing.length,langKey=lang();
 const desc={
  'zh-CN':`发现 ${n} 个本月未设置、但 ${plan.source} 曾设置的类别预算：${plan.missing.map(x=>x[0]).join('、')}。可以恢复缺失类别，不覆盖当前已设置的金额。`,
  'zh-TW':`發現 ${n} 個本月未設定、但 ${plan.source} 曾設定的類別預算：${plan.missing.map(x=>x[0]).join('、')}。只補回缺失類別，不覆蓋現有金額。`,
  'en':`Found ${n} missing category budgets saved in ${plan.source}: ${plan.missing.map(x=>x[0]).join(', ')}. Existing current-month amounts stay unchanged.`,
  'ms':`Ditemui ${n} kategori bajet yang belum ditetapkan bulan ini tetapi ada pada ${plan.source}: ${plan.missing.map(x=>x[0]).join(', ')}. Amaun semasa tidak akan diganti.`
 };
 hint.textContent=desc[langKey];
 btn.textContent=({'zh-CN':'恢复缺失类别预算','zh-TW':'還原缺失類別預算','en':'Restore Missing Budgets','ms':'Pulihkan Bajet Kategori yang Hilang'})[langKey];
}
function restoreMissingBudgets(){
 if(dirty&&!save())return;
 const plan=recoveryPlan();if(!plan)return;
 const names=plan.missing.map(([name,value])=>name+' '+fmt(value)).join('\n');
 const ask=({'zh-CN':'确认从 '+plan.source+' 补回缺失预算？不会覆盖现有类别：\n',
 'zh-TW':'確認從 '+plan.source+' 補回缺失預算？不會覆蓋現有類別：\n',
 'en':'Restore missing budgets from '+plan.source+' without replacing current categories?\n',
 'ms':'Pulihkan bajet yang hilang dari '+plan.source+' tanpa mengganti kategori semasa?\n'})[lang()];
 if(!confirm(ask+names))return;
 const all=read(),item=all[month]||{},categories={...(item.categories||{})};
 for(const [name,value] of plan.missing){if(!Object.prototype.hasOwnProperty.call(categories,name))categories[name]=value}
 const sum=Object.values(categories).reduce((v,n)=>v+(Number(n)>0?Number(n):0),0);
 all[month]={...item,categories,total:Math.max(Number(item.total)||0,sum)};
 try{writeBudgets(all);for(const [name] of plan.missing)updateDeleted(month,name,false);draft=null;dirty=false;draftTotal=null;render();$('v720Status').textContent=({'zh-CN':'已恢复缺失预算，原有金额保持不变','zh-TW':'已還原缺失預算，原有金額不變','en':'Missing budgets restored. Existing amounts were preserved.','ms':'Bajet yang hilang telah dipulihkan. Amaun sedia ada dikekalkan.'})[lang()];}
 catch(e){$('v720Status').textContent=e.message}
}
function renderImportHelp(){
 const texts={
  'zh-CN':['从预算恢复文件补回缺失类别；不覆盖已设置的类别金额。','导入预算恢复文件'],
  'zh-TW':['從預算還原檔案補回缺失類別；不覆蓋現有類別金額。','匯入預算還原檔案'],
  'en':['Restore only missing category budgets from a budget JSON file; existing values will not be replaced.','Import Budget Recovery File'],
  'ms':['Pulihkan hanya bajet kategori yang hilang daripada fail JSON; amaun semasa tidak diganti.','Import Fail Pemulihan Bajet']
 };const v=texts[lang()];$('v8111ImportHelp').textContent=v[0];$('v8111Import').textContent=v[1];
}
async function importBudgetFile(){
 const input=$('v8111ImportFile'),file=input.files&&input.files[0];
 if(!file){$('v720Status').textContent=({'zh-CN':'请先选择预算 JSON 文件','zh-TW':'請先選擇預算 JSON 檔案','en':'Choose a budget JSON file first','ms':'Sila pilih fail JSON bajet dahulu'})[lang()];return}
 if(file.size>1024*1024){$('v720Status').textContent='Budget file too large';return}
 try{
  const x=JSON.parse(await file.text());
  if(!x||x.schema!=='mymoney-budget-restore-v1'||x.month!==month||!x.categories||typeof x.categories!=='object'||Array.isArray(x.categories))throw Error('Budget file format or month does not match the selected month');
  const pairs=Object.entries(x.categories);
  if(!pairs.length||pairs.length>100||pairs.some(([k,v])=>!k||k.length>80||['__proto__','prototype','constructor'].includes(k)||!Number.isFinite(Number(v))||Number(v)<0))throw Error('Invalid budget category or amount');
  if(dirty&&!save())return;
  const all=read(),existing=all[month]||{},own=existing.categories||{};
  const missing=pairs.filter(([k])=>!Object.prototype.hasOwnProperty.call(own,k));
  if(!missing.length){$('v720Status').textContent=({'zh-CN':'此文件的预算类别已全部存在，没有覆盖任何金额','zh-TW':'此檔案的預算類別已存在，沒有覆蓋任何金額','en':'All budget categories already exist; no amounts were changed','ms':'Semua kategori bajet sudah wujud; tiada amaun diubah'})[lang()];return}
  const ask=({'zh-CN':'确认恢复以下缺失预算，不覆盖现有金额？\n','zh-TW':'確認還原以下缺失預算，不覆蓋現有金額？\n','en':'Restore missing budgets without overwriting current amounts?\n','ms':'Pulihkan bajet yang hilang tanpa mengganti amaun semasa?\n'})[lang()];
  if(!confirm(ask+missing.map(([k,v])=>k+' '+fmt(v)).join('\n')))return;
  const categories={...own};for(const [k,v] of missing)categories[k]=Number(v);
  const total=Math.max(Number(existing.total)||0,Object.values(categories).reduce((v,n)=>v+(Number(n)>0?Number(n):0),0));
  all[month]={...existing,categories,total};writeBudgets(all);for(const [name] of missing)updateDeleted(month,name,false);
  draft=null;dirty=false;draftTotal=null;render();
  $('v720Status').textContent=({'zh-CN':'已补回 '+missing.length+' 个缺失类别，现有预算金额保持不变','zh-TW':'已補回 '+missing.length+' 個缺失類別，原有金額不變','en':'Restored '+missing.length+' missing categories without replacing existing values','ms':'Berjaya memulihkan '+missing.length+' kategori yang hilang tanpa menggantikan amaun sedia ada'})[lang()];
  input.value='';
 }catch(e){$('v720Status').textContent=String(e.message||e)}
}
function captureDraft(){if(!draft)return;for(const el of root.querySelectorAll('[data-budget-category]'))draft.values[el.dataset.budgetCategory]=el.value}
function render(){const oldTotal=$('v720Total').value;if(dirty)draftTotal=oldTotal;nav.textContent='▤ '+tx('tab');$('v720Title').textContent=tx('title');$('v720MonthLabel').textContent=tx('month');$('v720TotalLabel').textContent=tx('total');$('v720Save').textContent=tx('save');$('v720Copy').textContent=tx('copy');$('v720Hint').textContent=tx('hint');$('v720CatTitle').textContent=tx('cat');$('v8112SaveCategories').textContent=tx('saveCategory');$('v8112SaveState').textContent=dirty?tx('unsavedNearby'):tx('savedNearby');$('v720NewLabel').textContent=tx('name');$('v720NewName').placeholder=tx('namePlaceholder');$('v720Add').textContent=tx('add');$('v720Backup').textContent=tx('backup');renderImportHelp();const {used,config,keys}=categories();$('v720Total').value=dirty&&draftTotal!==null?draftTotal:(budgetTotal(config)||config.total||'');$('v8110CarryStatus').textContent=config.carriedFrom?({'en':'Budget carried forward from ','ms':'Bajet dibawa dari ','zh-TW':'預算沿用自 ','zh-CN':'预算自动结转自 '}[lang()]+config.carriedFrom):'';const spent=Object.values(used).reduce((a,b)=>a+b,0),total=Number(dirty&&draftTotal!==null?draftTotal:budgetTotal(config)),remaining=total-spent,pct=total>0?spent/total*100:0;
const summary=[[tx('sum'),total?fmt(total):tx('unset')],[tx('spent'),fmt(spent)],[tx('left'),total?fmt(remaining):tx('unset')],[tx('rate'),total?pct.toFixed(1)+'%':tx('unset')]];
$('v720Summary').innerHTML=summary.map(([k,v])=>'<div class="v720-card"><small>'+esc(k)+'</small><strong>'+esc(v)+'</strong></div>').join('');
$('v720Suggested').innerHTML=Object.keys(used).filter(n=>!keys.includes(n)).sort((a,b)=>a.localeCompare(b)).map(n=>'<option value="'+esc(n)+'"></option>').join('');
const unmatched=Object.entries(used).filter(([n,amount])=>!keys.includes(n)&&amount!==0).sort((a,b)=>b[1]-a[1]);
$('v720Unbudgeted').innerHTML=unmatched.length?'<h3>'+esc(tx('unbudgeted'))+'</h3><div class="v720-muted">'+unmatched.map(([n,amount])=>'<div class="v720-unmatched-row"><span>'+esc(n)+'</span><strong>'+esc(fmt(amount))+'</strong><button type="button" class="btn secondary v720-quick-add" data-quick-category="'+esc(n)+'" aria-label="'+esc(tx('quickAdd')+' '+n)+'">'+esc(tx('quickAdd'))+'</button></div>').join('')+'</div>':'';
$('v720Categories').innerHTML=keys.length?keys.map((name,i)=>{const actual=used[name]||0,raw=draft.values[name],cap=Number(raw||0),percent=cap>0?actual/cap*100:0;return '<div class="v720-row"><div><label for="v720Cat'+i+'"><strong>'+esc(name)+'</strong></label><div class="v720-muted">'+esc(tx('actual'))+': '+esc(fmt(actual))+(cap>0?' / '+esc(fmt(cap)):'')+(cap>0&&actual>cap?' · '+esc(tx('over')):cap>0&&percent>=80?' · '+esc(tx('warn')):'')+'</div>'+(cap>0?'<div class="v720-bar"><div class="v720-fill '+(percent>100?'over':percent>=80?'warn':'')+'" style="width:'+Math.min(100,percent)+'%"></div></div>':'')+'</div><input id="v720Cat'+i+'" data-budget-category="'+esc(name)+'" type="number" min="0" step="0.01" inputmode="decimal" aria-label="'+esc(tx('limit')+' '+name)+'" value="'+esc(raw??'')+'" placeholder="'+esc(tx('limit'))+'"><button type="button" class="btn secondary v720-edit" data-edit-category="'+esc(name)+'" aria-label="'+esc(tx('edit')+' '+name)+'">'+esc(tx('edit'))+'</button><button type="button" class="btn secondary v720-remove" data-remove-category="'+esc(name)+'" aria-label="'+esc(tx('remove')+' '+name)+'">'+esc(tx('remove'))+'</button></div>'}).join(''):'<p class="hint">'+esc(tx('emptyCats'))+'</p>';
renderRecovery();renderInsights();
}
function monthShift(ym,delta){const [y,m]=ym.split('-').map(Number);const d=new Date(y,m-1+delta,1);return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')}
function totalsByMonth(ym){const used={};for(const t of ledger()){if(t.type!=='expense'||typeof t.date!=='string'||!t.date.startsWith(ym))continue;const name=String(t.category||tx('uncat'));const amount=Number(t.amount);if(!Number.isFinite(amount))continue;used[name]=(used[name]||0)+amount}return {used,spent:Object.values(used).reduce((a,b)=>a+b,0)}}
function renderInsights(){const budgets=read(),year=month.slice(0,4),months=Array.from({length:6},(_,i)=>monthShift(month,i-5));
$('v720MonthlyTitle').textContent=tx('monthlyCompare');$('v720CompareHint').textContent=tx('comparisonHint');
$('v720MonthlyHead').innerHTML='<tr>'+[tx('monthCol'),tx('budgetCol'),tx('actualCol'),tx('difference'),tx('usageCol')].map(x=>'<th>'+esc(x)+'</th>').join('')+'</tr>';
$('v720MonthlyBody').innerHTML=months.map(m=>{const b=budgets[m],actual=totalsByMonth(m).spent,amount=budgetTotal(b),has=amount>0;return '<tr'+(m===month?' class="v720-current"':'')+'><td>'+esc(m)+'</td><td>'+esc(has?fmt(amount):tx('budgetNotSet'))+'</td><td>'+esc(fmt(actual))+'</td><td class="'+(has&&amount<actual?'v720-negative':'')+'">'+esc(has?fmt(amount-actual):'—')+'</td><td class="'+(has&&actual>amount?'v720-negative':'')+'">'+esc(has?(actual/amount*100).toFixed(1)+'%':'—')+'</td></tr>'}).join('');
$('v720CompareTitle').textContent=tx('categoryCompare');$('v720CategoryHead').innerHTML='<tr>'+[tx('name'),tx('actualCol'),tx('vsPrevious')].map(x=>'<th>'+esc(x)+'</th>').join('')+'</tr>';
const current=totalsByMonth(month).used,previous=totalsByMonth(monthShift(month,-1)).used;
const cats=Array.from(new Set([...Object.keys(current),...Object.keys(previous)])).sort((a,b)=>(current[b]||0)-(current[a]||0));
$('v720CategoryBody').innerHTML=cats.length?cats.map(name=>{const diff=(current[name]||0)-(previous[name]||0);const change=diff>0?tx('increase'):diff<0?tx('decrease'):tx('unchanged');return '<tr><td>'+esc(name)+'</td><td>'+esc(fmt(current[name]||0))+'</td><td class="'+(diff>0?'v720-negative':'')+'">'+esc(change+' '+fmt(Math.abs(diff)))+'</td></tr>'}).join(''):'<tr><td colspan="3">'+esc(tx('none'))+'</td></tr>';
$('v720OverTitle').textContent=tx('overCategories');const active=budgets[month]||{},configured=active.categories||{};
const exceeded=Object.entries(configured).filter(([name,limit])=>Number(limit)>0&&(current[name]||0)>Number(limit)).sort((a,b)=>((current[b[0]]||0)-Number(b[1]))-((current[a[0]]||0)-Number(a[1])));
$('v720OverList').innerHTML=exceeded.length?exceeded.map(([name,limit])=>'<div class="v720-unmatched-row"><span>'+esc(name)+'</span><strong class="v720-negative">'+esc(fmt((current[name]||0)-Number(limit)))+'</strong></div>').join(''):'<p class="hint">'+esc(tx('noOver'))+'</p>';
$('v720AnnualTitle').textContent=tx('annualSummary')+' · '+year;let annualBudget=0,annualSpent=0,budgetedMonths=0;
for(let i=1;i<=12;i++){const ym=year+'-'+String(i).padStart(2,'0');annualSpent+=totalsByMonth(ym).spent;const b=budgets[ym];if(b&&budgetTotal(b)>0){annualBudget+=budgetTotal(b);budgetedMonths++}}
$('v720AnnualSummary').innerHTML=[[tx('annualBudget'),budgetedMonths?fmt(annualBudget):tx('budgetNotSet')],[tx('annualSpent'),fmt(annualSpent)],[tx('budgetedMonths'),tx('coverageValue').replace('{n}',String(budgetedMonths))]].map(([label,value])=>'<div class="v720-card"><small>'+esc(label)+'</small><strong>'+esc(value)+'</strong></div>').join('');
$('v720CoverageHint').textContent=tx('coverageHint');
}
function save(){
 const totalEl=$('v720Total'),v=totalEl.value.trim(),total=v===''?0:Number(v);
 if(!Number.isFinite(total)||total<0){$('v720Status').textContent=tx('invalid');return false}
 // The draft is the source of truth for add/rename/delete, because the rendered
 // inputs have not yet changed at the moment the user clicks a CRUD button.
 // Reading the stale DOM here silently resurrected deleted/renamed categories.
 if(!draft||draft.month!==month)categories();
 const cats={};
 for(const name of draft.names){
  const val=draft.values[name],num=val===''||val==null?0:Number(val);
  if(!Number.isFinite(num)||num<0){$('v720Status').textContent=tx('invalid');return false}
  cats[name]=num;
 }
 const sum=Object.values(cats).reduce((a,x)=>a+(x>0?x:0),0);
 const effectiveTotal=total>0?total:sum;
 const all=read();all[month]={...all[month],total:effectiveTotal,categories:cats};
 try{
  writeBudgets(all);clearDeletedWhenSaved(month,cats);
  draft=null;dirty=false;draftTotal=null;render();
  $('v720Status').textContent=tx('saved');return true;
 }catch(e){$('v720Status').textContent=e.message;return false}
}
function copy(){if(!confirm(tx('copyAsk')))return;
// Persist the on-screen values first so copying never silently drops pending edits.
if(!save())return;
const all=read(),v=all[month];if(!v)return;
const [y,m]=month.split('-').map(Number),d=new Date(y,m,1),next=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0');all[next]=JSON.parse(JSON.stringify(v));try{writeBudgets(all);month=next;draft=null;dirty=false;draftTotal=null;$('v720Month').value=month;render();$('v720Status').textContent=tx('copied')}catch(e){$('v720Status').textContent=e.message}}
$('v720Month').addEventListener('change',()=>{const next=$('v720Month').value||month;if(next===month)return;if(dirty&&!confirm(tx('unsaved'))){$('v720Month').value=month;return}month=next;draft=null;dirty=false;draftTotal=null;render();$('v720Status').textContent=''});$('v720Add').addEventListener('click',()=>{const el=$('v720NewName'),name=el.value.trim();if(!name){$('v720Status').textContent=tx('emptyName');return}captureDraft();if(draft.names.some(x=>x.toLocaleLowerCase()===name.toLocaleLowerCase())){$('v720Status').textContent=tx('duplicate');return}draft.names.push(name);draft.values[name]='';dirty=true;el.value='';save();$('v720Status').textContent=tx('saved')});$('v720NewName').addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();$('v720Add').click()}});$('v720Unbudgeted').addEventListener('click',e=>{
const button=e.target.closest('[data-quick-category]');if(!button)return;
const name=button.dataset.quickCategory;captureDraft();
if(draft.names.some(x=>x.toLocaleLowerCase()===name.toLocaleLowerCase())){$('v720Status').textContent=tx('duplicate');return}
draft.names.push(name);draft.values[name]='';dirty=true;save();
const target=Array.from(root.querySelectorAll('[data-budget-category]')).find(el=>el.dataset.budgetCategory===name);
if(target)target.focus();$('v720Status').textContent=tx('saved');
});
$('v720Categories').addEventListener('click',e=>{
const edit=e.target.closest('[data-edit-category]');const remove=e.target.closest('[data-remove-category]');if(!edit&&!remove)return;
captureDraft();
if(edit){const old=edit.dataset.editCategory;const answer=prompt(tx('editAsk'),old);if(answer===null)return;const name=answer.trim();if(!name){$('v720Status').textContent=tx('emptyName');return}if(draft.names.some(x=>x!==old&&x.toLocaleLowerCase()===name.toLocaleLowerCase())){$('v720Status').textContent=tx('duplicate');return}if(name!==old){draft.names=draft.names.map(x=>x===old?name:x);draft.values[name]=draft.values[old];delete draft.values[old];dirty=true;updateDeleted(month,old,true);if(save()){$('v720Status').textContent=tx('renamedSaved')}return}render();return}
if(remove){if(!confirm(tx('removeAsk')))return;const name=remove.dataset.removeCategory;
 const before=Object.values(draft.values).reduce((sum,v)=>sum+(Number(v)>0?Number(v):0),0);
 const currentTotal=Number($('v720Total').value)||0;
 draft.names=draft.names.filter(x=>x!==name);delete draft.values[name];dirty=true;
 // If the total was exactly the sum of category limits, keep the total in sync with removal.
 if(Math.abs(currentTotal-before)<0.01){
  const next=Object.values(draft.values).reduce((sum,v)=>sum+(Number(v)>0?Number(v):0),0);
  $('v720Total').value=String(next);draftTotal=String(next);
 }
 if(save()){updateDeleted(month,name,true);renderRecovery();$('v720Status').textContent=tx('removedSaved')}
 else{$('v720Status').textContent=tx('unsavedNearby')}
 }
});
$('v720Categories').addEventListener('input',e=>{if(e.target.matches('[data-budget-category]')){dirty=true;captureDraft()}});
$('v720Total').addEventListener('input',()=>{dirty=true;draftTotal=$('v720Total').value;});
$('v720Categories').addEventListener('change',e=>{if(e.target.matches('[data-budget-category]')){captureDraft();if(save())$('v720Status').textContent=tx('autoSaved')}});$('v720Total').addEventListener('change',()=>{if(save())$('v720Status').textContent=tx('autoSaved')});
$('v8111Restore').addEventListener('click',restoreMissingBudgets);$('v8111Import').addEventListener('click',importBudgetFile);$('v8112SaveCategories').addEventListener('click',save);$('v720Save').addEventListener('click',save);$('v720Copy').addEventListener('click',copy);
nav.addEventListener('click',()=>{render()});document.addEventListener('click',e=>{if(e.target.closest('[data-tab]')&&e.target!==nav){nav.textContent='▤ '+tx('tab')}});
// Read fresh ledger on tab opening, avoiding observers or repeated DOM writes.
carryCurrentBudget();render();// Preserve the current app header; budget module must not overwrite it.
})();
