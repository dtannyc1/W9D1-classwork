const Asteroid = require('./asteroid.js')
class Game {
    static DIM_X = 1280;
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
}


module.exports = Game
