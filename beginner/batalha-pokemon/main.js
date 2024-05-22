let oponente = 150
let meuPokemon = 30
let cont = 0

while (oponente > 0 && meuPokemon != 0){
    oponente -= meuPokemon
    meuPokemon -= 1
    cont++
} 

if (oponente > 0){
    console.log('F')
} else {
    console.log(cont)
}