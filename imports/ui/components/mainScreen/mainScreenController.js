import addToLineTemplate from '../addToLine/addToLineTemplate.html';

class MainScreenController {
  constructor($mdDialog) {
    'ngInject';

    this.$mdDialog = $mdDialog;
  }

  add() {
    this.$mdDialog.show({
      templateUrl: addToLineTemplate,
    });
  }

}

export default MainScreenController;
