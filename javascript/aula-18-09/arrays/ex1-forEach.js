// 1 - Fazer um programa para calcular a soma dos números de um array 

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let soma = 0;

// pode usar o map também
numeros.forEach((numero) => {
  soma += numero;
});

console.log('A soma dos números é: ' + soma);