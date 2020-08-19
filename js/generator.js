class Food {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    draw(x, y, "food");
  }
  get posX() {
    return this.x;
  }
  get posY() {
    return this.y;
  }
}

class FoodGenerator {
  constructor() {
    this.start = false;
    this.food = null;
    this.foodOnSnake = false;
  }
  generate() {
    let x = MathUtil.randomTen(canvas.width);
    let y = MathUtil.randomTen(canvas.height);
    let validGen = true;
    const foodOnSnake = (p) => {
      if(p.x === x && p.y === y){
        validGen = false;
        this.generate();
      }
    }
    snake.body.forEach(foodOnSnake)
    if(validGen) {
      this.food = new Food(x, y);
    }
  }

  begin() {
    if (!this.start) {
      this.start = true;
      this.generate();
    }
  }

  get actualFood() {
    return this.food;
  }
}
