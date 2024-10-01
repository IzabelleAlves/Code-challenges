// // let nTamanhoMatriz = 8;
// // let mNumTeleporte = 3;
// let coordenadasTeletransporte = [
//   [7, 2],
//   [3, 5],
//   [3, 1],
// ];
// let contadorNaveAtacadass = 0;

// let matriz = [
//   [0, 0, 0, 0, 0, 0, 0, 1],
//   [1, 0, 0, 1, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 1, 0, 0, 0, 1],
//   [0, 0, 0, 1, 0, 0, 0, 1],
//   [0, 0, 1, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
// ];

// for (let i = 0; i < coordenadasTeletransporte.length; i++) {
//   let linha = coordenadasTeletransporte[i][0];
//   let coluna = coordenadasTeletransporte[i][1];

//   if (linha > 0 && matriz[linha][coluna] == 0) {
//     for (let j = linha - 1; j >= 0; j--) {
//       if (matriz[j][coluna] == 1) {
//         contadorNaveAtacadass++;
//         break;
//       }
//     }
//   }
// }

// console.log(contadorNaveAtacadass);

let matriz = [
  [0, 1, 0, 1],
  [0, 1, 1, 0],
  [1, 0, 0, 0],
  [0, 0, 0, 1],
];

let coordenadas = [
  [3, 2],
  [3, 1],
];

let contadorNavesDestruidas = 0;

for (let i = 0; i < coordenadas.length; i++) {
  let linha = coordenadas[i][0];
  let coluna = coordenadas[i][1];

  if (linha > 0 && matriz[linha][coluna] == 0) {
    for (let j = linha - 1; j >= 0; j--) {
      if (matriz[j][coluna] == 1) {
        contadorNavesDestruidas++;
        break;
      }
    }
  }
}

console.log(contadorNavesDestruidas);
