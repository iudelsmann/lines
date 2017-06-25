import angular from 'angular';
import angularMeteor from 'angular-meteor';
import ngMaterial from 'angular-material';

import LineController from '../imports/ui/components/line/lineController';
import LineTemplate from '../imports/ui/components/line/lineTemplate';

angular.module('lines', [
  angularMeteor,
  ngMaterial,
])

.component('line', {
  templateUrl: LineTemplate,
  controller: LineController,
});