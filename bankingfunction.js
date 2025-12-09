function toValidNumber(value) {
    const num = Number(value);
    return isNaN(num) ? null : num;
}


function processBankAccount(accountData) {
    const {
        accountNumber,
        accountHolder,
        initialBalance,
        currency,
        transactions
    } = accountData;

    let finalBalance = 0;
    let applied = [];
    let rejected = [];
    let auditLog = "";

    try {
        
        const validInitBal = toValidNumber(initialBalance);
        if (validInitBal === null || validInitBal < 0) {
            throw new Error("Invalid initial balance");
        }

        finalBalance = validInitBal;
        for (let t of transactions) {
            try {
                if (!t || !t.type) {
                    rejected.push({
                        transaction: t,
                        reason: "Missing transaction type"
                    });
                    continue;
                }

                const type = t.type.toLowerCase().trim();
                const amount = toValidNumber(t.amount);

                
                if (amount === null || amount <= 0) {
                    rejected.push({
                        transaction: t,
                        reason: "Invalid transaction amount"
                    });
                    continue;
                }

                
                if (type === "deposit") {
                    finalBalance += amount;
                    applied.push({
                        type: "Deposit",
                        amount
                    });
                } else if (type === "withdraw") {
                    if (amount > finalBalance) {
                        rejected.push({
                            transaction: t,
                            reason: "Insufficient balance"
                        });
                    } else {
                        finalBalance -= amount;
                        applied.push({
                            type: "Withdraw",
                            amount
                        });
                    }
                } else {
                    rejected.push({
                        transaction: t,
                        reason: "Unknown transaction type"
                    });
                }
            } catch (err) {
                rejected.push({
                    transaction: t,
                    reason: "System Error: " + err.message
                });
            }
        }
    } catch (err) {
        console.log("💥 Processing stopped due to error:", err.message);
        auditLog = "System crashed during input validation.";
    } finally {
        if (!auditLog) {
            auditLog = "Processing completed successfully (finally block executed).";
        }
        console.log("\n🔍 AUDIT LOG:");
        console.log(auditLog);
    }

    
    console.log("\n====================================");
    console.log("🏦 ACCOUNT SUMMARY");
    console.log("====================================");
    console.table({
        "Account Number": accountNumber,
        "Account Holder": accountHolder,
        "Currency": currency,
        "Initial Balance": initialBalance,
        "Final Balance": finalBalance
    });

    console.log("\n📌 APPLIED TRANSACTIONS:");
    console.table(applied);

    console.log("\n❌ REJECTED TRANSACTIONS:");
    console.table(rejected);
}



const accountInput = {
    accountNumber: "ACC-9921",
    accountHolder: "divya parmar",
    initialBalance: "1500",
    currency: "USD",
    transactions: [
        { type: "Deposit", amount: "500" },
        { type: "Withdraw", amount: "200" },
        { type: "Withdraw", amount: "2000" }, 
        { type: "Deposit", amount: "-50" },   
        { type: "", amount: "100" },         
        { amount: 300 },                       
        { type: "Transfer", amount: 100 },     
        { type: "Withdraw", amount: "abc" },   
    ]
};


processBankAccount(accountInput);


