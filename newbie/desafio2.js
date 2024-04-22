//Contagem de Números Pares e Ímpares;

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let contPar = 0
let contImpar = 0

for (let i = 0; i < lista.length; i++) {
    if (lista[i] % 2 == 0) {
        contPar++
    } else {
        contImpar++
    }
} 
console.log('Total números pares:', contPar)
console.log('Total números ímpares:', contImpar)