function magic(arr) {
    let sumRow = 0
    let rowArrSum = []
    let sameSum= true
    let sameSumColumn=true
    let sumCulumn = 0
    let equalLength= true
    let sumCulumnArr = []
    for (let i = 0; i < arr.length; i++) {
        if(arr.length!==arr[i].length){equalLength=false; break}
      for (let k = 0; k < arr[i].length; k++) {
        
            sumRow += arr[i][k];
        }
        rowArrSum.push(sumRow);
        sumRow = 0;
    }
    for(let i=1; i<rowArrSum.length;i++){
        if(rowArrSum[i]!==rowArrSum[i-1])sameSum=false; break;
    }
    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr[i.length]; k++) {
            sumCulumn += arr[k][i];
        }
        sumCulumnArr.push(sumCulumn);
        sumCulumn=0;
    }
    for(let i=1; i<sumCulumnArr.length;i++){
        if(sumCulumnArr[i]!==sumCulumnArr[i-1])sameSumColumn=false; break;
    }
   if(sameSum && sameSumColumn && equalLength ) { console.log(sameSumColumn)}
          

    else{console.log('false')}
}
magic([[1,0,0],
       [0,0,1]])