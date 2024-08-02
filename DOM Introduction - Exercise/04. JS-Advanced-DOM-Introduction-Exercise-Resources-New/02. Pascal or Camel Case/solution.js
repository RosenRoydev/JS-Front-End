function solve() {
  let caseMode = document.getElementById('naming-convention').value;
  let changedText = '';
  let result = document.getElementById('result');
  let text = document.getElementById('text').value
  text = text.toLowerCase();

  if (caseMode === 'Pascal Case') {
    changedText = text.split(' ').map(x => x[0].toUpperCase() + x.slice(1)).join('');
    result.textContent = changedText;
  } else if (caseMode === 'Camel Case') {
    changedText = text.split(' ').map((word, index) => {
      if (index === 0) {
       return word = word.toLowerCase();
      }
     return word[0].toUpperCase() + word.slice(1);
    }).join('');
    result.textContent = changedText;
  } else {
    result.textContent = 'Error!';
  }
}
