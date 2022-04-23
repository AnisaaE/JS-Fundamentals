function race(array){
    let racers= {}
    let names = array.shift().split(', ');
    for (let line of array){
        if(line!=='end of race'){
            let racerName = line.match(/[A-Z]+/gi).join('');
            let kilometers= line.match(/\d/g).map(Number).reduce((a,b)=> a+b);
            if(names.includes(racerName)){
                if(!racers.hasOwnProperty(racerName)){
                 racers[racerName]= 0
                }
                racers[racerName]+=kilometers
            }     
        }
    }
    let sorted = Object.keys(racers).sort((a,b)=> racers[b]- racers[a])
    console.log(`1st place: ${sorted[0]}\n2nd place: ${sorted[1]}\n3rd place: ${sorted[2]}`)

}
