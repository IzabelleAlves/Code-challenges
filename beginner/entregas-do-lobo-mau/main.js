let road = [
  {roadSize: 60, tollDistance: 20},
  {valueKm: 1, tollValue: 10}, 
]

let v = road[0].roadSize * road[1].valueKm
let tollNumbers = Math.floor(road[0].roadSize / road[0].tollDistance)
let p = tollNumbers * road[1].tollValue
let totalPayable = v + p

console.log(totalPayable)