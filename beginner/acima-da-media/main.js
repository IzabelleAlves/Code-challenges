let alunos = 12
let notas = [45, 0, 33, 70, 12, 55, 70, 70, 90, 55, 70, 100]

function soma(a, b){
    return a + b
}
let media = notas.reduce(soma) / alunos
let contador = 0

for (let i = 0; i < notas.length; i++){
    if (notas[i] > media){
        contador++
    }
}
console.log(contador)