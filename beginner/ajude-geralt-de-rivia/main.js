let pessoas = [1, 3, 4, 4, 6, 9]
let contador = 0

for (let i = 0; i < pessoas.length; i++){
    if (pessoas[i] == pessoas[i -1]){
        console.log(pessoas[i])
        contador++
    }
} if (contador == 0){
    console.log(-1)
}