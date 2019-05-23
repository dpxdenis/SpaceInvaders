var player;
var ingameCanvas;
var enemys = [];
var score = 0;

class Game {
    constructor() {
        ingameCanvas = createVector(windowWidth * 0.56, windowHeight * 0.56);
        player = new Player(50, 50, ship, ingameCanvas.copy());
        spawnEnemys(3,12);
        let enemyUpdateInterval = setInterval(function() {
          updateEnemys();
        }, 1000);
    }

    draw() {
        background(0);

        player.update();
        player.display();

        displayEnemys();
        enemyIsOnGround();
        drawScore();
        startTheme();
    }
}

function keyPressed() {
    if (keyCode == 32) {
       player.shoot();
    }
}

function startTheme(){
    if(!soundIngame.isPlaying() && gameState == 1) {
        soundIngame.setVolume(0.3);
        soundIngame.loop();
        soundIngame.play();
    }
}

function drawScore(){
    push();
    textSize(16)
    fill(255)
    text('Score: ' + score, 0, 15)
    pop();
}
