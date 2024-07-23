function songs(input){
    let songs = [];
    let numberOfSongs =input.shift();
    let type = input.pop()
    class Song{
        constructor(typeList,songName,time){
         this.typeList = typeList;
         this.songName = songName;
         this.time = time;
        }
     }
    for (let index = 0; index < numberOfSongs; index++) {
        let songInfo = input[index].split('_');
        let songName = songInfo[1];
        let typeList = songInfo[0];
        let time = songInfo[2];
        let song = new Song(typeList,songName,time)
        songs.push(song)
        
    }
        
    

    if(type === 'all'){
        songs.forEach(i => console.log(i.songName));
    }else{
        let filteredSongs = songs.filter(i => i.typeList===type);
        for(let song of filteredSongs) 
            {
              console.log(song.songName)
            }
    }
}
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    )