function loadingBar(number){
    counter = 0;
    result = [];
    let currentCounter = 0;
    for (let index = 0; index < 10; index++) {
        counter ++;
        number -= 10;
        if(number === 0 ){
            break;
        }
    }
    currentCounter = counter;
    for (let i = 0; i < 10; i++) {  
        if(currentCounter <= 0){
            result.push('.')
        }else(
            result.push('%')
        )
         currentCounter--;
    }
    console.log(`${counter}0% [${result.join('')}]`);
    if(counter === 10){
        console.log('100% Complete!');
    }else{
        console.log('Still loading...')
    }
}
loadingBar(100);