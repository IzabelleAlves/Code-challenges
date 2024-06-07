let readingSensor = 5
let capacityMax = 10
let exitAndEntrance = [
  {leave: 0, enter: 3},
  {leave: 0, enter: 5},
  {leave: 0, enter: 2},
  {leave: 3, enter: 4},
  {leave: 6, enter: 4},
]
let totalPeople = 0
let capacityExceeded = false

for (let i = 0; i < readingSensor; i++){
  totalPeople -= exitAndEntrance[i].leave
  totalPeople += exitAndEntrance[i].enter

  if (totalPeople > capacityMax){
    capacityExceeded = true
    break;
  }
}
console.log(capacityExceeded ? 'S' : 'N')