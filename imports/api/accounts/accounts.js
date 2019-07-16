import SimpleSchema from 'simpl-schema';

Accounts = new Mongo.Collection('accounts');

Accounts.allow({
  insert: function(userId, doc) {
    return !!userId;
  }
});

Accounts.attachSchema(new SimpleSchema({
  den: {
    type: String,
    label: "Denomination"
  },
  desc: {
    type: String,
    label: "Description"
  },
  bal: {
    type: Number,
    label: "Account Balance"
  },
  owner: {
    type: String,
    label: "Account Owner",
    autoValue: function () {
      return this.userId
    },
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function () {
      return new Date()
    }
  },
}));

export default Accounts