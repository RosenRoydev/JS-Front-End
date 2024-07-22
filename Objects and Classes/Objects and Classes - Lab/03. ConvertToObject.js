function jsonConvert(jsonText){
    let person = JSON.parse(jsonText);
    let entries = Object.entries(person);
    for(let [key, value] of entries) 
        {
            console.log(`${key}: ${value}`);
        }
}
jsonConvert('{"name": "Peter", "age": 35, "town": "Plovdiv"}')