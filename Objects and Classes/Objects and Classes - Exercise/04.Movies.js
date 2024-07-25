function movies(input) {
    let moviesInfo = [];
    input.forEach((command) => {
        if (command.startsWith('addMovie')) {
            let [name] = command.split('addMovie ').filter(Boolean)
            moviesInfo.push({ name });
        } else if (command.includes('directedBy')) {
            let [name, director] = command.split(' directedBy ')
            const movie = moviesInfo.find(x => x?.name === name);
            if (movie?.name) {
                movie.director = director;
            }
        } else if (command.includes('onDate')) {
            let [name, date] = command.split(' onDate ')
            const movie = moviesInfo.find(x => x?.name === name)
            if (movie?.name) {
                movie.date = date;
            }
        }  
    })
    moviesInfo.filter(movie => movie.name && movie.director && movie.date)
    .forEach(movie => {
        console.log(JSON.stringify(movie))
    });
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    )
