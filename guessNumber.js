const readlineSync = require('readline-sync')
const chalk = require('chalk')

if (readlineSync.keyInYN('The goal is to find a secret number. Do you want to play ?')) {
  console.log(chalk.blue('Installing the game...'))
} else {
  console.log(chalk.red('Too bad, see you later'))
  process.exit(1)
}

const secretNum = readlineSync.question('Please user1, enter a secret number: ', { hideEchoBack: true })

while (true) {

  const userNum = readlineSync.question('User2, choose a number: ')

  if (userNum < secretNum) {
    console.log(chalk.red('Nombre trop petit'))
  } else if (userNum > secretNum) {
    console.log(chalk.red('Nombre trop grand'))
  } else {
    console.log(chalk.green('Bravo'))
    process.exit(1)
  }
}






