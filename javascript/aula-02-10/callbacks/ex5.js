// 5 - Suponha que você tenha uma lista de objetos de usuário, ​cada um com um nome e uma idade.
// Crie uma função ​que recebe um nome como entrada e use o método find() ​para encontrar o primeiro usuário com o nome correspondente. ​
// A função deve retornar esse usuário ou uma mensagem de que ​o usuário não foi encontrado. ​

const usuarios = [
  { nome: "Alice", idade: 25 },
  { nome: "Bob", idade: 30 },
  { nome: "Carlos", idade: 35 },
];

function encontrarUsuarioPorNome(nome) {
  // Usando o método find()
  const usuarioEncontrado = usuarios.find((usuario) => usuario.nome === nome);
  if (usuarioEncontrado) {
    console.log(usuarioEncontrado.nome);
  } else {
    console.log("Usuário não encontrado.");
  }
}

encontrarUsuarioPorNome("Bob");
encontrarUsuarioPorNome("Thomas");
