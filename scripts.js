//-----Creates grid variable-----
let grid = document.querySelector("#grid");

//-----Gives functionality to reset button-----
const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    let newLength = promptLength();
    while (grid.firstChild)
    {
        grid.removeChild(grid.firstChild);
    }
    createGrid(newLength);
});

//-----Prompts the user for a side length-----
let gridLength = promptLength();

//-----Function for prompting user for length-----
function promptLength() {
    return parseInt(prompt("How many squares would you like on each side?"));
}

//-----Function for coloring in the element that called-----
function colorIn(element) {
    element.style.background = "#000";
}

//-----Makes a grid with specified length-----
function createGrid(length) {
    for (let i = 0; i < length; i++)
    {
        for (let j = 0; j < length; j++)
        {
            let newElement = document.createElement("div"); 
            newElement.classList.add("gridElement");
            let side = 800/length; //dynamically resizes boxes depending on input
            newElement.style.width = side + "px";
            newElement.style.height = side + "px";
            newElement.addEventListener("mouseover", function (e) {
                colorIn(e.target); //colors in the boxes on mouseover event
            });
            grid.append(newElement);
        }
    }
}

//-----Calls the function to create grid-----
createGrid(gridLength);