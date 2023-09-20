// 3 - Fazer um programa com uma função que receba como parâmetro um array de números e retorne um array contendo somente números pares.

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const pares = numeros.filter(ehPar);

function ehPar(numero) {
  return numero % 2 == 0;
}

console.log(pares);

// const pares = numeros.filter((numero) => {
//   return numero % 2 == 0;
// });