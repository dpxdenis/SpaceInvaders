var player;
var ingameCanvas;
var enemys = [[]];

class Game {
    constructor() {
        ingameCanvas = createVector(windowWidth * 0.56, windowHeight * 0.56);
        player = new Player(50, 50, ship, ingameCanvas.copy());
        spawnEnemys(4,6);
    }
    
    draw() {
        background(0);      

        player.update();
        player.display();

        displayEnemys();
    }
}

function keyPressed() {
    if (keyCode == 32) {
       player.shoot();
    }
}