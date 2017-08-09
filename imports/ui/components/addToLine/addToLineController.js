import _ from 'lodash';

import Lines from '../../../api/lines/collection';
import Line from '../../../api/line/collection';


class AddToLineController {
  constructor($mdDialog, $reactive, $scope, $mdToast, $log) {
    'ngInject';

    this.$mdDialog = $mdDialog;
    this.$mdToast = $mdToast;
    this.$log = $log

    $reactive(this).attach($scope);

    this.helpers({
      lines() {
        return Lines.find({});
      },
    });
  }

  confirm() {
    this.item.createdAt = new Date();
    Line.insert(this.item, (error) => {
      if (_.isNil(error)) {
        this.$mdDialog.hide();
      } else {
        this.$log.error(error);
        this.$mdToast.show(this.$mdToast.simple().textContent('Erro ao inserir').position('top right'));
      }
    });
  }

  close() {
    this.$mdDialog.hide();
  }
}

export default AddToLineController;
