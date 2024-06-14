let datas = [230, 8, 8, 7, 7, 9]
let candidateRegistration = datas[0]

function sum(a, b){
  return a + b
}

let score = (datas.reduce(sum) - candidateRegistration) / 5

console.log(candidateRegistration, score.toFixed(1))