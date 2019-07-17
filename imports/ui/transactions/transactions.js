import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import Transactions from '../../api/transactions/transactions.js';
import './transaction.html';
import './transactions.html';
import './newTransfer.html';

Template.transactions.onCreated(function transactionsOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('transactions')
})

Template.transactions.helpers({
  transactions() {
    return Transactions.find({});
  },
});

