
const pyramid = (string, nbElem, reverse) => {
  for (let i = 1; i <= nbElem; i++) {
    if (!reverse) {
      console.log(string.repeat(i))
    }
    else if (process.argv[4] === '-r') {
      for (let i = nbElem; i >= 1; i--) {
        console.log(string.repeat(i))
      }
    }
  }
}

if (process.argv.length < 3 || process.argv.length > 5) {
  console.log('error')
  process.exit(1)
}


if (!isNaN(process.argv[2])) {
  console.log(`Error: ${process.argv[2]} is not a string.`)
  process.exit(1)
}

if (isNaN(process.argv[3])) {
  console.log(`Error: ${process.argv[3]} is not a number.`)
  process.exit(1)
}
if (!isNaN(process.argv[4])) {
  console.log(`Error: ${process.argv[4]} is not a string.`)
  process.exit(1)
}


string = process.argv[2]
nbStars = Number(process.argv[3])
r = process.argv[4]
pyramid(string, nbStars, r)
