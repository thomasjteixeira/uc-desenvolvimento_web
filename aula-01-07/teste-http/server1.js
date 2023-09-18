// 1. Importando módulos necessários
// O módulo 'http' permite que o Node.js transfira dados via HTTP.
const http = require("http");
// Express é um framework minimalista e flexível para Node.js, fornecendo um conjunto robusto de recursos para construir aplicações web.
const express = require("express");

// 2. Iniciando o Express
const app = express();

// 3. Definindo a porta onde a aplicação vai rodar
const PORT = 3000;

// 4. Configurando a aplicação para usar a porta definida anteriormente.
// No entanto, essa etapa é opcional já que estamos diretamente passando a porta ao server.listen mais abaixo.
app.set("port", PORT);

// 5. Definindo uma rota
// Quando alguém acessar o caminho "/teste" pelo método GET, esta função será executada.
app.get("/teste", (req, res, next) => {
  // Enviando uma resposta simples ao cliente
  res.send("Olá, Mundo Node.js!");
});

// 6. Criando o servidor HTTP que vai escutar as requisições
const server = http.createServer(app);

// 7. Iniciando o servidor na porta especificada
// Assim que a aplicação estiver rodando, ela estará escutando requisições feitas na porta 3000.
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
