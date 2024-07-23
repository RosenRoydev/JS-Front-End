function meetings(input){
    let meetings = {};
    for (const item of input) {
        let meeting = item.split(' ');
        let weekday = meeting[0];
        let name = meeting[1];
    
        if(meetings.hasOwnProperty(weekday)){
            console.log(`Conflict on ${weekday}!`);
        }else{
            meetings[weekday] = name
            console.log(`Scheduled for ${weekday}`)
        }
    }
    let entries = Object.entries(meetings)
    for(let [day,name] of entries) 
        {
          console.log(`${day} -> ${name}`)
        }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
   )