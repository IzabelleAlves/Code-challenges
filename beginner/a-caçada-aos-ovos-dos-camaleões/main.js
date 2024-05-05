let q1 = 6
let q2 = 6
let q3 = 6

let e1 = 2
let e2 = 2
let e3 = 2

let ovosColetados = q1 + q2 + q3
let ovosPerdidos = ((e1 * 2) + e1) + ((e2 * 2) + e2) + ((e3 * 2) + e3)
let totalDeOvos = ovosColetados - ovosPerdidos
console.log(totalDeOvos)