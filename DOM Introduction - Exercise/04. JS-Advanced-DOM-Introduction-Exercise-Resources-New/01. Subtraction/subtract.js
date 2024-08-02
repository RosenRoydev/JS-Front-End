function subtract() {
   let firstNumber = document.getElementById('firstNumber');
   let secondNumber = document.getElementById('secondNumber');
   let subtractResult = document.getElementById('result')
   let result = Number(firstNumber.value) - Number(secondNumber.value)
   subtractResult.textContent = result
}