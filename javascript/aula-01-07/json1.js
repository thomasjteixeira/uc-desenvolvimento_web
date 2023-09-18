//JSON - JavaScript Object Notation

// let pessoa = {
//   nome: "Thomas",
//   idade: 20,
// };
// //o acesso a propriedades pode ser feito com ponto
// console.log("Sou o " + pessoa.nome);
// //e com [] também
// console.log("Tenho " + pessoa["idade"] + " anos");



// let pessoaComEndereco = {
//   nome: "Maria",
//   idade: 21,
//   endereco: {
//     logradouro: "Rua B",
//     numero: 121,
//   },
// };
// console.log(
//   `Sou ${pessoaComEndereco.nome},
//  tenho ${pessoaComEndereco.idade} anos
//  e moro na rua ${pessoaComEndereco.endereco["logradouro"]}
//  número ${pessoaComEndereco["endereco"]["numero"]}`
// );


let concessionaria = {
  cnpj: "00011122210001-45",
  endereco: {
    logradouro: "Rua A",
    numero: 10,
    bairro: "Vila J",
  },
  veiculos: [
    {
      marca: "Ford",
      modelo: "Ecosport",
      anoDeFabricacao: 2018,
    },
    {
      marca: "Chevrolet",
      modelo: "Onix",
      anoDeFabricacao: 2020,
    },
    {
      marca: "Volkswagen",
      modelo: "Nivus",
      anoDeFabricacao: 2020,
    },
  ],
};

for (let veiculo of concessionaria.veiculos) {
  console.log(`Marca: ${veiculo.marca}`);
  console.log(`Modelo: ${veiculo.modelo}`);
  console.log(`Ano de Fabricação:
  ${veiculo.anoDeFabricacao}`);
}

console.log("")
console.log(concessionaria.endereco)