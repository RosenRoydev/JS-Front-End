function addItem() {
    const ulElements = document.getElementById('items');
    const inputEl = document.getElementById('newItemText');

    let newLi = document.createElement('li');
    newLi.textContent = inputEl.value;
    let aElement = document.createElement('a');
    aElement.textContent = '[Delete]';
    aElement.href = '#'
    newLi.append(aElement);
    
    aElement.addEventListener('click', (e) =>{
        e.currentTarget.parentElement.remove()
    })
    ulElements.appendChild(newLi)
    
    inputEl.value = '';

}