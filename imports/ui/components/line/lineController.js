import _ from 'lodash';
import { Mongo } from 'meteor/mongo';

class LineController {
  constructor($reactive, $scope) {
    'ngInject';

    $reactive(this).attach($scope);
  }

  $onInit() {
    this.Line = new Mongo.Collection(`line_${this.name}`);

    this.helpers({
      line() {
        return this.Line.find({}, {
          sort: {
            createdAt: 1,
          },
        });
      },
    });
  }

  pop() {
    const lineToRemove = this.Line.findOne({}, {
      sort: {
        createdAt: 1,
      },
    });

    if (!_.isNil(lineToRemove)) {
      this.Line.remove(lineToRemove._id);
    }
  }
}

export default LineController;
