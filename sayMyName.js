
if (process.argv.length !== 3) {
  console.log('usage: node sayHello.js name')
  process.exit(1)
}

const name = process.argv[2]
console.log(`My name is ${name}`)
