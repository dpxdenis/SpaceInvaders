class Game{
    constructor() {
        this.canvasX = 400;
        this.canvasY = 400;
        this.playerImage;
        this.player = new Player(0, 0, 10, 10, this.playerImage);

        this.player.position.set(
            this.canvasX / 2 + this.player.size.x / 2,
            this.canvasY - this.player.size.y / 2
        );
    }

    draw(){
        this.player.update();
        this.player.display();
    }
}