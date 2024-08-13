
const baseUrl = 'http://localhost:3030/jsonstore/records/';

const loadButtonEl = document.getElementById('load-records');
const addRecordButtonEl = document.getElementById('add-record');
const recordsUl = document.getElementById('list');
const nameInput = document.getElementById('p-name');
const stepsInput = document.getElementById('steps')
const caloriesInput = document.getElementById('calories');
const formEl = document.querySelector('#form form');
const editButton =  document.getElementById('edit-record');


loadButtonEl.addEventListener('click', loadRecords);
editButton.addEventListener('click',editRecord)
async function loadRecords() {
  recordsUl.innerHTML = '';
  const response = await fetch(baseUrl);
  const result = await response.json(response);
  const records = Object.values(result)
  

  const recordsElements = records.map(record => createRecord(record.name, record.steps, record.calories, record._id));

  recordsUl.append(...recordsElements)
}
function createRecord(name, steps, calories, recordId) {
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
  changeButtonEl.addEventListener('click', () =>{
    nameInput.value = name;
    stepsInput.value = steps;
    caloriesInput.value = calories;

    addRecordButtonEl.setAttribute('disabled', 'disabled')

    editButton.removeAttribute('disabled')

    formEl.setAttribute('data-record-id',recordId)
  })

  const deleteButtonEl = document.createElement('button');
  deleteButtonEl.classList.add('delete-btn');
  deleteButtonEl.textContent = 'Delete';
  deleteButtonEl.addEventListener('click', async() =>{
    await fetch(`${baseUrl}${recordId}`,{
      method: 'DELETE'
    });
    
    await loadRecords()
  })

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
addRecordButtonEl.addEventListener('click',addRecord)
async function addRecord(){
  
const name = nameInput.value;
const steps = stepsInput.value;
const calories = caloriesInput.value;

clearInputs();

await fetch(baseUrl, {
  method : 'POST',
  headers : {
    'Content-Type': 'application/json'
  },
  body : JSON.stringify({name, steps, calories}),
});
 await loadRecords();
}
async function editRecord() {
  const recordId = formEl.getAttribute('data-record-id')

  const name = nameInput.value;
  const steps = stepsInput.value;
  const calories = caloriesInput.value;

  clearInputs();

  await fetch(`${baseUrl}${recordId}`,{
    method : 'PUT',
    headers : {
      'Content-Type':'application/json'
    },
    body : JSON.stringify({name,steps,calories,_id : recordId}),
  });

  await loadRecords();

  addRecordButtonEl.removeAttribute('disabled')

  editButton.setAttribute('disabled', 'disabled');
}

function clearInputs(){
  nameInput.value = '';
  stepsInput.value = '';
  caloriesInput.value = '';
}

