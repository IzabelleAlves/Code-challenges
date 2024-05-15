let itens = [8, 9, 6, 8, 1, 5, 8, 3, 2]
let ordenados = []

for (let i = itens.length - 1; i >= 0; i--){
    let ord = itens[i]
    ordenados.push(ord)
}
console.log(ordenados.join(', '))