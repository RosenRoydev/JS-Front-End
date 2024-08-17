window.addEventListener("load", solve);

function solve() {
    const expenseInput = document.getElementById('expense');
    const amountInput = document.getElementById('amount');
    const dateInput = document.getElementById('date');
    const addButton = document.getElementById('add-btn');
    const previewList = document.getElementById('preview-list')
    const expensesList = document.getElementById('expenses-list');
    const divExpenses = document.getElementById('expenses');
    const deleteButton = document.getElementsByClassName('btn delete')[0];

    addButton.addEventListener('click', ()=>{
        if (expenseInput.value === '' || amountInput.value === '' || dateInput.value === '') {
            return;
        }
    
        const pExpense = document.createElement('p');
        pExpense.textContent = `Type: ${expenseInput.value}`;
    
        const pAmount = document.createElement('p');
        pAmount.textContent = `Amount: ${amountInput.value}$`;
    
        const pDate = document.createElement('p');
        pDate.textContent = `Date: ${dateInput.value}`;
    
        const article = document.createElement('article');
        article.appendChild(pExpense);
        article.appendChild(pAmount);
        article.appendChild(pDate);
    
        const editButton = document.createElement('button');
        editButton.setAttribute('class','btn edit');
        editButton.textContent = 'edit';
        editButton.addEventListener('click', () => {
            expenseInput.value = pExpense.textContent.replace('Type: ', '');
            amountInput.value = pAmount.textContent.replace('Amount: ', '').replace('$','');
            amountInput.va
            dateInput.value = pDate.textContent.replace('Date: ', '');
            expenseLi.remove();
            addButton.removeAttribute('disabled');
        })
    
        const okButton = document.createElement('button');
        okButton.setAttribute('class','btn ok');
        okButton.textContent = 'ok';
        okButton.addEventListener('click', () => {
            divButtons.remove();
            expensesList.appendChild(expenseLi);
            divExpenses.appendChild(expensesList);
           addButton.removeAttribute('disabled');
        })
    
        const divButtons = document.createElement('div');
        divButtons.classList.add('buttons');
        divButtons.appendChild(editButton);
        divButtons.appendChild(okButton);
    
        const expenseLi = document.createElement('li');
        expenseLi.classList.add('expense-item');
        expenseLi.appendChild(article);
        expenseLi.appendChild(divButtons);
    
        previewList.appendChild(expenseLi);
    
    
        expenseInput.value = '';
        amountInput.value = '';
        dateInput.value = '';
        addButton.setAttribute('disabled', 'disabled');

        deleteButton.addEventListener('click',()=>{
           location.reload()
        })
    })
    
}
