const baseURL = 'http://localhost:3030/jsonstore/games/';

const loadButtonEl = document.getElementById('load-games');
const gameUl = document.getElementById('games-list');
const addButton = document.getElementById('add-game');
const gameNameInput = document.getElementById('g-name');
const typeGameInput = document.getElementById('type');
const playersInput = document.getElementById('players');
const editButton = document.getElementById('edit-game');
const formEl = document.querySelector('#form form');


loadButtonEl.addEventListener('click',loadGames);
addButton.addEventListener('click',addGame);
editButton.addEventListener('click',editGame);
async function addGame() {
    //вземаме стойностите , които са ну нужни от инпут полетата
    const name = gameNameInput.value; 
    const type = typeGameInput.value;
    const players = playersInput.value;

    clearInputs();//веднага след като вземем инпутите ги трием
 //правим заявка към сървъра да добави елемент
    await fetch(baseURL, {
        method: 'POST',
        headers : {'Content-Type': 'application/json',},
        body: JSON.stringify({name,type,players})//къдравите скоби са важни за да направи json от данните
    })

    await loadGames();
}
async function editGame(){
    const id = formEl.getAttribute('data-id'); // взмеме id-то от формата
 const name = gameNameInput.value;
 const type = typeGameInput.value;
 const players = playersInput.value;

 clearInputs();
 await fetch(`${baseURL}${id}`,{
    method:'PUT',
    headers : {'Content-Type':'application/json'},
    body: JSON.stringify({name,type,players,_id: id}),
 })
 await loadGames();

 editButton.setAttribute('disabled','disabled');
 addButton.removeAttribute('disabled');
 formEl.removeAttribute('data-id');
}
function clearInputs(){
    gameNameInput.value = '';
    typeGameInput.value = '';
    playersInput.value = '';
}

async function loadGames(){

    gameUl.innerHTML =''; //зачистваме html елемета държаш игрите при всяко извикване на load

    const response = await fetch(baseURL); //взема от URL данните,които са заредени
    const result = await response.json(); // превръща данните в json
    const games = Object.values(result); //правим на лист данните от резултата

    const gamesEls = games.map(game => createGameEl(game.name,game.type,game.players,game._id)) //мапваме листа с игрите и ги правим в html елемент

    gameUl.append(...gamesEls)// добавяме елементите към ul листа,който сме взели като елемент в началото
}

function createGameEl(name, type, players, _id){ //вземаме имената на променливите от json-a
const pNameEl = document.createElement('p');
pNameEl.textContent = name;
//правим си структурата на html елементите според изискванията в заданието
const playersCount = document.createElement('p');
playersCount.textContent = players;

const typeGameEl = document.createElement('p');
typeGameEl.textContent = type;

const divContentEl = document.createElement('div');
divContentEl.classList.add('content');
divContentEl.appendChild(pNameEl);
divContentEl.appendChild(typeGameEl);
divContentEl.appendChild(playersCount);

const changeButtonEl = document.createElement('button');
changeButtonEl.classList.add('change-btn');
changeButtonEl.textContent = 'Change';
changeButtonEl.addEventListener('click',()=>{
    gameNameInput.value = name;//имаме ги от loadgame функцията
    typeGameInput.value = type;
    playersInput.value = players

    formEl.setAttribute('data-id',_id); //сетваме ID на елемента,който променяме!!!
    editButton.removeAttribute('disabled');
    addButton.setAttribute('disabled','disabled')

    
})

const deleteButton = document.createElement('button');
deleteButton.classList.add('delete-btn');
deleteButton.textContent = 'Delete';
deleteButton.addEventListener('click',async() => {
    await fetch(`${baseURL}${_id}`,
       {method:'DELETE'} ,
    )
    loadGames();
})

const divButtonsEl = document.createElement('div');
divButtonsEl.classList.add('buttons-container');
divButtonsEl.appendChild(changeButtonEl);
divContentEl.appendChild(deleteButton);

const divGameEl = document.createElement('div');
divGameEl.classList.add('board-game');
divGameEl.appendChild(divContentEl);
divGameEl.appendChild(divButtonsEl);

return divGameEl;

}