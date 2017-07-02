import Lines from '../../../api/lines/collection';
import Line from '../../../api/line/collection';

class AddToLineController {
  constructor($mdDialog, $reactive, $scope) {
    'ngInject';

    this.$mdDialog = $mdDialog;

    $reactive(this).attach($scope);

    this.helpers({
      lines() {
        return Lines.find({});
      },
    });
  }

  confirm() {
    this.item.createdAt = new Date();
    Line.insert(this.item);
    this.$mdDialog.hide();
  }

  close() {
    this.$mdDialog.hide();
  }
}

export default AddToLineController;
