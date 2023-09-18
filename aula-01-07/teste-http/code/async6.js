const axiosRequest = require("axios");

async function getActivity() {
  let response = await axiosRequest.get(
    "https://www.boredapi.com/api/activity/"
  );
  console.log(`Você pode fazer essa atividade: ${response.data.activity}`);
}

getActivity();

console.log("Fim do código");

