//Identificação do país com maior e menor população, e a diferença entre a maior e a menor população;

const paises = [
    { nome: "Brasil", populacao: 49900},
    { nome: "China", populacao: 38457},
    { nome: "Estados Unidos", populacao: 35123},
    { nome: "Índia", populacao: 49460}
];

let maiorPopulacao = paises[0].populacao
let nomeDoPais1 = paises[0].nome

for (let i = 0; i < paises.length; i++) {
    if (paises[i].populacao > maiorPopulacao) {
        maiorPopulacao = paises[i].populacao
        nomeDoPais1 = paises[i].nome
    }
} 

let menorPopulacao = paises[0].populacao
let nomeDoPais2 = paises[0].nome

for (let i = 0; i < paises.length; i++) {
    if (menorPopulacao > paises[i].populacao) {
        menorPopulacao = paises[i].populacao
        nomeDoPais2 = paises[i].nome
    } 
} 
const diferenca = maiorPopulacao - menorPopulacao
console.log('País com a maior população: ' + nomeDoPais1 +', com um total de', maiorPopulacao, 'habitantes.')
console.log('País com a menor população: ' + nomeDoPais2 +', com um total de', menorPopulacao, 'habitantes.')
console.log('Diferença entre a maior e a menor população: ' + diferenca)