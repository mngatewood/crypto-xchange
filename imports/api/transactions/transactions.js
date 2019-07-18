import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Transactions = new Mongo.Collection('transactions');

Transactions.allow({
  insert: function (userId, doc) {
    return !!userId;
  }
});

Transactions.attachSchema(new SimpleSchema({
  fromAccount: {
    type: String,
    label: "From Account"
  },
  toAccount: {
    type: String,
    label: "To Account"
  },
  desc: {
    type: String,
    label: "Description"
  },
  amount: {
    type: Number,
    label: "Amount"
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

export default Transactions