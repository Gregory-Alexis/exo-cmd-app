if (process.argv.length !== 4) {
  console.log('2 parameters needed')
  process.exit(1)
}

if (isNaN(process.argv[3])) {
  console.log(`Error: ${process.argv[3]} is not a number.`)
}

const pyramid = (string, nbElem) => {
  for (let i = 1; i <= nbElem; i++) {
    console.log(string.repeat(i))

  }
}

if (!isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a string.`)
  process.exit(1)
}

nbStars = Number(process.argv[3])
string = process.argv[2]
pyramid(string, nbStars)
