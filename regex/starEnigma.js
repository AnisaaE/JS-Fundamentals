function starEnigma (input){
    let planets ={
        attacked:[],
        destroied:[]
    }
    let regex = /@(?<name>[A-Za-z]+)(?:[^@\-!:>])*?:\d+(?:[^@\-!:>])*?!(?<type>[AD])!(?:[^@\-!:>])*?->\d+/
    let numMessage= Number(input.shift());
    for(let i=0; i<numMessage; i++){  
        let line=  input[i].split('')
        let count=input[i]
        .toLowerCase()
        .split('')
        .filter((x)=>x=='s' ||x=='t'|| x=='a'|| x=='r')
        .length
     let decryptedMessage= line.map(x=>String.fromCharCode(x.charCodeAt()-count)).join('')
     let result = regex.exec(decryptedMessage)
     if(result!==null){
         if(result.groups.type == 'A'){
             planets.attacked.push(result.groups.name)
         }
         else planets.destroied.push(result.groups.name)
     }
    }
     planets.attacked= planets.attacked.sort((a,b)=>a.localeCompare(b))
     planets.destroied= planets.destroied.sort((a,b)=>a.localeCompare(b))
   console.log(`Attacked planets: ${planets.attacked.length}`)
   for (let i=0; i<planets.attacked.length; i++) {
       console.log(`-> ${planets.attacked[i]}`)
   }
   console.log(`Destroyed planets: ${planets.destroied.length}`)
   for (let i=0; i<planets.destroied.length; i++) {
       console.log(`-> ${planets.destroied[i]}`)
   }
}starEnigma(['2',
'STCDoghudd4=63333$D$0A53333',
'EHfsytsnhf?8555&I&2C9555SR'])