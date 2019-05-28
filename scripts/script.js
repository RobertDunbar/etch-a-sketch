// Odin Project etch-a-sketch javascript file
const container = document.querySelector("#container");

function generateGrid(rows, columns){
    const squareSize = (560 - 8 - ((rows-1)*2)) / rows;
    for(rowCount = 0; rowCount < rows; rowCount++){
        const brContent = document.createElement("br");
        for(colCount = 0; colCount < columns; colCount++){
            const divContent = document.createElement("div");
            divContent.classList.add("divGrid");
            divContent.style.width = squareSize + "px";
            divContent.style.height = squareSize + "px";
            switch (rowCount) {
                case 0:
                    divContent.classList.add("border-left");
                    break;
                case rows - 1:
                    divContent.classList.add("border-right");
            }
            switch (colCount) {
                case 0:
                    divContent.classList.add("border-top");
                    break;
                case columns - 1:
                    divContent.classList.add("border-bottom");
            }
            container.appendChild(divContent);
        }
        container.appendChild(brContent);
    }
}

function trailClass(e){
    var thisColor = ColorOption === "black"? "black": randomColor();
    e.target.style.backgroundColor = thisColor;
}

function randomColor(currentColor) {
    var randomRed = Math.floor(Math.random() * 255);
    var randomGreen = Math.floor(Math.random() * 255);
    var randomBlue = Math.floor(Math.random() * 255);
    var randomColor = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
    return randomColor;
}

function clearGrid(){
    const square = Array.from(document.querySelectorAll(".divGrid"));
    square.forEach(grid => {
        grid.removeEventListener("mouseover", trailClass);
        container.removeChild(grid);
    });
}

function listenGrid(){
    const sqaure = Array.from(document.querySelectorAll(".divGrid"));
    sqaure.forEach(grid => grid.addEventListener('mouseover', trailClass));
}

var ColorOption = "black";
generateGrid(16, 16);
listenGrid();

const radios = Array.from(document.querySelectorAll("input[type=radio]"));
radios.forEach(radio => {
    radio.addEventListener('change', () => {
        ColorOption = radio.value;
    });
});

const button = document.querySelector("button");
button.addEventListener("click", () => {
    clearGrid();
    var numSquares = prompt("Number of sqaures on an axis?", "16");
    generateGrid(numSquares, numSquares);
    listenGrid();
});