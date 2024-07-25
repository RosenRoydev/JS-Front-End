function towns(input){
    let townsInfo = {};
    for (const info of input) {
        let infoTowns = info.split(' | ');
        let town = infoTowns[0];
        let latitude = infoTowns[1];
        let longitude = infoTowns[2];
        
        townsInfo[town] = new Array();
        townsInfo[town].push(latitude);
        townsInfo[town].push(longitude);
    }
    let entries = Object.entries(townsInfo);
        for (const [town,[latitude,longitude]] of entries) {
            
            console.log(`{ town: '${town}', latitude: '${Number(latitude).toFixed(2)}', longitude: '${Number(longitude).toFixed(2)}' }`)
        }       
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
    )