function search() {
   let ul = document.getElementById('towns').getElementsByTagName('li');
  const towns = []
   for (const item of ul) {
      towns.push(item);
   }
   let searchedSymbols = document.getElementById('searchText').value;
   searchedSymbols = searchedSymbols.toLowerCase();
   let counter = 0;
   for (const town of towns) {
      if(town.textContent.toLowerCase().includes(searchedSymbols)){
         counter++;
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      }else{
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none'
      }
         
   }
   let result = document.getElementById('result');
   result.textContent = `${counter} matches found`
   console.log(result)
}
