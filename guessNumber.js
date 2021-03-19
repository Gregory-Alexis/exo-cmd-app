
const chalk = require('chalk')
const readlineSync = require('readline-sync')

if (process.argv.length !== 3) {
  console.log('usage: node guessNumber.js num')
  process.exit(1)
}

if (isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a number`)
  process.exit(1)
}

const numKey = Number(process.argv[2])




let question1 = readlineSync.keyInYN('Bienvenue user1, vous devez trouver le nombre exact, voules vous jouer ?')

while (true) {

  let question2 = readlineSync.question('Quel numéro chosissez vous ?')

  const userNum = Number(question2)

  if (isNaN(question2)) {
    console.log(`Sorry, ${question2} is not a number`)
    process.exit(1)
  }



  if (userNum > numKey) {
    console.log(chalk.red('Nombre trop grand'))
  } else if (userNum < numKey) {
    console.log(chalk.red('Nombre trop petit'))
  } else {
    console.log(chalk.green('Bravo!'))
    break;
  }
}






