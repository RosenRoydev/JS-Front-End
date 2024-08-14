function solve(inputDates) {
    const numberOfHeroes = Number(inputDates.shift());
    const heroes = {};
    for (let i = 0; i < numberOfHeroes; i++) {
        const heroesDates = inputDates.shift().split(' ');
        const heroName = heroesDates[0]
        heroes[heroName] = {
            'HP': Number(heroesDates[1]),
            'bullets': Number(heroesDates[2])
        }
    }
        let commands = inputDates.shift();
    while (commands !== 'Ride Off Into Sunset') {
        const commandInput= commands.split(' - ');
        const command = commandInput[0];
        heroName = commandInput[1];
        if (command === 'FireShot') {
            const target = commandInput[2];
            if (heroes[heroName].bullets >= 1) {
                heroes[heroName].bullets -= 1
                console.log(`${heroName} has successfully hit ${target} and now has ${heroes[heroName].bullets} bullets!`)
            } else {
                console.log(`${heroName} doesn't have enough bullets to shoot at ${target}!`);
            }
        }
        if (command === 'TakeHit') {
            const damage = Number(commandInput[2]);
            const attacker = commandInput[3];
            const currentHP = heroes[heroName].HP - damage
            if (currentHP > 0) {
                heroes[heroName].HP = currentHP;
                console.log(`${heroName} took a hit for ${damage} HP from ${attacker} and now has ${currentHP} HP!`)
            } else {
                delete heroes[heroName];
                console.log(`${heroName} was gunned down by ${attacker}!`)
            }
        }
        if (command === 'Reload') {
            if (heroes[heroName].bullets < 6) {
                const loadedBullets = 6 - heroes[heroName].bullets
                heroes[heroName].bullets = 6
                console.log(`${heroName} reloaded ${loadedBullets} bullets!`)
            } else {
                console.log(`${heroName}'s pistol is fully loaded!`);
            }
        }
        if (command === 'PatchUp') {
            const amount = Number(commandInput[2]);
            let recoveredBlood = 0;
            if (heroes[heroName].HP < 100) {
                if (heroes[heroName].HP + amount > 100) {
                    heroes[heroName].HP = 100;
                    recoveredBlood = 100 - heroes[heroName].HP;

                } else {
                    recoveredBlood = amount;
                    heroes[heroName].HP += amount

                }
                console.log(`${heroName} patched up and recovered ${recoveredBlood} HP!`)
            } else if (heroes[heroName].HP === 100) {
                console.log(`${heroName} is in full health!`)
            }
        }
        commands = inputDates.shift();
    }

    Object.keys(heroes).forEach(heroName =>{
        console.log(heroName)
        console.log(` HP: ${heroes[heroName].HP}`)
        console.log(` Bullets: ${heroes[heroName].bullets}`)
    }
        
    )
        
}

solve(["2",
    "Jesse 100 4",
    "Walt 100 5",
    "FireShot - Jesse - Bandit",
     "TakeHit - Walt - 30 - Bandit",
     "PatchUp - Walt - 20" ,
     "Reload - Jesse",
     "Ride Off Into Sunset"])
    
