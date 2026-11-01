/* MyMoney V7.9.4: English UI plus display-only alias translations. */
(()=>{'use strict';
const map={
'借款管理功能':'Loan Management','借款管理':'Loan Management','借入管理':'Borrowed Funds','借出管理':'Money Lent','收款与还款记录':'Collections & Repayment History',
'选择一项才显示对应表单。旧收款记录会原样显示在借出管理中，不会重复迁移成新借款。':'Select a section to display its form. Existing collection records remain under Money Lent and will not be duplicated.',
'本机安全储存':'Stored securely on this device','首页':'Home','记账':'Transactions','负债':'Debts','预算':'Budget','账单与提醒':'Bills & Reminders','报表':'Reports','设置与备份':'Settings & Backup',
'我的':'My','首页统计月份':'Dashboard Month','自动显示当前月份，可选择以前的月份查看历史记录。':'Defaults to the current month; select an earlier month for past records.',
'今天也来管理好每一笔钱':'Stay on top of your finances','你的收入、支出与负债，一眼掌握。':'View your income, expenses, and debts at a glance.',
'◉ 隐藏金额':'◉ Hide amounts','上月结转账户余额':'Previous Month Closing Balance','本月收入':'This Month Income','本月总流出（支出＋负债还款＋借款流出）':'Total Monthly Outflow (Expenses + Repayments + Loans)',
'本月可用结余（含结转及借款收付）':'Available Monthly Balance (Including Carryover and Loans)','剩余总负债':'Total Outstanding Debt','本月收支概况':'Monthly Cash Flow Summary','显示本月收支概况 ▼':'Show Monthly Summary ▼','隐藏本月收支概况 ▲':'Hide Monthly Summary ▲',
'暂无本月记录':'No records this month','本月全部交易':'All Transactions This Month','显示全部交易 ▼':'Show All Transactions ▼','账户余额概览':'Account Balances','显示账户余额概览 ▼':'Show Account Balances ▼','负债概览':'Debt Overview','显示负债概览 ▼':'Show Debt Overview ▼',
'交易、账户与余额':'Transactions, Accounts & Balances','统一管理收入、支出、内部转账、账户新增与余额查看':'Manage income, expenses, transfers, accounts and balances in one place.',
'新增记录':'New Entry','选择操作类型':'Select transaction type','▣ 新增账户':'▣ Add Account','＋ 收入':'＋ Income','－ 支出':'－ Expense','⇄ 内部转账':'⇄ Internal Transfer','▤ 余额':'▤ Balances',
'内部转账':'Internal Transfer','填写支出金额、日期及类别，保存后会记录为支出。':'Enter an amount, date and category, then save the expense.','新增收支记录':'New Income or Expense','类型':'Type','日期':'Date','金额（RM）':'Amount (RM)','类别':'Category','收入':'Income','支出':'Expense',
'餐饮':'Food & Dining','交通':'Transport','购物':'Shopping','房租/房贷':'Rent / Mortgage','水电网费':'Utilities & Internet','医疗':'Medical','薪水':'Salary','奖金':'Bonus','生意收入':'Business Income','家庭':'Family','其他':'Other',
'关联账户':'Linked Account','选择账户':'Select Account','不关联账户（旧版模式）':'No Linked Account (Legacy)','付款方式':'Payment Method','现金':'Cash','银行卡':'Debit Card','信用卡':'Credit Card','银行转账':'Bank Transfer','电子钱包':'E-Wallet','备注（可选）':'Notes (Optional)','备注':'Notes',
'保存记录':'Save Entry','取消编辑':'Cancel Editing','🎨 自定义支出类别与图标':'🎨 Custom Expense Categories & Icons','类别名称':'Category Name','选择图标':'Choose Icon','上传自己的图标':'Upload Custom Icon','恢复默认图标':'Restore Default Icon','新增类别':'Add Category','新增内部转账':'New Internal Transfer',
'转出账户':'From Account','转入账户':'To Account','转账日期':'Transfer Date','保存转账':'Save Transfer','转账记录':'Transfer History','显示转账记录 ▼':'Show Transfer History ▼','暂无转账':'No Transfers','账户':'Accounts',
'新增账户':'Add Account','账户名称':'Account Name','账户类别':'Account Type','银行':'Bank','电子银行':'Digital Bank','启用时余额（RM）':'Opening Balance (RM)','账户图标':'Account Icon','🏦 默认图标':'🏦 Default Icon','保存账户':'Save Account','已新增账户':'Added Accounts','暂无已新增账户':'No Accounts Added','余额':'Balance','显示账户清单 ▼':'Show Account List ▼','银行账户独立月度结转':'Monthly Account Carryover','显示月度明细 ▼':'Show Monthly Details ▼',
'全部账户':'All Accounts','结算月份':'Settlement Month','← 上个月':'← Previous Month','下个月 →':'Next Month →','正在加载结转数据…':'Loading carryover data…','收入记录':'Income Records','显示记录 ▼':'Show Records ▼','月份筛选':'Filter by Month','类型筛选':'Filter by Type','全部':'All',
'负债管理':'Debt Management','新增负债 / 负债清单':'New Debt / Debt List','新增还款记录 / 详细还款':'Add Repayment / Detailed History','新增负债':'Add Debt','负债名称':'Debt Name','负债类别':'Debt Category','个人借款':'Personal Borrowing','个人贷款':'Personal Loan','汽车贷款':'Car Loan','房屋贷款':'Home Loan','原始欠款（RM）':'Original Debt (RM)','记录日期':'Record Date','使用默认图标':'Use Default Icon','计算方式':'Calculation Method','无利息':'Interest Free','递减余额利息（按月估算）':'Reducing Balance Interest (Monthly Estimate)','固定利息（Flat Rate）':'Fixed Interest (Flat Rate)','信用卡按月计息（估算）':'Credit Card Monthly Interest (Estimate)','年利率（%）':'Annual Interest Rate (%)','贷款总期数（月）':'Loan Term (Months)','计划每月还款（RM）':'Planned Monthly Repayment (RM)','预计首期还款日':'Estimated First Repayment Date',
'保存负债':'Save Debt','负债清单':'Debt List','显示负债清单':'Show Debt List','暂无负债':'No Debts','新增还款记录':'Add Repayment','选择负债':'Select Debt','还款日期':'Repayment Date','还款金额（RM）':'Repayment Amount (RM)','本次利息（RM）':'Interest This Payment (RM)','本次偿还本金（RM）':'Principal This Payment (RM)','扣款账户':'Payment Account','保存还款':'Save Repayment','暂无还款记录':'No Repayment Records','📒 每笔负债详细还款记录':'📒 Detailed Debt Repayment History','独立还款计划与详细明细':'Repayment Plan & Detailed Breakdown',
'借款日期':'Loan Date','借入':'Borrowed','借出':'Lent','借入归还':'Borrowing Repayment','借出收回':'Loan Collection','借款金额':'Loan Amount','选择借款':'Select Loan','收款日期':'Collection Date','收款金额（RM）':'Collected Amount (RM)','借款清单':'Loan List','保存借款':'Save Loan','归还金额（RM）':'Repayment Amount (RM)',
'年度报表':'Annual Report','月度分析':'Monthly Analysis','财务报表':'Financial Reports','年度财务报表':'Annual Financial Report','年度收支分类':'Annual Income & Expense Categories','年末账户明细':'Year-End Account Details','年末负债与借款概览':'Year-End Debt & Loan Overview','每月收支、借款与期末余额':'Monthly Cash Flow, Loans & Closing Balances',
'报表年度':'Report Year','账户范围':'Account Scope','账户筛选':'Account Filter','选择月份':'Select Month','分析类型':'Analysis Type','导出报表 CSV':'Export Report CSV','导出详细年度 CSV':'Export Detailed Annual CSV','月度收支分析 · 每日明细':'Monthly Cash Flow Analysis · Daily Details','每日收支日历':'Daily Cash Flow Calendar','类别占比':'Category Breakdown','普通收入':'Regular Income','普通支出':'Regular Expenses','负债还款':'Debt Repayments','借入到账':'Borrowed Funds Received','借出款项':'Loans Given','借出收回':'Loan Repayments Received','总流出':'Total Outflow','期初':'Opening Balance','期末':'Closing Balance','月份':'Month',
'编辑':'Edit','删除':'Delete','取消':'Cancel','保存':'Save','确认':'Confirm','显示':'Show','隐藏':'Hide','查看':'View','返回':'Back','新增':'Add','开启':'Enabled','关闭':'Disabled','自动估算':'Automatic Estimate','利息自动计算':'Automatic Interest Calculation','逾期费用自动计算':'Automatic Late Fee Calculation','银行实际费用核对入账':'Bank Fee Reconciliation & Posting',
'收款记录':'Collection Records','收款与Repayment History':'Collections & Repayment History','请定期备份 JSON':'Back up JSON regularly'
};
const phrases=[
['🔒 数据只保存在当前浏览器/设备。清除浏览器数据或换手机前，请先到「备份」导出 JSON 文件。','🔒 Your data is saved only in this browser/device. Export a JSON backup before clearing browser data or changing phones.'],
['在这里新增银行、现金及电子钱包账户。每笔收入、支出或转账都可选择对应账户。','Add bank, cash and e-wallet accounts here. Link each transaction to its account.'],
['这里会显示全部账户当前余额，以及各银行／钱包／现金账户的独立余额。','View your total balance and individual bank, e-wallet and cash account balances.'],
['首次建立账户时填当前实际余额。以前的收支记录不会自动归属到新账户，避免重复计算。日后可在收支记录中选择账户。','When creating an account, enter its current balance. Existing transactions will not be automatically linked or double counted.'],
['每个账户独立显示：上月结转、本月收入、本月支出、内部转账、负债还款、收款到账及月底余额。结转只用于查看，不会新增重复收入。','Each account shows carryover, income, expenses, transfers, debt repayments, collections and closing balance. Carryover does not create duplicate income.'],
['转账仅在账户之间移动余额，不计入收入或支出。手续费请另外记为支出并选择付款账户。','Transfers move money between accounts and are not income or expenses. Record fees separately as expenses.'],
['这里自动列出已经保存的所有银行、电子银行、电子钱包和现金账户，防止重复新增。点击「编辑」可修改账户资料。','All saved bank, digital bank, e-wallet and cash accounts appear here. Select Edit to update an account.']
];
// User-entered Chinese name display aliases (source records remain unchanged).
// Only known, explicitly recognizable names are mapped; unknown names are not guessed.
const userNameAliases={
 '欠妈妈':'Loan from Mom','欠媽咪':'Loan from Mom','欠妈咪':'Loan from Mom',
 '欠mama':'Loan from Mom','欠Mama':'Loan from Mom',
 '欠二姐借款':'Loan from Second Sister','欠二姐':'Loan from Second Sister',
 '欠爸爸':'Loan from Dad','欠父亲':'Loan from Dad','欠朋友':'Loan from Friend',
 '汽车贷款':'Car Loan','汽車貸款':'Car Loan'
};
const extraPhrases=[
 ['上月结转Account Balance','Previous Month Closing Account Balance'],
 ['本月月末Total Outstanding Debt','Month-end Total Outstanding Debt'],
 ['本月月末剩余总负债','Month-end Total Outstanding Debt'],
 ['显示Monthly Summary','Show Monthly Summary'],['隐藏Monthly Summary','Hide Monthly Summary'],
 ['隐藏Debt Overview','Hide Debt Overview'],['显示Debt Overview','Show Debt Overview'],
 ['Home统计月份','Home Reporting Month'],['返回本月','Return to Current Month'],
 ['当月月份：本月 · 切换月份只影响Home显示，不修改任何记录。','Reporting month: current month. Changing it only changes the Home display; no records are modified.'],
 ['当前月份：本月 · 切换月份只影响Home显示，不修改任何记录。','Reporting month: current month. Changing it only changes the Home display; no records are modified.'],
 ['上月结转','Previous Month Carryover'],['本月月末','Month-end'],
 ['所选月份','Selected Month'],['本月结余（含借款收付）','Monthly Balance (Including Loan Cash Flows)'],
 ['隐藏','Hide'],['显示','Show'],['截至','As of'],
 ['本月全部交易','All Transactions This Month'],['本月交易','Transactions This Month'],
 ['本月负债概览','Monthly Debt Overview'],['负债还款','Debt Repayments'],
 ['借出款项','Loans Given'],['借入归还','Borrowing Repayments'],
 ['借入到账','Borrowed Funds Received'],['借出收回','Loan Repayments Received'],
 ['年度收支分类','Annual Income & Expense Categories'],['年末账户明细','Year-end Account Details'],
 ['年末负债与借款概览','Year-end Debts & Loans Overview'],
 ['每月收支、借款与期末余额','Monthly Cash Flows, Loans & Closing Balances'],
 ['每日收支日历','Daily Income & Expense Calendar'],['月度收支分析','Monthly Cash Flow Analysis'],
 ['导出详细年度 CSV','Export Detailed Annual CSV'],
 ['当前月份','Current Month'],['全年','Annual'],['年末','Year-end']
];
const isEn=()=>{try{const p=JSON.parse(localStorage.getItem('mymoney-v604-preferences')||'{}');return /^en/i.test(p.lang||'')}catch(e){return /^en/i.test(document.documentElement.lang||'')}};
const originals=new WeakMap();let busy=false;
function translatedText(source, isUserName){
 const trimmed=source.trim();
 if(isUserName){return userNameAliases[trimmed]||trimmed;}
 let v=map[trimmed];
 if(!v){v=trimmed;
  for(const [zh,en] of extraPhrases)v=v.replaceAll(zh,en);
  for(const [zh,en] of phrases)v=v.replaceAll(zh,en);
  for(const [zh,en] of Object.entries(map).sort((a,b)=>b[0].length-a[0].length))if(zh.length>=3)v=v.replaceAll(zh,en);
 }
 return v;
}

function walk(root){if(!isEn()||busy)return;busy=true;try{
 const tw=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let n;
 while(n=tw.nextNode()){
  if(!n.nodeValue||!/[\u3400-\u9fff]/.test(n.nodeValue))continue;
  const el=n.parentElement;if(!el||el.closest('script,style,textarea,[contenteditable="true"],[data-no-translate]'))continue;
  const original=originals.get(n)||n.nodeValue;
  const trimmed=original.trim();
  const recordContext=!!el.closest('#txList,#debtList,#paymentList,#loanList,#v58History,#v58Plan');
  // For record cards, only translate a known Chinese title; never translate notes, amounts, or inputs.
  if(recordContext&&!userNameAliases[trimmed])continue;
  const translated=translatedText(original,recordContext);
  if(translated!==trimmed){originals.set(n,original);n.nodeValue=original.replace(trimmed,translated)}
 }
 for(const el of root.querySelectorAll?.('[placeholder],[aria-label],[title]')||[]){for(const a of ['placeholder','aria-label','title']){const val=el.getAttribute(a);if(!val||!/[\u3400-\u9fff]/.test(val))continue;let v=val;for(const [zh,en] of Object.entries(map).sort((a,b)=>b[0].length-a[0].length))v=v.replaceAll(zh,en);el.setAttribute(a,v)}}
 }finally{busy=false}}
function restore(){const t=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;while(n=t.nextNode()){const v=originals.get(n);if(v!==undefined){n.nodeValue=v;originals.delete(n)}}}
function update(){if(isEn())walk(document.body);else restore()}
// Throttled translations: do not observe characterData, as writing translated text
// into the DOM can trigger a self-sustaining mutation/translation loop.
let scheduled=false, last=0;
function scheduleUpdate(){
 if(scheduled)return; scheduled=true;
 setTimeout(()=>{scheduled=false;last=Date.now();update()},350);
}
document.addEventListener('DOMContentLoaded',()=>{
 update();
 new MutationObserver(mutations=>{
  if(!isEn())return;
  // Changes to text nodes caused by our own translations are intentionally ignored.
  if(mutations.some(m=>[...m.addedNodes].some(n=>n.nodeType===1)))scheduleUpdate();
 }).observe(document.body,{childList:true,subtree:true});
 document.addEventListener('click',()=>scheduleUpdate(),{passive:true});
 document.addEventListener('change',()=>scheduleUpdate(),{passive:true});
 // Low-frequency fallback for dynamic text edits.
 setInterval(()=>{if(!document.hidden&&Date.now()-last>=10000)scheduleUpdate()},12000);
})
})();
