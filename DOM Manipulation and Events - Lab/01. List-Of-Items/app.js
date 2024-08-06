function addItem() {
    let ul = document.getElementById('items');
    let newLi = document.getElementById('newItemText');

   const li = ul.appendChild(document.createElement('li'));
   li.textContent = newLi.value
   newLi.value = ''

}