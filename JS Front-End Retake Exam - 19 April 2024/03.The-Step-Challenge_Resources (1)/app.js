function solve(){
    const baseUrl = 'http://localhost:3030/jsonstore/records/';

    const loadButtonEl = document.getElementById('load-records');
    const recordsUl = document.getElementById('list');
    
    loadButtonEl.addEventListener('click',loadRecords);
  async function loadRecords(){
    recordsUl.innerHTML = '';
    const response = await fetch(baseUrl);
    const result = await response.json(response);
    console.log(result)
    const records = Object.values(result)
   
    const recordsElements = records.map(record => createRecord(record.name , record.steps, record.calories, record._id));

    recordsUl.append(...recordsElements)
  }
  function createRecord(name , steps, calories, recordId){
   const nameEl = document.createElement('p');
   nameEl.textContent = name;
  
   const stepsEl = document.createElement('p');
   stepsEl.textContent = steps;

   const caloriesEl = document.createElement('p');
   caloriesEl.textContent = calories;
   
   const divInfoEl = document.createElement('div');
   divInfoEl.classList.add('info');
   divInfoEl.appendChild(nameEl);
   divInfoEl.appendChild(stepsEl);
   divInfoEl.appendChild(caloriesEl);

   const changeButtonEl = document.createElement('button');
   changeButtonEl.classList.add('change-btn');
   changeButtonEl.textContent = 'Change';

   const deleteButtonEl = document.createElement('button');
   deleteButtonEl.classList.add('delete-btn');
   deleteButtonEl.textContent = 'Delete';
   
   const divButtonsEl = document.createElement('div');
   divButtonsEl.classList.add('btn-wrapper');
   divButtonsEl.appendChild(changeButtonEl);
   divButtonsEl.appendChild(deleteButtonEl)

   const liRecord = document.createElement('li');
   liRecord.classList.add('record');
   liRecord.appendChild(divInfoEl);
   liRecord.appendChild(divButtonsEl);

  return liRecord;

  }
}
