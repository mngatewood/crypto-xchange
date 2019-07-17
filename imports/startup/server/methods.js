Meteor.methods({
  'submitNewTransaction': function(transaction) {
    let fromAccount = Accounts.findOne(transaction.fromAccount);
    let toAccount = Accounts.findOne(transaction.toAccount);
    let fromAccountName = fromAccount.desc;
    let toAccountName = toAccount.desc;
    let fromBalance = fromAccount.bal;
    let toBalance = toAccount.bal;
    let amount = transaction.amount;

    transaction.fromAccount = fromAccountName
    transaction.toAccount = toAccountName

    Accounts.update(fromAccount, { $set: { bal: fromBalance - amount }})
    Accounts.update(toAccount, { $set: { bal: toBalance + amount }})
    Transactions.insert(transaction)
  }
})