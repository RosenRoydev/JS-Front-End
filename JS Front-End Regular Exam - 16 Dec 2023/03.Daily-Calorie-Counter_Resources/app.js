function attachEvents(){
    const baseURL = 'http://localhost:3030/jsonstore/tasks/';
    const loadButton = document.getElementById('load-meals');
    const foodList = document.getElementById('list');
    const foodInput = document.getElementById('food');
    const caloriesInput = document.getElementById('calories')
    const timeInput = document.getElementById('time');
    const addButton = document.getElementById('add-meal');
    const formEl = document.querySelector('#form form');
    const editButton = document.getElementById('edit-meal');
    
    loadButton.addEventListener('click',loadFoods)
    addButton.addEventListener('click',addFood)
    editButton.addEventListener('click',editFood)
    
    async function editFood() {
        const foodId = formEl.getAttribute('data-foodId');
    
        const food = foodInput.value;
        const time = timeInput.value;
        const calories = caloriesInput.value;
    
        clearInputs();
        await fetch(`${baseURL}${foodId}`,{
            method:'PUT',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({food,time,calories,_id: foodId})
        })
        await loadFoods();
    
        editButton.setAttribute('disabled','disabled')
        addButton.removeAttribute('disabled');
        formEl.removeAttribute('data-foodId')
    }
    async function addFood() {
        const food = foodInput.value;
        const calories = caloriesInput.value;
        const time = timeInput.value;
    
        clearInputs();
    
        await fetch(baseURL,{
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({food,time,calories})
        })
        await loadFoods();
    }
    async function loadFoods() {
    foodList.innerHTML = '';
    const response = await fetch(baseURL);
    const result = await response.json();
    const foods = Object.values(result);
        
    const foodsEls = foods.map(food => createFood(food.food,food.time,food.calories,food._id))
    foodList.append(...foodsEls);
    }
    function createFood(food, time, calories,  _id){
     const foodH2 = document.createElement('h2');
     foodH2.textContent= food;
     
     const timeH3= document.createElement('h3');
     timeH3.textContent = time;
     
     const caloriesH3= document.createElement('h3');
     caloriesH3.textContent = calories;
    
     const divMeal = document.createElement('div');
     divMeal.classList.add('meal')
     divMeal.appendChild(foodH2);
     divMeal.appendChild(timeH3);
     divMeal.appendChild(caloriesH3);
    
     const changeBtn = document.createElement('button');
     changeBtn.classList.add('change-meal');
     changeBtn.textContent = 'Change';
     changeBtn.addEventListener('click',()=>{
        foodInput.value = food;
        timeInput.value = time;
        caloriesInput.value = calories;
    
        formEl.setAttribute('data-foodId',_id)
        addButton.setAttribute('disabled','disabled')
        editButton.removeAttribute('disabled');
    
     })
    
     const deleteBtn = document.createElement('button');
     deleteBtn.classList.add('delete-meal');
     deleteBtn.textContent = 'Delete'
     deleteBtn.addEventListener('click', async()=>{
        await fetch(`${baseURL}${_id}`,{
            method: 'DELETE'
        })
        await loadFoods();
     })
    
     const divButtons = document.createElement('div')
     divButtons.classList.add('meal-buttons')
     divButtons.appendChild(changeBtn);
     divButtons.appendChild(deleteBtn);
    
     divMeal.appendChild(divButtons);
     
    
     return divMeal;
    }
    function clearInputs(){
    
        foodInput.value = '';
        timeInput.value = '';
        caloriesInput.value = '';
    }
}

attachEvents();