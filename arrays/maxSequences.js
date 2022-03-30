function maxS(arr){
    let maxArray = [];
    let currentArray=[];
    
    for(let i = 0; i<arr.length; i++){
        currentArray=[]  
    for(let j=0; j<arr.length;j++)  {
        if(arr[i]===arr[j]){currentArray.push(arr[j])}
        else{break}
    } 
        if(currentArray.length>maxArray.length)maxArray=currentArray
        
    }
    console.log(maxArray.join(' '))
}maxS([0, 1, 0, 0, 0, 8, 8, 8, 6])