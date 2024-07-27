function carParking(input) {
    let cars = []
    for (const item of input) {
        let commandCar = item.split(', ')
        let command = commandCar[0];
        let registrationNumber = commandCar[1];
        if (command === 'IN' && !cars.includes(registrationNumber)) {
            cars.push(registrationNumber)
        }
        if (command === 'OUT') {
          cars = cars.filter(car => car !== registrationNumber)
        }
    }
    if (cars.length === 0) {
        console.log('Parking Lot is Empty')
    } else {
        cars = cars.sort((a,b) => a.localeCompare(b))
        for (const number of cars) {
            console.log(number)
        }
    }
}
carParking(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])
