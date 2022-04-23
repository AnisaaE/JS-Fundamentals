function furniture(input){
    let totalSum =0;
     console.log('Bought furniture:')
    let regex = />>(?<name>[a-zA-Z\s]+)<<(?<price>\d+(.\d+)?)!(?<quantity>\d+)/
   for(let line of input){
       if(line==='Purchase'){
           break;
       }
       let result = regex.exec(line)
       if(result!==null){
         totalSum+= Number(result.groups.price)*Number(result.groups.quantity)
         console.log(result.groups.name)
       }
   }
  console.log(`Total money spend: ${totalSum.toFixed(2)}`)
}furniture(['>>Sofa<<312.23!3',
'>>TV<<300!5',
'>Invalid<<!5',
'Purchase'])