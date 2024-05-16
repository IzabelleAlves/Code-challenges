let numDias = 0

if (numDias >= 30){
    console.log('Imune! Siga para um local seguro')
}
else if (numDias >= 7){
    console.log('Acesso negado! Fique em observacao')
}
else if (numDias > 0) {
    console.log('Acesso negado! Isolamento urgente')
} else {
    console.log('Acesso permitido!')
}