// 3 - Fazer um programa com uma função que receba 
//como parâmetro um array de números 
// e retorne um array contendo somente números pares.

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function pares(array) {
  var pares = [];
  for (num in array) {
    if (array[num] % 2 == 0) {
      pares.push(array[num]);
    }
  }
  return pares;
}

console.log(pares(numeros));