
if (process.argv.length !== 3) {
  console.log('usage: node sayHello.js name')
  process.exit(1)
}


console.log(`My name is ${process.argv[2]}`)
