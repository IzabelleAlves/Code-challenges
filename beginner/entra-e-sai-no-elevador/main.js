let leituraSensor = 5
let capacidadeMax = 10
let saidaEEntrada = [
  {saem: 0, entram: 3},
  {saem: 0, entram: 5},
  {saem: 0, entram: 2},
  {saem: 3, entram: 4},
  {saem: 6, entram: 4},
]
let totalPessoas = 0
let capacidadeExcedida = false

for (let i = 0; i < leituraSensor; i++){
  totalPessoas -= saidaEEntrada[i].saem
  totalPessoas += saidaEEntrada[i].entram

  if (totalPessoas > capacidadeMax){
    capacidadeExcedida = true
    break;
  }
}
console.log(capacidadeExcedida ? 'S' : 'N')