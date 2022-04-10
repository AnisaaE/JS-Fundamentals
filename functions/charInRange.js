function charInRange(char1, char2){
    let startChar= Math.min(char1.charCodeAt(0), char2.charCodeAt(0));
    let finalChar= Math.max(char1.charCodeAt(0), char2.charCodeAt(0));
    let newArr= [];
    for(let i=startChar+1; i<finalChar; i++){
        newArr.push(String.fromCharCode(i))
    }
 console.log(newArr.join(' '))
}charInRange(a,n)