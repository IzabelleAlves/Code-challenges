let n = 4000
let hora = n / 3600
let min = (n % 3600) / 60
let seg = n % 60

console.log(`${hora.toFixed(0)}h, ${Math.floor(min)}m, ${seg}s`)