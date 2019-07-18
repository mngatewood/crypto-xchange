Meteor.publish('accounts', function () {
  return Accounts.find({ owner: this.userId })
})

Meteor.publish('transactions', function () {
  return Transactions.find({ owner: this.userId })
})
