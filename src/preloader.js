var preloader = class Preloader {
  preload() {
    this.load.image('mine', 'assets/mine.png');
  }

  create() {
    this.state.start('Menu');
  }
}

export default preloader;
