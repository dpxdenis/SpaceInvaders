class Game {
    constructor() {
        this.canvas = {
            x : windowWidth * 0.76,
            y : windowHeight * 0.76
        }

        this.player = new Player(0, 0, 50, 50, ship, this.canvas);
        
        this.player.position.set(
            this.canvas.x / 2 - this.player.size.x / 2,
            this.canvas.y - this.player.size.y
        );
    }
    
    draw() {
        background(200);
        this.player.update();
        this.player.display();
    }
}

function keyPressed() {
    if (keyCode == 32) {
       this.player.shoot();
       console.log('FIRE');
    }
}