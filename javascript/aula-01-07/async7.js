const axiosRequest = require("axios");

async function getActivity() {
  try {
    let response = await axiosRequest.get('https://httpstat.us/500')
    console.log(`Você pode fazer essa atividade: ${response.data.activity}`);
  } catch (error) {
    console.log(`Deu o erro: ${error}`);
  }
}

getActivity();

console.log("Fim do código");
