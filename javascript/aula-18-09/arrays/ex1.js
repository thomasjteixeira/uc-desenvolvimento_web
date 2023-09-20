// 1 - Fazer um programa para calcular 
// a soma dos números de um array 

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var soma = 0;

for (num in numeros) {
    somar(numeros[num]);
}

function somar(numero) {
    soma += numero;
}
console.log(soma);
