let currentWage = 2000.01
let readjustment = 0

if (currentWage <= 400){
  readjustment = currentWage * 0.15
  console.log(`Novo salario: ${(currentWage + readjustment).toFixed(2)}; Reajuste ganho: ${readjustment.toFixed(2)}; Em percentual: 15%`)
} 
else if (currentWage <= 800) {
  readjustment = currentWage * 0.12
  console.log(`Novo salario: ${(currentWage + readjustment).toFixed(2)}; Reajuste ganho: ${readjustment.toFixed(2)}; Em percentual: 12%`)
}
else if (currentWage <= 1200){
  readjustment = currentWage * 0.10
  console.log(`Novo salario: ${(currentWage + readjustment).toFixed(2)}; Reajuste ganho: ${readjustment.toFixed(2)}; Em percentual: 10%`)
}
else if (currentWage <= 2000){
  readjustment = currentWage * 0.07
  console.log(`Novo salario: ${(currentWage + readjustment).toFixed(2)}; Reajuste ganho: ${readjustment.toFixed(2)}; Em percentual: 7%`)
}
else {
  readjustment = currentWage * 0.04
  console.log(`Novo salario: ${(currentWage + readjustment).toFixed(2)}; Reajuste ganho: ${readjustment.toFixed(2)}; Em percentual: 4%`)
}