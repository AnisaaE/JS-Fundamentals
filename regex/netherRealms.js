function realms(input){
    let array =[input]
   const healthRegex= /[^\d.+\-*\/.]/g
   const demageRegex= /([-]*\d(\.\d)*)/g
   const oparetionRegex =/[*\/]/g
   const splitRegex =/[, ]+/g
   let multiplication ={
        '*': (n)=> n*2,
        '/': (n)=>n/2
   }
   let result =[]
   let names = array[0].split(splitRegex);
   for (let line of names) {
       if(line=='')continue
       let health = line.match(healthRegex)
       if(health==null)health=0
        else {health = health.map(x=>x.charCodeAt(0))
       .reduce((a,b)=>a+b);}
       let demage = line.match(demageRegex)
       if(demage==null)demage=[0]
       demage = demage.map(Number)
       .reduce((a,b)=>a+b)
       let operations = line.match(oparetionRegex);
       if(operations!==null) 
       {operations.forEach(x => demage = multiplication[x](demage));}
     result.push({line, health, demage})
    
   
   } result = result.sort((a,b)=>(a.line).localeCompare(b.line)) ;
   result.forEach(x=>console.log(`${x.line} - ${x.health} health, ${(x.demage).toFixed(2)} damage`))
   
}
realms('M3ph1st0**, Azazel')