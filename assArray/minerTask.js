function minerTask(input){
    let list={}
    for(let i=0; i<input.length; i+=2){
        let resource = input[i];
        let quantity = Number (input[i+1]);
        if(!list.hasOwnProperty(resource)){
            list[resource]=0;
        }
        list[resource]+=quantity
    }
    let array = Object.entries(list)
    for (let element of array) {
        console.log(`${element[0]} -> ${element[1]}`)
        
    }
}minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'])