function solve(input) {
    const numberOfCafeterias = Number(input.shift());
    const cafeterias = {};
    

    for (let i = 0; i < numberOfCafeterias; i++) {
        const cafeteriaInfo = input.shift().split(' ');
        const cafeteriaName = cafeteriaInfo[0];
        const shift = cafeteriaInfo[1];
        const coffees = cafeteriaInfo[2].split(','); 
        
        cafeterias[cafeteriaName] = {
            shift: shift,
            coffees: coffees
        };
    }
    
   
    for (let command of input) {
        if (command === 'Closed') break;
        
        const [action, cafeteriaName, param1, param2] = command.split(' / ');
        
        if (action === 'Prepare') {
            const shift = param1;
            const coffee = param2;
            
            if (cafeterias[cafeteriaName].shift === shift && cafeterias[cafeteriaName].coffees.includes(coffee)) {
                console.log(`${cafeteriaName} has prepared a ${coffee} for you!`);
            } else {
                console.log(`${cafeteriaName} is not available to prepare a ${coffee}.`);
            }
        } else if (action === 'Change Shift') {
            const newShift = param1;
            cafeterias[cafeteriaName].shift = newShift;
            console.log(`${cafeteriaName} has updated his shift to: ${newShift}`);
        } else if (action === 'Learn') {
            const newCoffee = param1;
            if (cafeterias[cafeteriaName].coffees.includes(newCoffee)) {
                console.log(`${cafeteriaName} knows how to make ${newCoffee}.`);
            } else {
                cafeterias[cafeteriaName].coffees.push(newCoffee); 
                console.log(`${cafeteriaName} has learned a new coffee type: ${newCoffee}.`);
            }
        }
    }
    
    
    for (let [name, info] of Object.entries(cafeterias)) {
        console.log(`Barista: ${name}, Shift: ${info.shift}, Drinks: ${info.coffees.join(', ')}`);
    }
}

solve([
    '3',
      'Alice day Espresso,Cappuccino',
      'Bob night Latte,Mocha',
      'Carol day Americano,Mocha',
      'Prepare / Alice / day / Espresso',
      'Change Shift / Bob / night',
      'Learn / Carol / Latte',
      'Learn / Bob / Latte',
      'Prepare / Bob / night / Latte',
      'Closed']
    )