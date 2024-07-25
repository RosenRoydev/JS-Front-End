function inventory(input) {
    let heroes = [];
    for (const object of input) {
        let dates = object.split(' / ');
        let heroName = dates[0]
        let level = dates[1];
        let items = dates[2].split(' , ');
        let hero = {
            name: heroName,
            heroLevel: level,
            heroItems: items
        }
        heroes.push(hero);
    }
    heroes.sort((a, b) => a.heroLevel - b.heroLevel);
        for (const hero of heroes) {
            console.log(`Hero: ${hero.name}`);
            console.log(`level => ${hero.heroLevel}`);
            console.log(`items => ${hero.heroItems.join(', ')}`)
        }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    )