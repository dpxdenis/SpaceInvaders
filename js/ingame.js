class Game {
    constructor() {
        this.canvas = {
            x : 400,
            y : 400
        }
        this.playerImage = ship;
        this.player = new Player(0, 0, 50, 50, this.playerImage, this.canvas);

        this.player.position.set(
            this.canvas.x / 2 + this.player.size.x / 2,
            this.canvas.y - this.player.size.y / 2
        );
    }

    draw() {
        background(200);

        this.player.update();
        this.player.display();
    }
}

function keyPressed() {
    if (keyCode === SPACE) {
        player.shoot();
    }
}