let sapo = 3
let pedra = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let pulo = [2, 5, 4]

for (let i = 0; i < sapo; i++) {
    for (let j = 0; j < pedra.length; j += pulo[i]) {
        pedra[j] = 1
    }
}
console.log(pedra.join(' '))