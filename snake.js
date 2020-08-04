const SNAKE_SPEED = 1;
const snakeBody = [{ x: 11, y: 11 }]

function update() {
  console.log('update snake')
}

function draw() {
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = segment.x
    snakeElement.style.gridColumnStart = segment.y
    gameBoard.appendChild(snakeElement);
    snakeElement.classes.add('snake');
  })
  console.log('draw snake')
}

export { SNAKE_SPEED, update, draw }