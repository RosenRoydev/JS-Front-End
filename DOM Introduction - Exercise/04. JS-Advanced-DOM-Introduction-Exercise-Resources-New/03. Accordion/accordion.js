function toggle() {
    let button = document.getElementsByClassName('button')[0];
    console.log(button);
    let moreElement = document.getElementById('extra');
   if(button.textContent === 'More'){
    moreElement.style.display = 'block'
    button.textContent = 'Less'
   }
   else if(button.textContent === 'Less'){
    moreElement.style.display = 'none';
    button.textContent = 'More'
   }
}