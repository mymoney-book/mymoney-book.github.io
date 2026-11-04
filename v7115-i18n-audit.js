/* V7.10.15: source-level English auditing for credit cards and re-rendered UI.
   Does not touch user-entered financial data or calculation values. */
(()=>{'use strict';
const zh=/[\u3400-\u9fff]/;
const english=()=>{try{return /^en/i.test(JSON.parse(localStorage.getItem('mymoney-v604-preferences')||'{}').lang||'')}catch(e){return false}};
const map=new Map(Object.entries({
 '自动预计不直接改变欠款。只有核对所属银行正式账单后，才输入实际 Credit Protector Plus / Late Charges 并确认入账；同一卡同一期同类费用不可重复记账。如果你已经把包含这些费用的完整新账单设为新的期初欠款，不要再次记入费用。':'Estimates do not change outstanding debt. Check the official bank statement before posting actual Credit Protector Plus premiums or late charges. Do not record the same type of charge twice for the same statement period. If the opening balance already includes these charges, do not post them again.',
 'CIMB Credit Protector Plus 标准费率：每 RM100 月度适用未偿余额收 RM0.60（0.60%）。当前卡债未必完全等于银行保费基数；如银行账单有差异，可覆盖基数或按银行实际保费入账。':'CIMB Credit Protector Plus reference rate: RM0.60 per RM100 of eligible outstanding balance per month (0.60%). The bank’s premium base may differ from the app balance. Use a manual base or enter the actual premium from the bank statement.',
 '此卡已参加 Credit Protector Plus · 开启自动估算':'This Card Has Credit Protector Plus · Enable Automatic Estimates',
 '信用卡费用管理 · 选择功能':'Credit Card Charges · Choose a Function',
 '点击下方按键，显示对应功能。保险费与逾期费的银行核对共用原有正式费用入账记录，避免重复记账。':'Choose a function below. Confirmed insurance premiums and late charges share the same bank-charge ledger to prevent duplicate entries.',
 '每张卡独立设置保险开关和月保费率；自动依据当前信用卡余额及预计新增 Finance Charges 估算。计算结果不会未经确认就重复入账。':'Set insurance and monthly premium rates separately for each card. Estimates use the current card balance plus projected finance charges; estimated amounts will not be posted without confirmation.',
 '以下使用本张信用卡保存的银行规则。输入 Statement Date、Due Date 和 Minimum Payment；自动依据已登记还款判断是否达到最低还款，并预计迟还费。每一期账单分别保存，不同银行的最低付款、宽限期与计罚基数可能不同，请核对正式条款。':'Calculations use this card’s saved bank rules. Enter the statement date, due date and minimum payment. Recorded repayments are checked against the minimum amount to estimate late fees. Save each statement separately and verify the bank’s official terms.',
 '迟还费按照所选信用卡的费率、上下限估算；CIMB 常见示例为1%、最低 RM10、最高 RM100。未到期显示「风险预测」，不代表银行已收款。周末4日宽限自动处理，公共假期请勾选；银行实际入账时间可能影响结果。':'Late charges use the selected card’s rate and limits. A CIMB example is 1%, minimum RM10 and maximum RM100. Before the due date this is a risk estimate, not an actual charge. Weekend grace days are handled automatically; select the public holiday option when applicable. Bank posting dates may affect the outcome.',
 '优先依据已保存的 Statement Balance 减去已登记本金还款：（Statement Balance − 已还本金）× 年利率 × 30 ÷ 365。包含已登记新消费、已确认收费和已登记本金还款；根据每张卡的每月结单日划分账期，并以固定30天基准估算，同时显示账期实际自然日数。未模拟银行免息期、交易入账日与特殊条款；':'Estimates use the saved statement balance less principal repayments: (Statement Balance − Principal Repaid) × Annual Interest Rate × 30 ÷ 365. Statement periods follow the card’s billing date and use a fixed 30-day interest basis while showing actual calendar days. Bank grace periods, posting dates and special terms are not modeled;',
 '不会自动生成实际费用':'Actual charges are not posted automatically',
 '如：Visa Platinum':'Example: Visa Platinum',
 '例如 13.08':'Example: 13.08',
 '例如 20.13；无罚款可留空':'Example: 20.13; leave blank if no late fee',
 '例如：超市消费':'Example: Supermarket purchase',
 '例如：CIMB 11月还款':'Example: CIMB November repayment',
 '留空：当前卡债＋预计新增 Finance Charges':'Leave blank to use the current card balance plus estimated finance charges',
 '留空：当前卡债＋预计Add Finance Charges':'Leave blank to use the current card balance plus estimated finance charges',
 '留空按账单余额估算；如包含利息等费用建议填写银行适用余额':'Leave blank to estimate from the statement balance; enter the eligible balance if interest or other fees are included',
 '没有可填0':'Enter 0 if none',
 '银行实际费用核对入账':'Bank Fee Reconciliation & Posting',
 '账单实际保险费（RM）':'Actual Insurance Premium on Statement (RM)',
 '账单实际 Late Charges（RM）':'Actual Late Charges on Statement (RM)',
 '我已核对银行正式账单，确定这是实际收费（不是估算）':'I Have Checked the Official Bank Statement and Confirm These Are Actual Charges (Not Estimates)',
 '把预计费用填入待核对栏':'Copy Estimated Charges to Verification Fields',
 '确认费用并记入负债':'Confirm and Post Charges to Debt',
 '已保存账单':'Saved Statements',
 '暂无已保存的账单。':'No saved statements.',
 '此卡尚无确认的银行费用。':'No confirmed bank charges for this card.',
 '保险计费基数（RM，可选覆盖自动数值）':'Insurance Premium Base (RM, Optional Manual Override)',
 '当前信用卡剩余欠款':'Current Credit Card Outstanding Balance',
 '目前信用卡剩余欠款':'Current Credit Card Outstanding Balance',
 '加：预计新增 Finance Charges':'Add: Estimated Finance Charges',
 '保险状态／费率':'Insurance Status / Rate',
 '保险状态 / 费率':'Insurance Status / Rate',
 '保险计费基数（自动）':'Insurance Premium Base (Automatic)',
 '保险计费基数（手动）':'Insurance Premium Base (Manual)',
 '自动预计 Credit Protector Plus':'Estimated Credit Protector Plus',
 '预估金额，不代表实际收取。已包含在当前欠款中的旧保费不应再次入账。':'This is an estimate, not an actual charge. Do not post premiums already included in the outstanding balance again.',
 '账单最低还款':'Statement Minimum Payment',
 '还差最低还款':'Remaining Minimum Payment',
 '适用计罚日期':'Applicable Late-Fee Date',
 '暂估未付消费／预借计罚余额':'Estimated Eligible Unpaid Purchases / Cash Advances',
 '已满足最低还款，预计无迟还费':'Minimum payment met; no late charge expected',
 '尚未超过计罚日期：如到期仍不足，可能产生迟还费':'The grace period has not ended; a late charge may apply if the minimum remains unpaid',
 '选定的未来日期超过计罚日期：假设期间没有新增还款，可能产生迟还费':'The selected date is beyond the grace period; a late charge may apply if no further payments are made',
 '计罚日期已过且最低还款不足：预计可能产生迟还费':'The grace period has ended and the minimum payment is unmet; a late charge may apply',
 '注意：目前按整张账单余额估算，包含旧利息、保险等非适用款项时罚款可能有偏差；请填写准确的零售／预借计罚余额。':'Note: Estimating from the entire statement balance may overstate charges when interest or insurance is included; enter the eligible retail-purchase and cash-advance balance.',
 '计罚基数按你填写的适用余额估算。':'The late-fee base uses your eligible balance.',
 '系统只根据已登记还款计算，银行实际入账日和付款分配方式可能不同。':'The app uses recorded payments; the bank’s posting date and allocation may differ.',
 '确认费用已记入信用卡负债和费用支出，未重复扣银行余额。':'Actual charges were posted to card debt and expenses without deducting the bank balance again.',
 '已按银行账单确认':'Confirmed Against Bank Statement',
 '删除错误费用':'Delete Incorrect Charge',
 '请选择信用卡':'Select a Credit Card',
 '请选择信用卡查看费用。':'Select a credit card to view charges.',
 '请选择信用卡查看账单。':'Select a credit card to view statements.',
 '请填写有效保险费率／估算金额。':'Enter a valid insurance rate and estimate amount.',
 '请先选择信用卡，并填写完整的账单日期、到期日、账单余额和最低还款额。':'Select a credit card and enter the statement date, due date, balance and minimum payment.',
 '（按银行设置宽限）':' (bank grace period applied)',
 '开启':'Enabled','关闭':'Disabled',
 'Finance Charges · 利息自动计算':'Finance Charges · Automatic Interest Calculation',
 'Late Payment Charges · 逾期费用自动计算':'Late Payment Charges · Automatic Late Fee Calculation',
 'Credit Protector Plus · 自动估算':'Credit Protector Plus · Automatic Estimate',
 '信用卡还款记录':'Credit Card Repayment History',
 '银行实际费用核对入账 · 保险费':'Bank Fee Reconciliation · Insurance Premium',
 '银行实际费用核对入账 · 逾期费':'Bank Fee Reconciliation · Late Charges',
 '此卡 Late Charges 费率（%）':'Late Charges Rate (%)',
 '预计本期新增 Finance Charges（RM，可选）':'Projected Finance Charges This Period (RM, Optional)',
 'Credit Protector Plus 月保费率（%）':'Credit Protector Plus Monthly Premium Rate (%)',
 '到期日是公共假期：适用额外4天规则（周末自动识别）':'Due Date Falls on a Public Holiday: Apply the Extra 4-Day Rule (Weekends Detected Automatically)',
 '保存本期账单与保险设置':'Save Current Statement & Insurance Settings',
 '新建下一期账单':'Create Next Statement',
 '保存本张卡的保险设置':'Save Card Insurance Settings',
 '账单':'Statement','最低应还':'Minimum Due','截止：':'Due: ',
 '原定Monthly Payment：':'Original Monthly Payment: ',
 '原定每月还款：':'Original Monthly Payment: ',
 '每月30号':'Day 30 of Each Month',
 '账单最低Repayment':'Statement Minimum Payment',
 '本期已登记Repayment':'Payments Recorded This Period',
 '还差最低Repayment':'Remaining Minimum Payment',
 '暂估未付消费／预借计罚Balance':'Estimated Eligible Unpaid Purchases / Cash Advances',
 '预计Amount，不代表实际收取。已包含在当前欠款中的旧保费不应再次入账。':'This is an estimate, not an actual charge. Do not record already-included premiums again.',
 '预估Amount，不代表实际收取。已包含在当前欠款中的旧保费不应再次入账。':'This is an estimate, not an actual charge. Do not record already-included premiums again.',
 '财务Reports':'Financial Reports','充值':'Top-up'
}));

// Additional audited UI strings from complete English-mode DOM sweep.
for(const [a,b] of Object.entries({"MYMONEY · 财务总览": "MYMONEY · Financial Overview", "This MonthTotal Outflow（支出＋还款）": "Total Monthly Outflow (Expenses + Repayments)", "This MonthMonth-endRemaining总负债": "Total Debt Remaining at Month End", "Selected Month收入": "Income for Selected Month", "This MonthNo Records交易": "No Transactions This Month", "No Records账户": "No Accounts", "该月份No Records负债": "No Debts for This Month", "FINANCE OPERATIONS / 记账管理": "FINANCE OPERATIONS / Transaction Management", "新增支出Records": "New Expense Entry", "🔧 Car Maintenance费": "🔧 Car Maintenance", "⛽ 汽油": "⛽ Petrol", "仅供新增支出使用。既有自定义收入类别及历史交易资料仍保留，不会被删除。": "For new expenses only. Existing custom income categories and transaction history are retained.", "选择品牌图标（银行／E-Wallet／购物等）": "Choose a Brand Icon (Bank / E-Wallet / Shopping, etc.)", "当前图标：": "Current Icon:", "还没有自定义类别": "No Custom Categories Yet", "转账仅在账户之间移动Balance，不计入收入或支出。手续费请另外记为支出并选择付款账户。": "Transfers move balances between accounts and are not counted as income or expenses. Record fees separately as expenses linked to the paying account.", "首次建立账户时填当前实际Balance。以前的收支Records不会自动归属到新账户，避免重复计算。日后可在收支Records中Select Account。": "Enter the current actual balance when creating an account. Earlier transactions will not be assigned automatically, preventing duplicate counting. Link future transactions to the account.", "0 个": "0 Items", "这里自动列出已经保存的所有银行、Digital Bank、E-Wallet和现金账户，防止重复新增。点击「编辑」可修改账户资料。": "This section lists all saved bank, digital bank, e-wallet and cash accounts to prevent duplicates. Select Edit to change account details.", "No RecordsAdded Accounts，保存新账户后会自动Show在这里。": "No Accounts Added. New accounts will appear here after saving.", "账户总Balance（不扣除负债）": "Total Account Balance (Before Debt)", "请先在账户管理新增银行或现金账户。": "Add a bank or cash account in Account Management first.", "支出Records": "Expense Records", "No Records符合条件的支出Records": "No Matching Expense Records", "保存新类别": "Save New Category", "负债银行／平台图标（可选）": "Debt Bank / Platform Icon (Optional)", "已选择": "Selected", "银行、Credit Card、车贷、房贷等都可Choose Icon；不会改变欠款或还款计算。": "Choose icons for bank loans, credit cards, car loans and mortgages. Icons do not affect debt or repayment calculations.", "V5.8 · 独立负债计算设置": "V5.8 · Individual Debt Calculation Settings", "固定利息需填写总期数；递减Balance及Credit Card采用Annual Interest Rate ÷ 12 的Monthly估算，可能与银行按日计息、费用和Statement不同。旧负债默认Interest Free。": "Flat-rate interest requires a loan term. Reducing-balance and credit-card interest use a monthly annual-rate / 12 estimate; actual bank calculations may differ. Existing debts default to interest-free.", "V5.8：每笔负债可选择独立计息方式。旧Records默认Interest Free；实际还款会从选定账户扣除，不重复生成Regular Expenses。": "Choose an interest method for each debt. Existing records default to interest-free. Repayments deduct from the selected account without creating a duplicate expense.", "没有可还款的负债": "No Debts Available for Repayment", "Select Account后，Save Repayment会自动扣除该账户Balance；会计入总览的This MonthTotal Outflow，但不会自动生成另一笔Regular Expenses。": "After selecting an account, saved repayments reduce its balance and count toward monthly outflow without creating another regular expense.", "选择一笔负债，查看历次实际还款的日期、金额、本金、利息、还款后Balance、付款账户和备注。历史Records只供查看，不会重复Debit。": "Select a debt to view payment dates, amounts, principal, interest, remaining balance, payment account and notes. Historical entries are read-only and will not deduct funds again.", "查看哪笔负债": "Select a Debt to View", "Please Select负债": "Select a Debt", "Please Select一笔负债查看详细还款Records": "Select a Debt to View Detailed Repayment History", "Please Select一笔负债查看": "Select a Debt to View", "V7.10.15 · 多银行Credit Card": "V7.10.15 · Multi-Bank Credit Cards", "Credit Card独立查看、登记还款、计算保险与迟还费；银行实际费用核对后才记入总欠款。沿用原有负债与还款资料，不自动Debit。": "Manage card repayments, insurance and late charges separately. Bank charges are added to debt only after verification. Existing debt and repayment data are preserved.", "Credit Card数量": "Number of Credit Cards", "Credit Card欠款": "Credit Card Outstanding Balance", "＋ 新增Credit Card": "＋ Add Credit Card", "现有「Debt Category＝Credit Card」的Records会自动列在这里，无须重新输入。一般Loan仍使用前两个页面。": "Existing debts categorized as Credit Card appear automatically. Other loans remain in the original debt sections.", "🏦 新增／编辑Credit Card · 多银行设置": "🏦 Add / Edit Credit Card · Multi-Bank Settings", "每张Credit Card独立保存银行、Annual Interest Rate、保险及迟还费规则。银行预设仅供参考，请以你的银行正式条款和Statement为准。": "Save bank, interest, insurance and late-fee rules independently for each credit card. Defaults are for reference; follow official bank terms and statements.", "选择银行": "Select Bank", "其他银行": "Other Bank", "Credit Card名称／备注": "Credit Card Name / Notes", "起始Records日期": "Opening Record Date", "📆 V7.10.15 · 每月自动结算与结转": "📆 V7.10.15 · Automatic Monthly Statements and Carryover", "按每张卡的Statement日自动生成每期预览，上期Balance自动结转。新增消费登记在此卡的负债账本，不会同时扣除银行／现金Balance。预计收费不会自动记入真实欠款，核对正式Statement后再确认。": "Preview statements using each card’s closing date, carrying forward the prior balance. New card purchases are recorded in card debt without deducting cash or bank accounts. Estimated charges are not posted until verified against an official statement.", "选择Credit Card": "Select Credit Card", "结单后预计还款期限（天）": "Estimated Payment Term After Statement (Days)", "保存本张卡的Statement周期": "Save Card Statement Cycle", "＋ 新增Credit Card消费": "＋ Add Credit Card Purchase", "消费日期": "Purchase Date", "消费Amount (RM)": "Purchase Amount (RM)", "描述／备注": "Description / Notes", "保存Credit Card消费": "Save Credit Card Purchase", "估算As of日期": "Estimate As-of Date", "请先新增Credit Card。": "Add a Credit Card First.", "我的Credit Card负债": "My Credit Card Debts", "与现有Debt RepaymentsRecords共用同一份账目。选择付款账户后才会扣除对应银行／现金Balance；不会生成第二笔Regular Expenses。": "Uses the existing debt repayment ledger. Repayments deduct the selected bank or cash account only and do not create a duplicate regular expense.", "实际Repayment Date": "Actual Repayment Date", "实际Repayment Amount (RM)": "Actual Repayment Amount (RM)", "本次包含额外利息（一般填0）": "Additional Interest Included (Usually 0)", "已按Statement入账的费用不能在还款时重复加算；Credit Card还款建议填0。": "Do not count charges already posted from the statement again when repaying. For credit card repayments, enter 0 unless extra interest applies.", "实际付款账户": "Actual Payment Account", "保存Credit Card还款": "Save Credit Card Repayment", "估算开始日期": "Estimate Start Date", "估算结束日期": "Estimate End Date", "估算30天账期利息": "Estimate 30-Day Statement Interest", "Statement Date（Statement日期）": "Statement Date", "Payment Due Date（到期日）": "Payment Due Date", "计罚适用Balance：零售消费＋预借现金（RM，可选）": "Eligible Late-Fee Balance: Retail Purchases + Cash Advances (RM, Optional)", "计算As of日期": "Calculation As-of Date", "填写Statement和截止日期后自动计算。": "Enter the Statement and Due Dates to Calculate Automatically.", "No Records确认的收费Records。": "No Confirmed Charge Records.", "年份": "Year", "红色代表当日净流出，绿色代表净收入；Select a date to see details.": "Red indicates net cash outflow; green indicates net income. Select a date to view details.", "Total Outflow（支出＋还款）": "Total Outflow (Expenses + Repayments)", "周一": "Mon", "周二": "Tue", "周三": "Wed", "周四": "Thu", "周五": "Fri", "周六": "Sat", "周日": "Sun", "点击日历中的日期查看当天Details。": "Select a calendar date to view daily details.", "This MonthNo Records对应Records": "No Records for This Month", "每日趋势": "Daily Trend", "借款类型": "Loan Type", "约定归还日期（可选）": "Agreed Repayment Date (Optional)", "No Records借款Records": "No Loan Records", "登记还款 / 收款": "Record Repayment / Collection", "借入登记我归还的金额，借出登记对方归还的金额；可选择银行账户自动更新Balance。": "For borrowed money, record amounts you repay. For lent money, record amounts you collect. Optionally update the linked bank account balance.", "还款 / Collection Date": "Repayment / Collection Date", "Save Repayment / 收款": "Save Repayment / Collection", "借款还款历史": "Loan Repayment History", "收款总览": "Receivables Overview", "Records别人欠你的钱及分次收款。收款可自行选择是否同步增加银行或现金Balance；不会算作Regular Income。": "Record money owed to you and partial collections. You may optionally update a bank or cash balance; collections are not counted as regular income.", "新增欠款人 / 欠款Records": "Add Debtor / Receivable Record", "欠款人姓名": "Debtor Name", "欠款金额 (RM)": "Amount Owed (RM)", "约定Repayment Date（可选）": "Agreed Repayment Date (Optional)", "保存欠款Records": "Save Receivable Record", "Records收款": "Record Collection", "选择欠款Records": "Select Receivable", "收款金额 (RM)": "Collection Amount (RM)", "同步增加银行或现金账户Balance（可选）": "Add to Bank or Cash Balance (Optional)", "选择实际收款账户": "Select Receiving Account", "保存收款": "Save Collection", "欠款清单及收款历史": "Receivables and Collection History", "数据备份与恢复": "Data Backup & Restore", "JSON 文件会包含收支、负债、还款、账户和转账Records，可用于恢复完整数据。建议定期备份，并把文件保存在安全的位置。": "The JSON backup includes transactions, debts, repayments, accounts and transfers. Export regularly and store backups securely.", "下载完整备份（JSON）": "Download Full Backup (JSON)", "导入备份（JSON）": "Import Backup (JSON)", "导出交易Records": "Export Transaction Records", "将收支Records导出为 CSV，可用 Excel 打开。此文件只包含日常收入和支出，不包含Debt Repayments或Internal TransferRecords。": "Export income and expense records as an Excel-compatible CSV. This file does not include debt repayments or internal transfers.", "下载交易Records（CSV）": "Download Transaction Records (CSV)", "自定义 CSV 导出（三组）": "Custom CSV Export (Three Groups)", "选择需要导出的组别，每组生成一个 Excel 可打开的 CSV 文件。导出不会修改财务Records；完整 JSON 备份功能继续保留。": "Choose groups to export. Each produces an Excel-compatible CSV file without changing your financial records. Full JSON backups remain available.", "开始日期": "Start Date", "结束日期": "End Date", "第 1 组：日常收支与转账Records（收入、支出、Internal Transfer）": "Group 1: Income, Expenses & Transfers", "第 2 组：负债与还款Records（负债、Debt Repayments）": "Group 2: Debts & Repayments", "第 3 组：欠款人与收款Records（欠款人、收款）": "Group 3: Receivables & Collections", "导出勾选的组别": "Export Selected Groups", "仅导出第 1 组": "Export Group 1 Only", "仅导出第 2 组": "Export Group 2 Only", "仅导出第 3 组": "Export Group 3 Only", "默认日期：2026-01-01 至 2026-12-31。每组 CSV 均包含Records类型栏，金额单位 MYR。": "Default dates: 2026-01-01 to 2026-12-31. Each CSV includes a record-type column and amounts in MYR.", "清除本机数据": "Clear Local Data", "此操作会删除当前浏览器保存的全部Records（包括账户和转账），且无法撤销。请先备份。": "This permanently deletes all records stored in this browser, including accounts and transfers. Back up first.", "清除全部数据": "Delete All Data", "使用提示": "Usage Notes", "只在当前浏览器/设备保存，不会自动同步到其他手机。": "Data is stored in this browser/device only and is not synced to other phones.", "换手机、换浏览器或清除浏览数据前，请先下载 JSON 备份。": "Download a JSON backup before switching devices or browsers or clearing browsing data.", "关联Debit账户的还款会减少负债与账户Balance，并计入总览的This MonthTotal Outflow，但不会自动生成Regular ExpensesRecords。": "Repayments from linked accounts reduce debt and account balances and count toward monthly outflow without creating duplicate expenses.", "若要在手机上安装为应用，需要将网页发布到支持 HTTPS 的网站，再用浏览器「添加到主屏幕」。": "To install on a phone, publish the app to an HTTPS website and choose Add to Home Screen.", "MyMoney NEXT · V7.10.15 · 财务资料仅储存于本机 · Back up JSON regularly.": "MyMoney NEXT · V7.10.15 · Financial data stored locally · Back up JSON regularly."} ))map.set(a,b);
for(const [a,b] of Object.entries({
'No Records符合条件的支出Records':'No Matching Expense Records',
'No Records借款Records':'No Loan Records',
'借入登记我归还的金额，借出登记对方归还的金额；可Select Bank账户自动更新Balance。':'For borrowed money, record your repayments; for lent money, record money collected. You can update the linked bank account automatically.',
'MyMoney NEXT · V7.10.15 · 财务资料仅储存于本机 · Back up JSON regularly':'MyMoney NEXT · V7.10.15 · Financial data stored locally · Back up JSON regularly.'
}))map.set(a,b);
const alerts=new Map(Object.entries({
 '请选择要设置的信用卡。':'Select a credit card to configure.',
 '请输入有效保险费率（0–10%）。':'Enter a valid insurance rate (0–10%).',
 '保险设置已保存；每次进入信用卡管理会自动估算，本次没有增加实际费用。':'Insurance settings saved. Charges will be estimated when you open credit card management; no actual fee has been posted.',
 '请先选择信用卡。':'Select a credit card first.',
 '请选择信用卡。':'Select a credit card.',
 '请填写有效的账单日、还款日、账单余额和最低还款。':'Enter valid statement and due dates, statement balance, and minimum payment.',
 '请输入有效保险费率。':'Enter a valid insurance rate.',
 '本期账单及保险设置已保存（预计费用未入账）。':'Statement and insurance settings saved (estimated fees were not posted).',
 '请先选择信用卡并填写账单资料。':'Select a credit card and complete the statement details first.',
 '保险估算资料有误。':'Insurance estimate details are invalid.',
 '请先填写对应银行账单的日期、余额和最低还款。':'Enter the official statement date, balance and minimum payment first.',
 '该账单日期还未到来，不能提前记录银行实际费用。':'This statement date is in the future; actual bank charges cannot be recorded in advance.',
 '请填写实际保费或迟还费；没有收费的项目可留空。':'Enter actual insurance premiums or late charges; leave fields blank when no charge applies.',
 '收费必须为有效且非负的金额。':'Charges must be valid non-negative amounts.',
 '没有需要记入的实际费用（RM0 不会产生记录）。':'No actual charges to record (RM0 does not create a record).',
 '实际收费已记入信用卡负债和费用支出，未重复扣银行余额。':'Actual charges have been posted to card debt and expenses, without deducting bank funds again.',
 '已填入估算金额。这不是银行已确认的实际收费；请与正式账单核对后才能勾选确认。':'Estimated amounts have been copied. These are not confirmed bank charges. Verify the official statement before checking confirmation.',
 '必须先核对银行正式账单并勾选确认，预测金额不能自动入账。':'Check the official bank statement and select the confirmation checkbox. Estimated charges cannot be posted automatically.'
}));
const originalAlert=window.alert.bind(window), originalConfirm=window.confirm.bind(window);
const replaceMessage=text=>{let s=String(text);if(!english())return s;
 if(alerts.has(s))return alerts.get(s);
 if(s.includes('此卡这一期的 ')&&s.includes(' 已记过账'))return 'This type of charge has already been recorded for this card and statement period. Review the previous entry to avoid duplicates.';
 if(s.startsWith('确认 ')&&s.includes('已按银行账单实际收取'))return 'Confirm posting the verified charges shown on the official bank statement? This will increase credit card debt and expenses without deducting the bank account.';
 return s;
};
window.alert=function(msg){return originalAlert(replaceMessage(msg))};
window.confirm=function(msg){return originalConfirm(replaceMessage(msg))};
const originals=new WeakMap(), originalAttrs=new WeakMap();let busy=false,queued=false;
const chinesePlaceholders={v751ActualPremium:'例如 13.08',v751ActualLate:'例如 20.13；无罚款可留空',v751PremiumBase:'留空：当前卡债＋预计新增 Finance Charges',v753PurchaseNote:'例如：超市消费'};
const allPairs=[...map].sort((a,b)=>b[0].length-a[0].length);
function convert(s){const trimmed=s.trim();if(!zh.test(trimmed))return s;
 let val=map.get(trimmed);
 if(!val){val=trimmed;
  // Match longer known phrases before shorter labels. Preserve numeric amounts, dates and user entries.
  for(const [cn,en] of allPairs)if(cn.length>=3&&val.includes(cn))val=val.split(cn).join(en);
  val=val.replace(/本期已登记还款（截至\s*(\d{4}-\d\d-\d\d)，限到期前有效）/g,'Payments Recorded (as of $1; payments before due date only)');
  val=val.replace(/截止：\s*(\d{4}-\d\d-\d\d)\s*·\s*最低应还\s*/g,'Due: $1 · Minimum Due ');
  val=val.replace(/（按银行设置宽限）/g,' (bank grace period applied)');
 }
 return s.replace(trimmed,val);
}
function protectedNode(el){return !el||!!el.closest('script,style,textarea,[contenteditable],#txList,#paymentList,#loanList,#debtList')}
function apply(){if(busy)return;busy=true;try{
 const en=english();const tw=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;
 while(n=tw.nextNode()){
  if(protectedNode(n.parentElement))continue;
  if(!en){if(originals.has(n)){n.nodeValue=originals.get(n);originals.delete(n)}continue}
  if(!zh.test(n.nodeValue))continue;
  let out=convert(n.nodeValue);if(out!==n.nodeValue){originals.set(n,n.nodeValue);n.nodeValue=out}
 }
 for(const el of document.querySelectorAll('[placeholder]')){
  const current=el.getAttribute('placeholder')||'';
  if(en){if(!zh.test(current))continue;const next=convert(current);if(current!==next){if(!originalAttrs.has(el))originalAttrs.set(el,current);el.setAttribute('placeholder',next)}}
  else if(chinesePlaceholders[el.id]){el.setAttribute('placeholder',chinesePlaceholders[el.id]);originalAttrs.delete(el)}
  else if(originalAttrs.has(el)){el.setAttribute('placeholder',originalAttrs.get(el));originalAttrs.delete(el)}
 }
}finally{busy=false}}
function schedule(){if(queued)return;queued=true;setTimeout(()=>{queued=false;apply()},75)}
function init(){apply();new MutationObserver(list=>{if(busy)return;if(list.some(m=>m.type==='childList'||(m.type==='characterData'&&zh.test(m.target.nodeValue||''))))schedule()}).observe(document.body,{subtree:true,childList:true,characterData:true});document.addEventListener('change',schedule);document.addEventListener('click',schedule);setInterval(()=>{if(!document.hidden)schedule()},3000)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
window.__mymoneyI18nAudit={convert,apply,alerts:Object.keys(Object.fromEntries(alerts))};
})();
