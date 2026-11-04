/* MyMoney V7.10.14 — targeted credit-card translations, including dynamically rendered results. */
(()=>{'use strict';
const zh=/[\u3400-\u9fff]/;
function lang(){try{let p=JSON.parse(localStorage.getItem('mymoney-v604-preferences')||'{}');return /^en/i.test(p.lang||'')?'en':/^ms/i.test(p.lang||'')?'ms':'zh'}catch(e){return 'zh'}}
const fixed={
 '目前信用卡剩余欠款':'Current Credit Card Outstanding Balance',
 '目前Credit CardOutstanding Balance':'Current Credit Card Outstanding Balance',
 '当前信用卡剩余欠款':'Current Credit Card Outstanding Balance',
 '加：预计新增 Finance Charges':'Add: Estimated Finance Charges',
 '加：预计Add Finance Charges':'Add: Estimated Finance Charges',
 '保险计费基数（自动）':'Insurance Premium Base (Automatic)',
 '保险计费基数（手动）':'Insurance Premium Base (Manual)',
 '保险状态／费率':'Insurance Status / Rate',
 '开启':'Enabled','关闭':'Disabled',
 '预估金额，不代表实际收取。已包含在当前欠款中的旧保费不应再次入账。':'This is an estimate, not an actual bank charge. Do not post premiums already included in the outstanding balance again.',
 '预估Amount，不代表实际收取. 已包含在当前欠款中的旧保费不应再次入账':'This is an estimate, not an actual bank charge. Do not post premiums already included in the outstanding balance again.',
 '估计Amount，不代表实际收取。已包含在当前欠款中的旧保费不应再次入账。':'This is an estimate, not an actual bank charge. Do not post premiums already included in the outstanding balance again.',
 '账单最低还款':'Statement Minimum Payment',
 '账单最低Repayment':'Statement Minimum Payment',
 '还差最低还款':'Remaining Minimum Payment',
 '保险计费基数':'Insurance Premium Base',
 '自动预计 Credit Protector Plus':'Estimated Credit Protector Plus',
 '已按银行账单确认':'Confirmed Against Bank Statement',
 '删除错误费用':'Delete Incorrect Charge',
 '查看／编辑':'View / Edit',
 '尚未保存账单。':'No saved statements.',
 '此卡尚无确认的银行费用。':'No confirmed bank charges for this card.',
 '保险状态 / 费率':'Insurance Status / Rate',
 '请填写有效保险费率／估算金额。':'Enter a valid insurance rate and estimate amount.',
 '最低应还':'Minimum Due', '账单':'Statement', '截止：':'Due: ',
 '留空：当前卡债＋预计Add Finance Charges':'Leave blank to use the current outstanding balance plus estimated finance charges',
 '留空：当前卡债＋预计新增 Finance Charges':'Leave blank to use the current outstanding balance plus estimated finance charges',
 '例如 13.08':'Example: 13.08',
 '例如 20.13；无罚款可留空':'Example: 20.13; leave blank if no late fee',
 '原定Monthly Payment':'Original Scheduled Monthly Payment',
 '例如：超市消费':'Example: Supermarket purchase'
};
const statementRe=/^(?:截止：|Due:\s*)(\d{4}-\d\d-\d\d)\s*·\s*(?:最低应还|Minimum Due)\s*(RM\s*[\d,.]+)\s*·\s*(?:账单|Statement)\s*(RM\s*[\d,.]+)$/;
const regions=['v751PremiumResult','v751StatementHistory','v751FeeHistory','v751LateResult'];
const staticRestore=new WeakMap();
const staticHintText='CIMB Credit Protector Plus standard premium: RM0.60 per RM100 of eligible outstanding balance per month (0.60%). The outstanding card balance may differ from the bank\'s actual premium base. If your bank statement differs, override the base or record the actual premium charged by the bank.';
function cleanText(t){const v=t.trim();if(fixed[v])return fixed[v];
 let m=v.match(statementRe);if(m)return `Due: ${m[1]} · Minimum Due ${m[2]} · Statement ${m[3]}`;
 if(v.startsWith('CIMB Credit Protector Plus 标准费率：'))return staticHintText;
 if(v.startsWith('本期已登记还款（截至 '))return v.replace(/^本期已登记还款（截至 /,'Payments Recorded (as of ').replace(/，限到期前有效）/,'; only payments before due date count)');
 let out=v.replace(/账单 RM(?=\s*[\d,.]+)/g,'Statement RM').replace(/保险计费基数（自动）/g,'Insurance Premium Base (Automatic)').replace(/保险计费基数（手动）/g,'Insurance Premium Base (Manual)').replace(/开启(?=\s*[·•])/g,'Enabled');
 return out;
}
function translateRegion(root){if(!root)return;const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let n;while(n=walker.nextNode()){
 if(!n.nodeValue||!zh.test(n.nodeValue))continue;
 const e=n.parentElement;if(!e||e.closest('input,textarea,[contenteditable]'))continue;
 const original=n.nodeValue;const translated=cleanText(original);
 if(translated!==original.trim())n.nodeValue=original.replace(original.trim(),translated);
}}
function translateStatic(){
 for(const id of ['v751ActualPremium','v751ActualLate','v751PremiumBase','v753PurchaseNote']){
 const e=document.getElementById(id);if(!e)continue;
 if(!staticRestore.has(e))staticRestore.set(e,e.getAttribute('placeholder')||'');
 let v=fixed[staticRestore.get(e)];if(v&&e.placeholder!==v)e.placeholder=v;
 }
 const note=document.querySelector('.v751-note');if(note){if(!staticRestore.has(note))staticRestore.set(note,note.textContent);
   if(note.textContent!==staticHintText)note.textContent=staticHintText;
 }
 const statement=document.getElementById('v751StatementHistory');if(statement)translateRegion(statement);
}
function restoreStatic(){for(const id of ['v751ActualPremium','v751ActualLate','v751PremiumBase','v753PurchaseNote']){
 const e=document.getElementById(id);if(e&&staticRestore.has(e)&&e.placeholder!==staticRestore.get(e))e.placeholder=staticRestore.get(e);
 }const note=document.querySelector('.v751-note');if(note&&staticRestore.has(note)&&note.textContent!==staticRestore.get(note))note.textContent=staticRestore.get(note);}
let pending=false, busy=false;
function apply(){if(busy)return;busy=true;try{if(lang()==='en'){
 translateStatic();for(const id of regions)translateRegion(document.getElementById(id));
 }else restoreStatic();}finally{busy=false}}
function schedule(){if(pending)return;pending=true;setTimeout(()=>{pending=false;apply()},90)}
function init(){apply();
 const roots=[...regions.map(id=>document.getElementById(id)),document.querySelector('.v751-note')].filter(Boolean);
 for(const e of roots)new MutationObserver(()=>{if(!busy&&lang()==='en')schedule()}).observe(e,{subtree:true,childList:true,characterData:true});
 document.addEventListener('change',schedule,{passive:true});document.addEventListener('click',schedule,{passive:true});
 setInterval(()=>{if(!document.hidden)schedule()},4000);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
