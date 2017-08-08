import addToLineTemplate from '../addToLine/addToLineTemplate.html';
import AddToLineController from '../addToLine/addToLineController';

class MainScreenController {
  constructor($mdDialog, user) {
    'ngInject';

    this.$mdDialog = $mdDialog;
    this.user = user;
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
