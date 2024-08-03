function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let tableElements = document.querySelectorAll('table tbody tr');
      let searchEl = document.getElementById('searchField');
      for (const item of tableElements) {
           item.classList.remove('select');
         if(item.textContent.toLowerCase().includes(searchEl.value.toLowerCase())){
             item.classList.add('select')
         }
      }
   
   }
}