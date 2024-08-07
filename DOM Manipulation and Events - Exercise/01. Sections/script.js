function create(words) {
   const input = words;
   const mainEl = document.getElementById('content')
   for (const item of input) {
      let divEl = document.createElement('div');
      let pEl= document.createElement('p');
      divEl.appendChild(pEl)
      pEl.style.display = 'none';
      pEl.textContent = item;
      divEl.addEventListener('click', (e) =>{
         pEl.style.display = 'block';
      } )
      mainEl.appendChild(divEl);
   }
}