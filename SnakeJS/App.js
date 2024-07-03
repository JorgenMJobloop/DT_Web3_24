// assign the gameboard & score to variables
const gameBoard = document.getElementById("game-board");
const displayScore = document.getElementById("score");

// start game button
const startGameButton = document.getElementById("start-game");

const rows = 20;
const cols = 20;
let snake = [{ x: 10, y: 10 }];
let direction = { x: 0, y: 0 };
let food = { x: 15, y: 15 };
let score = 0;
let gameInterval;

/**
 * @name createBoard
 * @type DOM
 * @param none
 * @returns new gameboard
 */
function createBoard() {
    for (let i = 0; i < rows * cols; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        gameBoard.appendChild(cell);
    }
}

/**
 * @name draw
 * @type DOM
 * @param none
 * @returns lambda functions
 */
function draw() {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.classList.remove("snake", "food"));

    snake.forEach(segment => {
        const index = segment.y * cols + segment.x;
        cells[index].classList.add("snake");
    });

    const foodIndex = food.y * cols + food.x;
    cells[foodIndex].classList.add("food");
}

/**
 * @name update
 * @type DOM
 * @param none
 * @returns draw, self
 * @method draw
 */

function update() {
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
    if (head.x < 0 || head.x >= cols || head.y < 0 || head.y >= rows || snake.some(segment => segment.x === head.x && segment.y === head.y)) {
        clearInterval(gameInterval);
        let gameState = document.createElement("p");
        gameState.textContent = "Game Over!";
        return;
    }

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        score++;
        displayScore.textContent = `Score: ${score}`;
        // call the placeFood function
        placeFood();
    }
    else {
        snake.pop();
    }

    draw();
}

/**
 * @name placeFood
 * @param none
 * @type DOM, string, object
 * @returns none
 */

function placeFood() {
    let newFood;
    do {
        newFood = {
            x: Math.floor(Math.random() * cols),
            y: Math.floor(Math.random() * rows)
        };
    } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    food = newFood;
}


/**
 * @name changeDirection
 * @param event
 * @type DOM, event controller
 * @returns none
 */

function changeDirection(event) {
    switch (event.key) {
        case "ArrowUp":
            if (direction.y === 0) {
                direction = { x: 0, y: -1 };
            }
            break;
        case "ArrowDown":
            if (direction.y === 0) {
                direction = { x: 0, y: 1 };
            }
            break;
        case "ArrowLeft":
            if (direction.x === 0) {
                direction = { x: -1, y: 0 };
            }
            break;
        case "ArrowRight":
            if (direction.x === 0) {
                direction = { x: 1, y: 0 };
            }
            break;
    }
}

document.addEventListener("keydown", changeDirection);

function startGame() {
    createBoard();
    placeFood();
    draw();
    gameInterval = setInterval(update, 200);
}

startGameButton.addEventListener("click", startGame);