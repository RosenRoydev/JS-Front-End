window.addEventListener("load", solve);

function solve() {
  const addButton = document.getElementById('add-btn');

  const nameInput = document.getElementById('name');
  const phoneNumberInput = document.getElementById('phone');
  const categoryInput = document.getElementById('category');
  const checkListUl = document.getElementById('check-list');
  const contactListUl = document.getElementById('contact-list');
  
  addButton.addEventListener('click', () => {
    if (nameInput.value === '' || phoneNumberInput.value === '' || categoryInput.value === '') {
      return;
    }
    const nameEl = document.createElement('p');
    nameEl.textContent = `name:${nameInput.value}`;

    const phoneEl = document.createElement('p');
    phoneEl.textContent = `phone:${phoneNumberInput.value}`;

    const categoryEl = document.createElement('p');
    categoryEl.textContent = `category:${categoryInput.value}`;

    const articleEl = document.createElement('article');
    articleEl.appendChild(nameEl);
    articleEl.appendChild(phoneEl);
    articleEl.appendChild(categoryEl);

    const editButtonEl = document.createElement('button');
    editButtonEl.classList.add('edit-btn');
    editButtonEl.addEventListener('click', () => {
      nameInput.value = nameEl.textContent.replace('name:','');
      phoneNumberInput.value = phoneEl.textContent.replace('phone:','');
      categoryInput.value = categoryEl.textContent.replace('category:','');
      liItem.remove()
      
    })

    const saveButton = document.createElement('button');
    saveButton.classList.add('save-btn');
    saveButton.addEventListener('click', ()=>{
      document.createElement('li');
      editButtonEl.remove();
      saveButton.remove();
      const deleteButton = document.createElement('button')
      deleteButton.classList.add('del-btn');
      divButtonsEl.remove();
      liItem.appendChild(deleteButton);
      deleteButton.addEventListener('click' , ()=>{
        liItem.remove();
      })
      contactListUl.appendChild(liItem);
    })

    const divButtonsEl = document.createElement('div');
    divButtonsEl.classList.add('buttons');
    divButtonsEl.appendChild(editButtonEl);
    divButtonsEl.appendChild(saveButton);



    const liItem = document.createElement('li');
    liItem.appendChild(articleEl);
    liItem.appendChild(divButtonsEl)

    checkListUl.appendChild(liItem);

    clearInputs();
  })

  function clearInputs() {
    nameInput.value = '';
    phoneNumberInput.value = '';
    categoryInput.value = '';
  }
}
