Meteor.methods({
  'submitNewDeposit': function(transaction) {
    console.log("here")
    var toAccount = Accounts.findOne(transaction.toAccount);
    var toAccountName = toAccount.desc;
    var toBalance = toAccount.bal;
    var amount = transaction.amount;
    if (amount > 10000) {
      throw new Meteor.Error('amount exceeds single deposit limit');
    }

    transaction.toAccount = toAccountName

    if (toAccount && amount > 0) {
      Accounts.update(toAccount, { $set: { bal: toBalance + amount } })
      Transactions.insert(transaction)
    } else if(amount) {
      throw new Meteor.Error('unable to find the accounts');
    } else {
      throw new Meteor.Error('please enter an amount greater than zero');
    }
  },  
})