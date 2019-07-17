import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import Accounts from '../../api/accounts/accounts.js';
import Transactions from '../../api/transactions/transactions.js';
import './newWithdrawal.html';

Template.newWithdrawal.onCreated(function newWithdrawalOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('accounts');
})

Template.newWithdrawal.helpers({
  accountOptions: function () {
    return Accounts.find().map(function (account) {
      return { label: account.desc, value: account._id };
    });
  }
});

