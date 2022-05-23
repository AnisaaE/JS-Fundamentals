function mirrorWords(array){
   let regex = /([@#])([a-zA-Z]{3,})\1{2}([a-zA-Z]{3,})\1/g
   let match = regex.exec(array[0])
   let count = 0;
   let valid = [];
   while(match!=null){
      let word1= match[2]
      let word2= match[3]
      let revesed = word2.split('').reverse().join('')
      count++
      if(word1==revesed){
       valid.push(`${word1} <=> ${word2}`)
      
      } 
      match = regex.exec(array[0])
   }
  if (count==0){
      console.log(`No word pairs found!`)
    }
  else console.log(`${count} word pairs found!`)

  if(valid.length==0){
    console.log(`No mirror words!`)
  }
  else {
    console.log('The mirror words are:')
          console.log(valid.join(', '))
      
  }
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ])
mirrorWords([ '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' ])