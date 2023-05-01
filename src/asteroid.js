const MovingObject = require("./moving_object");
const Util = require("./util");

// import * as Util from "./util.js";

class Asteroid extends MovingObject{
    static RADIUS = 25;
    static COLOR = "gray";

    constructor(options) {
        options.color = Asteroid.COLOR;
        options.radius = Asteroid.RADIUS;
        options.vel = Util.randomVec(1);
        
        super(options)
    }
}

module.exports = Asteroid;
