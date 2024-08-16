const baseURL = 'http://localhost:3030/jsonstore/gifts/';

const loadButton = document.getElementById('load-presents');
const divList = document.getElementById('gift-list');
const addButton = document.getElementById('add-present');
const giftInput = document.getElementById('gift');
const whoInput = document.getElementById('for');
const priceInput = document.getElementById('price');
const formEl = document.querySelector('form');
const editButton = document.getElementById('edit-present');


loadButton.addEventListener('click',loadPresents);
addButton.addEventListener('click',addPresent);
editButton.addEventListener('click',editPresent)

async function editPresent() {
    const presentId = formEl.getAttribute('data-present-id');

    const gift = giftInput.value;
    const forWho = whoInput.value;
    const price = priceInput.value;

    clearInputs();
    await fetch(`${baseURL}${presentId}`,{
        method: 'PUT',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({gift,for: forWho,price, _id:presentId}),
    })
    
    await loadPresents();

    editButton.setAttribute('disabled','disabled');
    addButton.removeAttribute('disabled');
    formEl.removeAttribute('data-present-id')
}
async function addPresent() {
    const gift = giftInput.value;
    const forWho = whoInput.value;
    const price = priceInput.value;

    clearInputs();

    await fetch(baseURL,{
        method:'POST',
        headers:{'Content-Type':'application/json',},
        body:JSON.stringify({gift,for: forWho ,price})
    })
  await loadPresents();
}

async function loadPresents() {
    divList.innerHTML = '';

    const response = await fetch(baseURL);
    const result = await response.json();
    const presents = Object.values(result);

    const presentEls = presents.map(present => createPresentEl(present.gift, present.for, present.price,present._id))
    divList.append(...presentEls)
}

async function createPresentEl(gift,forWho,price,presentId) {

    const pGift = document.createElement('p');
    pGift.textContent = gift;

    const pWho = document.createElement('p');
    pWho.textContent = forWho;

    const pPrice = document.createElement('p');
    pPrice.textContent = price;

    const divContent = document.createElement('div');
    divContent.classList.add('content')
    divContent.appendChild(pGift);
    divContent.appendChild(pPrice);
    divContent.appendChild(pWho);
    

    const changeBtn = document.createElement('button');
    changeBtn.classList.add('change-btn');
    changeBtn.textContent = 'Change';
    changeBtn.addEventListener('click',()=>{
        giftInput.value = pGift.textContent;
        whoInput.value = pWho.textContent;
        priceInput.value = pPrice.textContent;

        formEl.setAttribute('data-present-id',presentId)
        

         editButton.removeAttribute('disabled');
         addButton.setAttribute('disabled','disabled');
         
        
    })

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', async()=>{
     await fetch(`${baseURL}${presentId}`,
     {method:'DELETE'},
     )
     await loadPresents();
    })

    const divButtons = document.createElement('div');
    divButtons.classList.add('buttons-container');
    divButtons.appendChild(changeBtn);
    divButtons.appendChild(deleteBtn);

    const giftSockDiv = document.createElement('div');
    giftSockDiv.classList.add('gift-sock');
    giftSockDiv.appendChild(divContent);
    giftSockDiv.appendChild(divButtons);

    divList.appendChild(giftSockDiv);


 return divList;
    
}
function clearInputs(){
    giftInput.value = '';
    whoInput.value = '';
    priceInput.value = '';
}