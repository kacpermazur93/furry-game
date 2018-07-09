var Coin = require('./coin.js');
var Furry = require('./furry.js');


function Game() {
    this.board = document.querySelectorAll("#board > div");
    this.furry = new Furry();
    this.coin = new Coin();
    this.score = 0;
    this.interval = 250;
    var self = this;


    this.index = function (x, y) {
        return x + (y * 10);
    };


    this.showFurry = function () {
        this.board[this.index(this.furry.x, this.furry.y)].classList.add('furry');
    };


    this.hideVisibleFurry = function () {
        var elementFurry = document.querySelector(".furry");
        elementFurry.classList.remove("furry");
    };


    this.showCoin = function () {
        this.board[this.index(this.coin.x, this.coin.y)].classList.add('coin');
    };


    this.moveFurry = function () {
        this.hideVisibleFurry();
        if (this.furry.direction === "right") {
            this.furry.x = this.furry.x + 1;
        }
        else if (this.furry.direction === "left") {
            this.furry.x = this.furry.x - 1;
        }
        else if (this.furry.direction === "down") {
            this.furry.y = this.furry.y + 1;
        }
        else if (this.furry.direction === "up") {
            this.furry.y = this.furry.y - 1;
        }
        
        this.checkCoinCollision();
        if(!this.gameOver()) this.showFurry();

    };

    this.idSetInterval = setInterval(function () {
        self.moveFurry();
    }, self.interval);


    this.turnFurry = function (event) {
        switch (event.which) {
            case 37:
                this.furry.direction = 'left';
                break;
            case 38:
                this.furry.direction = 'up';
                break;
            case 39:
                this.furry.direction = 'right';
                break;
            case 40:
                this.furry.direction = 'down';
                break;
        }
    };

    document.addEventListener('keydown', function (event) {
        self.turnFurry(event);
    });


    this.checkCoinCollision = function () {
        if (this.furry.x === this.coin.x && this.furry.y === this.coin.y) {

            var elementCoin = document.querySelector(".coin");
            elementCoin.classList.remove("coin");
            this.score++;
            var elementScore = document.querySelector('#score strong');
            elementScore.innerText = this.score;
            this.coin = new Coin();
            this.showCoin();

            clearInterval(this.idSetInterval);
            this.interval -= 5;
            this.idSetInterval = setInterval(function () {
                self.moveFurry();
            }, self.interval);

        }
    };


    this.gameOver = function () {

        if (this.furry.x < 0 || this.furry.x > 9 || this.furry.y < 0 || this.furry.y > 9) {
            clearInterval(this.idSetInterval);
            alert('GAME OVER! \nSCORE: ' + this.score);
            return true; //
        }
        else return false; //
    };
}


module.exports = Game;