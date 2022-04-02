function triangle(num){
    let line= ''
    for(let i=1; i<=num;i++){
        for(z=1; z<=i; z++){
            line+= i+' '       
        }
        console.log(line)
        line=''
    }
}triangle(5)