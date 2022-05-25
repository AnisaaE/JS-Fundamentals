function arena(input){
    let pool= {};
    for (let line of input){
        if(line ==="Ave Cesar"){break}
        if (line.includes('->')){
            let [name, technique, skills] = line.split(' -> ');
            if(!pool.hasOwnProperty(name)){
                pool[name]= {}
            }
            if(!pool[name].hasOwnProperty(technique)){
                pool[name][technique]= 0
            }
            if(pool[name][technique]<Number(skills)){
              pool[name][technique]=Number(skills)
            }
        }
        if (line.includes(' vs ')){
         let [name1, name2]= line.split(' vs ')
         if(pool.hasOwnProperty(name1) && pool.hasOwnProperty(name2)){
             let founded = false
             let found 
             let array1= Object.keys(pool[name1])
             let array2 = Object.keys(pool[name2])
             for (let key of array1) {
                  found = array2.find(element=>element===key)
                 if(typeof(found)!= 'undefined'){
                     founded= true;
                     break;
                    }
                }
                if(founded){
                 if(pool[name1][found]>pool[name2][found]){
                     delete pool[name2]
                    }
                 else if(pool[name1][found]<pool[name2][found]){
                         delete pool[name1]
                    }
                }  
                
            }
        }   
    }
  
   for (let key in pool) {
       let totalPoints=0;
         totalPoints+= Object.values(pool[key]).reduce((a,b)=> a+b)
        pool[key].totalPoints= totalPoints
      
   } 
     let sorted = Object.entries(pool)
        sorted.sort((a,b)=> ((b[1]).totalPoints - a[1].totalPoints) ||  (b[0].localeCompare(a[0])))
   
     for (let eachPlayer of sorted) {
         let array = Object.entries(eachPlayer[1])
         console.log(`${eachPlayer[0]}: ${array.pop()[1]} skill`)
        for (let skill of array) {
            console.log(`- ${skill[0]} <!> ${skill[1]}`)
        }
     }

}
