function oddOccurance(input){
    let words= input.split(' ')
    let obj={};
    for (let word of words) {
        word= word.toLocaleLowerCase();
        if(!obj.hasOwnProperty(word)){
            obj[word]= 0
        }
        obj[word]++
    }
    let filtered = Object.entries(obj).filter(x=> x[1]%2!==0)
    console.log(filtered.map(x=>x[0]).join(' '))

}oddOccurance('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')