const Asteroid = require('./asteroid.js')

class Game {
    static DIM_X = 720;
    static DIM_Y = 720;
    static NUM_ASTEROIDS = 4;

    constructor() {
        this.asteroids = this.addAsteroids();
    }

    addAsteroids() {
        let output = [];
        let i = 0;
        while (i < Game.NUM_ASTEROIDS) {
            let input = this.randomPosition();
            input['game'] = this;
            output.push(new Asteroid(input))

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

    wrap(pos) {
        let output = pos;
        output[0] = (output[0] + Game.DIM_X) % Game.DIM_X;
        output[1] = (output[1] + Game.DIM_Y) % Game.DIM_Y;

        return output;
    }

    checkCollisions() {
        for (let i = 0; i < this.asteroids.length; i++) {
            for (let j = i+1; j < this.asteroids.length; j++) {
                let asteroid1 = this.asteroids[i];
                let asteroid2 = this.asteroids[j];

                if (asteroid1.isCollidedWith(asteroid2)) {
                    alert("COLLISION");
                }
            }
        }
    }

    step() {
        this.moveObjects();
        this.checkCollisions();
    }
}


module.exports = Game;
