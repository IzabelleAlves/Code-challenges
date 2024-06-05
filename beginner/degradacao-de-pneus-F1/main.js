let tireType = 'S'
let degradationRateS = 4.8
let degradationRateM = 3.7 
let degradationRateH = 2.6

if (tireType == 'S') {
  console.log(`${Math.floor(80 / degradationRateS)}`)
} else if (tireType == 'M') {
  console.log(`${Math.floor(80 / degradationRateM)}`)
} else if (tireType == 'H') {
  console.log(`${Math.floor(80 / degradationRateH)}`)
} else {
  console.log(`Invalid tire type`)
}
