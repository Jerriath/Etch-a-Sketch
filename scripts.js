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

