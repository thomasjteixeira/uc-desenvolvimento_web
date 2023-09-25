//2 - Crie um programa que receba um array de nomes em letras minúsculas e use a função map() para criar um novo array 
// onde cada nome seja convertido para letras maiúsculas.​

const nomes = ["alice", "bob", "carlos"];
const nomesMaiusculos = nomes.map((nome) => nome.toUpperCase());
console.log(nomesMaiusculos); // Saída: ["ALICE", "BOB", "CARLOS"]