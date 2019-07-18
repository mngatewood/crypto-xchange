import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import Accounts from '../../api/accounts/accounts.js';
import './account.html';

Template.account.onCreated(function accountOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('accounts')
})

Template.account.events({
  'click .delete'() {
    Meteor.call('deleteAccount', this._id)
  },
});