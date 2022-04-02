function rounding(number,precision){
    number=Number(number)
    if (precision>15)precision=15
    number =number.toFixed(precision)
    console.log(parseFloat(number))

}
