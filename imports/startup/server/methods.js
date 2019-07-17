Meteor.methods({
  'submitNewTransaction': function(transaction) {
    let fromAccount = Accounts.findOne(transaction.fromAccount);
    let toAccount = Accounts.findOne(transaction.toAccount);
    let fromAccountName = fromAccount.desc;
    let toAccountName = toAccount.desc;
    let fromBalance = fromAccount.bal;
    let toBalance = toAccount.bal;
    let amount = transaction.amount;

    if(amount > fromBalance) {
      throw new Meteor.Error('insufficient funds');
    }

    transaction.fromAccount = fromAccountName
    transaction.toAccount = toAccountName

    if(fromAccount && toAccount) {
      Accounts.update(fromAccount, { $set: { bal: fromBalance - amount }})
      Accounts.update(toAccount, { $set: { bal: toBalance + amount }})
      Transactions.insert(transaction)
    } else {
      throw new Meteor.Error('unable to find the accounts');
    }
  }
})