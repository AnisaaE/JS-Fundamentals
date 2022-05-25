function users(input){
    let list ={};
    for (let info of input) {
      let [company, id]= info.split(' -> ')
      if(!list.hasOwnProperty(company)){
          list[company]= new Set();
      }  
      list[company].add(id)
    }
    let sorted = Object.entries(list)
    sorted.sort((a,b)=> a[0].localeCompare(b))
   for (let line of sorted) {
       console.log(line[0])
       let ids = line[1].values()
       for (let id of ids) {
           console.log(`-- ${id}`);
       }
   }
}users([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ])