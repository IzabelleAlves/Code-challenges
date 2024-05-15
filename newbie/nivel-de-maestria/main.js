let pontos = [2, 10, 2, 20, 3, 5]

function soma(a, b){
    return a + b
}

let total = pontos.reduce(soma)

if (total >= 250){
    console.log('S+')
}
else if (total >= 200){
    console.log('S')
}
else if (total >= 180){
    console.log('S-')
}
else if (total >= 150){
    console.log('A+')
}
else if (total >= 100){
    console.log('A')
}
else if (total >= 80){
    console.log('A-')
}
else if (total >= 60){
    console.log('B+')
}
else if (total >= 40){
    console.log('B')
} 
else {
    console.log('B-')
}