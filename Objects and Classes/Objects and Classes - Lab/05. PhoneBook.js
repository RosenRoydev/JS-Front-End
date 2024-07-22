function solve(phonesAndNames){
    let phoneBook = {};
    for(let person of phonesAndNames) 
        {
            let guy =  person.split(' ');
            let name = guy[0];
            let number = guy[1];
           phoneBook[name] = number

        }
        let entries = Object.entries(phoneBook)
        for (const [key, value] of entries) {
            console.log(`${key} -> ${value}`)
        }
}
solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
   )