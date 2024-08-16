window.addEventListener("load", solve);

function solve() {
    const placeInput = document.getElementById('place');
    const actionInput = document.getElementById('action');
    const personInput = document.getElementById('person');
    const addButton = document.getElementById('add-btn');
    const taskListUl = document.getElementById('task-list')
    const doneListUl = document.getElementById('done-list')

    addButton.addEventListener('click', () => {
        if (placeInput.value === '' || actionInput.value === '' || personInput.value === '') {
            return;
        }

        const pAction = document.createElement('p');
        pAction.textContent = `Action:${actionInput.value}`;

        const pPlace = document.createElement('p');
        pPlace.textContent = `Place:${placeInput.value}`;

        const pPerson = document.createElement('p');
        pPerson.textContent = `Person:${personInput.value}`;

        const article = document.createElement('article');
        article.appendChild(pPlace);
        article.appendChild(pAction);
        article.appendChild(pPerson);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit'
        editButton.classList.add('edit');
        editButton.addEventListener('click', () => {
            placeInput.value = pPlace.textContent.replace('Place:', '');
            actionInput.value = pAction.textContent.replace('Action:', '');
            personInput.value = pPerson.textContent.replace('Person:', '');
            cleanTaskLi.remove();
        })

        const doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        doneButton.classList.add('done')
        doneButton.addEventListener('click', () => {
            divButtons.remove();
            const deleteButton = document.createElement('button');
            deleteButton.classList.add('delete')
            deleteButton.textContent = 'Delete';
            cleanTaskLi.appendChild(deleteButton);
            cleanTaskLi.classList.remove('clean-task');
            doneListUl.appendChild(cleanTaskLi);
            deleteButton.addEventListener('click', () => {
                cleanTaskLi.remove();
            })
        })
        
        const divButtons = document.createElement('div');
        divButtons.classList.add('buttons');
        divButtons.appendChild(editButton);
        divButtons.appendChild(doneButton);

        const cleanTaskLi = document.createElement('li');
        cleanTaskLi.classList.add('clean-task');
        cleanTaskLi.appendChild(article);
        cleanTaskLi.appendChild(divButtons);

        taskListUl.appendChild(cleanTaskLi);
        placeInput.value = '';
        actionInput.value = '';
        personInput.value = '';

    })
}