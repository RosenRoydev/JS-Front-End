function deleteByEmail() {
    const customersTable = document.getElementById('customers');
    const inputEl = document.querySelector('input[type=text][name=email]');
    const resultEl = document.getElementById('result');

    let searchMail = inputEl.value;
    
    const allMails = document.querySelectorAll('tbody td:last-child');
   let findMail = (Array.from(allMails).find(m => m.textContent === searchMail));
   
    if(findMail){
        findMail.parentElement.remove();
        resultEl.textContent = 'Deleted.'
    }else{
        resultEl.textContent ='Not found.';
    }
    
}