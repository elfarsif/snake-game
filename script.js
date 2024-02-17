//HTML elements
const board=document.getElementById('game-board')

//Game variables
const gridSize=20;
let snake = [{x:10,y:10}];
let food = generateFood();

//Draw game map, snake, food
function draw(){
    board.innerHTML = '';
    drawSnake();
    drawFood();
}

//Draw snake
function drawSnake(){
    snake.forEach((segment)=>{
        const snakeElement=createGameElement('div','snake');
        setPosition(snakeElement,segment);
        board.appendChild(snakeElement)
    })
}

//create as snake or food cube/div
function createGameElement(tag,className){
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

//set position of snake or food
function setPosition(element,position){
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
}

//Testing Draw Function
draw();

//draw food function
function drawFood(){
    const foodElement=createGameElement('div','food');
    setPosition(foodElement,food);
    board.appendChild(foodElement);
}

//generate Food
function generateFood(){
    const x=Math.floor((Math.random()*gridSize))+1;
    const y=Math.floor((Math.random()*gridSize))+1;
    return {x,y}
}

