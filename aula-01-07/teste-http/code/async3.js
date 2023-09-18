const axiosRequest = require("axios");

axiosRequest
  .get("https://www.boredapi.com/api/activity/")
  .then((response) => {
    console.log(`Você pode fazer essa atividade: ${response.data.activity}`);
  })
  .catch((error) => {
    console.log(`Deu o erro: ${error}`);
  });

console.log("Fim do código");
