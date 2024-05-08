let a = 1
let b = 0
let c = 1

if (a == b && b == c) {
    console.log('Empate')
} else if (a != b && b == c) {
    console.log('A')
} else if (a == c && c != b) {
    console.log('B')
} else {
    console.log('C')
}