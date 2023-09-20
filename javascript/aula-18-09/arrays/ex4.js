// 4 - Fazer um programa para localizar 
// o maior valor dentro de um array de números.

var numeros = [10, 21, 3, 14, 25, 66, 171, 81, 39];

function maior(array) {
  var maior = 0;
  for (num in array) {
    if (array[num] > maior) {
      maior = array[num];
    }
  }
  return maior;
}

console.log(maior(numeros));
