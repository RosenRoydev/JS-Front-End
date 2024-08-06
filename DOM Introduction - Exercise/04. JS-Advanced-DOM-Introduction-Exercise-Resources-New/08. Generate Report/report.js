function generateReport() {
    let tableHeadElements = document.querySelectorAll('table thead th');
    let tableRowElements = document.querySelectorAll('table tbody tr');
    let outputElement = document.querySelector('#output');
    let columns = [];

    // Collect column information
    tableHeadElements.forEach((th, index) => {
        let checkBox = th.querySelector('input[type=checkbox]');
        if (checkBox) {
            columns.push({
                name: th.textContent.toLowerCase().trim(),
                active: checkBox.checked,
                index: index
            });
        }
    });

    let rows = [];


    tableRowElements.forEach(tr => {
        let row = {};
        let tableDataElements = tr.querySelectorAll('td');

        columns.forEach(column => {
            if (column.active) {
                row[column.name] = tableDataElements[column.index].textContent.trim();
            }
        });

        if (Object.keys(row).length > 0) {
            rows.push(row);
        }
    });


    outputElement.value = JSON.stringify(rows, null, 2);
}
