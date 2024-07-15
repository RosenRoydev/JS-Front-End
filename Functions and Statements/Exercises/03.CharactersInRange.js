function writeChars(charA,charB){
    const str = charA + charB;
    const valueA = str.charCodeAt(0);
    const valueB = str.charCodeAt(1);
    let result = '';
    if (valueA < valueB){
        for (let index = valueA + 1; index < valueB; index++) {
            let char = '';
            result += String.fromCharCode(index) + ' '
        }
    }else{
        for (let index = valueB + 1; index < valueA; index++) {
            result += String.fromCharCode(index) + ' ';   
        }
    }
    console.log(result);
}
writeChars('c', '#')