const MovingObject = require("./moving_object");

import * as Util from "./util.js";

class Asteroid extends MovingObject{
    static RADIUS = 25;
    static COLOR = "gray";

    constructor(options) {
        options.color = COLOR;
        options.radius = RADIUS;
        options.vel = Util.randomVec(1);

        super(options)
    }
}

module.exports = Asteroid;
