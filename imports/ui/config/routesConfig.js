import _ from 'lodash';

import MainScreenController from '../components/mainScreen/mainScreenController';
import MainScreenTemplate from '../components/mainScreen/mainScreenTemplate.html';

import LoginController from '../components/loginScreen/loginController.js';
import LoginTemplate from '../components/loginScreen/loginTemplate.html';

/**
 * Validates that a user is logged in and returns the logged user.
 *
 * @param {Angular.$q} $q injected $q service form angular
 * @param {ui-router.$state} $state injected state service from ui-router
 * @return {Promise<User>} a promise that resolves to a user if one is logged in
 */
function user($q, $state) {
  if (_.isNil(Meteor.userId())) {
    return $state.go('login').then(() => $q.reject('AUTH_REQUIRED'));
  }
  return $q.resolve();
}

function routes($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: LoginTemplate,
      controller: LoginController,
      controllerAs: '$ctrl',
    })

    .state('lines', {
      url: '/lines',
      templateUrl: MainScreenTemplate,
      controller: MainScreenController,
      controllerAs: '$ctrl',
      resolve: {
        user,
      },
    });

  $urlRouterProvider.otherwise('/lines');
}

export default routes;
