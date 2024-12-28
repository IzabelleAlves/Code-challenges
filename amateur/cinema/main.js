let fileira = 1
let cadeiras = 4
let assentos =[0, 1, 0, 0]
// let assentos = [
//   [0, 1, 0],
//   [1, 1, 1],
//   [0, 0, 1],
//   [1, 1, 1]
// ];
// let assentos = [
//   [0, 1, 1, 1, 0, 1],
//   [1, 1, 0, 0, 1, 1]
// ]
let isMatriz = Array.isArray(assentos) && assentos.every(Array.isArray)
// console.log(isMatriz) 

if (isMatriz){
  for (let i = 0; i < assentos.length; i++) {
    for (let j = 0; j <assentos[i].length; j++){
      if (assentos[i][j] == 0 && assentos[i][j + 1] == 0){
          console.log(`Fileira: ${i + 1} Assentos: ${j +1 } e ${j + 2}`)
          break;
      }
    }
  }
} 
else {
  assentos.forEach((assento, index) => {
    if (assento == 0 && assentos[index + 1] == 0){
      console.log(`Fileira: 1 Assentos: ${index +1 } e ${index + 2}`)
    }
  });
}
