function secretChat(array){
     let messege = array.shift();
     let assArray={
      InsertSpace,
      Reverse,
      ChangeAll
     }
     while(array[0]!=='Reveal'){
        let line = array.shift().split(':|:')
        let command = line[0];
        let p1= line[1]
        let p2= line[2]
        messege= assArray[command](messege, p1, p2)
     }console.log(`You have a new text message: ${messege}`)

     function InsertSpace (text, index){
       let  leftSide = text.slice(0,index)
       let rightSide = text.slice(index)
       text = leftSide+' '+rightSide;
       console.log(text)
       return text
     }
    
     function Reverse (text, substring){
       let index = text.indexOf(substring)
       if(index!=-1){
         let leftSide= text.slice(0, index)
         let rightSide= text.slice(index+substring.length)
            let reversed = text.slice(index, index+substring.length)
           .split('')
           .reverse()
           .join('')
           text= leftSide+rightSide+reversed
           console.log(text)
            
        }else(console.log('error'))
        return text 
     }
     function ChangeAll (text, substring, replacemant){
      text= text.split(substring).join(replacemant)
      console.log(text)
      return text
     }
}secretChat(
  [
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]
  )