var menu = class Menu {
  create() {
    this.menuImage = this.add.sprite(100, 100, 'mine');
    this.input.onDown.addOnce(this.start, this);
  }

  start() {
    this.state.start('Level');
  }
};

export default menu;
