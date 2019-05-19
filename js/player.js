class Player {
    constructor(x, y, w, h, image, canvas) {
        this.size = createVector(w, h);
        this.position = createVector(x, y);
        this.image = image;
        this.moveSpeed = 5;
        this.shoots = [];
        this.shootCooldown = 0;
        this.timer;
        this.canvas = canvas;
        this.margin = 5;
    }

    update() {
        if (keyIsDown(LEFT_ARROW)) {
            let cur = this.position.x - this.moveSpeed;
            let min = this.margin;
            let max = this.canvas.x - this.size.x / 2 - this.margin;

            this.position.x = clamp(cur, min, max);
        }

        if(keyIsDown(RIGHT_ARROW)) {
            let cur = this.position.x + this.moveSpeed;
            let min = this.size.x / 2 + this.margin;
            let max = this.canvas.x - this.size.x - this.margin;

            this.position.x = clamp(cur, min, max);
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
        //rectMode(CENTER);
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