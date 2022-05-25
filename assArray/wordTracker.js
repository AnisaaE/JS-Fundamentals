function wordTracker(input){
    let words = input.shift().split(' ');
    let obj= {}
    for (let word of words) {
        obj[word]=0;
    }
    for (let word of input) {
        if (obj.hasOwnProperty(word)){
            obj[word]+=1
        }
        
    }
    // convert into an object
    let sorted = Object.entries(obj);
    //sort
    sorted.sort((a,b)=> b[1]-a[1])
    for (let word of sorted) {
        console.log(`${word[0]} - ${word[1]}`)
    }

}wordTracker(['this sentence', 
'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'])