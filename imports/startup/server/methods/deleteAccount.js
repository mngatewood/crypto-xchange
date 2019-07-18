import { check, match } from 'meteor/check';

Meteor.methods({
  'deleteAccount': function(accountId) {
    check(accountId, String)

    const account = Accounts.findOne(accountId);

    if (account.owner !== Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    } else if (account.bal !== 0) {
      throw new Meteor.Error('cannot delete an account with a balance');
    } else {
      Accounts.remove(accountId);
    };
  },
});