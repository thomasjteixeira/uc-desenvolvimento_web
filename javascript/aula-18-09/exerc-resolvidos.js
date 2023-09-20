const numeros = [1, 2, 3, 4, 5];
const numerosDobrados = numeros.map((numero) => numero * 2);
console.log(numerosDobrados); // Saída: [2, 4, 6, 8, 10]

//--------------------------------

const nomes = ["alice", "bob", "carlos"];
const nomesMaiusculos = nomes.map((nome) => nome.toUpperCase());
console.log(nomesMaiusculos); // Saída: ["ALICE", "BOB", "CARLOS"]

//--------------------------------
// Solicitar o raio do círculo ao usuário
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

//--------------------------------
function gerarNumeroAleatorio(min, max) {
  if (min > max) {
    console.error("O valor mínimo deve ser menor ou igual ao valor máximo.");
    return;
  }

  const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(
    "Número aleatório entre " + min + " e " + max + ": " + numeroAleatorio
  );
}

gerarNumeroAleatorio(1, 10);

// --------------------------------
const usuarios = [
  { nome: "Alice", idade: 25 },
  { nome: "Bob", idade: 30 },
  { nome: "Carlos", idade: 35 },
];

function encontrarUsuarioPorNome(nome) {
  // Usando o método find()
  const usuarioEncontrado = usuarios.find((usuario) => usuario.nome === nome);
  if (usuarioEncontrado) {
    return usuarioEncontrado;
  } else {
    return "Usuário não encontrado.";
  }
}
