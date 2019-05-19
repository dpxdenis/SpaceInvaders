class Player {
    constructor(x, y, w, h, image, canvas) {
        this.position = createVector(x, y);
        this.size = createVector(w, h);
        this.image = image;
        this.speed = 5;
        this.shoots = [];
        this.shootCooldown = 0;
        this.timer;
        this.canvas = canvas;
    }

    update() {
        if (keyIsDown(LEFT_ARROW)) {
            let x = clamp(
                this.position.x - speed,
                0 - this.size.x / 2,
                canvas.x - this.size.x / 2
            );

            this.position.set(x, canvas.y - this.size.y / 2);
        }

        if(keyIsDown(RIGHT_ARROW)) {
            let x = clamp(
                this.position.x + speed,
                0 - this.size.x / 2,
                canvas.x - this.size.x / 2
            );

            this.position.set(x, canvas.y - this.size.y / 2);
        }

        if (this.shoots.length > 0) {
            for (let index = 0; index < this.shoots.length; index++) {
                const element = this.shoots[index];
                element.update();
                element.draw();

                if (element.dead == true) {
                    this.shoots.splice(index, 1)
                    console.log("Ich wurde gelöscht was da los");
                }
            }
        }
    }

    display() {
        push();
        rectMode(CENTER);
        image(this.image, this.position.x, this.position.y, this.size.x, this.size.y);
        pop();
    }

    shoot() {
        if (this.shootCooldown == 0) {
            this.shoots.push(new shootOne(this.position));
            this.shootCooldown = 1;
            this.timer = setTimeout(function() {
                this.shootCooldown = 0;
            }, 1000);

            console.log("I have shoot this bitch cykaaaaaa");
        }
        else {
            console.log("Bruder warte mal muss kacken");
        }
    }
}