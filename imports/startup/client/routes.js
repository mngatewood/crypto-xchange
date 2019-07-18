import { Router } from 'meteor/iron:router';
import '../../ui/layouts/home.html';
import '../../ui/layouts/dashboard.html';

Router.route('/', function () {
  this.render('Home');
});

Router.route('/dashboard', function () {
  this.render('Dashboard');
});
