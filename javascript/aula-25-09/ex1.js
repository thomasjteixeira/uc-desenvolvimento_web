//1 - Crie um programa que receba um array de números e use a função map() para criar um novo array 
// onde cada número é o dobro do número correspondente no array original.​

const numeros = [1, 2, 3, 4, 5];
const numerosDobrados = numeros.map((numero) => numero * 2);
console.log(numerosDobrados); // Saída: [2, 4, 6, 8, 10]