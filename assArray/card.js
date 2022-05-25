function cards(input){
    let players={};
    let suits={
            S: 4,
            H: 3,
            D: 2,
            C: 1
        }
    let power = {
        "1":10,
        "2":2,
        "3":3,
        "4":4,
        "5":5,
        "6":6,
        '7':7,
        "8":8,
        "9":9,
         J:11,
         Q:12,
         K:13,
         A:14
    }  
    for (let person of input) {
       let [name, cards]= person.split(': ') 
       if(!players.hasOwnProperty(name)){
           players[name]= new Set();
       }
      cards= cards.split(', ')
      for (let card of cards) {
          players[name].add(card)
        }

    }
    for(let [name, cards] of Object.entries(players)){
        let currPower = 0;
        for (let card of cards) {
          currPower+= power[card.charAt(0)]*suits[card.charAt(card.length-1)]
        }
       
        players[name]= currPower
    }
    let array= Object.entries(players)
    for (let [name, power] of array) {
        console.log(`${name}: ${power}`)
    }
}cards([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]
    )