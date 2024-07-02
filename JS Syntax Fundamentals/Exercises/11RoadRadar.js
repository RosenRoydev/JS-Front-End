function RoadRadar(speed, typeRoad) {
    let speedLimit = 0;
    let difference = 0;
    let status = '';
    if (typeRoad === 'motorway') {
        speedLimit = 130;
        if (speed > 130) {
            difference = speed - speedLimit;

            if (difference <= 20) {
                status = 'speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            else if (difference <= 40) {
                status = 'excessive speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            else {
                status = 'reckless driving';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
        }
        else{
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
        }

    }

    else if (typeRoad === 'interstate') {
        speedLimit = 90;
        if (speed > 90) {
            difference = speed - speedLimit;

            if (difference <= 20 ) {
                status = 'speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            else if (difference <= 40) {
                status = 'excessive speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            else {
                status = 'reckless driving';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
        }
        else{
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
        }

    }
    else if (typeRoad === 'city') {
        speedLimit = 50;
        if (speed > 50) {
            difference = speed - speedLimit;

            if (difference <= 20 ) {
                status = 'speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            else if (difference <= 40) {
                status = 'excessive speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            else {
                status = 'reckless driving';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
        }
        else{
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
        }

    }

    else if (typeRoad === 'residential') {
        speedLimit = 20;
        if (speed > 20) {
            difference = speed - speedLimit;

            if (difference <= 20) {
                status = 'speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            else if (difference <= 40) {
                status = 'excessive speeding';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
            else {
                status = 'reckless driving';
                console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
            }
        }
        else{
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
        }

    }
}
    
RoadRadar(200, 'motorway')