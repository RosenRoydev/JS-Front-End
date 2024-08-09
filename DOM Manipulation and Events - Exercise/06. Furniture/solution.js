function solve() {
 const generateButton = document.querySelector('#exercise button');
 const furnitureDetails = generateButton.previousElementSibling;
 const table = document.getElementsByClassName('table')[0];
 const tBody = table.querySelector('table tbody');
 const buyButton = document.querySelector('button:nth-of-type(2)');
 const outputArea = document.querySelector('textarea:nth-of-type(2)')
 

 generateButton.addEventListener('click', ()=>{
  let furnitures = JSON.parse(furnitureDetails.value);
  for (const furniture of furnitures) {
    const imgEl = document.createElement('img');
    imgEl.src = furniture.img
    const imageTdEl = document.createElement('td')
    imageTdEl.appendChild(imgEl);
    const nameEl = document.createElement('p');
    nameEl.textContent = furniture.name;
    const nameTdEl = document.createElement('td');
    nameTdEl.appendChild(nameEl);
    const price = document.createElement('p');
    price.textContent = furniture.price;
    const priceTdEl = document.createElement('td')
    priceTdEl.appendChild(price)
    const decFac = document.createElement('p');
    decFac.textContent = furniture.decFactor;
    const decFacTdEl = document.createElement('td');
    decFacTdEl.appendChild(decFac);
    const checkEl = document.createElement('input')
    checkEl.setAttribute('type','checkbox');
    const checkTdEl = document.createElement('td');
    checkTdEl.appendChild(checkEl);
    const newTr = document.createElement('tr');
    
    newTr.appendChild(imageTdEl);
    newTr.appendChild(nameTdEl);
    newTr.appendChild(priceTdEl);
    newTr.appendChild(decFacTdEl);
    newTr.appendChild(checkTdEl);
    tBody.appendChild(newTr);
  }
  
 })
 buyButton.addEventListener('click', () =>{
  let names = [];
  let totalPrice = 0;
  let averageDecorationFactor = 0;
  let counter = 0;
  Array.from(tBody.children).forEach(trEl =>{
    let checked = trEl.querySelector('input[type=checkbox]')
    if(!checked.checked){
      return
    }
    totalPrice += Number(trEl.children[2].textContent)
    names.push(trEl.children[1].textContent);
    averageDecorationFactor += Number(trEl.children[3].textContent)
    counter++;
  })
  averageDecorationFactor = averageDecorationFactor/counter;
 outputArea.textContent +=`Bought furniture: ${names.join(', ')}\n`;
 outputArea.textContent += `Total price: ${totalPrice.toFixed(2)}\n`;
 outputArea.textContent += `Average decoration factor: ${averageDecorationFactor}\n`
 })
}