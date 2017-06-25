import Line from '../../../api/line/collection';

class LineController {
  constructor($reactive, $scope) {
    'ngInject';

    $reactive(this).attach($scope);

    this.helpers({
      line() {
        return Line.find({}, {
          sort: {
            createdAt: -1,
          }
        });
      }
    });
  }
}

export default LineController;
