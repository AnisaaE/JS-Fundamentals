function addAndSubstract(n1, n2, n3){
    function add (num1, num2){
         return num1+num2
    }
    let sumNum= add(n1,n2)
    let substract=(addResult, num3) =>  addResult-num3
    let finalResult= substract(sumNum,n3 )
    console.log(finalResult)
}
