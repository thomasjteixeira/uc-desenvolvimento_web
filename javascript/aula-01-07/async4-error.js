const axiosRequest = require("axios");

axiosRequest
  .get("https://httpstat.us/404")
  .then((response) => {
    console.log(`Você pode fazer essa atividade: ${response.data.activity}`);
  })
  .catch((error) => {
    console.log(`Deu o erro: ${error}`);
  });
