
const readlineSync = require('readline-sync')


let prenom = readlineSync.question('Bonjour, quel est votre prénom ?')
let nom = readlineSync.question('Quel est votre nom ?')
let age = readlineSync.question('Quel est votre age ?')




if (age < 18) {
  console.log(`Désolé, ${prenom} ${nom}, vous êtes mineur, vous ne pouvez pas voter`)
} else {
  console.log(`${prenom} ${nom}, vous êtes majeur, vous pouvez voter`)
}
// Il manque les vérifs mais je n'ai pas réussi a le avec