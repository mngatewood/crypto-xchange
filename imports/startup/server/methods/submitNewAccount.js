import { check, match } from 'meteor/check';

Meteor.methods({
  'submitNewAccount': function(account) {
    check(account, Object)
    Accounts.insert(account)
  },
})