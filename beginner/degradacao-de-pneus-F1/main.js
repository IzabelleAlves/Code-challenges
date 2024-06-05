let tireType = 'S'
let degradationRatedS = 4.8
let degradationRatedM = 3.7 
let degradationRatedH = 2.6

if (tireType == 'S') {
  console.log(`${Math.floor(80 / degradationRatedS)}`)
} else if (tireType == 'M') {
  console.log(`${Math.floor(80 / degradationRatedM)}`)
} else if (tireType == 'H') {
  console.log(`${Math.floor(80 / degradationRatedH)}`)
} else {
  console.log(`Invalid tire type`)
}
