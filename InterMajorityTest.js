const readlineSync = require('readline-sync')
const prenom = readlineSync.question('Quel est votre prénom ?')
const nom = readlineSync.question('Quel est votre nom ?')
const ageStr = readlineSync.question(`Quel est l'age de votre majorité?`)
const age = Number(ageStr)

const america = 21
const france = 18


if (age === america) {
  console.log(`${prenom} ${nom}, vous êtes majeur, vous pouvez voter aux Etats-Unis`)
} else if (age < america) {
  console.log(`Désolé, ${prenom} ${nom}, vous êtes mineur, vous ne pouvez pas voter aux Etats-Unis`)
}

if (age === france) {
  console.log(`${prenom} ${nom}, vous êtes majeur, vous pouvez voter aux France`)
} else if (age < 18) {
  console.log(`${prenom} ${nom}, vous êtes majeur, vous pouvez voter aux en France`)
}