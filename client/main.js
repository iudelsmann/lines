import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngMaterial from 'angular-material';
import uiRouter from '@uirouter/angularjs';
import ngMessages from 'angular-messages';

import routesConfig from '../imports/ui/config/routesConfig';

import LineController from '../imports/ui/components/line/lineController';
import LineTemplate from '../imports/ui/components/line/lineTemplate.html';


angular.module('lines', [
    angularMeteor,
    ngMaterial,
    uiRouter,
    ngMessages,
  ])

  .component('line', {
    templateUrl: LineTemplate,
    controller: LineController,
    bindings: {
      name: '@',
    },
  })

  .run(($rootScope, $state) => {
    'ngInject';

    // eslint-disable-next-line no-param-reassign
    $rootScope.logout = () => {
      Meteor.logout(() => {
        $state.go('login');
      });
    };
  })

  .config(routesConfig);
