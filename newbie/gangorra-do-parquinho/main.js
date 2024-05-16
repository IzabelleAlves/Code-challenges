let p1 = 35 
let c1 = 480 
let p2 = 35 
let c2 = 75
let ladoEsquerdo = p1 * c1
let ladoDireito= p2 * c2

if (ladoEsquerdo == ladoDireito){
    console.log(0)
} else if (ladoEsquerdo > ladoDireito){
    console.log(-1)
} else {
    console.log(1)
}