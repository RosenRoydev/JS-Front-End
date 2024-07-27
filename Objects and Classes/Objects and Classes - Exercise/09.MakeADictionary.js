function dictionary(input){
    let dictionary = {};
    for (const text of input) {
        let workingInput = JSON.parse(text);
     let [term,description] = Object.entries(workingInput)[0];
        dictionary[term] = description
    }
    let entries = Object.entries(dictionary)
    entries = entries.sort((a,b) => a[0].localeCompare(b[0]))
    for (const [term,description] of entries) {
        console.log(`Term: ${term} => Definition: ${description}`)
    }
}
dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )