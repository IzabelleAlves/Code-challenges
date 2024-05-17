let pA = 0
let pB = 0

if (pA == 1 && pB == 1){
    console.log('Resultado para o Prisioneiro A: sentença leve (1 ano). Resultado para o Prisioneiro B: sentença leve (1 ano)')
} else if (pA == 0 && pB == 1){
    console.log('Resultado para o Prisioneiro A: livre. Resultado para o Prisioneiro B: sentença pesada (10 anos)')
} else if (pA == 1 && pB == 0){
    console.log('Resultado para o Prisioneiro A: sentença pesada (10 anos). Resultado para o Prisioneiro B: livre')
} else {
    console.log('Resultado para o Prisioneiro A: sentença moderada (5 anos). Resultado para o Prisioneiro B: sentença moderada (5 anos)')
}