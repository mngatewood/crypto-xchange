import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import Accounts from '../../api/accounts/accounts.js';
import Transactions from '../../api/transactions/transactions.js';
import './newTransfer.html';

Template.newTransfer.onCreated(function newTransferOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('accounts')
})

Template.newTransfer.helpers({
  accountOptions: function () {
    return Accounts.find().map(function (account) {
      return { label: account.desc, value: account._id };
    });
  }
});

