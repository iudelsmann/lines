import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

class LoginController {
  constructor($state, $mdToast, $log) {
    'ngInject';

    this.$state = $state;
    this.$mdToast = $mdToast;
    this.$log = $log;
  }

  login() {
    Meteor.loginWithPassword(this.username, this.password, (error) => {
      if (_.isNil(error)) {
        return this.$state.go('lines');
      }
      this.$log.warn('Error loging in');
      this.$log.warn(error);

      return this.$mdToast.show(this.$mdToast.simple().textContent('Usuário ou senha inválido').position('top right'));
    });
  }

  signup() {
    Accounts.createUser({
      username: this.username,
      email: this.email,
      password: this.password,
    }, (error) => {
      if (_.isNil(error)) {
        return this.$state.go('lines');
      }
      this.$log.warn('Error creating user');
      this.$log.warn(error);

      return this.$mdToast.show(this.$mdToast.simple().textContent('Usuário ou e-mail já cadsatrado').position('top right'));
    });
  }
}

export default LoginController;
