let numPartes = 2
let qtdPartes = [15, 12]
let multiplicar = 3
let resultado = []

for (let i = 0; i < qtdPartes.length; i++){
    let result = qtdPartes[i] * multiplicar
    resultado.push(result)
}
console.log(resultado)
