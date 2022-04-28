function winningTick(input){
    let regexSeparator = /[ ]*[,]+[ ]+/
    let valid = false; 
    let regex = /([@#$^])\1*/;
    let arrayTickets = input.split(regexSeparator)
    for (let currTick of arrayTickets) {
        if(currTick.length==20){
          valid= true;
          let rightSide = currTick.slice(0,10)
          let leftSide = currTick.slice(10)
          let rightMatch = rightSide.match(regex)
          let leftMatch= leftSide.match(regex)
          if(leftMatch==null || rightMatch[0].length<6 || leftMatch[0].length<6|| rightMatch==null){
              console.log(`ticket "${currTick}" - no match`)
          }
          else if(rightMatch[0]==leftMatch[0]){
              if(rightMatch[0].length==10)
              console.log(`ticket "${currTick}" - 10${rightMatch[0][0]} Jackpot!`)
              else console.log(`ticket "${currTick}" - ${rightMatch[0].length}${rightMatch[0][0]}`)
          }
        }
        else
        console.log("invalid ticket")
    
    
    }
}
