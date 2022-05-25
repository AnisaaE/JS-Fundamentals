function trivelTime(input){
    let obj={};
    for (let destination of input) {
        let [country, town, price]= destination.split(' > ');
        if(!obj.hasOwnProperty(country)){
            obj[country]={};
        }
        if(!obj[country].hasOwnProperty(town)){
            obj[country][town]= Number.MAX_SAFE_INTEGER
        }
        if(Number(price)<obj[country][town]){
            obj[country][town]= Number(price)
        }
    }
    let sorted = Object.entries(obj) 
     sorted.sort((a,b)=> a[0].localeCompare(b[0]))
     for (let country of sorted) {
         let towns = Object.entries(country[1])
         towns.sort((a,b)=>a[1]-b[1])
         let newArr = []
         for(let town of towns){ 
             let currTown = `${town[0]} -> ${town[1]}`
             newArr.push(currTown)
         }
        console.log(`${country[0]} -> ${newArr.join(' ')}`)
     }

}trivelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"])