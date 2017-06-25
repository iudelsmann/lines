class LineController {
  constructor() {
    console.log('Entrei aqui');

    this.line  = [{
      name: 'This is task 1',
      createdAt: new Date(),
    }, {
      name: 'This is task 2',
      createdAt: new Date(),
    }, {
      name: 'This is task 3',
      createdAt: new Date(),
    }];
  }
}

export default LineController;
