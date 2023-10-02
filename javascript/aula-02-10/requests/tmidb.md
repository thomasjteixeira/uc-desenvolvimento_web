# Requisições para API utilizando JavaScript e TMDb API

---

## Parte 1: Introdução e Configuração da API

A integração de uma aplicação com APIs externas é um recurso fundamental na era digital. Permite que os desenvolvedores aproveitem dados e recursos disponibilizados por terceiros para enriquecer suas próprias aplicações. Hoje, exploraremos o uso da API "The Movie Database (TMDb)", que oferece uma vasta gama de dados sobre filmes, séries, e mais.

A URL base da API TMDb é crucial para fazer as requisições, e a autenticação é feita através de uma chave API. Primeiro, registre-se na plataforma TMDb e obtenha sua chave API através do seguinte link:

- [The Movie Database API Documentation](https://developer.themoviedb.org/)

---

## Parte 2: Realizando Requisições com JavaScript

Vamos utilizar JavaScript e a Fetch API para fazer as requisições, permitindo-nos interagir com os recursos da TMDb de forma assíncrona. A Fetch API retorna `Promises` e é frequentemente utilizada com `async/await` para gerenciar operações assíncronas de uma maneira mais limpa e legível.

Abaixo está um exemplo básico de como utilizar a Fetch API para buscar dados da TMDb:

```javascript
async function getMovies(title) {
  const chaveApi = 'SUA_CHAVE_API';  
  const urlBase = 'https://api.themoviedb.org/3';
  const uri = encodeURI(`${urlBase}/search/movie?api_key=${chaveApi}&query=${title}`);
  
  try {
    const resposta = await fetch(uri);
    const dados = await resposta.json();

    if (resposta.ok) {
      console.log('Filmes encontrados:', dados.results);
    } else {
      console.log('Erro na requisição:', dados.status_message);
    }
  } catch (erro) {
    console.log('Erro ao tentar buscar os filmes:', erro.message);
  }
}

```

```javascript
async function getMovies(title) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer [YOUR_BEARER_TOKEN]",
    },
  };

  fetch(
    `https://api.themoviedb.org/3/search/movie?query=${title}&include_adult=false&language=en&page=1`,
    options
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}

// Usando a função
getMovies("The Matrix Reloaded");


```
**Na documentação da API tem outros exemplos de requisições para várias linguagens**

# Atividades

### 0 - Configuração e Exploração:
1. Cadastre-se na plataforma TMDb e obtenha sua chave API.
2. Explore a documentação da API para familiarizar-se com os endpoints disponíveis.

### 1 - Listagem de Filmes:
- Crie uma função que faça uma requisição à API para buscar informações de filmes por titulo e exiba no console. A descrição deve está português.

### 2 - Gêneros de Filmes:
- Crie uma função que faça uma requisição para listar todos os gêneros de filmes disponíveis e exiba-os no console. A descrição deve está português.

### 3 - Imagem do Filme:
- Pesquise na documentação da API como visualizar a imagem da capa do filme.

### 4 - Busca por Gênero:
- Crie uma função que faça uma requisição à API para listar filmes do gênero "Ficção Científica" e exiba no console. A descrição deve está português.

### 5 - Listagem de Filmes:
- Crie uma função que faça uma requisição à API para buscar informações de filmes por titulo e **exiba apenas o titulo e descrição**. A descrição deve está preferencialmente em português.


### Séries:
- Crie uma função que realize uma requisição para buscar séries por titulo. 
Exiba as séries no console. A descrição deve está português.

---

**Importante:** Lembre-se de nunca expor sua chave API em código de produção no lado do cliente. No contexto real de desenvolvimento, você criaria um back-end para intermediar as requisições e manter seguros os dados sensíveis.

---

# Recursos Adicionais:
- [Usando Fetch - MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch)
