Meteor.methods({
  'submitNewWithdrawal': function(transaction) {
    console.log("here")
    var fromAccount = Accounts.findOne(transaction.fromAccount);
    var fromAccountName = fromAccount.desc;
    var fromBalance = fromAccount.bal;
    var amount = transaction.amount;
    if (amount > 10000) {
      throw new Meteor.Error('amount exceeds single withdrawal limit');
    }

    transaction.fromAccount = fromAccountName

    if (fromAccount && amount > 0) {
      Accounts.update(fromAccount, { $set: { bal: fromBalance - amount } })
      Transactions.insert(transaction)
    } else if(amount) {
      throw new Meteor.Error('unable to find the accounts');
    } else {
      throw new Meteor.Error('please enter an amount greater than zero');
    }
  },  
})