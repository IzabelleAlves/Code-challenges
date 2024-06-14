let xpRequired = 100
let missionsFulfilled = 4
let xpByMission = [10, 15, 10, 5]
let bonus = [1, 2, 3, 4]
let xpTotal = 0

for (let i = 0; i < xpByMission.length; i++){
  xpTotal += xpByMission[i] * bonus[i]
} 
if (xpTotal >= xpRequired){
  console.log('Upou de Nivel!')
} else {
console.log('Não foi dessa vez!')
}