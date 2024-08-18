function solve(input) {
    const n = Number(input.shift());
    const heroes = {};

    // Parse superhero information
    for (let i = 0; i < n; i++) {
        const [heroName, superPowers, energy] = input.shift().split('-');
        heroes[heroName] = {
            superPowers: superPowers.split(','),
            energy: Number(energy),
        };
    }

    
    for (const command of input) {
        if (command === 'Evil Defeated!') break;

        const [action, heroName, param1, param2] = command.split(' * ');

        if (action === 'Use Power') {
            const superPower = param1;
            const energyRequired = Number(param2);

            if (
                heroes[heroName].superPowers.includes(superPower) &&
                heroes[heroName].energy >= energyRequired
            ) {
                heroes[heroName].energy -= energyRequired;
                console.log(
                    `${heroName} has used ${superPower} and now has ${heroes[heroName].energy} energy!`
                );
            } else {
                console.log(
                    `${heroName} is unable to use ${superPower} or lacks energy!`
                );
            }
        } else if (action === 'Train') {
            const trainingEnergy = Number(param1);

            if (heroes[heroName].energy === 100) {
                console.log(`${heroName} is already at full energy!`);
            } else {
                const energyGained = Math.min(
                    trainingEnergy,
                    100 - heroes[heroName].energy
                );
                heroes[heroName].energy += energyGained;
                console.log(
                    `${heroName} has trained and gained ${energyGained} energy!`
                );
            }
        } else if (action === 'Learn') {
            const newSuperPower = param1;

            if (heroes[heroName].superPowers.includes(newSuperPower)) {
                console.log(`${heroName} already knows ${newSuperPower}.`);
            } else {
                heroes[heroName].superPowers.push(newSuperPower);
                console.log(`${heroName} has learned ${newSuperPower}!`);
            }
        }
    }

    
    for (const heroName in heroes) {
        console.log(`Superhero: ${heroName}`);
        console.log(` - Superpowers: ${heroes[heroName].superPowers.join(', ')}`);
        console.log(` - Energy: ${heroes[heroName].energy}`);
    }
}

solve([
    "2",
    "Iron Man-Repulsor Beams,Flight-20",
    "Thor-Lightning Strike,Hammer Throw-100",
    "Train * Thor * 20",
    "Use Power * Iron Man * Repulsor Beams * 30",
    "Evil Defeated!"
])
