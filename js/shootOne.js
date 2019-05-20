class shootOne {
    constructor(position) {
        this.position = position
        this.size = createVector(10, 10)
        this.flySpeed = 10;
        this.dead = false;
    }

    update() {
        this.position.set(this.position.x, this.position.y - this.flySpeed);

        if (this.position.y <= 0 - this.size.y) {
            this.dead = true;
        }
    }

    display() {
        circle(this.position.x, this.position.y, this.size.x, this.size.y);
    }
}