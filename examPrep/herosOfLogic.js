function game(input){
    let herosNum = input.shift();
    let heros={};
    for (let i=0; i<herosNum; i++){
       let [name, hp, mp]= input.shift().split(' ');
       heros[name]= {hp,mp}
    }
    for (let line of input) {
        if (line=='End')break;
      let token = line.split(' - ');
      let command= token[0];
      let name = token[1];
      if(command==='CastSpell'){
          let mpNeeded= Number(token[2])
          let spellName = token[3];
          heros[name].mp= Number(heros[name].mp)
         if(heros[name].mp>=mpNeeded){
             heros[name].mp-=mpNeeded
             console.log(`${name} has successfully cast ${spellName} and now has ${heros[name].mp} MP!`)
            }
        else console.log(`${name} does not have enough MP to cast ${spellName}!`)
        }
      else if(command=='TakeDamage'){
          let damage = Number(token[2])
          let attacker = token[3]
          heros[name].hp=Number(heros[name].hp)
          heros[name].hp-=damage
          if(heros[name].hp>0){
             console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${heros[name].hp} HP left!`)
            }
            else{
             console.log(`${name} has been killed by ${attacker}!`)
             delete heros[name] 
            }
        }
      else if(command=='Recharge'){
          let amount = Number(token[2])
          heros[name].mp=Number(heros[name].mp)
         
          if(heros[name].mp+amount>=200){
              amount=200-heros[name].mp
              heros[name].mp=200
            } 
          else heros[name].mp+= amount
          console.log(`${name} recharged for ${amount} MP!`)
          
      }
      else if(command=='Heal'){
          let heal=Number(token[2])
          heros[name].hp= Number(heros[name].hp)
          if((heros[name].hp+heal)>=100){
              heal= 100-heros[name].hp
              heros[name].hp=100
            }
            else heros[name].hp+=heal
       console.log(`${name} healed for ${heal} HP!`)
      }
    }
    
    for (let key in heros) {
        console.log(`${key}\n HP: ${heros[key].hp}\n MP: ${heros[key].mp}`)
        
    }
}
game([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End",
  ])