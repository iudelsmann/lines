import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngMaterial from 'angular-material';
import uiRouter from '@uirouter/angularjs';
import ngMessages from 'angular-messages';

import routesConfig from '../imports/ui/config/routesConfig';

import LineController from '../imports/ui/components/line/lineController';
import LineTemplate from '../imports/ui/components/line/lineTemplate.html';

// Initialize the app
angular.module('lines', [
  angularMeteor,
  ngMaterial,
  uiRouter,
  ngMessages,
])

// TODO: Move elsewhere
// Line compoenent
.component('line', {
  templateUrl: LineTemplate,
  controller: LineController,
  bindings: {
    name: '@',
  },
})

// Adds logout method to rootscope as it will be available anywhere in the app
.run(($rootScope, $state) => {
  'ngInject';

  // eslint-disable-next-line no-param-reassign
  $rootScope.logout = () => {
    Meteor.logout(async () => {
      await $state.go('login');
    });
  };
})

.config(routesConfig);
