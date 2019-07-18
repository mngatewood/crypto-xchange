import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Accounts } from '../../api/accounts/accounts.js';
import { Transactions } from '../../api/transactions/transactions.js';

import './routes.js';
import './accounts-config.js';

import '../../ui/accounts/accounts.js';
import '../../ui/transactions/transactions.js';
import '../../ui/transactions/newTransfer.js';
import '../../ui/transactions/newDeposit.js';

import '../../ui/layouts/dashboard.html';
import '../../ui/accounts/newAccount.html';
import '../../ui/accounts/accounts.html';
import '../../ui/transactions/transactions.html';
import '../../ui/transactions/newTransfer.html';
import '../../ui/transactions/newDeposit.html';

