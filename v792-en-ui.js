/* MyMoney V7.9.8: English UI plus display-only alias translations. */
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
 '汽车贷款':'Car Loan','汽車貸款':'Car Loan',
 'PPB 汽车货款':'PPB Car Loan','PPB 汽车贷款':'PPB Car Loan',
 '欠maan':'Loan from Maan','欠妈咪':'Loan from Mom','欠妈咪借款':'Loan from Mom'
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
// System-generated mixed-language strings and common user-entered notes.
const fixes=[
 ['本月All交易','All Transactions This Month'],
 ['HideAll交易','Hide All Transactions'],['ShowAll交易','Show All Transactions'],
 ['交易、账户与Balance','Transactions, Accounts & Balances'],
 ['统一管理Income、Expense、Internal Transfer、账户Add与Balance查看','Manage Income, Expenses, Transfers, Accounts and Balances in one place'],
 ['Loan Management · 借入 / 借出','Loan Management · Borrowing / Lending'],
 ['借入增加收款Account Balance，借出减少付款Account Balance；归还或收回时反向更新。这里独立于原有Debts和Collection Records，避免重复入账。','Borrowing increases the receiving account balance, while lending reduces the paying account balance. Repayments reverse the cash flow. These records are managed separately to prevent double counting.'],
 ['借款Type','Loan Type'],['对方姓名 / 借款名称','Other Party / Loan Name'],
 ['借入（我向别人借钱）','Borrow (Money Received)'],['借出（我借钱给别人）','Lend (Money Given)'],
 ['借款Date','Loan Date'],['约定归还Date（Optional）','Expected Repayment Date (Optional)'],
 ['Save借款','Save Loan'],['登记Repayment / 收款','Record Repayment / Collection'],
 ['借入登记我归还的Amount，借出登记对方归还的Amount；Optional择Bank账户自动更新Balance。','For borrowed funds, enter your repayment. For money lent, enter what you received. Select the linked bank account to update its balance.'],
 ['Repayment / 收款Date','Repayment / Collection Date'],['归还Amount (RM)','Repayment Amount (RM)'],
 ['Save Repayment / 收款','Save Repayment / Collection'],
 ['借款Repayment历史','Loan Repayment History'],['暂无Repayment或Collection Records','No Repayment or Collection Records'],
 ['借款概览','Loan Overview'],['借入与借出记录','Borrowing & Lending Records'],
 ['原Amount','Original Amount'],['已归还','Repaid'],['剩余','Remaining'],
 ['月末Total Account Balance','Month-end Total Account Balance'],
 ['上月结转Account Balance','Previous Month Closing Account Balance'],
 ['不知开销','Miscellaneous Expense'],['10份供期','10 Installments'],['10份供款','10 Installments'],
 ['Payment期','Payment Installment'],['供期','Installment'],['不知开销','Uncategorized Expense'],
 ['暂 ','No '],['欠二姐借款','Loan from Second Sister'],
 ['PPB 汽车货款','PPB Car Loan'],['PPB 汽车贷款','PPB Car Loan']
];
// V7.9.6: precise additional English translations. These affect display only.
const completeEnglish={
'欠maan':'Loan from Maan','欠爸爸':'Loan from Dad','欠妈咪':'Loan from Mom',
'不知开销':'Unspecified Expense','10份供期':'10 Installments','10月分':'October',
'选择操作Type':'Select Transaction Type','Hide记录 ▲':'Hide Records ▲',
'扣款':'Deduction','选择Bank':'Select Bank','Credit Card名称／Notes':'Credit Card Name / Notes',
'起始Record Date':'Opening Record Date','保险月费率（%）':'Monthly Insurance Rate (%)',
'迟还费率（%）':'Late Payment Fee Rate (%)','迟还费最低（RM）':'Minimum Late Fee (RM)',
'迟还费最高（RM）':'Maximum Late Fee (RM)','周末／假期额外宽限天数':'Additional Grace Days for Weekends / Holidays',
'此卡参加Credit Card保险（启用Automatic Estimate）':'Enable Credit Card Insurance (Automatic Estimate)',
'SaveCredit Card及Bank设置清空／Add另一张卡':'Save Credit Card and Bank Settings / Add Another Card',
'月末Total Account Balance':'Month-end Total Account Balance',
'登记Repayment / 收款':'Record Repayment / Collection',
'借款概览':'Loan Overview','待还借入':'Borrowed Amount Outstanding','待收借出':'Loans Receivable',
'借入与借出记录':'Borrowing and Lending Records','借出 · Jess':'Lent to Jess',
'原Amount':'Original Amount','已归还':'Amount Repaid','剩余':'Remaining',
'登记Repayment / 收款':'Record Repayment / Collection',
'暂无Repayment或Collection Records':'No repayment or collection records',
'Repayment / 收款Date':'Repayment / Collection Date',
'归还Amount (RM)':'Repayment Amount (RM)',
'借款Repayment历史':'Loan Repayment History',
'Save Repayment / 收款':'Save Repayment / Collection',
'上期结转Balance':'Previous Statement Closing Balance',
'本期AddCredit Card消费':'New Credit Card Purchases This Period',
'本期Repayment（Principal）':'Principal Repaid This Period',
'已Confirm实际收费':'Confirmed Actual Charges',
'本期Add期初Debts':'Opening Debt Added This Period',
'本期实际记录Balance':'Current Recorded Balance',
'计息基数（Statement Balance 减PrincipalRepayment）':'Interest Basis (Statement Balance Less Principal Repayment)',
'预计 Finance Charges（Statement Balance 减Repayment，固定30天）':'Estimated Finance Charges (Statement Balance Less Repayment, Fixed 30 Days)',
'预计保险费':'Estimated Insurance Fee',
'预计迟还费（仅根据已Save账单）':'Estimated Late Fee (Based on Saved Statements)',
'预计结转总额（不入账）':'Estimated Carryover Total (Not Posted)',
'Credit Card Repayment · Credit CardRepayment History':'Credit Card Repayment · Repayment History',
'Finance Charges · Interest自动计算':'Finance Charges · Automatic Interest Calculation',
'Bank实际费用核对入账 · 保险费':'Bank Fee Reconciliation · Insurance Fee',
'Bank实际费用核对入账 · 逾期费':'Bank Fee Reconciliation · Late Fee',
'Credit Protector Plus · 自动估算':'Credit Protector Plus · Automatic Estimate',
'每张Credit Card独立SaveBank、年利率、保险及迟还费规则。Bank预设仅供参考，请以你的Bank正式条款和账单为准。':'Save each credit card’s bank, interest rate, insurance rate and late-fee rules separately. Bank defaults are for reference only; follow your bank’s official terms and statements.',
'现有Credit Card可通过下方「EditBank规则」修改；不会DeleteRepayment历史。AddCredit Card时填写当前实际未还欠款，不要重复导入已有债务。':'Use Edit Bank Rules below to update an existing credit card without deleting repayment history. When adding a card, enter only the actual outstanding balance; do not import existing debt twice.',
'点击Debt List中的「Repayment Schedule」查看逐期Details；记录部分Repayment后会重新计算Remaining计划，未还差额优先补入下一期。预计计划不会自动扣款。':'Select Repayment Schedule in the Debt List to view installment details. Partial repayments recalculate the remaining schedule, and unpaid amounts carry forward to the next installment. Planned payments are not deducted automatically.'
};
// Avoid translating arbitrary user notes or financial amounts. Translate only known aliases and system labels.
const aliasEnglish={'欠maan':'Loan from Maan','欠爸爸':'Loan from Dad','欠妈咪':'Loan from Mom','欠妈妈':'Loan from Mom','欠二姐借款':'Loan from Second Sister','PPB 汽车货款':'PPB Car Loan'};

const comprehensiveEnglish={'已Add Account': 'Added Accounts', '已Add账户': 'Added Accounts', '已新增账户': 'Added Accounts', '这里自动列出已经Save的所有Bank、电子Bank、E-wallet和Cash账户，防止重复Add。点击「Edit」可修改账户资料。': 'All saved bank, digital bank, e-wallet and cash accounts appear here. Select Edit to update account details.', '账户 1 · 已Save': 'Account 1 · Saved', '账户 2 · 已Save': 'Account 2 · Saved', '账户 3 · 已Save': 'Account 3 · Saved', '账户 4 · 已Save': 'Account 4 · Saved', '账户 5 · 已Save': 'Account 5 · Saved', '账户 6 · 已Save': 'Account 6 · Saved', '电子Bank': 'Digital Bank', '花红': 'Bonus', '津贴': 'Allowance', '汽车维修': 'Vehicle Repairs', '全部账户（含未关联）': 'All Accounts (Including Unlinked)', 'All账户': 'All Accounts', 'All账户 ·': 'All Accounts ·', 'All账户 · 2026-11 月末Total': 'All Accounts · November 2026 Closing Total', '本月转入': 'Transfers In This Month', '本月转出': 'Transfers Out This Month', '本月Debts及Credit CardRepayment': 'Debt and Credit Card Repayments This Month', '本月收款到账': 'Collections Received This Month', '本月底Balance': 'Month-end Balance', 'Previous Month Carryover／本月期初': 'Previous Month Carryover / Opening Balance', '此卡参加Credit Card保险（启用Automatic Estimate）': 'This Card Has Credit Card Insurance (Enable Automatic Estimate)', '清空／Add另一张卡': 'Clear / Add Another Card', 'SaveCredit Card及Bank设置': 'Save Credit Card and Bank Settings', '选择Credit Card': 'Select Credit Card', '每月账单结单日（1–31）': 'Monthly Statement Closing Day (1–31)', '结单后预计Repayment期限（天）': 'Expected Repayment Period After Closing (Days)', 'Save本张卡的账单周期': 'Save This Card’s Statement Cycle', 'AddCredit Card消费': 'Add Credit Card Purchase', '消费Date': 'Purchase Date', '消费Amount (RM)': 'Purchase Amount (RM)', '描述／Notes': 'Description / Notes', 'SaveCredit Card消费': 'Save Credit Card Purchase', '暂无另外登记的Credit Card消费。': 'No additional credit card purchases recorded.', '选择结单月份': 'Select Statement Month', '估算As of Date': 'Estimate As of Date', '重新计算本期': 'Recalculate This Period', '请填写': 'Please enter', '初始': 'Opening', '年初': 'Year Beginning', '月末': 'Month-end', '月度Details': 'Monthly Details', 'Show月度Details ▼': 'Show Monthly Details ▼', 'Bank账户独立月度结转': 'Monthly Carryover by Bank Account', 'Balance · Bank账户独立月度结转 V7.9.6': 'Balances · Monthly Bank Account Carryover V7.9.8', '按账户与月份查看Balance及Previous Month Carryover，不会重复Records。': 'View balances and previous-month carryovers by account and month. No duplicate transactions are created.', '这里会ShowAll账户当前Balance，以及各Bank／钱包／Cash账户的独立Balance。': 'This section shows the current total balance and individual balances for bank, wallet and cash accounts.', '期初Total': 'Opening Total', '当月净变动': 'Monthly Net Change', '点击日期可查看明细。': 'Select a date to see details.', '填写IncomeAmount、Date及Category，并Linked Account后Save。': 'Enter the income amount, date and category, select the linked account, then save.', '结算周期': 'Statement Period', '预计到期': 'Estimated Due Date', '尚未核对正式账单': 'Official Statement Not Yet Verified', '预测查询Date': 'Estimation Date', '本期估算区间': 'Estimated Period', '自然日31天，固定30天基准': '31 Calendar Days, Fixed 30-Day Basis', '年利率': 'Annual Interest Rate', '账期从上月结单日到本月结单日前一天；例如结单日20号，对应上月20日至本月19日。Interest按固定30天基准估算。Finance Charges 是简化的Balance日息估算，未RepaymentInterest及Bank免息规则可能导致差异。旧版已录入的原始欠款视为期初欠款；旧消费不要再次添加。保险及迟还费预览不入账。': 'The statement period runs from the previous statement closing date to the day before the current closing date. For a closing day of the 20th, it runs from the previous month’s 20th through this month’s 19th. Interest is estimated using a fixed 30-day basis. Finance charges are simplified daily-balance estimates; unpaid interest and bank-specific interest-free rules can create differences. Existing original debt is treated as opening debt; do not add old purchases again. Insurance and late-fee previews are not posted.', '有Save正式 Statement Balance 时，Interest按该账单Amount扣减账单日后的已登记PrincipalRepayment计算；没有正式账单则采用实际记录Balance作临时估算。预测Interest、保险和迟还费只是参考，不自动生成新Debts；下期从实际记录Balance结转，不会重复加上预测费用。Bank实际账单Balance如有差异，以Bank正式账单为准。': 'When an official Statement Balance is saved, interest is estimated from that amount less principal repayments recorded after the statement date. Otherwise, the current recorded balance is used provisionally. Estimated interest, insurance and late fees are for reference only and do not create new debt. The next period carries forward recorded balances without adding estimated fees again. The bank’s official statement takes precedence.', '统计口径：只计入已Linked Account的收支与借款流水；未Linked Account的记录保留在原始Details。Account Balance与Cash流不是会计利润。Credit Card费用与债务Balance请以原始Debts模块及Bank正式账单核对。单独筛选账户时，Internal Transfer只算该账户的转入／转出。': 'Reporting basis: only income, expenses and loan transactions linked to an account are included. Unlinked records remain available in their original details. Account balances and cash flows are not accounting profit. Reconcile credit card fees and debt balances against the debt module and official bank statements. When filtering a single account, internal transfers count only for that account.', '每月收支、借款与期末Balance': 'Monthly Cash Flow, Loans & Closing Balances', 'MyMoney NEXT · V7.9.6 · 财务资料仅储存于本机 · 请定期Backup JSON': 'MyMoney NEXT · V7.9.8 · Financial data is stored only on this device · Back up your JSON regularly', '旧应收收款': 'Legacy Receivables Collected', '年度': 'Annual', '十月': 'October', '10月份': 'October', '选择操作Type': 'Select Transaction Type', 'Hide记录 ▲': 'Hide Records ▲', 'Show记录 ▼': 'Show Records ▼', 'ShowAll交易 ▼': 'Show All Transactions ▼', '借款概览': 'Loan Overview', '借入与借出记录': 'Borrowing and Lending Records', '登记Repayment / 收款': 'Record Repayment / Collection', '暂无Repayment或Collection Records': 'No Repayment or Collection Records', '借入增加收款Account Balance，借出减少付款Account Balance；归还或收回时反向更新。这里独立于原有Debts和Collection Records，避免重复入账。': 'Borrowing increases the receiving account balance; lending reduces the paying account balance. Repayments and collections reverse the corresponding cash flow. This section is separate from existing debt and collection records to prevent double posting.', '选择Bank': 'Select Bank', '借款金额': 'Loan Amount', '欠妈咪': 'Loan from Mom', '欠爸爸': 'Loan from Dad', '欠maan': 'Loan from Maan', '暂时没有记录': 'No Records Yet', '暂无': 'No Records', '余额': 'Balance', '本月': 'This Month', '期初': 'Opening Balance', '期末': 'Closing Balance', '个月': 'months', '记录': 'Records', '明细': 'Details', '扣款': 'Debit', '供期': 'Installment', '全部账户': 'All Accounts', '每张Credit Card独立SaveBank、年利率、保险及迟还费规则。Bank预设仅供参考，请以你的Bank正式条款和账单为准。': 'Configure each credit card’s bank, annual interest rate, insurance and late-payment fee rules independently. Bank defaults are for reference only; follow the bank’s official terms and statements.', '现有Credit Card可通过下方「EditBank规则」修改；不会DeleteRepayment历史。AddCredit Card时填写当前实际未还欠款，不要重复导入已有债务。': 'Edit an existing credit card through Edit Bank Rules below. Existing repayment history will not be deleted. When adding a credit card, enter the actual current outstanding balance and do not import debts twice.', '点击Debt List中的「Repayment Schedule」查看逐期Details；记录部分Repayment后会重新计算Remaining计划，未还差额优先补入下一期。预计计划不会自动Deduction。': 'Select Repayment Schedule in the Debt List to view each installment. Partial repayments recalculate the remaining plan, and unpaid amounts carry forward to the next installment. Scheduled repayments are not deducted automatically.'};
const latestEnglish={"例如：超市消费":"Example: Supermarket purchase","例如：CIMB 11月Repayment":"Example: CIMB November repayment","例如：CIMB 11月还款":"Example: CIMB November repayment","留空：当前卡债＋预计Add Finance Charges":"Leave blank to use outstanding card debt plus estimated finance charges","例如 13.08":"Example: 13.08","例如 20.13；无罚款可留空":"Example: 20.13; leave blank if no late fee","留空按账单Balance估算；如包含Interest等费用建议填写Bank适用Balance":"Leave blank to estimate using the statement balance. If it includes interest or other fees, enter the applicable bank balance.","账单最低Repayment":"Minimum Payment Due","本期已登记Repayment":"Payments Recorded This Period","还差最低Repayment":"Minimum Payment Remaining","适用计罚Date":"Applicable Late-Fee Date","暂估未付消费／预借计罚Balance":"Estimated Unpaid Purchases / Cash Advances Subject to Late Fees","已满足最低Repayment，预计无迟还费。":"Minimum payment requirement met; no late fee is expected.","本期已登记Repayment（截至":"Repayments recorded for this period (as of","限到期前有效":"counted only if paid by the due date","按Bank设置宽限":"based on bank grace-period settings","已满足最低Repayment，预计无迟还费。注意：目前按整张账单Balance估算，包含旧Interest、保险等非适用款项时罚款可能有偏差；请填写准确的零售／预借计罚Balance。系统只根据已登记Repayment计算，Bank实际入账日和付款分配方式可能不同。":"Minimum payment is met, so no late fee is expected. This estimate uses the full statement balance and may differ if old interest or insurance fees are excluded from the penalty base. Enter the correct retail-purchase/cash-advance penalty base. Recorded payments may differ from bank posting dates and allocation rules.","迟还费按照所选Credit Card的费率、上下限估算；CIMB 常见示例为1%、最低 RM10、最高 RM100。未到期Show「风险预测」，不代表Bank已收款。周末4日宽限自动处理，公共假期请勾选；Bank实际入账时间可能影响结果。":"Late fees are estimated using this card’s configured percentage, minimum and maximum. A typical CIMB example is 1%, minimum RM10 and maximum RM100. Before the due date the result is a risk forecast, not a posted bank fee. The additional four-day weekend grace rule is applied where relevant; mark public holidays as needed. Actual bank posting dates can affect the result.","切换月份只影响":"Changing the month affects only","不修改任何":"It does not change any","返回This Month":"Return to This Month","This MonthAll交易":"All Transactions This Month","ShowAll交易":"Show All Transactions","财务资料仅储存于本机 · 请定期Backup JSON":"Financial data is stored only in this browser · Back up your JSON regularly","填写ExpenseAmount、Date及Category，Save后会Records为Expense。":"Enter the expense amount, date and category, then save to record the expense.","Add或EditBank、Cash及E-wallet账户。账户月度结转请点击「Balance」。":"Add or edit bank, cash and e-wallet accounts. Select Balances to view monthly carryovers.","按账户与月份查看Balance及Previous Month Carryover，不会重复Records。":"View account balances and prior-month carryovers by account and month. No duplicate transactions are created.","这里会ShowAll Accounts当前Balance，以及各Bank／钱包／Cash账户的独立Balance。":"See the total current balance and separate balances for each bank, wallet and cash account.","Hide账户清单":"Hide Account List","每个账户独立Show：Previous Month Carryover、Monthly Income、Monthly Expenses、Internal Transfer、Debt Repayments、收款到账及月底Balance。结转只用于查看，不会Add重复Income。":"For each account, view previous-month carryover, monthly income and expenses, internal transfers, debt repayments, collections received and closing balance. Carryovers are for reporting only and do not create duplicate income.","11月Repayment":"November Repayment","此卡参加Credit Card保险（启用Automatic Estimate）":"This Card Has Credit Card Insurance (Enable Automatic Estimate)","原定":"Scheduled","加：预计":"Plus: Estimated","开启":"Enabled","预估Amount，不代表实际收取. 已包含在当前欠款中的旧保费不应再次入账":"Estimated amount only; not an actual charge. Previously posted insurance premiums already included in outstanding debt must not be posted again.","每张卡独立设置保险开关和月保费率；自动依据当前Credit CardBalance及预计Add Finance Charges 估算。计算结果不会未经Confirm就重复入账。":"Set insurance enrollment and the monthly rate separately for each card. Estimates use outstanding credit card debt plus any estimated finance charges. Nothing is posted without confirmation.","标准费率：每 RM100 月度适用未偿Balance收 RM0.60（0.60%）。当前卡债未必完全等于Bank保费基数；如Bank账单有差异，可覆盖基数或按Bank实际保费入账。":"Standard rate: RM0.60 for every RM100 of eligible outstanding balance per month (0.60%). The outstanding card balance may differ from the bank’s insurance base. If so, override the base or record the actual premium charged by the bank.","优先依据已Save的 Statement Balance 减去已登记PrincipalRepayment：（Statement Balance − Principal Repaid）× Annual Interest Rate × 30 ÷ 365。包含已登记新消费、已Confirm收费和已登记PrincipalRepayment；根据每张卡的每月结单日划分账期，并以固定30天基准估算，同时Show账期实际自然日数。未模拟Bank免息期、交易入账日与特殊条款；actual charges will not be posted automatically。":"The estimate first uses the saved statement balance minus recorded principal repayments: (Statement Balance − Principal Repaid) × Annual Interest Rate × 30 ÷ 365. Recorded purchases, confirmed fees and repayments are reflected according to the card’s statement cycle. The estimate uses a fixed 30-day basis while displaying the actual calendar-day count. Bank interest-free periods, posting dates and special conditions are not modeled. Actual charges are never posted automatically.","Select Credit Card和估算Date后计算；和月度预览采用同一Calculation Method.":"Select a credit card and estimation date to calculate using the same method as the monthly preview.","自动预计不直接改变欠款。只有核对所属Bank正式账单后，才输入实际 Credit Protector Plus / Late Charges 并Confirm入账；同一卡同一期同类费用不可重复Records。如果你已经把包含这些费用的完整新账单设为新的Opening Balance欠款，不要再次记入费用。":"Estimates do not change outstanding debt. After checking the official bank statement, enter and confirm actual Credit Protector Plus or late-payment fees. Do not post the same fee twice for the same card and statement period. If the new opening balance already includes these charges, do not record them again.","此卡尚无Confirm的Bank费用。":"No confirmed bank charges have been recorded for this card.","已Save账单":"Saved Statements","查看／Edit":"View / Edit","账单 RM":"Statement RM","以下使用本张Credit CardSave的Bank规则。输入 Statement Date、Due Date 和 Minimum Payment；自动依据已登记Repayment判断是否达到最低Repayment，并预计迟还费。每一期账单分别Save，不同Bank的最低付款、宽限期与计罚基数可能不同，请核对正式条款":"These calculations use this credit card’s saved bank rules. Enter the statement date, due date and minimum payment. Recorded repayments are used to check minimum-payment compliance and estimate late fees. Save each statement separately. Minimum payments, grace periods and penalty bases differ by bank; verify the official terms.","旧应收收款":"Legacy Receivables Collected","每月收支、借款与期末Balance":"Monthly Cash Flow, Loans & Closing Balances","统计口径：只计入已Linked Account的收支与借款流水；未Linked Account的记录保留在原始Details。Account Balance与Cash流不是会计利润。Credit Card费用与债务Balance请以原始Debts模块及Bank正式账单核对。单独筛选账户时，Internal Transfer只算该账户的转入／转出。":"Reporting basis: include only income, expenses and loan cash flows linked to accounts. Unlinked records remain available in their original details. Cash flow is not accounting profit. Reconcile card fees and debt balances against the debt records and official bank statements. Transfers for an individually selected account count only that account’s inflows and outflows.","月末Total Account Balance":"Month-end Total Account Balance","全部账户":"All Accounts","选择账户":"Select Account","请选择":"Please Select","月度":"Monthly","年度":"Annual","期初":"Opening Balance","期末":"Closing Balance"};

// Exact full-sentence replacements take precedence over short token substitutions.
const v799English={
 '本月总流出包含普通支出、所有负债还款，以及本月关联账户的借出款项与借入归还。如信用卡消费已记入普通支出，再将还款计入总流出可能重复计算；本表借款收付仅统计关联账户的流水；没有关联账户的借款不会计入账户结余。结余属于现金流估算，不是会计利润。':
 'Monthly total outflow includes ordinary expenses, all debt repayments, loans given from linked accounts, and repayments of borrowed funds from linked accounts. If credit card purchases were already recorded as expenses, counting card repayments as outflow may result in double counting. Only loan cash flows linked to accounts are included in account balances. Unlinked loans are excluded from the cash balance. This balance is a cash-flow estimate, not accounting profit.',
 '本月总流出包含所有负债还款（无论是否关联账户）。如信用卡消费已记入普通支出，再将还款计入总流出可能重复计算；此处用于观察资金流出，不代表会计意义的净费用。':
 'Monthly total outflow includes all debt repayments, whether or not linked to accounts. Credit card purchases recorded as expenses and subsequently counted again as repayments may be double-counted. This is a cash-flow view, not an accounting expense total.',
 '返回本月':'Return to This Month',
 '返回This Month':'Return to This Month',
 '切换月份只影响首页显示，不修改任何记录。':'Changing the selected month only changes the dashboard display. No records are modified.',
 '切换月份只影响Home显示，不修改任何记录。':'Changing the selected month only changes the dashboard display. No records are modified.',
 '本月全部交易':'All Transactions This Month',
 '本月All交易':'All Transactions This Month',
 'This MonthAll交易':'All Transactions This Month',
 '显示全部交易 ▼':'Show All Transactions ▼',
 '显示全部交易 ▲':'Show All Transactions ▲',
 '显示All交易 ▼':'Show All Transactions ▼',
 'ShowAll交易 ▼':'Show All Transactions ▼',
 '隐藏全部交易 ▲':'Hide All Transactions ▲',
 '隐藏All交易 ▲':'Hide All Transactions ▲',
 'HideAll交易 ▲':'Hide All Transactions ▲',
 '所选月份结余（含借款收付）':'Selected Month Closing Balance (Including Loan Cash Flows)',
 '结余（含借款收付）':'Closing Balance (Including Loan Cash Flows)',
 '本月结余（含借款收付）':'Monthly Closing Balance (Including Loan Cash Flows)',
 '财务资料仅储存于本机 · 请定期Backup JSON':'Financial data is stored only on this device. Export JSON backups regularly.',
 'MyMoney NEXT · V7.9.8 · 财务资料仅储存于本机 · 请定期Backup JSON':'MyMoney NEXT · V7.9.8 · Financial data is stored only on this device. Export JSON backups regularly.'
};
const auditedEnglish={"点击负债清单中的「还款计划」查看逐期明细；记录部分还款后会重新计算剩余计划，未还差额优先补入下一期。预计计划不会自动扣款。": "Open Repayment Schedule in the Debt List to see each installment. After a partial repayment is recorded, the remaining schedule is recalculated, with any shortfall carried into the next installment first. Scheduled payments are estimates only and are not deducted automatically.", "此卡参加信用卡保险（启用自动估算）": "This Card Is Enrolled in Credit Card Insurance (Enable Automatic Estimates)", "保存信用卡及银行设置": "Save Credit Card and Bank Settings", "清空／新增另一张卡": "Clear Form / Add Another Card", "现有信用卡可通过下方「编辑银行规则」修改；不会删除还款历史。新增信用卡时填写当前实际未还欠款，不要重复导入已有债务。": "Use Edit Bank Rules below to update an existing card without deleting repayment history. When adding a card, enter only its actual outstanding balance; do not import existing debt twice.", "账期从上月结单日到本月结单日前一天；例如结单日20号，对应上月20日至本月19日。利息按固定30天基准估算。Finance Charges 是简化的余额日息估算，未还款利息及银行免息规则可能导致差异。旧版已录入的原始欠款视为期初欠款；旧消费不要再次添加。保险及迟还费预览不入账。": "The billing cycle runs from the previous statement date to the day before the current statement date. For a statement date of the 20th, the period is the 20th of the previous month through the 19th of this month. Finance charges use a simplified fixed 30-day interest estimate; outstanding interest and bank-specific interest-free rules can cause differences. Legacy outstanding debt is treated as the opening balance; do not add old purchases again. Estimated insurance premiums and late fees are not posted automatically.", "填写收入金额、日期及类别，并选择关联账户后保存。": "Enter income amount, date and category, select a linked account, then save.", "填写支出金额、日期及类别，保存后会记录为支出。": "Enter the expense amount, date and category, then save it as an expense.", "新增或编辑银行、现金及电子钱包账户。账户月度结转请点击「余额」。": "Add or edit bank, cash and e-wallet accounts. Open Balances to see monthly carryovers.", "按账户与月份查看余额及上月结转，不会重复记账。": "View balances and previous-month carryovers by account and month. No duplicate entries are created.", "这里会显示全部账户当前余额，以及各银行／钱包／现金账户的独立余额。": "This section shows current balances for all accounts and for each individual bank, e-wallet or cash account.", "每个账户独立显示：上月结转、本月收入、本月支出、内部转账、负债还款、收款到账及月底余额。结转只用于查看，不会新增重复收入。": "Each account shows its previous-month carryover, monthly income, expenses, internal transfers, debt repayments, collections received and month-end balance. Carryovers are for viewing only; they never create duplicate income.", "月度账户独立结转": "Individual Monthly Account Carryovers", "银行账户独立月度结转": "Individual Monthly Bank Account Carryovers", "隐藏账户清单": "Hide Account List", "显示账户清单": "Show Account List", "返回本月": "Return to This Month", "所选月份结余（含借款收付）": "Selected Month Closing Balance (Including Loan Cash Flows)", "本月全部交易": "All Transactions This Month", "显示全部交易 ▼": "Show All Transactions ▼", "隐藏全部交易 ▲": "Hide All Transactions ▲", "选择操作类型": "Select Transaction Type", "花红": "Bonus", "津贴": "Allowance", "汽车维修": "Car Maintenance", "电子银行": "Digital Bank", "不知开销": "Miscellaneous Expenses", "10份供期": "10 Installments", "本期实际记录余额": "Actual Recorded Balance This Period", "本期新增信用卡消费": "New Credit Card Purchases This Period", "本期已记录本金还款": "Principal Repaid This Period", "本期预计 Finance Charges": "Estimated Finance Charges This Period", "借款概览": "Loan Overview", "借入与借出记录": "Borrowing and Lending Records", "暂无还款或收款记录": "No Repayment or Collection Records", "账单最低还款": "Statement Minimum Payment", "本期已登记还款": "Payments Recorded This Period", "还差最低还款": "Remaining Minimum Payment", "适用计罚日期": "Applicable Late-Fee Date", "暂估未付消费／预借计罚余额": "Estimated Unpaid Purchases / Cash Advance Balance", "已满足最低还款，预计无迟还费。": "Minimum payment satisfied; no late fee is currently estimated.", "例如：超市消费": "Example: Supermarket purchase", "例如：CIMB 11月还款": "Example: CIMB November repayment", "留空：当前卡债＋预计新增 Finance Charges": "Leave blank to use the current outstanding balance plus estimated finance charges.", "例如 20.13；无罚款可留空": "Example: 20.13; leave blank if there is no late fee.", "欠二姐借款": "Loan from Second Sister", "欠爸爸": "Loan from Dad", "欠妈咪": "Loan from Mom", "欠maan": "Loan from Maan", "PPB 汽车货款": "PPB Car Loan", "本月转入": "Transfers In This Month", "本月转出": "Transfers Out This Month", "本月收入": "Monthly Income", "本月支出": "Monthly Expenses", "月底余额": "Month-end Balance", "收款到账": "Collections Received", "旧应收收款": "Legacy Receivables Collected", "结余（含借款收付）": "Closing Balance (Including Loan Cash Flows)", "账户月度结转": "Monthly Account Carryovers", "年度收支分类": "Annual Income & Expense Categories", "年末账户明细": "Year-End Account Details", "年末负债与借款概览": "Year-End Debts and Loans Overview", "每月收支、借款与期末余额": "Monthly Income, Expenses, Loans and Closing Balances", "这里会自动列出已保存的所有银行、电子银行、电子钱包和现金账户，防止重复新增。点击「编辑」可修改账户资料。": "All saved bank, digital bank, e-wallet and cash accounts are listed here to prevent duplicates. Select Edit to change account details.", "本月总流出包含普通支出、所有负债还款，以及本月关联账户的借出款项与借入归还。如信用卡消费已记入普通支出，再将还款计入总流出可能重复计算；本表借款收付仅统计关联账户的流水；没有关联账户的借款不会计入账户结余。结余属于现金流估算，不是会计利润。": "Monthly total outflow includes ordinary expenses, all debt repayments, loans given from linked accounts, and repayments of borrowed funds from linked accounts. If credit card purchases are recorded as expenses, counting repayments as outflows again may double-count spending. Only loan payments linked to accounts affect the balance shown. This is a cash-flow estimate, not accounting profit.", "点击Debt List中的「Repayment Schedule」查看逐期Details；Records部分Repayment后会重新计算Remaining计划，未还差额优先补入下一期。预计计划不会自动Deduction。": "Open Repayment Schedule in the Debt List to see each installment. After a partial repayment is recorded, the remaining schedule is recalculated, with any shortfall carried into the next installment first. Scheduled payments are estimates only and are not deducted automatically.", "此卡参加Credit Card保险（启用Automatic Estimate）": "This Card Is Enrolled in Credit Card Insurance (Enable Automatic Estimates)", "已Add Account": "Added Accounts", "请Select Account": "Select Account", "返回This Month": "Return to This Month", "This MonthAll交易": "All Transactions This Month", "ShowAll交易 ▼": "Show All Transactions ▼", "账单最低Repayment": "Statement Minimum Payment", "显示Monthly Summary": "Show Monthly Summary", "隐藏Monthly Summary": "Hide Monthly Summary", "当前Credit CardOutstanding Balance": "Current Credit Card Outstanding Balance", "加：预计Add Finance Charges": "Add: Estimated Finance Charges", "预估Amount，不代表实际收取. 已包含在当前欠款中的旧保费不应再次入账": "This is an estimate, not an actual charge. Do not record insurance premiums already included in outstanding debt again.", "账单 RM": "Statement RM", "原定Monthly Payment": "Original Scheduled Monthly Payment"};
const v7103ExactEnglish={"点击Debt List中的「Repayment Schedule」查看逐期Details；Records部分Repayment后会重新计算Remaining计划，未还差额优先补入下一期。预计计划不会自动Debit。": "Open Repayment Schedule in the Debt List to view installments. After a partial repayment, the schedule is recalculated and any shortfall is added to the next installment. Planned payments are not debited automatically.", "此卡参加Credit Card保险（启用Automatic Estimate）": "This card has credit card insurance (enable automatic estimates)", "原定Monthly Payment": "Original monthly payment", "登记Repayment": "Record repayment", "EditDebts": "Edit debt", "EditBank规则": "Edit bank rules", "上月结转Account Balance": "Previous month closing account balance", "当月净变动": "Net change this month", "请Select Account": "Select account", "不知开销": "Miscellaneous expenses", "10份供期": "10 installments", "原Amount": "Original amount", "已归还": "Repaid", "余额": "Balance", "贷款": "Loan", "暂无Repayment或Collection Records": "No repayment or collection records", "账期从上月结单日到本月结单日前一天": "The billing cycle runs from the previous statement date through the day before the current statement date"};
const isEn=()=>{try{const p=JSON.parse(localStorage.getItem('mymoney-v604-preferences')||'{}');return /^en/i.test(p.lang||'')}catch(e){return /^en/i.test(document.documentElement.lang||'')}};
const originals=new WeakMap();let busy=false;
function translatedText(source, isUserName){
 const trimmed=source.trim();
 if(isUserName){return aliasEnglish[trimmed]||userNameAliases[trimmed]||trimmed;}
 if(v7103ExactEnglish[trimmed])return v7103ExactEnglish[trimmed];
 if(auditedEnglish[trimmed])return auditedEnglish[trimmed];
 if(v799English[trimmed])return v799English[trimmed];
 if(latestEnglish[trimmed])return latestEnglish[trimmed];
 if(comprehensiveEnglish[trimmed])return comprehensiveEnglish[trimmed];
 if(completeEnglish[trimmed])return completeEnglish[trimmed];
 let v=map[trimmed];
 if(!v){v=trimmed;
  for(const [zh,en] of Object.entries(v7103ExactEnglish).sort((a,b)=>b[0].length-a[0].length))v=v.replaceAll(zh,en);
  for(const [zh,en] of Object.entries(auditedEnglish).sort((a,b)=>b[0].length-a[0].length))v=v.replaceAll(zh,en);
  for(const [zh,en] of Object.entries(v799English).sort((a,b)=>b[0].length-a[0].length))v=v.replaceAll(zh,en);
  for(const [zh,en] of Object.entries(latestEnglish).sort((a,b)=>b[0].length-a[0].length))v=v.replaceAll(zh,en);
  for(const [zh,en] of Object.entries(comprehensiveEnglish).sort((a,b)=>b[0].length-a[0].length))v=v.replaceAll(zh,en);
  for(const [zh,en] of Object.entries(completeEnglish).sort((a,b)=>b[0].length-a[0].length))v=v.replaceAll(zh,en);
  for(const [zh,en] of fixes)v=v.replaceAll(zh,en);
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
  const el=n.parentElement;if(!el||el.closest('script,style,textarea,[contenteditable="true"],[data-no-translate],input'))continue;
  const original=originals.get(n)||n.nodeValue;
  const trimmed=original.trim();
  const recordContext=!!el.closest('#txList,#debtList,#paymentList,#loanList,#v58History,#v58Plan,#v776AllTransactions');
  // For record cards, only translate a known Chinese title; never translate notes, amounts, or inputs.
  if(recordContext&&!aliasEnglish[trimmed]&&!userNameAliases[trimmed]&&!Object.keys(completeEnglish).some(zh=>trimmed.includes(zh))&&!fixes.some(([zh])=>trimmed.includes(zh))&&!Object.keys(comprehensiveEnglish).some(zh=>trimmed.includes(zh))&&!Object.keys(latestEnglish).some(zh=>trimmed.includes(zh))&&!Object.keys(v799English).some(zh=>trimmed.includes(zh))&&!Object.keys(auditedEnglish).some(zh=>trimmed.includes(zh))&&!Object.keys(v7103ExactEnglish).some(zh=>trimmed.includes(zh)))continue;
  const translated=translatedText(original,recordContext && !!(aliasEnglish[trimmed]||userNameAliases[trimmed]));
  if(translated!==trimmed){originals.set(n,original);n.nodeValue=original.replace(trimmed,translated)}
 }
 for(const el of root.querySelectorAll?.('[placeholder],[aria-label],[title]')||[]){for(const a of ['placeholder','aria-label','title']){const val=el.getAttribute(a);if(!val||!/[\u3400-\u9fff]/.test(val))continue;let v=translatedText(val,false);if(v!==val)el.setAttribute(a,v)}}
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
