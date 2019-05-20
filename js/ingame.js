var player;
var ingameCanvas;
var enemys = [];

class Game {
    constructor() {
        ingameCanvas = createVector(windowWidth * 0.56, windowHeight * 0.56);
        player = new Player(50, 50, ship, ingameCanvas.copy());
        spawnEnemys(3,12);
    }
    
    draw() {
        background(0);      

        player.update();
        player.display();

        displayEnemys();

        drawScore();
    }
}

function keyPressed() {
    if (keyCode == 32) {
       player.shoot();
    }
}

function drawScore(){
    push();
    textSize(16)
    fill(255)
    text('Score: 0', 0, 15)
    pop();
}