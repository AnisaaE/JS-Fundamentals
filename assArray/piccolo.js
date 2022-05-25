function piccolo(input){
    let parking = new Set();
    for (let info of input) {
        let [command, car]= info.split(', ');
        if(command==='IN'){
            parking.add(car)
        }
        else {
            parking.delete(car) 
        }
    }
    if(parking.size==0){
        return "Parking Lot is Empty"
    }
   let  sorted = Array.from(parking).sort()
    for (let car of sorted ) {
        console.log(car)
    }

}piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'])