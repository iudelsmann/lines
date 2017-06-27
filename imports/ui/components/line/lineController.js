import _ from 'lodash';
import Line from '../../../api/line/collection';

class LineController {
  constructor($reactive, $scope) {
    'ngInject';

    $reactive(this).attach($scope);
  }

  $onInit() {
    this.helpers({
      line() {
        return Line.find({
          line: this.name,
        }, {
          sort: {
            createdAt: 1,
          },
        });
      },
    });
  }

  pop() {
    const lineToRemove = Line.findOne({
      line: this.name,
    }, {
      sort: {
        createdAt: 1,
      },
    });

    if (!_.isNil(lineToRemove)) {
      Line.remove(lineToRemove._id);
    }
  }
}

export default LineController;
