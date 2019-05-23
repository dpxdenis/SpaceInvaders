var shootCooldown = 0

class Player {
    constructor(w, h, image, canvas) {
        this.size = createVector(w, h);
        this.image = image;
        this.moveSpeed = 5;
        this.shoots = [];
        this.shootCooldown = 0;
        this.timer;
        this.canvas = canvas;
        this.margin = 5;

        this.position = createVector(
            this.canvas.x / 2 - this.size.x / 2,
            this.canvas.y - this.size.y - this.margin
             //ingameCanvas.x / 2 - 50 / 2, ingameCanvas.y - 50 - 5,
        );

        //If shit bugs USE THIS!
        //player.position = createVector(0, 0);
        //player.position.x = ingameCanvas.x / 2 - player.size.x / 2;
        //player.position.y = ingameCanvas.y - player.size.y - player.margin;
    }

    update() {
        if (keyIsDown(LEFT_ARROW)) {
            let cur = this.position.x - this.moveSpeed;
            let min = this.margin;
            let max = this.canvas.x - this.size.x - this.margin;

            this.position.x = clamp(cur, min, max);
        }

        if(keyIsDown(RIGHT_ARROW)) {
            let cur = this.position.x + this.moveSpeed;
            let min = this.margin;
            let max = this.canvas.x - this.size.x - this.margin;

            this.position.x = clamp(cur, min, max);
        }

        if (this.shoots.length > 0) {
            for (let index = 0; index < this.shoots.length; index++) {
                const element = this.shoots[index];
                element.update();
                element.display();

                if (element.dead == true) {
                    this.shoots.splice(index, 1)
                    console.log("Ich wurde gelöscht was da los");
                }
            }
        }
    }

    display() {
        push();
        image(this.image, this.position.x, this.position.y, this.size.x, this.size.y);
        pop();
    }

    shoot() {
        if (shootCooldown == 0) {
            let posCopy = createVector(
                this.position.x + this.size.x / 2,
                this.position.y
            );

            this.shoots.push(new shootOne(posCopy));
            shootCooldown = 1;

            let timer = setTimeout(function() {
                shootCooldown = 0;
            }, 1000 / 3);

            console.log("I have shoot this bitch cykaaaaaa");
        }
        else {
            console.log("Bruder warte mal muss kacken");
        }
    }
}
