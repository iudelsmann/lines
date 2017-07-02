import addToLineTemplate from '../addToLine/addToLineTemplate.html';
import AddToLineController from '../addToLine/addToLineController';

class MainScreenController {
  constructor($mdDialog) {
    'ngInject';

    this.$mdDialog = $mdDialog;
  }

  add() {
    this.$mdDialog.show({
      templateUrl: addToLineTemplate,
      controller: AddToLineController,
      controllerAs: '$ctrl',
    });
  }

}

export default MainScreenController;
