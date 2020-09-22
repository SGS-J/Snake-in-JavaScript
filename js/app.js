class Game {
  constructor() {
    this.score = 0;
  }

  start(startCB) {
    startCB();
  }

  addScore() {
    this.score++;
    scorePanel.textContent = "Score: " + this.score;
  }

  gameOver() {
    restartCanvas();
    snake = new Snake();
    generator = new FoodGenerator();
    this.score = 0;
    this.start(init);
  }
}

let generator = new FoodGenerator();
let snake = new Snake();
const game = new Game();
const canvas = document.querySelector("canvas");
const scorePanel = document.querySelector(".score");
const pen = canvas.getContext("2d");

/* FUNCTIONS */
const remove = (x = 0, y = 0) => {
  pen.clearRect(x, y, 10, 10);
};

const draw = (x = 0, y = 0, type = "parts") => {
  pen.beginPath();
  if(type === "parts") {
    pen.fillStyle = "#0a0";
  }
  if(type === "head") {
    pen.fillStyle = "#070";
  }
  if(type === "food") {
    pen.fillStyle = "#a00";
  }
  pen.arc(x + 5, y + 5, 5, 0, Math.PI * 2, true);
  pen.fill();
};

const restartCanvas = () => {
  pen.clearRect(0, 0, canvas.width, canvas.height);
}

const init = () => {
  scorePanel.textContent = "Score: ";
  snake.begin();
  generator.begin();
  document.body.addEventListener("keydown", (e) => {
    switch (e.key) {
      case 'ArrowUp':
        snake.dir(UP);
        break;
      case 'ArrowDown':
        snake.dir(DOWN);
        break;
      case 'ArrowLeft':
        snake.dir(LEFT);
        break;
      case 'ArrowRight':
        snake.dir(RIGHT);
        break;
    }
  });
};

/* END FUNCTIONS */

game.start(init);