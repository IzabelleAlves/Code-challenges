let totalBoxes = 10
let numbersBoxes = [12, 1, 4, 7, 9, 8, 1, 2, 6, 3, 90]
let emeraldNumber = 6
let cont = 0

for (let i = 0; i < numbersBoxes.length; i ++){
  if (numbersBoxes[i] == emeraldNumber){
    console.log(emeraldNumber)
    cont++
    break;
  }
}
  if (cont == 0){
    console.log(-1)
  }