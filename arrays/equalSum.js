function equalSum(arr) {
    let hasEqualSum = false
    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0
        let rightSum = 0
        for (let k = i - 1; k >= 0; k--) {
            leftSum += arr[k]
        }
        for (let m = i + 1; m < arr.length; m++) {
            rightSum += arr[m]
        }
        if (leftSum === rightSum) {
            hasEqualSum = true
            console.log(i)
        }
    }
    if(!hasEqualSum)console.log('no')

} equalSum([1, 2, 3, 3])
