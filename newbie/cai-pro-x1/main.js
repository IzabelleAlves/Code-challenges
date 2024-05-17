let l1 = 16 
let p1 = 0 
let l2 = 0 
let p2 = 8
let l3 = 4
let p3 = 12

let somaL = l1 + l2 + l3
let somaP = p1 + p2 + p3

if (somaL > somaP) {
    console.log('Lucas')
} 
else if (somaP > somaL) {
    console.log('Pedro')
} else {
    console.log('Empate')
}