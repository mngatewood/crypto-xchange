Meteor.methods({
  'submitNewTransfer': function(transaction) {
    var fromAccount = Accounts.findOne(transaction.fromAccount);
    var toAccount = Accounts.findOne(transaction.toAccount);
    var fromAccountName = fromAccount.desc;
    var toAccountName = toAccount.desc;
    var fromBalance = fromAccount.bal;
    var toBalance = toAccount.bal;
    var amount = transaction.amount;

    if(amount > fromBalance) {
      throw new Meteor.Error('insufficient funds');
    }

    transaction.fromAccount = fromAccountName
    transaction.toAccount = toAccountName

    if(fromAccount && toAccount && amount) {
      Accounts.update(fromAccount, { $set: { bal: fromBalance - amount }})
      Accounts.update(toAccount, { $set: { bal: toBalance + amount }})
      Transactions.insert(transaction)
    } else if(amount) {
      throw new Meteor.Error('unable to find the accounts');
    } else {
      throw new Meteor.Error('please enter an amount greater than zero');
    }
  },
})