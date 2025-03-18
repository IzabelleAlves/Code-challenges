function calcularContaAgua(metroCubico) {
  let valor = 7;

  if (metroCubico >= 10) {
    let consumo = metroCubico - 10;

    if (consumo > 90) {
      valor += 90 * 2;
      valor += (consumo - 90) * 5;
    } else if (consumo > 20) {
      valor += 20 * 1;
      valor += (consumo - 20) * 2;
    } else {
      valor += consumo * 1;
    }
  }

  console.log(valor);
}

calcularContaAgua(8); // Saída: 7
calcularContaAgua(14); // Saída: 11
calcularContaAgua(42); // Saída: 51
calcularContaAgua(120);
