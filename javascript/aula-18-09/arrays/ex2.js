// 2 - Fazer um programa para calcular 
//a média de todos os números de um array.

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var soma = 0;

for (num in numeros) {
    soma += numeros[num];
}
resultado = soma / numeros.length;
console.log(resultado);
