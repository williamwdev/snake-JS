const SNAKE_SPEED = 1;
const snakeBody = [{ x: 11, y: 11 }]

function update() {
  console.log('update snake')
}

function draw(gameBoard) {
  snakeBody.forEach(segment => {
    const snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = segment.y
    snakeElement.style.gridColumnStart = segment.x
    snakeElement.classList.add('snake');
    gameBoard.appendChild(snakeElement);
  })
  // console.log('draw snake')
}

export { SNAKE_SPEED, update, draw }