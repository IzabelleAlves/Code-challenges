let X = 115
let Y = 25

if (X >= 0 && X <= 100 && Y >= 0 && Y <= 100) {
    if (X < 71 && Y < 71) {
        console.log("Coordenada válida e o navio está perto")
    } else {
        console.log("Coordenada válida e o navio está longe")
    }
} else {
    console.log("Coordenada inválida")
}