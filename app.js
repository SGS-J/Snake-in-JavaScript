class Game {
  constructor() {}

  start(startCB) {
    startCB();
  }

  gameOver() {
    restartCanvas();
    snake = new Snake();
    generator = new FoodGenerator();
    this.start(init);
  }
}

let generator = new FoodGenerator();
let snake = new Snake();
let headImg = new Image();
const game = new Game();
const canvas = document.querySelector("canvas");
const pen = canvas.getContext("2d");

/* KEYCODES: */
const VK_UP = 38;
const VK_DOWN = 40;
const VK_RIGHT = 39;
const VK_LEFT = 37;
/* END KEYCODES */

/* FUNCTIONS */
const remove = (x = 0, y = 0) => {
  pen.clearRect(x, y, 10, 10);
};

const draw = (x = 0, y = 0, type = "parts") => {
  pen.beginPath();
  if(type === "parts") {
    pen.fillStyle = "#fff";
  }
  if(type === "head") {
    pen.fillStyle = "#00f";
  }
  if(type === "food") {
    pen.fillStyle = "#f11";
  }
  pen.arc(x + 5, y + 5, 5, 0, Math.PI * 2, true);
  pen.fill();
};

const restartCanvas = () => {
  pen.clearRect(0, 0, canvas.width, canvas.height);
}

const init = () => {
  snake.begin();
  generator.begin();
  document.body.addEventListener("keydown", (e) => {
    switch (e.keyCode) {
      case VK_UP:
        snake.dir(UP);
        break;
      case VK_DOWN:
        snake.dir(DOWN);
        break;
      case VK_LEFT:
        snake.dir(LEFT);
        break;
      case VK_RIGHT:
        snake.dir(RIGHT);
        break;
    }
  });
};

/* END FUNCTIONS */

game.start(init);