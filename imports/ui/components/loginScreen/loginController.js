import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

/**
 * Controller for the login screen
 */
class LoginController {
  /**
   * Creates an instance of LoginController.
   *
   * @param {$state} $state ui-router $state service
   * @param {$mdToast} $mdToast angular material toast service
   * @param {$log} $log angular $log service
   */
  constructor($state, $mdToast, $log) {
    'ngInject';

    this.$state = $state;
    this.$mdToast = $mdToast;
    this.$log = $log;
  }

  /**
   * Logs a user in.
   */
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

  /**
   * Creates a new user.
   */
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
