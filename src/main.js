import 'pixi';
import 'p2';
import Phaser from 'phaser';

import preloader from './preloader'; 
import menu from './menu'; 
import level from './level'; 

var game = new Phaser.Game(200, 200, Phaser.AUTO, 'game');

game.state.add('Preloader', preloader);
game.state.add('Menu', menu);
game.state.add('Level', level);

game.state.start('Preloader');
