// let matriz = [[100, 110, 0, 100]];

let matriz = [
  [81, 28, 240, 10],
  [40, 10, 100, 240],
  [20, 180, 110, 35],
];

let maiorSomaColuna = 0;
let maiorSomaLinha = 0;
let somaColuna = 0;
let somaLinha = 0;

for (let coluna = 0; coluna < matriz[0].length; coluna++) {
  somaColuna = 0;

  for (let linha = 0; linha < matriz.length; linha++) {
    somaLinha = matriz[linha].reduce((a, b) => a + b);
    somaColuna += matriz[linha][coluna];

    if (somaColuna > maiorSomaColuna) {
      maiorSomaColuna = somaColuna;
    }
    if (somaLinha > maiorSomaLinha) {
      maiorSomaLinha = somaLinha;
    }
  }
}

maiorSomaColuna > maiorSomaLinha
  ? console.log(maiorSomaColuna)
  : console.log(maiorSomaLinha);
