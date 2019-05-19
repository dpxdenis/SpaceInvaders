class Player {
    constructor(x, y, w, h, image) {
        this.position = createVector(x, y);
        this.size = createVector(w, h);
        this.image = image;
        this.speed = 5;
        this.shoots = [];
        this.shootCooldown = 0;
        this.timer;
    }

    update() {
        if (keyIsDown(LEFT_ARROW)) {
            this.position.set(this.position.x - speed, this.position.y - speed);
        }

        if (keyIsDown(RIGHT_ARROW)) {
            this.position.set(this.position.x + speed, this.position.y + speed);
        }

        if (keyPressed(SPACE)) {
            shoot();
        }

        if (this.shoots.length > 0) {
            for (let index = 0; index < this.shoots.length; index++) {
                const element = this.shoots[index];
                element.update();
                element.dispay();

                if (element.dead == true) {
                    this.shoots.splice(index, 1);
                    console.log("Index " + index + ": Ich wurde gelöscht was da los bruder");
                }
            }
        }
    }

    display() {
        push();
        rectMode(CENTER);
        image(this.image, this.position.x, this.position.y);
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