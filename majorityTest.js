const readlineSync = require('readline-sync')


const prenom = readlineSync.question('Quel est votre prénom ?')
const nom = readlineSync.question('Quel est votre nom ?')
const ageStr = readlineSync.question('Quel age avez vous ?')
const age = Number(ageStr)

if (isNaN(ageStr)) {
  console.log(`Sorry, ${ageStr} is not a number`)
  process.exit(1)
}



if (age < 18) {
  console.log(`Désolé, ${prenom} ${nom}, vous êtes mineur, vous ne pouvez pas voter`)
} else {
  console.log(`${prenom} ${nom}, vous êtes majeur, vous pouvez voter`)
}