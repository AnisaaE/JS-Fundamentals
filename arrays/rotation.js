function rotation(arr, rotation){
    for (let i=0; i<rotation; i++){
        let num = arr.shift()
        arr.push(num)
    }
    console.log(arr.join(' '))
}
