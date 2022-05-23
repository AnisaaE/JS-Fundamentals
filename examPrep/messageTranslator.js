function messegeTranslator(input){
    let countOfMessege = Number(input.shift())
    let regex = /!(?<command>[A-Z][a-z]{3,})!:\[(?<name>[a-zA-Z]{8,})\]/
    for (let i =0; i<countOfMessege; i++){
        let currLine = regex.exec(input[i])
        if(currLine==null){
            console.log("The message is invalid")
        }
        else {
            let text = currLine.groups.name 
            let commands= currLine.groups.command
            let transaltion = []
            for (let char  of text) {
                transaltion.push(char.charCodeAt())
            }
            console.log(`${commands}: ${transaltion.join(' ')}`)
        }

    }

}messegeTranslator(["2",
"!Send!:[IvanisHere]",
"*Time@:[Itis5amAlready"])
