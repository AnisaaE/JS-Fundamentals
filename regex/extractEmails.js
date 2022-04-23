function extractEmails(input){
let regex=/(?<!\S)[a-z\d]+([\.\-_]*[a-z\d]+)*@[a-z]+([-]*[a-z]+)*(\.[a-z]+)+(^\-\.)*/g
let match = input.match(regex)
for (let single of match) {
    console.log(single)
}
}
extractEmails
('')