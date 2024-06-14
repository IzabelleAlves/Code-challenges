let xpNecessario = 100
let missoesCumpridas = 4
let xpPorMissao = [10, 15, 10, 5]
let bonus = [1, 2, 3, 4]
let xpTotal = 0

for (let i = 0; i < xpPorMissao.length; i++){
  xpTotal += xpPorMissao[i] * bonus[i]
} 
if (xpTotal >= xpNecessario){
  console.log('Upou de Nivel!')
} else {
console.log('Não foi dessa vez!')
}