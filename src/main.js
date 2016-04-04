import 'pixi';
import 'p2';
import Phaser from 'phaser';

import preloader from './preloader'; 
import menu from './menu'; 

var game = new Phaser.Game(200, 200, Phaser.AUTO, 'game');

game.state.add('Preloader', preloader);
game.state.add('Menu', menu);

game.state.start('Preloader');
