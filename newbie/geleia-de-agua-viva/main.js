let hamburguer = [10, 11, 11, 11, 10, 10]
let contadorSemGeleia = 0
let contadorGeleia = 0

for (let i = 0; i < hamburguer.length; i++){
    if (hamburguer[i] == 10){
        contadorSemGeleia++
    } else {
        contadorGeleia++
    }
}
if (contadorSemGeleia == contadorGeleia){
    console.log('Venda empatada')
} else if (contadorSemGeleia > contadorGeleia){
    console.log('Tradicional')
} else {
    console.log('Geleia')
}