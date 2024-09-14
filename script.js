const body = document.querySelector("body");
const divGrid = document.querySelector(".grid");
const btnReset = document.querySelector("button");

let opacityCounter = 0.1;

function getRandomRGB() {
    return Math.floor(Math.random() * 255);
}

function getSquareWidth(squareNumber) {
    let width = divGrid.offsetWidth;
    return width / squareNumber - 1;
}
function getSquareHeight(squareNumber) {
    let height = divGrid.offsetHeight;
    return height / squareNumber - 1;
}

function squareHover(e) {
    if (e.target !== e.currentTarget) {
        e.target.style.backgroundColor = `rgb(${getRandomRGB()} ${getRandomRGB()} ${getRandomRGB()})`;
        e.target.style.opacity = opacityCounter;
        if (opacityCounter < 1) {
            opacityCounter += 0.1;
        } 
    }
}

function deleteGrid() {
    divGrid.replaceChildren();
}

function resetGrid() {
    let size = prompt("How big would you like the new grid to be?");
    if(size > 0 && size <= 100) {
        deleteGrid();
        createGrid(size);
        opacityCounter = 0.1;
    }
    else {
        alert("Invalid value, please enter a number between 1 and 100");
    }
}

function setEventListeners() {
    divGrid.addEventListener("mouseover", e => {squareHover(e)});
    btnReset.addEventListener("click", resetGrid);
}

function createGrid(squareNumber) {
    let width = getSquareWidth(squareNumber);
    let height = getSquareHeight(squareNumber);
    for (let i = 0; i < squareNumber ** 2; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("gridSquare");
        gridSquare.style.width = `${width}px`;
        gridSquare.style.height = `${height}px`;
        divGrid.appendChild(gridSquare);
    }
}

createGrid(5);
setEventListeners();