function colorize() {
    // TODO
    let rows = document.querySelectorAll('table tr')
    let index = 0;
    for (const row of rows) {
        index ++;
        if(index % 2 === 0){
            row.style.background = 'Teal'
        }
    }
    return rows
}