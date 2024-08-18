function attachEvents(){
const baseUrl = 'http://localhost:3030/jsonstore/matches/';

const loadButton = document.getElementById('load-matches');
const matchList = document.getElementById('list');
const addButton = document.getElementById('add-match');
const hostInput = document.getElementById('host');
const scoreInput = document.getElementById('score');
const guestInput = document.getElementById('guest');
const formEl = document.querySelector('#form form');
const editButton = document.getElementById('edit-match');

loadButton.addEventListener('click',loadMatches)
addButton.addEventListener('click',addMatch);
editButton.addEventListener('click',editMatch)

async function addMatch(){
const host = hostInput.value;
const score = scoreInput.value;
const guest = guestInput.value;

clearInputs()

await fetch(baseUrl,{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({host,score,guest}),

})

await loadMatches();

}

async function editMatch(){
    const id = formEl.getAttribute('data-matchId');

    const host = hostInput.value;
    const score = scoreInput.value;
    const guest = guestInput.value;

    clearInputs();
    await fetch(`${baseUrl}${id}`,{
        method:'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({host,score,guest,_id: id})
    })

    addButton.removeAttribute('disabled');
    editButton.setAttribute('disabled','disabled')
    formEl.removeAttribute('data-matchId');

    await loadMatches();
}
async function loadMatches() {
    matchList.innerHTML = '';
    const response = await fetch(baseUrl);
    const result = await response.json();
    const matches = Object.values(result);

    const matchesEls = matches.map(match => createMatchEl(match.host,match.score,match.guest,match._id));

    matchList.append(...matchesEls);
    
}

function createMatchEl(host,score,guest,_id){
const hostP = document.createElement('p');
hostP.textContent = host;

const scoreP = document.createElement('p');
scoreP.textContent = score;

const guestP = document.createElement('p');
guestP.textContent = guest;

const divInfo = document.createElement('div');
divInfo.classList.add('info');
divInfo.appendChild(hostP);
divInfo.appendChild(scoreP);
divInfo.appendChild(guestP);

const changeBtn = document.createElement('button');
changeBtn.classList.add('change-btn');
changeBtn.textContent = 'Change';
changeBtn.addEventListener('click',()=>{
  hostInput.value = host;
  scoreInput.value = score;
  guestInput.value = guest;

  formEl.setAttribute('data-matchId',_id);
  editButton.removeAttribute('disabled');
  addButton.setAttribute('disabled','disabled');
})

const deleteBtn = document.createElement('button');
deleteBtn.classList.add('delete-btn');
deleteBtn.textContent = 'Delete';
deleteBtn.addEventListener('click', async()=>{
    await fetch(`${baseUrl}${_id}`,{
        method:'DELETE'
    })
    loadMatches();
})

const buttonContainer = document.createElement('div');
buttonContainer.classList.add('btn-wrapper');
buttonContainer.appendChild(changeBtn);
buttonContainer.appendChild(deleteBtn);

const matchLi = document.createElement('li');
matchLi.classList.add('match');
matchLi.appendChild(divInfo);
matchLi.appendChild(buttonContainer)

return matchLi;
}

function clearInputs(){
    hostInput.value = '';
    scoreInput.value = '';
    guestInput.value = '';
}
}
attachEvents();