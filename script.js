window.onload = init;
function init() {
  console.log("DOM is ready");
}

let generatorButton = document.getElementById("generatorButton");
let resetButton = document.getElementById("undoButton");
let tableCode = document.querySelector("#tableCode");
let innerText = document.getElementsByClassName("innerText");
let generatedTable = document.getElementById("generatedTable");
generatorButton.onclick = generateTable;
// The script begins to generate a table
function generateTable() {
  console.log("Clicked generate the table");
  generatorButton.disabled = true;
  resetButton.disabled = false;
  for ( let i=0; i<innerText.length; i++) {
    if ( i == 3 ) {
      innerText[i].style.display = "inline-block";
    } else {
      innerText[i].style.display = "block";
    }
  }
  generatedTable.style.display = "table";
  addTableColumn();
  addTableRow();
  tableCode.innerHTML = document.querySelector("#generatorDiv").innerHTML;
}

// The script creates columns in the thead tag due to the columns' number from the input field
let tableColumnsNumber;
let tableHeadContent = document.querySelector("#tableHeadContent");
function addTableColumn() {
  tableColumnsNumber = document.querySelector("#tableColumnsInput").value;
  for ( let i = 0; i < tableColumnsNumber; i++ ) {
    let tableCellColumn = document.createElement("th");
    tableHeadContent.appendChild(tableCellColumn);
    tableCellColumn.appendChild(document.createTextNode(document.getElementById("columnsLabel").value));
  } 
} 
// The script creates rows in the tbody tag due to the rows' number from the input field
let tableRowsNumber;
let tableBodyContent = document.querySelector("#tableBodyContent");
function addTableRow() {
  tableRowsNumber = document.querySelector("#tableRowsInput").value;
  for ( let j = 0; j < tableRowsNumber; j++ ) {
    tableRow = tableBodyContent.insertRow(-1);
    for ( let k = 0; k < tableColumnsNumber; k++ ) {
      let tableRowCell = tableRow.insertCell(0);
      tableRowCell.innerHTML = document.querySelector("#cellsLabel").value;
    }
  } 
}

// This function removes the previously generated table and its HTML code
resetButton.onclick = resetTable;
function resetTable() {
  console.log("Clicked undo");
  generatorButton.disabled = false;
  resetButton.disabled = true;
  for ( let i = 0; i < innerText.length; i++) {
    innerText[i].style.display = "none";
  }
  for ( let i = 0; i < tableColumnsNumber; i++ ) {
    tableHeadContent.deleteCell(0);
  }
  for ( let i = 0; i < tableRowsNumber; i++ ) {
    tableBodyContent.deleteRow(-1);
  }
  tableCode.innerHTML = "";
}