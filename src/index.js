console.log("Webpack is working!")
const GameView = require ('./game_view.js')
// const Asteroid = require ('./asteroid.js')
const gameview = new GameView();
gameview.start();



// const mo = new MovingObject({
//     pos: [30, 30],
//     vel: [10, 10],
//     radius: 5,
//     color: "#00FF00"
//   });
// mo.draw(ctx);

// const ast = new Asteroid({ pos: [30,30] });
// ast.draw(ctx);
