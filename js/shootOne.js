class shootOne {
    constructor(position) {
        this.position = position
        this.size = createVector(10, 10)
        this.flySpeed = 10;
        this.dead = false;
    }

    update() {
        this.position.set(this.position.x, this.position.y - this.flySpeed);

        if (this.position.y <= 0 - this.size.y) {
            this.dead = true;
        }

        this.isOnEnemy();
    }

    display() {
        circle(this.position.x, this.position.y, this.size.x, this.size.y);
    }

    isOnEnemy() {
      for (let i = 0; i < enemys.length; i++) {
        for (let b = 0; b < enemys[i].length; b++) {
          let en = enemys[i][b];
          let enPos = en.position;
          let enSize = en.size;
          let shootPos = this.position;

          if (shootPos.x >= enPos.x && shootPos.x <= enPos.x + enSize.x &&
              shootPos.y >= enPos.y && shootPos.y <= enPos.y + enSize.y)
              {
                if (en.alive == true) {
                  en.alive = false;
                  this.dead = true;
                  score++;

                  let tempScore = (score % 36);

                  if (tempScore == 0) {
                    enemys = [];
                    spawnEnemys(3,12);
                  }
                }
            }
        }
        }
      }
}
