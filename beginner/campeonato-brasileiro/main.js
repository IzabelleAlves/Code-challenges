let cv = 10
let ce = 5
let cs = 18
let fv = 11 
let fe = 2
let fs = 18

let totalC = cv * 3 + ce
let totalF = fv * 3 + fe

if (totalC > totalF){
    console.log('C')
} else if (totalC < totalF){
    console.log('F')
} else{
    if (cs > fs){
        console.log('C')
    } else if (cs < fs){
        console.log('F')
    } else {
        console.log('=')
    }
}