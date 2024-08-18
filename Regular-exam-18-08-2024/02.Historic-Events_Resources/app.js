window.addEventListener("load", solve);

function solve() {
  const addButton = document.getElementById('add-btn');
  const nameInput = document.getElementById('name');
  const timeInput = document.getElementById('time');
  const descriptionInput = document.getElementById('description');
  const previewListUl = document.getElementById('preview-list');

  addButton.addEventListener('click', addEvent);

  function addEvent() {
    if (nameInput.value === '' || timeInput.value === '' || descriptionInput.value === '') {
      return;
    }

    
    const eventArticle = document.createElement('article');

    const nameP = document.createElement('p');
    nameP.textContent = nameInput.value;

    const timeP = document.createElement('p');
    timeP.textContent = timeInput.value;

    const descriptionP = document.createElement('p');
    descriptionP.textContent = descriptionInput.value;

    eventArticle.appendChild(nameP);
    eventArticle.appendChild(timeP);
    eventArticle.appendChild(descriptionP);

    
    const editButton = document.createElement('button');
    editButton.classList.add('edit-btn');
    editButton.textContent = 'Edit';

    const nextButton = document.createElement('button');
    nextButton.classList.add('next-btn');
    nextButton.textContent = 'Next';

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttons');
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(nextButton);

    
    const liItem = document.createElement('li');
    liItem.appendChild(eventArticle);
    liItem.appendChild(buttonContainer);

    previewListUl.appendChild(liItem);

    
    nameInput.value = '';
    timeInput.value = '';
    descriptionInput.value = '';

    
    addButton.disabled = true;

    
    editButton.addEventListener('click', () => {
      nameInput.value = nameP.textContent;
      timeInput.value = timeP.textContent;
      descriptionInput.value = descriptionP.textContent;
      
      liItem.remove();
      addButton.disabled = false;
    });

   
    nextButton.addEventListener('click', () => {
      buttonContainer.remove();
      const archiveButton = document.createElement('button');
      archiveButton.classList.add('archive-btn');
      archiveButton.textContent = 'Archive';
      liItem.appendChild(archiveButton);
      document.getElementById('archive-list').appendChild(liItem);
      
      archiveButton.addEventListener('click',()=>{
        liItem.remove();
        addButton.disabled = false;
      })
    });
  }
}