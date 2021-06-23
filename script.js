let numRows = 0;
let numCols = 0;
let colorSelected;
let grid = document.getElementById("grid");

// Adds a row
function addRow() {
    const row = document.createElement("tr");

    for (let idxCol = -1; idxCol < numCols; idxCol++) {
        const col = document.createElement("td");
        row.appendChild(col);
    }

    grid.appendChild(row);

    numRows++;
}



// Adds a column
function addCol() {
    const col = document.createElement("td");

    if (numRows === 0) {
        const row = document.createElement("tr");
        row.appendChild(col);
        grid.appendChild(row);
        numRows++;
    } else {
        const row = document.getElementsByTagName("tr");

        for (let r = 0; r < numRows; r++) {
            for (let c = 0; c < numCols; c++) {
                row[r].appendChild(col);
            }
        }
    }

    numCols++;
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