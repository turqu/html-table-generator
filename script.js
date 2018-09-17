document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM is ready");
});

let generatorButton = document.getElementById("generatorButton");
let undoButton = document.getElementById("undoButton");
let copyButton = document.getElementById("copyButton");
let tableCode = document.querySelector("#tableCode");
let innerText = document.getElementsByClassName("innerText");
let inputFields = document.getElementsByTagName("input");
let generatedTable = document.getElementById("generatedTable");
generatorButton.onclick = generateTable;
// The script begins to generate a table
function generateTable() {
  console.log("Clicked generate the table");
  generatorButton.disabled = true;
  undoButton.disabled = false;
  for ( let i=0; i<innerText.length; i++) {
    if ( i == 3 ) {
      innerText[i].style.display = "inline-block";
    } else {
      innerText[i].style.display = "block";
    }
  }
  addTableColumn();
  addTableRow();
  showTableCode();
  for ( let i = 0; i<inputFields.length; i++) {
    inputFields[i].disabled = true;
  }
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

function showTableCode() {
  let inputCode = document.querySelector("#generatorDiv").innerHTML;
  let outputCode;
  for ( i=0; i<7; i++) {
    let x = inputCode.replace("                ", "");
    inputCode = x;
  }
  outputCode = inputCode;
  tableCode.innerHTML = outputCode;
}

// This function removes the previously generated table and its HTML code
undoButton.onclick = undoTable;
function undoTable() {
  console.log("Clicked undo");
  generatorButton.disabled = false;
  undoButton.disabled = true;
  for ( let i = 0; i<inputFields.length; i++) {
    inputFields[i].disabled = false;
  }
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
// This function copies the code from the textarea
copyButton.onclick = copyCode;
function copyCode() {
  tableCode.select();
  document.execCommand("copy");
}