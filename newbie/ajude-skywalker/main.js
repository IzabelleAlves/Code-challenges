let naves = [55, 1, 2, 3, 4]
let navesAmigas = 0

for (let i = 1; i < naves.length; i++){
    navesAmigas += naves[i]
} 
let navesInimigas = naves[0] - navesAmigas
console.log(navesInimigas)