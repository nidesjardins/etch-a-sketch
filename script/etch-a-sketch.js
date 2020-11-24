/* Gather items */
const newGridBtn = document.querySelector('#new-grid-btn');
const clearGridBtn = document.querySelector('#clear-grid-btn');
const container = document.querySelector(".grid-container");


/* Button functions */
function createGrid() {   

    //Clear any pixels already on the screen
    removeAllPixels();

    //Get user input
    let numPixel = userInput();
    let gridArea = numPixel * numPixel;

    //Fill in grid
    for(let i = 0; i < gridArea; i++){
        let gridPixel = document.createElement("div");
        gridPixel.addEventListener('mouseover', fillPixel);
        container.appendChild(gridPixel);
    }
    container.style.gridTemplateRows = `repeat(${numPixel}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${numPixel}, 1fr)`;

}

function fillPixel(){
    this.style.backgroundColor = 'black';
}

function removeAllPixels(){
    const pixelList = document.querySelectorAll('.grid-container > div');
    pixelList.forEach(gridPixel => gridPixel.remove());
}

function clearGrid(){
    const pixelList = document.querySelectorAll('.grid-container > div');
    pixelList.forEach(gridPixel => gridPixel.style.backgroundColor = 'white');
}

function userInput(){
    let numPixel = "";
    do {
        numPixel = parseInt(window.prompt("Enter a number between 8 and 100: "), 10);
    } while (!isUserInputValid(numPixel));

    return numPixel;
}

function isUserInputValid(numPixel){
    if (isNaN(numPixel)){
        alert("You must provide a number between 8 and 100.");
        return false;
    } else if (numPixel < 8 || numPixel > 100){
        alert("You must provide a number between 8 and 100.");
        return false;
    }
    return true;
}

/* Add onclick event listener to buttons */
newGridBtn.addEventListener('click', createGrid);
clearGridBtn.addEventListener('click', clearGrid)