class MovingObject {
    constructor (options) {
        this.pos = options.pos;
        this.vel = options.vel;
        this.radius = options.radius;
        this.color = options.color;
        this.game = options.game;
    }


    draw(ctx) {
        ctx.beginPath()
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = (this.color);
        ctx.strokeStyle = this.color
        ctx.stroke();
        ctx.fill();
    }

    move() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
        this.pos = this.game.wrap(this.pos)
    }

    isCollidedWith(otherObject) {
        let x1 = this.pos[0];
        let y1 = this.pos[1];
        let x2 = otherObject.pos[0];
        let y2 = otherObject.pos[1];

        let dist = Math.sqrt( (x1 - x2)**2 + (y1 - y2)**2 );

        if (this.radius + otherObject.radius > dist) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = MovingObject;
