function solve() {
  let sentences = document.getElementById('input').value;
  let splittedSentences = sentences.split('.').map(item => item.trim()).filter(item => item !== '');
  let outputEl = document.querySelector('#output');
  while(splittedSentences.length > 0){
    let p = document.createElement('p')
    let textForP = splittedSentences.splice(0,3);
    p.textContent = textForP.join('. ') +'.'
    outputEl.appendChild(p)
  }
}