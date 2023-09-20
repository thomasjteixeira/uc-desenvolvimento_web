// 1 - Fazer um programa para calcular a soma dos números de um array

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function calcularSoma(total, numero) {
  return total + numero;
}

var soma = numeros.reduce(calcularSoma);

console.log("A soma dos números é: " + soma);

// ---------------
// var soma = numeros.reduce((acumulador, numero) => acumulador + numero);
