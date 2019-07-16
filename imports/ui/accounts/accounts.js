import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import Accounts from '../../api/accounts/accounts.js';
import './account.html';
import './accounts.html';

Template.accounts.onCreated(function accountsOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('accounts')
})

Template.accounts.helpers({
  accounts() {
    return Accounts.find({});
  },
});

