let widthContainer = 1
let lengthContainer = 2
let heightContainer = 5

let widthShip = 9
let lengthShip = 6
let maxHeightShip = 11

let fullWidthContainers = Math.round(widthShip / widthContainer)
let fullLengthContainers = Math.round(lengthShip / lengthContainer)
let fullHeightShip = Math.round(maxHeightShip / heightContainer)

if (widthContainer > widthShip || lengthContainer > lengthShip || heightContainer > maxHeightShip) {
  console.log('0')
} else {
  console.log(fullWidthContainers * fullLengthContainers * fullHeightShip)
}