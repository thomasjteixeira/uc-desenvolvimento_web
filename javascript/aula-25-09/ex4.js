// 4 - Crie um programa que receba a circuferência e calcule o raio de um círculo,
// utilizando a biblioteca Math do Javascript.​

const raio = 12.2;

// Verificar se o raio é um número válido
if (isNaN(raio) || raio <= 0) {
  console.log("Por favor, insira um raio válido maior que zero.");
} else {
  // Calcular a área do círculo usando a fórmula A = π * r^2
  const area = Math.PI * Math.pow(raio, 2);

  // Exibir o resultado no console com duas casas decimais
  console.log(
    `A área do círculo com raio ${raio} é aproximadamente: ${area.toFixed(2)}`
  );
}
