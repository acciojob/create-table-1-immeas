function insert_Row() {
    // Get the table element
    let table = document.getElementById("sampleTable");

    // Insert a new row at index 0 (top of the table)
    let newRow = table.insertRow(0);

    // Insert two new cells in the row
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);

    // Set text content for both cells
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";  // Added missing semicolon
}
