// 3 - Crie uma função em JavaScript que gere um número inteiro aleatório dentro de um intervalo personalizado
// e o exiba no console.
// A função deve aceitar dois argumentos: o valor mínimo (inclusive) e o valor máximo (inclusive) que definem o intervalo. ​

/**
 * Gera um número inteiro aleatório dentro de um intervalo personalizado.
 *
 * @param {number} min - Valor mínimo do intervalo (inclusive).
 * @param {number} max - Valor máximo do intervalo (inclusive).
 */

function gerarNumeroAleatorio(min, max) {
  if (min > max) {
    console.error("O valor mínimo deve ser menor ou igual ao valor máximo.");
    return;
  }

  // Inicialmente, geramos um número decimal aleatório entre 0 (inclusive) e 1 (exclusive).
  const numeroDecimalAleatorio = Math.random();

  // Agora, ajustamos essa faixa decimal para estar entre 0 e a diferença dos valores máximo e mínimo.
  // A adição de 1 garante que o valor máximo também possa ser alcançado após arredondarmos o número.
  const diferenca = max - min + 1;
  const ajusteNoIntervalo = numeroDecimalAleatorio * diferenca;

  // Finalmente, arredondamos o número para baixo para obter um valor inteiro e,
  // em seguida, ajustamos o intervalo para começar no valor mínimo.
  const numeroAleatorio = Math.floor(ajusteNoIntervalo) + min;

  // const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

  console.log(`Número aleatório entre ${min} e ${max}: ${numeroAleatorio}`);
}

gerarNumeroAleatorio(1, 100);
