let roadLength = 20
let distanceBtwToll = 70
let costPerKm = 9
let tollValue = 17

let totalToll = Math.round(roadLength / distanceBtwToll)
let total = (roadLength * costPerKm) + (totalToll * tollValue)
console.log(total)