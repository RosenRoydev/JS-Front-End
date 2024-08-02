function extractText() {
    let allElements = document.getElementById('items');
    let result  = document.getElementById('result');
    let textResult = allElements.innerText;
    result.textContent = textResult; 
}