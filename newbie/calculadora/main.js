function calc(operador, a, b) {
    let resultado = 0
    switch (operador)
    {
    case '+': 
        resultado = (a + b)
        break;
    case '-':
        resultado = (a - b)
        break;
    case '/':
        resultado = (a / b).toFixed(1)
        break;
    case '*':
        resultado = (a * b)
        break;
    default:
        console.log('Operador inválido')
        return;
    }
    console.log(resultado)
}