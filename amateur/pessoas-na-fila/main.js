let numPessoas = 8;
let id = [5, 100, 9, 81, 70, 33, 2, 1000];
let idSairamFila = [9, 33, 5];

let novaFila = id.filter((pessoa) => !idSairamFila.includes(pessoa));

console.log(novaFila);
