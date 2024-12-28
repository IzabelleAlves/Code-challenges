// let tabuleiro =  [0, 1, 1, 1, 0]
let tabuleiro =  [0, 1, 1, 0, 1]
let tabuleiroAtualizado = []
let contadorMinas = 0

for (let i = 0; i < tabuleiro.length; i++){
  if (tabuleiro[i] == 1){
    contadorMinas++
    if (tabuleiro[i + 1] == 1){
      contadorMinas++
    }
    if (tabuleiro[i - 1] == 1){
      contadorMinas++
    }
  }

  else if (tabuleiro[i] == 0){
    if (tabuleiro[i + 1] == 1){
      contadorMinas++
    }
    if (tabuleiro[i - 1] == 1){
      contadorMinas++
    }
  }

  tabuleiroAtualizado.push(contadorMinas)
  contadorMinas = 0
}

console.log(tabuleiroAtualizado)