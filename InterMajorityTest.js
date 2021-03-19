const readlineSync = require('readline-sync')

if (process.argv.length !== 3) {
  console.log('usage: node interMajorityTest.js age')
  process.exit(1)
}

if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number`)
  process.exit(1)
}

const MAJORITY = Number(process.argv[2])

const prenom = readlineSync.question('Quel est votre prénom ?')
const nom = readlineSync.question('Quel est votre nom ?')
const ageStr = readlineSync.question('Quel age avez vous ?')
const age = Number(ageStr)

if (isNaN(ageStr)) {
  console.log(`Sorry, ${ageStr} is not a number`)
  process.exit(1)
}

if (age <= MAJORITY) {
  console.log(`Désolé, ${prenom} ${nom}, vous êtes mineur, vous ne pouvez pas voter`)
} else {
  console.log(`${prenom} ${nom}, vous êtes majeur, vous pouvez voter`)
}