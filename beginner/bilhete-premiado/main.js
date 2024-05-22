let bilhetes = [12, 14, 1, 101, 102]
let bilhetePremiado = 101
let cont = 0

for (let i = 0; i < bilhetes.length; i++){
    if (bilhetes[i] == bilhetePremiado){
        console.log(`Número da poltrona do vencedor: ${i}`)
        cont++
        break;
    } 
}
if (cont == 0){
    console.log(`Não há vencedor`)
}