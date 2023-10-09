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

        cell.onclick=function()
        {
            selectColor(cell);
        };
                
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

        cell.onclick=function()
        {
            selectColor(cell);
        };
    }
}

// Remove a row
function removeR() {
    const grid=document.getElementById("grid");

    if(numRows>0)
    {
        grid.deleteRow(numRows-1);
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
function selectColor(cell){ 
    const colorSelected=document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    selectColor();
    const colorSelected=document.getElementById("selectedColorId").value;
    const cells=document.querySelectorAll('td');
    for(let i=0;i<cells.length;i++)
    {
        const cell=cells[i];
        if(!cell.style.backgroundColor || cell.style.backgroundColor=='')
        {
            cell.style.backgroundColor=colorSelected;
        }
    }
}

// Fill all cells
function fillAll(){
    selectColor();
    const colorSelected=document.getElementById("selectedColorId").value;
    const cells=document.querySelectorAll('td');
    for(let i=0;i<cells.length;i++)
    {
        const cell=cells[i];
        cell.style.backgroundColor=colorSelected;
    }
}

// Clear all cells
function clearAll(){
    const grid=document.getElementById("grid");

    grid.innerHTML= '';

    numRows=0;
    numCols=0;
}
