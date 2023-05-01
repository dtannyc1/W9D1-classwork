const Game = require ('./game.js')
class GameView {
    constructor() {
        this.canvas = document.getElementById("game-canvas");
        this.ctx = this.canvas.getContext("2d")
        this.game = new Game();
        this.canvas.width = Game.DIM_X;
        this.canvas.height = Game.DIM_Y;
    }

    start() {
        let that = this;
        window.setInterval(function() {
            that.game.moveObjects();
            that.game.draw(that.ctx);
        }, 20);
    }
}


module.exports = GameView
