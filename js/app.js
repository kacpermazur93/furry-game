document.addEventListener("DOMContentLoaded", function(event) {

    var Game = require('./game.js');

    var game = new Game();
    game.showFurry();
    game.showCoin();

});