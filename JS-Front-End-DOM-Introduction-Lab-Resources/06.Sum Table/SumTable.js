function sumTable() {
    let rows = document.querySelectorAll('table tr');
    let sum = 0
    for (const item of rows) {
        let secondElement = item.children[1]
       if(secondElement.tagName ==='TD' && secondElement.id !== 'sum'){
        let price = secondElement
        console.log(price)
        sum += Number(price.textContent)
       }
    }
    let sumElement = document.getElementById('sum');
    sumElement.textContent = sum
}

