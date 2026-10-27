/* MyMoney NEXT V7.5.1 — Credit card English / Bahasa Melayu UI localization.
   Presentation only: never reads/modifies payment records or financial amounts.
   No network requests, no localStorage writes, no account data changes. */
(()=>{'use strict';
const PREF='mymoney-v604-preferences';
// Source Chinese, English, Bahasa Melayu; bank product names stay in their official form.
const D=[
['💳 信用卡负债管理','💳 Credit Card Debt Management','💳 Pengurusan Hutang Kad Kredit'],
['💳 信用卡负债管理 · V7.5.1','💳 Credit Card Debt Management · V7.5.1','💳 Pengurusan Hutang Kad Kredit · V7.5.1'],
['V7.5.1 · 保险与迟还自动计算','V7.5.1 · Automatic Insurance & Late Fee Estimates','V7.5.1 · Anggaran Automatik Insurans & Caj Lewat'],
['信用卡独立查看、登记还款、计算保险与迟还费；银行实际费用核对后才记入总欠款。沿用原有负债与还款资料，不自动扣款。','Manage credit cards separately, record repayments, and estimate insurance and late fees. Actual bank charges are added to debt only after verification. Existing debt and repayment records are reused; no automatic deductions.','Urus kad kredit secara berasingan, rekod bayaran balik dan anggar insurans serta caj lewat. Caj sebenar bank hanya ditambah kepada hutang selepas disahkan. Rekod hutang dan bayaran sedia ada digunakan; tiada potongan automatik.'],
['信用卡数量','Number of Credit Cards','Bilangan Kad Kredit'],
['信用卡欠款','Credit Card Balance','Baki Hutang Kad Kredit'],
['信用卡总剩余欠款','Total Outstanding Credit Card Balance','Jumlah Baki Hutang Kad Kredit'],
['已登记还款合计','Total Repayments Recorded','Jumlah Bayaran Balik Direkodkan'],
['＋ 新增信用卡','＋ Add Credit Card','＋ Tambah Kad Kredit'],
['现有「负债类别＝信用卡」的记录会自动列在这里，无须重新输入。一般贷款仍使用前两个页面。','Existing debts categorized as Credit Card appear here automatically; no need to enter them again. Use the first two tabs for other loans.','Hutang sedia ada dalam kategori Kad Kredit dipaparkan di sini secara automatik; tidak perlu masukkan semula. Gunakan dua tab pertama untuk pinjaman lain.'],
['我的信用卡负债','My Credit Card Debts','Hutang Kad Kredit Saya'],
['暂无信用卡记录','No credit cards recorded yet','Belum ada rekod kad kredit'],
['暂无信用卡负债。请点击「＋ 新增信用卡」，完成后会自动显示在这里。','No credit card debts yet. Click “＋ Add Credit Card” to add one.','Belum ada hutang kad kredit. Klik “＋ Tambah Kad Kredit” untuk menambah rekod.'],
['💰 信用卡还款登记','💰 Credit Card Repayment','💰 Rekod Bayaran Balik Kad Kredit'],
['与现有负债还款记录共用同一份账目。选择付款账户后才会扣除对应银行／现金余额；不会生成第二笔普通支出。','Uses the existing debt repayment ledger. Choosing a payment account deducts its bank/cash balance; no duplicate expense transaction is created.','Menggunakan rekod bayaran balik hutang sedia ada. Memilih akaun pembayaran akan menolak baki bank/tunai; tiada transaksi perbelanjaan berganda diwujudkan.'],
['信用卡','Credit Card','Kad Kredit'],
['请选择信用卡','Select a Credit Card','Sila pilih Kad Kredit'],
['请选择要设置的信用卡。','Select a credit card to configure.','Sila pilih kad kredit untuk tetapan.'],
['实际还款日期','Actual Repayment Date','Tarikh Bayaran Balik Sebenar'],
['实际还款金额（RM）','Actual Repayment Amount (RM)','Amaun Bayaran Balik Sebenar (RM)'],
['本次包含额外利息（一般填0）','Additional Interest in This Payment (usually 0)','Faedah Tambahan dalam Bayaran Ini (biasanya 0)'],
['已按账单入账的费用不能在还款时重复加算；信用卡还款建议填0。','Do not add charges already posted from a statement again during repayment; 0 is recommended for credit card payments.','Jangan tambah semula caj yang telah direkodkan daripada penyata semasa bayaran balik; nilai 0 disyorkan untuk bayaran kad kredit.'],
['实际付款账户','Actual Payment Account','Akaun Pembayaran Sebenar'],
['不关联账户（兼容旧记录）','No Linked Account (legacy records)','Tanpa Akaun Dipautkan (rekod lama)'],
['不关联账户','No Linked Account','Tanpa Akaun Dipautkan'],
['备注（可选）','Notes (Optional)','Nota (Pilihan)'],
['例如：CIMB 11月还款','e.g. CIMB November repayment','Contoh: Bayaran balik CIMB bulan November'],
['保存信用卡还款','Save Credit Card Repayment','Simpan Bayaran Balik Kad Kredit'],
['暂无还款记录','No Repayment Records','Tiada Rekod Bayaran Balik'],
['暂无信用卡还款记录','No Credit Card Repayments Recorded','Belum Ada Rekod Bayaran Balik Kad Kredit'],
['🧮 Finance Charges 每日利息估算','🧮 Finance Charges · Daily Interest Estimate','🧮 Finance Charges · Anggaran Faedah Harian'],
['按登记的信用卡欠款与还款日期计算简单日息：每天未还本金 × 年利率 ÷ 365。仅供预算参考，未计入新消费、免息期、保险、罚款或银行其他规则；','Estimate simple daily interest from recorded balances and repayments: outstanding principal each day × annual rate ÷ 365. For planning only; excludes new purchases, interest-free periods, insurance, penalties and other bank rules;','Anggar faedah harian mudah berdasarkan baki dan bayaran balik yang direkodkan: prinsipal tertunggak harian × kadar tahunan ÷ 365. Untuk perancangan sahaja; tidak mengambil kira pembelian baharu, tempoh bebas faedah, insurans, penalti atau syarat bank lain;'],
['不会自动生成实际费用','actual charges will not be posted automatically','caj sebenar tidak akan direkodkan secara automatik'],
['选择信用卡','Select Credit Card','Pilih Kad Kredit'],
['估算开始日期','Estimate Start Date','Tarikh Mula Anggaran'],
['估算结束日期','Estimate End Date','Tarikh Tamat Anggaran'],
['年利率（%）','Annual Interest Rate (%)','Kadar Faedah Tahunan (%)'],
['估算每日利息','Estimate Daily Interest','Anggar Faedah Harian'],
['选择信用卡和估算日期后计算。','Select a credit card and date range to calculate.','Pilih kad kredit dan julat tarikh untuk pengiraan.'],
['🛡️ Credit Protector Plus · 自动估算','🛡️ Credit Protector Plus · Automatic Estimate','🛡️ Credit Protector Plus · Anggaran Automatik'],
['每张卡独立设置保险开关和月保费率；自动依据当前信用卡余额及预计新增 Finance Charges 估算。计算结果不会未经确认就重复入账。','Set insurance coverage and monthly premium rate for each card. Estimates use the current credit card balance plus projected Finance Charges. Estimated amounts are not posted without confirmation.','Tetapkan perlindungan insurans dan kadar premium bulanan bagi setiap kad. Anggaran berdasarkan baki semasa kad kredit serta Finance Charges yang dijangka. Amaun anggaran tidak direkodkan tanpa pengesahan.'],
['Credit Protector Plus 月保费率（%）','Credit Protector Plus Monthly Premium Rate (%)','Kadar Premium Bulanan Credit Protector Plus (%)'],
['预计本期新增 Finance Charges（RM，可选）','Projected Finance Charges This Period (RM, Optional)','Anggaran Finance Charges Baharu Tempoh Ini (RM, Pilihan)'],
['没有可填0','Enter 0 if none','Masukkan 0 jika tiada'],
['此卡已参加 Credit Protector Plus · 开启自动估算','This Card Has Credit Protector Plus · Enable Automatic Estimates','Kad Ini Dilindungi Credit Protector Plus · Aktifkan Anggaran Automatik'],
['保险计费基数（RM，可选覆盖自动数值）','Insurance Premium Base (RM, Optional Manual Override)','Asas Pengiraan Premium Insurans (RM, Pilihan untuk Mengatasi Nilai Automatik)'],
['留空：当前卡债＋预计新增 Finance Charges','Leave blank: current card debt + projected Finance Charges','Biarkan kosong: hutang kad semasa + anggaran Finance Charges baharu'],
['保存本张卡的保险设置','Save Insurance Settings for This Card','Simpan Tetapan Insurans Kad Ini'],
['CIMB Credit Protector Plus 标准费率：每 RM100 月度适用未偿余额收 RM0.60（0.60%）。当前卡债未必完全等于银行保费基数；如银行账单有差异，可覆盖基数或按银行实际保费入账。','CIMB Credit Protector Plus standard rate: RM0.60 per RM100 of eligible monthly outstanding balance (0.60%). The displayed card debt may differ from the bank’s premium base. If your statement differs, override the base or post the actual premium shown by the bank.','Kadar standard CIMB Credit Protector Plus: RM0.60 bagi setiap RM100 baki tertunggak bulanan yang layak (0.60%). Baki hutang dalam aplikasi mungkin berbeza daripada asas premium bank. Jika penyata berbeza, laraskan asas atau rekodkan premium sebenar daripada bank.'],
['⏰ Late Payment Charges · 自动计算','⏰ Late Payment Charges · Automatic Calculation','⏰ Caj Bayaran Lewat · Pengiraan Automatik'],
['以下默认使用 CIMB Malaysia 的规则。输入 Statement Date、Due Date 和 Minimum Payment；自动依据已登记还款判断是否达到最低还款，并预计迟还费。每一期账单分别保存，其他银行请先核对各自条款。','This estimator uses CIMB Malaysia rules by default. Enter the statement date, due date and minimum payment. Recorded repayments are used to check minimum-payment compliance and estimate late fees. Save each statement separately; check other banks’ terms before use.','Penganggar ini menggunakan peraturan CIMB Malaysia secara lalai. Masukkan tarikh penyata, tarikh akhir bayaran dan bayaran minimum. Bayaran yang direkodkan digunakan untuk semak pematuhan bayaran minimum dan anggar caj lewat. Simpan setiap penyata secara berasingan; semak syarat bank lain dahulu.'],
['Statement Date（账单日期）','Statement Date','Tarikh Penyata'],
['Payment Due Date（到期日）','Payment Due Date','Tarikh Akhir Bayaran'],
['Statement Balance（RM）','Statement Balance (RM)','Baki Penyata (RM)'],
['Minimum Payment Due（RM）','Minimum Payment Due (RM)','Bayaran Minimum Perlu Dijelaskan (RM)'],
['计罚适用余额：零售消费＋预借现金（RM，可选）','Eligible Late-Fee Balance: Retail Purchases + Cash Advances (RM, Optional)','Baki Layak Caj Lewat: Pembelian Runcit + Pendahuluan Tunai (RM, Pilihan)'],
['计算截至日期','Calculation As-of Date','Tarikh Pengiraan Sehingga'],
['Late Charges 费率（%）','Late Charges Rate (%)','Kadar Caj Lewat (%)'],
['到期日是公共假期：适用额外4天规则（周末自动识别）','Due Date Falls on a Public Holiday: Apply the Extra 4-Day Rule (weekends detected automatically)','Tarikh Akhir Bayaran Jatuh pada Cuti Umum: Guna Peraturan Tambahan 4 Hari (hujung minggu dikesan automatik)'],
['保存本期账单与保险设置','Save Current Statement & Insurance Settings','Simpan Penyata Semasa dan Tetapan Insurans'],
['新建下一期账单','Create Next Statement','Cipta Penyata Seterusnya'],
['填写账单和截止日期后自动计算。','Enter statement information and the as-of date to calculate automatically.','Masukkan maklumat penyata dan tarikh pengiraan untuk pengiraan automatik.'],
['CIMB：只在截至到期日（适用时加上4个日历日）仍未足额缴付最低还款时，预计收取适用未付零售／预借余额的1%，最低 RM10、最高 RM100。未到期显示「风险预测」，不代表银行已收款。周末4日宽限自动处理，公共假期请勾选；银行实际入账时间可能影响结果。','CIMB estimate: if the minimum payment remains unpaid by the due date (plus four calendar days where applicable), an estimated 1% late fee applies to the eligible unpaid retail/cash-advance balance, subject to RM10 minimum and RM100 maximum. Before the deadline, this is a risk estimate, not a bank-posted charge. Weekend extension is handled automatically; tick public holidays manually. Actual bank posting times may affect the result.','Anggaran CIMB: jika bayaran minimum belum dijelaskan sepenuhnya menjelang tarikh akhir (ditambah empat hari kalendar jika berkenaan), caj lewat dianggarkan 1% atas baki pembelian runcit/pendahuluan tunai yang layak, minimum RM10 dan maksimum RM100. Sebelum tarikh akhir, ini hanya anggaran risiko, bukan caj sebenar bank. Lanjutan hujung minggu dikira automatik; tandakan cuti umum secara manual. Masa bank memproses bayaran boleh menjejaskan hasil.'],
['🧾 银行实际费用核对入账','🧾 Verify & Post Actual Bank Charges','🧾 Semak dan Rekod Caj Sebenar Bank'],
['自动预计不直接改变欠款。只有核对 CIMB 正式账单后，才输入实际 Credit Protector Plus / Late Charges 并确认入账；同一卡同一期同类费用不可重复记账。如果你已经把包含这些费用的完整新账单设为新的期初欠款，不要再次记入费用。','Estimates do not change your debt. Only after verifying the official CIMB statement should you enter actual Credit Protector Plus / Late Charges and confirm posting. Do not record the same charge twice for the same card and statement. If the full new statement (including these charges) was already entered as the opening balance, do not post them again.','Anggaran tidak mengubah hutang. Hanya selepas menyemak penyata rasmi CIMB, masukkan caj sebenar Credit Protector Plus / Late Charges dan sahkan catatan. Jangan rekod caj sama dua kali untuk kad dan penyata yang sama. Jika keseluruhan penyata baharu termasuk caj tersebut telah dimasukkan sebagai baki awal, jangan catat semula.'],
['账单实际保险费（RM）','Actual Insurance Premium on Statement (RM)','Premium Insurans Sebenar pada Penyata (RM)'],
['账单实际 Late Charges（RM）','Actual Late Charges on Statement (RM)','Caj Lewat Sebenar pada Penyata (RM)'],
['我已核对银行正式账单，确定这是实际收费（不是估算）','I Have Checked the Official Bank Statement and Confirm These Are Actual Charges (Not Estimates)','Saya Telah Menyemak Penyata Rasmi Bank dan Mengesahkan Ini Caj Sebenar (Bukan Anggaran)'],
['把预计费用填入待核对栏','Copy Estimated Charges into Verification Fields','Salin Caj Anggaran ke Ruang Semakan'],
['确认费用并记入负债','Confirm and Post Charges to Debt','Sahkan dan Rekod Caj ke Hutang'],
['暂无确认的收费记录。','No Confirmed Charges Yet.','Belum Ada Rekod Caj yang Disahkan.'],
['已保存账单','Saved Statements','Penyata Disimpan'],
['暂无已保存的账单。','No Saved Statements Yet.','Belum Ada Penyata Disimpan.'],
['请选择信用卡查看费用。','Select a credit card to view charges.','Pilih kad kredit untuk melihat caj.'],
['请选择信用卡查看账单。','Select a credit card to view statements.','Pilih kad kredit untuk melihat penyata.'],
['此卡尚无确认的银行费用。','No Confirmed Bank Charges for This Card.','Tiada Caj Bank Disahkan untuk Kad Ini.'],
['尚未保存账单。','No Statements Saved Yet.','Belum Ada Penyata Disimpan.'],
['例如 2192.98','e.g. 2192.98','Contoh: 2192.98'],
['例如 109.65','e.g. 109.65','Contoh: 109.65'],
['例如 13.08','e.g. 13.08','Contoh: 13.08'],
['例如 20.13；无罚款可留空','e.g. 20.13; leave blank if none','Contoh: 20.13; kosongkan jika tiada'],
['留空按账单余额估算；如包含利息等费用建议填写银行适用余额','Leave blank to use statement balance; enter the bank’s eligible balance if fees/interest are included','Biarkan kosong untuk guna baki penyata; masukkan baki layak bank jika termasuk fi/faedah'],
['原始欠款：','Original Debt: ','Hutang Asal: '],
['已还本金：','Principal Repaid: ','Prinsipal Dibayar: '],
['年利率：','Annual Rate: ','Kadar Tahunan: '],
['原定月供：','Scheduled Monthly Payment: ','Bayaran Bulanan Asal: '],
['登记还款','Record Repayment','Rekod Bayaran Balik'],
['查看还款计划','View Repayment Plan','Lihat Jadual Bayaran Balik'],
['编辑信用卡','Edit Credit Card','Edit Kad Kredit'],
['已删除信用卡','Deleted Credit Card','Kad Kredit Telah Dipadam'],
['本金：','Principal: ','Prinsipal: '],
['利息：','Interest: ','Faedah: '],
['预计简单利息','Estimated Simple Interest','Anggaran Faedah Mudah'],
['天','days','hari'],
['起算本金','Opening Principal','Prinsipal Permulaan'],
['期间已登记偿还本金','Principal Repaid During Period','Prinsipal Dibayar dalam Tempoh'],
['结束时本金','Closing Principal','Prinsipal Akhir'],
['按日期的已登记「本金」调整余额，当日还款先扣本金再计算当日利息。不考虑新消费、银行实际入账时间、宽限期或保险；不是银行账单的 Finance Charges，也不会记入负债。','Recorded principal payments adjust the balance on their dates; repayments reduce principal before interest is calculated for that day. New purchases, bank posting times, grace periods and insurance are excluded. This is not the bank’s Finance Charges and is not added to debt.','Bayaran prinsipal yang direkodkan melaraskan baki mengikut tarikh; bayaran pada hari tersebut mengurangkan prinsipal sebelum faedah hari itu dikira. Pembelian baharu, masa pengeposan bank, tempoh ihsan dan insurans tidak diambil kira. Ini bukan Finance Charges sebenar bank dan tidak ditambah kepada hutang.'],
['目前信用卡剩余欠款','Current Outstanding Credit Card Balance','Baki Hutang Kad Kredit Semasa'],
['加：预计新增 Finance Charges','Add: Projected Finance Charges','Tambah: Anggaran Finance Charges Baharu'],
['保险计费基数（自动）','Insurance Premium Base (Auto)','Asas Pengiraan Premium (Automatik)'],
['保险计费基数（手动）','Insurance Premium Base (Manual)','Asas Pengiraan Premium (Manual)'],
['保险状态／费率','Insurance Status / Rate','Status / Kadar Insurans'],
['开启','Enabled','Aktif'],
['关闭','Disabled','Tidak Aktif'],
['自动预计 Credit Protector Plus','Estimated Credit Protector Plus','Anggaran Credit Protector Plus'],
['预估金额，不代表实际收取。已包含在当前欠款中的旧保费不应再次入账。','This is an estimate, not an actual charge. Premiums already included in the current debt must not be posted again.','Ini anggaran, bukan caj sebenar. Premium yang sudah termasuk dalam hutang semasa tidak boleh direkodkan sekali lagi.'],
['请填写有效保险费率／估算金额。','Enter a valid premium rate and estimate amount.','Masukkan kadar premium dan amaun anggaran yang sah.'],
['请先选择信用卡，并填写完整的账单日期、到期日、账单余额和最低还款额。','Select a credit card and enter the statement date, due date, statement balance and minimum payment.','Pilih kad kredit serta masukkan tarikh penyata, tarikh akhir bayaran, baki penyata dan bayaran minimum.'],
['账单最低还款','Minimum Statement Payment','Bayaran Minimum Penyata'],
['还差最低还款','Remaining Minimum Payment','Baki Bayaran Minimum'],
['适用计罚日期','Applicable Late-Fee Date','Tarikh Caj Lewat Terpakai'],
['（4天宽限）','(4-day grace period)','(tempoh ihsan 4 hari)'],
['暂估未付消费／预借计罚余额','Estimated Eligible Unpaid Retail / Cash-Advance Balance','Anggaran Baki Layak Tertunggak Runcit / Pendahuluan Tunai'],
['预计可能收取 Late Charges','Potential Late Charges','Caj Lewat Berpotensi'],
['到期仍未足额时的预计 Late Charges','Estimated Late Charges if Underpaid at Due Date','Anggaran Caj Lewat Jika Bayaran Tidak Mencukupi pada Tarikh Akhir'],
['已满足最低还款，预计无迟还费','Minimum payment met; no late fee expected','Bayaran minimum dipenuhi; tiada caj lewat dijangka'],
['尚未超过计罚日期：如到期仍不足，可能产生迟还费','Late-fee date has not passed; a fee may apply if minimum payment remains unpaid','Tarikh caj lewat belum berlalu; caj mungkin dikenakan jika bayaran minimum masih tidak mencukupi'],
['选定的未来日期超过计罚日期：假设期间没有新增还款，可能产生迟还费','Selected future date is past the late-fee date; assuming no further payments, a fee may apply','Tarikh masa depan yang dipilih melepasi tarikh caj lewat; dengan andaian tiada bayaran lanjut, caj mungkin dikenakan'],
['计罚日期已过且最低还款不足：预计可能产生迟还费','Late-fee date passed and minimum payment unmet; a late fee may apply','Tarikh caj lewat telah berlalu dan bayaran minimum tidak dipenuhi; caj lewat mungkin dikenakan'],
['注意：目前按整张账单余额估算，包含旧利息、保险等非适用款项时罚款可能有偏差；请填写准确的零售／预借计罚余额。','Caution: this uses the full statement balance. Past interest, insurance or ineligible items may distort the estimate; enter the correct eligible retail/cash-advance balance.','Perhatian: anggaran menggunakan keseluruhan baki penyata. Faedah lama, insurans atau item tidak layak boleh menyebabkan perbezaan; masukkan baki runcit/pendahuluan tunai yang layak dengan tepat.'],
['计罚基数按你填写的适用余额估算。','The late-fee base uses your entered eligible balance.','Asas caj lewat menggunakan baki layak yang anda masukkan.'],
['系统只根据已登记还款计算，银行实际入账日和付款分配方式可能不同。','Calculations use recorded repayments only; actual bank posting dates and payment allocation may differ.','Pengiraan hanya menggunakan bayaran yang direkodkan; tarikh pengeposan dan pengagihan bayaran sebenar bank mungkin berbeza.'],
['已按银行账单确认','Verified Against Bank Statement','Disahkan Berdasarkan Penyata Bank'],
['删除错误费用','Delete Incorrect Charge','Padam Caj Salah'],
['截止：','Due: ','Tarikh Akhir: '],
['最低应还','Minimum Due','Bayaran Minimum'],
['账单','Statement','Penyata'],
['查看／编辑','View / Edit','Lihat / Edit'],
['删除','Delete','Padam'],
['例如：','e.g. ','Contoh: '],

// V7.5.1 English cleanup — standalone UI labels and payment/debt empty states.
['收入记录','Income Records','Rekod Pendapatan'],
['支出记录','Expense Records','Rekod Perbelanjaan'],
['暂无符合条件的收入记录','No matching income records found.','Tiada rekod pendapatan yang sepadan.'],
['暂无符合条件的支出记录','No matching expense records found.','Tiada rekod perbelanjaan yang sepadan.'],
['没有可还款的负债','No debts available for repayment.','Tiada hutang tersedia untuk bayaran balik.'],
['🎨 自定义支出类别与图标','🎨 Customize Expense Categories & Icons','🎨 Sesuaikan Kategori & Ikon Perbelanjaan'],
['仅供新增支出使用。既有自定义收入类别及历史交易资料仍保留，不会被删除。','For expense entries only. Existing custom income categories and transaction history will be preserved.','Untuk catatan perbelanjaan sahaja. Kategori pendapatan tersuai dan sejarah transaksi sedia ada akan dikekalkan.'],
['▣ 新增账户与余额','▣ Add Account & Balance','▣ Tambah Akaun & Baki'],
['新增账户与余额','Add Account & Balance','Tambah Akaun & Baki'],
['点击负债清单中的「还款计划」查看逐期明细；记录部分还款后会重新计算剩余计划，未还差额优先补入下一期。预计计划不会自动扣款。','Click “Repayment Schedule” in the Debt List to view the details for each installment. After a partial repayment, the remaining schedule will be recalculated, with unpaid amounts carried forward to the next installment. The projected schedule does not automatically deduct payments.','Klik “Jadual Bayaran Balik” dalam Senarai Hutang untuk melihat butiran setiap ansuran. Selepas bayaran separa direkodkan, jadual baki akan dikira semula dan amaun tertunggak dibawa ke ansuran berikutnya. Jadual anggaran tidak membuat potongan automatik.'],
['请选择关联账户','Select a Linked Account','Pilih Akaun Berkaitan'],
['关联账户','Linked Account','Akaun Berkaitan'],
['例如 2192.98','e.g. 2192.98','Contoh: 2192.98'],
['例如 109.65','e.g. 109.65','Contoh: 109.65'],
['留空按账单余额估算；如包含利息等费用建议填写银行适用余额','Leave blank to estimate from the statement balance; if it includes interest or other charges, enter the eligible balance specified by your bank.','Biarkan kosong untuk anggaran berdasarkan baki penyata; jika termasuk faedah atau caj lain, masukkan baki layak yang ditentukan oleh bank.'],
['MyMoney NEXT · V7.5.1 · 财务资料仅储存于本机 · 请定期备份 JSON','MyMoney NEXT · V7.5.1 · Financial data is stored locally on this device · Back up your data regularly (JSON)','MyMoney NEXT · V7.5.1 · Data kewangan disimpan secara setempat pada peranti ini · Sila buat sandaran JSON secara berkala'],
];
const lookup=new Map();
const aliases={
 '💳 Kad KreditPengurusan Hutang':'💳 信用卡负债管理',
 '💳 Kad Kredit Pengurusan Hutang':'💳 信用卡负债管理',
 'V7.5.1 · 保险与迟还自动计算':'V7.5.1 · 保险与迟还自动计算',
 '我的Kad Kredit负债':'我的信用卡负债',
 '💰 Kad Kredit还款登记':'💰 信用卡还款登记',
 'Kad Kredit数量':'信用卡数量',
 'Kad Kredit总Baki Hutang':'信用卡总剩余欠款',
 '请选择Kad Kredit':'请选择信用卡',
 '选择Kad Kredit':'选择信用卡',
 '暂无Kad Kredit负债。请点击「＋ 新增Kad Kredit」，完成后会自动显示在这里。':'暂无信用卡负债。请点击「＋ 新增信用卡」，完成后会自动显示在这里。',
 '＋ 新增Kad Kredit':'＋ 新增信用卡',
 '保存Kad Kredit还款':'保存信用卡还款',
 '实际Tarikh Bayaran Balik':'实际还款日期',
 '实际Amaun Bayaran Balik (RM)':'实际还款金额（RM）',
 '已按账单入账的费用不能在还款时重复加算；Kad Kredit还款建议填0。':'已按账单入账的费用不能在还款时重复加算；信用卡还款建议填0。',
 '暂无Kad KreditRekod Bayaran Balik':'暂无信用卡还款记录',
 '暂无Kad Kredit Rekod Bayaran Balik':'暂无信用卡还款记录',
 '选择Kad Kredit和估算日期后计算.':'选择信用卡和估算日期后计算。',
 '选择Kad Kredit和估算日期后计算。':'选择信用卡和估算日期后计算。',
 '请选择Kad Kredit查看费用。':'请选择信用卡查看费用。',
 '请选择Kad Kredit查看账单。':'请选择信用卡查看账单。',
 '按登记的Kad Kredit欠款与Tarikh Bayaran Balik计算简单日息：每天未还本金 × Kadar Faedah Tahunan ÷ 365。仅供预算参考，未计入新消费、免息期、保险、罚款或银行其他规则；':'按登记的信用卡欠款与还款日期计算简单日息：每天未还本金 × 年利率 ÷ 365。仅供预算参考，未计入新消费、免息期、保险、罚款或银行其他规则；'
};

// Partial word replacement by older language modules can leave hybrid strings.
Object.assign(aliases,{
 '请选择Credit Card':'请选择信用卡',
 '请选择Kad Kredit':'请选择信用卡',
 '暂无Credit CardDebts。请点击「＋ AddCredit Card」，完成后会自动显示在这里。':'暂无信用卡负债。请点击「＋ 新增信用卡」，完成后会自动显示在这里。',
 '暂无Credit CardDebts。请点击「＋ Add Credit Card」，完成后会自动显示在这里。':'暂无信用卡负债。请点击「＋ 新增信用卡」，完成后会自动显示在这里。',
 '暂无Credit CardRepayment History':'暂无信用卡还款记录',
 '暂无Credit CardRekod Bayaran Balik':'暂无信用卡还款记录',
 '请选择Credit Card查看费用。':'请选择信用卡查看费用。',
 '请选择Credit Card查看账单。':'请选择信用卡查看账单。',
 '例如：CIMB 11月Repayment':'例如：CIMB 11月还款',
 '例如：CIMB 11月Bayaran Balik':'例如：CIMB 11月还款',
 '留空：当前卡债＋预计Add Finance Charges':'留空：当前卡债＋预计新增 Finance Charges',
 '留空：当前卡债＋预计New Finance Charges':'留空：当前卡债＋预计新增 Finance Charges',
 '留空按账单Balance估算；如包含Interest等费用建议填写Bank适用Balance':'留空按账单余额估算；如包含利息等费用建议填写银行适用余额',
 '留空按账单Balance估算；如包含Interest等费用建议填写Bank适用Balance':'留空按账单余额估算；如包含利息等费用建议填写银行适用余额',
 '暂无符合条件的Income记录':'暂无符合条件的收入记录',
 '暂无符合条件的Expense记录':'暂无符合条件的支出记录',
 '没有可Repayment的Debts':'没有可还款的负债',
 '没有可Repayment的Debt':'没有可还款的负债',
 '仅供AddExpense使用。既有自定义IncomeCategory及历史交易资料仍保留，不会被Delete。':'仅供新增支出使用。既有自定义收入类别及历史交易资料仍保留，不会被删除。',
 '🎨 自定义ExpenseCategory与图标':'🎨 自定义支出类别与图标',
 '点击Debt List中的「Repayment Schedule」查看逐期Details；记录部分Repayment后会重新计算剩余计划，未还差额优先补入下一期。预计计划不会自动扣款。':'点击负债清单中的「还款计划」查看逐期明细；记录部分还款后会重新计算剩余计划，未还差额优先补入下一期。预计计划不会自动扣款。',
 '▣ Add Account与Balance':'▣ 新增账户与余额',
 'Add Account与Balance':'新增账户与余额',
 '例如 2192.98':'例如 2192.98',
 '例如 109.65':'例如 109.65',
 '填写账单和截止Date后自动计算.':'填写账单和截止日期后自动计算。',
 '填写账单和截止Date后自动计算。':'填写账单和截止日期后自动计算。',
 '填写账单和截止日期后自动计算.':'填写账单和截止日期后自动计算。',
 '选择Credit Card和估算Date后计算.':'选择信用卡和估算日期后计算。',
 '选择Credit Card和估算Date后计算。':'选择信用卡和估算日期后计算。',
 '选择Credit Card和估算日期后计算.':'选择信用卡和估算日期后计算。',
 '选择Credit Card和估算日期后计算。':'选择信用卡和估算日期后计算。',
 'MyMoney NEXT · V7.5.1 · 财务资料仅储存于本机 · 请定期Backup JSON':'MyMoney NEXT · V7.5.1 · 财务资料仅储存于本机 · 请定期备份 JSON',
 'MyMoney NEXT · V7.5.1 · Financial data is stored locally · 请定期Backup JSON':'MyMoney NEXT · V7.5.1 · 财务资料仅储存于本机 · 请定期备份 JSON',
});
const normalize=s=>s.replace(/\s+/g,' ').trim();
for(const d of D){for(const v of d)lookup.set(normalize(v),d)}
for(const [k,v] of Object.entries(aliases)){const d=lookup.get(normalize(v));if(d)lookup.set(normalize(k),d)}
const base=new WeakMap();
const currentLang=()=>{
 try{const p=JSON.parse(localStorage.getItem(PREF)||'{}');const v=p.lang||document.documentElement.lang||'zh-CN';return /^ms/i.test(v)?'ms':/^en/i.test(v)?'en':'zh'}catch(e){return /^ms/i.test(document.documentElement.lang)?'ms':/^en/i.test(document.documentElement.lang)?'en':'zh'}
};
const idx=l=>l==='en'?1:l==='ms'?2:0;
function firstText(el){if(!el)return null;return [...el.childNodes].find(n=>n.nodeType===3)||null}
function setFirst(el,key,lang){const d=lookup.get(normalize(key));if(!el||!d)return;const n=firstText(el);if(!n)return;const val=d[idx(lang)];if(n.nodeValue.trim()!==val)n.nodeValue=val;}
const fixed=[
 ['#debtCreditView > .box:nth-child(1) > h2','💳 信用卡负债管理'],
 ['#debtCreditView > .box:nth-child(1) .v750-version','V7.5.1 · 保险与迟还自动计算'],
 ['#debtCreditView > .box:nth-child(1) > p.hint:nth-of-type(1)','信用卡独立查看、登记还款、计算保险与迟还费；银行实际费用核对后才记入总欠款。沿用原有负债与还款资料，不自动扣款。'],
 ['#debtCreditView > .box:nth-child(1) > p.hint:nth-of-type(2)','现有「负债类别＝信用卡」的记录会自动列在这里，无须重新输入。一般贷款仍使用前两个页面。'],
 ['#debtCreditView > .box:nth-child(2) > h2','我的信用卡负债'],
 ['#debtCreditView > .box:nth-child(3) > h2','💰 信用卡还款登记'],
 ['#debtCreditView > .box:nth-child(3) > p.hint','与现有负债还款记录共用同一份账目。选择付款账户后才会扣除对应银行／现金余额；不会生成第二笔普通支出。'],
 ['#v750PayInterest + small.v751-small','已按账单入账的费用不能在还款时重复加算；信用卡还款建议填0。'],
 ['#debtCreditView > .box:nth-child(4) > p.hint','按登记的信用卡欠款与还款日期计算简单日息：每天未还本金 × 年利率 ÷ 365。仅供预算参考，未计入新消费、免息期、保险、罚款或银行其他规则；'],
 ['#debtCreditView > .box:nth-child(4) > p.hint > strong','不会自动生成实际费用'],
 ['#debtCreditView > .box:nth-child(4) > h2','🧮 Finance Charges 每日利息估算'],
 ['#debtCreditView > .box:nth-child(5) > h2','🛡️ Credit Protector Plus · 自动估算'],
 ['#debtCreditView > .box:nth-child(5) > p.hint','每张卡独立设置保险开关和月保费率；自动依据当前信用卡余额及预计新增 Finance Charges 估算。计算结果不会未经确认就重复入账。'],
 ['#debtCreditView > .box:nth-child(5) > p.v751-note','CIMB Credit Protector Plus 标准费率：每 RM100 月度适用未偿余额收 RM0.60（0.60%）。当前卡债未必完全等于银行保费基数；如银行账单有差异，可覆盖基数或按银行实际保费入账。'],
 ['#debtCreditView > .box:nth-child(6) > h2','⏰ Late Payment Charges · 自动计算'],
 ['#debtCreditView > .box:nth-child(6) > p.hint','以下默认使用 CIMB Malaysia 的规则。输入 Statement Date、Due Date 和 Minimum Payment；自动依据已登记还款判断是否达到最低还款，并预计迟还费。每一期账单分别保存，其他银行请先核对各自条款。'],
 ['#debtCreditView > .box:nth-child(6) > p.v751-note','CIMB：只在截至到期日（适用时加上4个日历日）仍未足额缴付最低还款时，预计收取适用未付零售／预借余额的1%，最低 RM10、最高 RM100。未到期显示「风险预测」，不代表银行已收款。周末4日宽限自动处理，公共假期请勾选；银行实际入账时间可能影响结果。'],
 ['#debtCreditView > .box:nth-child(7) > h2','🧾 银行实际费用核对入账'],
 ['#debtCreditView > .box:nth-child(7) > p.hint','自动预计不直接改变欠款。只有核对 CIMB 正式账单后，才输入实际 Credit Protector Plus / Late Charges 并确认入账；同一卡同一期同类费用不可重复记账。如果你已经把包含这些费用的完整新账单设为新的期初欠款，不要再次记入费用。'],
 ['#debtCreditView > .box:nth-child(7) > .box h3','已保存账单'],
 ['#v750CreditSummary .metric:nth-child(1) span','信用卡数量'],
 ['#v750CreditSummary .metric:nth-child(2) span','信用卡总剩余欠款'],
 ['#v750CreditSummary .metric:nth-child(3) span','已登记还款合计'],
 ['#v750AddCard','＋ 新增信用卡'],
 ['#v750PaymentForm button[type="submit"]','保存信用卡还款'],
 ['#v750EstimateBtn','估算每日利息'],
 ['#v751SaveInsurance','保存本张卡的保险设置'],
 ['#v751SaveStatement','保存本期账单与保险设置'],
 ['#v751NewStatement','新建下一期账单'],
 ['#v751FillPreview','把预计费用填入待核对栏'],
 ['#v751PostFees','确认费用并记入负债']
];
const fieldLabels={
 v750PayCard:'信用卡',v750PayDate:'实际还款日期',v750PayAmount:'实际还款金额（RM）',
 v750PayInterest:'本次包含额外利息（一般填0）',v750PayAccount:'实际付款账户',v750PayNote:'备注（可选）',
 v750EstimateCard:'选择信用卡',v750EstimateStart:'估算开始日期',v750EstimateEnd:'估算结束日期',v750EstimateRate:'年利率（%）',
 v751Card:'选择信用卡',v751PremiumRate:'Credit Protector Plus 月保费率（%）',v751ProjectedFinance:'预计本期新增 Finance Charges（RM，可选）',
 v751PremiumEnabled:'此卡已参加 Credit Protector Plus · 开启自动估算',v751PremiumBase:'保险计费基数（RM，可选覆盖自动数值）',
 v751StatementDate:'Statement Date（账单日期）',v751DueDate:'Payment Due Date（到期日）',
 v751StatementBalance:'Statement Balance（RM）',v751MinimumDue:'Minimum Payment Due（RM）',
 v751EligibleBase:'计罚适用余额：零售消费＋预借现金（RM，可选）',v751AsOf:'计算截至日期',v751RateLate:'Late Charges 费率（%）',
 v751Holiday:'到期日是公共假期：适用额外4天规则（周末自动识别）',
 v751ActualPremium:'账单实际保险费（RM）',v751ActualLate:'账单实际 Late Charges（RM）',v751Verified:'我已核对银行正式账单，确定这是实际收费（不是估算）'
};
function translateFields(lang){
 for(const [id,key] of Object.entries(fieldLabels)){
  const input=document.getElementById(id);if(!input)continue;
  const label=input.closest('label')||document.querySelector('#debtCreditView label[for="'+id+'"]');
  if(!label)continue;
  const d=lookup.get(normalize(key));if(!d)continue;
  const textNode=[...label.childNodes].find(n=>n.nodeType===3&&n.nodeValue.trim());
  if(textNode&&textNode.nodeValue.trim()!==d[idx(lang)])textNode.nodeValue=d[idx(lang)];
 }
}
const dynamicPairs=[
 ['原始欠款：','Original Debt: ','Hutang Asal: '],['已还本金：','Principal Repaid: ','Prinsipal Dibayar: '],
 ['年利率：','Annual Rate: ','Kadar Tahunan: '],['原定月供：','Scheduled Monthly Payment: ','Bayaran Bulanan Asal: '],
 ['本金：','Principal: ','Prinsipal: '],['利息：','Interest: ','Faedah: '],
 ['截止：','Due: ','Tarikh Akhir: '],['最低应还','Minimum Due','Bayaran Minimum'],
 ['账单最低还款','Minimum Statement Payment','Bayaran Minimum Penyata'],
 ['还差最低还款','Remaining Minimum Payment','Baki Bayaran Minimum'],
 ['适用计罚日期','Applicable Late-Fee Date','Tarikh Caj Lewat Terpakai'],
 ['暂估未付消费／预借计罚余额','Estimated Eligible Unpaid Retail / Cash-Advance Balance','Anggaran Baki Layak Tertunggak Runcit / Pendahuluan Tunai'],
 ['保险计费基数（自动）','Insurance Premium Base (Auto)','Asas Pengiraan Premium (Automatik)'],
 ['保险计费基数（手动）','Insurance Premium Base (Manual)','Asas Pengiraan Premium (Manual)']
];
const rxSpecial=[
 {re:/^本期已登记还款（截至\s*(\d{4}-\d{2}-\d{2})，限到期前有效）$/,en:x=>`Repayments Recorded This Period (as of ${x}, before due date)`,ms:x=>`Bayaran Direkodkan Tempoh Ini (sehingga ${x}, sebelum tarikh akhir)`}
];
const longPhrases=D.filter(d=>d[0].length>=7).sort((a,b)=>b[0].length-a[0].length);
function translateDynamicParts(s,lang){
 let val=s;
 // Normalize when another translator has already processed part of a generated message.
 for(const d of longPhrases){for(const t of d.slice(1)){if(t.length>=8)val=val.split(t).join(d[0])}}
 for(const d of longPhrases)val=val.split(d[0]).join(d[idx(lang)]);
 // Preserve dates, money and numerical results, translating only fixed prefixes.
 for(const [zh,en,ms] of dynamicPairs)val=val.split(zh).join(lang==='en'?en:lang==='ms'?ms:zh);
 if(lang!=='zh'&&/[\u3400-\u9fff]/.test(val))val=val.replace(/。/g,'. ');
 return val;
}
function translateNode(n,lang){
 const text=n.nodeValue;if(!text||!text.trim())return;
 if(!base.has(n))base.set(n,text);
 let canonical=base.get(n);const matchCurrent=lookup.get(normalize(text));
 let entry=lookup.get(normalize(canonical))||matchCurrent;
 if(entry){const translated=entry[idx(lang)];const white=text.match(/^\s*/)?.[0]||'';const tail=text.match(/\s*$/)?.[0]||'';const result=white+translated+tail;
   if(n.nodeValue!==result)n.nodeValue=result;
   return;
 }
 // For generated credit-card summaries, keep money values and user names unchanged.
 const element=n.parentElement;
 if(!element?.closest('#v750CardList .v750-details,#v750PaymentHistory .sub,#v750EstimateResult,#v751PremiumResult,#v751LateResult,#v751StatementHistory .sub,#v751FeeHistory .sub'))return;
 let val=canonical;
 for(const item of rxSpecial){const m=val.match(item.re);if(m){val=lang==='en'?item.en(...m.slice(1)):lang==='ms'?item.ms(...m.slice(1)):canonical;break}}
 if(val===canonical)val=translateDynamicParts(canonical,lang);
 if(n.nodeValue!==val)n.nodeValue=val;
}
function fixEmptyCreditMessages(lang){
 const slots=[
  ['v750PaymentHistory','暂无信用卡还款记录'],
  ['v750EstimateResult','选择信用卡和估算日期后计算。'],
  ['v751FeeHistory','请选择信用卡查看费用。'],
  ['v751StatementHistory','请选择信用卡查看账单。']
 ];
 for(const [id,key] of slots){
  const el=document.getElementById(id),entry=lookup.get(normalize(key));
  if(!el||!entry||el.children.length)continue;
  const n=firstText(el);if(!n||!n.nodeValue.trim())continue;
  // Only normalize UI prompts, never overwrite computed output or user records.
  const text=normalize(n.nodeValue);
  const variants=[...entry,'暂无Kad KreditRekod Bayaran Balik','暂无Kad Kredit Rekod Bayaran Balik',
    '选择Kad Kredit和估算日期后计算.','选择Kad Kredit和估算日期后计算。',
    '请选择Kad Kredit查看费用。','请选择Kad Kredit查看账单。'];
  if(variants.some(v=>normalize(v)===text)){
    const value=entry[idx(lang)];if(n.nodeValue!==value)n.nodeValue=value;
  }
 }
}

// Repair mixed-language UI leftovers without touching user-entered data or balances.
function v751PatchStatic(lang){
 const i=idx(lang);
 const find=key=>lookup.get(normalize(key))?.[i];
 const setText=(el,key)=>{
  if(!el)return;
  const val=find(key);if(!val)return;
  // Do not replace child elements holding record amounts or account names.
  const n=[...el.childNodes].find(n=>n.nodeType===3&&n.nodeValue.trim());
  if(n&&n.nodeValue.trim()!==val)n.nodeValue=val;
 };
 const setPlain=(el,key)=>{
  if(!el||el.children.length)return;
  const val=find(key);if(val&&el.textContent.trim()!==val)el.textContent=val;
 };
 const title=document.getElementById('v7412RecordTitle');
 if(title){
  const text=title.textContent;
  const expense=/支出|Expense|Perbelanjaan/i.test(text);
  setPlain(title,expense?'支出记录':'收入记录');
 }
 const tx=document.getElementById('txList');
 if(tx&&!tx.children.length){
  const v=normalize(tx.textContent);
  const isEmpty=/暂无|No matching (?:income|expense)|Tiada rekod (?:pendapatan|perbelanjaan)/i.test(v);
  if(isEmpty)setPlain(tx,/支出|Expense|Perbelanjaan/i.test(v)?'暂无符合条件的支出记录':'暂无符合条件的收入记录');
 }
 const payDebt=document.querySelector('#payDebt option[value=""]');
 if(payDebt&&/没有可|No debts available|Tiada hutang/i.test(payDebt.textContent))setPlain(payDebt,'没有可还款的负债');
 setPlain(document.getElementById('v735AccountMode'),'▣ 新增账户与余额');
 const cat=document.getElementById('v7412ExpenseCategoryEditor');
 if(cat){setText(cat.querySelector('summary strong'),'🎨 自定义支出类别与图标');
 setPlain(cat.querySelector('p.hint'),'仅供新增支出使用。既有自定义收入类别及历史交易资料仍保留，不会被删除。');}
 const repayment=document.getElementById('debtRepayView');
 if(repayment)setPlain(repayment.querySelector('.box > p.hint'),'点击负债清单中的「还款计划」查看逐期明细；记录部分还款后会重新计算剩余计划，未还差额优先补入下一期。预计计划不会自动扣款。');
 // Existing credit card fields are dynamic: only modify empty options and placeholders.
 const credit=document.getElementById('debtCreditView');if(!credit)return;
 for(const select of credit.querySelectorAll('select')){
  const option=select.querySelector('option[value=""]');if(!option)continue;
  const text=normalize(option.textContent);
  if(/请选择(?:信用卡|Credit Card|Kad Kredit)|Select a Credit Card|Sila pilih Kad Kredit/i.test(text))setPlain(option,'请选择信用卡');
 }
 const cardList=document.getElementById('v750CardList');
 if(cardList&&!cardList.children.length&&/暂无|No credit card debts|Belum ada hutang kad kredit/i.test(cardList.textContent))setPlain(cardList,'暂无信用卡负债。请点击「＋ 新增信用卡」，完成后会自动显示在这里。');
 const note=document.getElementById('v750PayNote');
 if(note){const val=find('例如：CIMB 11月还款');if(val&&note.placeholder!==val)note.placeholder=val;}
 const premium=document.getElementById('v751PremiumBase');
 if(premium){const val=find('留空：当前卡债＋预计新增 Finance Charges');if(val&&premium.placeholder!==val)premium.placeholder=val;}
 const statement=document.getElementById('v751StatementBalance');
 if(statement&&/例如|e\.g\.|Contoh/.test(statement.placeholder)){const val=find('例如 2192.98');if(val&&statement.placeholder!==val)statement.placeholder=val;}
 const minimum=document.getElementById('v751MinimumDue');
 if(minimum&&/例如|e\.g\.|Contoh/.test(minimum.placeholder)){const val=find('例如 109.65');if(val&&minimum.placeholder!==val)minimum.placeholder=val;}
 const eligible=document.getElementById('v751EligibleBase');
 if(eligible){const val=find('留空按账单余额估算；如包含利息等费用建议填写银行适用余额');if(val&&eligible.placeholder!==val)eligible.placeholder=val;}
  // The main program rewrites these messages when no card/dates are selected.
  // Only translate the known prompts, never computed totals or saved results.
  const knownPrompt=(id,key,extra)=>{
    const el=document.getElementById(id),d=lookup.get(normalize(key));
    if(!el||!d||el.children.length)return;
    const current=normalize(el.textContent);
    const variants=[...d,...extra].map(normalize);
    if(variants.includes(current))setPlain(el,key);
  };
  knownPrompt('v751LateResult','填写账单和截止日期后自动计算。',[
    '填写账单和截止Date后自动计算.','填写账单和截止Date后自动计算。',
    '填写账单和截止日期后自动计算.'
  ]);
  knownPrompt('v750EstimateResult','选择信用卡和估算日期后计算。',[
    '选择Credit Card和估算Date后计算.','选择Credit Card和估算Date后计算。',
    '选择Credit Card和估算日期后计算.','选择Credit Card和估算日期后计算。'
  ]);
  // Footer sits outside the credit-card panel and was skipped by earlier versions.
  const footer=document.querySelector('main > footer')||document.querySelector('footer');
  const footerKey='MyMoney NEXT · V7.5.1 · 财务资料仅储存于本机 · 请定期备份 JSON';
  if(footer&&!footer.children.length){
    const old=normalize(footer.textContent),d=lookup.get(normalize(footerKey));
    const variants=[...d,
      'MyMoney NEXT · V7.5.1 · 财务资料仅储存于本机 · 请定期Backup JSON',
      'MyMoney NEXT · V7.5.1 · Financial data is stored locally · 请定期Backup JSON'];
    if(variants.map(normalize).includes(old))setPlain(footer,footerKey);
  }
 // Keep payment/account names untouched; only edit empty-state select options.
 const linked=document.querySelector('#txAccount option[value=""]');
 if(linked&&/请选择|Select a Linked Account|Pilih Akaun Berkaitan/i.test(linked.textContent))setPlain(linked,'请选择关联账户');
}

function render(){
 const root=document.getElementById('debtCreditView');if(!root)return;
 const lang=currentLang();
 // Set stable UI strings even if older translators produced mixed text.
 for(const [sel,key] of fixed)setFirst(document.querySelector(sel),key,lang);
 translateFields(lang);
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode(n){
  const p=n.parentElement;
  if(!p||p.closest('script,style,textarea,pre,code,[contenteditable]'))return NodeFilter.FILTER_REJECT;
  if(p.closest('option')&&p.closest('option').value)return NodeFilter.FILTER_REJECT;
  // Never alter labels that come from users (names, account names, notes).
  if(p.closest('#v750CardList .name,#v750PaymentHistory .name'))return NodeFilter.FILTER_REJECT;
  return NodeFilter.FILTER_ACCEPT;
 }});
 const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
 for(const n of nodes)translateNode(n,lang);
 for(const el of root.querySelectorAll('[placeholder]')){
  const old=el.getAttribute('placeholder');if(!old)continue;
  const d=lookup.get(normalize(old));if(d){const v=d[idx(lang)];if(old!==v)el.setAttribute('placeholder',v)}
 }
 // Previous Malay translations can create mixed-language text; normalize the card summary labels.
 for(const [sel,key] of fixed)setFirst(document.querySelector(sel),key,lang);
 translateFields(lang);
 fixEmptyCreditMessages(lang);
 v751PatchStatic(lang);
}
let scheduled=false;
function schedule(){if(scheduled)return;scheduled=true;requestAnimationFrame(()=>{scheduled=false;render()})}
function init(){
 schedule();
 document.addEventListener('click',schedule);
 document.addEventListener('change',schedule);
 document.addEventListener('input',e=>{if(e.target.closest('#debtCreditView'))schedule()});
 const watcher=new MutationObserver(ms=>{if(ms.some(m=>m.type==='childList'||m.type==='characterData'))schedule()});
 watcher.observe(document.getElementById('debtCreditView')||document.body,{childList:true,characterData:true,subtree:true});
 // These non-credit empty-state labels are generated on demand by the main app.
 for(const id of ['txList','v7412RecordTitle','v7412ExpenseCategoryEditor','payDebt','debtRepayView','v735AccountMode']){
   const el=document.getElementById(id);if(el)watcher.observe(el,{childList:true,characterData:true,subtree:true});
 }

 const footer=document.querySelector('main > footer')||document.querySelector('footer');
 if(footer)watcher.observe(footer,{childList:true,characterData:true,subtree:true});
 // English/Malay settings can change from the Settings tab, outside the credit panel.
 const picker=document.getElementById('v604Language');if(picker)picker.addEventListener('change',()=>{schedule();requestAnimationFrame(schedule)});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
