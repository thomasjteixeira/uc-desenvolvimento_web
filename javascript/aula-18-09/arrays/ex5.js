// 5 - Fazer um programa com uma função para
// inverter um array.

var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function inverter(array) {
  var invertido = [];
  for (num in array) {
    invertido.unshift(array[num]);
  }
  return invertido;
}


function inverter2(array) {
  var invertido = [];
  for (var i = array.length - 1; i >= 0; i--) {
    invertido.push(array[i]);
  }
  return invertido;
}

console.log(inverter(numeros));
console.log("--------------------");
console.log(inverter2(numeros));

