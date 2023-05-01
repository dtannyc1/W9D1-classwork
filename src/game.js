const Asteroid = require('./asteroid.js')

class Game {
    static DIM_X = 720;
    static DIM_Y = 720;
    static NUM_ASTEROIDS = 10;

    constructor() {
        this.asteroids = this.addAsteroids();
    }

    addAsteroids() {
        let output = [];
        let i = 0;
        while (i < Game.NUM_ASTEROIDS) {
            output.push(new Asteroid(this.randomPosition()))

            i++
        }
        return output;
    }

    randomPosition() {
        let output = {'pos':[]};
        output['pos'].push(Math.random()*Game.DIM_X)
        output['pos'].push(Math.random()*Game.DIM_Y)
        return output;
    }

    draw(ctx) {
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

        // for (let i = 0; i < this.asteroids.length; i++){
        //     this.asteroids[i].draw(ctx);
        // };

        this.asteroids.forEach(function(asteroid) {
            asteroid.draw(ctx);
        })

        // this.asteroids.forEach((asteroid) => {
        //     asteroid.draw(ctx);
        // })
    }

    moveObjects() {
        this.asteroids.forEach(function(asteroid) {
            asteroid.move();
        });
    }
}


module.exports = Game;
