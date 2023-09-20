let frutas = ["Maçã", "Banana"];

frutas.push("Laranja");
console.log(frutas);

//remove o último elemento
frutas.pop();
console.log(frutas);

// remove o primeiro elemento
frutas.shift();
console.log(frutas);

// adiciona um elemento no início
frutas.unshift("Morango");
console.log(frutas);

// retorna o índice de um elemento
frutas.splice(0,1)