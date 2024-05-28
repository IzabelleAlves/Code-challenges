let pontuacao = [4, 5, 6] 
let maior = 0

for (let i = 0; i < pontuacao.length; i++){
    if (pontuacao[i] > maior){
        maior = pontuacao[i]
    }
}

let segundoMaior = 0
for (let i = 0; i < pontuacao.length; i++){
    if (pontuacao[i] > segundoMaior && pontuacao[i] < maior)
        segundoMaior = pontuacao[i]
} 
console.log(segundoMaior)