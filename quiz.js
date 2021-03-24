const readlineSync = require('readline-sync')

let totalPoint = 0

const question1 = readlineSync.question(' Le C++ est un: (press "enter" to see the options)')

const rep1 = ['Langage', 'Compilateur'];
let index = readlineSync.keyInSelect(rep1, 'Choississez votre réponse');

if (rep1[index] === 'Langage') {
  console.log('Bonne réponse')
  totalPoint++
} else {
  console.log('Mauvaise réponse')
}

console.log('')

const question2 = readlineSync.question('TypeScript est une évolution de Javascript: (press "enter" to see the options)')
rep2 = ['Vrai', 'Faux'],
  index = readlineSync.keyInSelect(rep2, 'Choississez votre réponse');

if (rep2[index] === 'Vrai') {
  console.log('Bonne réponse')
  totalPoint++
} else {
  console.log('Mauvaise réponse')
}

console.log('')

const question3 = readlineSync.question('Lire les cours avant de faire les exercices est inutile: (press "enter" to see the options)')
rep3 = ['Vrai', 'Faux'],
  index = readlineSync.keyInSelect(rep3, 'Choississez votre réponse');

if (rep3[index] === 'Faux') {
  console.log('Bonne réponse')
  totalPoint++
} else {
  console.log('Mauvaise réponse')
}

console.log('')

const question4 = readlineSync.question('React.js a été developpé par Google: (press "enter" to see the options)')
rep4 = ['Vrai', 'Faux'],
  index = readlineSync.keyInSelect(rep4, 'Choississez votre réponse');

if (rep4[index] === 'Faux') {
  console.log('Bonne réponse')
  totalPoint++
} else {
  console.log('Mauvaise réponse')
}

console.log('')

const question5 = readlineSync.question('Ethereum est une blockchain publique: (press "enter" to see the options)')
rep5 = ['Vrai', 'Faux'],
  index = readlineSync.keyInSelect(rep5, 'Choississez votre réponse');

if (rep5[index] === 'Vrai') {
  console.log('Bonne réponse')
  totalPoint++
} else {
  console.log('Mauvaise réponse')
}

console.log('')

if (totalPoint < 3) {
  console.log(`Vous avez obtenu un score de ${totalPoint} ${totalPoint < 2 ? 'point' : 'points'} , hélas ce n'est pas assez, continuez de vous entraîner`)
}
else if (totalPoint === 3) {
  console.log(`Vous avez obtenu un score de ${totalPoint} points, c'est pas mal mais vous pouvez mieux faire`)
} else {
  console.log(`Vous avez obtenu un score de ${totalPoint} points. Bravo, vous avez passé le test haut la main`)
}