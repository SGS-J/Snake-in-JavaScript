class Game {
  constructor() {}
  start(startCB) {
    startCB();
  }
  gameOver(endCB) {
    endCB();
  }
}

const game = new Game();
const generator = new FoodGenerator();
const snake = new Snake();
const canvas = document.querySelector("canvas");
const pen = canvas.getContext("2d");
pen.fillStyle = '#fff';

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

const draw = (x = 0, y = 0, type = "snake") => {
  pen.fillStyle = type === 'snake' ? '#fff' : '#1f1'; 
  pen.fillRect(x, y, 10, 10);
};

const init = () => {
  //snake.begin();
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
