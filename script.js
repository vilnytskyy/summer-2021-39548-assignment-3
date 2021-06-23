let numRows = 0;
let numCols = 0;
let colorSelected;
let grid = document.getElementById("grid");

// Adds a row
function addRow() {
    if (numCols === 0) {
        numCols++;
    }

    const row = document.createElement("tr");
    const col = document.createElement("td");
    row.appendChild(col);
    grid.appendChild(row);

    numRows++;
}



// Adds a column
function addCol() {
    alert("Clicked Add Col")
}



// Removes a row
function removeRow() {
    alert("Clicked Remove Row")
}



// Removes a column
function removeCol() {
    alert("Clicked Remove Col")
}



// Sets global var to selected color
function selected() {
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}



// Fills all cells with the selected color
function fill() {
    alert("Clicked Fill All")
}



// Clears all cells
function clearAll() {
    alert("Clicked Clear All")
}



// Fills all uncolored cells with the selected color
function fillUncolored() {
    alert("Clicked Fill All Uncolored")
}