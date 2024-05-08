let coordEntrega = [5, 25]
let coordAtual = [5, 25]
let contador = 0

for(let i = 0; i<2; i++){
    if (coordEntrega[i] == coordAtual[i]){
        contador++
    } else {
        console.log('Não soltar pacote')
    }
} 
if (contador == 2){
    console.log('Soltar pacote')
}