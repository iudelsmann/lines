import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngMaterial from 'angular-material';

import LineController from '../imports/components/line/lineController';
import LineTemplate from '../imports/components/line/lineTemplate';

angular.module('lines', [
  angularMeteor,
  ngMaterial,
])

.component('line', {
  templateUrl: LineTemplate,
  controller: LineController,
});
