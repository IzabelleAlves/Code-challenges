// se for 0 n tem pokemon, se for != de 0, tem pokemon

let TamanhoMatriz = [5][10];
let tipoASerPego = 1;
let matriz = [
  [0, 1, 0, 0, 0],
  [3, 0, 0, 0, 0],
  [0, 2, 0, 0, 0],
  [1, 0, 0, 0, 2],
  [0, 3, 0, 0, 0],
  [0, 2, 0, 0, 0],
  [8, 0, 1, 0, 0],
  [3, 0, 8, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
];
let contadorPokemon = 0;

for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    if (matriz[i][j] == tipoASerPego) {
      contadorPokemon++;
    }
  }
}

console.log(`Ash pegou ${contadorPokemon} pokemon`);
