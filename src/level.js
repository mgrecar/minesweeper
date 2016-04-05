var level = class Level {
  create() {
    this.tileGrid = [];
    var rows = 5;
    var columns = 5;
    var gridCellWidth = 30;
    var gridCellHeight = 30;
    for (let x = 0; x < rows; x++) {
      for (let y = 0; y < columns; y++) {
        var gridTile = this.add.sprite(5 + x * gridCellWidth, 5 + y * gridCellHeight, 'mine');
        this.tileGrid.push(gridTile);
      }
    }
  }
};

export default level;
