import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import Transactions from '../../api/transactions/transactions.js';
import './transaction.html';

Template.transaction.onCreated(function transactionOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('transactions')
})

Template.transaction.helpers({
  dayCreatedAt() {
    return this.createdAt.toString().split(" ").slice(0,4).join(' ');
  },
});

