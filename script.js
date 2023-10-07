// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() 
{
    const grid=document.getElementById("grid");
    const newRow=grid.insertRow();
    for(let i=0;i<numCols;i++)
    {
        const cell=newRow.insertCell();
    }

    numRows++;

    
}

// Add a column
function addC() 
{
    const grid=document.getElementById("grid");
    numCols++;

    for(let i=0;i<numRows;i++)
    {
        const row=grid.rows[i];
        const cell=row.insertCell();
    }
}

// Remove a row
function removeR() {
    const grid=document.getElementById("grid");

    if(grid.rows.length>0)
    {
        grid.deleteRow(grid.rows.length-1);
        numRows--;
    }
}

// Remove a column
function removeC() {
    const grid=document.getElementById("grid");
    if(numCols>0)
    {
        numCols--;
        for(let i=0;i<numRows;i++)
        {
            const row=grid.rows[i];
            row.deleteCell(numCols);
        }
    }

}

// Set global variable for selected color
function selectColor(){

}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){

    const grid=document.getElementById("grid");

    grid.innerHTML= '';
}

