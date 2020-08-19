/* DIRECTIONS */
const UP = 1;
const LEFT = 2;
const DOWN = 3;
const RIGHT = 4;

class Snake {
  constructor() {
    this.weightX = 10;
    this.weightY = 0;
    this.body = [
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
    ];
    this.size = this.body.length;
  }

  begin() {
    this.body = [
      { x: 10, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
      { x: 0, y: 0 },
    ];
    this.dir(RIGHT);
    this.move();
  }

  ate() {
    const head = { x: snake.body[0].x, y: snake.body[0].y };
    if (
      generator.actualFood.posX === head.x &&
      generator.actualFood.posY === head.y
    ) {
      return true;
    }
    return false;
  }

  move() {
    const temp = setInterval(() => {
      this.body[0].x += this.weightX;
      this.body[0].y += this.weightY;
      const head = { x: this.body[0].x, y: this.body[0].y };
      const parts = {x: this.body[1].x, y: this.body[1].y};
      const tail = {
        x: this.body[this.size - 1].x,
        y: this.body[this.size - 1].y,
      };

      if (this.isCrashed()) {
        clearInterval(temp);
        game.gameOver();
      } else {
        if (this.ate()) {
          this.grow();
          game.addScore();
          generator.generate();
        }

        draw(head.x, head.y, "head");
        draw(parts.x, parts.y , "parts");
        remove(tail.x, tail.y);
        this.body.unshift({ x: head.x, y: head.y });
        this.body.pop();
      }
    }, 100);
  }

  dir(direction) {
    switch (direction) {
      case UP:
        if (this.weightY <= 0) {
          this.weightX = 0;
          this.weightY = -10;
        }
        break;
      case DOWN:
        if (this.weightY >= 0) {
          this.weightX = 0;
          this.weightY = 10;
        }
        break;
      case LEFT:
        if (this.weightX <= 0) {
          this.weightX = -10;
          this.weightY = 0;
        }
        break;
      case RIGHT:
        if (this.weightX >= 0) {
          this.weightX = 10;
          this.weightY = 0;
        }
        break;
    }
  }

  grow() {
    const tail = { x: this.body[this.size - 1], y: this.body[this.size - 1] };
    this.body.push({ x: tail.x, y: tail.y });
    ++this.size;
  }

  isCrashed() {
    let crash = false;
    const head = { x: this.body[0].x, y: this.body[0].y };
    // First case: the head crash on the body
    for (let i = 2; i < this.size; i++) {
      if (head.x === this.body[i].x && head.y === this.body[i].y) {
        crash = true;
        break;
      }
    }
    // Second case: the head crash on the wall
    if(head.x < 0 || head.x >= canvas.width) {
      crash = true;
    }
    if(head.y < 0 || head.y >= canvas.height) {
      crash = true;
    }

    return crash;
  }
}
