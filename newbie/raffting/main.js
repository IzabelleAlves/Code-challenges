let pessoas = [10, 15, 8, 7]
let profissionais = 8

function soma (a, b) {
    return a + b
}
let totalTuristas = pessoas.reduce(soma) - profissionais

console.log(totalTuristas)