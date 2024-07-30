function calc() {
    // TODO: sum = num1 + num2
    num1 = document.getElementById('num1');
    num2 = document.getElementById('num2');
    sum = document.getElementById('sum')
    sum.value= Number(num1.value) + Number(num2.value);
    return sum
}
