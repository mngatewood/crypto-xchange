Meteor.publish('accounts', function () {
  return Accounts.find({ owner: this.userId })
})
