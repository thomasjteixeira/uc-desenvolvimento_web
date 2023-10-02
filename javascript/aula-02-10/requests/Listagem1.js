// Função assíncrona para buscar filmes baseados no título providenciado como argumento.
async function getMovies(title) {
  // Chave de autenticação para a API The Movie Database (TMDb). 
  // Nota: Substitua pelo seu próprio valor de chave API.
  const chaveApi = '[SUA CHAVE API]'; 
  
  // URL base para a API do TMDb, que será utilizada para construir a URI completa da requisição.
  const urlBase = 'https://api.themoviedb.org/3'; 
  
  // Construção da URI completa, utilizando encodeURI para garantir que qualquer caractere especial no título do filme seja tratado corretamente.
  const uri = encodeURI(`${urlBase}/search/movie?api_key=${chaveApi}&query=${title}`);
  
  // Bloco try...catch para lidar com possíveis erros durante a requisição à API.
  try {
    // Utilizando fetch para realizar uma requisição HTTP GET à API do TMDb, e await para esperar pela resposta.
    const resposta = await fetch(uri); 
    
    // Decodificando a resposta JSON e aguardando pelo objeto de dados resultante.
    const dados = await resposta.json(); 

    // Verificando se a resposta HTTP foi bem-sucedida (código de status HTTP 200-299).
    if (resposta.ok) {
      // imprimindo os resultados dos filmes encontrados no console.
      console.log('Filmes encontrados:', dados.results); 
    } else {
      // Caso a resposta HTTP indique um erro, loga a mensagem de erro retornada pela API.
      console.log('Erro na requisição:', dados.status_message); 
    }
  // Caso ocorra um erro (como uma falha na rede), loga a mensagem de erro no console.
  } catch (erro) {
    console.log('Erro ao tentar buscar os filmes:', erro.message); 
  }
}

// Utilizando a função getMovies para buscar por "The Matrix Reloaded" e logar os resultados no console.
getMovies('The Matrix Reloaded'); 
