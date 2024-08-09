function addItem() {
     const newItemText = document.getElementById('newItemText');
    const newItemValue = document.getElementById('newItemValue');
    const optionMenuEl = document.getElementById('menu')
       let newOption =  document.createElement('option');
       newOption.textContent = newItemText.value;
       newOption.value = newItemValue.value
       optionMenuEl.appendChild(newOption);
       newItemText.value = '';
    newItemValue.value = ''; 
}