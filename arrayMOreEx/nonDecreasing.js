function object(arr){
  
    let newArr= [arr[0]]
    for (let i = 0; i<arr.length; i++){
        if(arr[i+1]>=arr[i])newArr.push(arr[i+1])
    }
    console.log(newArr.join(' '))

}object([ 1, 3, 8, 4, 10, 12, 3, 2, 24])