let n = 5
let c = 100 
let ondas = [
    { z: 80, s: 60 },
    { z: 100, s: 30 },
    { z: 50, s: 50 },
    { z: 10, s: 30 },
    { z: 40, s: 45 }
];  

let totalClones = c
let totalzetsus = 0

let vilaProtegida = true

for (let i = 0; i < n; i++) {
    totalzetsus += ondas[i].z
    totalClones += ondas[i].s

    if (totalClones < totalzetsus) {
    vilaProtegida = false
    break
    }
}

vilaProtegida ? console.log('naruto defendeu a Vila') : console.log('Madara venceu')