function heroRecruitment (input){
    let list ={}
    for (let line of input) {
        let token = line.split(' ');
        let command= token[0]
         let name = token[1]
        if(command=='End')break
        if(command=='Enroll'){
            if (list.hasOwnProperty(name)){
                console.log(`${name} is already enrolled.`)
            }
            else {
                list[name]={}
            }
        }

        else if(command=='Learn'){
            let magic= token[2]
            if(list.hasOwnProperty(name)){
               if(list[name].hasOwnProperty(magic)){
                   console.log(`${name} has already learnt ${magic}.`)
               }
               else list[name][magic]=magic
            }
           else console.log(`${name} doesn't exist.`)
        }

        else  if(command== 'Unlearn'){
            let magic = token[2]
            if(list.hasOwnProperty(name)){
                if(list[name].hasOwnProperty(magic)){
                    delete list[name][magic]
                }
               else console.log(`${name} doesn't know ${magic}.`)
            }
            else console.log(`${name} doesn't exist.`)
        }
        
    }
     console.log(`Heroes:`)
    for (let key in list) {
        let magic = Object.keys(list[key]).join(', ')
        console.log(`== ${key}: ${magic}`)
    }
}
