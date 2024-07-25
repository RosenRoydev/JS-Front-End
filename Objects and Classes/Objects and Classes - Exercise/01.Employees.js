function employees(input){
    let namesWithLength = {};
    for(let name of input) 
        {
            let length = name.length
         namesWithLength[name] = length;
        }
        let entries = Object.entries(namesWithLength)
        for (let [name,length] of entries) {
            console.log(`Name: ${name} -- Personal Number: ${length}`)
        }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )
    