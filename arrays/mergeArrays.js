function mergeArr(arr1, arr2) {
    let newArr = []
    let num = 0
    for (let i = 0; i < arr1.length; i++) {
            num = i % 2 === 0?Number(arr1[i]) + Number(arr2[i]):`${arr1[i]}${arr2[i]}`
          
        newArr.push(num)
    }console.log(newArr.join(' - '))

} mergeArr(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)