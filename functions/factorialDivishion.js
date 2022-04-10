function factorialDevision(num1, num2){
    function factorial(num){
        let currFactorial=1
        for(let i= 1; i<=num; i++){
            currFactorial*=i
        }
        return currFactorial
    }
     return( factorial(num1)/ factorial(num2)).toFixed(2);
}console.log(factorialDevision(5,2))