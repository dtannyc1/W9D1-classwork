console.log("Webpack is working!")
const MovingObject = require ('./moving_object.js')
const Asteroid = require ('./asteroid.js')
const Game = require ('./game.js')


const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d")
// const mo = new MovingObject({
//     pos: [30, 30],
//     vel: [10, 10],
//     radius: 5,
//     color: "#00FF00"
//   });
// mo.draw(ctx);

// const ast = new Asteroid({ pos: [30,30] });
// ast.draw(ctx);
const game = new Game();

canvas.width = Game.DIM_X;
canvas.height = Game.DIM_Y;

game.draw(ctx);

window.MovingObject = MovingObject;
window.game = game;
window.ctx = ctx;
