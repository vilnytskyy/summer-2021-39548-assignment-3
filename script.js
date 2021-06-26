let numRows = 0;
let numCols = 0;
let colorSelected = "";
const RED = "#f4817b";
const BLUE = "#9abec1";
const GREEN = "#a6cc8f";
const YELLOW = "#f6c079";
const DEFAULT = "#ffffff";
let grid = document.getElementById("grid");

// Adds a row
function addRow() {
    const row = document.createElement("tr");

    if (numCols === 0) {
        numCols++;
    }

    // Create a row with numCols columns 
    for (let idxCol = 0; idxCol < numCols; idxCol++) {
        const col = document.createElement("td");

        row.appendChild(col);
    }

    grid.appendChild(row);

    numRows++;
}



// Adds a column
function addCol() {
    if (numRows === 0) {
        const row = document.createElement("tr");
        const col = document.createElement("td");

        row.appendChild(col);
        grid.appendChild(row);

        numRows++;
    } else {
        const row = document.getElementsByTagName("tr");

        // Add a column to every row
        for (let idxRow = 0; idxRow < numRows; idxRow++) {
            const col = document.createElement("td");

            row[idxRow].appendChild(col);
        }
    }

    numCols++;
}



// Removes a row
function removeRow() {
    if (numRows > 0) {
        // Remove last row
        grid.lastElementChild.remove();

        numRows--;

        if (numRows === 0) {
            numCols = 0;
        }
    }
}



// Removes a column
function removeCol() {
    if (numCols > 0) {
        const row = document.getElementsByTagName("tr");

        // Remove a column from every row
        for (let idxRow = 0; idxRow < numRows; idxRow++) {
            row[idxRow].lastElementChild.remove();
        }

        numCols--;

        if (numCols === 0) {
            // Remove all rows if there are zero columns
            for (let idxRow = 0; idxRow < numRows; idxRow++) {
                grid.lastElementChild.remove();
            }
            
            numRows = 0;
        }
    }
}



// Sets global var to selected color and returns the hex for that color
function selected() {
    colorSelected = document.getElementById("selectedID").value;

    switch (colorSelected) {
        case "Red":
            return RED;
        case "Blue":
            return BLUE;
        case "Green":
            return GREEN;
        case "Yellow":
            return YELLOW;
        default:
            return DEFAULT;
    }
}



// Code based on the JS solution for event delegation found on https://coderethinked.com/event-bubbling/
// Changes the background color of a cell to colorSelected when clicked
grid.onclick = function (e){
    const cell = e.target.closest("td");

    if(!cell){
        return;
    }
    
    // Sets the backgroundColor that matches the colorSelected for the cell
    cell.style.backgroundColor = selected();
}



// Fills all cells with the selected color
function fill() {
    const cell = document.getElementsByTagName("td");
    const color = selected();

    for (let idx = 0; idx < cell.length; idx++) {
        if(cell[idx].style.backgroundColor === color) continue;
        
        cell[idx].style.backgroundColor = color;
    }
}



// Clears all cells
function clearAll() {
    const cell = document.getElementsByTagName("td");

    for (let idx = 0; idx < cell.length; idx++) {
        if(cell[idx].style.backgroundColor === DEFAULT) continue;
        
        cell[idx].style.backgroundColor = DEFAULT;
    }
}



// Fills all uncolored cells with the selected color
function fillUncolored() {
    alert("Clicked Fill All Uncolored")
}