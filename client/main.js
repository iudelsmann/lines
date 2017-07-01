import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngMaterial from 'angular-material';
import uiRouter from '@uirouter/angularjs';

import LineController from '../imports/ui/components/line/lineController';
import LineTemplate from '../imports/ui/components/line/lineTemplate.html';

import MainScreenController from '../imports/ui/components/mainScreen/mainScreenController';
import MainScreenTemplate from '../imports/ui/components/mainScreen/mainScreenTemplate.html';

angular.module('lines', [
  angularMeteor,
  ngMaterial,
  uiRouter,
])

.component('line', {
  templateUrl: LineTemplate,
  controller: LineController,
  bindings: {
    name: '@',
  },
})

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $stateProvider.state('main', {
    url: '/',
    templateUrl: MainScreenTemplate,
    controller: MainScreenController,
  });

  $urlRouterProvider.otherwise('/');
});
